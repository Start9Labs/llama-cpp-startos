import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9717:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9717. A maintenance release with model-router fixes, reverse-proxy streaming compatibility, and web UI improvements.

- Server: streaming endpoints now send an \`X-Accel-Buffering: no\` header, fixing token streaming through reverse proxies (such as StartOS).
- Router: child-instance arguments are now forwarded correctly, the \`-hf\` preset repo handling was reworked, request schema validation was added, and a potential hang on stop was fixed.
- Web UI: touch-accessible model selection and a last-5-seconds generation speed display.
- Backends: new SYCL operators and CPU/CUDA matmul improvements.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9692...b9717`,
    es_ES: `Se actualizó llama.cpp a b9717. Versión de mantenimiento con correcciones del enrutador de modelos, compatibilidad de streaming a través de proxy inverso y mejoras de la interfaz web.

- Servidor: los endpoints de streaming ahora envían la cabecera \`X-Accel-Buffering: no\`, corrigiendo el streaming de tokens a través de proxies inversos (como StartOS).
- Enrutador: los argumentos de las instancias hijas ahora se reenvían correctamente, se rediseñó el manejo del repositorio de presets \`-hf\`, se añadió validación de esquema de solicitudes y se corrigió un posible bloqueo al detener.
- Interfaz web: selección de modelos accesible al tacto y visualización de la velocidad de generación de los últimos 5 segundos.
- Backends: nuevos operadores SYCL y mejoras de matmul en CPU/CUDA.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9692...b9717`,
    de_DE: `llama.cpp auf b9717 aktualisiert. Ein Wartungs-Release mit Korrekturen am Modell-Router, Streaming-Kompatibilität über Reverse-Proxys und Verbesserungen der Weboberfläche.

- Server: Streaming-Endpunkte senden jetzt einen \`X-Accel-Buffering: no\`-Header, der das Token-Streaming über Reverse-Proxys (wie StartOS) korrigiert.
- Router: Argumente der Kindinstanzen werden jetzt korrekt weitergegeben, die Behandlung des \`-hf\`-Preset-Repos wurde überarbeitet, eine Schema-Validierung für Anfragen wurde hinzugefügt und ein möglicher Hänger beim Stoppen behoben.
- Weboberfläche: berührungsfreundliche Modellauswahl und Anzeige der Generierungsgeschwindigkeit der letzten 5 Sekunden.
- Backends: neue SYCL-Operatoren und Verbesserungen bei CPU/CUDA-matmul.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9692...b9717`,
    pl_PL: `Zaktualizowano llama.cpp do b9717. Wydanie konserwacyjne z poprawkami routera modeli, zgodnością streamingu przez odwrotne proxy oraz usprawnieniami interfejsu WWW.

- Serwer: punkty końcowe streamingu wysyłają teraz nagłówek \`X-Accel-Buffering: no\`, naprawiając streaming tokenów przez odwrotne proxy (takie jak StartOS).
- Router: argumenty instancji potomnych są teraz poprawnie przekazywane, przebudowano obsługę repozytorium presetów \`-hf\`, dodano walidację schematu żądań oraz naprawiono potencjalne zawieszenie przy zatrzymywaniu.
- Interfejs WWW: dotykowo dostępny wybór modeli i wyświetlanie prędkości generowania z ostatnich 5 sekund.
- Backendy: nowe operatory SYCL oraz usprawnienia matmul na CPU/CUDA.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9692...b9717`,
    fr_FR: `Mise à jour de llama.cpp vers b9717. Une version de maintenance apportant des corrections du routeur de modèles, la compatibilité du streaming via proxy inverse et des améliorations de l'interface web.

- Serveur : les points de terminaison de streaming envoient désormais un en-tête \`X-Accel-Buffering: no\`, corrigeant le streaming de jetons via les proxys inverses (tels que StartOS).
- Routeur : les arguments des instances enfants sont maintenant transmis correctement, la gestion du dépôt de préréglages \`-hf\` a été retravaillée, une validation de schéma des requêtes a été ajoutée et un blocage potentiel à l'arrêt a été corrigé.
- Interface web : sélection de modèles accessible au tactile et affichage de la vitesse de génération des 5 dernières secondes.
- Backends : nouveaux opérateurs SYCL et améliorations du matmul sur CPU/CUDA.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9692...b9717`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
