import { utils } from '@start9labs/start-sdk'
import { models, type ModelPreset } from './actions/presets'
import type { ModelRef } from './fileModels/store.json'
import {
  isCached,
  parseTarget,
  repoFolderName,
  sameModel,
  type CachedModel,
  type ServeTarget,
} from './modelCache'

export const apiPort = 8080

export const apiHostId = 'api-multi'

export const apiKeyHostId = 'api-key'

export const uiUsername = 'admin'

export const generateApiKey = () =>
  utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })

export const variant = (process.env.VARIANT || 'generic') as
  | 'generic'
  | 'nvidia'
  | 'rocm'
  | 'vulkan'

export const isGpuVariant = variant !== 'generic'

export const hfRepoFlags = ['-hf', '-hfr', '--hf-repo']

export const hfFileFlags = ['-hff', '--hf-file']

export const hfDraftRepoFlags = [
  '--spec-draft-hf',
  '-hfd',
  '-hfrd',
  '--hf-repo-draft',
]

export function lastOptionValue(args: string[], flags: string[]) {
  let value: string | undefined
  for (let i = 0; i < args.length; i++) {
    // llama-server accepts underscores in long option names.
    const flag = args[i].startsWith('--')
      ? args[i].replaceAll('_', '-')
      : args[i]
    if (flags.includes(flag)) value = args[++i]
  }
  return value
}

// Every repo the preset has served, current first.
const presetTargets = (preset: ModelPreset) => [
  parseTarget(preset.hfRepo, preset.hfFile),
  ...(preset.formerRepos ?? []).map((repo) => parseTarget(repo)),
]

export const matchingPreset = (target: ServeTarget, cached: CachedModel[]) =>
  models.find((m) => presetTargets(m).some((t) => sameModel(target, t, cached)))

export function refTargets(ref: ModelRef | null | undefined): ServeTarget[] {
  if (ref?.preset) {
    const preset = models.find((m) => m.id === ref.preset)
    return preset ? presetTargets(preset) : []
  }
  return ref?.hfRepo ? [parseTarget(ref.hfRepo, ref.hfFile)] : []
}

// The current repo, unless only a former one has the weights cached.
export function refTarget(
  ref: ModelRef | null | undefined,
  cached: CachedModel[],
): ServeTarget | undefined {
  const targets = refTargets(ref)
  return targets.find((t) => isCached(t, cached)) ?? targets[0]
}

// Whether two saved refs name the same model: a preset matches its own id
// and any repo target that resolves to it.
export function sameRef(a: ModelRef, b: ModelRef, cached: CachedModel[]) {
  if (a.preset || b.preset) {
    const [preset, other] = a.preset ? [a, b] : [b, a]
    if (other.preset) return other.preset === preset.preset
    return (
      !!other.hfRepo &&
      matchingPreset(parseTarget(other.hfRepo, other.hfFile), cached)?.id ===
        preset.preset
    )
  }
  return (
    !!a.hfRepo &&
    !!b.hfRepo &&
    sameModel(
      parseTarget(a.hfRepo, a.hfFile),
      parseTarget(b.hfRepo, b.hfFile),
      cached,
    )
  )
}

const targetArgs = (target: ServeTarget) => [
  '-hf',
  target.quant ? `${target.repo}:${target.quant}` : target.repo,
  ...(target.file ? ['-hff', target.file] : []),
]

// The llama-server arguments the saved model and settings resolve to.
export function serveArgsOf(
  store: { model?: ModelRef; settingsArgs?: string[] } | null | undefined,
  cached: CachedModel[],
) {
  const target = refTarget(store?.model, cached)
  return target && [...targetArgs(target), ...(store?.settingsArgs ?? [])]
}

type SavedModel = { model?: ModelRef; settingsArgs?: string[] }

// Cache folders of the main and draft repos llama-server will load: the last
// flag wins, so an override in the extra arguments counts.
function effectiveCacheEntries(
  store: SavedModel | null | undefined,
  cached: CachedModel[],
) {
  const serveArgs = serveArgsOf(store, cached) ?? []
  const repos = [hfRepoFlags, hfDraftRepoFlags]
    .map((flags) => lastOptionValue(serveArgs, flags)?.split(':')[0])
    .filter((repo): repo is string => Boolean(repo))
  return new Set(repos.map(repoFolderName))
}

// Those, plus every cached repo of a selected preset, since a download can
// change which one the next start resolves to.
export function cacheEntriesInUse(
  store: SavedModel | null | undefined,
  cached: CachedModel[],
) {
  const entries = effectiveCacheEntries(store, cached)
  for (const target of refTargets(store?.model)) {
    if (isCached(target, cached)) entries.add(repoFolderName(target.repo))
  }
  return entries
}

// Cache folders of a selected preset's former repos once its current repo is
// cached. A folder that also holds other files, or is loaded anyway, is kept.
export function supersededCopies(
  store: SavedModel | null | undefined,
  cached: CachedModel[],
) {
  const [current, ...former] = refTargets(store?.model)
  if (!store?.model?.preset || !current || !isCached(current, cached)) return []
  const inUse = effectiveCacheEntries(store, cached)
  return former
    .filter(
      (target) =>
        !inUse.has(repoFolderName(target.repo)) &&
        cached
          .filter((c) => c.repo === target.repo)
          .every((c) => sameModel(c, target, cached)),
    )
    .map((target) => repoFolderName(target.repo))
}
