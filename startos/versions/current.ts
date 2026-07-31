import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10326:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10326.

- Advances all four variants — generic, NVIDIA (CUDA), AMD (ROCm) and Vulkan — to the same upstream build (332 builds since b9994).
- Adds support for new model architectures, including MiniMax-M3 (with vision), GLM-5.2 with speculative decoding, GLM-4.7-Flash, DeepSeek V4 (including tool calls while reasoning), Qwen3-Next, Qwen3-TTS, MiniCPM-V 4.6, Nanbeige4.2 and Nemotron 3 Nano Omni.
- Makes the built-in chat UI noticeably faster while a reply is streaming, and adds bulk actions for conversations, slash commands, filesystem \`@\` mentions, generation statistics shown by default, clearer settings precedence and MCP tool servers over stdio.
- Improves the server: configurable CORS (\`--cors-origins\` and friends), a reworked prompt cache, a new \`get_info\` tool, speculative-decoding counters on \`/metrics\`, correct token accounting when speculative decoding replays a draft, a hardened file-search path walk, and fixes for model names containing a slash and for several crashes.
- Speeds up inference on many backends: CUDA graphs on Volta and Turing GPUs, Q2_0 quantization on CUDA and Vulkan, oneDNN and oneMKL flash attention on SYCL, and an SME2 kernel for ARM CPUs, plus Vulkan, Metal and ARM correctness fixes.
- \`llama-server\` now logs a notice that its own default port will change from 8080 to 9931 in a future release. This package sets the port explicitly, so the API stays where it is.
- Note if you set custom \`llama-server\` flags: \`--mlock\`, \`--mmap\`/\`--no-mmap\` and \`--direct-io\` are now deprecated in favour of \`--load-mode\`. The old flags still work, but cannot be combined with the new one. No flag this package passes to \`llama-server\` was renamed or removed.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b9994...b10326`,
    es_ES: `Actualiza llama.cpp a la compilación b10326.

- Actualiza las cuatro variantes —genérica, NVIDIA (CUDA), AMD (ROCm) y Vulkan— a la misma compilación de origen (332 compilaciones desde la b9994).
- Añade compatibilidad con nuevas arquitecturas de modelos, entre ellas MiniMax-M3 (con visión), GLM-5.2 con decodificación especulativa, GLM-4.7-Flash, DeepSeek V4 (incluidas las llamadas a herramientas durante el razonamiento), Qwen3-Next, Qwen3-TTS, MiniCPM-V 4.6, Nanbeige4.2 y Nemotron 3 Nano Omni.
- Hace que la interfaz de chat integrada sea notablemente más fluida mientras se transmite una respuesta, y añade acciones en lote para las conversaciones, comandos con barra, menciones \`@\` del sistema de archivos, estadísticas de generación visibles de forma predeterminada, una precedencia de ajustes más clara y servidores de herramientas MCP por stdio.
- Mejora el servidor: CORS configurable (\`--cors-origins\` y opciones afines), una caché de prompts rediseñada, una nueva herramienta \`get_info\`, contadores de decodificación especulativa en \`/metrics\`, un recuento correcto de tokens cuando la decodificación especulativa reproduce un borrador, un recorrido de búsqueda de archivos más robusto y correcciones para nombres de modelo que contienen una barra y para varios fallos.
- Acelera la inferencia en muchos backends: gráficos CUDA en GPU Volta y Turing, cuantización Q2_0 en CUDA y Vulkan, atención flash con oneDNN y oneMKL en SYCL, y un núcleo SME2 para CPU ARM, además de correcciones en Vulkan, Metal y ARM.
- \`llama-server\` ahora registra un aviso de que su puerto predeterminado cambiará de 8080 a 9931 en una versión futura. Este paquete fija el puerto de forma explícita, así que la API se mantiene donde está.
- Nota si usas opciones personalizadas de \`llama-server\`: \`--mlock\`, \`--mmap\`/\`--no-mmap\` y \`--direct-io\` quedan obsoletas en favor de \`--load-mode\`. Las opciones antiguas siguen funcionando, pero no pueden combinarse con la nueva. Ninguna opción que este paquete pasa a \`llama-server\` se ha renombrado ni eliminado.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b9994...b10326`,
    de_DE: `Aktualisiert llama.cpp auf Build b10326.

- Hebt alle vier Varianten – generisch, NVIDIA (CUDA), AMD (ROCm) und Vulkan – auf denselben Upstream-Build an (332 Builds seit b9994).
- Ergänzt Unterstützung für neue Modellarchitekturen, darunter MiniMax-M3 (mit Bildverarbeitung), GLM-5.2 mit spekulativer Dekodierung, GLM-4.7-Flash, DeepSeek V4 (einschließlich Werkzeugaufrufen während des Denkens), Qwen3-Next, Qwen3-TTS, MiniCPM-V 4.6, Nanbeige4.2 und Nemotron 3 Nano Omni.
- Macht die integrierte Chat-Oberfläche während einer laufenden Antwort deutlich flüssiger und ergänzt Sammelaktionen für Unterhaltungen, Slash-Befehle, \`@\`-Erwähnungen aus dem Dateisystem, standardmäßig eingeblendete Generierungsstatistiken, eine klarere Rangfolge der Einstellungen sowie MCP-Werkzeugserver über stdio.
- Verbessert den Server: konfigurierbares CORS (\`--cors-origins\` und verwandte Optionen), einen überarbeiteten Prompt-Cache, ein neues \`get_info\`-Werkzeug, Zähler für spekulative Dekodierung unter \`/metrics\`, eine korrekte Token-Zählung, wenn die spekulative Dekodierung einen Entwurf erneut abspielt, einen abgesicherten Pfaddurchlauf der Dateisuche sowie Korrekturen für Modellnamen mit Schrägstrich und für mehrere Abstürze.
- Beschleunigt die Inferenz auf vielen Backends: CUDA-Graphen auf Volta- und Turing-GPUs, Q2_0-Quantisierung auf CUDA und Vulkan, oneDNN- und oneMKL-Flash-Attention auf SYCL sowie ein SME2-Kernel für ARM-CPUs, dazu Korrekturen für Vulkan, Metal und ARM.
- \`llama-server\` gibt jetzt einen Hinweis aus, dass sich sein Standardport in einer künftigen Version von 8080 auf 9931 ändert. Dieses Paket setzt den Port ausdrücklich, die API bleibt also unverändert erreichbar.
- Hinweis bei eigenen \`llama-server\`-Optionen: \`--mlock\`, \`--mmap\`/\`--no-mmap\` und \`--direct-io\` gelten künftig als veraltet und werden durch \`--load-mode\` ersetzt. Die alten Optionen funktionieren weiterhin, lassen sich aber nicht mit der neuen kombinieren. Keine Option, die dieses Paket an \`llama-server\` übergibt, wurde umbenannt oder entfernt.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b9994...b10326`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10326.

- Podnosi wszystkie cztery warianty — generyczny, NVIDIA (CUDA), AMD (ROCm) i Vulkan — do tej samej kompilacji źródłowej (332 kompilacje od b9994).
- Dodaje obsługę nowych architektur modeli, w tym MiniMax-M3 (z obsługą obrazu), GLM-5.2 z dekodowaniem spekulatywnym, GLM-4.7-Flash, DeepSeek V4 (wraz z wywołaniami narzędzi w trakcie rozumowania), Qwen3-Next, Qwen3-TTS, MiniCPM-V 4.6, Nanbeige4.2 oraz Nemotron 3 Nano Omni.
- Sprawia, że wbudowany interfejs czatu działa zauważalnie płynniej podczas strumieniowania odpowiedzi, oraz dodaje operacje zbiorcze na rozmowach, polecenia z ukośnikiem, wzmianki \`@\` z systemu plików, domyślnie widoczne statystyki generowania, czytelniejszą hierarchię ustawień i serwery narzędzi MCP przez stdio.
- Ulepsza serwer: konfigurowalne CORS (\`--cors-origins\` i pokrewne), przebudowaną pamięć podręczną promptów, nowe narzędzie \`get_info\`, liczniki dekodowania spekulatywnego w \`/metrics\`, poprawne zliczanie tokenów przy powtórce szkicu w dekodowaniu spekulatywnym, bezpieczniejsze przechodzenie katalogów przy wyszukiwaniu plików oraz poprawki dla nazw modeli zawierających ukośnik i dla kilku awarii.
- Przyspiesza wnioskowanie na wielu backendach: grafy CUDA na GPU Volta i Turing, kwantyzacja Q2_0 w CUDA i Vulkan, flash attention przez oneDNN i oneMKL w SYCL oraz jądro SME2 dla procesorów ARM, a także poprawki dla Vulkan, Metal i ARM.
- \`llama-server\` wypisuje teraz informację, że w przyszłej wersji jego domyślny port zmieni się z 8080 na 9931. Ten pakiet ustawia port jawnie, więc API pozostaje pod tym samym adresem.
- Uwaga dla osób używających własnych opcji \`llama-server\`: \`--mlock\`, \`--mmap\`/\`--no-mmap\` i \`--direct-io\` są teraz przestarzałe i zastąpione przez \`--load-mode\`. Stare opcje nadal działają, ale nie można ich łączyć z nową. Żadna opcja przekazywana przez ten pakiet do \`llama-server\` nie została zmieniona ani usunięta.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b9994...b10326`,
    fr_FR: `Met à jour llama.cpp vers la version b10326.

- Fait passer les quatre variantes — générique, NVIDIA (CUDA), AMD (ROCm) et Vulkan — à la même version amont (332 versions depuis la b9994).
- Ajoute la prise en charge de nouvelles architectures de modèles, dont MiniMax-M3 (avec vision), GLM-5.2 avec décodage spéculatif, GLM-4.7-Flash, DeepSeek V4 (y compris les appels d'outils pendant le raisonnement), Qwen3-Next, Qwen3-TTS, MiniCPM-V 4.6, Nanbeige4.2 et Nemotron 3 Nano Omni.
- Rend l'interface de discussion intégrée nettement plus fluide pendant la diffusion d'une réponse, et ajoute des actions groupées sur les conversations, des commandes en barre oblique, des mentions \`@\` du système de fichiers, des statistiques de génération affichées par défaut, une hiérarchie de réglages plus claire et des serveurs d'outils MCP via stdio.
- Améliore le serveur : CORS configurable (\`--cors-origins\` et options associées), un cache de prompts repensé, un nouvel outil \`get_info\`, des compteurs de décodage spéculatif sur \`/metrics\`, un comptage correct des jetons lorsque le décodage spéculatif rejoue un brouillon, un parcours de recherche de fichiers renforcé, ainsi que des correctifs pour les noms de modèles contenant une barre oblique et pour plusieurs plantages.
- Accélère l'inférence sur de nombreux backends : graphes CUDA sur les GPU Volta et Turing, quantification Q2_0 sur CUDA et Vulkan, flash attention via oneDNN et oneMKL sur SYCL, et un noyau SME2 pour les processeurs ARM, ainsi que des correctifs Vulkan, Metal et ARM.
- \`llama-server\` signale désormais que son port par défaut passera de 8080 à 9931 dans une version future. Ce paquet définit le port explicitement, l'API reste donc au même endroit.
- Remarque si vous définissez des options \`llama-server\` personnalisées : \`--mlock\`, \`--mmap\`/\`--no-mmap\` et \`--direct-io\` sont désormais dépréciées au profit de \`--load-mode\`. Les anciennes options fonctionnent toujours, mais ne peuvent pas être combinées avec la nouvelle. Aucune option que ce paquet transmet à \`llama-server\` n'a été renommée ou supprimée.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b9994...b10326`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
