import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9787:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9787. A maintenance release focused on the web UI and new model/backend support.

- Web UI: refreshed logo, cleaner navigation, mobile UI/UX improvements, and a model-load progress bar below the model picker.
- Models: added LFM2.5-ColBERT and LFM2.5-Embedding support, plus an unlimited-OCR multimodal converter.
- Backends: Vulkan, OpenCL, SYCL, and Hexagon fixes and performance improvements.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9776...b9787`,
    es_ES: `Se actualizó llama.cpp a b9787. Versión de mantenimiento centrada en la interfaz web y el soporte de nuevos modelos/backends.

- Interfaz web: logotipo renovado, navegación más limpia, mejoras de UI/UX en móvil y una barra de progreso de carga del modelo bajo el selector de modelos.
- Modelos: se añadió soporte para LFM2.5-ColBERT y LFM2.5-Embedding, además de un convertidor multimodal OCR sin límites.
- Backends: correcciones y mejoras de rendimiento en Vulkan, OpenCL, SYCL y Hexagon.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9776...b9787`,
    de_DE: `llama.cpp auf b9787 aktualisiert. Ein Wartungs-Release mit Schwerpunkt auf der Web-Oberfläche und Unterstützung neuer Modelle/Backends.

- Web-Oberfläche: überarbeitetes Logo, übersichtlichere Navigation, mobile UI/UX-Verbesserungen und ein Ladefortschrittsbalken für das Modell unter der Modellauswahl.
- Modelle: Unterstützung für LFM2.5-ColBERT und LFM2.5-Embedding sowie ein multimodaler Unlimited-OCR-Konverter hinzugefügt.
- Backends: Korrekturen und Leistungsverbesserungen für Vulkan, OpenCL, SYCL und Hexagon.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9776...b9787`,
    pl_PL: `Zaktualizowano llama.cpp do b9787. Wydanie konserwacyjne skupione na interfejsie webowym oraz obsłudze nowych modeli/backendów.

- Interfejs webowy: odświeżone logo, czytelniejsza nawigacja, usprawnienia UI/UX na urządzeniach mobilnych oraz pasek postępu ładowania modelu pod selektorem modeli.
- Modele: dodano obsługę LFM2.5-ColBERT i LFM2.5-Embedding oraz multimodalny konwerter OCR bez ograniczeń.
- Backendy: poprawki i usprawnienia wydajności dla Vulkan, OpenCL, SYCL i Hexagon.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9776...b9787`,
    fr_FR: `Mise à jour de llama.cpp vers b9787. Une version de maintenance axée sur l'interface web et la prise en charge de nouveaux modèles/backends.

- Interface web : logo rafraîchi, navigation simplifiée, améliorations UI/UX sur mobile et une barre de progression du chargement du modèle sous le sélecteur de modèles.
- Modèles : ajout de la prise en charge de LFM2.5-ColBERT et LFM2.5-Embedding, ainsi qu'un convertisseur multimodal OCR illimité.
- Backends : corrections et améliorations de performances pour Vulkan, OpenCL, SYCL et Hexagon.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9776...b9787`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
