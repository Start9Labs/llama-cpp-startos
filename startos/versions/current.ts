import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9468:1',
  releaseNotes: {
    en_US:
      'Publishes the API key on a public volume so other StartOS services (such as Open WebUI) can connect to llama.cpp automatically. Existing installs get a newly generated key — retrieve it from the Get API Credentials action and update any connected clients.',
    es_ES:
      'Publica la clave API en un volumen público para que otros servicios de StartOS (como Open WebUI) puedan conectarse a llama.cpp automáticamente. Las instalaciones existentes obtienen una clave recién generada: recupérala en la acción Obtener credenciales de API y actualiza los clientes conectados.',
    de_DE:
      'Veröffentlicht den API-Schlüssel auf einem öffentlichen Volume, damit andere StartOS-Dienste (wie Open WebUI) sich automatisch mit llama.cpp verbinden können. Bestehende Installationen erhalten einen neu generierten Schlüssel — rufe ihn über die Aktion „API-Zugangsdaten abrufen“ ab und aktualisiere verbundene Clients.',
    pl_PL:
      'Udostępnia klucz API na woluminie publicznym, aby inne usługi StartOS (takie jak Open WebUI) mogły automatycznie łączyć się z llama.cpp. Istniejące instalacje otrzymują nowo wygenerowany klucz — pobierz go za pomocą akcji Pobierz dane uwierzytelniające API i zaktualizuj połączone klienty.',
    fr_FR:
      "Publie la clé API sur un volume public afin que d'autres services StartOS (comme Open WebUI) puissent se connecter automatiquement à llama.cpp. Les installations existantes reçoivent une clé nouvellement générée — récupérez-la via l'action Obtenir les identifiants d'API et mettez à jour les clients connectés.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
