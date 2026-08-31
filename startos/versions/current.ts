import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10711:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10711.

A maintenance bump — 81 builds since b10630, with no changes required to your setup.

- Adds support for the Qwen3.8-Flash-Next and nanbeige4.2-3B model architectures, and fixes conversion of Nemotron 3.5 Lightning models and of Nemotron-H LoRA adapters.
- New \`--n-cpu-ffn\` server option keeps a chosen number of feed-forward layers on the CPU, which can make a model fit on a GPU that would otherwise run out of memory. Pass it through **Set Model** → *Custom* → extra arguments.
- New \`--kv-unified-per-slot\` server option gives each request slot its own context, so concurrent chats no longer share one KV cache budget.
- Fixes a crash when a conversation runs past its context window on a model that uses a lightning indexer, such as the DeepSeek V4 family, with an unquantized KV cache.
- Faster and broader hardware coverage: the Vulkan build gains DeepSeek V4 lightning-indexer support, cross-entropy operations and faster mixture-of-experts shaders; the CUDA build re-enables MoE matrix kernels on older sm_60 cards and now takes its fast mixture-of-experts path whatever the number of active experts; and the ROCm build gets a faster Q2_0 dot product on RDNA 4 (gfx1201) cards along with retuned RDNA 3 matmul settings.
- The Vulkan build also fixes excessive tensor padding that made mixture-of-experts models use far more memory than they need, and could fail to load them outright with "Requested preallocation size is too large".
- Correctness fixes in the tensor backend: a Vulkan graph-optimisation pass could drop a dependency between aliased tensors, transposed convolution produced wrong results on batched input, and an allocation-size guard misreported how much space a backend needs. The graph optimiser can now also be told which allocations must not be reused, which re-enables operation fusions the backends previously had to disable to stay safe.
- Loading a model reads its large tensors from disk on demand (\`--lazy-mode\`, applied automatically to tensors over 4 GiB), and quantizing one now caps its working memory instead of pulling whole large tensors into RAM.
- The built-in chat UI opens Settings and MCP Servers as dialogs, replaces per-conversation MCP overrides with a per-conversation tool policy, and reworks the model selector and attachment panel. The HTTP library serving the API and that UI moves to cpp-httplib 0.54.0.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10630...b10711`,
    es_ES: `Actualiza llama.cpp a la compilación b10711.

Una actualización de mantenimiento: 81 compilaciones desde la b10630, sin cambios necesarios en su configuración.

- Añade compatibilidad con las arquitecturas de modelo Qwen3.8-Flash-Next y nanbeige4.2-3B, y corrige la conversión de los modelos Nemotron 3.5 Lightning y de los adaptadores LoRA de Nemotron-H.
- La nueva opción de servidor \`--n-cpu-ffn\` mantiene en la CPU el número de capas «feed-forward» que usted indique, lo que puede permitir que un modelo quepa en una GPU que de otro modo se quedaría sin memoria. Puede indicarla en **Establecer modelo** → *Personalizado* → argumentos adicionales.
- La nueva opción de servidor \`--kv-unified-per-slot\` da a cada ranura de petición su propio contexto, de modo que las conversaciones simultáneas ya no comparten un único presupuesto de caché KV.
- Corrige un fallo cuando una conversación supera su ventana de contexto en un modelo que usa un «lightning indexer», como la familia DeepSeek V4, con la caché KV sin cuantizar.
- Mayor cobertura de hardware y más velocidad: la compilación Vulkan incorpora la compatibilidad con el «lightning indexer» de DeepSeek V4, las operaciones de entropía cruzada y sombreadores más rápidos para modelos de mezcla de expertos; la compilación CUDA vuelve a habilitar los núcleos matriciales MoE en las tarjetas sm_60 más antiguas y ahora toma su ruta rápida para mezcla de expertos sea cual sea el número de expertos activos; y la compilación ROCm gana un producto escalar Q2_0 más rápido en las tarjetas RDNA 4 (gfx1201) junto con ajustes de multiplicación matricial revisados para RDNA 3.
- La compilación Vulkan corrige además el relleno excesivo de tensores que hacía que los modelos de mezcla de expertos consumieran mucha más memoria de la necesaria, y que incluso podía impedir su carga con el error «Requested preallocation size is too large».
- Correcciones de exactitud en el motor de tensores: una fase de optimización del grafo en Vulkan podía descartar una dependencia entre tensores con alias, la convolución transpuesta daba resultados erróneos con entradas por lotes, y una comprobación del tamaño de reserva informaba mal del espacio que necesita un motor de cálculo. Ahora también se puede indicar al optimizador del grafo qué reservas de memoria no deben reutilizarse, lo que vuelve a habilitar fusiones de operaciones que los motores de cálculo tenían que desactivar por seguridad.
- La carga de un modelo lee bajo demanda sus tensores grandes desde el disco (\`--lazy-mode\`, aplicado automáticamente a los tensores de más de 4 GiB), y la cuantización limita ahora su memoria de trabajo en lugar de cargar tensores grandes enteros en la RAM.
- La interfaz de chat integrada abre Ajustes y Servidores MCP como diálogos, sustituye las anulaciones de MCP por conversación por una política de herramientas por conversación y rediseña el selector de modelos y el panel de adjuntos. La biblioteca HTTP que sirve la API y esa interfaz pasa a cpp-httplib 0.54.0.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10630...b10711`,
    de_DE: `Aktualisiert llama.cpp auf Build b10711.

Ein Wartungsupdate – 81 Builds seit b10630, ohne Änderungsbedarf an Ihrer Einrichtung.

- Ergänzt Unterstützung für die Modellarchitekturen Qwen3.8-Flash-Next und nanbeige4.2-3B und behebt die Konvertierung von Nemotron-3.5-Lightning-Modellen sowie von Nemotron-H-LoRA-Adaptern.
- Die neue Serveroption \`--n-cpu-ffn\` belässt eine wählbare Anzahl Feed-Forward-Schichten auf der CPU, wodurch ein Modell auf eine GPU passen kann, deren Speicher sonst nicht reicht. Übergeben Sie sie unter **Modell festlegen** → *Benutzerdefiniert* → zusätzliche Argumente.
- Die neue Serveroption \`--kv-unified-per-slot\` gibt jedem Anfrage-Slot einen eigenen Kontext, sodass gleichzeitige Unterhaltungen nicht mehr ein gemeinsames KV-Cache-Budget teilen.
- Behebt einen Absturz, wenn eine Unterhaltung ihr Kontextfenster überschreitet – bei Modellen mit Lightning-Indexer, etwa der DeepSeek-V4-Familie, und unquantisiertem KV-Cache.
- Schnellere und breitere Hardware-Unterstützung: Der Vulkan-Build erhält Unterstützung für den Lightning-Indexer von DeepSeek V4, Kreuzentropie-Operationen sowie schnellere Shader für Mixture-of-Experts-Modelle; der CUDA-Build aktiviert die MoE-Matrixkerne auf älteren sm_60-Karten wieder und nutzt seinen schnellen Mixture-of-Experts-Pfad nun unabhängig von der Anzahl aktiver Experten; und der ROCm-Build erhält ein schnelleres Q2_0-Skalarprodukt auf RDNA-4-Karten (gfx1201) sowie neu abgestimmte RDNA-3-Matmul-Einstellungen.
- Der Vulkan-Build behebt außerdem eine übermäßige Tensor-Auffüllung, durch die Mixture-of-Experts-Modelle weit mehr Speicher belegten als nötig und sich mitunter gar nicht laden ließen („Requested preallocation size is too large“).
- Korrekturen im Tensor-Backend: Eine Vulkan-Graphoptimierung konnte eine Abhängigkeit zwischen Tensoren mit gemeinsamem Speicher verlieren, die transponierte Faltung lieferte bei Batch-Eingaben falsche Ergebnisse, und eine Prüfung der Belegungsgröße meldete den Speicherbedarf eines Rechenbackends falsch. Dem Graphoptimierer lässt sich nun zudem mitteilen, welche Speicherbereiche nicht wiederverwendet werden dürfen; damit sind Operationsverschmelzungen wieder möglich, die die Rechenbackends bisher aus Sicherheitsgründen abschalten mussten.
- Beim Laden eines Modells werden dessen große Tensoren bei Bedarf von der Festplatte gelesen (\`--lazy-mode\`, automatisch für Tensoren über 4 GiB), und beim Quantisieren wird der Arbeitsspeicher begrenzt, statt ganze große Tensoren in den RAM zu holen.
- Die integrierte Chat-Oberfläche öffnet Einstellungen und MCP-Server als Dialoge, ersetzt die MCP-Übersteuerungen je Unterhaltung durch eine Werkzeugrichtlinie je Unterhaltung und überarbeitet die Modellauswahl und den Anhangbereich. Die HTTP-Bibliothek, die die API und diese Oberfläche ausliefert, wechselt auf cpp-httplib 0.54.0.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10630...b10711`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10711.

Aktualizacja konserwacyjna — 81 kompilacji od b10630, bez potrzeby zmian w konfiguracji.

- Dodaje obsługę architektur modeli Qwen3.8-Flash-Next i nanbeige4.2-3B oraz naprawia konwersję modeli Nemotron 3.5 Lightning i adapterów LoRA dla Nemotron-H.
- Nowa opcja serwera \`--n-cpu-ffn\` pozostawia wybraną liczbę warstw feed-forward na procesorze, dzięki czemu model może zmieścić się na karcie graficznej, której pamięć w innym razie by nie wystarczyła. Podasz ją w akcji **Ustaw model** → *Własny* → dodatkowe argumenty.
- Nowa opcja serwera \`--kv-unified-per-slot\` przydziela każdemu gniazdu żądania własny kontekst, więc równoczesne rozmowy nie dzielą już jednego budżetu pamięci podręcznej KV.
- Naprawia awarię, gdy rozmowa przekracza swoje okno kontekstu w modelu korzystającym z indeksera lightning, na przykład z rodziny DeepSeek V4, przy niekwantyzowanej pamięci podręcznej KV.
- Szybsza i szersza obsługa sprzętu: kompilacja Vulkan zyskuje obsługę indeksera lightning z DeepSeek V4, operacje entropii krzyżowej oraz szybsze shadery dla modeli mieszanki ekspertów; kompilacja CUDA ponownie włącza macierzowe jądra MoE na starszych kartach sm_60 i korzysta teraz ze swojej szybkiej ścieżki dla mieszanki ekspertów niezależnie od liczby aktywnych ekspertów; a kompilacja ROCm otrzymuje szybszy iloczyn skalarny Q2_0 na kartach RDNA 4 (gfx1201) oraz nowe ustawienia mnożenia macierzy dla RDNA 3.
- Kompilacja Vulkan naprawia ponadto nadmierne dopełnianie tensorów, przez które modele mieszanki ekspertów zajmowały znacznie więcej pamięci, niż potrzebują, a niekiedy w ogóle nie dawały się wczytać („Requested preallocation size is too large”).
- Poprawki poprawności w silniku tensorów: optymalizacja grafu w Vulkanie mogła pominąć zależność między tensorami dzielącymi pamięć, splot transponowany dawał błędne wyniki dla danych wsadowych, a kontrola rozmiaru przydziału błędnie podawała zapotrzebowanie silnika obliczeniowego na pamięć. Optymalizatorowi grafu można teraz również wskazać, których przydziałów pamięci nie wolno użyć ponownie, co przywraca łączenie operacji, które silniki obliczeniowe musiały dotąd wyłączać dla bezpieczeństwa.
- Wczytywanie modelu odczytuje duże tensory z dysku na żądanie (\`--lazy-mode\`, stosowane automatycznie do tensorów powyżej 4 GiB), a kwantyzacja ogranicza teraz pamięć roboczą, zamiast wczytywać całe duże tensory do pamięci RAM.
- Wbudowany interfejs czatu otwiera Ustawienia i Serwery MCP jako okna dialogowe, zastępuje nadpisania MCP dla poszczególnych rozmów polityką narzędzi dla rozmowy oraz przebudowuje wybór modelu i panel załączników. Biblioteka HTTP obsługująca API i ten interfejs przechodzi na cpp-httplib 0.54.0.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10630...b10711`,
    fr_FR: `Met à jour llama.cpp vers la version b10711.

Une mise à jour de maintenance — 81 versions depuis la b10630, sans changement à apporter à votre installation.

- Ajoute la prise en charge des architectures de modèle Qwen3.8-Flash-Next et nanbeige4.2-3B, et corrige la conversion des modèles Nemotron 3.5 Lightning ainsi que des adaptateurs LoRA Nemotron-H.
- La nouvelle option serveur \`--n-cpu-ffn\` conserve sur le processeur le nombre de couches « feed-forward » que vous indiquez, ce qui peut permettre à un modèle de tenir sur une carte graphique dont la mémoire serait autrement insuffisante. Indiquez-la dans **Définir le modèle** → *Personnalisé* → arguments supplémentaires.
- La nouvelle option serveur \`--kv-unified-per-slot\` donne à chaque emplacement de requête son propre contexte, si bien que les conversations simultanées ne partagent plus un seul budget de cache KV.
- Corrige un plantage lorsqu'une conversation dépasse sa fenêtre de contexte sur un modèle utilisant un « lightning indexer », comme la famille DeepSeek V4, avec un cache KV non quantifié.
- Prise en charge matérielle plus large et plus rapide : la version Vulkan gagne la prise en charge de l'indexeur « lightning » de DeepSeek V4, des opérations d'entropie croisée et des shaders plus rapides pour les modèles à mélange d'experts ; la version CUDA réactive les noyaux matriciels MoE sur les cartes sm_60 plus anciennes et emprunte désormais son chemin rapide pour le mélange d'experts quel que soit le nombre d'experts actifs ; et la version ROCm gagne un produit scalaire Q2_0 plus rapide sur les cartes RDNA 4 (gfx1201) ainsi que des réglages de multiplication matricielle revus pour RDNA 3.
- La version Vulkan corrige également un remplissage excessif des tenseurs, qui faisait consommer aux modèles à mélange d'experts bien plus de mémoire que nécessaire et pouvait même empêcher leur chargement avec l'erreur « Requested preallocation size is too large ».
- Corrections d'exactitude dans le moteur de tenseurs : une passe d'optimisation du graphe Vulkan pouvait perdre une dépendance entre tenseurs partageant leur mémoire, la convolution transposée donnait des résultats erronés sur des entrées par lots, et une vérification de la taille d'allocation indiquait mal l'espace requis par un moteur de calcul. L'optimiseur du graphe peut désormais aussi se voir indiquer quelles allocations ne doivent pas être réutilisées, ce qui réactive des fusions d'opérations que les moteurs de calcul devaient jusqu'ici désactiver par précaution.
- Le chargement d'un modèle lit ses gros tenseurs depuis le disque à la demande (\`--lazy-mode\`, appliqué automatiquement aux tenseurs de plus de 4 Gio), et la quantification plafonne désormais sa mémoire de travail au lieu de charger de gros tenseurs entiers en RAM.
- L'interface de discussion intégrée ouvre les Paramètres et les Serveurs MCP sous forme de boîtes de dialogue, remplace les surcharges MCP par conversation par une politique d'outils par conversation, et retravaille le sélecteur de modèles et le panneau de pièces jointes. La bibliothèque HTTP qui sert l'API et cette interface passe à cpp-httplib 0.54.0.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10630...b10711`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
