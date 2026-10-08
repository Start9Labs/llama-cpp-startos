<p align="center">
  <img src="icon.png" alt="llama.cpp Logo" width="21%">
</p>

# llama.cpp on StartOS

> Everything not listed in this document should behave the same as upstream
> llama.cpp. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[llama.cpp](https://github.com/ggml-org/llama.cpp) runs large language models locally and serves them over an OpenAI-compatible API. This package ships one build per accelerator, sizes its model presets to the hardware it finds, and puts authentication in front of a server that has none of its own.

- **Upstream repo:** <https://github.com/ggml-org/llama.cpp>
- **Wrapper repo:** <https://github.com/Start9Labs/llama-cpp-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The upstream image is used unmodified, but **the package is built four times** — one variant per accelerator — and StartOS installs whichever matches your hardware.

| Variant   | Upstream image | Architectures   | Selected when                                |
| --------- | -------------- | --------------- | -------------------------------------------- |
| `generic` | CPU server     | x86_64, aarch64 | Nothing more specific matches — the fallback |
| `nvidia`  | CUDA server    | x86_64, aarch64 | An NVIDIA GPU on the `nvidia` driver         |
| `rocm`    | ROCm server    | x86_64          | A **discrete** AMD GPU on `amdgpu`           |
| `vulkan`  | Vulkan server  | x86_64, aarch64 | An Intel GPU on the `i915` driver            |

Selection is StartOS's, from the hardware requirements each variant declares; the most specific compatible one wins, and `generic` is the only variant with no requirement.

The AMD requirement matches discrete cards by product name rather than excluding integrated ones, because ROCm is unreliable on integrated Radeon graphics and the matcher has no way to express an exclusion.

| Subcontainer                                 | Purpose                                          |
| -------------------------------------------- | ------------------------------------------------ |
| `llama-cpp-sub`                              | The `primary` daemon, and the one to `attach` to |
| `detect-nvidia`, `detect-rocm`, `detect-mem` | Temporary; used to size the model presets        |

## Volume and Data Layout

One volume, and most of it is downloaded models.

| Volume | Mount Point | Purpose                                                                         |
| ------ | ----------- | ------------------------------------------------------------------------------- |
| `main` | `/data`     | `store.json`, the GGUF model cache under `models/`, and HuggingFace's own cache |

Models are the bulk of it — a single quantized model runs from roughly one to forty gigabytes depending on size.

llama.cpp keeps the cache in the HuggingFace hub layout: each repo is `models/models--<org>--<repo>/`, with the weights in `blobs/` and `snapshots/<commit>/<file>.gguf` as symlinks into them. Deleting a file under `snapshots/` frees nothing; a model's space is reclaimed by removing its whole repo folder.

## File Models

One model. Two of its keys decide whether the service can run at all; the third only exists so a form can remember what you last told it.

| File         | Format | Modelled                | Written by                                |
| ------------ | ------ | ----------------------- | ----------------------------------------- |
| `store.json` | JSON   | Yes — `FileHelper.json` | The Set Model and Set UI Password actions |

| Key              | Notes                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| `serveArgs`      | The full argument list handed to `llama-server`, composed by the Set Model action               |
| `uiPassword`     | The password for the proxy's basic auth; the username is always `admin`                         |
| `modelSelection` | What the Set Model form last submitted, so it can be prefilled next time — read by nothing else |

Nothing else writes the file, and neither `serveArgs` nor `uiPassword` is defaulted — both are absent until you run their action, and each absence raises a task.

`modelSelection` holds the chosen `selection` plus, when Custom was chosen, a `custom` object carrying that variant's fields; picking a preset clears `custom`. The daemon never reads it, so it cannot disagree with `serveArgs` about what is actually running — at worst it prefills a form with a stale answer.

**No configuration file reaches the application.** Two environment variables are set, both redirecting caches onto the volume so downloaded weights survive a container rebuild:

| Variable      | Value               |
| ------------- | ------------------- |
| `LLAMA_CACHE` | `/data/models`      |
| `HF_HOME`     | `/data/huggingface` |

Everything else about how the model is served is in `serveArgs`, and the package always appends the host and port itself so the server binds where the interface expects it.

## Dependencies

None.

## Network Access and Interfaces

One interface, serving both the OpenAI-compatible API and llama.cpp's built-in chat UI.

| Interface        | Id    | Type | Port | Description                          |
| ---------------- | ----- | ---- | ---- | ------------------------------------ |
| llama.cpp Server | `api` | ui   | 8080 | The API and the built-in chat client |

**Authentication is added by StartOS, not by llama.cpp.** The server itself runs keyless; the binding declares HTTP basic auth at the edge, with the username `admin` and the password from `store.json`. Until a password is set the binding is configured with an empty one — which never serves anything, because the service is blocked from starting by a `critical` task at the same time.

An OpenAI-compatible client therefore needs those basic-auth credentials as well as whatever it would normally send.

## Installation and First-Run Flow

Install writes nothing and leaves the service stopped. **Two `critical` tasks** must be cleared before it can run.

1. **Set UI Password** — until then there is no credential in front of the API.
2. **Set Model** — until then there is nothing to serve.

Both are raised by a condition rather than at install time, so they reappear if either value is later cleared. After completing both tasks, start the service from the dashboard.

The first start after choosing a model **downloads it**, which is why the health check allows an hour before reporting failure. A large model on a slow connection can take most of that.

## Actions

Three actions, all user-facing.

### Set Model

Chooses what the server runs — either a curated preset or a model of your own.

- **What it changes:** `serveArgs` and `modelSelection` in `store.json`, replacing each entirely.
- **Cost:** seconds to write, then a restart — and, if the model is not already cached, a download that can take a long time.
- **Repeat safety:** safe to re-run. Switching back to a previously used model is fast, because the old one is still cached.
- **The form reopens on your current selection**, read back from `modelSelection`, so changing one setting does not mean re-entering the rest. With nothing chosen yet it falls back to the hardware-filtered default.
- **Presets are filtered to your hardware.** The form reads the accelerator's memory — VRAM on NVIDIA and ROCm, system memory otherwise — and disables any preset that would not fit, defaulting to the smallest that does. The field's help text lists every preset with the memory it needs. The estimate is the quantized weights plus roughly a quarter for the context cache.
- **Models already downloaded to the volume appear in the same list**, so a model you fetched before can be reselected without retyping its repo or re-downloading it. A downloaded file that is a preset's quant stays under that preset, while other quants of the same repo get their own entries. A downloaded entry is passed to `llama-server` as `-hf <org>/<repo> -hff <file>` so the exact cached quant is reused. Those entries run at a fixed 8192-token context with full GPU offload; use Custom for anything else.
- **Custom** takes a HuggingFace GGUF repo, optionally a specific file, a context size, a GPU-layer count, and extra server flags. Those extra flags are split on whitespace, so a quoted value with spaces will not survive.

### Set UI Password

Generates the password for the API and chat UI.

- **What it changes:** `uiPassword` in `store.json`, and through it the binding's basic-auth credential.
- **Cost:** seconds, then a restart.
- **Repeat safety:** safe to re-run, but it **replaces** the existing password — every saved client login has to be updated. When a password already exists it asks for confirmation first; the first run does not.
- **Outputs:** the username `admin` and the new password.

### Delete Model Cache

Removes one downloaded model to reclaim disk.

- **What it changes:** deletes the chosen `models--<org>--<repo>` folder from `/data/models` — every quantization downloaded from that repo goes with it. The form lists the cached repos with their size on disk, plus any loose `*.gguf` files left by older builds; it never takes a free-form path, and nothing is preselected.
- **Models in use cannot be deleted.** The main and speculative draft repos configured in `serveArgs` are disabled in the form and refused if submitted. Repeated HuggingFace options use the last value, matching llama-server. llama-server holds these models open, so the space would not come back until a restart, and the restart would download them again. Switch models with Set Model first.
- **Repeat safety:** fails with an error if the chosen model is no longer in the cache, rather than reporting success.
- **Outputs:** the repo removed and the space freed.
- **Not reversible**, but not destructive either — the model is re-downloaded if selected again.

## Tasks

Two tasks, both raised by a condition rather than at install, and both blocking.

| Task            | Severity   | Raised when                   | Cleared when    |
| --------------- | ---------- | ----------------------------- | --------------- |
| Set UI Password | `critical` | Whenever no password is set   | The action runs |
| Set Model       | `critical` | Whenever no model is selected | The action runs |

Because they are conditional, clearing either value later raises its task again rather than leaving the service running unauthenticated or idle.

## Health Checks

One check, on the daemon.

| Check                     | Method                 | Grace Period |
| ------------------------- | ---------------------- | ------------ |
| `primary` "llama.cpp API" | Port 8080 is listening | 1 hour       |

**The hour-long grace is for the model download**, which happens on the first start after a selection and is bounded only by size and bandwidth.

With no model selected the daemon idles rather than exiting, and the check's failure message names the action to run — so an unconfigured install reports what to do rather than looking broken.

## Backups and Restore

The `main` volume is backed up — `sdk.Backups.ofVolumes('main')` — with one exclusion: `setOptions({ exclude: ['models/'] })` leaves out `/data/models`, the model cache. No dump step.

- **Included:** `store.json` with the model selection and password.
- **Excluded:** every downloaded model. Weights are re-downloadable from upstream, so the backup stays small rather than being dominated by the cache.
- **Restore:** the selection and password come back and no tasks are raised. The selected model is downloaded again on the first start, inside the health check's one-hour grace.

## Limitations and Differences

1. **Two settings are required before the service does anything**, and each is enforced by a blocking task rather than defaulted.
2. **Authentication is the reverse proxy's, not llama.cpp's.** Every client, including API clients, must send basic-auth credentials.
3. **Which accelerator variant you get is decided by StartOS**, from the hardware present; it is not a setting.
4. **Integrated AMD graphics fall back to the generic CPU build.** ROCm is matched only for discrete cards.
5. **The Vulkan variant matches Intel GPUs only**, on the `i915` driver.
6. **Model presets are filtered by detected memory**, and the fit estimate is approximate — a preset that is enabled can still be tight at large context sizes.
7. **Extra server flags are split on whitespace**, so quoted arguments containing spaces do not survive.
8. **Models are excluded from backups.** After a restore, the selected model downloads again on first start.
9. **Downloaded models are listed by repo and file.** A cached file matching a curated preset's quant is not duplicated; other quants from the same repo remain separate entries. Downloaded entries do not expose context or GPU-layer settings — use Custom for those.

---

## Quick Reference for AI Consumers

```yaml
package_id: llama-cpp
image: ghcr.io/ggml-org/llama.cpp # server, server-cuda, server-rocm, or server-vulkan per variant
architectures:
  - x86_64
  - aarch64 # not for the rocm variant
subcontainers:
  - llama-cpp-sub # the running daemon
  - detect-nvidia # temporary; preset sizing
  - detect-rocm # temporary; preset sizing
  - detect-mem # temporary; preset sizing
volumes:
  main: /data
file_models:
  - store.json
startos_managed_env_vars:
  - LLAMA_CACHE
  - HF_HOME
dependencies: []
interfaces:
  api: { type: ui, port: 8080 } # basic auth enforced at the edge, username "admin"
actions:
  - set-model
  - set-ui-password
  - delete-model-cache
tasks:
  - { action: set-ui-password, severity: critical }
  - { action: set-model, severity: critical }
health_checks:
  - primary # displayed "llama.cpp API"; 1-hour grace covers the model download
```
