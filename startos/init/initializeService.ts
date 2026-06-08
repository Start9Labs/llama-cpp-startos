import { setModel } from '../actions/setModel'
import { setUiPassword } from '../actions/setUiPassword'
import { storeJson } from '../fileModels/store.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

// Runs on every init (install, update, restore, and plain restart), and
// re-runs reactively when the watched files change.
export const initializeService = sdk.setupOnInit(async (effects) => {
  // Prompt for a UI password whenever none is set — the proxy basic-auth gate
  // stays locked (setupInterfaces uses a throwaway) until the user runs this.
  const uiPassword = await storeJson.read((s) => s?.uiPassword).const(effects)
  if (!uiPassword) {
    await sdk.action.createOwnTask(effects, setUiPassword, 'critical', {
      reason: i18n('Generate a password to log in to the llama.cpp web UI'),
    })
  }

  // Prompt for a model whenever none is selected — covers first install and
  // guards against the selection being cleared from store.json.
  const serveArgs = await storeJson.read((s) => s?.serveArgs).const(effects)
  if (!serveArgs || serveArgs.length === 0) {
    await sdk.action.createOwnTask(effects, setModel, 'critical', {
      reason: i18n('Select which AI model llama.cpp should serve'),
    })
  }
})
