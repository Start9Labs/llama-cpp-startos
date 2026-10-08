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
import { models } from './presets'

const { InputSpec, Value, Variants } = sdk

const cachedPrefix = 'cached:'
const cachedCtx = 8192

const cachedId = (repo: string, file: string) =>
  `${cachedPrefix}${repoFolderName(repo)}:${file}`

type ServeTarget = { repo: string; quant?: string; file?: string }

// The repo, optional quant tag, and optional explicit file the daemon was last
// started with. Custom entries are written as `repo:QUANT` with no `-hff`, so
// the quant tag is what identifies the running file.
async function serveTarget(effects: T.Effects): Promise<ServeTarget | null> {
  const serveArgs =
    (await storeJson.read((s) => s?.serveArgs).const(effects)) ?? []
  const repoArg = lastOptionValue(serveArgs, hfRepoFlags)
  if (!repoArg) return null
  const [repo, quant] = repoArg.split(':')
  return {
    repo,
    quant: quant || undefined,
    file: lastOptionValue(serveArgs, hfFileFlags),
  }
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

function matchingPreset(target: ServeTarget, cached: CachedModel[]) {
  const file = targetFile(target, cached)
  return models.find((model) => {
    const [repo, quant] = model.hfRepo.split(':')
    if (repo !== target.repo) return false
    const presetTarget = { repo, quant, file: model.hfFile }
    const presetFile = targetFile(presetTarget, cached)
    if (file && presetFile) return file === presetFile
    return (
      !target.file &&
      !model.hfFile &&
      (target.quant ?? '').toLowerCase() === (quant ?? '').toLowerCase()
    )
  })
}

// The dropdown entry that matches the model actually running, if it is one of
// ours. A Custom entry that has since been downloaded resolves to its cache
// entry, so the running model shows up checked and disabled rather than as a
// duplicate next to a checked Custom.
async function inUseVariantId(effects: T.Effects): Promise<string | null> {
  const target = await serveTarget(effects)
  if (!target) return null
  const cached = await listCachedModels()
  const preset = matchingPreset(target, cached)
  if (preset) return preset.id
  const file = targetFile(target, cached)
  if (!file) return null
  const match = cached.find((c) => c.repo === target.repo && c.file === file)
  return match ? cachedId(match.repo, match.file) : null
}

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
    ctx: Value.number({
      name: i18n('Context size'),
      description: i18n(
        'Maximum context length in tokens. 0 uses the model default.',
      ),
      required: true,
      default: 8192,
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
      default: 999,
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
      default: null,
    }),
  }),
}

const inputSpec = InputSpec.of({
  config: Value.dynamicUnion(async ({ effects }) => {
    const { memoryGB } = await detectHardware(effects)
    const enabledPresets = models.filter((m) => memoryGB >= m.minMemoryGB)
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
        spec: InputSpec.of({}),
      },
    ])

    const variants: Record<string, { name: string; spec: any }> = {
      ...Object.fromEntries(
        models.map((m) => [
          m.id,
          { name: i18n(m.displayName), spec: InputSpec.of({}) },
        ]),
      ),
      ...Object.fromEntries(cachedVariants),
      custom: customVariant,
    }

    const inUseId = await inUseVariantId(effects)
    const savedSelection = await storeJson
      .read((s) => s?.modelSelection?.selection)
      .const(effects)

    const enabledIds = new Set<string>([
      ...enabledPresets.map((m) => m.id),
      ...cachedVariants.map(([id]) => id as string),
      'custom',
    ])
    // The model already in use cannot be selected again; it would only trigger
    // a pointless restart. Custom stays enabled so its fields remain editable.
    const disabledId =
      inUseId ?? (savedSelection !== 'custom' ? savedSelection : undefined)
    if (disabledId && disabledId in variants) {
      enabledIds.delete(disabledId)
    }
    const disabledIds = Object.keys(variants).filter(
      (id) => !enabledIds.has(id),
    )
    const selectable = (id: string) => !disabledIds.includes(id)
    const defaultId =
      enabledPresets.find((m) => selectable(m.id))?.id ??
      cached.map((c) => cachedId(c.repo, c.file)).find(selectable) ??
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
      default: defaultId,
      disabled: disabledIds.length > 0 ? disabledIds : false,
    }
  }),
})

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
    const inUseId = await inUseVariantId(effects)
    const saved = await storeJson.read((s) => s?.modelSelection).const(effects)
    if (inUseId) {
      // Show the running model as the selection; keep the Custom fields around
      // so switching back to Custom is still prefilled.
      return saved?.selection === 'custom'
        ? {
            config: {
              selection: inUseId,
              value: {},
              other: { custom: saved.custom },
            },
          }
        : { config: { selection: inUseId, value: {} } }
    }
    if (!saved) return {}
    const selection = saved.selection
    if (selection === 'custom') {
      return { config: { selection, value: saved.custom ?? {} } }
    }
    if (selection.startsWith(cachedPrefix)) {
      const cached = await listCachedModels()
      if (!cached.some((c) => cachedId(c.repo, c.file) === selection)) return {}
      return { config: { selection, value: {} } }
    }
    if (models.some((m) => m.id === selection)) {
      return { config: { selection, value: {} } }
    }
    return {}
  },

  async ({ effects, input }) => {
    const config = input.config
    let serveArgs: string[]
    let modelSelection: {
      selection: string
      custom:
        | {
            hfRepo: string
            hfFile?: string
            ctx: number
            ngl: number
            extraArgs?: string
          }
        | undefined
    }
    if (config.selection === 'custom') {
      const v = config.value
      serveArgs = ['-hf', v.hfRepo]
      if (v.hfFile && v.hfFile.trim().length > 0) {
        serveArgs.push('-hff', v.hfFile.trim())
      }
      if (v.ctx > 0) serveArgs.push('-c', String(v.ctx))
      if (isGpuVariant) serveArgs.push('-ngl', String(v.ngl))
      if (v.extraArgs && v.extraArgs.trim().length > 0) {
        serveArgs.push(...v.extraArgs.split(/\s+/).filter(Boolean))
      }
      modelSelection = {
        selection: 'custom',
        custom: {
          hfRepo: v.hfRepo,
          hfFile: v.hfFile?.trim() || undefined,
          ctx: v.ctx,
          ngl: v.ngl,
          extraArgs: v.extraArgs?.trim() || undefined,
        },
      }
    } else if (config.selection.startsWith(cachedPrefix)) {
      const cached = await listCachedModels()
      const match = cached.find(
        (c) => cachedId(c.repo, c.file) === config.selection,
      )
      if (!match) {
        throw new Error(
          i18n('That downloaded model is no longer in the cache.'),
        )
      }
      const target = await serveTarget(effects)
      const isCurrent =
        target !== null &&
        target.repo === match.repo &&
        targetFile(target, cached) === match.file
      if (isCurrent) {
        // Already the running model: keep its context and extra flags intact.
        await storeJson.merge(effects, {
          modelSelection: { selection: config.selection, custom: undefined },
        })
        return
      }
      serveArgs = [
        '-hf',
        match.repo,
        '-hff',
        match.file,
        '-c',
        String(cachedCtx),
      ]
      if (isGpuVariant) serveArgs.push('-ngl', '999')
      modelSelection = { selection: config.selection, custom: undefined }
    } else {
      const preset = models.find((m) => m.id === config.selection)
      if (!preset) {
        throw new Error(`Unknown preset: ${config.selection}`)
      }
      serveArgs = ['-hf', preset.hfRepo]
      if (preset.hfFile) serveArgs.push('-hff', preset.hfFile)
      serveArgs.push('-c', String(preset.defaultCtx))
      if (isGpuVariant) serveArgs.push('-ngl', '999')
      modelSelection = { selection: config.selection, custom: undefined }
    }
    await storeJson.merge(effects, { serveArgs, modelSelection })
  },
)
