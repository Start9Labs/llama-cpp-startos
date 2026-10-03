import { lstat, readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

// llama-server's LLAMA_CACHE (see main.ts), as seen from the action.
const cacheDir = sdk.volumes.main.subpath('models')

// llama.cpp stores `-hf` downloads in the HuggingFace hub layout
// (common/hf-cache.cpp): `models--<org>--<repo>/` holding `blobs/` (the
// weights) and `snapshots/<commit>/<file>` symlinks into them. Deleting a
// snapshot file frees nothing, so a model is deleted as its whole repo
// folder. Loose `*.gguf` files are the flat layout of older builds.
const repoPrefix = 'models--'
const isCacheEntry = (name: string) =>
  name.startsWith(repoPrefix) || name.endsWith('.gguf')

const entryLabel = (name: string) =>
  name.startsWith(repoPrefix)
    ? name.slice(repoPrefix.length).replaceAll('--', '/')
    : name

async function diskUsage(path: string): Promise<number> {
  const stat = await lstat(path)
  if (!stat.isDirectory()) return stat.size
  let total = 0
  for (const child of await readdir(path)) {
    total += await diskUsage(join(path, child))
  }
  return total
}

function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let value = bytes
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit++
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`
}

async function listCache(): Promise<{ name: string; bytes: number }[]> {
  let names: string[]
  try {
    names = await readdir(cacheDir)
  } catch (e: any) {
    if (e.code === 'ENOENT') return []
    throw e
  }
  const entries = []
  for (const name of names.filter(isCacheEntry).sort()) {
    entries.push({ name, bytes: await diskUsage(join(cacheDir, name)) })
  }
  return entries
}

// Cache folders of the configured main and draft models, last flag winning
// as in llama-server. It keeps them open, so deleting one would free nothing
// until a restart, which downloads it again.
async function inUseEntries(): Promise<Set<string>> {
  const serveArgs = (await storeJson.read((s) => s?.serveArgs).once()) ?? []
  const repoOptions = [
    ['-hf', '-hfr', '--hf-repo'],
    ['--spec-draft-hf', '-hfd', '-hfrd', '--hf-repo-draft'],
  ]
  const repos = new Map<number, string>()
  for (let i = 0; i < serveArgs.length; i++) {
    const model = repoOptions.findIndex((flags) => flags.includes(serveArgs[i]))
    if (model < 0) continue
    const repo = serveArgs[++i]?.split(':')[0]
    if (repo) repos.set(model, repo)
  }
  return new Set(
    Array.from(
      repos.values(),
      (repo) => repoPrefix + repo.replaceAll('/', '--'),
    ),
  )
}

const inputSpec = InputSpec.of({
  model: Value.dynamicSelect(async () => {
    const entries = await listCache()
    const inUse = await inUseEntries()
    const values: Record<string, string> = {}
    for (const { name, bytes } of entries) {
      values[name] = `${entryLabel(name)} (${formatBytes(bytes)})`
    }
    const deletable = entries.filter((e) => !inUse.has(e.name))
    return {
      name: i18n('Cached model'),
      description:
        entries.length > 0
          ? i18n(
              'Every downloaded file of the selected HuggingFace repo is removed. The model currently in use cannot be deleted; switch to another model first.',
            )
          : i18n('The model cache is empty.'),
      values,
      default: deletable[0]?.name ?? '',
      disabled:
        entries.length > deletable.length
          ? entries.filter((e) => inUse.has(e.name)).map((e) => e.name)
          : false,
    }
  }),
})

export const deleteModelCache = sdk.Action.withInput(
  'delete-model-cache',

  async ({ effects }) => ({
    name: i18n('Delete Model Cache'),
    description: i18n(
      'Remove a downloaded GGUF model from the cache to free up disk space',
    ),
    warning: i18n(
      'This will permanently delete the cached model. It will be re-downloaded if selected again.',
    ),
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => {},

  async ({ effects, input }) => {
    const name = input.model
    const entry = (await listCache()).find((e) => e.name === name)
    if (!entry) {
      throw new Error(i18n('That model is no longer in the cache.'))
    }
    if ((await inUseEntries()).has(name)) {
      throw new Error(
        i18n(
          'This model is currently in use. Switch to another model with "Set Model" first.',
        ),
      )
    }

    await rm(join(cacheDir, name), { recursive: true })

    return {
      version: '1' as const,
      title: i18n('Model Deleted'),
      message: i18n('Removed ${model}, freeing ${size}.', {
        model: entryLabel(name),
        size: formatBytes(entry.bytes),
      }),
      result: null,
    }
  },
)
