import { sdk } from '../sdk'
import { setModel } from './setModel'
import { setUiPassword } from './setUiPassword'
import { deleteModelCache } from './deleteModelCache'
import { apiKey } from './apiKey'

export const actions = sdk.Actions.of()
  .addAction(setModel)
  .addAction(setUiPassword)
  .addAction(apiKey)
  .addAction(deleteModelCache)
