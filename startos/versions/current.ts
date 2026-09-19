import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11046:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11046. Adds sparse Flash Attention on Vulkan, AllReduce on ROCm, broader CUDA row-reduction support, and HrmText model support. Improves automatic context sizing, AMD MoE performance, and Qwen3 Coder reasoning output. Fixes Vulkan sorting and matrix multiplication, RPC cache invalidation, and RPC activation transfers filling the worker cache during multi-node inference.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10975...b11046`,
    es_ES: `Actualiza llama.cpp a la compilación b11046. Añade atención Flash dispersa con Vulkan, AllReduce con ROCm, una mayor compatibilidad con reducciones de filas en CUDA y modelos HrmText. Mejora el dimensionamiento automático del contexto, el rendimiento MoE de AMD y la salida de razonamiento de Qwen3 Coder. Corrige la ordenación y la multiplicación de matrices con Vulkan, la invalidación de la caché RPC y las transferencias de activaciones RPC que llenaban la caché del nodo de trabajo durante la inferencia multinodo.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10975...b11046`,
    de_DE: `Aktualisiert llama.cpp auf Build b11046. Fügt Sparse Flash Attention mit Vulkan, AllReduce mit ROCm, breitere CUDA-Unterstützung für Zeilenreduktionen und Unterstützung für HrmText-Modelle hinzu. Verbessert die automatische Kontextgrößenbestimmung, die AMD-MoE-Leistung und die Reasoning-Ausgabe von Qwen3 Coder. Behebt Vulkan-Sortierung und -Matrixmultiplikation, die RPC-Cache-Invalidierung und das Füllen des Worker-Caches durch RPC-Aktivierungsübertragungen bei Multi-Node-Inferenz.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10975...b11046`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11046. Dodaje obsługę sparse Flash Attention w Vulkanie, AllReduce w ROCm, szerszą obsługę redukcji wierszy w CUDA oraz modeli HrmText. Ulepsza automatyczny dobór rozmiaru kontekstu, wydajność MoE na układach AMD i dane wyjściowe rozumowania Qwen3 Coder. Naprawia sortowanie i mnożenie macierzy w Vulkanie, unieważnianie pamięci podręcznej RPC oraz zapełnianie pamięci podręcznej węzła roboczego przez transfery aktywacji RPC podczas wnioskowania wielowęzłowego.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10975...b11046`,
    fr_FR: `Met à jour llama.cpp vers la version b11046. Ajoute la prise en charge de Flash Attention creuse avec Vulkan, d’AllReduce avec ROCm, de davantage de réductions de lignes avec CUDA et des modèles HrmText. Améliore le dimensionnement automatique du contexte, les performances MoE sur AMD et la sortie de raisonnement de Qwen3 Coder. Corrige le tri et la multiplication matricielle avec Vulkan, l’invalidation du cache RPC et la saturation du cache des nœuds de calcul par les transferts d’activations RPC lors de l’inférence distribuée.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10975...b11046`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
