export const short = {
  en_US: 'OpenAI-compatible LLM inference server (llama.cpp)',
  es_ES: 'Servidor de inferencia LLM compatible con OpenAI (llama.cpp)',
  de_DE: 'OpenAI-kompatibler LLM-Inferenzserver (llama.cpp)',
  pl_PL: 'Serwer inferencji LLM kompatybilny z OpenAI (llama.cpp)',
  fr_FR: "Serveur d'inférence LLM compatible OpenAI (llama.cpp)",
}

export const long = {
  en_US:
    'llama.cpp is a high-performance C/C++ runtime for running large language models in GGUF format. This package wraps the official `llama-server` binary, exposing an OpenAI-compatible HTTP API and built-in web chat UI. Pick a curated model preset sized for your hardware, or supply a custom HuggingFace GGUF — the server downloads weights on first start and serves them locally with no third-party calls.',
  es_ES:
    'llama.cpp es un tiempo de ejecución C/C++ de alto rendimiento para modelos de lenguaje grandes en formato GGUF. Este paquete envuelve el binario oficial `llama-server`, exponiendo una API HTTP compatible con OpenAI y una interfaz web de chat integrada. Elija un preset curado dimensionado para su hardware, o proporcione un GGUF personalizado de HuggingFace — el servidor descarga los pesos en el primer inicio y los sirve localmente sin llamadas a terceros.',
  de_DE:
    'llama.cpp ist eine performante C/C++-Laufzeit für große Sprachmodelle im GGUF-Format. Dieses Paket umfasst die offizielle `llama-server`-Binärdatei und stellt eine OpenAI-kompatible HTTP-API sowie eine integrierte Web-Chat-Oberfläche bereit. Wählen Sie ein für Ihre Hardware passendes Modell-Preset oder geben Sie ein eigenes HuggingFace-GGUF an — der Server lädt die Gewichte beim ersten Start herunter und stellt sie lokal bereit, ohne Drittanbieter-Aufrufe.',
  pl_PL:
    'llama.cpp to wydajne środowisko uruchomieniowe C/C++ dla dużych modeli językowych w formacie GGUF. Ten pakiet otacza oficjalny plik binarny `llama-server`, udostępniając API HTTP zgodne z OpenAI i wbudowany interfejs czatu webowego. Wybierz wyselekcjonowany preset dopasowany do Twojego sprzętu lub podaj własny GGUF z HuggingFace — serwer pobierze wagi przy pierwszym uruchomieniu i będzie je obsługiwał lokalnie, bez żadnych połączeń z usługami zewnętrznymi.',
  fr_FR:
    "llama.cpp est un runtime C/C++ haute performance pour les grands modèles de langage au format GGUF. Ce paquet enveloppe le binaire officiel `llama-server`, exposant une API HTTP compatible OpenAI et une interface de chat web intégrée. Choisissez un préréglage de modèle dimensionné pour votre matériel, ou fournissez un GGUF HuggingFace personnalisé — le serveur télécharge les poids au premier démarrage et les sert localement, sans appels à des tiers.",
}

export const alertInstall = {
  en_US:
    'llama.cpp serves one model at a time. After install, open the **Set Model** action to choose a preset (or supply a custom HuggingFace GGUF). The selected model downloads on first start — expect several gigabytes and a noticeable delay before the API is ready. Use **Get API Credentials** to retrieve the API key needed by OpenAI-compatible clients.',
  es_ES:
    'llama.cpp sirve un modelo a la vez. Tras la instalación, abra la acción **Establecer modelo** para elegir un preset (o proporcionar un GGUF personalizado de HuggingFace). El modelo seleccionado se descargará en el primer inicio — espere varios gigabytes y un retraso notable antes de que la API esté lista. Use **Obtener credenciales de API** para recuperar la clave API necesaria para los clientes compatibles con OpenAI.',
  de_DE:
    'llama.cpp bedient ein Modell zur Zeit. Öffnen Sie nach der Installation die Aktion **Modell festlegen**, um ein Preset auszuwählen (oder ein eigenes HuggingFace-GGUF anzugeben). Das ausgewählte Modell wird beim ersten Start heruntergeladen — rechnen Sie mit mehreren Gigabyte und einer spürbaren Verzögerung, bis die API bereit ist. Verwenden Sie **API-Zugangsdaten anzeigen**, um den von OpenAI-kompatiblen Clients benötigten API-Schlüssel abzurufen.',
  pl_PL:
    'llama.cpp obsługuje jeden model naraz. Po instalacji otwórz akcję **Ustaw model**, aby wybrać preset (lub podać własny GGUF z HuggingFace). Wybrany model zostanie pobrany przy pierwszym uruchomieniu — spodziewaj się kilku gigabajtów i zauważalnego opóźnienia, zanim API będzie gotowe. Użyj **Pobierz dane uwierzytelniające API**, aby uzyskać klucz API potrzebny klientom zgodnym z OpenAI.',
  fr_FR:
    "llama.cpp sert un modèle à la fois. Après l'installation, ouvrez l'action **Définir le modèle** pour choisir un préréglage (ou fournir un GGUF HuggingFace personnalisé). Le modèle sélectionné sera téléchargé au premier démarrage — prévoyez plusieurs gigaoctets et un délai notable avant que l'API soit prête. Utilisez **Obtenir les identifiants API** pour récupérer la clé API requise par les clients compatibles OpenAI.",
}
