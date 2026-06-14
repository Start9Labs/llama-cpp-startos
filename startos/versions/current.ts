import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9628:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9628.

- Adds EAGLE3 speculative decoding and support for the cohere2-MoE architecture.
- Web UI: PWA support, build-time gzip compression, JPEG EXIF orientation handling, and preserved file names/paths for attachments.
- Server: fixes reasoning-budget WebUI precedence over model.ini and cleans up static-asset handling.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9603...b9628`,
    es_ES: `Se actualizó llama.cpp a b9628.

- Añade decodificación especulativa EAGLE3 y soporte para la arquitectura cohere2-MoE.
- Interfaz web: soporte PWA, compresión gzip en tiempo de compilación, manejo de orientación EXIF de JPEG y conservación de nombres/rutas de archivos adjuntos.
- Servidor: corrige la precedencia del presupuesto de razonamiento de la WebUI sobre model.ini y depura el manejo de recursos estáticos.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9603...b9628`,
    de_DE: `llama.cpp auf b9628 aktualisiert.

- Fügt spekulative EAGLE3-Dekodierung und Unterstützung für die cohere2-MoE-Architektur hinzu.
- Weboberfläche: PWA-Unterstützung, gzip-Komprimierung zur Build-Zeit, Behandlung der JPEG-EXIF-Ausrichtung und Beibehaltung von Dateinamen/-pfaden bei Anhängen.
- Server: behebt den Vorrang des WebUI-Reasoning-Budgets gegenüber model.ini und bereinigt die Behandlung statischer Assets.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9603...b9628`,
    pl_PL: `Zaktualizowano llama.cpp do b9628.

- Dodaje spekulatywne dekodowanie EAGLE3 oraz obsługę architektury cohere2-MoE.
- Interfejs WWW: obsługa PWA, kompresja gzip na etapie budowania, obsługa orientacji EXIF w JPEG oraz zachowanie nazw/ścieżek załączników.
- Serwer: naprawia pierwszeństwo budżetu rozumowania WebUI nad model.ini i porządkuje obsługę zasobów statycznych.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9603...b9628`,
    fr_FR: `Mise à jour de llama.cpp vers b9628.

- Ajoute le décodage spéculatif EAGLE3 et la prise en charge de l'architecture cohere2-MoE.
- Interface web : prise en charge PWA, compression gzip à la compilation, gestion de l'orientation EXIF des JPEG et conservation des noms/chemins de fichiers joints.
- Serveur : corrige la priorité du budget de raisonnement de la WebUI sur model.ini et nettoie la gestion des ressources statiques.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9603...b9628`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
