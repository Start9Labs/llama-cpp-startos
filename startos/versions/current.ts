import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9994:1',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b9994.

- Advances all four variants — generic, NVIDIA (CUDA), AMD (ROCm) and Vulkan — to the same upstream build (12 builds since b9982).
- Adds new model architectures (Hunyuan Hy3 with MTP speculative decoding, MiniMax-2) plus quantization and performance work across the CUDA, Vulkan, SYCL and Metal backends.
- Fixes a reasoning-token leak with bare \`<think>\` chat templates and streamlines the built-in web UI's MCP Servers settings.
- No \`llama-server\` command-line flag used by this package was renamed or removed, so the built-in model presets and any custom arguments you have set continue to work unchanged.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b9982...b9994`,
    es_ES: `Actualiza llama.cpp a la compilación b9994.

- Actualiza las cuatro variantes —genérica, NVIDIA (CUDA), AMD (ROCm) y Vulkan— a la misma compilación de origen (12 compilaciones desde la b9982).
- Añade nuevas arquitecturas de modelos (Hunyuan Hy3 con decodificación especulativa MTP y MiniMax-2), además de mejoras de cuantización y rendimiento en los backends CUDA, Vulkan, SYCL y Metal.
- Corrige una fuga de tokens de razonamiento con plantillas de chat \`<think>\` simples y simplifica los ajustes de servidores MCP de la interfaz web integrada.
- Ninguna opción de línea de comandos de \`llama-server\` utilizada por este paquete se ha renombrado ni eliminado, por lo que los ajustes predefinidos de modelos y los argumentos personalizados que hayas configurado siguen funcionando sin cambios.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b9982...b9994`,
    de_DE: `Aktualisiert llama.cpp auf Build b9994.

- Hebt alle vier Varianten – generisch, NVIDIA (CUDA), AMD (ROCm) und Vulkan – auf denselben Upstream-Build an (12 Builds seit b9982).
- Ergänzt neue Modellarchitekturen (Hunyuan Hy3 mit spekulativer MTP-Dekodierung, MiniMax-2) sowie Quantisierungs- und Leistungsverbesserungen in den Backends CUDA, Vulkan, SYCL und Metal.
- Behebt ein Leck von Reasoning-Tokens bei einfachen \`<think>\`-Chat-Vorlagen und verschlankt die MCP-Server-Einstellungen der integrierten Web-Oberfläche.
- Kein von diesem Paket verwendetes \`llama-server\`-Kommandozeilen-Flag wurde umbenannt oder entfernt; die integrierten Modell-Voreinstellungen und selbst gesetzte Argumente funktionieren daher unverändert weiter.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b9982...b9994`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b9994.

- Podnosi wszystkie cztery warianty — generyczny, NVIDIA (CUDA), AMD (ROCm) i Vulkan — do tej samej kompilacji źródłowej (12 kompilacji od b9982).
- Dodaje nowe architektury modeli (Hunyuan Hy3 z dekodowaniem spekulatywnym MTP oraz MiniMax-2) wraz z usprawnieniami kwantyzacji i wydajności w backendach CUDA, Vulkan, SYCL i Metal.
- Naprawia wyciek tokenów rozumowania w prostych szablonach czatu \`<think>\` i upraszcza ustawienia serwerów MCP we wbudowanym interfejsie webowym.
- Żadna używana przez ten pakiet opcja wiersza poleceń \`llama-server\` nie została zmieniona ani usunięta, więc wbudowane ustawienia modeli oraz własne argumenty działają bez zmian.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b9982...b9994`,
    fr_FR: `Met à jour llama.cpp vers la version b9994.

- Fait passer les quatre variantes — générique, NVIDIA (CUDA), AMD (ROCm) et Vulkan — à la même version amont (12 versions depuis la b9982).
- Ajoute de nouvelles architectures de modèles (Hunyuan Hy3 avec décodage spéculatif MTP, MiniMax-2) ainsi que des améliorations de quantification et de performances sur les backends CUDA, Vulkan, SYCL et Metal.
- Corrige une fuite de jetons de raisonnement avec les modèles de chat \`<think>\` simples et simplifie les réglages des serveurs MCP de l'interface web intégrée.
- Aucune option de ligne de commande \`llama-server\` utilisée par ce paquet n'a été renommée ou supprimée : les préréglages de modèles intégrés et les arguments personnalisés que vous avez définis continuent de fonctionner à l'identique.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b9982...b9994`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
