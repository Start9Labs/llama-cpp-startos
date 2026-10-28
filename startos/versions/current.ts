import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11960:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11960 at the stable v0.8.0 release.

- Adds LiquidAI LFM3 text, vision and audio models, DeepSeek V4.1 Flash, SenseNova U1 and other architectures. Compatible audio models gain realtime conversation and transcription APIs and a text-to-speech endpoint.
- The chat UI gains conversation search, conversation compaction and template-specific reasoning controls. Improves tool calling, model downloads, GPU performance and caching of CPU-resident MoE experts.
- Limits grammar recursion and rejects deeply nested JSON to prevent crashes. Existing model settings and downloaded GGUF weights need no conversion; custom saved slot caches may need to be recreated after updating.
- Updates the StartOS SDK to 3.1.1 with container-startup fixes. Retains the protective CA-store upgrade.

[Full upstream release notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
[Changes since the previous build](https://github.com/ggml-org/llama.cpp/compare/b11669...b11960)`,
    es_ES: `Actualiza llama.cpp a la compilación b11960 de la versión estable v0.8.0.

- Añade modelos LiquidAI LFM3 de texto, visión y audio, DeepSeek V4.1 Flash, SenseNova U1 y otras arquitecturas. Los modelos de audio compatibles incorporan API de conversación y transcripción en tiempo real y un endpoint de síntesis de voz.
- La interfaz de chat incorpora búsqueda y compactación de conversaciones y controles de razonamiento específicos de cada plantilla. Mejora las llamadas a herramientas, las descargas de modelos, el rendimiento de GPU y la caché de expertos MoE residentes en la CPU.
- Limita la recursión de las gramáticas y rechaza JSON con anidamiento excesivo para evitar fallos. La configuración del modelo y los pesos GGUF descargados no necesitan conversión; puede ser necesario recrear las cachés de ranuras guardadas mediante opciones personalizadas tras actualizar.
- Actualiza el SDK de StartOS a 3.1.1 con correcciones del arranque de contenedores. Mantiene la actualización protectora del almacén de certificados CA.

[Notas completas de la versión original](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
[Cambios desde la compilación anterior](https://github.com/ggml-org/llama.cpp/compare/b11669...b11960)`,
    de_DE: `Aktualisiert llama.cpp auf Build b11960 der stabilen Veröffentlichung v0.8.0.

- Ergänzt LiquidAI-LFM3-Modelle für Text, Bild und Audio, DeepSeek V4.1 Flash, SenseNova U1 und weitere Architekturen. Kompatible Audiomodelle erhalten APIs für Echtzeitgespräche und Transkription sowie einen Endpunkt für Sprachsynthese.
- Die Chat-Oberfläche erhält Gesprächssuche, Gesprächskomprimierung und vorlagenspezifische Reasoning-Steuerung. Verbessert Werkzeugaufrufe, Modelldownloads, GPU-Leistung und das Caching von MoE-Experten im CPU-Speicher.
- Begrenzt Grammatikrekursion und weist tief verschachteltes JSON zur Vermeidung von Abstürzen zurück. Modelleinstellungen und heruntergeladene GGUF-Gewichte benötigen keine Konvertierung; benutzerdefinierte gespeicherte Slot-Caches müssen nach dem Update möglicherweise neu erstellt werden.
- Aktualisiert das StartOS-SDK auf 3.1.1 mit Korrekturen beim Containerstart. Die schützende Aktualisierung des CA-Zertifikatsspeichers bleibt erhalten.

[Vollständige Upstream-Veröffentlichungsnotizen](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
[Änderungen seit dem vorherigen Build](https://github.com/ggml-org/llama.cpp/compare/b11669...b11960)`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11960 ze stabilnego wydania v0.8.0.

- Dodaje modele LiquidAI LFM3 obsługujące tekst, obraz i dźwięk, DeepSeek V4.1 Flash, SenseNova U1 oraz inne architektury. Zgodne modele dźwiękowe zyskują API rozmów i transkrypcji w czasie rzeczywistym oraz endpoint syntezy mowy.
- Interfejs czatu zyskuje wyszukiwanie i kompresję rozmów oraz sterowanie rozumowaniem zależne od szablonu. Ulepsza wywoływanie narzędzi, pobieranie modeli, wydajność GPU i pamięć podręczną ekspertów MoE znajdujących się w pamięci CPU.
- Ogranicza rekurencję gramatyk i odrzuca głęboko zagnieżdżony JSON, aby zapobiegać awariom. Ustawienia modelu i pobrane wagi GGUF nie wymagają konwersji; po aktualizacji może być konieczne ponowne utworzenie zapisanych pamięci podręcznych slotów używanych z własnymi opcjami.
- Aktualizuje SDK StartOS do 3.1.1 z poprawkami uruchamiania kontenerów. Zachowuje ochronną aktualizację magazynu certyfikatów CA.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
[Zmiany od poprzedniej kompilacji](https://github.com/ggml-org/llama.cpp/compare/b11669...b11960)`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11960 de la version stable v0.8.0.

- Ajoute les modèles LiquidAI LFM3 pour le texte, la vision et l’audio, DeepSeek V4.1 Flash, SenseNova U1 et d’autres architectures. Les modèles audio compatibles gagnent des API de conversation et de transcription en temps réel ainsi qu’un point d’accès de synthèse vocale.
- L’interface de discussion gagne la recherche et la compression des conversations ainsi que des contrôles de raisonnement propres aux modèles de conversation. Améliore les appels d’outils, les téléchargements de modèles, les performances GPU et le cache des experts MoE résidant en mémoire CPU.
- Limite la récursion des grammaires et rejette les objets JSON trop imbriqués pour éviter les plantages. Les réglages du modèle et les poids GGUF téléchargés ne nécessitent aucune conversion ; les caches d’emplacement enregistrés avec des options personnalisées peuvent devoir être recréés après la mise à jour.
- Met à jour le SDK StartOS vers 3.1.1 avec des corrections du démarrage des conteneurs. Conserve la mise à niveau protectrice du magasin de certificats CA.

[Notes complètes de la version amont](https://github.com/ggml-org/llama.cpp/releases/tag/v0.8.0)
[Modifications depuis la compilation précédente](https://github.com/ggml-org/llama.cpp/compare/b11669...b11960)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
