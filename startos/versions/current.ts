import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9641:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9641.

- Adds the Cohere2MoE (North Code) architecture with a dedicated chat parser.
- Web UI: HEIC/HEIF image support, thinking/reasoning blocks rendered as markdown, and mobile keyboard, PWA-popup, and clipping fixes.
- WebGPU: faster i-quants mul_mat and quicker prefill.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9628...b9641`,
    es_ES: `Se actualizó llama.cpp a b9641.

- Añade la arquitectura Cohere2MoE (North Code) con un analizador de chat dedicado.
- Interfaz web: soporte de imágenes HEIC/HEIF, bloques de razonamiento renderizados como markdown y correcciones del teclado móvil, del aviso PWA y de recortes de la interfaz.
- WebGPU: mul_mat de i-quants más rápido y prellenado más ágil.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9628...b9641`,
    de_DE: `llama.cpp auf b9641 aktualisiert.

- Fügt die Cohere2MoE-Architektur (North Code) mit einem dedizierten Chat-Parser hinzu.
- Weboberfläche: Unterstützung für HEIC/HEIF-Bilder, als Markdown gerenderte Reasoning-Blöcke sowie Korrekturen für mobile Tastatur, PWA-Popup und Clipping.
- WebGPU: schnelleres i-quants mul_mat und zügigeres Prefill.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9628...b9641`,
    pl_PL: `Zaktualizowano llama.cpp do b9641.

- Dodaje architekturę Cohere2MoE (North Code) z dedykowanym parserem czatu.
- Interfejs WWW: obsługa obrazów HEIC/HEIF, bloki rozumowania renderowane jako markdown oraz poprawki klawiatury mobilnej, wyskakującego okna PWA i przycinania.
- WebGPU: szybsze mul_mat dla i-quants i sprawniejsze prefill.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9628...b9641`,
    fr_FR: `Mise à jour de llama.cpp vers b9641.

- Ajoute l'architecture Cohere2MoE (North Code) avec un analyseur de chat dédié.
- Interface web : prise en charge des images HEIC/HEIF, blocs de raisonnement rendus en markdown et corrections du clavier mobile, de la popup PWA et du rognage.
- WebGPU : mul_mat des i-quants plus rapide et préremplissage accéléré.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9628...b9641`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
