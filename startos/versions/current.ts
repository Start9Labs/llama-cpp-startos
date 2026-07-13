import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9982:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b9982.

- Advances all four variants — generic, NVIDIA (CUDA), AMD (ROCm) and Vulkan — to the same upstream build.
- Picks up roughly 145 upstream builds of model support, inference performance and stability work since b9837.
- No \`llama-server\` command-line flag used by this package was renamed or removed, so the built-in model presets and any custom arguments you have set continue to work unchanged.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog.`,
    es_ES: `Actualiza llama.cpp a la compilación b9982.

- Actualiza las cuatro variantes —genérica, NVIDIA (CUDA), AMD (ROCm) y Vulkan— a la misma compilación de origen.
- Incorpora unas 145 compilaciones de mejoras en la compatibilidad con modelos, el rendimiento de inferencia y la estabilidad desde la b9837.
- Ninguna opción de línea de comandos de \`llama-server\` utilizada por este paquete se ha renombrado ni eliminado, por lo que los ajustes predefinidos de modelos y los argumentos personalizados que hayas configurado siguen funcionando sin cambios.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación.`,
    de_DE: `Aktualisiert llama.cpp auf Build b9982.

- Hebt alle vier Varianten – generisch, NVIDIA (CUDA), AMD (ROCm) und Vulkan – auf denselben Upstream-Build an.
- Übernimmt rund 145 Upstream-Builds mit Verbesserungen bei der Modellunterstützung, der Inferenzleistung und der Stabilität seit b9837.
- Kein von diesem Paket verwendetes \`llama-server\`-Kommandozeilen-Flag wurde umbenannt oder entfernt; die integrierten Modell-Voreinstellungen und selbst gesetzte Argumente funktionieren daher unverändert weiter.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit.`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b9982.

- Podnosi wszystkie cztery warianty — generyczny, NVIDIA (CUDA), AMD (ROCm) i Vulkan — do tej samej kompilacji źródłowej.
- Obejmuje około 145 kompilacji z ulepszeniami obsługi modeli, wydajności wnioskowania i stabilności od czasu b9837.
- Żadna używana przez ten pakiet opcja wiersza poleceń \`llama-server\` nie została zmieniona ani usunięta, więc wbudowane ustawienia modeli oraz własne argumenty działają bez zmian.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji.`,
    fr_FR: `Met à jour llama.cpp vers la version b9982.

- Fait passer les quatre variantes — générique, NVIDIA (CUDA), AMD (ROCm) et Vulkan — à la même version amont.
- Intègre environ 145 versions amont d'améliorations de la prise en charge des modèles, des performances d'inférence et de la stabilité depuis la b9837.
- Aucune option de ligne de commande \`llama-server\` utilisée par ce paquet n'a été renommée ou supprimée : les préréglages de modèles intégrés et les arguments personnalisés que vous avez définis continuent de fonctionner à l'identique.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
