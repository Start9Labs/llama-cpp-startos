import { sdk } from '../sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'

export const getApiCredentials = sdk.Action.withoutInput(
  'get-api-credentials',

  async ({ effects }) => ({
    name: i18n('Get API Credentials'),
    description: i18n(
      'Retrieve your API key for connecting to the llama.cpp API',
    ),
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const store = await storeJson.read((s) => s).once()

    return {
      version: '1' as const,
      title: 'API Credentials',
      message:
        'Use these credentials to connect any OpenAI-compatible client to your llama.cpp instance. Set the base URL to your service address with /v1 appended.',
      result: {
        type: 'group' as const,
        value: [
          {
            type: 'single' as const,
            name: 'API Key',
            description: null,
            value: store?.apiKey ?? 'UNKNOWN',
            masked: true,
            copyable: true,
            qr: false,
          },
        ],
      },
    }
  },
)
