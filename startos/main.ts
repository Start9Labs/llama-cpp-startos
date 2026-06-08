import { i18n } from './i18n'
import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'
import { apiPort } from './utils'

export const main = sdk.setupMain(async ({ effects }) => {
  console.info(i18n('Starting llama.cpp!'))

  const serveArgs = await storeJson.read((s) => s?.serveArgs).const(effects)

  const subcontainer = await sdk.SubContainer.of(
    effects,
    { imageId: 'llama-cpp' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/data',
      readonly: false,
    }),
    'llama-cpp-sub',
  )

  if (!serveArgs || serveArgs.length === 0) {
    return sdk.Daemons.of(effects).addDaemon('primary', {
      subcontainer,
      exec: { command: ['sleep', 'infinity'] },
      ready: {
        display: i18n('llama.cpp API'),
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, apiPort, {
            successMessage: i18n('The llama.cpp API is ready'),
            errorMessage: i18n(
              'No model selected. Run the "Set Model" action.',
            ),
          }),
      },
      requires: [],
    })
  }

  const command: [string, ...string[]] = [
    '/app/llama-server',
    ...serveArgs,
    '--host',
    '0.0.0.0',
    '--port',
    String(apiPort),
  ]

  return sdk.Daemons.of(effects).addDaemon('primary', {
    subcontainer,
    exec: {
      command,
      env: {
        LLAMA_CACHE: '/data/models',
        HF_HOME: '/data/huggingface',
      },
    },
    ready: {
      display: i18n('llama.cpp API'),
      gracePeriod: 60 * 60 * 1000,
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, apiPort, {
          successMessage: i18n('The llama.cpp API is ready'),
          errorMessage: i18n('The llama.cpp API is not ready'),
        }),
    },
    requires: [],
  })
})
