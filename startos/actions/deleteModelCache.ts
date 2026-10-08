import { rm } from 'node:fs/promises'
import { join } from 'node:path'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import {
  cacheDir,
  entryLabel,
  formatBytes,
  listCacheEntries,
  repoFolderName,
} from '../modelCache'
import { sdk } from '../sdk'
import { hfDraftRepoFlags, hfRepoFlags, lastOptionValue } from '../utils'

const { InputSpec, Value } = sdk

// Cache folders of the configured main and draft models, last flag winning
// as in llama-server. It keeps them open, so deleting one would free nothing
// until a restart, which downloads it again.
async function inUseEntries(): Promise<Set<string>> {
  const serveArgs = (await storeJson.read((s) => s?.serveArgs).once()) ?? []
  const repos = [hfRepoFlags, hfDraftRepoFlags]
    .map((flags) => lastOptionValue(serveArgs, flags)?.split(':')[0])
    .filter((repo): repo is string => Boolean(repo))
  return new Set(repos.map(repoFolderName))
}

const inputSpec = InputSpec.of({
  model: Value.dynamicSelect(async () => {
    const entries = await listCacheEntries()
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
      default: null,
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
    const entry = (await listCacheEntries()).find((e) => e.name === name)
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
