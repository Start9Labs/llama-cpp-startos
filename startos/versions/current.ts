import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10818:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10818.

A maintenance update spanning 107 builds, with no changes required to your setup.

- Lowers peak memory use while loading models without memory mapping, including models loaded onto a GPU.
- Preserves supported models' reasoning content in conversation history by default, improving continuity at the cost of some history tokens.
- Adds preview support for Tencent Hy4 models and fixes Gemma 4 vision behavior and models with different expert counts per layer, including Nemotron-3-Puzzle.
- Improves the built-in chat UI and media handling, including conversation exports, grouped agent responses, MCP image attachments, audio and video data URLs, malformed media requests, and empty-object JSON schemas.
- Moves the AMD GPU variant to ROCm 10.0 and includes performance and correctness improvements across CUDA, Vulkan, ROCm, SYCL, OpenCL and CPU backends.
- No command-line option used by this package was renamed or removed, so existing model settings continue to work.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10711...b10818`,
    es_ES: `Actualiza llama.cpp a la compilación b10818.

Una actualización de mantenimiento que abarca 107 compilaciones, sin cambios necesarios en su configuración.

- Reduce el uso máximo de memoria al cargar modelos sin mapeo de memoria, incluidos los modelos cargados en una GPU.
- Conserva de forma predeterminada el contenido de razonamiento de los modelos compatibles en el historial de la conversación, lo que mejora la continuidad a cambio de algunos tokens del historial.
- Añade compatibilidad preliminar con los modelos Tencent Hy4 y corrige el funcionamiento visual de Gemma 4 y los modelos con distintos números de expertos por capa, incluido Nemotron-3-Puzzle.
- Mejora la interfaz de chat integrada y la gestión multimedia, incluidas las exportaciones de conversaciones, las respuestas agrupadas de agentes, las imágenes adjuntas de MCP, las URL de datos de audio y vídeo, las solicitudes multimedia mal formadas y los esquemas JSON de objetos vacíos.
- Actualiza la variante de GPU AMD a ROCm 10.0 e incluye mejoras de rendimiento y corrección en los backends CUDA, Vulkan, ROCm, SYCL, OpenCL y CPU.
- No se ha renombrado ni eliminado ninguna opción de línea de comandos utilizada por este paquete, por lo que la configuración actual de los modelos sigue funcionando.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10711...b10818`,
    de_DE: `Aktualisiert llama.cpp auf Build b10818.

Ein Wartungsupdate über 107 Builds, ohne Änderungsbedarf an Ihrer Einrichtung.

- Senkt den maximalen Speicherbedarf beim Laden von Modellen ohne Memory-Mapping, einschließlich auf eine GPU geladener Modelle.
- Bewahrt bei unterstützten Modellen standardmäßig die Reasoning-Inhalte im Gesprächsverlauf auf. Das verbessert die Kontinuität, beansprucht jedoch einige Verlaufs-Tokens.
- Ergänzt vorläufige Unterstützung für Tencent-Hy4-Modelle und behebt das Bildverhalten von Gemma 4 sowie Modelle mit unterschiedlicher Expertenanzahl pro Schicht, darunter Nemotron-3-Puzzle.
- Verbessert die integrierte Chat-Oberfläche und Medienverarbeitung, darunter Gesprächsexporte, gruppierte Agentenantworten, MCP-Bildanhänge, Audio- und Video-Daten-URLs, fehlerhafte Medienanfragen und JSON-Schemata leerer Objekte.
- Stellt die AMD-GPU-Variante auf ROCm 10.0 um und enthält Leistungs- und Korrektheitsverbesserungen für CUDA-, Vulkan-, ROCm-, SYCL-, OpenCL- und CPU-Backends.
- Keine von diesem Paket verwendete Kommandozeilenoption wurde umbenannt oder entfernt; bestehende Modelleinstellungen funktionieren unverändert weiter.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10711...b10818`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10818.

Aktualizacja konserwacyjna obejmująca 107 kompilacji, bez potrzeby zmian w konfiguracji.

- Zmniejsza szczytowe zużycie pamięci podczas wczytywania modeli bez mapowania pamięci, w tym modeli wczytywanych na kartę graficzną.
- Domyślnie zachowuje treść rozumowania obsługiwanych modeli w historii rozmowy, poprawiając ciągłość kosztem części tokenów historii.
- Dodaje wstępną obsługę modeli Tencent Hy4 oraz naprawia działanie obrazu w Gemma 4 i modele z różną liczbą ekspertów w poszczególnych warstwach, w tym Nemotron-3-Puzzle.
- Ulepsza wbudowany interfejs czatu i obsługę multimediów, w tym eksport rozmów, zgrupowane odpowiedzi agentów, załączniki graficzne MCP, adresy URL danych audio i wideo, błędne żądania multimedialne oraz schematy JSON pustych obiektów.
- Przenosi wariant dla kart AMD na ROCm 10.0 i zawiera poprawki wydajności oraz poprawności dla backendów CUDA, Vulkan, ROCm, SYCL, OpenCL i CPU.
- Żadna opcja wiersza poleceń używana przez ten pakiet nie została zmieniona ani usunięta, więc dotychczasowe ustawienia modeli nadal działają.

llama.cpp publikuje jedną kompilację na każdy scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10711...b10818`,
    fr_FR: `Met à jour llama.cpp vers la version b10818.

Une mise à jour de maintenance couvrant 107 versions, sans changement à apporter à votre installation.

- Réduit le pic d'utilisation de la mémoire lors du chargement de modèles sans projection en mémoire, y compris ceux chargés sur un GPU.
- Conserve par défaut le contenu de raisonnement des modèles compatibles dans l'historique de la conversation, ce qui améliore la continuité au prix de quelques jetons d'historique.
- Ajoute une prise en charge préliminaire des modèles Tencent Hy4 et corrige le traitement visuel de Gemma 4 ainsi que les modèles dont le nombre d'experts varie selon la couche, notamment Nemotron-3-Puzzle.
- Améliore l'interface de discussion intégrée et la gestion des médias, notamment les exports de conversations, les réponses groupées des agents, les images jointes MCP, les URL de données audio et vidéo, les requêtes multimédias mal formées et les schémas JSON d'objets vides.
- Fait passer la variante GPU AMD à ROCm 10.0 et inclut des améliorations de performances et d'exactitude pour les backends CUDA, Vulkan, ROCm, SYCL, OpenCL et CPU.
- Aucune option de ligne de commande utilisée par ce paquet n'a été renommée ou supprimée ; les réglages de modèle existants continuent donc de fonctionner.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10711...b10818`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
