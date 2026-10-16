import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11669:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11669 at the stable v0.7.0 release.

- Adds K2 Horizon, Prism Bonsai 2, EmbeddingGemma-2, MiniCPM-V 4.7 and Nemotron Super 3.5 VL models, plus more decision models.
- Adds LiliCorr speculative decoding and MTP for GLM5-Next. GPU users serving MoE models with experts in CPU memory can set --moe-cache-mib through Set Model → Custom → Extra arguments to reserve a GPU expert cache.
- Improves prompt-cache and slot restoration, chat parsing, embedding memory use, and GPU performance. The built-in UI gains a models manager; this package still serves one selected model at a time.
- The package keeps port 8080 despite upstream's new default port. Existing model settings and downloaded GGUF weights need no conversion. Custom saved slot caches may need to be recreated after updating.

[Full upstream release notes](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0)
[Changes since the previous build](https://github.com/ggml-org/llama.cpp/compare/b11429...b11669)`,
    es_ES: `Actualiza llama.cpp a la compilación b11669 de la versión estable v0.7.0.

- Añade los modelos K2 Horizon, Prism Bonsai 2, EmbeddingGemma-2, MiniCPM-V 4.7 y Nemotron Super 3.5 VL, además de más modelos de decisión.
- Añade decodificación especulativa LiliCorr y MTP para GLM5-Next. Al servir modelos MoE con expertos en la memoria de la CPU, los usuarios de GPU pueden indicar --moe-cache-mib en Establecer modelo → Personalizado → Argumentos adicionales para reservar una caché de expertos en la GPU.
- Mejora la restauración de cachés de prompts y ranuras, el análisis del chat, el uso de memoria de embeddings y el rendimiento de GPU. La interfaz integrada incorpora un gestor de modelos; este paquete sigue sirviendo un solo modelo seleccionado a la vez.
- El paquete mantiene el puerto 8080 pese al nuevo puerto predeterminado del proyecto original. La configuración del modelo y los pesos GGUF descargados no necesitan conversión. Puede ser necesario recrear las cachés de ranuras guardadas mediante opciones personalizadas tras actualizar.

[Notas completas de la versión original](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0)
[Cambios desde la compilación anterior](https://github.com/ggml-org/llama.cpp/compare/b11429...b11669)`,
    de_DE: `Aktualisiert llama.cpp auf Build b11669 der stabilen Veröffentlichung v0.7.0.

- Ergänzt die Modelle K2 Horizon, Prism Bonsai 2, EmbeddingGemma-2, MiniCPM-V 4.7 und Nemotron Super 3.5 VL sowie weitere Entscheidungsmodelle.
- Ergänzt spekulatives LiliCorr-Decoding und MTP für GLM5-Next. Wer MoE-Modelle mit Experten im CPU-Speicher auf einer GPU ausführt, kann unter Modell festlegen → Benutzerdefiniert → Zusätzliche Argumente mit --moe-cache-mib einen GPU-Cache für Experten reservieren.
- Verbessert die Wiederherstellung von Prompt-Caches und Slots, die Chat-Verarbeitung, den Speicherbedarf für Embeddings und die GPU-Leistung. Die integrierte Oberfläche erhält eine Modellverwaltung; dieses Paket stellt weiterhin jeweils ein ausgewähltes Modell bereit.
- Das Paket behält Port 8080 trotz des neuen Upstream-Standardports. Modelleinstellungen und heruntergeladene GGUF-Gewichte benötigen keine Konvertierung. Benutzerdefinierte gespeicherte Slot-Caches müssen nach dem Update möglicherweise neu erstellt werden.

[Vollständige Upstream-Veröffentlichungsnotizen](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0)
[Änderungen seit dem vorherigen Build](https://github.com/ggml-org/llama.cpp/compare/b11429...b11669)`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11669 ze stabilnego wydania v0.7.0.

- Dodaje modele K2 Horizon, Prism Bonsai 2, EmbeddingGemma-2, MiniCPM-V 4.7 i Nemotron Super 3.5 VL oraz kolejne modele decyzyjne.
- Dodaje dekodowanie spekulatywne LiliCorr i MTP dla GLM5-Next. Użytkownicy GPU uruchamiający modele MoE z ekspertami w pamięci CPU mogą ustawić --moe-cache-mib w Ustaw model → Własny → Dodatkowe argumenty, aby zarezerwować pamięć podręczną ekspertów na GPU.
- Ulepsza przywracanie pamięci podręcznej promptów i slotów, przetwarzanie czatu, zużycie pamięci przez embeddings i wydajność GPU. Wbudowany interfejs zyskuje menedżer modeli; ten pakiet nadal udostępnia jeden wybrany model naraz.
- Pakiet zachowuje port 8080 mimo zmiany domyślnego portu projektu źródłowego. Ustawienia modelu i pobrane wagi GGUF nie wymagają konwersji. Po aktualizacji może być konieczne ponowne utworzenie zapisanych pamięci podręcznych slotów używanych z własnymi opcjami.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0)
[Zmiany od poprzedniej kompilacji](https://github.com/ggml-org/llama.cpp/compare/b11429...b11669)`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11669 de la version stable v0.7.0.

- Ajoute les modèles K2 Horizon, Prism Bonsai 2, EmbeddingGemma-2, MiniCPM-V 4.7 et Nemotron Super 3.5 VL, ainsi que d’autres modèles de décision.
- Ajoute le décodage spéculatif LiliCorr et MTP pour GLM5-Next. Pour les modèles MoE dont les experts restent en mémoire CPU, les utilisateurs de GPU peuvent définir --moe-cache-mib dans Définir le modèle → Personnalisé → Arguments supplémentaires afin de réserver un cache d’experts sur le GPU.
- Améliore la restauration des caches de prompts et des emplacements, l’analyse des conversations, la mémoire des embeddings et les performances GPU. L’interface intégrée gagne un gestionnaire de modèles ; ce paquet continue de servir un seul modèle sélectionné à la fois.
- Le paquet conserve le port 8080 malgré le nouveau port par défaut en amont. Les réglages du modèle et les poids GGUF téléchargés ne nécessitent aucune conversion. Les caches d’emplacement enregistrés avec des options personnalisées peuvent devoir être recréés après la mise à jour.

[Notes complètes de la version amont](https://github.com/ggml-org/llama.cpp/releases/tag/v0.7.0)
[Modifications depuis la compilation précédente](https://github.com/ggml-org/llama.cpp/compare/b11429...b11669)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
