import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9837:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9837. A maintenance release with new model support, server/UI improvements, and broad backend fixes.

- Models: added DFlash speculative decoding, MiniCPM5 chat parser, and Eagle3 Qwen3 draft-model support.
- Server: resumable streaming via an SSE replay buffer, and a clearer 403 status for disabled features.
- Backends: CUDA, Vulkan, SYCL, and OpenCL fixes and performance improvements; OpenVINO updated to 2026.2.1.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    es_ES: `Se actualizó llama.cpp a b9837. Versión de mantenimiento con soporte para nuevos modelos, mejoras en el servidor/interfaz y correcciones en múltiples backends.

- Modelos: se añadió decodificación especulativa DFlash, el analizador de chat MiniCPM5 y el soporte de modelo borrador Eagle3 Qwen3.
- Servidor: transmisión reanudable mediante un búfer de reproducción SSE y un estado 403 más claro para funciones deshabilitadas.
- Backends: correcciones y mejoras de rendimiento en CUDA, Vulkan, SYCL y OpenCL; OpenVINO actualizado a 2026.2.1.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    de_DE: `llama.cpp auf b9837 aktualisiert. Ein Wartungs-Release mit Unterstützung neuer Modelle, Server-/UI-Verbesserungen und umfangreichen Backend-Korrekturen.

- Modelle: spekulative Dekodierung DFlash, MiniCPM5-Chat-Parser und Eagle3-Qwen3-Entwurfsmodell-Unterstützung hinzugefügt.
- Server: fortsetzbares Streaming über einen SSE-Replay-Puffer und ein klarerer 403-Status für deaktivierte Funktionen.
- Backends: Korrekturen und Leistungsverbesserungen für CUDA, Vulkan, SYCL und OpenCL; OpenVINO auf 2026.2.1 aktualisiert.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    pl_PL: `Zaktualizowano llama.cpp do b9837. Wydanie konserwacyjne z obsługą nowych modeli, usprawnieniami serwera/interfejsu i szerokimi poprawkami backendów.

- Modele: dodano dekodowanie spekulatywne DFlash, parser czatu MiniCPM5 oraz obsługę modelu roboczego Eagle3 Qwen3.
- Serwer: wznawialne strumieniowanie dzięki buforowi powtórek SSE oraz czytelniejszy status 403 dla wyłączonych funkcji.
- Backendy: poprawki i usprawnienia wydajności dla CUDA, Vulkan, SYCL i OpenCL; OpenVINO zaktualizowano do 2026.2.1.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    fr_FR: `Mise à jour de llama.cpp vers b9837. Une version de maintenance avec la prise en charge de nouveaux modèles, des améliorations serveur/interface et de nombreuses corrections de backends.

- Modèles : ajout du décodage spéculatif DFlash, de l'analyseur de chat MiniCPM5 et de la prise en charge du modèle brouillon Eagle3 Qwen3.
- Serveur : diffusion reprenable via un tampon de relecture SSE et un statut 403 plus clair pour les fonctionnalités désactivées.
- Backends : corrections et améliorations de performances pour CUDA, Vulkan, SYCL et OpenCL ; OpenVINO mis à jour vers 2026.2.1.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
