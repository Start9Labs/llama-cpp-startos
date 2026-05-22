# Updating the upstream version

This package wraps [`ggml-org/llama.cpp`](https://github.com/ggml-org/llama.cpp), specifically its prebuilt `llama-server` container images published at `ghcr.io/ggml-org/llama.cpp`.

llama.cpp releases use monotonic build numbers of the form `bNNNN` (no semver), one per merged commit. Each release publishes four server image variants on `ghcr.io`:

| Variant   | Image tag                                 | Arches       |
| --------- | ----------------------------------------- | ------------ |
| `generic` | `ghcr.io/ggml-org/llama.cpp:server-bNNNN` | amd64, arm64 |
| `nvidia`  | `ghcr.io/ggml-org/llama.cpp:server-cuda-bNNNN` | amd64, arm64 |
| `rocm`    | `ghcr.io/ggml-org/llama.cpp:server-rocm-bNNNN` | amd64        |
| `vulkan`  | `ghcr.io/ggml-org/llama.cpp:server-vulkan-bNNNN` | amd64, arm64 |

All four variants are cut from the same upstream commit and bump together.

## Determining the upstream version

```sh
gh release view -R ggml-org/llama.cpp --json tagName -q .tagName
```

Confirm the tag exists for every variant before bumping (occasionally one variant lags by a release):

```sh
TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:ggml-org/llama.cpp:pull" | jq -r .token)
for variant in '' 'cuda-' 'rocm-' 'vulkan-'; do
  curl -sH "Authorization: Bearer $TOKEN" \
    "https://ghcr.io/v2/ggml-org/llama.cpp/manifests/server-${variant}bNNNN" \
    | jq -r '.errors[0].code // "ok"'
done
```

If any variant returns `MANIFEST_UNKNOWN`, drop back one or two build numbers until all four resolve.

## Applying the bump

1. Update `const upstreamBuild` in `startos/manifest/index.ts` to the new build tag (e.g. `'b9277'`).
2. Bump `version` + `releaseNotes` in `startos/versions/v1.0.NNNN_M.ts` (and rename the file to match the new version, per the StartOS version-file convention).
3. Skim the upstream commit range for breaking flag/server-API changes that might invalidate the presets in `startos/actions/presets.ts`. Build numbers are dense (dozens per day), so most bumps are uneventful — but `llama-server` does occasionally rename flags.
4. Build and verify at least the `generic` variant: `make generic`.
