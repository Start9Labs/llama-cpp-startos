import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9664:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9664. A maintenance release of backend and chat-parsing improvements.

- Chat: hardened PEG-native tool-call parsing, fixed LFM2 tool-call double-escaping, and squashed a grammar-generator and whitespace bug.
- Web UI: SVG block rendering.
- Backends: SYCL builds default to GGML_SYCL_F16 and gain reordered Q4_K/Q5_K/Q6_K MoE matmul; assorted CUDA, Vulkan, and Metal fixes.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9641...b9664`,
    es_ES: `Se actualizó llama.cpp a b9664. Versión de mantenimiento con mejoras de backend y del análisis de chat.

- Chat: análisis de llamadas a herramientas PEG-native reforzado, corrección del doble escapado en las llamadas a herramientas LFM2 y solución de un error del generador de gramática y de espacios en blanco.
- Interfaz web: renderizado de bloques SVG.
- Backends: las compilaciones SYCL usan GGML_SYCL_F16 por defecto y añaden matmul MoE reordenado para Q4_K/Q5_K/Q6_K; varias correcciones de CUDA, Vulkan y Metal.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9641...b9664`,
    de_DE: `llama.cpp auf b9664 aktualisiert. Ein Wartungs-Release mit Backend- und Chat-Parsing-Verbesserungen.

- Chat: gehärtetes PEG-native Tool-Call-Parsing, behobenes LFM2-Tool-Call-Doppel-Escaping sowie ein Grammatik-Generator- und Whitespace-Fehler beseitigt.
- Weboberfläche: SVG-Block-Rendering.
- Backends: SYCL-Builds nutzen standardmäßig GGML_SYCL_F16 und erhalten umsortiertes Q4_K/Q5_K/Q6_K-MoE-Matmul; diverse CUDA-, Vulkan- und Metal-Korrekturen.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9641...b9664`,
    pl_PL: `Zaktualizowano llama.cpp do b9664. Wydanie konserwacyjne z ulepszeniami backendu i parsowania czatu.

- Czat: wzmocnione parsowanie wywołań narzędzi PEG-native, poprawka podwójnego escapowania wywołań narzędzi LFM2 oraz usunięcie błędu generatora gramatyki i białych znaków.
- Interfejs WWW: renderowanie bloków SVG.
- Backendy: kompilacje SYCL domyślnie używają GGML_SYCL_F16 i zyskują przeporządkowane matmul MoE dla Q4_K/Q5_K/Q6_K; różne poprawki CUDA, Vulkan i Metal.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9641...b9664`,
    fr_FR: `Mise à jour de llama.cpp vers b9664. Une version de maintenance apportant des améliorations du backend et de l'analyse du chat.

- Chat : analyse des appels d'outils PEG-native renforcée, correction du double échappement des appels d'outils LFM2 et résolution d'un bogue du générateur de grammaire et des espaces.
- Interface web : rendu des blocs SVG.
- Backends : les compilations SYCL utilisent GGML_SYCL_F16 par défaut et bénéficient d'un matmul MoE réordonné pour Q4_K/Q5_K/Q6_K ; diverses corrections CUDA, Vulkan et Metal.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9641...b9664`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
