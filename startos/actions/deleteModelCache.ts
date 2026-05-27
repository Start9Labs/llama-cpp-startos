import { i18n } from '../i18n'
import { sdk } from '../sdk'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  file: Value.text({
    name: i18n('Cached file'),
    description: i18n(
      'Filename inside `/data/models` to delete (e.g. `Qwen2.5-7B-Instruct-Q4_K_M.gguf`).',
    ),
    required: true,
    default: null,
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
      'This will permanently delete the cached file. The model will be re-downloaded if selected again.',
    ),
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => {},

  async ({ effects, input }) => {
    const file = input.file.replace(/[\\/]/g, '').trim()
    if (!file) {
      throw new Error('Filename is required')
    }

    await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'llama-cpp' },
      sdk.Mounts.of().mountVolume({
        volumeId: 'main',
        subpath: null,
        mountpoint: '/data',
        readonly: false,
      }),
      'delete-cache',
      async (subc) => {
        await subc.exec(['rm', '-f', `/data/models/${file}`], { user: 'root' })
      },
    )

    return {
      version: '1' as const,
      title: 'Cache Deleted',
      message: `Removed /data/models/${file}.`,
      result: null,
    }
  },
)
