import { utils } from '@start9labs/start-sdk'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { getApiCredentials } from '../actions/getApiCredentials'
import { setModel } from '../actions/setModel'

export const initializeService = sdk.setupOnInit(async (effects, kind) => {
  if (kind !== 'install') return

  const apiKey = utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })

  await storeJson.write(effects, {
    apiKey,
    serveArgs: undefined,
  })

  await sdk.action.createOwnTask(effects, getApiCredentials, 'critical', {
    reason: i18n('Retrieve your API key so you can connect to llama.cpp'),
  })

  await sdk.action.createOwnTask(effects, setModel, 'critical', {
    reason: i18n('Select which AI model llama.cpp should serve'),
  })
})
