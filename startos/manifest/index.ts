import { setupManifest } from '@start9labs/start-sdk'
import { alertInstall, long, short } from './i18n'

const variant = process.env.VARIANT || 'generic'

type Mutable<T> = { -readonly [K in keyof T]: Mutable<T[K]> }
const mutable = <T>(value: T): Mutable<T> => value as Mutable<T>

const upstreamBuild = 'b9265'

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
    install: alertInstall,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  hardwareAcceleration: variant !== 'generic',
  hardwareRequirements: {
    device:
      variant === 'rocm'
        ? [
            {
              class: 'display' as const,
              product: null,
              vendor: null,
              driver: 'amdgpu',
              description: 'An AMD GPU',
            },
          ]
        : [],
  },
  dependencies: {},
})
