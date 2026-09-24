import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11151:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b11151. Adds support for OpenAI-style video URLs and fixes a token-counting API crash while the server sleeps.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11065...b11151`,
    es_ES: `Actualiza llama.cpp a la compilación b11151. Añade compatibilidad con URL de vídeo al estilo de OpenAI y corrige un fallo de la API de recuento de tokens cuando el servidor está inactivo.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11065...b11151`,
    de_DE: `Aktualisiert llama.cpp auf Build b11151. Unterstützt Video-URLs im OpenAI-Stil und behebt einen Absturz der Tokenzähl-API im Ruhezustand des Servers.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11065...b11151`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b11151. Dodaje obsługę adresów URL filmów w stylu OpenAI i naprawia awarię API liczenia tokenów, gdy serwer jest uśpiony.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11065...b11151`,
    fr_FR: `Met à jour llama.cpp vers la compilation b11151. Ajoute la prise en charge des URL vidéo au format OpenAI et corrige un plantage de l'API de comptage des jetons lorsque le serveur est en veille.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11065...b11151`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
