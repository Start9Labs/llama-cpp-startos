import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11960:1',
  releaseNotes: {
    en_US: `Adds an OpenAI-compatible API interface with its own API key, so other services and API clients can reach llama.cpp again.

- Since StartOS 0.4.1, the web UI's password also protects llama.cpp's address inside the server. Services such as Open WebUI and DeepSeek Harness can't send that password, so their requests failed.
- The new interface takes the key shown by the API Key action, which can also replace it. Services on this server read the key automatically once they are updated to support it.
- The browser interface, now named Web UI, keeps its address and password.`,
    es_ES: `Añade una interfaz API compatible con OpenAI con su propia clave de API, para que otros servicios y clientes de API vuelvan a llegar a llama.cpp.

- Desde StartOS 0.4.1, la contraseña de la interfaz web también protege la dirección de llama.cpp dentro del servidor. Servicios como Open WebUI y DeepSeek Harness no pueden enviar esa contraseña, por lo que sus solicitudes fallaban.
- La nueva interfaz acepta la clave que muestra la acción Clave de API, que también puede reemplazarla. Los servicios de este servidor leen la clave automáticamente una vez actualizados para admitirla.
- La interfaz del navegador, ahora llamada Interfaz web, conserva su dirección y contraseña.`,
    de_DE: `Fügt eine OpenAI-kompatible API-Schnittstelle mit eigenem API-Schlüssel hinzu, sodass andere Dienste und API-Clients llama.cpp wieder erreichen.

- Seit StartOS 0.4.1 schützt das Passwort der Web-Oberfläche auch die Adresse von llama.cpp innerhalb des Servers. Dienste wie Open WebUI und DeepSeek Harness können dieses Passwort nicht senden, daher schlugen ihre Anfragen fehl.
- Die neue Schnittstelle akzeptiert den Schlüssel, den die Aktion „API-Schlüssel“ anzeigt und auch ersetzen kann. Dienste auf diesem Server lesen den Schlüssel automatisch, sobald sie dafür aktualisiert sind.
- Die Browser-Schnittstelle, jetzt „Web-Oberfläche“ genannt, behält Adresse und Passwort.`,
    pl_PL: `Dodaje interfejs API zgodny z OpenAI z własnym kluczem API, dzięki czemu inne usługi i klienty API znów mogą łączyć się z llama.cpp.

- Od StartOS 0.4.1 hasło interfejsu WWW chroni również adres llama.cpp wewnątrz serwera. Usługi takie jak Open WebUI i DeepSeek Harness nie potrafią wysłać tego hasła, więc ich żądania kończyły się błędem.
- Nowy interfejs przyjmuje klucz pokazywany przez akcję Klucz API, która może go też wymienić. Usługi na tym serwerze odczytują klucz automatycznie po aktualizacji, która to obsługuje.
- Interfejs przeglądarkowy, teraz nazwany Interfejs WWW, zachowuje adres i hasło.`,
    fr_FR: `Ajoute une interface API compatible OpenAI avec sa propre clé d’API, pour que les autres services et clients d’API puissent de nouveau joindre llama.cpp.

- Depuis StartOS 0.4.1, le mot de passe de l’interface web protège aussi l’adresse de llama.cpp à l’intérieur du serveur. Des services comme Open WebUI et DeepSeek Harness ne peuvent pas envoyer ce mot de passe, leurs requêtes échouaient donc.
- La nouvelle interface accepte la clé affichée par l’action Clé d’API, qui peut aussi la remplacer. Les services de ce serveur lisent la clé automatiquement une fois mis à jour pour la prendre en charge.
- L’interface du navigateur, désormais nommée Interface web, conserve son adresse et son mot de passe.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
