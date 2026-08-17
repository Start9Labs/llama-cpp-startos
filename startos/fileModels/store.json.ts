import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.object({
  serveArgs: z.array(z.string()).optional().catch(undefined),
  uiPassword: z.string().optional().catch(undefined),
  modelSelection: z
    .object({
      selection: z.string(),
      custom: z
        .object({
          hfRepo: z.string(),
          hfFile: z.string().optional(),
          ctx: z.number(),
          ngl: z.number(),
          extraArgs: z.string().optional(),
        })
        .optional(),
    })
    .optional()
    .catch(undefined),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: 'store.json' },
  shape,
)
