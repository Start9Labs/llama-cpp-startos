import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9426:0',
  releaseNotes: {
    en_US: 'Updates llama.cpp to upstream b9426.',
    es_ES: 'Actualiza llama.cpp a la versión upstream b9426.',
    de_DE: 'Aktualisiert llama.cpp auf Upstream b9426.',
    pl_PL: 'Aktualizuje llama.cpp do wersji upstream b9426.',
    fr_FR: 'Met à jour llama.cpp vers la version upstream b9426.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
