import { T } from '@start9labs/start-sdk'
import { sdk } from './sdk'
import { variant } from './utils'

export type HardwareTier = 'cpu' | 'nvidia' | 'amd' | 'vulkan'

export type HardwareInfo = {
  tier: HardwareTier
  /**
   * For GPU variants, total VRAM across detected accelerators (GiB).
   * Falls back to total system RAM when GPU memory cannot be detected
   * (e.g. Vulkan on integrated graphics, where weights live in shared RAM).
   */
  memoryGB: number
}

let cached: HardwareInfo | null = null

export async function detectHardware(
  effects: T.Effects,
): Promise<HardwareInfo> {
  if (cached) return cached
  cached = await detect(effects)
  return cached
}

async function detect(effects: T.Effects): Promise<HardwareInfo> {
  if (variant === 'nvidia') {
    const mem = await nvidiaMemoryGB(effects)
    if (mem !== null) return { tier: 'nvidia', memoryGB: mem }
    return { tier: 'nvidia', memoryGB: await systemMemoryGB(effects) }
  }
  if (variant === 'rocm') {
    const mem = await rocmMemoryGB(effects)
    if (mem !== null) return { tier: 'amd', memoryGB: mem }
    return { tier: 'amd', memoryGB: await systemMemoryGB(effects) }
  }
  if (variant === 'vulkan') {
    return { tier: 'vulkan', memoryGB: await systemMemoryGB(effects) }
  }
  return { tier: 'cpu', memoryGB: await systemMemoryGB(effects) }
}

async function nvidiaMemoryGB(effects: T.Effects): Promise<number | null> {
  try {
    const result = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'llama-cpp' },
      sdk.Mounts.of(),
      'detect-nvidia',
      (sub) =>
        sub.exec([
          'nvidia-smi',
          '--query-gpu=memory.total',
          '--format=csv,noheader,nounits',
        ]),
    )
    if (result.exitCode !== 0 || typeof result.stdout !== 'string') return null
    const mib = result.stdout
      .trim()
      .split('\n')
      .map((l) => parseInt(l.trim(), 10) || 0)
      .reduce((sum, n) => sum + n, 0)
    if (mib === 0) return null
    return Math.floor(mib / 1024)
  } catch {
    return null
  }
}

async function rocmMemoryGB(effects: T.Effects): Promise<number | null> {
  try {
    const result = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'llama-cpp' },
      sdk.Mounts.of(),
      'detect-rocm',
      (sub) => sub.exec(['rocm-smi', '--showmeminfo', 'vram', '--csv']),
    )
    if (result.exitCode !== 0 || typeof result.stdout !== 'string') return null
    const bytes = result.stdout
      .trim()
      .split('\n')
      .slice(1)
      .map((row) => {
        const cols = row.split(',').map((c) => c.trim())
        return parseInt(cols[1] ?? '0', 10) || 0
      })
      .reduce((sum, n) => sum + n, 0)
    if (bytes === 0) return null
    return Math.floor(bytes / 1024 ** 3)
  } catch {
    return null
  }
}

async function systemMemoryGB(effects: T.Effects): Promise<number> {
  try {
    const result = await sdk.SubContainer.withTemp(
      effects,
      { imageId: 'llama-cpp' },
      sdk.Mounts.of(),
      'detect-mem',
      (sub) => sub.exec(['cat', '/proc/meminfo']),
    )
    if (result.exitCode === 0 && typeof result.stdout === 'string') {
      const match = result.stdout.match(/MemTotal:\s+(\d+)\s+kB/)
      if (match) return Math.floor(parseInt(match[1] ?? '0', 10) / 1024 / 1024)
    }
  } catch {
    // fall through
  }
  return 0
}
