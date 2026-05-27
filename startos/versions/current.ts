import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9265:0',
  releaseNotes: {
    en_US: 'Initial release of llama.cpp for StartOS (upstream b9265).',
    es_ES: 'Lanzamiento inicial de llama.cpp para StartOS (upstream b9265).',
    de_DE: 'Erstveröffentlichung von llama.cpp für StartOS (upstream b9265).',
    pl_PL: 'Pierwsze wydanie llama.cpp dla StartOS (upstream b9265).',
    fr_FR: 'Version initiale de llama.cpp pour StartOS (upstream b9265).',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
