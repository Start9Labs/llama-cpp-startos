import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { storeJson } from '../fileModels/store.json'

const legacyLoadModes = new Map([
  ['--mlock', 'mlock'],
  ['--mmap', 'mmap'],
  ['--no-mmap', 'none'],
  ['-dio', 'dio'],
  ['--direct-io', 'dio'],
  ['-ndio', 'none'],
  ['--no-direct-io', 'none'],
])

function migrateLoadModeArgs(args: string[]) {
  return args.flatMap((arg) => {
    const loadMode = legacyLoadModes.get(arg)
    return loadMode ? ['--load-mode', loadMode] : [arg]
  })
}

export const v_1_0_10975_0 = VersionInfo.of({
  version: '1.0.10975:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10975. Improves Vulkan performance for Intel GPUs, Qwen models, and AMD RDNA4; speeds up routed-MoE prompt processing on RDNA3/ROCm; improves performance and compatibility on AMD GCN and older ROCm GPUs; reduces KV-cache memory use for DeepSeek2, GLM4-MoE, Cohere2MoE, and Qwen3.8 Flash Next; improves structured outputs and tool-call parsing, including complex Qwen3 Coder arguments; and fixes multimodal speculative decoding after image input, selected-expert offloading, long-context Vulkan failures, Vulkan argsort faults, model downloads at the server model limit, nullable chat templates, and Granite model parameter counts. Also adds CPU support for Maple 20B-A1B; improves ROCm/CDNA flash-attention precision; and fixes CPU heap corruption that could cause RoPE crashes, sliding-window loading for MiMo2, Gemma 4, Gemma 4 Assistant, and Step 3.5, and repeated disabled-tools requests from the web UI.

Saved legacy model-loading flags are migrated to \`--load-mode\` automatically.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10868...b10975`,
    es_ES: `Actualiza llama.cpp a la compilación b10975. Mejora el rendimiento de Vulkan en GPU Intel, modelos Qwen y AMD RDNA4; acelera el procesamiento de prompts MoE enrutados en RDNA3/ROCm; mejora el rendimiento y la compatibilidad en GPU AMD GCN y GPU ROCm antiguas; reduce el uso de memoria de la caché KV para DeepSeek2, GLM4-MoE, Cohere2MoE y Qwen3.8 Flash Next; mejora las salidas estructuradas y el análisis de llamadas a herramientas, incluidos argumentos complejos de Qwen3 Coder; y corrige la decodificación especulativa multimodal tras introducir imágenes, la descarga de expertos seleccionados, fallos de Vulkan con contextos largos, errores de argsort en Vulkan, las descargas cuando se alcanza el límite de modelos del servidor, plantillas de chat con valores anulables y el recuento de parámetros de modelos Granite. También añade compatibilidad de CPU con Maple 20B-A1B; mejora la precisión de la atención flash en ROCm/CDNA; y corrige daños en el montón de CPU que podían provocar fallos durante RoPE, la carga de ventanas deslizantes para MiMo2, Gemma 4, Gemma 4 Assistant y Step 3.5, y las solicitudes repetidas de herramientas desactivadas desde la interfaz web.

Los indicadores heredados guardados para la carga de modelos se migran automáticamente a \`--load-mode\`.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10868...b10975`,
    de_DE: `Aktualisiert llama.cpp auf Build b10975. Verbessert die Vulkan-Leistung für Intel-GPUs, Qwen-Modelle und AMD RDNA4, beschleunigt die Prompt-Verarbeitung für Routed-MoE auf RDNA3/ROCm, verbessert Leistung und Kompatibilität auf AMD-GCN- und älteren ROCm-GPUs, reduziert den KV-Cache-Speicherbedarf für DeepSeek2, GLM4-MoE, Cohere2MoE und Qwen3.8 Flash Next, verbessert strukturierte Ausgaben sowie das Parsen von Werkzeugaufrufen einschließlich komplexer Qwen3-Coder-Argumente und behebt multimodales spekulatives Decoding nach Bildeingaben, das Auslagern ausgewählter Experten, Vulkan-Fehler bei langen Kontexten, Vulkan-Argsort-Fehler, Modelldownloads am Server-Modelllimit, Chat-Vorlagen mit nullable Werten und die Parameterzählung von Granite-Modellen. Fügt außerdem CPU-Unterstützung für Maple 20B-A1B hinzu, verbessert die Genauigkeit der Flash-Attention auf ROCm/CDNA und behebt eine Beschädigung des CPU-Heaps, die RoPE-Abstürze verursachen konnte, das Laden von Sliding-Window-Mustern für MiMo2, Gemma 4, Gemma 4 Assistant und Step 3.5 sowie wiederholte Anfragen der Weboberfläche an deaktivierte Werkzeuge.

Gespeicherte veraltete Modelllade-Flags werden automatisch auf \`--load-mode\` umgestellt.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10868...b10975`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10975. Poprawia wydajność Vulkan dla układów GPU Intel, modeli Qwen i AMD RDNA4, przyspiesza przetwarzanie promptów routed-MoE na RDNA3/ROCm, poprawia wydajność i zgodność na układach GPU AMD GCN i starszych układach ROCm, zmniejsza zużycie pamięci podręcznej KV dla DeepSeek2, GLM4-MoE, Cohere2MoE i Qwen3.8 Flash Next, ulepsza ustrukturyzowane dane wyjściowe i analizowanie wywołań narzędzi, w tym złożonych argumentów Qwen3 Coder, oraz naprawia multimodalne dekodowanie spekulatywne po wprowadzeniu obrazu, przenoszenie wybranych ekspertów, błędy Vulkan przy długim kontekście, błędy argsort w Vulkan, pobieranie modeli po osiągnięciu limitu modeli serwera, szablony czatu z wartościami null i liczbę parametrów modeli Granite. Dodaje również obsługę Maple 20B-A1B na CPU, poprawia precyzję flash attention w ROCm/CDNA oraz naprawia uszkodzenie sterty CPU, które mogło powodować awarie RoPE, ładowanie wzorców przesuwanego okna dla MiMo2, Gemma 4, Gemma 4 Assistant i Step 3.5, a także powtarzające się żądania wyłączonych narzędzi z interfejsu WWW.

Zapisane starsze flagi ładowania modeli są automatycznie migrowane do \`--load-mode\`.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10868...b10975`,
    fr_FR: `Met à jour llama.cpp vers la version b10975. Améliore les performances de Vulkan pour les GPU Intel, les modèles Qwen et AMD RDNA4, accélère le traitement des prompts MoE routés sur RDNA3/ROCm, améliore les performances et la compatibilité sur les GPU AMD GCN et les anciens GPU ROCm, réduit l’utilisation de la mémoire du cache KV pour DeepSeek2, GLM4-MoE, Cohere2MoE et Qwen3.8 Flash Next, améliore les sorties structurées et l’analyse des appels d’outils, y compris les arguments complexes de Qwen3 Coder, et corrige le décodage spéculatif multimodal après une entrée d’image, le déchargement des experts sélectionnés, les défaillances de Vulkan avec les contextes longs, les erreurs d’argsort dans Vulkan, le téléchargement de modèles lorsque la limite du serveur est atteinte, les modèles de discussion avec des valeurs nullables et le comptage des paramètres des modèles Granite. Ajoute également la prise en charge de Maple 20B-A1B sur CPU, améliore la précision de l’attention flash sur ROCm/CDNA et corrige une corruption du tas du processeur susceptible de provoquer des plantages de RoPE, le chargement des motifs de fenêtre glissante pour MiMo2, Gemma 4, Gemma 4 Assistant et Step 3.5, ainsi que les requêtes répétées de l’interface Web vers les outils désactivés.

Les anciennes options enregistrées pour le chargement des modèles sont automatiquement migrées vers \`--load-mode\`.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10868...b10975`,
  },
  migrations: {
    up: async ({ effects }) => {
      const store = await storeJson.read().once()
      if (!store) return

      const serveArgs = store.serveArgs
      const custom = store.modelSelection?.custom
      const extraArgs = custom?.extraArgs?.split(/\s+/)
      const migratedServeArgs = serveArgs?.some((arg) =>
        legacyLoadModes.has(arg),
      )
        ? migrateLoadModeArgs(serveArgs)
        : undefined
      const migratedExtraArgs = extraArgs?.some((arg) =>
        legacyLoadModes.has(arg),
      )
        ? migrateLoadModeArgs(extraArgs).join(' ')
        : undefined

      if (migratedServeArgs && migratedExtraArgs) {
        await storeJson.merge(effects, {
          serveArgs: migratedServeArgs,
          modelSelection: {
            ...store.modelSelection,
            custom: { ...custom, extraArgs: migratedExtraArgs },
          },
        })
      } else if (migratedServeArgs) {
        await storeJson.merge(effects, { serveArgs: migratedServeArgs })
      } else if (migratedExtraArgs) {
        await storeJson.merge(effects, {
          modelSelection: {
            ...store.modelSelection,
            custom: { ...custom, extraArgs: migratedExtraArgs },
          },
        })
      }
    },
    down: IMPOSSIBLE,
  },
})
