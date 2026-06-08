import { i18n } from './i18n'
import { sdk } from './sdk'
import { storeJson } from './fileModels/store.json'
import { apiPort, uiUsername } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // llama-server itself runs keyless; the OS reverse proxy enforces basic auth
  // at the edge. The Set UI Password critical task blocks the service from
  // starting until a password is set, so the empty fallback never serves.
  const password =
    (await storeJson.read((s) => s?.uiPassword).const(effects)) ?? ''

  const apiMulti = sdk.MultiHost.of(effects, 'api-multi')
  const apiMultiOrigin = await apiMulti.bindPort(apiPort, {
    protocol: 'http',
    addSsl: {
      auth: {
        type: 'basic',
        credentials: [{ username: uiUsername, password }],
        realm: null,
      },
    },
  })

  const api = sdk.createInterface(effects, {
    name: i18n('llama.cpp Server'),
    id: 'api',
    description: i18n('OpenAI-compatible API and built-in chat UI'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  const apiReceipt = await apiMultiOrigin.export([api])

  return [apiReceipt]
})
