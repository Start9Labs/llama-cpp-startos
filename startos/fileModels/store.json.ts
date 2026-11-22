import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

// A preset is saved by id and resolved against `presets.ts` at start; any
// other model by its repo and optional file.
const modelRef = {
  preset: z.string().optional(),
  hfRepo: z.string().optional(),
  hfFile: z.string().optional(),
}

const shape = z.looseObject({
  model: z.looseObject(modelRef).optional().catch(undefined),
  // The server flags after the model's own: context, GPU layers, extras.
  settingsArgs: z.array(z.string()).optional().catch(undefined),
  // Model and settings flags together, as stores before 12110:1 saved them.
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
        ...modelRef,
        ctx: z.number(),
        ngl: z.number(),
        extraArgs: z.string().optional(),
      }),
    )
    .optional()
    .catch(undefined),
})

export type ModelRef = { preset?: string; hfRepo?: string; hfFile?: string }

export const storeJson = FileHelper.json(
  { base: sdk.volumes.main, subpath: 'store.json' },
  shape,
)
