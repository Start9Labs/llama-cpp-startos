import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11429:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11429 at the stable v0.6.0 release.

- Adds Clef text/vision and Nimble decision models, the /v1/systemone decision API, and model input/output modalities in /v1/models. Adds MTP speculative decoding for Qwen4Exp and reduces its indexer memory use.
- Fixes speculative decoding, KV-cache restoration, CUDA memory faults, and Vulkan flash-attention memory writes.
- The API health check now waits for the model to finish loading instead of reporting ready as soon as the port opens.
- Saved inference states use a new format. If you use --slot-save-path, recreate old saved slot caches by replaying their prompts and saving again. Downloaded GGUF weights and model settings do not need conversion.
- Updates the StartOS SDK.

[Full upstream release notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
[Changes since the previous build](https://github.com/ggml-org/llama.cpp/compare/b11312...b11429)`,
    es_ES: `Actualiza llama.cpp a la compilación b11429 de la versión estable v0.6.0.

- Añade los modelos de decisión Clef de texto e imagen y Nimble, la API de decisión /v1/systemone y las modalidades de entrada y salida del modelo en /v1/models. Añade decodificación especulativa MTP para Qwen4Exp y reduce el uso de memoria de su indexador.
- Corrige la decodificación especulativa, la restauración de la caché KV, fallos de memoria de CUDA y escrituras en memoria de la atención flash de Vulkan.
- La comprobación de salud de la API ahora espera a que el modelo termine de cargarse en lugar de indicar que está listo en cuanto se abre el puerto.
- Los estados de inferencia guardados usan un formato nuevo. Si usa --slot-save-path, vuelva a crear las cachés de ranura antiguas reproduciendo sus prompts y guardándolas de nuevo. Los pesos GGUF descargados y la configuración del modelo no necesitan conversión.
- Actualiza el SDK de StartOS.

[Notas completas de la versión original](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
[Cambios desde la compilación anterior](https://github.com/ggml-org/llama.cpp/compare/b11312...b11429)`,
    de_DE: `Aktualisiert llama.cpp auf Build b11429 der stabilen Veröffentlichung v0.6.0.

- Ergänzt die Entscheidungsmodelle Clef für Text und Bilder sowie Nimble, die Entscheidungs-API /v1/systemone und die Ein- und Ausgabemodalitäten des Modells in /v1/models. Ergänzt spekulatives MTP-Decoding für Qwen4Exp und senkt den Speicherbedarf seines Indexers.
- Behebt Fehler beim spekulativen Decoding, beim Wiederherstellen des KV-Caches, bei CUDA-Speicherzugriffen und bei Schreibzugriffen der Vulkan-Flash-Attention.
- Die API-Zustandsprüfung wartet jetzt, bis das Modell vollständig geladen ist, statt Bereitschaft zu melden, sobald der Port geöffnet wird.
- Gespeicherte Inferenzzustände verwenden ein neues Format. Bei Verwendung von --slot-save-path müssen alte Slot-Caches durch erneutes Verarbeiten ihrer Prompts und anschließendes Speichern neu erstellt werden. Heruntergeladene GGUF-Gewichte und Modelleinstellungen benötigen keine Konvertierung.
- Aktualisiert das StartOS-SDK.

[Vollständige Upstream-Veröffentlichungsnotizen](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
[Änderungen seit dem vorherigen Build](https://github.com/ggml-org/llama.cpp/compare/b11312...b11429)`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11429 ze stabilnego wydania v0.6.0.

- Dodaje modele decyzyjne Clef dla tekstu i obrazu oraz Nimble, API decyzyjne /v1/systemone i informacje o modalnościach wejścia i wyjścia modelu w /v1/models. Dodaje dekodowanie spekulatywne MTP dla Qwen4Exp i zmniejsza zużycie pamięci jego indeksera.
- Naprawia dekodowanie spekulatywne, przywracanie pamięci podręcznej KV, błędy pamięci CUDA i zapisy do pamięci w mechanizmie flash attention Vulkan.
- Kontrola stanu API czeka teraz na zakończenie ładowania modelu, zamiast zgłaszać gotowość od razu po otwarciu portu.
- Zapisane stany wnioskowania używają nowego formatu. Jeśli używasz --slot-save-path, utwórz ponownie stare pamięci podręczne slotów, ponownie przetwarzając ich prompty i zapisując je. Pobrane wagi GGUF i ustawienia modelu nie wymagają konwersji.
- Aktualizuje SDK StartOS.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
[Zmiany od poprzedniej kompilacji](https://github.com/ggml-org/llama.cpp/compare/b11312...b11429)`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11429 de la version stable v0.6.0.

- Ajoute les modèles de décision Clef pour le texte et les images et Nimble, l’API de décision /v1/systemone et les modalités d’entrée et de sortie du modèle dans /v1/models. Ajoute le décodage spéculatif MTP pour Qwen4Exp et réduit la consommation mémoire de son indexeur.
- Corrige le décodage spéculatif, la restauration du cache KV, les erreurs mémoire CUDA et les écritures mémoire de l’attention flash Vulkan.
- Le contrôle de santé de l’API attend désormais la fin du chargement du modèle au lieu d’indiquer qu’elle est prête dès l’ouverture du port.
- Les états d’inférence enregistrés utilisent un nouveau format. Si vous utilisez --slot-save-path, recréez les anciens caches d’emplacement en rejouant leurs prompts puis en les enregistrant à nouveau. Les poids GGUF téléchargés et les réglages du modèle ne nécessitent aucune conversion.
- Met à jour le SDK StartOS.

[Notes complètes de la version amont](https://github.com/ggml-org/llama.cpp/releases/tag/v0.6.0)
[Modifications depuis la compilation précédente](https://github.com/ggml-org/llama.cpp/compare/b11312...b11429)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
