import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.9544:0',
  releaseNotes: {
    en_US: `**Fixes**

- The built-in chat UI now connects on a fresh install. The UI and API are protected by a username/password login (username \`admin\`) enforced at the StartOS reverse proxy — run the new **Set UI Password** task to generate your password. The separate API key has been removed.

**Bumps**

- llama.cpp → b9544.`,
    es_ES: `**Correcciones**

- La interfaz de chat integrada ahora se conecta en una instalación nueva. La interfaz y la API están protegidas por un inicio de sesión con usuario y contraseña (usuario \`admin\`) aplicado en el proxy inverso de StartOS: ejecute la nueva tarea **Establecer contraseña de la interfaz** para generar su contraseña. Se ha eliminado la clave API independiente.

**Actualizaciones**

- llama.cpp → b9544.`,
    de_DE: `**Fehlerbehebungen**

- Die integrierte Chat-Oberfläche verbindet sich jetzt bei einer Neuinstallation. Oberfläche und API sind durch eine Anmeldung mit Benutzername/Passwort (Benutzer \`admin\`) geschützt, die am StartOS-Reverse-Proxy erzwungen wird — führe die neue Aufgabe **UI-Passwort festlegen** aus, um dein Passwort zu generieren. Der separate API-Schlüssel wurde entfernt.

**Aktualisierungen**

- llama.cpp → b9544.`,
    pl_PL: `**Poprawki**

- Wbudowany interfejs czatu łączy się teraz przy nowej instalacji. Interfejs i API są chronione loginem z nazwą użytkownika i hasłem (użytkownik \`admin\`) egzekwowanym na zwrotnym proxy StartOS — uruchom nowe zadanie **Ustaw hasło interfejsu**, aby wygenerować hasło. Osobny klucz API został usunięty.

**Aktualizacje**

- llama.cpp → b9544.`,
    fr_FR: `**Corrections**

- L'interface de chat intégrée se connecte désormais lors d'une nouvelle installation. L'interface et l'API sont protégées par une connexion identifiant/mot de passe (utilisateur \`admin\`) appliquée au niveau du proxy inverse de StartOS — exécutez la nouvelle tâche **Définir le mot de passe de l'interface** pour générer votre mot de passe. La clé API distincte a été supprimée.

**Mises à jour**

- llama.cpp → b9544.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
