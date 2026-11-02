import { credentialsJson } from '../fileModels/credentials.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { generateApiKey } from '../utils'

const { InputSpec, Value } = sdk

const inputSpec = InputSpec.of({
  rotate: Value.toggle({
    name: i18n('Generate a new key'),
    description: i18n(
      'Replace the key. Clients outside StartOS must be updated with the new one; services on this server pick it up when they restart.',
    ),
    default: false,
  }),
})

export const apiKey = sdk.Action.withInput(
  'api-key',

  async ({ effects }) => ({
    name: i18n('API Key'),
    description: i18n(
      'Show the key for the OpenAI-compatible API interface, or generate a new one.',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  inputSpec,

  async ({ effects }) => null,

  async ({ effects, input }) => {
    let key = await credentialsJson.read((c) => c.apiKey).once()
    if (input.rotate || !key) {
      key = generateApiKey()
      await credentialsJson.merge(effects, { apiKey: key })
    }

    return {
      version: '1',
      title: i18n('API Key'),
      message: i18n(
        'Send this key as "Authorization: Bearer <key>" to the OpenAI-compatible API interface. In most clients, set the base URL to that interface\'s address with /v1 appended and paste this as the API key.',
      ),
      result: {
        type: 'single',
        name: i18n('API Key'),
        description: null,
        value: key,
        masked: true,
        copyable: true,
        qr: false,
        launchable: false,
      },
    }
  },
)
