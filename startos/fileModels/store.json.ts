import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

const shape = z.looseObject({
  serveArgs: z.array(z.string()).optional().catch(undefined),
  uiPassword: z.string().optional().catch(undefined),
  modelSelection: z
    .looseObject({
      selection: z.string(),
      custom: z
        .looseObject({
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
  modelSettings: z
    .array(
      z.looseObject({
        hfRepo: z.string(),
        hfFile: z.string().optional(),
        ctx: z.number(),
        ngl: z.number(),
        extraArgs: z.string().optional(),
      }),
    )
    .optional()
    .catch(undefined),
})

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: 'store.json' },
  shape,
)
