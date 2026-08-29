import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

const variant = process.env.VARIANT || 'generic'

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
const mutable = <T>(value: T): Mutable<T> => value as Mutable<T>

const upstreamBuild = 'b10680'

const imageConfigs = {
  generic: {
    source: { dockerTag: `ghcr.io/ggml-org/llama.cpp:server-${upstreamBuild}` },
    arch: ['aarch64', 'x86_64'],
  },
  nvidia: {
    source: {
      dockerTag: `ghcr.io/ggml-org/llama.cpp:server-cuda-${upstreamBuild}`,
    },
    arch: ['aarch64', 'x86_64'],
    nvidiaContainer: true,
  },
  rocm: {
    source: {
      dockerTag: `ghcr.io/ggml-org/llama.cpp:server-rocm-${upstreamBuild}`,
    },
    arch: ['x86_64'],
  },
  vulkan: {
    source: {
      dockerTag: `ghcr.io/ggml-org/llama.cpp:server-vulkan-${upstreamBuild}`,
    },
    arch: ['aarch64', 'x86_64'],
  },
} as const

// ROCm is unreliable on integrated Radeon (e.g. the 680M in Ryzen APUs), so
// match only discrete AMD GPUs by product name. StartOS's regex engine has no
// lookahead, so this is a positive allowlist rather than an iGPU exclusion.
const AMD_DISCRETE_GPU =
  '(?i)(Navi\\s*\\d+|Radeon\\s*RX\\s*\\d{3}|Radeon\\s*RX\\s*Vega|Radeon\\s*VII|Instinct)'

// hardwareRequirements per accelerator variant. StartOS auto-selects the most
// hardware-specific compatible variant per host, and the registry keys a
// version's s9pks by hardwareRequirements, so each accelerator variant needs a
// distinct one. generic carries no entry here and is the sole no-requirement
// fallback. Note vulkan matches only Intel GPUs on the i915 driver.
const hwDevices = {
  nvidia: [
    {
      class: 'display' as const,
      product: null,
      vendor: null,
      driver: 'nvidia',
      description: 'An NVIDIA GPU',
    },
  ],
  rocm: [
    {
      class: 'display' as const,
      product: AMD_DISCRETE_GPU,
      vendor: null,
      driver: 'amdgpu',
      description:
        'A discrete AMD GPU supported by ROCm (integrated Radeon graphics are not supported)',
    },
  ],
  vulkan: [
    {
      class: 'display' as const,
      product: null,
      vendor: null,
      driver: 'i915',
      description: 'An Intel GPU',
    },
  ],
} as const

export const manifest = setupManifest({
  id: 'llama-cpp',
  title: 'llama.cpp',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/llama-cpp-startos',
  upstreamRepo: 'https://github.com/ggml-org/llama.cpp',
  marketingUrl: 'https://github.com/ggml-org/llama.cpp',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    'llama-cpp': mutable(
      imageConfigs[variant as keyof typeof imageConfigs] ??
        imageConfigs.generic,
    ),
  },
  // generic is published, so hardwareAcceleration must be uniform across all
  // variants — it lives in the registry's shared version metadata, and a
  // mismatch (e.g. generic false vs the rest true) rejects publish.
  hardwareAcceleration: true,
  hardwareRequirements: {
    device: [...(hwDevices[variant as keyof typeof hwDevices] ?? [])],
  },
  dependencies: {},
})
