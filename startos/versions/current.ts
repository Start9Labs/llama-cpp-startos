import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10108:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10108.

- Advances all four variants — generic, NVIDIA (CUDA), AMD (ROCm) and Vulkan — to the same upstream build (114 builds since b9994).
- Adds new model architectures (DeepSeek V4, Hunyuan V3, BitNet) plus automatic download of speculative-decoding draft sidecars, and broad performance work across the CUDA, Vulkan, SYCL, OpenCL, Hexagon and Metal backends.
- Improves the OpenAI-compatible server (new \`--cors-*\` options, clearer HTTP 400 validation errors) and the built-in web UI (reasoning-effort controls, agentic-flow and MCP-panel fixes, a JS sandbox with symbolic math).
- No \`llama-server\` flag used by this package was renamed or removed, so the built-in model presets keep working unchanged. If you set custom arguments, note that upstream now deprecates \`--mlock\`, \`--mmap\`/\`--no-mmap\` and \`-dio\` in favor of a single \`--load-mode\` flag — the old flags still work but print a deprecation warning.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b9994...b10108`,
    es_ES: `Actualiza llama.cpp a la compilación b10108.

- Actualiza las cuatro variantes —genérica, NVIDIA (CUDA), AMD (ROCm) y Vulkan— a la misma compilación de origen (114 compilaciones desde la b9994).
- Añade nuevas arquitecturas de modelos (DeepSeek V4, Hunyuan V3, BitNet) y la descarga automática de modelos auxiliares para decodificación especulativa, además de un amplio trabajo de rendimiento en los backends CUDA, Vulkan, SYCL, OpenCL, Hexagon y Metal.
- Mejora el servidor compatible con OpenAI (nuevas opciones \`--cors-*\`, errores de validación HTTP 400 más claros) y la interfaz web integrada (controles de esfuerzo de razonamiento, correcciones del flujo agéntico y del panel MCP, y un entorno JS con soporte matemático simbólico).
- Ninguna opción de línea de comandos de \`llama-server\` utilizada por este paquete se ha renombrado ni eliminado, por lo que los ajustes predefinidos de modelos siguen funcionando sin cambios. Si usas argumentos personalizados, ten en cuenta que ahora se desaconsejan \`--mlock\`, \`--mmap\`/\`--no-mmap\` y \`-dio\` en favor de una única opción \`--load-mode\`; las opciones antiguas siguen funcionando pero muestran una advertencia de obsolescencia.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b9994...b10108`,
    de_DE: `Aktualisiert llama.cpp auf Build b10108.

- Hebt alle vier Varianten – generisch, NVIDIA (CUDA), AMD (ROCm) und Vulkan – auf denselben Upstream-Build an (114 Builds seit b9994).
- Ergänzt neue Modellarchitekturen (DeepSeek V4, Hunyuan V3, BitNet) sowie den automatischen Download von Entwurfsmodellen für spekulative Dekodierung und umfangreiche Leistungsverbesserungen in den Backends CUDA, Vulkan, SYCL, OpenCL, Hexagon und Metal.
- Verbessert den OpenAI-kompatiblen Server (neue \`--cors-*\`-Optionen, klarere HTTP-400-Validierungsfehler) und die integrierte Web-Oberfläche (Steuerung des Reasoning-Aufwands, Korrekturen am agentischen Ablauf und am MCP-Panel, eine JS-Sandbox mit symbolischer Mathematik).
- Kein von diesem Paket verwendetes \`llama-server\`-Kommandozeilen-Flag wurde umbenannt oder entfernt; die integrierten Modell-Voreinstellungen funktionieren daher unverändert weiter. Falls Sie eigene Argumente setzen: \`--mlock\`, \`--mmap\`/\`--no-mmap\` und \`-dio\` gelten upstream jetzt als veraltet und werden durch das einheitliche Flag \`--load-mode\` ersetzt; die alten Flags funktionieren weiterhin, geben aber eine Veraltungswarnung aus.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b9994...b10108`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10108.

- Podnosi wszystkie cztery warianty — generyczny, NVIDIA (CUDA), AMD (ROCm) i Vulkan — do tej samej kompilacji źródłowej (114 kompilacji od b9994).
- Dodaje nowe architektury modeli (DeepSeek V4, Hunyuan V3, BitNet) oraz automatyczne pobieranie modeli pomocniczych do dekodowania spekulatywnego, a także szerokie usprawnienia wydajności w backendach CUDA, Vulkan, SYCL, OpenCL, Hexagon i Metal.
- Ulepsza serwer zgodny z OpenAI (nowe opcje \`--cors-*\`, czytelniejsze błędy walidacji HTTP 400) oraz wbudowany interfejs webowy (sterowanie wysiłkiem rozumowania, poprawki przepływu agentowego i panelu MCP, piaskownica JS z obsługą matematyki symbolicznej).
- Żadna używana przez ten pakiet opcja wiersza poleceń \`llama-server\` nie została zmieniona ani usunięta, więc wbudowane ustawienia modeli działają bez zmian. Jeśli używasz własnych argumentów, pamiętaj, że opcje \`--mlock\`, \`--mmap\`/\`--no-mmap\` i \`-dio\` są teraz wycofywane na rzecz jednej opcji \`--load-mode\`; stare opcje nadal działają, ale wyświetlają ostrzeżenie o wycofaniu.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b9994...b10108`,
    fr_FR: `Met à jour llama.cpp vers la version b10108.

- Fait passer les quatre variantes — générique, NVIDIA (CUDA), AMD (ROCm) et Vulkan — à la même version amont (114 versions depuis la b9994).
- Ajoute de nouvelles architectures de modèles (DeepSeek V4, Hunyuan V3, BitNet) ainsi que le téléchargement automatique des modèles auxiliaires pour le décodage spéculatif, et d'importants travaux de performances sur les backends CUDA, Vulkan, SYCL, OpenCL, Hexagon et Metal.
- Améliore le serveur compatible OpenAI (nouvelles options \`--cors-*\`, erreurs de validation HTTP 400 plus claires) et l'interface web intégrée (contrôles de l'effort de raisonnement, corrections du flux agentique et du panneau MCP, un bac à sable JS avec prise en charge du calcul symbolique).
- Aucune option de ligne de commande \`llama-server\` utilisée par ce paquet n'a été renommée ou supprimée : les préréglages de modèles intégrés continuent de fonctionner à l'identique. Si vous définissez des arguments personnalisés, notez que \`--mlock\`, \`--mmap\`/\`--no-mmap\` et \`-dio\` sont désormais dépréciées en amont au profit d'une unique option \`--load-mode\` ; les anciennes options fonctionnent toujours mais affichent un avertissement de dépréciation.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b9994...b10108`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
