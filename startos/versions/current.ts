import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.11312:2',
  releaseNotes: {
    en_US: `Fixes Delete Model Cache, which reported success without removing anything. It now lists the cached models with their size and deletes the chosen one; the model in use cannot be deleted.

Updated llama.cpp to build b11312. Adds support for GLM-5.3-Flash models. Fixes out-of-bounds GPU memory writes with IQ4_NL models on NVIDIA and AMD GPUs, and integer overflows when parsing GGUF model files.

Full commit range: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312

- Set UI Password asks for confirmation only when it replaces an existing password, and labels the credentials it shows in your language.
- Set Model lists each preset with the memory it needs.
- Delete Model Cache starts with no model selected.
- Set Model also lists the models already downloaded to your box, so one fetched before can be selected again without retyping its HuggingFace repo or re-downloading it. A downloaded file that is a curated preset's quant stays under its preset entry; other quants from the same repo are listed separately.`,
    es_ES: `Corrige «Eliminar caché del modelo», que indicaba éxito sin eliminar nada. Ahora muestra los modelos en caché con su tamaño y elimina el elegido; el modelo en uso no se puede eliminar.

Actualiza llama.cpp a la compilación b11312. Añade compatibilidad con los modelos GLM-5.3-Flash. Corrige escrituras fuera de límites en la memoria de la GPU con modelos IQ4_NL en GPU NVIDIA y AMD, y desbordamientos de enteros al analizar archivos de modelo GGUF.

Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312

- «Establecer contraseña de la interfaz» pide confirmación solo cuando reemplaza una contraseña existente y muestra las credenciales en su idioma.
- «Establecer modelo» muestra cada preset con la memoria que necesita.
- «Eliminar caché del modelo» comienza sin ningún modelo seleccionado.
- «Establecer modelo» también muestra los modelos ya descargados en su dispositivo, de modo que uno descargado antes se puede volver a seleccionar sin reescribir su repositorio de HuggingFace ni volver a descargarlo. Un archivo descargado que corresponde a la cuantización de un preset permanece en su entrada de preset; las demás cuantizaciones del mismo repositorio se listan por separado.`,
    de_DE: `Behebt „Modell-Cache löschen“, das Erfolg meldete, ohne etwas zu entfernen. Die Aktion listet jetzt die zwischengespeicherten Modelle mit ihrer Größe auf und löscht das gewählte; das verwendete Modell kann nicht gelöscht werden.

Aktualisiert llama.cpp auf Build b11312. Fügt Unterstützung für GLM-5.3-Flash-Modelle hinzu. Behebt Schreibzugriffe außerhalb der Grenzen des GPU-Speichers bei IQ4_NL-Modellen auf NVIDIA- und AMD-GPUs sowie Ganzzahlüberläufe beim Einlesen von GGUF-Modelldateien.

Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312

- „UI-Passwort festlegen“ fragt nur dann nach einer Bestätigung, wenn es ein vorhandenes Passwort ersetzt, und beschriftet die angezeigten Zugangsdaten in Ihrer Sprache.
- „Modell festlegen“ zeigt zu jedem Preset den benötigten Speicher an.
- „Modell-Cache löschen“ beginnt ohne ausgewähltes Modell.
- „Modell festlegen“ listet jetzt auch die bereits heruntergeladenen Modelle auf, sodass ein zuvor heruntergeladenes Modell erneut ausgewählt werden kann, ohne sein HuggingFace-Repository erneut einzugeben oder es erneut herunterzuladen. Eine heruntergeladene Datei, die der Quantisierung eines kuratierten Presets entspricht, bleibt unter dessen Eintrag; andere Quantisierungen aus demselben Repository werden separat aufgeführt.`,
    pl_PL: `Naprawia akcję „Usuń pamięć podręczną modelu”, która zgłaszała sukces, nic nie usuwając. Teraz wyświetla modele w pamięci podręcznej wraz z rozmiarem i usuwa wybrany; używanego modelu nie można usunąć.

Aktualizuje llama.cpp do kompilacji b11312. Dodaje obsługę modeli GLM-5.3-Flash. Naprawia zapisy poza granicami pamięci GPU przy modelach IQ4_NL na kartach NVIDIA i AMD oraz przepełnienia liczb całkowitych podczas parsowania plików modeli GGUF.

Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b11277...b11312

- „Ustaw hasło interfejsu” prosi o potwierdzenie tylko wtedy, gdy zastępuje istniejące hasło, i opisuje wyświetlane dane logowania w Twoim języku.
- „Ustaw model” pokazuje przy każdym presecie wymaganą ilość pamięci.
- „Usuń pamięć podręczną modelu” rozpoczyna bez wybranego modelu.
- „Ustaw model” wyświetla też modele już pobrane na urządzenie, więc wcześniej pobrany model można wybrać ponownie bez wpisywania jego repozytorium HuggingFace i ponownego pobierania. Pobrany plik odpowiadający kwantyzacji wyselekcjonowanego presetu pozostaje pod jego pozycją; inne kwantyzacje z tego samego repozytorium są wymienione osobno.`,
    fr_FR: `Corrige « Supprimer le cache du modèle », qui signalait un succès sans rien supprimer. L’action liste désormais les modèles en cache avec leur taille et supprime celui choisi ; le modèle en cours d’utilisation ne peut pas être supprimé.

Met à jour llama.cpp vers la compilation b11312. Ajoute la prise en charge des modèles GLM-5.3-Flash. Corrige des écritures hors limites dans la mémoire GPU avec les modèles IQ4_NL sur les GPU NVIDIA et AMD, ainsi que des dépassements d'entiers lors de l'analyse des fichiers de modèle GGUF.

Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b11277...b11312

- « Définir le mot de passe de l’interface » ne demande une confirmation que lorsqu’elle remplace un mot de passe existant, et affiche les identifiants dans votre langue.
- « Définir le modèle » indique pour chaque préréglage la mémoire nécessaire.
- « Supprimer le cache du modèle » démarre sans modèle sélectionné.
- « Définir le modèle » liste aussi les modèles déjà téléchargés sur votre appareil, de sorte qu’un modèle téléchargé auparavant peut être resélectionné sans ressaisir son dépôt HuggingFace ni le retélécharger. Un fichier téléchargé correspondant à la quantification d’un préréglage reste sous son entrée ; les autres quantifications du même dépôt sont listées séparément.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
