import { i18n } from './i18n'
import { sdk } from './sdk'
import { credentialsJson } from './fileModels/credentials.json'
import { storeJson } from './fileModels/store.json'
import { apiHostId, apiKeyHostId, apiPort, uiUsername } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // llama-server itself runs keyless; the OS reverse proxy enforces auth at the
  // edge, on the bridge address as well as the LAN. Browsers can only answer a
  // Basic challenge and OpenAI clients only send a Bearer key, so each gets its
  // own host on the same port. The Set UI Password critical task blocks the
  // service from starting until a password is set, so the empty fallback never
  // serves.
  const password =
    (await storeJson.read((s) => s?.uiPassword).const(effects)) ?? ''
  const apiKey = await credentialsJson.read((c) => c.apiKey).const(effects)

  const uiMultiOrigin = await sdk.MultiHost.of(effects, apiHostId).bindPort(
    apiPort,
    {
      protocol: 'http',
      addSsl: {
        auth: {
          type: 'basic',
          credentials: [{ username: uiUsername, password }],
          realm: null,
        },
      },
    },
  )

  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: 'api',
    description: i18n(
      'The built-in chat UI, for your browser. Log in as "admin" with the password from Set UI Password.',
    ),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })

  const receipts = [await uiMultiOrigin.export([ui])]

  // Init generates the key; until it exists the API host stays unbound.
  if (apiKey) {
    const apiMultiOrigin = await sdk.MultiHost.of(
      effects,
      apiKeyHostId,
    ).bindPort(apiPort, {
      protocol: 'http',
      addSsl: {
        auth: { type: 'bearer', tokens: [apiKey], realm: null },
      },
    })

    const api = sdk.createInterface(effects, {
      name: i18n('OpenAI-compatible API'),
      id: 'openai-api',
      description: i18n(
        'For OpenAI-compatible clients and apps. Requires the key from the API Key action. Append /v1 to the address.',
      ),
      type: 'api',
      masked: false,
      schemeOverride: null,
      username: null,
      path: '',
      query: {},
    })

    receipts.push(await apiMultiOrigin.export([api]))
  }

  return receipts
})
