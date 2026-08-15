import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10438:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10438.

- A routine maintenance bump — 40 builds since b10398.
- The server now answers \`/metrics\` and \`/slots\` while a request is being processed, so monitoring no longer stalls behind generation, and several metrics were corrected.
- The built-in chat UI is served with no-cache, so upgrades take effect without a manual browser refresh.
- Adds support for the MiniMax Text-01 and MiniMax-M1 model families.
- Fixes tool calling with LFM2 models and image handling with Granite 4 vision models.
- Speculative decoding now auto-detects the draft model type from the draft GGUF's metadata.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10398...b10438`,
    es_ES: `Actualiza llama.cpp a la compilación b10438.

- Una actualización de mantenimiento rutinaria: 40 compilaciones desde la b10398.
- El servidor ahora responde a \`/metrics\` y \`/slots\` mientras procesa una petición, por lo que la supervisión ya no queda bloqueada tras la generación, y se han corregido varias métricas.
- La interfaz de chat integrada se sirve sin caché, de modo que las actualizaciones surten efecto sin recargar manualmente el navegador.
- Añade compatibilidad con las familias de modelos MiniMax Text-01 y MiniMax-M1.
- Corrige la llamada a herramientas con modelos LFM2 y el tratamiento de imágenes con los modelos de visión Granite 4.
- La decodificación especulativa detecta ahora automáticamente el tipo de modelo borrador a partir de los metadatos de su GGUF.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10398...b10438`,
    de_DE: `Aktualisiert llama.cpp auf Build b10438.

- Ein routinemäßiges Wartungsupdate – 40 Builds seit b10398.
- Der Server beantwortet \`/metrics\` und \`/slots\` jetzt auch während der Verarbeitung einer Anfrage, sodass die Überwachung nicht mehr hinter der Generierung hängen bleibt; zudem wurden mehrere Metriken korrigiert.
- Die integrierte Chat-Oberfläche wird ohne Caching ausgeliefert, sodass Aktualisierungen ohne manuelles Neuladen des Browsers wirksam werden.
- Ergänzt Unterstützung für die Modellfamilien MiniMax Text-01 und MiniMax-M1.
- Behebt Werkzeugaufrufe mit LFM2-Modellen sowie die Bildverarbeitung mit den Granite-4-Vision-Modellen.
- Die spekulative Dekodierung erkennt den Typ des Entwurfsmodells jetzt automatisch anhand der Metadaten der Entwurfs-GGUF.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10398...b10438`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10438.

- Rutynowa aktualizacja konserwacyjna — 40 kompilacji od b10398.
- Serwer odpowiada teraz na \`/metrics\` i \`/slots\` również w trakcie przetwarzania żądania, więc monitorowanie nie czeka już na zakończenie generowania; poprawiono także kilka metryk.
- Wbudowany interfejs czatu jest serwowany bez pamięci podręcznej, dzięki czemu aktualizacje działają bez ręcznego odświeżania przeglądarki.
- Dodaje obsługę rodzin modeli MiniMax Text-01 i MiniMax-M1.
- Poprawia wywoływanie narzędzi w modelach LFM2 oraz obsługę obrazów w modelach wizyjnych Granite 4.
- Dekodowanie spekulacyjne automatycznie rozpoznaje typ modelu roboczego na podstawie metadanych jego pliku GGUF.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10398...b10438`,
    fr_FR: `Met à jour llama.cpp vers la version b10438.

- Une mise à jour de maintenance de routine — 40 versions depuis la b10398.
- Le serveur répond désormais à \`/metrics\` et \`/slots\` pendant le traitement d'une requête : la supervision n'attend plus la fin de la génération, et plusieurs métriques ont été corrigées.
- L'interface de discussion intégrée est servie sans mise en cache, si bien que les mises à jour s'appliquent sans rechargement manuel du navigateur.
- Ajoute la prise en charge des familles de modèles MiniMax Text-01 et MiniMax-M1.
- Corrige l'appel d'outils avec les modèles LFM2 et le traitement des images avec les modèles de vision Granite 4.
- Le décodage spéculatif détecte maintenant automatiquement le type du modèle brouillon à partir des métadonnées de son GGUF.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10398...b10438`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
