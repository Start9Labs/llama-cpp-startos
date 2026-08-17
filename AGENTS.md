# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **One repo, four builds.** `VARIANT` (see the `Makefile` targets) selects the image, architectures, and `hardwareRequirements` for `generic`, `nvidia`, `rocm`, and `vulkan`. Bump `upstreamBuild` once in `startos/manifest/index.ts` and every variant follows.
- **The AMD matcher is a positive allowlist of discrete product names, not an iGPU exclusion.** StartOS's regex engine has no lookahead, and ROCm is unreliable on integrated Radeon — so a broad `amdgpu` match would route Ryzen APUs onto a build that does not work for them.
- **The one-hour grace period on the health check is the model download.** Don't shorten it to something that looks more like a health check.
- **Preset sizing reads VRAM where it can and system memory otherwise** (`startos/hardware.ts`), and the result is cached per process. `minMemoryGB` in `actions/presets.ts` is weights plus roughly 25% for the KV cache — keep that convention when adding a preset.
