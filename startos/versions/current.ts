import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9737:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9737. A maintenance release with server fixes, a new \`--agent\` option, and multimodal and backend improvements.

- Server: fixed an out-of-bounds \`n_discard\` value during context shifting, consolidated slot selection, optimized token-probability handling, and refactored router/child communication.
- Added a \`--agent\` server argument; \`--api-key-file\` now supports comment lines.
- Multimodal (mtmd): several bug fixes, including UTF-8 handling on Windows.
- Backends: AMX optimizations and WebGPU F16 adapter toggles for Vulkan/NVIDIA.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9717...b9737`,
    es_ES: `Se actualizó llama.cpp a b9737. Versión de mantenimiento con correcciones del servidor, una nueva opción \`--agent\` y mejoras multimodales y de backend.

- Servidor: se corrigió un valor \`n_discard\` fuera de rango durante el desplazamiento de contexto, se consolidó la selección de ranuras, se optimizó el manejo de la probabilidad de tokens y se rediseñó la comunicación enrutador/hijo.
- Se añadió un argumento de servidor \`--agent\`; \`--api-key-file\` ahora admite líneas de comentario.
- Multimodal (mtmd): varias correcciones de errores, incluido el manejo de UTF-8 en Windows.
- Backends: optimizaciones AMX y conmutadores de adaptador WebGPU F16 para Vulkan/NVIDIA.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9717...b9737`,
    de_DE: `llama.cpp auf b9737 aktualisiert. Ein Wartungs-Release mit Server-Korrekturen, einer neuen \`--agent\`-Option sowie Multimodal- und Backend-Verbesserungen.

- Server: Ein außerhalb des gültigen Bereichs liegender \`n_discard\`-Wert beim Kontextverschieben wurde behoben, die Slot-Auswahl konsolidiert, die Token-Wahrscheinlichkeitsverarbeitung optimiert und die Router/Kind-Kommunikation überarbeitet.
- Ein \`--agent\`-Serverargument wurde hinzugefügt; \`--api-key-file\` unterstützt jetzt Kommentarzeilen.
- Multimodal (mtmd): mehrere Fehlerbehebungen, einschließlich UTF-8-Behandlung unter Windows.
- Backends: AMX-Optimierungen und WebGPU-F16-Adapterschalter für Vulkan/NVIDIA.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9717...b9737`,
    pl_PL: `Zaktualizowano llama.cpp do b9737. Wydanie konserwacyjne z poprawkami serwera, nową opcją \`--agent\` oraz usprawnieniami multimodalnymi i backendu.

- Serwer: naprawiono wartość \`n_discard\` poza zakresem podczas przesuwania kontekstu, skonsolidowano wybór slotów, zoptymalizowano obsługę prawdopodobieństwa tokenów i przebudowano komunikację router/dziecko.
- Dodano argument serwera \`--agent\`; \`--api-key-file\` obsługuje teraz wiersze komentarzy.
- Multimodalność (mtmd): kilka poprawek błędów, w tym obsługa UTF-8 w systemie Windows.
- Backendy: optymalizacje AMX i przełączniki adaptera WebGPU F16 dla Vulkan/NVIDIA.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9717...b9737`,
    fr_FR: `Mise à jour de llama.cpp vers b9737. Une version de maintenance apportant des corrections du serveur, une nouvelle option \`--agent\` et des améliorations multimodales et de backend.

- Serveur : correction d'une valeur \`n_discard\` hors limites lors du décalage de contexte, consolidation de la sélection des emplacements, optimisation de la gestion des probabilités de jetons et refonte de la communication routeur/enfant.
- Ajout d'un argument de serveur \`--agent\` ; \`--api-key-file\` prend désormais en charge les lignes de commentaire.
- Multimodal (mtmd) : plusieurs corrections de bogues, dont la gestion de l'UTF-8 sous Windows.
- Backends : optimisations AMX et bascules d'adaptateur WebGPU F16 pour Vulkan/NVIDIA.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9717...b9737`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
