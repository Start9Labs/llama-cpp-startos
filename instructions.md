# llama.cpp

## Documentation

- [`llama-server` upstream README](https://github.com/ggml-org/llama.cpp/blob/master/tools/server/README.md) — the configuration reference and full HTTP API for the server this package runs.
- [llama.cpp project](https://github.com/ggml-org/llama.cpp) — the runtime itself.

## What you get on StartOS

- An OpenAI-compatible HTTP API at `<your-interface-url>/v1`, serving one GGUF model at a time.
- The upstream chat UI at the same URL — open the interface in a browser to chat without setting up a client.
- A password-protected login (username `admin`) on the UI and API, so only you can use them. Other StartOS AI apps that depend on llama.cpp (such as Open WebUI) connect over the internal network with no login to copy.
- Curated GGUF presets, plus a Custom option that accepts any HuggingFace GGUF repo.
- Persistent model cache on the package volume — downloads happen once and survive restarts and backups.

Two tasks appear on the dashboard on a fresh install:

1. **Set UI Password** — generates your web UI login password. The username is always `admin`; copy the password it returns (you'll need it the first time you open the UI or connect a client). Run it again any time to rotate the password.
2. **Set Model** — choose what llama.cpp serves. The form shows curated presets and disables ones too large for the detected memory. If none of the presets fit, pick **Custom** and paste a HuggingFace repo such as `unsloth/Qwen2.5-7B-Instruct-GGUF:Q4_K_M`. On a GPU variant, leave `GPU layers` at 999 to offload everything; on the CPU-only `generic` variant the field is ignored.

The service starts as soon as a model is selected. The first launch downloads weights — expect several gigabytes and a few minutes (or longer over a slow link) before the API answers. Subsequent restarts are fast.

## Using llama.cpp

### Chat UI

Open the **llama.cpp Server** interface from the Dashboard. Your browser will prompt for a login — enter `admin` and the password from **Set UI Password**. The upstream chat UI is at `/`; pick a conversation and start typing.

### OpenAI-compatible API

Point any OpenAI-compatible client at the same URL with `/v1` appended:

- **Base URL:** `<your-interface-url>/v1`
- **Authentication:** the interface is gated by HTTP basic auth — username `admin`, password from **Set UI Password**. Most OpenAI clients only offer an "API key" field (sent as a bearer token), which the proxy won't accept; for those, use a client that supports basic auth, or call the API with `curl -u admin:<password>`.
- **Model name:** llama.cpp serves a single model, so most clients accept any string or an empty value here.

Quick test from the command line:

```sh
curl -s -u admin:<your-ui-password> <your-interface-url>/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"Say hello in one short sentence."}]}'
```

### Actions

- **Set Model** — switch to a different preset or custom GGUF. The service restarts with the new weights; uncached models download on this restart.
- **Set UI Password** — generate a new web UI password (username stays `admin`). Use it for first-time setup or to rotate the password later.
- **Delete Model Cache** — remove a specific filename from the cache (e.g. `Qwen2.5-7B-Instruct-Q4_K_M.gguf`) to reclaim disk space. A deleted model will be re-downloaded if you select it again.

## Limitations

- **One model at a time.** Switching models restarts the service.
- **Models are large.** A 70B Q4 file is ~40 GB; even small models are several gigabytes. Confirm free disk before selecting a preset.
