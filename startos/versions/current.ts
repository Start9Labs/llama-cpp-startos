import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10398:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10398.

- A small maintenance bump — 18 builds since b10380.
- Hardens the GGUF model loader against malformed tensor dimensions and metadata types, so a corrupt or hostile model file is rejected instead of causing undefined behaviour.
- Adds ternary TQ2_0 quantization support to the Vulkan backend.
- Server slots can now be saved and restored when the conversation includes media (images or audio), and the built-in chat UI gains a \`read_media\` tool.
- Adds runtime CPU feature detection for KleidiAI on ARM64, and fixes conversion of Gemma 4 models with transformers 5.15.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10380...b10398`,
    es_ES: `Actualiza llama.cpp a la compilación b10398.

- Una actualización menor de mantenimiento: 18 compilaciones desde la b10380.
- Refuerza el cargador de modelos GGUF frente a dimensiones de tensores y tipos de metadatos malformados, de modo que un archivo de modelo corrupto o malicioso se rechaza en lugar de provocar un comportamiento indefinido.
- Añade compatibilidad con la cuantización ternaria TQ2_0 en el backend de Vulkan.
- Las ranuras del servidor ya se pueden guardar y restaurar cuando la conversación incluye medios (imágenes o audio), y la interfaz de chat integrada incorpora una herramienta \`read_media\`.
- Añade detección de características de la CPU en tiempo de ejecución para KleidiAI en ARM64 y corrige la conversión de modelos Gemma 4 con transformers 5.15.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10380...b10398`,
    de_DE: `Aktualisiert llama.cpp auf Build b10398.

- Ein kleines Wartungsupdate – 18 Builds seit b10380.
- Härtet den GGUF-Modell-Loader gegen fehlerhafte Tensordimensionen und Metadatentypen ab, sodass eine beschädigte oder bösartige Modelldatei abgewiesen wird, statt undefiniertes Verhalten auszulösen.
- Ergänzt Unterstützung für die ternäre TQ2_0-Quantisierung im Vulkan-Backend.
- Server-Slots lassen sich jetzt auch dann speichern und wiederherstellen, wenn die Unterhaltung Medien (Bilder oder Audio) enthält, und die integrierte Chat-Oberfläche erhält ein \`read_media\`-Werkzeug.
- Ergänzt eine Laufzeiterkennung von CPU-Funktionen für KleidiAI auf ARM64 und behebt die Konvertierung von Gemma-4-Modellen mit transformers 5.15.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10380...b10398`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10398.

- Niewielka aktualizacja konserwacyjna — 18 kompilacji od b10380.
- Wzmacnia moduł wczytywania modeli GGUF wobec błędnych wymiarów tensorów i typów metadanych, dzięki czemu uszkodzony lub złośliwy plik modelu jest odrzucany, zamiast powodować niezdefiniowane zachowanie.
- Dodaje obsługę kwantyzacji ternarnej TQ2_0 w backendzie Vulkan.
- Sloty serwera można teraz zapisywać i przywracać także wtedy, gdy rozmowa zawiera multimedia (obrazy lub dźwięk), a wbudowany interfejs czatu zyskuje narzędzie \`read_media\`.
- Dodaje wykrywanie funkcji procesora w czasie działania dla KleidiAI na ARM64 oraz poprawia konwersję modeli Gemma 4 z transformers 5.15.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10380...b10398`,
    fr_FR: `Met à jour llama.cpp vers la version b10398.

- Une petite mise à jour de maintenance — 18 versions depuis la b10380.
- Renforce le chargeur de modèles GGUF face aux dimensions de tenseurs et aux types de métadonnées malformés : un fichier de modèle corrompu ou malveillant est rejeté au lieu de provoquer un comportement indéfini.
- Ajoute la prise en charge de la quantification ternaire TQ2_0 dans le backend Vulkan.
- Les slots du serveur peuvent désormais être sauvegardés et restaurés lorsque la conversation contient des médias (images ou audio), et l'interface de discussion intégrée gagne un outil \`read_media\`.
- Ajoute une détection des fonctionnalités du processeur à l'exécution pour KleidiAI sur ARM64 et corrige la conversion des modèles Gemma 4 avec transformers 5.15.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10380...b10398`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
