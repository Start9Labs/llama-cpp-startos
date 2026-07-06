export const apiPort = 8080

export const apiHostId = 'api-multi'

export const uiUsername = 'admin'

export const variant = (process.env.VARIANT || 'generic') as
  'generic' | 'nvidia' | 'rocm' | 'vulkan'

export const isGpuVariant = variant !== 'generic'
