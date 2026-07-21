import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10075:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10075.

This release also migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later). No llama-server command-line flags used by this package changed, so your model presets and custom arguments keep working.

llama.cpp publishes one build per merged commit. Full release notes: https://github.com/ggml-org/llama.cpp/releases/tag/b10075`,
    es_ES: `Actualiza llama.cpp a la compilación b10075.

Esta versión también migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior). No ha cambiado ninguna opción de línea de comandos de llama-server utilizada por este paquete, por lo que tus ajustes predefinidos de modelos y argumentos personalizados siguen funcionando.

llama.cpp publica una compilación por cada commit fusionado. Notas de la versión completas: https://github.com/ggml-org/llama.cpp/releases/tag/b10075`,
    de_DE: `Aktualisiert llama.cpp auf Build b10075.

Diese Version stellt das Paket außerdem auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer). Kein von diesem Paket verwendetes llama-server-Kommandozeilen-Flag hat sich geändert, daher funktionieren deine Modell-Voreinstellungen und benutzerdefinierten Argumente weiterhin.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit. Vollständige Versionshinweise: https://github.com/ggml-org/llama.cpp/releases/tag/b10075`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10075.

Ta wersja przenosi też pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego). Żadna używana przez ten pakiet opcja wiersza poleceń llama-server nie uległa zmianie, więc Twoje ustawienia modeli i własne argumenty nadal działają.

llama.cpp publikuje jedną kompilację na scalony commit. Pełne informacje o wydaniu: https://github.com/ggml-org/llama.cpp/releases/tag/b10075`,
    fr_FR: `Met à jour llama.cpp vers la version b10075.

Cette version fait également passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure). Aucune option de ligne de commande llama-server utilisée par ce paquet n'a changé : vos préréglages de modèles et arguments personnalisés continuent de fonctionner.

llama.cpp publie une version par commit fusionné. Notes de version complètes : https://github.com/ggml-org/llama.cpp/releases/tag/b10075`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
