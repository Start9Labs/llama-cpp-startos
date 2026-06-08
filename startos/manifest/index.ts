import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

const variant = process.env.VARIANT || 'generic'

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
const mutable = <T>(value: T): Mutable<T> => value as Mutable<T>

const upstreamBuild = 'b9544'

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

export const manifest = setupManifest({
  id: 'llama-cpp',
  title: 'llama.cpp',
  license: 'MIT',
  packageRepo: 'https://github.com/Start9Labs/llama-cpp-startos',
  upstreamRepo: 'https://github.com/ggml-org/llama.cpp',
  marketingUrl: 'https://github.com/ggml-org/llama.cpp',
  donationUrl: null,
  docsUrls: [
    'https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md',
  ],
  description: { short, long },
  volumes: ['main'],
  images: {
    'llama-cpp': mutable(
      imageConfigs[variant as keyof typeof imageConfigs] ??
        imageConfigs.generic,
    ),
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  // generic is published, so hardwareAcceleration must be uniform across all
  // variants — it lives in the registry's shared version metadata, and a
  // mismatch (e.g. generic false vs the rest true) rejects publish.
  hardwareAcceleration: true,
  // Each variant needs a distinct hardware requirement, or variants sharing one
  // (e.g. two with an empty requirement) collide on publish as a registry
  // metadata mismatch. generic is the sole no-requirement fallback.
  hardwareRequirements: {
    device:
      variant === 'nvidia'
        ? [
            {
              class: 'display',
              product: null,
              vendor: null,
              driver: 'nvidia',
              description: 'An NVIDIA GPU',
            },
          ]
        : variant === 'rocm'
          ? [
              {
                class: 'display',
                product: null,
                vendor: null,
                driver: 'amdgpu',
                description: 'An AMD GPU',
              },
            ]
          : variant === 'vulkan'
            ? [
                {
                  class: 'display',
                  product: null,
                  vendor: null,
                  driver: 'i915',
                  description: 'An Intel GPU',
                },
              ]
            : [],
  },
  dependencies: {},
})
