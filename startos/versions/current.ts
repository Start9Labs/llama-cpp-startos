import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10868:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10868. Adds Spark2.5 model support and Kimi-K3 recurrent-state rollback; improves CUDA and Vulkan performance, context reuse for hybrid and recurrent models, Intel integrated-GPU model loading, and single-device speculative decoding; and fixes CUDA stability, typed chat content, grammar repetition limits, and a multi-model server hang.

Backups no longer include downloaded model weights, so they are far smaller. After a restore, the selected model is downloaded again on the first start.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10818...b10868`,
    es_ES: `Actualiza llama.cpp a la compilación b10868. Añade compatibilidad con modelos Spark2.5 y restauración del estado recurrente de Kimi-K3; mejora el rendimiento de CUDA y Vulkan, la reutilización del contexto en modelos híbridos y recurrentes, la carga de modelos en GPU integradas Intel y la decodificación especulativa con un solo dispositivo; y corrige la estabilidad de CUDA, el contenido estructurado del chat, los límites de repetición gramatical y un bloqueo del servidor con varios modelos.

Las copias de seguridad ya no incluyen los pesos de los modelos descargados, por lo que son mucho más pequeñas. Tras una restauración, el modelo seleccionado se descarga de nuevo en el primer arranque.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10818...b10868`,
    de_DE: `Aktualisiert llama.cpp auf Build b10868. Fügt Unterstützung für Spark2.5-Modelle und die Wiederherstellung des rekurrenten Zustands von Kimi-K3 hinzu, verbessert die Leistung von CUDA und Vulkan, die Wiederverwendung des Kontexts bei hybriden und rekurrenten Modellen, das Laden von Modellen auf integrierten Intel-GPUs sowie spekulatives Dekodieren auf einem einzelnen Gerät und behebt CUDA-Stabilitätsprobleme, strukturierte Chatinhalte, Grammatik-Wiederholungsgrenzen und einen Serverstillstand bei mehreren Modellen.

Backups enthalten keine heruntergeladenen Modellgewichte mehr und sind dadurch deutlich kleiner. Nach einer Wiederherstellung wird das ausgewählte Modell beim ersten Start erneut heruntergeladen.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10818...b10868`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10868. Dodaje obsługę modeli Spark2.5 i przywracanie stanu rekurencyjnego Kimi-K3, poprawia wydajność CUDA i Vulkan, ponowne użycie kontekstu w modelach hybrydowych i rekurencyjnych, wczytywanie modeli na zintegrowanych układach GPU Intel oraz dekodowanie spekulatywne na jednym urządzeniu, a także naprawia stabilność CUDA, ustrukturyzowaną treść czatu, limity powtórzeń gramatycznych i zawieszenie serwera przy wielu modelach.

Kopie zapasowe nie zawierają już pobranych wag modeli, dzięki czemu są znacznie mniejsze. Po przywróceniu wybrany model jest pobierany ponownie przy pierwszym uruchomieniu.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10818...b10868`,
    fr_FR: `Met à jour llama.cpp vers la version b10868. Ajoute la prise en charge des modèles Spark2.5 et la restauration de l’état récurrent de Kimi-K3, améliore les performances CUDA et Vulkan, la réutilisation du contexte pour les modèles hybrides et récurrents, le chargement des modèles sur les GPU Intel intégrés et le décodage spéculatif sur un seul appareil, et corrige la stabilité de CUDA, le contenu structuré des conversations, les limites de répétition grammaticale et un blocage du serveur avec plusieurs modèles.

Les sauvegardes n’incluent plus les poids des modèles téléchargés et sont donc beaucoup plus petites. Après une restauration, le modèle sélectionné est de nouveau téléchargé au premier démarrage.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10818...b10868`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
