import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '12110:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b12110 at the stable v0.9.0 release. Requires StartOS 0.4.1 or later.

- Adds Clover, Limite, Metis-1.6 and Mistral Large 4 model support, FP8 E4M3 quantization, Chatterbox speech synthesis, Nemotron 3.5 transcription and predefined Pocket TTS voices.
- Speeds up Gemma 4 E2B/E4B prompt processing and concurrent inference with a unified KV cache. Improves GPU performance, model loading and tool-call handling.
- Fixes ignored extra parameters in the Responses API and improves chat scrolling, queued messages and interrupted tool-call display.
- Set Model no longer confuses cached F16 and BF16 weights. Existing model settings and downloaded GGUF weights need no conversion; custom saved slot caches may need to be recreated after updating.

[Full upstream release notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)
[Changes since the previous build](https://github.com/ggml-org/llama.cpp/compare/b11960...b12110)`,
    es_ES: `Actualiza llama.cpp a la compilación b12110 de la versión estable v0.9.0. Requiere StartOS 0.4.1 o posterior.

- Añade compatibilidad con los modelos Clover, Limite, Metis-1.6 y Mistral Large 4, cuantización FP8 E4M3, síntesis de voz Chatterbox, transcripción Nemotron 3.5 y voces predefinidas de Pocket TTS.
- Acelera el procesamiento de prompts en Gemma 4 E2B/E4B y la inferencia simultánea con una caché KV unificada. Mejora el rendimiento de GPU, la carga de modelos y las llamadas a herramientas.
- Corrige los parámetros adicionales ignorados en la API Responses y mejora el desplazamiento del chat, los mensajes en cola y la visualización de llamadas a herramientas interrumpidas.
- Establecer modelo ya no confunde los pesos F16 y BF16 en caché. La configuración del modelo y los pesos GGUF descargados no necesitan conversión; puede ser necesario recrear las cachés de ranuras guardadas mediante opciones personalizadas tras actualizar.

[Notas completas de la versión original](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)
[Cambios desde la compilación anterior](https://github.com/ggml-org/llama.cpp/compare/b11960...b12110)`,
    de_DE: `Aktualisiert llama.cpp auf Build b12110 der stabilen Veröffentlichung v0.9.0. Erfordert StartOS 0.4.1 oder neuer.

- Ergänzt Unterstützung für Clover, Limite, Metis-1.6 und Mistral Large 4, FP8-E4M3-Quantisierung, Chatterbox-Sprachsynthese, Nemotron-3.5-Transkription und vordefinierte Pocket-TTS-Stimmen.
- Beschleunigt die Prompt-Verarbeitung bei Gemma 4 E2B/E4B und gleichzeitige Inferenz mit gemeinsamem KV-Cache. Verbessert GPU-Leistung, Modellladen und Werkzeugaufrufe.
- Behebt ignorierte Zusatzparameter in der Responses-API und verbessert das Scrollen im Chat, wartende Nachrichten und die Anzeige unterbrochener Werkzeugaufrufe.
- Modell festlegen verwechselt zwischengespeicherte F16- und BF16-Gewichte nicht mehr. Modelleinstellungen und heruntergeladene GGUF-Gewichte benötigen keine Konvertierung; benutzerdefinierte gespeicherte Slot-Caches müssen nach dem Update möglicherweise neu erstellt werden.

[Vollständige Upstream-Veröffentlichungsnotizen](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)
[Änderungen seit dem vorherigen Build](https://github.com/ggml-org/llama.cpp/compare/b11960...b12110)`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b12110 ze stabilnego wydania v0.9.0. Wymaga StartOS 0.4.1 lub nowszego.

- Dodaje obsługę modeli Clover, Limite, Metis-1.6 i Mistral Large 4, kwantyzację FP8 E4M3, syntezę mowy Chatterbox, transkrypcję Nemotron 3.5 oraz gotowe głosy Pocket TTS.
- Przyspiesza przetwarzanie promptów w Gemma 4 E2B/E4B i równoczesne wnioskowanie ze wspólną pamięcią podręczną KV. Ulepsza wydajność GPU, wczytywanie modeli i wywoływanie narzędzi.
- Naprawia ignorowanie dodatkowych parametrów w API Responses oraz ulepsza przewijanie czatu, wiadomości w kolejce i wyświetlanie przerwanych wywołań narzędzi.
- Ustaw model nie myli już zapisanych wag F16 i BF16. Ustawienia modeli i pobrane wagi GGUF nie wymagają konwersji; po aktualizacji może być konieczne ponowne utworzenie zapisanych pamięci podręcznych slotów używanych z własnymi opcjami.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)
[Zmiany od poprzedniej kompilacji](https://github.com/ggml-org/llama.cpp/compare/b11960...b12110)`,
    fr_FR: `Met à jour llama.cpp vers la compilation b12110 de la version stable v0.9.0. Nécessite StartOS 0.4.1 ou ultérieur.

- Ajoute la prise en charge de Clover, Limite, Metis-1.6 et Mistral Large 4, la quantification FP8 E4M3, la synthèse vocale Chatterbox, la transcription Nemotron 3.5 et les voix prédéfinies de Pocket TTS.
- Accélère le traitement des prompts de Gemma 4 E2B/E4B et l’inférence simultanée avec un cache KV unifié. Améliore les performances GPU, le chargement des modèles et les appels d’outils.
- Corrige les paramètres supplémentaires ignorés par l’API Responses et améliore le défilement des discussions, les messages en attente et l’affichage des appels d’outils interrompus.
- Définir le modèle ne confond plus les poids F16 et BF16 en cache. Les réglages du modèle et les poids GGUF téléchargés ne nécessitent aucune conversion ; les caches d’emplacement enregistrés avec des options personnalisées peuvent devoir être recréés après la mise à jour.

[Notes complètes de la version amont](https://github.com/ggml-org/llama.cpp/releases/tag/v0.9.0)
[Modifications depuis la compilation précédente](https://github.com/ggml-org/llama.cpp/compare/b11960...b12110)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
