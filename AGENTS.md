# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

**Start every task at the recipe index** — `../start-technologies/projects/start-sdk/docs/src/recipes.md`
(or <https://docs.start9.com/packaging/recipes.html>). It maps an intent ("prompt the user to create
admin credentials", "expose a web UI") to the constructs, the reference pages, and a named production
package to copy. Find the recipe before you read this package's neighbours: a package you reach by
grepping may be non-conformant, and the recipe outranks it.

Freshly scaffolded? Work the
[New Package Checklist](../start-technologies/projects/start-sdk/docs/src/new-package-checklist.md)
(or <https://docs.start9.com/packaging/new-package-checklist.html>) from top to bottom. It is a
guide page, not a file in this repo — read it, don't copy it in.

Keep `README.md` (technical reference for an AI support or administering agent) and
`instructions.md` (end-user docs) in sync with your changes.

**Bugs and feature requests are GitHub issues on this repo** — file them as you find them.
Don't record work in the repo instead: no `TODO.md`, no `NOTES.md`, no `PLAN.md`. What you
verified, tried, and decided belongs in the commit message and the PR body.

## This repo

- **One repo, four builds.** `VARIANT` (see the `Makefile` targets) selects the image, architectures, and `hardwareRequirements` for `generic`, `nvidia`, `rocm`, and `vulkan`. Bump `upstreamBuild` once in `startos/manifest/index.ts` and every variant follows.
- **The AMD matcher is a positive allowlist of discrete product names, not an iGPU exclusion.** StartOS's regex engine has no lookahead, and ROCm is unreliable on integrated Radeon — so a broad `amdgpu` match would route Ryzen APUs onto a build that does not work for them.
- **The one-hour grace period on the health check is the model download.** Don't shorten it to something that looks more like a health check.
- **Preset sizing reads VRAM where it can and system memory otherwise** (`startos/hardware.ts`), and the result is cached per process. `minMemoryGB` in `actions/presets.ts` is weights plus roughly 25% for the KV cache — keep that convention when adding a preset.
