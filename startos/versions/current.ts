import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10615:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10615.

- **Action required if you pass \`--tools\` yourself.** The date-and-time tool moved out of the server into the chat UI. If you list tools explicitly in **Set Model**'s extra arguments (\`--tools ...\`), drop \`get_datetime\` from the list or the server will refuse to start.
- A maintenance bump — 165 builds since b10450.
- Adds support for the BailingMoE3 architecture, which runs the Ling 3.0 Flash models, for the Granite SWA and Granite MoE SWA architectures, and for multi-token prediction in GLM-4.5-Air. Speculative decoding gains DSpark draft models for LFM2 and BailingMoE3, and accepts speculators-format checkpoints.
- Fixes a scheduler race that could produce wrong results when a model was split across more than one backend, along with correctness fixes for tensor-parallel splits and for DeepSeek V4 under concurrent requests.
- Multimodal requests use less memory on the server, accept WebP images, gain a \`--mmproj-device\` flag to place the vision projector on a chosen device, resize images the way Pillow does for better accuracy, and load videos whose index sits at the end of the file.
- Truncated or corrupted LoRA adapters are rejected with an error instead of loading silently with zero-padded weights, and grammar-constrained output falls back to an unconstrained string when a JSON schema uses a regular expression llama.cpp cannot express as a grammar.
- Faster inference on the CUDA and Vulkan builds.
- The built-in chat UI gains browser-style conversation tabs with keyboard shortcuts, groups its built-in tools into Server and Browser, adds a tool that reports the runtime environment, and tidies up the settings navigation.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10450...b10615`,
    es_ES: `Actualiza llama.cpp a la compilación b10615.

- **Requiere acción si usted mismo pasa \`--tools\`.** La herramienta de fecha y hora se ha trasladado del servidor a la interfaz de chat. Si enumera herramientas explícitamente en los argumentos adicionales de **Establecer modelo** (\`--tools ...\`), quite \`get_datetime\` de la lista o el servidor no arrancará.
- Una actualización de mantenimiento: 165 compilaciones desde la b10450.
- Añade compatibilidad con la arquitectura BailingMoE3, que permite ejecutar los modelos Ling 3.0 Flash, con las arquitecturas Granite SWA y Granite MoE SWA, y con la predicción de varios tokens en GLM-4.5-Air. La decodificación especulativa incorpora modelos borrador DSpark para LFM2 y BailingMoE3, y admite puntos de control en formato speculators.
- Corrige una condición de carrera en el planificador que podía dar resultados incorrectos cuando un modelo se repartía entre más de un backend, junto con correcciones para el reparto en paralelismo de tensores y para DeepSeek V4 con varias peticiones simultáneas.
- Las peticiones multimodales consumen menos memoria en el servidor, aceptan imágenes WebP, incorporan la opción \`--mmproj-device\` para situar el proyector de visión en un dispositivo concreto, redimensionan las imágenes igual que Pillow para mayor precisión y cargan vídeos cuyo índice está al final del archivo.
- Los adaptadores LoRA truncados o dañados se rechazan con un error en lugar de cargarse en silencio con pesos rellenados de ceros, y la salida restringida por gramática recurre a una cadena sin restricciones cuando un esquema JSON usa una expresión regular que llama.cpp no puede expresar como gramática.
- Inferencia más rápida en las compilaciones CUDA y Vulkan.
- La interfaz de chat integrada incorpora pestañas de conversación al estilo del navegador con atajos de teclado, agrupa sus herramientas integradas en Servidor y Navegador, añade una herramienta que informa del entorno de ejecución y reorganiza la navegación de los ajustes.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10450...b10615`,
    de_DE: `Aktualisiert llama.cpp auf Build b10615.

- **Handlungsbedarf, wenn Sie \`--tools\` selbst übergeben.** Das Werkzeug für Datum und Uhrzeit ist vom Server in die Chat-Oberfläche umgezogen. Wenn Sie in den zusätzlichen Argumenten von **Modell festlegen** Werkzeuge ausdrücklich auflisten (\`--tools ...\`), entfernen Sie \`get_datetime\` aus der Liste, sonst startet der Server nicht.
- Ein Wartungsupdate – 165 Builds seit b10450.
- Ergänzt Unterstützung für die Architektur BailingMoE3, mit der sich die Modelle Ling 3.0 Flash ausführen lassen, für die Architekturen Granite SWA und Granite MoE SWA sowie für die Mehrtoken-Vorhersage in GLM-4.5-Air. Die spekulative Dekodierung erhält DSpark-Entwurfsmodelle für LFM2 und BailingMoE3 und akzeptiert Prüfpunkte im speculators-Format.
- Behebt ein Wettlaufproblem im Planer, das zu falschen Ergebnissen führen konnte, wenn ein Modell auf mehr als ein Backend verteilt wurde, sowie Fehler bei der Aufteilung mit Tensor-Parallelität und bei DeepSeek V4 unter gleichzeitigen Anfragen.
- Multimodale Anfragen benötigen auf dem Server weniger Speicher, akzeptieren WebP-Bilder, erhalten die Option \`--mmproj-device\`, um den Vision-Projektor auf einem bestimmten Gerät auszuführen, skalieren Bilder wie Pillow für höhere Genauigkeit und laden Videos, deren Index am Ende der Datei steht.
- Abgeschnittene oder beschädigte LoRA-Adapter werden mit einem Fehler abgelehnt, statt still mit nullgefüllten Gewichten geladen zu werden, und grammatikgebundene Ausgaben weichen auf eine unbeschränkte Zeichenkette aus, wenn ein JSON-Schema einen regulären Ausdruck enthält, den llama.cpp nicht als Grammatik ausdrücken kann.
- Schnellere Inferenz in den CUDA- und Vulkan-Builds.
- Die integrierte Chat-Oberfläche erhält Konversations-Tabs im Browser-Stil mit Tastenkürzeln, gruppiert ihre eingebauten Werkzeuge in Server und Browser, ergänzt ein Werkzeug, das die Laufzeitumgebung meldet, und räumt die Einstellungsnavigation auf.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10450...b10615`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10615.

- **Wymagane działanie, jeśli sam przekazujesz \`--tools\`.** Narzędzie daty i godziny zostało przeniesione z serwera do interfejsu czatu. Jeśli wymieniasz narzędzia jawnie w dodatkowych argumentach akcji **Ustaw model** (\`--tools ...\`), usuń \`get_datetime\` z listy, inaczej serwer się nie uruchomi.
- Aktualizacja konserwacyjna — 165 kompilacji od b10450.
- Dodaje obsługę architektury BailingMoE3, która pozwala uruchamiać modele Ling 3.0 Flash, architektur Granite SWA i Granite MoE SWA oraz przewidywania wielu tokenów w GLM-4.5-Air. Dekodowanie spekulatywne zyskuje modele robocze DSpark dla LFM2 i BailingMoE3 oraz przyjmuje punkty kontrolne w formacie speculators.
- Naprawia sytuację wyścigu w harmonogramie, która mogła dawać błędne wyniki, gdy model był rozdzielony na więcej niż jeden backend, a także błędy w podziale przy równoległości tensorów i w DeepSeek V4 przy jednoczesnych żądaniach.
- Żądania multimodalne zużywają mniej pamięci na serwerze, przyjmują obrazy WebP, zyskują opcję \`--mmproj-device\` pozwalającą umieścić projektor wizyjny na wybranym urządzeniu, skalują obrazy tak jak Pillow dla większej dokładności i wczytują filmy, których indeks znajduje się na końcu pliku.
- Obcięte lub uszkodzone adaptery LoRA są odrzucane z błędem, zamiast być po cichu wczytywane z wagami uzupełnionymi zerami, a wyjście ograniczone gramatyką korzysta z nieograniczonego ciągu znaków, gdy schemat JSON zawiera wyrażenie regularne, którego llama.cpp nie potrafi wyrazić jako gramatyki.
- Szybsze wnioskowanie w kompilacjach CUDA i Vulkan.
- Wbudowany interfejs czatu zyskuje karty rozmów w stylu przeglądarki wraz ze skrótami klawiszowymi, grupuje wbudowane narzędzia w kategorie Serwer i Przeglądarka, dodaje narzędzie zgłaszające środowisko uruchomieniowe i porządkuje nawigację w ustawieniach.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10450...b10615`,
    fr_FR: `Met à jour llama.cpp vers la version b10615.

- **Action requise si vous passez \`--tools\` vous-même.** L'outil de date et d'heure a été déplacé du serveur vers l'interface de discussion. Si vous listez explicitement des outils dans les arguments supplémentaires de **Définir le modèle** (\`--tools ...\`), retirez \`get_datetime\` de la liste, sinon le serveur ne démarrera pas.
- Une mise à jour de maintenance — 165 versions depuis la b10450.
- Ajoute la prise en charge de l'architecture BailingMoE3, qui permet d'exécuter les modèles Ling 3.0 Flash, des architectures Granite SWA et Granite MoE SWA, et de la prédiction multi-jetons dans GLM-4.5-Air. Le décodage spéculatif gagne les modèles brouillons DSpark pour LFM2 et BailingMoE3, et accepte les points de contrôle au format speculators.
- Corrige une situation de compétition dans l'ordonnanceur qui pouvait produire des résultats erronés lorsqu'un modèle était réparti sur plus d'un backend, ainsi que des erreurs de répartition en parallélisme de tenseurs et dans DeepSeek V4 en cas de requêtes simultanées.
- Les requêtes multimodales consomment moins de mémoire côté serveur, acceptent les images WebP, gagnent l'option \`--mmproj-device\` pour placer le projecteur visuel sur l'appareil choisi, redimensionnent les images comme le fait Pillow pour plus de précision et chargent les vidéos dont l'index se trouve à la fin du fichier.
- Les adaptateurs LoRA tronqués ou corrompus sont rejetés avec une erreur au lieu d'être chargés silencieusement avec des poids complétés par des zéros, et la sortie contrainte par grammaire bascule sur une chaîne non contrainte lorsqu'un schéma JSON utilise une expression régulière que llama.cpp ne sait pas exprimer sous forme de grammaire.
- Inférence plus rapide sur les versions CUDA et Vulkan.
- L'interface de discussion intégrée gagne des onglets de conversation façon navigateur avec raccourcis clavier, regroupe ses outils intégrés en Serveur et Navigateur, ajoute un outil qui indique l'environnement d'exécution et réorganise la navigation des paramètres.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10450...b10615`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
