import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9859:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9859. A maintenance release adding new model support with server, UI, and backend improvements.

- Models: added DeepSeek V4 support; fixed Gemma E4B FlashAttention and Qwen3-Next handling.
- Server: deduped model entries in /v1/models, handled bracketed IPv6 literals in model URLs, and use the HuggingFace primary split as the model path.
- UI: stopped tool messages leaking across conversations and removed a PWA fallback that cached API requests.
- Backends: CUDA, Vulkan, HIP, OpenCL, Hexagon, and CPU fixes and performance improvements.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9837...b9859`,
    es_ES: `Se actualizó llama.cpp a b9859. Versión de mantenimiento que añade soporte para nuevos modelos con mejoras en el servidor, la interfaz y los backends.

- Modelos: se añadió soporte para DeepSeek V4; se corrigió FlashAttention de Gemma E4B y el manejo de Qwen3-Next.
- Servidor: se eliminaron entradas de modelo duplicadas en /v1/models, se manejan literales IPv6 entre corchetes en las URL de modelos y se usa la división principal de HuggingFace como ruta del modelo.
- Interfaz: se evitó que los mensajes de herramientas se filtraran entre conversaciones y se eliminó un mecanismo de reserva de PWA que almacenaba en caché las solicitudes de la API.
- Backends: correcciones y mejoras de rendimiento en CUDA, Vulkan, HIP, OpenCL, Hexagon y CPU.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9837...b9859`,
    de_DE: `llama.cpp auf b9859 aktualisiert. Ein Wartungs-Release, das neue Modellunterstützung mit Server-, UI- und Backend-Verbesserungen hinzufügt.

- Modelle: DeepSeek-V4-Unterstützung hinzugefügt; FlashAttention von Gemma E4B und die Qwen3-Next-Handhabung korrigiert.
- Server: doppelte Modelleinträge in /v1/models entfernt, IPv6-Literale in Klammern in Modell-URLs verarbeitet und den HuggingFace-Primärsplit als Modellpfad verwendet.
- UI: verhindert, dass Tool-Nachrichten zwischen Unterhaltungen durchsickern, und einen PWA-Fallback entfernt, der API-Anfragen zwischenspeicherte.
- Backends: Korrekturen und Leistungsverbesserungen für CUDA, Vulkan, HIP, OpenCL, Hexagon und CPU.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9837...b9859`,
    pl_PL: `Zaktualizowano llama.cpp do b9859. Wydanie konserwacyjne dodające obsługę nowych modeli wraz z usprawnieniami serwera, interfejsu i backendów.

- Modele: dodano obsługę DeepSeek V4; naprawiono FlashAttention dla Gemma E4B oraz obsługę Qwen3-Next.
- Serwer: usunięto zduplikowane wpisy modeli w /v1/models, obsłużono literały IPv6 w nawiasach w adresach URL modeli i użyto głównego podziału HuggingFace jako ścieżki modelu.
- Interfejs: powstrzymano wyciekanie wiadomości narzędzi między rozmowami i usunięto mechanizm awaryjny PWA, który buforował żądania API.
- Backendy: poprawki i usprawnienia wydajności dla CUDA, Vulkan, HIP, OpenCL, Hexagon i CPU.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9837...b9859`,
    fr_FR: `Mise à jour de llama.cpp vers b9859. Une version de maintenance ajoutant la prise en charge de nouveaux modèles avec des améliorations serveur, interface et backends.

- Modèles : ajout de la prise en charge de DeepSeek V4 ; correction de FlashAttention pour Gemma E4B et de la gestion de Qwen3-Next.
- Serveur : suppression des entrées de modèle en double dans /v1/models, prise en charge des littéraux IPv6 entre crochets dans les URL de modèles et utilisation de la division principale HuggingFace comme chemin du modèle.
- Interface : les messages d'outils ne fuient plus entre les conversations et suppression d'un mécanisme de repli PWA qui mettait en cache les requêtes API.
- Backends : corrections et améliorations de performances pour CUDA, Vulkan, HIP, OpenCL, Hexagon et CPU.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9837...b9859`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
