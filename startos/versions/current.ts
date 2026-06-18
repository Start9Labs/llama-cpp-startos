import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9692:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9692. A maintenance release with new web UI and server features plus backend fixes.

- Web UI: export and import conversations as JSONL (and zip bundles), keeping legacy JSON import.
- Server: new model management API for the router (list, download, and delete models).
- Backends: Vulkan memory-property fixes, SYCL device-to-device memcpy and p2p detection, a CUDA context revert, and an eagle3 long-prompt segfault fix.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9680...b9692`,
    es_ES: `Se actualizó llama.cpp a b9692. Versión de mantenimiento con nuevas funciones de la interfaz web y del servidor, además de correcciones del backend.

- Interfaz web: exportación e importación de conversaciones en formato JSONL (y paquetes zip), manteniendo la importación del formato JSON heredado.
- Servidor: nueva API de gestión de modelos para el enrutador (listar, descargar y eliminar modelos).
- Backends: correcciones de propiedades de memoria en Vulkan, memcpy de dispositivo a dispositivo y detección p2p en SYCL, reversión de un contexto CUDA y corrección de un segfault con prompts largos en eagle3.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9680...b9692`,
    de_DE: `llama.cpp auf b9692 aktualisiert. Ein Wartungs-Release mit neuen Funktionen für Weboberfläche und Server sowie Backend-Korrekturen.

- Weboberfläche: Export und Import von Unterhaltungen als JSONL (und ZIP-Bündel), der Import des bisherigen JSON-Formats bleibt erhalten.
- Server: neue Modellverwaltungs-API für den Router (Modelle auflisten, herunterladen und löschen).
- Backends: Korrekturen der Speichereigenschaften in Vulkan, Gerät-zu-Gerät-memcpy und p2p-Erkennung in SYCL, Rücknahme einer CUDA-Kontextänderung sowie Behebung eines Segfaults bei langen Prompts in eagle3.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9680...b9692`,
    pl_PL: `Zaktualizowano llama.cpp do b9692. Wydanie konserwacyjne z nowymi funkcjami interfejsu WWW i serwera oraz poprawkami backendu.

- Interfejs WWW: eksport i import konwersacji w formacie JSONL (oraz pakietów zip), z zachowaniem importu starszego formatu JSON.
- Serwer: nowe API zarządzania modelami dla routera (lista, pobieranie i usuwanie modeli).
- Backendy: poprawki właściwości pamięci w Vulkan, memcpy między urządzeniami i wykrywanie p2p w SYCL, wycofanie zmiany kontekstu CUDA oraz poprawka segfaultu przy długich promptach w eagle3.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9680...b9692`,
    fr_FR: `Mise à jour de llama.cpp vers b9692. Une version de maintenance apportant de nouvelles fonctionnalités d'interface web et de serveur ainsi que des corrections de backend.

- Interface web : exportation et importation des conversations au format JSONL (et archives zip), tout en conservant l'importation de l'ancien format JSON.
- Serveur : nouvelle API de gestion des modèles pour le routeur (lister, télécharger et supprimer des modèles).
- Backends : corrections des propriétés mémoire de Vulkan, memcpy d'appareil à appareil et détection p2p en SYCL, annulation d'un contexte CUDA et correction d'un segfault sur les prompts longs avec eagle3.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9680...b9692`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
