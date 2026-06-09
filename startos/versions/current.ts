import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9570:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9570.

- Adds Gemma 4 support and video input for multimodal models.
- Various GPU backend (CUDA, Vulkan, HIP) and model-conversion fixes.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9544...b9570`,
    es_ES: `Se actualizó llama.cpp a b9570.

- Añade compatibilidad con Gemma 4 y entrada de vídeo para modelos multimodales.
- Varias correcciones del backend de GPU (CUDA, Vulkan, HIP) y de la conversión de modelos.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9544...b9570`,
    de_DE: `llama.cpp auf b9570 aktualisiert.

- Fügt Gemma-4-Unterstützung und Videoeingabe für multimodale Modelle hinzu.
- Diverse Korrekturen am GPU-Backend (CUDA, Vulkan, HIP) und an der Modellkonvertierung.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9544...b9570`,
    pl_PL: `Zaktualizowano llama.cpp do b9570.

- Dodaje obsługę Gemma 4 oraz wejście wideo dla modeli multimodalnych.
- Różne poprawki backendu GPU (CUDA, Vulkan, HIP) i konwersji modeli.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9544...b9570`,
    fr_FR: `Mise à jour de llama.cpp vers b9570.

- Ajoute la prise en charge de Gemma 4 et l'entrée vidéo pour les modèles multimodaux.
- Diverses corrections du backend GPU (CUDA, Vulkan, HIP) et de la conversion des modèles.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9544...b9570`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
