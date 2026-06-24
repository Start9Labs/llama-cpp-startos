import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9776:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9776. A maintenance release with a server security fix, real-time model load progress, and backend improvements.

- Server: no longer forwards auth headers through the CORS proxy; added real-time model load progress via \`/models/sse\`, tool-call response IDs, and per-user-message checkpoints.
- Multimodal (mtmd): added a model load progress callback.
- Backends: Vulkan and WebGPU improvements (CONV_3D support, FA bias-before-softmax overflow fix) plus OpenCL precision gains.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9737...b9776`,
    es_ES: `Se actualizó llama.cpp a b9776. Versión de mantenimiento con una corrección de seguridad del servidor, progreso de carga de modelos en tiempo real y mejoras de backend.

- Servidor: ya no reenvía cabeceras de autenticación a través del proxy CORS; se añadió progreso de carga de modelos en tiempo real mediante \`/models/sse\`, IDs en respuestas de llamadas a herramientas y puntos de control por mensaje de usuario.
- Multimodal (mtmd): se añadió una devolución de llamada de progreso de carga del modelo.
- Backends: mejoras en Vulkan y WebGPU (soporte de CONV_3D, corrección de desbordamiento de FA con sesgo antes de softmax) y mayor precisión en OpenCL.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9737...b9776`,
    de_DE: `llama.cpp auf b9776 aktualisiert. Ein Wartungs-Release mit einer Server-Sicherheitskorrektur, Echtzeit-Modellladefortschritt und Backend-Verbesserungen.

- Server: Auth-Header werden nicht mehr über den CORS-Proxy weitergeleitet; Echtzeit-Modellladefortschritt über \`/models/sse\`, IDs in Tool-Call-Antworten und Prüfpunkte pro Benutzernachricht hinzugefügt.
- Multimodal (mtmd): Ein Rückruf für den Modellladefortschritt wurde hinzugefügt.
- Backends: Vulkan- und WebGPU-Verbesserungen (CONV_3D-Unterstützung, FA-Bias-vor-Softmax-Überlaufkorrektur) sowie Präzisionsgewinne bei OpenCL.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9737...b9776`,
    pl_PL: `Zaktualizowano llama.cpp do b9776. Wydanie konserwacyjne z poprawką bezpieczeństwa serwera, postępem ładowania modeli w czasie rzeczywistym i usprawnieniami backendu.

- Serwer: nie przekazuje już nagłówków uwierzytelniania przez proxy CORS; dodano postęp ładowania modeli w czasie rzeczywistym przez \`/models/sse\`, identyfikatory w odpowiedziach wywołań narzędzi oraz punkty kontrolne dla każdej wiadomości użytkownika.
- Multimodalność (mtmd): dodano wywołanie zwrotne postępu ładowania modelu.
- Backendy: usprawnienia Vulkan i WebGPU (obsługa CONV_3D, poprawka przepełnienia FA bias-przed-softmax) oraz wzrost precyzji w OpenCL.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9737...b9776`,
    fr_FR: `Mise à jour de llama.cpp vers b9776. Une version de maintenance apportant un correctif de sécurité du serveur, un suivi en temps réel du chargement des modèles et des améliorations de backend.

- Serveur : ne transmet plus les en-têtes d'authentification via le proxy CORS ; ajout du suivi en temps réel du chargement des modèles via \`/models/sse\`, d'identifiants dans les réponses d'appels d'outils et de points de contrôle par message utilisateur.
- Multimodal (mtmd) : ajout d'un rappel de progression du chargement du modèle.
- Backends : améliorations Vulkan et WebGPU (prise en charge de CONV_3D, correction du dépassement FA biais-avant-softmax) ainsi que des gains de précision sur OpenCL.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9737...b9776`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
