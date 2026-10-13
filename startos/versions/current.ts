import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11429:1',
  releaseNotes: {
    en_US: 'Updates the StartOS SDK. No change to how llama.cpp runs.',
    es_ES:
      'Actualiza el SDK de StartOS. No cambia el funcionamiento de llama.cpp.',
    de_DE:
      'Aktualisiert das StartOS-SDK. Am Betrieb von llama.cpp ändert sich nichts.',
    pl_PL: 'Aktualizuje SDK StartOS. Nie zmienia sposobu działania llama.cpp.',
    fr_FR:
      'Met à jour le SDK StartOS. Le fonctionnement de llama.cpp ne change pas.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
