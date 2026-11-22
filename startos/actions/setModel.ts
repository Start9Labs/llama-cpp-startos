import { T } from '@start9labs/start-sdk'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson, type ModelRef } from '../fileModels/store.json'
import { detectHardware } from '../hardware'
import {
  listCachedModels,
  parseTarget,
  repoFolderName,
  targetFile,
  type CachedModel,
} from '../modelCache'
import { isGpuVariant, matchingPreset, sameRef } from '../utils'
import { models } from './presets'

const { InputSpec, Value, Variants } = sdk

const cachedPrefix = 'cached:'
const cachedCtx = 8192
const defaultNgl = 999

const cachedId = (repo: string, file: string) =>
  `${cachedPrefix}${repoFolderName(repo)}:${file}`

type ModelSettings = { ctx: number; ngl: number; extraArgs?: string }

type SavedSettings = ModelSettings & ModelRef

type Store = NonNullable<Awaited<ReturnType<typeof readStore>>>

const readStore = (effects: T.Effects) => storeJson.read().const(effects)

const cachedRef = (c: CachedModel): ModelRef => ({
  hfRepo: c.repo,
  hfFile: c.file,
})

// The settings this model was last run with. Stores written before
// `modelSettings` existed only have the last Custom submission.
function settingsFor(
  ref: ModelRef,
  store: Store | null,
  cached: CachedModel[],
): ModelSettings | undefined {
  const candidates: SavedSettings[] = [
    ...(store?.modelSelection?.custom ? [store.modelSelection.custom] : []),
    ...(store?.modelSettings ?? []),
  ]
  const saved = candidates.filter((s) => sameRef(s, ref, cached)).pop()
  return saved && { ctx: saved.ctx, ngl: saved.ngl, extraArgs: saved.extraArgs }
}

// The dropdown entry that matches the model actually running, if it is one of
// ours. A Custom entry that has since been downloaded resolves to its cache
// entry, so the running model shows up once rather than as a duplicate next to
// a Custom.
function inUseVariantId(
  ref: ModelRef | undefined,
  cached: CachedModel[],
): string | null {
  if (ref?.preset) {
    return models.some((m) => m.id === ref.preset) ? ref.preset : null
  }
  if (!ref?.hfRepo) return null
  const target = parseTarget(ref.hfRepo, ref.hfFile)
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
        'A HuggingFace GGUF repo, optionally with a quant tag (e.g. Qwen/Qwen2.5-7B-Instruct-GGUF:Q4_K_M).',
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
            settingsFor(cachedRef(c), store, allCached) ?? {
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
                settingsFor({ preset: m.id }, store, allCached) ?? {
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
    const inUseId = inUseVariantId(store?.model, allCached)
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

function settingsArgsFor(settings: ModelSettings): string[] {
  const args: string[] = []
  if (settings.ctx > 0) args.push('-c', String(settings.ctx))
  if (isGpuVariant) args.push('-ngl', String(settings.ngl))
  if (settings.extraArgs) {
    args.push(...settings.extraArgs.split(/\s+/).filter(Boolean))
  }
  return args
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
    const running = store?.model
    const inUseId = inUseVariantId(running, cached)
    const saved = store?.modelSelection
    // Keep the Custom fields around so switching to Custom is still prefilled.
    const other = saved?.custom ? { other: { custom: saved.custom } } : {}
    if (running && inUseId) {
      const settings = settingsFor(running, store, cached)
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
    const match = cached.find((c) => cachedId(c.repo, c.file) === selection)
    const selected = models.some((m) => m.id === selection)
      ? { preset: selection }
      : match && cachedRef(match)
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
    const running = store?.model
    const settings: ModelSettings = {
      ctx: config.value.ctx,
      ngl: config.value.ngl,
      extraArgs: config.value.extraArgs?.trim() || undefined,
    }
    let model: ModelRef
    if (config.selection === 'custom') {
      model = {
        hfRepo: config.value.hfRepo.trim(),
        hfFile: config.value.hfFile?.trim() || undefined,
      }
    } else if (config.selection.startsWith(cachedPrefix)) {
      const match = cached.find(
        (c) => cachedId(c.repo, c.file) === config.selection,
      )
      if (!match) {
        throw new Error(
          i18n('That downloaded model is no longer in the cache.'),
        )
      }
      model = cachedRef(match)
    } else {
      if (!models.some((m) => m.id === config.selection)) {
        throw new Error(`Unknown preset: ${config.selection}`)
      }
      model = { preset: config.selection }
    }
    // Cached selections keep their running repo/file; Custom honors its input.
    if (
      config.selection.startsWith(cachedPrefix) &&
      running &&
      !running.preset &&
      sameRef(running, model, cached)
    ) {
      model = running
    }

    // Every key is written so a preset and a repo never mix in the merge.
    const modelRef = {
      preset: model.preset,
      hfRepo: model.hfRepo,
      hfFile: model.hfFile,
    }
    await storeJson.merge(effects, {
      model: modelRef,
      settingsArgs: settingsArgsFor(settings),
      modelSelection: {
        selection: config.selection,
        custom:
          config.selection === 'custom' && model.hfRepo
            ? { hfRepo: model.hfRepo, hfFile: model.hfFile, ...settings }
            : store?.modelSelection?.custom,
      },
      modelSettings: [
        ...(store?.modelSettings ?? []).filter(
          (s) => !sameRef(s, model, cached),
        ),
        { ...modelRef, ...settings },
      ],
    })
  },
)
