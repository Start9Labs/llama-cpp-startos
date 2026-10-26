import { T } from '@start9labs/start-sdk'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { detectHardware } from '../hardware'
import {
  listCachedModels,
  repoFolderName,
  type CachedModel,
} from '../modelCache'
import {
  hfFileFlags,
  hfRepoFlags,
  isGpuVariant,
  lastOptionValue,
} from '../utils'
import { models, type ModelPreset } from './presets'

const { InputSpec, Value, Variants } = sdk

const cachedPrefix = 'cached:'
const cachedCtx = 8192
const defaultNgl = 999

const cachedId = (repo: string, file: string) =>
  `${cachedPrefix}${repoFolderName(repo)}:${file}`

type ServeTarget = { repo: string; quant?: string; file?: string }

type ModelSettings = { ctx: number; ngl: number; extraArgs?: string }

type SavedSettings = ModelSettings & { hfRepo: string; hfFile?: string }

type Store = NonNullable<Awaited<ReturnType<typeof readStore>>>

const readStore = (effects: T.Effects) => storeJson.read().const(effects)

// `repo:QUANT` plus an optional explicit file, as given to `-hf`/`-hff`.
function parseTarget(hfRepo: string, hfFile?: string): ServeTarget {
  const [repo, quant] = hfRepo.split(':')
  return { repo, quant: quant || undefined, file: hfFile || undefined }
}

const presetTarget = (model: ModelPreset) =>
  parseTarget(model.hfRepo, model.hfFile)

// The repo, optional quant tag, and optional explicit file the daemon was last
// started with. Custom entries are written as `repo:QUANT` with no `-hff`, so
// the quant tag is what identifies the running file.
function serveTarget(store: Store | null): ServeTarget | null {
  const serveArgs = store?.serveArgs ?? []
  const repoArg = lastOptionValue(serveArgs, hfRepoFlags)
  if (!repoArg) return null
  return parseTarget(repoArg, lastOptionValue(serveArgs, hfFileFlags))
}

// The cached file the target refers to. An explicit `-hff` wins; otherwise the
// quant tag picks the first file containing `<QUANT>.` or `<QUANT>-`, the same
// match llama-server uses to resolve `repo:QUANT` (find_best_model in
// common/download.cpp). Without a tag, only a single cached file resolves.
function targetFile(
  target: ServeTarget,
  cached: CachedModel[],
): string | undefined {
  if (target.file) return target.file
  const files = cached.filter((c) => c.repo === target.repo).map((c) => c.file)
  if (target.quant) {
    const tag = target.quant.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern = new RegExp(`${tag}[.-]`, 'i')
    return files.find((f) => pattern.test(f))
  }
  return files.length === 1 ? files[0] : undefined
}

// Whether two targets name the same weights: the same cached file once both
// resolve to one, otherwise the same quant tag with no explicit file.
function sameModel(a: ServeTarget, b: ServeTarget, cached: CachedModel[]) {
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

function matchingPreset(target: ServeTarget, cached: CachedModel[]) {
  return models.find((model) => sameModel(target, presetTarget(model), cached))
}

// The settings this model was last run with. Stores written before
// `modelSettings` existed only have the last Custom submission.
function settingsFor(
  target: ServeTarget,
  store: Store | null,
  cached: CachedModel[],
): ModelSettings | undefined {
  const candidates: SavedSettings[] = [
    ...(store?.modelSelection?.custom ? [store.modelSelection.custom] : []),
    ...(store?.modelSettings ?? []),
  ]
  const saved = candidates
    .filter((s) => sameModel(target, parseTarget(s.hfRepo, s.hfFile), cached))
    .pop()
  return saved && { ctx: saved.ctx, ngl: saved.ngl, extraArgs: saved.extraArgs }
}

// The dropdown entry that matches the model actually running, if it is one of
// ours. A Custom entry that has since been downloaded resolves to its cache
// entry, so the running model shows up once rather than as a duplicate next to
// a Custom.
function inUseVariantId(
  target: ServeTarget | null,
  cached: CachedModel[],
): string | null {
  if (!target) return null
  const preset = matchingPreset(target, cached)
  if (preset) return preset.id
  const file = targetFile(target, cached)
  if (!file) return null
  const match = cached.find((c) => c.repo === target.repo && c.file === file)
  return match ? cachedId(match.repo, match.file) : null
}

// Context, GPU layers and extra flags, prefilled with `defaults`. Shared by
// every entry so each model keeps its own.
const settingsFields = (defaults: ModelSettings) => ({
  ctx: Value.number({
    name: i18n('Context size'),
    description: i18n(
      'Maximum context length in tokens. 0 uses the model default.',
    ),
    required: true,
    default: defaults.ctx,
    min: 0,
    max: 1024 * 1024,
    step: 1,
    integer: true,
  }),
  ngl: Value.number({
    name: i18n('GPU layers'),
    description: i18n(
      'Number of model layers to offload to GPU. Use a large value (e.g. 999) to offload everything; ignored on the generic CPU variant.',
    ),
    required: true,
    default: defaults.ngl,
    min: 0,
    max: 999,
    step: 1,
    integer: true,
  }),
  extraArgs: Value.text({
    name: i18n('Extra arguments'),
    description: i18n(
      'Additional llama-server flags, space-separated. Advanced — split on whitespace, so quoted values will not survive.',
    ),
    required: false,
    default: defaults.extraArgs ?? null,
  }),
})

const customVariant = {
  name: i18n('Custom'),
  spec: InputSpec.of({
    hfRepo: Value.text({
      name: i18n('HuggingFace repo'),
      description: i18n(
        'A HuggingFace GGUF repo, optionally with a quant tag (e.g. unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M).',
      ),
      required: true,
      default: null,
    }),
    hfFile: Value.text({
      name: i18n('HuggingFace file (optional)'),
      description: i18n(
        'Specific GGUF filename inside the repo. Leave empty to let llama-server pick.',
      ),
      required: false,
      default: null,
    }),
    ...settingsFields({ ctx: cachedCtx, ngl: defaultNgl }),
  }),
}

const inputSpec = InputSpec.of({
  config: Value.dynamicUnion(async ({ effects }) => {
    const { memoryGB } = await detectHardware(effects)
    const enabledPresets = models.filter((m) => memoryGB >= m.minMemoryGB)
    const store = await readStore(effects)
    // Anything already on disk can be selected again without re-downloading.
    // Preset files are left out because their entry is already in the list.
    const allCached = await listCachedModels()
    const cached = allCached.filter((c) => !matchingPreset(c, allCached))
    // Label by repo alone when it has one cached file; append the file only
    // when a repo has several, where it is needed to tell them apart.
    const filesPerRepo = new Map<string, number>()
    for (const c of cached) {
      filesPerRepo.set(c.repo, (filesPerRepo.get(c.repo) ?? 0) + 1)
    }
    const cachedVariants = cached.map((c) => [
      cachedId(c.repo, c.file),
      {
        name:
          (filesPerRepo.get(c.repo) ?? 0) > 1
            ? `${c.repo} · ${c.file}`
            : c.repo,
        spec: InputSpec.of(
          settingsFields(
            settingsFor(c, store, allCached) ?? {
              ctx: cachedCtx,
              ngl: defaultNgl,
            },
          ),
        ),
      },
    ])

    const variants: Record<string, { name: string; spec: any }> = {
      ...Object.fromEntries(
        models.map((m) => [
          m.id,
          {
            name: i18n(m.displayName),
            spec: InputSpec.of(
              settingsFields(
                settingsFor(presetTarget(m), store, allCached) ?? {
                  ctx: m.defaultCtx,
                  ngl: defaultNgl,
                },
              ),
            ),
          },
        ]),
      ),
      ...Object.fromEntries(cachedVariants),
      custom: customVariant,
    }

    // The running model stays selectable so its settings can be changed;
    // submitting it unchanged writes the same arguments and does not restart.
    const inUseId = inUseVariantId(serveTarget(store), allCached)
    const enabledIds = new Set<string>([
      ...enabledPresets.map((m) => m.id),
      ...cachedVariants.map(([id]) => id as string),
      'custom',
    ])
    const disabledIds = Object.keys(variants).filter(
      (id) => !enabledIds.has(id),
    )
    const defaultId =
      (inUseId && enabledIds.has(inUseId) ? inUseId : undefined) ??
      enabledPresets[0]?.id ??
      cachedVariants[0]?.[0] ??
      'custom'

    return {
      name: i18n('Configuration'),
      description: [
        i18n("Presets too large for this server's memory are disabled."),
        ...models.map(
          (m) =>
            `- ${i18n(m.displayName)}: ${i18n('needs about ${memory} GB of memory', { memory: m.minMemoryGB })}`,
        ),
        `- ${i18n('Custom')}: ${i18n('any HuggingFace GGUF model, with your own context size, GPU layers and server flags')}`,
      ].join('\n'),
      variants: Variants.of(variants),
      default: defaultId as string,
      disabled: disabledIds.length > 0 ? disabledIds : false,
    }
  }),
})

// The settings as form values; the text field takes null, not undefined.
const settingsValue = (s: ModelSettings) => ({
  ctx: s.ctx,
  ngl: s.ngl,
  extraArgs: s.extraArgs ?? null,
})

function serveArgsFor(
  hfRepo: string,
  hfFile: string | undefined,
  settings: ModelSettings,
): string[] {
  const serveArgs = ['-hf', hfRepo]
  if (hfFile) serveArgs.push('-hff', hfFile)
  if (settings.ctx > 0) serveArgs.push('-c', String(settings.ctx))
  if (isGpuVariant) serveArgs.push('-ngl', String(settings.ngl))
  if (settings.extraArgs) {
    serveArgs.push(...settings.extraArgs.split(/\s+/).filter(Boolean))
  }
  return serveArgs
}

export const setModel = sdk.Action.withInput(
  'set-model',

  async ({ effects }) => ({
    name: i18n('Set Model'),
    description: i18n(
      'Pick a curated GGUF preset sized for your hardware, or supply a custom HuggingFace model. The model will be downloaded on first startup if not already cached.',
    ),
    warning: i18n(
      'Changing the model will restart the service and may require downloading a new model.',
    ),
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => {
    const store = await readStore(effects)
    const cached = await listCachedModels()
    const target = serveTarget(store)
    const inUseId = inUseVariantId(target, cached)
    const saved = store?.modelSelection
    // Keep the Custom fields around so switching to Custom is still prefilled.
    const other = saved?.custom ? { other: { custom: saved.custom } } : {}
    if (target && inUseId) {
      const settings = settingsFor(target, store, cached)
      return {
        config: {
          selection: inUseId,
          value: settings ? settingsValue(settings) : {},
          ...other,
        },
      }
    }
    if (!saved) return {}
    const selection = saved.selection
    if (selection === 'custom') {
      return { config: { selection, value: saved.custom ?? {} } }
    }
    const preset = models.find((m) => m.id === selection)
    const selected = preset
      ? presetTarget(preset)
      : cached.find((c) => cachedId(c.repo, c.file) === selection)
    if (!selected) return {}
    const settings = settingsFor(selected, store, cached)
    return {
      config: {
        selection,
        value: settings ? settingsValue(settings) : {},
        ...other,
      },
    }
  },

  async ({ effects, input }) => {
    const config = input.config
    const store = await storeJson.read().once()
    const cached = await listCachedModels()
    const running = serveTarget(store)
    const settings: ModelSettings = {
      ctx: config.value.ctx,
      ngl: config.value.ngl,
      extraArgs: config.value.extraArgs?.trim() || undefined,
    }
    let hfRepo: string
    let hfFile: string | undefined
    if (config.selection === 'custom') {
      hfRepo = config.value.hfRepo.trim()
      hfFile = config.value.hfFile?.trim() || undefined
    } else {
      let target: ServeTarget
      if (config.selection.startsWith(cachedPrefix)) {
        const match = cached.find(
          (c) => cachedId(c.repo, c.file) === config.selection,
        )
        if (!match) {
          throw new Error(
            i18n('That downloaded model is no longer in the cache.'),
          )
        }
        target = match
      } else {
        const preset = models.find((m) => m.id === config.selection)
        if (!preset) {
          throw new Error(`Unknown preset: ${config.selection}`)
        }
        target = presetTarget(preset)
      }
      // Already the running model: keep the repo and file arguments as they
      // were written, so unchanged settings yield identical serveArgs and no
      // restart.
      if (running && sameModel(running, target, cached)) target = running
      hfRepo = target.quant ? `${target.repo}:${target.quant}` : target.repo
      hfFile = target.file
    }

    const newTarget = parseTarget(hfRepo, hfFile)
    const modelSettings: SavedSettings[] = [
      ...(store?.modelSettings ?? []).filter(
        (s) => !sameModel(parseTarget(s.hfRepo, s.hfFile), newTarget, cached),
      ),
      { hfRepo, hfFile, ...settings },
    ]
    await storeJson.merge(effects, {
      serveArgs: serveArgsFor(hfRepo, hfFile, settings),
      modelSelection: {
        selection: config.selection,
        custom:
          config.selection === 'custom'
            ? { hfRepo, hfFile, ...settings }
            : store?.modelSelection?.custom,
      },
      modelSettings,
    })
  },
)
