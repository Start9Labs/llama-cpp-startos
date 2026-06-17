import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9680:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to b9680. A maintenance release of web UI, backend, and security improvements.

- Web UI: source toggle for rendered mermaid and SVG blocks; SSE transport detection fixed when routed through the CORS proxy.
- Backends: Vulkan host-visible memory on UMA devices, SYCL USM allocations and a use-after-free fix, OpenVINO 2026.2 support, and assorted OpenCL/CUDA fixes.
- Security: vendored BoringSSL updated.

Full changelog: https://github.com/ggml-org/llama.cpp/compare/b9664...b9680`,
    es_ES: `Se actualizó llama.cpp a b9680. Versión de mantenimiento con mejoras de la interfaz web, del backend y de seguridad.

- Interfaz web: alternancia de código fuente para los bloques mermaid y SVG renderizados; corregida la detección del transporte SSE al enrutarse a través del proxy CORS.
- Backends: memoria visible para el host en dispositivos UMA de Vulkan, asignaciones USM de SYCL y corrección de un uso después de liberar, compatibilidad con OpenVINO 2026.2 y varias correcciones de OpenCL/CUDA.
- Seguridad: actualizado BoringSSL incluido.

Registro de cambios completo: https://github.com/ggml-org/llama.cpp/compare/b9664...b9680`,
    de_DE: `llama.cpp auf b9680 aktualisiert. Ein Wartungs-Release mit Verbesserungen der Weboberfläche, des Backends und der Sicherheit.

- Weboberfläche: Quelltext-Umschalter für gerenderte Mermaid- und SVG-Blöcke; SSE-Transporterkennung beim Routing über den CORS-Proxy behoben.
- Backends: Host-sichtbarer Speicher auf UMA-Geräten in Vulkan, SYCL-USM-Zuweisungen und Behebung eines Use-after-free, OpenVINO-2026.2-Unterstützung sowie diverse OpenCL-/CUDA-Korrekturen.
- Sicherheit: mitgeliefertes BoringSSL aktualisiert.

Vollständiges Änderungsprotokoll: https://github.com/ggml-org/llama.cpp/compare/b9664...b9680`,
    pl_PL: `Zaktualizowano llama.cpp do b9680. Wydanie konserwacyjne z ulepszeniami interfejsu WWW, backendu i bezpieczeństwa.

- Interfejs WWW: przełącznik kodu źródłowego dla renderowanych bloków mermaid i SVG; naprawiono wykrywanie transportu SSE przy trasowaniu przez proxy CORS.
- Backendy: pamięć widoczna dla hosta na urządzeniach UMA w Vulkan, alokacje USM w SYCL i poprawka use-after-free, obsługa OpenVINO 2026.2 oraz różne poprawki OpenCL/CUDA.
- Bezpieczeństwo: zaktualizowano dołączony BoringSSL.

Pełny dziennik zmian: https://github.com/ggml-org/llama.cpp/compare/b9664...b9680`,
    fr_FR: `Mise à jour de llama.cpp vers b9680. Une version de maintenance apportant des améliorations de l'interface web, du backend et de la sécurité.

- Interface web : bascule du code source pour les blocs mermaid et SVG rendus ; détection du transport SSE corrigée lors du routage via le proxy CORS.
- Backends : mémoire visible par l'hôte sur les appareils UMA de Vulkan, allocations USM de SYCL et correction d'un use-after-free, prise en charge d'OpenVINO 2026.2 et diverses corrections OpenCL/CUDA.
- Sécurité : BoringSSL fourni mis à jour.

Journal des modifications complet : https://github.com/ggml-org/llama.cpp/compare/b9664...b9680`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
