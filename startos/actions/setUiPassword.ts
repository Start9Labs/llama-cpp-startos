import { utils } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'
import { uiUsername } from '../utils'

export const setUiPassword = sdk.Action.withoutInput(
  'set-ui-password',

  async ({ effects }) => ({
    name: i18n('Set UI Password'),
    description: i18n(
      'Generate a new password for logging in to the llama.cpp web UI. The username is always "admin".',
    ),
    warning: (await storeJson.read((s) => s?.uiPassword).const(effects))
      ? i18n(
          'This replaces any existing password. Update saved logins after running it.',
        )
      : null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),

  async ({ effects }) => {
    const password = utils.getDefaultString({
      charset: 'a-z,A-Z,0-9',
      len: 32,
    })

    await storeJson.merge(effects, { uiPassword: password })

    return {
      version: '1',
      title: i18n('UI Password'),
      message: i18n(
        'Use these credentials to log in to the llama.cpp web UI in your browser.',
      ),
      result: {
        type: 'group',
        value: [
          {
            type: 'single',
            name: i18n('Username'),
            description: null,
            value: uiUsername,
            masked: false,
            copyable: true,
            qr: false,
            launchable: false,
          },
          {
            type: 'single',
            name: i18n('Password'),
            description: null,
            value: password,
            masked: true,
            copyable: true,
            qr: false,
            launchable: false,
          },
        ],
      },
    }
  },
)
