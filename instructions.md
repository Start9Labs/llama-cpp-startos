# llama.cpp

## Documentation

- [`llama-server` upstream README](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md) — the configuration reference and full HTTP API for the server this package runs.
- [llama.cpp project](https://github.com/ggml-org/llama.cpp) — the runtime itself.

## What you get on StartOS

- The upstream chat UI on the **Web UI** interface — open it in a browser to chat without setting up a client. It asks for a login (username `admin`).
- An OpenAI-compatible HTTP API on the **OpenAI-compatible API** interface, at `<interface-url>/v1`, serving one GGUF model at a time. It takes an API key instead of a login. Other StartOS AI apps that connect to llama.cpp (such as Open WebUI) read the key themselves, so there is nothing to copy.
- Curated GGUF presets, plus a Custom option that accepts any HuggingFace GGUF repo.
- Persistent model cache on the package volume — downloads happen once and survive restarts. The cache is excluded from backups; after a restore, the selected model downloads again on first start.

Two tasks appear on the dashboard on a fresh install:

1. **Set UI Password** — generates your web UI login password. The username is always `admin`; copy the password it returns (you'll need it the first time you open the UI or connect a client). Run it again any time to rotate the password.
2. **Set Model** — choose what llama.cpp serves. The form shows curated presets, lists the memory each one needs, and disables ones too large for the detected memory. Models you have already downloaded are listed too, so you can switch back to one without re-entering or re-downloading it. Every entry has its own context size, GPU layers and extra arguments, and remembers what you last used with that model. If none of the presets fit, pick **Custom** and paste a HuggingFace repo such as `unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M`. On a GPU variant, leave `GPU layers` at 999 to offload everything; on the CPU-only `generic` variant the field is ignored.

Complete both tasks, then start the service from the dashboard. The first launch downloads weights — expect several gigabytes and a few minutes (or longer over a slow link) before the API answers. The API health check stays pending until the model finishes loading, even if the chat UI opens earlier. Subsequent restarts are fast.

## Using llama.cpp

### Chat UI

Open the **Web UI** interface from the Dashboard. Your browser will prompt for a login — enter `admin` and the password from **Set UI Password**. The upstream chat UI is at `/`; pick a conversation and start typing.

### OpenAI-compatible API

Use the **OpenAI-compatible API** interface for clients and apps, with `/v1` appended:

- **Base URL:** `<api-interface-url>/v1`
- **API key:** the key from the **API Key** action. The Web UI password does not work here, and the key does not work on the Web UI interface.
- **Model name:** llama.cpp serves a single model, so most clients accept any string or an empty value here.

Quick test from the command line:

```sh
curl -s -H "Authorization: Bearer <your-api-key>" <api-interface-url>/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Say hello in one short sentence."}]}'
```

### Actions

- **Set Model** — switch to a different preset, a model you already downloaded, or a custom GGUF. The form opens on the model you are running, with its settings filled in, so you can change its context size or flags and submit; submitting without changes does not restart anything. Each model remembers its own settings, so switching away and back keeps them. The service restarts with the new weights; uncached models download on this restart.
- **Set UI Password** — generate a new web UI password (username stays `admin`). Use it for first-time setup or to rotate the password later; when rotating, it asks you to confirm, since saved logins stop working.
- **API Key** — show the key for the OpenAI-compatible API interface. Turn on **Generate a new key** to replace it; clients outside StartOS then need the new key, and StartOS apps pick it up when they restart.
- **Delete Model Cache** — pick a downloaded model from the list, with its size, and remove it to reclaim disk space. The model you are currently running can't be deleted; switch to another one with Set Model first. A deleted model will be re-downloaded if you select it again.

## Limitations

- **One model at a time.** Switching models restarts the service.
- **Models are large.** A 70B Q4 file is ~40 GB; even small models are several gigabytes. Confirm free disk before selecting a preset.
- **Saved slot caches may not survive an upstream update.** If you use `--slot-save-path` in Custom's extra arguments and restoring an old slot fails, replay its prompt and save the slot again. Your downloaded model weights are unaffected.
