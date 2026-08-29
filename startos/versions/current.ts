import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10680:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10680.

A maintenance bump — 50 builds since b10630, with no changes required to your setup.

- Adds support for the Qwen3.8-Flash-Next and nanbeige4.2-3B model architectures, and fixes conversion of Nemotron 3.5 Lightning models and of Nemotron-H LoRA adapters.
- New \`--n-cpu-ffn\` server option keeps a chosen number of feed-forward layers on the CPU, which can make a model fit on a GPU that would otherwise run out of memory. Pass it through **Set Model** → *Custom* → extra arguments.
- New \`--kv-unified-per-slot\` server option gives each request slot its own context, so concurrent chats no longer share one KV cache budget.
- Faster and broader hardware coverage: the Vulkan build gains DeepSeek V4 lightning-indexer support, cross-entropy operations and faster mixture-of-experts shaders, and the CUDA build re-enables MoE matrix kernels on older sm_60 cards.
- Correctness fixes in the tensor backend: a Vulkan graph-optimisation pass could drop a dependency between aliased tensors, and transposed convolution produced wrong results on batched input.
- Loading a model reads its tensors lazily, and quantizing one now caps its working memory instead of pulling whole large tensors into RAM.
- The built-in chat UI opens Settings and MCP Servers as dialogs, replaces per-conversation MCP overrides with a per-conversation tool policy, and reworks the model selector and attachment panel.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10630...b10680`,
    es_ES: `Actualiza llama.cpp a la compilación b10680.

Una actualización de mantenimiento: 50 compilaciones desde la b10630, sin cambios necesarios en su configuración.

- Añade compatibilidad con las arquitecturas de modelo Qwen3.8-Flash-Next y nanbeige4.2-3B, y corrige la conversión de los modelos Nemotron 3.5 Lightning y de los adaptadores LoRA de Nemotron-H.
- La nueva opción de servidor \`--n-cpu-ffn\` mantiene en la CPU el número de capas «feed-forward» que usted indique, lo que puede permitir que un modelo quepa en una GPU que de otro modo se quedaría sin memoria. Puede indicarla en **Establecer modelo** → *Personalizado* → argumentos adicionales.
- La nueva opción de servidor \`--kv-unified-per-slot\` da a cada ranura de petición su propio contexto, de modo que las conversaciones simultáneas ya no comparten un único presupuesto de caché KV.
- Mayor cobertura de hardware y más velocidad: la compilación Vulkan incorpora la compatibilidad con el «lightning indexer» de DeepSeek V4, las operaciones de entropía cruzada y sombreadores más rápidos para modelos de mezcla de expertos, y la compilación CUDA vuelve a habilitar los núcleos matriciales MoE en las tarjetas sm_60 más antiguas.
- Correcciones de exactitud en el motor de tensores: una fase de optimización del grafo en Vulkan podía descartar una dependencia entre tensores con alias, y la convolución transpuesta daba resultados erróneos con entradas por lotes.
- La carga de un modelo lee sus tensores de forma diferida, y la cuantización limita ahora su memoria de trabajo en lugar de cargar tensores grandes enteros en la RAM.
- La interfaz de chat integrada abre Ajustes y Servidores MCP como diálogos, sustituye las anulaciones de MCP por conversación por una política de herramientas por conversación y rediseña el selector de modelos y el panel de adjuntos.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10630...b10680`,
    de_DE: `Aktualisiert llama.cpp auf Build b10680.

Ein Wartungsupdate – 50 Builds seit b10630, ohne Änderungsbedarf an Ihrer Einrichtung.

- Ergänzt Unterstützung für die Modellarchitekturen Qwen3.8-Flash-Next und nanbeige4.2-3B und behebt die Konvertierung von Nemotron-3.5-Lightning-Modellen sowie von Nemotron-H-LoRA-Adaptern.
- Die neue Serveroption \`--n-cpu-ffn\` belässt eine wählbare Anzahl Feed-Forward-Schichten auf der CPU, wodurch ein Modell auf eine GPU passen kann, deren Speicher sonst nicht reicht. Übergeben Sie sie unter **Modell festlegen** → *Benutzerdefiniert* → zusätzliche Argumente.
- Die neue Serveroption \`--kv-unified-per-slot\` gibt jedem Anfrage-Slot einen eigenen Kontext, sodass gleichzeitige Unterhaltungen nicht mehr ein gemeinsames KV-Cache-Budget teilen.
- Schnellere und breitere Hardware-Unterstützung: Der Vulkan-Build erhält Unterstützung für den Lightning-Indexer von DeepSeek V4, Kreuzentropie-Operationen sowie schnellere Shader für Mixture-of-Experts-Modelle, und der CUDA-Build aktiviert die MoE-Matrixkerne auf älteren sm_60-Karten wieder.
- Korrekturen im Tensor-Backend: Eine Vulkan-Graphoptimierung konnte eine Abhängigkeit zwischen Tensoren mit gemeinsamem Speicher verlieren, und die transponierte Faltung lieferte bei Batch-Eingaben falsche Ergebnisse.
- Beim Laden eines Modells werden dessen Tensoren verzögert gelesen, und beim Quantisieren wird der Arbeitsspeicher begrenzt, statt ganze große Tensoren in den RAM zu holen.
- Die integrierte Chat-Oberfläche öffnet Einstellungen und MCP-Server als Dialoge, ersetzt die MCP-Übersteuerungen je Unterhaltung durch eine Werkzeugrichtlinie je Unterhaltung und überarbeitet die Modellauswahl und den Anhangbereich.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10630...b10680`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10680.

Aktualizacja konserwacyjna — 50 kompilacji od b10630, bez potrzeby zmian w konfiguracji.

- Dodaje obsługę architektur modeli Qwen3.8-Flash-Next i nanbeige4.2-3B oraz naprawia konwersję modeli Nemotron 3.5 Lightning i adapterów LoRA dla Nemotron-H.
- Nowa opcja serwera \`--n-cpu-ffn\` pozostawia wybraną liczbę warstw feed-forward na procesorze, dzięki czemu model może zmieścić się na karcie graficznej, której pamięć w innym razie by nie wystarczyła. Podasz ją w akcji **Ustaw model** → *Własny* → dodatkowe argumenty.
- Nowa opcja serwera \`--kv-unified-per-slot\` przydziela każdemu gniazdu żądania własny kontekst, więc równoczesne rozmowy nie dzielą już jednego budżetu pamięci podręcznej KV.
- Szybsza i szersza obsługa sprzętu: kompilacja Vulkan zyskuje obsługę indeksera lightning z DeepSeek V4, operacje entropii krzyżowej oraz szybsze shadery dla modeli mieszanki ekspertów, a kompilacja CUDA ponownie włącza macierzowe jądra MoE na starszych kartach sm_60.
- Poprawki poprawności w silniku tensorów: optymalizacja grafu w Vulkanie mogła pominąć zależność między tensorami dzielącymi pamięć, a splot transponowany dawał błędne wyniki dla danych wsadowych.
- Wczytywanie modelu odczytuje jego tensory leniwie, a kwantyzacja ogranicza teraz pamięć roboczą, zamiast wczytywać całe duże tensory do pamięci RAM.
- Wbudowany interfejs czatu otwiera Ustawienia i Serwery MCP jako okna dialogowe, zastępuje nadpisania MCP dla poszczególnych rozmów polityką narzędzi dla rozmowy oraz przebudowuje wybór modelu i panel załączników.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10630...b10680`,
    fr_FR: `Met à jour llama.cpp vers la version b10680.

Une mise à jour de maintenance — 50 versions depuis la b10630, sans changement à apporter à votre installation.

- Ajoute la prise en charge des architectures de modèle Qwen3.8-Flash-Next et nanbeige4.2-3B, et corrige la conversion des modèles Nemotron 3.5 Lightning ainsi que des adaptateurs LoRA Nemotron-H.
- La nouvelle option serveur \`--n-cpu-ffn\` conserve sur le processeur le nombre de couches « feed-forward » que vous indiquez, ce qui peut permettre à un modèle de tenir sur une carte graphique dont la mémoire serait autrement insuffisante. Indiquez-la dans **Définir le modèle** → *Personnalisé* → arguments supplémentaires.
- La nouvelle option serveur \`--kv-unified-per-slot\` donne à chaque emplacement de requête son propre contexte, si bien que les conversations simultanées ne partagent plus un seul budget de cache KV.
- Prise en charge matérielle plus large et plus rapide : la version Vulkan gagne la prise en charge de l'indexeur « lightning » de DeepSeek V4, des opérations d'entropie croisée et des shaders plus rapides pour les modèles à mélange d'experts, et la version CUDA réactive les noyaux matriciels MoE sur les cartes sm_60 plus anciennes.
- Corrections d'exactitude dans le moteur de tenseurs : une passe d'optimisation du graphe Vulkan pouvait perdre une dépendance entre tenseurs partageant leur mémoire, et la convolution transposée donnait des résultats erronés sur des entrées par lots.
- Le chargement d'un modèle lit ses tenseurs de façon paresseuse, et la quantification plafonne désormais sa mémoire de travail au lieu de charger de gros tenseurs entiers en RAM.
- L'interface de discussion intégrée ouvre les Paramètres et les Serveurs MCP sous forme de boîtes de dialogue, remplace les surcharges MCP par conversation par une politique d'outils par conversation, et retravaille le sélecteur de modèles et le panneau de pièces jointes.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10630...b10680`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
