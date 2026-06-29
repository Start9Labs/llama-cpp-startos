import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9837:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9837. A maintenance release with new tooling, server improvements, and broad backend fixes.

- New \`llama\` download subcommand (with \`--offline\` support) for fetching models.
- Server: SSE replay buffer so streamed responses survive a client disconnect; disabled features now return HTTP 403.
- Speculative decoding: DFlash support and Eagle3 Qwen3 draft models; fixes to \`--spec-draft-hf\` / \`--hf-repo-v\`.
- Models: minicpm5 chat parser and LFM2.5-230M support.
- Backends: CUDA, SYCL (dual-GPU tensor parallelism), Vulkan, and OpenCL fixes and performance improvements, plus several web UI fixes.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    es_ES: `Se actualizó llama.cpp a b9837. Versión de mantenimiento con nuevas herramientas, mejoras del servidor y correcciones de backends.

- Nuevo subcomando de descarga \`llama\` (con soporte \`--offline\`) para obtener modelos.
- Servidor: búfer de repetición SSE para que las respuestas en streaming sobrevivan a una desconexión del cliente; las funciones deshabilitadas ahora devuelven HTTP 403.
- Decodificación especulativa: soporte para DFlash y modelos borrador Eagle3 Qwen3; correcciones en \`--spec-draft-hf\` / \`--hf-repo-v\`.
- Modelos: analizador de chat minicpm5 y soporte para LFM2.5-230M.
- Backends: correcciones y mejoras de rendimiento en CUDA, SYCL (paralelismo de tensores en doble GPU), Vulkan y OpenCL, además de varias correcciones de la interfaz web.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    de_DE: `llama.cpp auf b9837 aktualisiert. Ein Wartungs-Release mit neuen Werkzeugen, Server-Verbesserungen und umfangreichen Backend-Korrekturen.

- Neuer \`llama\`-Download-Unterbefehl (mit \`--offline\`-Unterstützung) zum Abrufen von Modellen.
- Server: SSE-Replay-Puffer, damit gestreamte Antworten eine Client-Trennung überstehen; deaktivierte Funktionen liefern jetzt HTTP 403.
- Spekulatives Decoding: DFlash-Unterstützung und Eagle3-Qwen3-Entwurfsmodelle; Korrekturen für \`--spec-draft-hf\` / \`--hf-repo-v\`.
- Modelle: minicpm5-Chat-Parser und Unterstützung für LFM2.5-230M.
- Backends: Korrekturen und Leistungsverbesserungen für CUDA, SYCL (Dual-GPU-Tensor-Parallelismus), Vulkan und OpenCL sowie mehrere Web-UI-Korrekturen.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    pl_PL: `Zaktualizowano llama.cpp do b9837. Wydanie konserwacyjne z nowymi narzędziami, ulepszeniami serwera i licznymi poprawkami backendów.

- Nowe podpolecenie pobierania \`llama\` (z obsługą \`--offline\`) do pobierania modeli.
- Serwer: bufor powtórek SSE, dzięki któremu odpowiedzi strumieniowe przetrwają rozłączenie klienta; wyłączone funkcje zwracają teraz HTTP 403.
- Dekodowanie spekulatywne: obsługa DFlash i modeli roboczych Eagle3 Qwen3; poprawki dla \`--spec-draft-hf\` / \`--hf-repo-v\`.
- Modele: parser czatu minicpm5 i obsługa LFM2.5-230M.
- Backendy: poprawki i usprawnienia wydajności dla CUDA, SYCL (równoległość tensorów na dwóch GPU), Vulkan i OpenCL oraz kilka poprawek interfejsu webowego.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
    fr_FR: `Mise à jour de llama.cpp vers b9837. Une version de maintenance avec de nouveaux outils, des améliorations du serveur et de nombreuses corrections de backends.

- Nouvelle sous-commande de téléchargement \`llama\` (avec prise en charge de \`--offline\`) pour récupérer les modèles.
- Serveur : tampon de relecture SSE pour que les réponses en streaming survivent à une déconnexion du client ; les fonctionnalités désactivées renvoient désormais un HTTP 403.
- Décodage spéculatif : prise en charge de DFlash et des modèles brouillons Eagle3 Qwen3 ; corrections pour \`--spec-draft-hf\` / \`--hf-repo-v\`.
- Modèles : analyseur de chat minicpm5 et prise en charge de LFM2.5-230M.
- Backends : corrections et améliorations de performances pour CUDA, SYCL (parallélisme de tenseurs sur double GPU), Vulkan et OpenCL, ainsi que plusieurs corrections de l'interface web.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9787...b9837`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
