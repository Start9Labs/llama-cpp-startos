import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10156:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10156.

- Advances all four variants — generic, NVIDIA (CUDA), AMD (ROCm) and Vulkan — to the same upstream build (162 commits since b9994).
- Adds new model architectures, including MiniMax-M3 (with vision), GLM-5.2, Nanbeige4.2 and MiMo-V2.5 audio input.
- Fixes streaming responses for models whose name contains a slash, which affects any model loaded from a Hugging Face repository.
- Reworks the built-in web UI: bulk conversation actions, cheaper rendering while a reply streams, corrected settings precedence and several regression fixes.
- Performance work across the CUDA, Vulkan, SYCL and OpenCL backends. On AMD, the ROCm build drops the rocWMMA flash-attention path, so check that generation still performs as expected on a discrete Radeon card.
- Refreshes vendored dependencies (BoringSSL, cpp-httplib) and fixes a use-after-free when a LoRA adapter fails to load.
- No \`llama-server\` command-line flag used by this package was renamed or removed, so the built-in model presets and any custom arguments you have set continue to work unchanged.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b9994...b10156`,
    es_ES: `Actualiza llama.cpp a la compilación b10156.

- Actualiza las cuatro variantes —genérica, NVIDIA (CUDA), AMD (ROCm) y Vulkan— a la misma compilación de origen (162 commits desde la b9994).
- Añade nuevas arquitecturas de modelos, entre ellas MiniMax-M3 (con visión), GLM-5.2, Nanbeige4.2 y la entrada de audio de MiMo-V2.5.
- Corrige las respuestas en streaming de los modelos cuyo nombre contiene una barra, lo que afecta a cualquier modelo cargado desde un repositorio de Hugging Face.
- Renueva la interfaz web integrada: acciones masivas sobre conversaciones, menor coste de renderizado mientras se transmite una respuesta, corrección de la precedencia de los ajustes y varias correcciones de regresiones.
- Mejoras de rendimiento en los backends CUDA, Vulkan, SYCL y OpenCL. En AMD, la compilación ROCm elimina la ruta de flash-attention basada en rocWMMA, así que comprueba que la generación siga funcionando como esperas en una tarjeta Radeon dedicada.
- Actualiza las dependencias incorporadas (BoringSSL, cpp-httplib) y corrige un uso de memoria después de liberarla cuando falla la carga de un adaptador LoRA.
- Ninguna opción de línea de comandos de \`llama-server\` utilizada por este paquete se ha renombrado ni eliminado, por lo que los ajustes predefinidos de modelos y los argumentos personalizados que hayas configurado siguen funcionando sin cambios.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b9994...b10156`,
    de_DE: `Aktualisiert llama.cpp auf Build b10156.

- Hebt alle vier Varianten – generisch, NVIDIA (CUDA), AMD (ROCm) und Vulkan – auf denselben Upstream-Build an (162 Commits seit b9994).
- Ergänzt neue Modellarchitekturen, darunter MiniMax-M3 (mit Bildverarbeitung), GLM-5.2, Nanbeige4.2 und die Audioeingabe von MiMo-V2.5.
- Behebt Streaming-Antworten bei Modellen, deren Name einen Schrägstrich enthält – betrifft jedes aus einem Hugging-Face-Repository geladene Modell.
- Überarbeitet die integrierte Web-Oberfläche: Sammelaktionen für Unterhaltungen, geringerer Rendering-Aufwand während eine Antwort gestreamt wird, korrigierte Rangfolge der Einstellungen und mehrere Regressionskorrekturen.
- Leistungsverbesserungen in den Backends CUDA, Vulkan, SYCL und OpenCL. Bei AMD entfällt im ROCm-Build der rocWMMA-Pfad für Flash Attention; prüfe daher auf einer dedizierten Radeon-Karte, ob die Generierung weiterhin wie erwartet läuft.
- Aktualisiert mitgelieferte Abhängigkeiten (BoringSSL, cpp-httplib) und behebt einen Use-after-free, wenn das Laden eines LoRA-Adapters fehlschlägt.
- Kein von diesem Paket verwendetes \`llama-server\`-Kommandozeilen-Flag wurde umbenannt oder entfernt; die integrierten Modell-Voreinstellungen und selbst gesetzte Argumente funktionieren daher unverändert weiter.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b9994...b10156`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10156.

- Podnosi wszystkie cztery warianty — generyczny, NVIDIA (CUDA), AMD (ROCm) i Vulkan — do tej samej kompilacji źródłowej (162 commity od b9994).
- Dodaje nowe architektury modeli, w tym MiniMax-M3 (z obsługą obrazu), GLM-5.2, Nanbeige4.2 oraz wejście audio MiMo-V2.5.
- Naprawia odpowiedzi strumieniowe dla modeli, których nazwa zawiera ukośnik — dotyczy każdego modelu wczytywanego z repozytorium Hugging Face.
- Przebudowuje wbudowany interfejs webowy: zbiorcze operacje na rozmowach, tańsze renderowanie w trakcie strumieniowania odpowiedzi, poprawiona kolejność stosowania ustawień i kilka poprawek regresji.
- Usprawnienia wydajności w backendach CUDA, Vulkan, SYCL i OpenCL. W przypadku AMD kompilacja ROCm usuwa ścieżkę flash-attention opartą na rocWMMA, więc sprawdź, czy generowanie nadal działa zgodnie z oczekiwaniami na dedykowanej karcie Radeon.
- Odświeża wbudowane zależności (BoringSSL, cpp-httplib) i naprawia użycie pamięci po zwolnieniu przy nieudanym wczytaniu adaptera LoRA.
- Żadna używana przez ten pakiet opcja wiersza poleceń \`llama-server\` nie została zmieniona ani usunięta, więc wbudowane ustawienia modeli oraz własne argumenty działają bez zmian.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b9994...b10156`,
    fr_FR: `Met à jour llama.cpp vers la version b10156.

- Fait passer les quatre variantes — générique, NVIDIA (CUDA), AMD (ROCm) et Vulkan — à la même version amont (162 commits depuis la b9994).
- Ajoute de nouvelles architectures de modèles, dont MiniMax-M3 (avec vision), GLM-5.2, Nanbeige4.2 et l'entrée audio de MiMo-V2.5.
- Corrige les réponses en streaming pour les modèles dont le nom contient une barre oblique, ce qui concerne tout modèle chargé depuis un dépôt Hugging Face.
- Remanie l'interface web intégrée : actions groupées sur les conversations, rendu moins coûteux pendant le streaming d'une réponse, ordre de priorité des réglages corrigé et plusieurs correctifs de régressions.
- Améliorations de performances sur les backends CUDA, Vulkan, SYCL et OpenCL. Côté AMD, la version ROCm abandonne le chemin flash-attention basé sur rocWMMA : vérifiez que la génération se comporte toujours comme prévu sur une carte Radeon dédiée.
- Met à jour les dépendances embarquées (BoringSSL, cpp-httplib) et corrige une utilisation après libération lors de l'échec du chargement d'un adaptateur LoRA.
- Aucune option de ligne de commande \`llama-server\` utilisée par ce paquet n'a été renommée ou supprimée : les préréglages de modèles intégrés et les arguments personnalisés que vous avez définis continuent de fonctionner à l'identique.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b9994...b10156`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
