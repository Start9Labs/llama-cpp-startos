import { utils } from '@start9labs/start-sdk'

export const apiPort = 8080

export const apiHostId = 'api-multi'

export const apiKeyHostId = 'api-key'

export const uiUsername = 'admin'

export const generateApiKey = () =>
  utils.getDefaultString({ charset: 'a-z,A-Z,0-9', len: 32 })

export const variant = (process.env.VARIANT || 'generic') as
  | 'generic'
  | 'nvidia'
  | 'rocm'
  | 'vulkan'

export const isGpuVariant = variant !== 'generic'

export const hfRepoFlags = ['-hf', '-hfr', '--hf-repo']

export const hfFileFlags = ['-hff', '--hf-file']

export const hfDraftRepoFlags = [
  '--spec-draft-hf',
  '-hfd',
  '-hfrd',
  '--hf-repo-draft',
]

export function lastOptionValue(args: string[], flags: string[]) {
  let value: string | undefined
  for (let i = 0; i < args.length; i++) {
    if (flags.includes(args[i])) value = args[++i]
  }
  return value
}
