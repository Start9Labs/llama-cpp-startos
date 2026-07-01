import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9843:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9843. A small maintenance release with new model support and backend improvements.

- Models: added DeepSeek V4 support.
- Server: /v1/models now de-duplicates preset and cached model entries.
- Backends: Vulkan submission-heuristic improvement; reverted a split-compute scheduling change for stability.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9837...b9843`,
    es_ES: `Se actualizó llama.cpp a b9843. Una pequeña versión de mantenimiento con soporte para nuevos modelos y mejoras en los backends.

- Modelos: se añadió soporte para DeepSeek V4.
- Servidor: /v1/models ahora elimina las entradas duplicadas de modelos predefinidos y en caché.
- Backends: mejora de la heurística de envío de Vulkan; se revirtió un cambio de programación de cómputo dividido por estabilidad.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9837...b9843`,
    de_DE: `llama.cpp auf b9843 aktualisiert. Ein kleines Wartungs-Release mit Unterstützung neuer Modelle und Backend-Verbesserungen.

- Modelle: Unterstützung für DeepSeek V4 hinzugefügt.
- Server: /v1/models entfernt nun doppelte Einträge von Voreinstellungs- und zwischengespeicherten Modellen.
- Backends: Verbesserung der Vulkan-Übermittlungsheuristik; eine Split-Compute-Scheduling-Änderung wurde aus Stabilitätsgründen rückgängig gemacht.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9837...b9843`,
    pl_PL: `Zaktualizowano llama.cpp do b9843. Niewielkie wydanie konserwacyjne z obsługą nowych modeli i usprawnieniami backendów.

- Modele: dodano obsługę DeepSeek V4.
- Serwer: /v1/models usuwa teraz zduplikowane wpisy modeli predefiniowanych i buforowanych.
- Backendy: usprawnienie heurystyki wysyłania w Vulkan; przywrócono zmianę harmonogramu podzielonych obliczeń dla stabilności.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9837...b9843`,
    fr_FR: `Mise à jour de llama.cpp vers b9843. Une petite version de maintenance avec la prise en charge de nouveaux modèles et des améliorations de backends.

- Modèles : ajout de la prise en charge de DeepSeek V4.
- Serveur : /v1/models déduplique désormais les entrées de modèles prédéfinis et mis en cache.
- Backends : amélioration de l'heuristique de soumission Vulkan ; annulation d'un changement de planification du calcul fractionné pour la stabilité.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9837...b9843`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
