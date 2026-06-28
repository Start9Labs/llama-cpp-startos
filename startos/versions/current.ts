import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9828:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9828. A maintenance release with streaming, UI, and backend improvements.

- Server: SSE replay buffer so streaming responses can resume after a dropped connection; disabled features now return HTTP 403.
- Web UI: fixed the always-show-sidebar setting after the navigation refactor, plus accessibility fixes for hover-gated controls.
- Backends: SYCL tensor parallelism (--split-mode tensor), Vulkan and OpenCL performance fixes, and a CUDA integer-overflow fix in binary ops.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9787...b9828`,
    es_ES: `Se actualizó llama.cpp a b9828. Versión de mantenimiento con mejoras de streaming, interfaz y backends.

- Servidor: búfer de reproducción SSE para que las respuestas en streaming puedan reanudarse tras una conexión perdida; las funciones desactivadas ahora devuelven HTTP 403.
- Interfaz web: se corrigió el ajuste de barra lateral siempre visible tras la refactorización de navegación, además de correcciones de accesibilidad para controles que requieren pasar el cursor.
- Backends: paralelismo de tensores en SYCL (--split-mode tensor), correcciones de rendimiento en Vulkan y OpenCL, y una corrección de desbordamiento de enteros en CUDA en operaciones binarias.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9787...b9828`,
    de_DE: `llama.cpp auf b9828 aktualisiert. Ein Wartungs-Release mit Verbesserungen bei Streaming, Oberfläche und Backends.

- Server: SSE-Replay-Puffer, damit Streaming-Antworten nach einer abgebrochenen Verbindung fortgesetzt werden können; deaktivierte Funktionen geben jetzt HTTP 403 zurück.
- Web-Oberfläche: behobene Einstellung „Seitenleiste immer anzeigen“ nach dem Navigations-Refactoring sowie Barrierefreiheits-Korrekturen für Hover-gesteuerte Elemente.
- Backends: SYCL-Tensorparallelität (--split-mode tensor), Leistungskorrekturen für Vulkan und OpenCL sowie eine Korrektur eines Integer-Überlaufs in CUDA bei binären Operationen.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9787...b9828`,
    pl_PL: `Zaktualizowano llama.cpp do b9828. Wydanie konserwacyjne z usprawnieniami streamingu, interfejsu i backendów.

- Serwer: bufor odtwarzania SSE, dzięki któremu odpowiedzi strumieniowe mogą zostać wznowione po zerwaniu połączenia; wyłączone funkcje zwracają teraz HTTP 403.
- Interfejs webowy: naprawiono ustawienie zawsze widocznego paska bocznego po refaktoryzacji nawigacji oraz poprawki dostępności dla elementów wymagających najechania kursorem.
- Backendy: równoległość tensorów w SYCL (--split-mode tensor), poprawki wydajności w Vulkan i OpenCL oraz naprawa przepełnienia liczb całkowitych w CUDA w operacjach binarnych.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9787...b9828`,
    fr_FR: `Mise à jour de llama.cpp vers b9828. Une version de maintenance avec des améliorations du streaming, de l'interface et des backends.

- Serveur : tampon de relecture SSE permettant aux réponses en streaming de reprendre après une connexion interrompue ; les fonctionnalités désactivées renvoient désormais HTTP 403.
- Interface web : correction du réglage « toujours afficher la barre latérale » après la refonte de la navigation, ainsi que des correctifs d'accessibilité pour les éléments nécessitant le survol.
- Backends : parallélisme de tenseurs SYCL (--split-mode tensor), correctifs de performances Vulkan et OpenCL, et correction d'un débordement d'entier CUDA dans les opérations binaires.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9787...b9828`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
