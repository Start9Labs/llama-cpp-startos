import { i18n } from './i18n'
import { sdk } from './sdk'
import { apiPort } from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const apiMulti = sdk.MultiHost.of(effects, 'api-multi')
  const apiMultiOrigin = await apiMulti.bindPort(apiPort, {
    protocol: 'http',
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
