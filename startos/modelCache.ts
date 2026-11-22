import { lstat, readdir, stat } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
import { sdk } from './sdk'

// llama-server's LLAMA_CACHE (see main.ts), as seen from the action.
export const cacheDir = sdk.volumes.main.subpath('models')

// llama.cpp stores `-hf` downloads in the HuggingFace hub layout
// (common/hf-cache.cpp): `models--<org>--<repo>/` holding `blobs/` (the
// weights) and `snapshots/<commit>/<file>` symlinks into them. Deleting a
// snapshot file frees nothing, so a model is deleted as its whole repo
// folder. Loose `*.gguf` files are the flat layout of older builds.
export const repoPrefix = 'models--'

export const isCacheEntry = (name: string) =>
  name.startsWith(repoPrefix) || name.endsWith('.gguf')

export const entryLabel = (name: string) =>
  name.startsWith(repoPrefix)
    ? name.slice(repoPrefix.length).replaceAll('--', '/')
    : name

export const repoFolderName = (repo: string) =>
  repoPrefix + repo.replaceAll('/', '--')

export async function readdirSafe(path: string): Promise<string[]> {
  try {
    return await readdir(path)
  } catch (e: any) {
    if (e.code === 'ENOENT') return []
    throw e
  }
}

async function diskUsage(path: string): Promise<number> {
  const stat = await lstat(path)
  if (!stat.isDirectory()) return stat.size
  let total = 0
  for (const child of await readdir(path)) {
    total += await diskUsage(join(path, child))
  }
  return total
}

export async function listCacheEntries(): Promise<
  { name: string; bytes: number }[]
> {
  const entries = []
  for (const name of (await readdirSafe(cacheDir))
    .filter(isCacheEntry)
    .sort()) {
    entries.push({ name, bytes: await diskUsage(join(cacheDir, name)) })
  }
  return entries
}

export type CachedModel = { repo: string; file: string }

export type ServeTarget = { repo: string; quant?: string; file?: string }

// `repo:QUANT` plus an optional explicit file, as given to `-hf`/`-hff`.
export function parseTarget(hfRepo: string, hfFile?: string): ServeTarget {
  const [repo, quant] = hfRepo.split(':')
  return { repo, quant: quant || undefined, file: hfFile || undefined }
}

// The cached file the target refers to. An explicit `-hff` wins; otherwise the
// quant tag matches a full token, excluding BF16 for F16, as llama-server
// resolves `repo:QUANT` (find_best_model in
// common/download.cpp). Without a tag, only a single cached file resolves.
export function targetFile(
  target: ServeTarget,
  cached: CachedModel[],
): string | undefined {
  if (target.file) return target.file
  const files = cached.filter((c) => c.repo === target.repo).map((c) => c.file)
  if (target.quant) {
    const tag = target.quant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern = new RegExp(`(^|[-./])${tag}[.-]`, 'i')
    return files.find((f) => pattern.test(f))
  }
  return files.length === 1 ? files[0] : undefined
}

export function isCached(target: ServeTarget, cached: CachedModel[]) {
  const file = targetFile(target, cached)
  return cached.some((c) => c.repo === target.repo && c.file === file)
}

// Whether two targets name the same weights: the same cached file once both
// resolve to one, otherwise the same quant tag with no explicit file.
export function sameModel(
  a: ServeTarget,
  b: ServeTarget,
  cached: CachedModel[],
) {
  if (a.repo !== b.repo) return false
  const fileA = targetFile(a, cached)
  const fileB = targetFile(b, cached)
  if (fileA && fileB) return fileA === fileB
  return (
    !a.file &&
    !b.file &&
    (a.quant ?? '').toLowerCase() === (b.quant ?? '').toLowerCase()
  )
}

function isModelStart(file: string): boolean {
  if (!file.endsWith('.gguf')) return false
  const name = basename(file)
  if (
    ['mmproj', 'imatrix', 'mtp-', 'eagle3-', 'dflash-', 'dspark-'].some(
      (sidecar) => name.includes(sidecar),
    )
  ) {
    return false
  }
  const split = name.match(/^.+-([0-9]{5})-of-([0-9]{5})\.gguf$/i)
  return !split || Number(split[2]) <= 1 || Number(split[1]) === 1
}

const isFile = (path: string) =>
  stat(path).then(
    (info) => info.isFile(),
    (e: NodeJS.ErrnoException) => {
      if (e.code === 'ENOENT') return false
      throw e
    },
  )

// A split model counts only with every part on disk: an interrupted download
// leaves the first part without the rest.
async function isComplete(path: string) {
  const split = basename(path).match(/^(.+-)00001-of-([0-9]{5})(\.gguf)$/i)
  if (!split) return isFile(path)
  const [, stem, total, ext] = split
  for (let part = 1; part <= Number(total); part++) {
    const name = `${stem}${String(part).padStart(5, '0')}-of-${total}${ext}`
    if (!(await isFile(join(dirname(path), name)))) return false
  }
  return true
}

async function snapshotFiles(
  path: string,
  files: Set<string>,
  relative = '',
): Promise<void> {
  if (!(await lstat(path)).isDirectory()) return
  for (const name of await readdirSafe(path)) {
    const child = join(path, name)
    const file = join(relative, name)
    const info = await lstat(child)
    if (info.isDirectory()) {
      await snapshotFiles(child, files, file)
    } else if (isModelStart(file) && (await isComplete(child))) {
      files.add(file)
    }
  }
}

// Every model-start GGUF a cached repo has on disk, deduplicated across snapshot
// commits. The repo folder encodes only the repo, not the quant, so the
// file has to be passed explicitly (`-hff`) to reuse the downloaded weights
// instead of letting llama-server fetch a different quant.
export async function listCachedModels(): Promise<CachedModel[]> {
  const cached: CachedModel[] = []
  for (const name of (await readdirSafe(cacheDir))
    .filter((n) => n.startsWith(repoPrefix))
    .sort()) {
    const repoPath = join(cacheDir, name)
    if (!(await lstat(repoPath)).isDirectory()) continue
    const repo = entryLabel(name)
    const snapshots = join(repoPath, 'snapshots')
    const snapshotInfo = await lstat(snapshots).catch(
      (e: NodeJS.ErrnoException) => {
        if (e.code === 'ENOENT') return null
        throw e
      },
    )
    if (!snapshotInfo?.isDirectory()) continue
    const files = new Set<string>()
    for (const commit of await readdirSafe(snapshots)) {
      await snapshotFiles(join(snapshots, commit), files)
    }
    for (const file of Array.from(files).sort()) cached.push({ repo, file })
  }
  return cached
}

export function formatBytes(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let value = bytes
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit++
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`
}
