import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9803:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9803. A maintenance release with backend fixes and new model support.

- Backends: CUDA integer-overflow and copy-kernel fixes, SYCL --split-mode tensor support, and OpenCL profiling fixes.
- Models: added LFM2.5-230M label and Eagle3 Qwen3 draft-model support.
- Tooling: new \`llama download\` subcommand and assorted server hardening.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9787...b9803`,
    es_ES: `Se actualizó llama.cpp a b9803. Versión de mantenimiento con correcciones de backend y soporte de nuevos modelos.

- Backends: correcciones de desbordamiento de enteros y de kernels de copia en CUDA, soporte de --split-mode tensor en SYCL y correcciones de perfilado en OpenCL.
- Modelos: se añadió la etiqueta LFM2.5-230M y el soporte de modelos borrador Eagle3 Qwen3.
- Herramientas: nuevo subcomando \`llama download\` y refuerzos varios del servidor.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9787...b9803`,
    de_DE: `llama.cpp auf b9803 aktualisiert. Ein Wartungs-Release mit Backend-Korrekturen und Unterstützung neuer Modelle.

- Backends: Korrekturen von Integer-Überläufen und Kopier-Kernels in CUDA, Unterstützung für SYCL --split-mode tensor sowie OpenCL-Profiling-Korrekturen.
- Modelle: LFM2.5-230M-Label und Unterstützung für Eagle3-Qwen3-Draft-Modelle hinzugefügt.
- Werkzeuge: neuer \`llama download\`-Unterbefehl und diverse Server-Härtungen.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9787...b9803`,
    pl_PL: `Zaktualizowano llama.cpp do b9803. Wydanie konserwacyjne z poprawkami backendów i obsługą nowych modeli.

- Backendy: poprawki przepełnień całkowitych i kerneli kopiujących w CUDA, obsługa --split-mode tensor w SYCL oraz poprawki profilowania w OpenCL.
- Modele: dodano etykietę LFM2.5-230M oraz obsługę modeli roboczych Eagle3 Qwen3.
- Narzędzia: nowe podpolecenie \`llama download\` i różne wzmocnienia serwera.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9787...b9803`,
    fr_FR: `Mise à jour de llama.cpp vers b9803. Une version de maintenance avec des corrections de backend et la prise en charge de nouveaux modèles.

- Backends : corrections de dépassements d'entiers et de noyaux de copie sur CUDA, prise en charge de --split-mode tensor sur SYCL et corrections de profilage sur OpenCL.
- Modèles : ajout de l'étiquette LFM2.5-230M et de la prise en charge des modèles brouillon Eagle3 Qwen3.
- Outils : nouvelle sous-commande \`llama download\` et divers renforcements du serveur.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9787...b9803`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
