import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10573:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10573.

A maintenance bump — 123 builds since b10450.

- Adds support for the BailingMoE3 architecture, which runs the Ling 3.0 Flash models, and for the Granite SWA and Granite MoE SWA architectures. Speculative decoding also accepts DSpark draft models for LFM2.
- Fixes a scheduler race that could produce wrong results when a model was split across more than one backend.
- Multimodal requests use less memory on the server, accept WebP images, gain a \`--mmproj-device\` flag to place the vision projector on a chosen device, and read images more accurately (LFM2 tiling, DeepSeek-OCR).
- Truncated or corrupted LoRA adapters are rejected with an error instead of loading silently with zero-padded weights, and grammar-constrained output falls back gracefully when a JSON schema uses a regular expression llama.cpp cannot compile.
- Faster inference on the CUDA and Vulkan builds.
- The built-in chat UI groups its built-in tools into Server and Browser, adds a browser page-info tool, and tidies up the settings navigation.
- The date-and-time tool moved out of the server into the chat UI. If you list tools explicitly in **Set Model**'s extra arguments (\`--tools ...\`), drop \`get_datetime\` from the list or the server will refuse to start.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10450...b10573`,
    es_ES: `Actualiza llama.cpp a la compilación b10573.

Una actualización de mantenimiento: 123 compilaciones desde la b10450.

- Añade compatibilidad con la arquitectura BailingMoE3, que permite ejecutar los modelos Ling 3.0 Flash, y con las arquitecturas Granite SWA y Granite MoE SWA. La decodificación especulativa también admite modelos borrador DSpark para LFM2.
- Corrige una condición de carrera en el planificador que podía dar resultados incorrectos cuando un modelo se repartía entre más de un backend.
- Las peticiones multimodales consumen menos memoria en el servidor, aceptan imágenes WebP, incorporan la opción \`--mmproj-device\` para situar el proyector de visión en un dispositivo concreto y leen las imágenes con más precisión (mosaico de LFM2, DeepSeek-OCR).
- Los adaptadores LoRA truncados o dañados se rechazan con un error en lugar de cargarse en silencio con pesos rellenados de ceros, y la salida restringida por gramática recurre a una alternativa cuando un esquema JSON usa una expresión regular que llama.cpp no puede compilar.
- Inferencia más rápida en las compilaciones CUDA y Vulkan.
- La interfaz de chat integrada agrupa sus herramientas integradas en Servidor y Navegador, añade una herramienta de información de página del navegador y reorganiza la navegación de los ajustes.
- La herramienta de fecha y hora se ha trasladado del servidor a la interfaz de chat. Si enumera herramientas explícitamente en los argumentos adicionales de **Establecer modelo** (\`--tools ...\`), quite \`get_datetime\` de la lista o el servidor no arrancará.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10450...b10573`,
    de_DE: `Aktualisiert llama.cpp auf Build b10573.

Ein Wartungsupdate – 123 Builds seit b10450.

- Ergänzt Unterstützung für die Architektur BailingMoE3, mit der sich die Modelle Ling 3.0 Flash ausführen lassen, sowie für die Architekturen Granite SWA und Granite MoE SWA. Die spekulative Dekodierung akzeptiert außerdem DSpark-Entwurfsmodelle für LFM2.
- Behebt ein Wettlaufproblem im Planer, das zu falschen Ergebnissen führen konnte, wenn ein Modell auf mehr als ein Backend verteilt wurde.
- Multimodale Anfragen benötigen auf dem Server weniger Speicher, akzeptieren WebP-Bilder, erhalten die Option \`--mmproj-device\`, um den Vision-Projektor auf einem bestimmten Gerät auszuführen, und lesen Bilder genauer (LFM2-Kachelung, DeepSeek-OCR).
- Abgeschnittene oder beschädigte LoRA-Adapter werden mit einem Fehler abgelehnt, statt still mit nullgefüllten Gewichten geladen zu werden, und grammatikgebundene Ausgaben weichen auf eine Alternative aus, wenn ein JSON-Schema einen regulären Ausdruck enthält, den llama.cpp nicht übersetzen kann.
- Schnellere Inferenz in den CUDA- und Vulkan-Builds.
- Die integrierte Chat-Oberfläche gruppiert ihre eingebauten Werkzeuge in Server und Browser, ergänzt ein Browser-Werkzeug für Seiteninformationen und räumt die Einstellungsnavigation auf.
- Das Werkzeug für Datum und Uhrzeit ist vom Server in die Chat-Oberfläche umgezogen. Wenn Sie in den zusätzlichen Argumenten von **Modell festlegen** Werkzeuge ausdrücklich auflisten (\`--tools ...\`), entfernen Sie \`get_datetime\` aus der Liste, sonst startet der Server nicht.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10450...b10573`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10573.

Aktualizacja konserwacyjna — 123 kompilacje od b10450.

- Dodaje obsługę architektury BailingMoE3, która pozwala uruchamiać modele Ling 3.0 Flash, oraz architektur Granite SWA i Granite MoE SWA. Dekodowanie spekulatywne przyjmuje też modele robocze DSpark dla LFM2.
- Naprawia sytuację wyścigu w harmonogramie, która mogła dawać błędne wyniki, gdy model był rozdzielony na więcej niż jeden backend.
- Żądania multimodalne zużywają mniej pamięci na serwerze, przyjmują obrazy WebP, zyskują opcję \`--mmproj-device\` pozwalającą umieścić projektor wizyjny na wybranym urządzeniu i dokładniej odczytują obrazy (kafelkowanie LFM2, DeepSeek-OCR).
- Obcięte lub uszkodzone adaptery LoRA są odrzucane z błędem, zamiast być po cichu wczytywane z wagami uzupełnionymi zerami, a wyjście ograniczone gramatyką korzysta z rozwiązania zastępczego, gdy schemat JSON zawiera wyrażenie regularne, którego llama.cpp nie potrafi skompilować.
- Szybsze wnioskowanie w kompilacjach CUDA i Vulkan.
- Wbudowany interfejs czatu grupuje wbudowane narzędzia w kategorie Serwer i Przeglądarka, dodaje przeglądarkowe narzędzie z informacjami o stronie i porządkuje nawigację w ustawieniach.
- Narzędzie daty i godziny zostało przeniesione z serwera do interfejsu czatu. Jeśli wymieniasz narzędzia jawnie w dodatkowych argumentach akcji **Ustaw model** (\`--tools ...\`), usuń \`get_datetime\` z listy, inaczej serwer się nie uruchomi.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10450...b10573`,
    fr_FR: `Met à jour llama.cpp vers la version b10573.

Une mise à jour de maintenance — 123 versions depuis la b10450.

- Ajoute la prise en charge de l'architecture BailingMoE3, qui permet d'exécuter les modèles Ling 3.0 Flash, ainsi que des architectures Granite SWA et Granite MoE SWA. Le décodage spéculatif accepte également les modèles brouillons DSpark pour LFM2.
- Corrige une situation de compétition dans l'ordonnanceur qui pouvait produire des résultats erronés lorsqu'un modèle était réparti sur plus d'un backend.
- Les requêtes multimodales consomment moins de mémoire côté serveur, acceptent les images WebP, gagnent l'option \`--mmproj-device\` pour placer le projecteur visuel sur l'appareil choisi et lisent les images plus précisément (tuilage LFM2, DeepSeek-OCR).
- Les adaptateurs LoRA tronqués ou corrompus sont rejetés avec une erreur au lieu d'être chargés silencieusement avec des poids complétés par des zéros, et la sortie contrainte par grammaire bascule sur une solution de repli lorsqu'un schéma JSON utilise une expression régulière que llama.cpp ne sait pas compiler.
- Inférence plus rapide sur les versions CUDA et Vulkan.
- L'interface de discussion intégrée regroupe ses outils intégrés en Serveur et Navigateur, ajoute un outil d'informations de page du navigateur et réorganise la navigation des paramètres.
- L'outil de date et d'heure a été déplacé du serveur vers l'interface de discussion. Si vous listez explicitement des outils dans les arguments supplémentaires de **Définir le modèle** (\`--tools ...\`), retirez \`get_datetime\` de la liste, sinon le serveur ne démarrera pas.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10450...b10573`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
