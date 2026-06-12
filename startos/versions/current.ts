import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9603:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9603.

- Web UI: pinned conversations and an opt-in, sandboxed run_javascript tool.
- Server: keeps idle slots' KV cache warm, fixes LFM2 ignoring json_schema, and adds a --log-prompts-dir option.
- Updates bundled LibreSSL to 4.3.2 plus assorted CUDA, Vulkan and OpenCL backend fixes.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9570...b9603`,
    es_ES: `Se actualizó llama.cpp a b9603.

- Interfaz web: conversaciones fijadas y una herramienta run_javascript opcional y aislada.
- Servidor: mantiene caliente la caché KV de los slots inactivos, corrige que LFM2 ignorara json_schema y añade la opción --log-prompts-dir.
- Actualiza LibreSSL incluido a 4.3.2 y diversas correcciones de los backends CUDA, Vulkan y OpenCL.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9570...b9603`,
    de_DE: `llama.cpp auf b9603 aktualisiert.

- Weboberfläche: angeheftete Unterhaltungen und ein optionales, isoliertes run_javascript-Werkzeug.
- Server: hält den KV-Cache inaktiver Slots warm, behebt das Ignorieren von json_schema durch LFM2 und fügt die Option --log-prompts-dir hinzu.
- Aktualisiert das mitgelieferte LibreSSL auf 4.3.2 sowie diverse Korrekturen an den CUDA-, Vulkan- und OpenCL-Backends.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9570...b9603`,
    pl_PL: `Zaktualizowano llama.cpp do b9603.

- Interfejs WWW: przypięte rozmowy oraz opcjonalne, izolowane narzędzie run_javascript.
- Serwer: utrzymuje ciepłą pamięć podręczną KV bezczynnych slotów, naprawia ignorowanie json_schema przez LFM2 i dodaje opcję --log-prompts-dir.
- Aktualizuje dołączony LibreSSL do 4.3.2 oraz różne poprawki backendów CUDA, Vulkan i OpenCL.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9570...b9603`,
    fr_FR: `Mise à jour de llama.cpp vers b9603.

- Interface web : conversations épinglées et un outil run_javascript optionnel et isolé.
- Serveur : conserve le cache KV des slots inactifs au chaud, corrige LFM2 qui ignorait json_schema et ajoute une option --log-prompts-dir.
- Met à jour LibreSSL intégré vers 4.3.2 ainsi que divers correctifs des backends CUDA, Vulkan et OpenCL.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9570...b9603`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
