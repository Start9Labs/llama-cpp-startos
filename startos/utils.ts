export const apiPort = 8080

export const variant = (process.env.VARIANT || 'generic') as
  | 'generic'
  | 'nvidia'
  | 'rocm'
  | 'vulkan'

export const isGpuVariant = variant !== 'generic'
