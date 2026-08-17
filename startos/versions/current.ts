import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10438:1',
  releaseNotes: {
    en_US:
      'The **Set Model** action now opens pre-filled with your current selection instead of resetting to the defaults, so you can change one setting — or just check which custom model is configured — without re-entering everything.',
    es_ES:
      'La acción **Establecer modelo** ahora se abre con su selección actual ya rellenada, en lugar de volver a los valores predeterminados, de modo que puede cambiar un solo ajuste —o simplemente comprobar qué modelo personalizado está configurado— sin volver a introducirlo todo.',
    de_DE:
      'Die Aktion **Modell festlegen** öffnet sich jetzt mit Ihrer aktuellen Auswahl vorausgefüllt, statt auf die Standardwerte zurückzuspringen. So können Sie eine einzelne Einstellung ändern – oder einfach nachsehen, welches benutzerdefinierte Modell konfiguriert ist – ohne alles neu einzugeben.',
    pl_PL:
      'Akcja **Ustaw model** otwiera się teraz wypełniona bieżącym wyborem, zamiast wracać do wartości domyślnych, dzięki czemu możesz zmienić pojedyncze ustawienie — lub po prostu sprawdzić, który model niestandardowy jest skonfigurowany — bez wpisywania wszystkiego od nowa.',
    fr_FR:
      "L'action **Définir le modèle** s'ouvre désormais pré-remplie avec votre sélection actuelle au lieu de revenir aux valeurs par défaut : vous pouvez ainsi modifier un seul paramètre — ou simplement vérifier quel modèle personnalisé est configuré — sans tout ressaisir.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
