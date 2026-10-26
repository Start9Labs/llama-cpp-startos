import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '11669:2',
  releaseNotes: {
    en_US:
      'Set Model now remembers the context size, GPU layers and extra arguments you last used with each model, so switching away and back keeps them. Presets and downloaded models expose these settings too, and the running model can be reselected to change them.',
    es_ES:
      'Establecer modelo ahora recuerda el tamaño de contexto, las capas en GPU y los argumentos adicionales que usó por última vez con cada modelo, así que cambiar a otro y volver los conserva. Los presets y los modelos descargados también muestran estos ajustes, y el modelo en uso se puede volver a seleccionar para cambiarlos.',
    de_DE:
      'Modell festlegen merkt sich jetzt Kontextgröße, GPU-Layer und zusätzliche Argumente, die Sie zuletzt mit jedem Modell verwendet haben, sodass sie beim Wechsel zu einem anderen Modell und zurück erhalten bleiben. Auch Presets und heruntergeladene Modelle bieten diese Einstellungen, und das laufende Modell kann erneut ausgewählt werden, um sie zu ändern.',
    pl_PL:
      'Ustaw model zapamiętuje teraz rozmiar kontekstu, warstwy GPU i dodatkowe argumenty ostatnio użyte z każdym modelem, więc przełączenie na inny model i z powrotem ich nie traci. Presety i pobrane modele również udostępniają te ustawienia, a uruchomiony model można wybrać ponownie, aby je zmienić.',
    fr_FR: `Définir le modèle mémorise désormais la taille de contexte, les couches GPU et les arguments supplémentaires utilisés en dernier avec chaque modèle : passer à un autre modèle puis revenir les conserve. Les préréglages et les modèles téléchargés proposent aussi ces réglages, et le modèle en cours peut être resélectionné pour les modifier.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
