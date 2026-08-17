import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.10450:0',
  releaseNotes: {
    en_US: `Updated llama.cpp to build b10450, and the **Set Model** action now remembers what you picked.

**This package**

- The **Set Model** action now opens pre-filled with your current selection instead of resetting to the defaults, so you can change one setting — or just check which custom model is configured — without re-entering everything.

**llama.cpp**

- A small maintenance bump — 12 builds since b10438.
- Adds support for the Kimi-K3 text model family.
- The server's request queue was reworked, improving behaviour under concurrent requests.
- Vulkan: better performance on Intel Xe graphics, and a workaround for a problematic Intel driver version.
- The built-in chat UI now masks the API key field so browsers stop offering to save it.
- More robust GGUF parsing — malformed model metadata is rejected instead of misread.
- The \`--mmap\`/\`--no-mmap\`/\`--mlock\` flags are now deprecated in favour of \`--load-mode\`. They still work; if you pass them through **Set Model**'s extra arguments, switch when convenient.

llama.cpp publishes one build per merged commit and does not provide a per-build changelog. Full commit range: https://github.com/ggml-org/llama.cpp/compare/b10438...b10450`,
    es_ES: `Actualiza llama.cpp a la compilación b10450, y la acción **Establecer modelo** ahora recuerda lo que eligió.

**Este paquete**

- La acción **Establecer modelo** ahora se abre con su selección actual ya rellenada, en lugar de volver a los valores predeterminados, de modo que puede cambiar un solo ajuste —o simplemente comprobar qué modelo personalizado está configurado— sin volver a introducirlo todo.

**llama.cpp**

- Una pequeña actualización de mantenimiento: 12 compilaciones desde la b10438.
- Añade compatibilidad con la familia de modelos de texto Kimi-K3.
- Se ha rediseñado la cola de peticiones del servidor, mejorando su comportamiento con peticiones simultáneas.
- Vulkan: mejor rendimiento en gráficos Intel Xe y una solución alternativa para una versión problemática del controlador de Intel.
- La interfaz de chat integrada ahora enmascara el campo de la clave de API para que el navegador no ofrezca guardarla.
- Análisis de GGUF más robusto: los metadatos de modelo mal formados se rechazan en lugar de interpretarse mal.
- Las opciones \`--mmap\`/\`--no-mmap\`/\`--mlock\` quedan obsoletas en favor de \`--load-mode\`. Siguen funcionando; si las pasa como argumentos adicionales en **Establecer modelo**, cámbielas cuando le resulte cómodo.

llama.cpp publica una compilación por cada commit fusionado y no ofrece un registro de cambios por compilación. Rango completo de commits: https://github.com/ggml-org/llama.cpp/compare/b10438...b10450`,
    de_DE: `Aktualisiert llama.cpp auf Build b10450, und die Aktion **Modell festlegen** merkt sich jetzt Ihre Auswahl.

**Dieses Paket**

- Die Aktion **Modell festlegen** öffnet sich jetzt mit Ihrer aktuellen Auswahl vorausgefüllt, statt auf die Standardwerte zurückzuspringen. So können Sie eine einzelne Einstellung ändern – oder einfach nachsehen, welches benutzerdefinierte Modell konfiguriert ist – ohne alles neu einzugeben.

**llama.cpp**

- Ein kleines Wartungsupdate – 12 Builds seit b10438.
- Ergänzt Unterstützung für die Textmodellfamilie Kimi-K3.
- Die Anfrage-Warteschlange des Servers wurde überarbeitet, was das Verhalten bei gleichzeitigen Anfragen verbessert.
- Vulkan: bessere Leistung auf Intel-Xe-Grafik sowie eine Umgehung für eine problematische Intel-Treiberversion.
- Die integrierte Chat-Oberfläche maskiert das Feld für den API-Schlüssel, damit Browser dessen Speicherung nicht mehr anbieten.
- Robustere GGUF-Auswertung: fehlerhafte Modell-Metadaten werden abgelehnt statt falsch gelesen.
- Die Optionen \`--mmap\`/\`--no-mmap\`/\`--mlock\` gelten zugunsten von \`--load-mode\` als veraltet. Sie funktionieren weiterhin; wenn Sie sie über die zusätzlichen Argumente von **Modell festlegen** übergeben, stellen Sie bei Gelegenheit um.

llama.cpp veröffentlicht einen Build pro zusammengeführtem Commit und stellt kein Änderungsprotokoll je Build bereit. Vollständiger Commit-Bereich: https://github.com/ggml-org/llama.cpp/compare/b10438...b10450`,
    pl_PL: `Aktualizuje llama.cpp do kompilacji b10450, a akcja **Ustaw model** zapamiętuje teraz Twój wybór.

**Ten pakiet**

- Akcja **Ustaw model** otwiera się teraz wypełniona bieżącym wyborem, zamiast wracać do wartości domyślnych — możesz zmienić pojedyncze ustawienie lub po prostu sprawdzić, który model niestandardowy jest skonfigurowany, bez wpisywania wszystkiego od nowa.

**llama.cpp**

- Niewielka aktualizacja konserwacyjna — 12 kompilacji od b10438.
- Dodaje obsługę rodziny modeli tekstowych Kimi-K3.
- Przeprojektowano kolejkę żądań serwera, co poprawia zachowanie przy równoczesnych żądaniach.
- Vulkan: lepsza wydajność na układach graficznych Intel Xe oraz obejście problematycznej wersji sterownika Intela.
- Wbudowany interfejs czatu maskuje teraz pole klucza API, dzięki czemu przeglądarka nie proponuje jego zapisania.
- Solidniejsze przetwarzanie plików GGUF — błędne metadane modelu są odrzucane zamiast błędnie odczytywane.
- Opcje \`--mmap\`/\`--no-mmap\`/\`--mlock\` są przestarzałe na rzecz \`--load-mode\`. Nadal działają; jeśli przekazujesz je w dodatkowych argumentach akcji **Ustaw model**, zmień je przy okazji.

llama.cpp publikuje jedną kompilację na scalony commit i nie udostępnia listy zmian dla poszczególnych kompilacji. Pełny zakres commitów: https://github.com/ggml-org/llama.cpp/compare/b10438...b10450`,
    fr_FR: `Met à jour llama.cpp vers la version b10450, et l'action **Définir le modèle** mémorise désormais votre sélection.

**Ce paquet**

- L'action **Définir le modèle** s'ouvre désormais pré-remplie avec votre sélection actuelle au lieu de revenir aux valeurs par défaut : vous pouvez ainsi modifier un seul paramètre — ou simplement vérifier quel modèle personnalisé est configuré — sans tout ressaisir.

**llama.cpp**

- Une petite mise à jour de maintenance — 12 versions depuis la b10438.
- Ajoute la prise en charge de la famille de modèles de texte Kimi-K3.
- La file d'attente des requêtes du serveur a été repensée, ce qui améliore le comportement en cas de requêtes simultanées.
- Vulkan : meilleures performances sur les cartes graphiques Intel Xe et contournement d'une version problématique du pilote Intel.
- L'interface de discussion intégrée masque désormais le champ de la clé d'API, afin que le navigateur ne propose plus de l'enregistrer.
- Analyse des fichiers GGUF plus robuste : des métadonnées de modèle malformées sont rejetées au lieu d'être mal interprétées.
- Les options \`--mmap\`/\`--no-mmap\`/\`--mlock\` sont désormais obsolètes au profit de \`--load-mode\`. Elles fonctionnent toujours ; si vous les passez dans les arguments supplémentaires de **Définir le modèle**, changez-les à votre convenance.

llama.cpp publie une version par commit fusionné et ne fournit pas de journal des modifications par version. Plage complète des commits : https://github.com/ggml-org/llama.cpp/compare/b10438...b10450`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
