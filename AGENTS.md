# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (architecture, for developers and LLMs) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **Package id is `llama-cpp`.** Ships four image variants — `generic` (CPU), `nvidia` (CUDA), `rocm` (AMD), and `vulkan` — selected at build time via `VARIANT=…`; the `Makefile` overrides `ARCHES`/`TARGETS` before the `s9pk.mk` include and fans out to per-variant targets. `rocm` is x86-only. Exposes one `ui` interface (`api`, port 8080): the OpenAI-compatible API plus built-in chat UI, gated by OS reverse-proxy basic auth (username `admin`, password set via the **Set UI Password** critical action). No dependencies.

## Inspecting a running install

To run a command inside the service's container (read its generated config, grep app logs), use `start-cli package attach llama-cpp -n llama-cpp-sub -- <cmd>`. Select the subcontainer by **name** with `-n` (the name passed to `SubContainer.of` in `main.ts` — here `llama-cpp-sub`) or by image with `-i`. Note: `-s/--subcontainer` matches the internal **Guid**, not the name, so passing a name to `-s` fails with "no matching subcontainers".
