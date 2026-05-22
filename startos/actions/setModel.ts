import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { detectHardware } from '../hardware'
import { isGpuVariant } from '../utils'
import { models } from './presets'

const { InputSpec, Value, Variants } = sdk

const customVariant = {
  name: i18n('Custom'),
  spec: InputSpec.of({
    hfRepo: Value.text({
      name: i18n('HuggingFace repo'),
      description: i18n(
        'A HuggingFace GGUF repo, optionally with a quant tag (e.g. `unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M`).',
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
        'Additional `llama-server` flags, space-separated. Advanced — split on whitespace, so quoted values will not survive.',
      ),
      required: false,
      default: null,
    }),
  }),
}

type PresetId = (typeof models)[number]['id']
type AllVariantIds = PresetId | 'custom'

const allVariants: Record<AllVariantIds, { name: string; spec: any }> = {
  ...Object.fromEntries(
    models.map((m) => [
      m.id,
      { name: i18n(m.displayName), spec: InputSpec.of({}) },
    ]),
  ),
  custom: customVariant,
} as Record<AllVariantIds, { name: string; spec: any }>

const inputSpec = InputSpec.of({
  config: Value.dynamicUnion(async ({ effects }) => {
    const { memoryGB } = await detectHardware(effects)
    const enabledIds = new Set<string>([
      ...models.filter((m) => memoryGB >= m.minMemoryGB).map((m) => m.id),
      'custom',
    ])
    const disabledIds = Object.keys(allVariants).filter(
      (id) => !enabledIds.has(id),
    )
    const defaultId =
      models.find((m) => memoryGB >= m.minMemoryGB)?.id ?? 'custom'
    return {
      name: i18n('Configuration'),
      variants: Variants.of(allVariants),
      default: defaultId as AllVariantIds,
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

  async ({ effects }) => ({}),

  async ({ effects, input }) => {
    const config = input.config
    let serveArgs: string[]
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
    } else {
      const preset = models.find((m) => m.id === config.selection)
      if (!preset) {
        throw new Error(`Unknown preset: ${config.selection}`)
      }
      serveArgs = ['-hf', preset.hfRepo]
      if (preset.hfFile) serveArgs.push('-hff', preset.hfFile)
      serveArgs.push('-c', String(preset.defaultCtx))
      if (isGpuVariant) serveArgs.push('-ngl', '999')
    }
    await storeJson.merge(effects, { serveArgs })
  },
)
