import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11065:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11065 with upstream maintenance fixes and improvements.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10975...b11065`,
    es_ES: `Actualiza llama.cpp a la compilación b11065 con correcciones y mejoras de mantenimiento del proyecto original.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10975...b11065`,
    de_DE: `Aktualisiert llama.cpp auf Build b11065 mit Wartungsverbesserungen und Fehlerbehebungen des Upstream-Projekts.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10975...b11065`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11065 z poprawkami i ulepszeniami konserwacyjnymi projektu źródłowego.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10975...b11065`,
    fr_FR: `Met à jour llama.cpp vers la version b11065 avec les correctifs et améliorations de maintenance du projet en amont.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10975...b11065`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
