# Updating the upstream version

This package wraps [`ggml-org/llama.cpp`](https://github.com/ggml-org/llama.cpp), specifically its prebuilt `llama-server` container images published at `ghcr.io/ggml-org/llama.cpp`.

llama.cpp releases use monotonic build numbers of the form `bNNNN` (no semver), one per merged commit. Each release publishes four server image variants on `ghcr.io`:

| Variant   | Image tag                                        | Arches       |
| --------- | ------------------------------------------------ | ------------ |
| `generic` | `ghcr.io/ggml-org/llama.cpp:server-bNNNN`        | amd64, arm64 |
| `nvidia`  | `ghcr.io/ggml-org/llama.cpp:server-cuda-bNNNN`   | amd64, arm64 |
| `rocm`    | `ghcr.io/ggml-org/llama.cpp:server-rocm-bNNNN`   | amd64        |
| `vulkan`  | `ghcr.io/ggml-org/llama.cpp:server-vulkan-bNNNN` | amd64, arm64 |

All four variants are cut from the same upstream commit and bump together.

## Determining the upstream version

> [!WARNING]
> **Most llama.cpp releases have no images at all. Never pin `gh release view` output.** Upstream cuts a GitHub release for every merged commit — dozens a day — but only publishes server images for a small, irregular subset. This is not a "the image lags by an hour" problem: at time of writing the eight most recent releases (`b9983`–`b9990`) had **no** server images published, while `b9982` had all four. In a 21-build window (`b9970`–`b9990`) only **two** builds — `b9976` and `b9982` — had images.
>
> Pinning a release whose images don't exist is not caught at pack time. It fails every CI build with `failed to resolve reference ... not found`. **Find the newest build that actually has images, and pin that** — the answer is often well below the newest release, and you cannot assume the image-bearing builds are contiguous.

Ask GHCR what it has actually published, rather than asking GitHub what was released. This lists any `server-bNNNN` tags newer than the build currently pinned in `startos/manifest/index.ts` (`server-b` tags sort lexically the same as numerically while build numbers keep their digit count):

```sh
CURRENT=b9982   # ← the `upstreamBuild` currently in startos/manifest/index.ts
TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:ggml-org/llama.cpp:pull" | jq -r .token)
curl -s -H "Authorization: Bearer $TOKEN" \
  "https://ghcr.io/v2/ggml-org/llama.cpp/tags/list?n=1000&last=server-${CURRENT}" \
  | jq -r '[.tags[] | select(test("^server-b[0-9]+$"))]
           | if length == 0 then "none newer — the current pin is the newest published build" else .[] end'
```

Take the highest build it prints, then **confirm all four variants exist for it** — the four are published together, but verify rather than assume, since a partial publish would break only some build targets:

```sh
BUILD=bNNNN   # ← the candidate
for variant in '' 'cuda-' 'rocm-' 'vulkan-'; do
  printf 'server-%s%s: ' "$variant" "$BUILD"
  docker manifest inspect "ghcr.io/ggml-org/llama.cpp:server-${variant}${BUILD}" >/dev/null 2>&1 \
    && echo OK || echo MISSING
done
```

If any variant is `MISSING`, step down to the next build the tag-list query returned — do **not** just decrement the build number, since the gaps between published builds are large and irregular.

> [!NOTE]
> **A raw `curl` against `ghcr.io/v2/.../manifests/<tag>` needs an `Accept` header.** These images are OCI indexes; without an `Accept` naming the index media types, GHCR answers `MANIFEST_UNKNOWN` even for tags that exist — reporting the known-good current pin as missing. If you must use `curl` rather than `docker manifest inspect`, send:
>
> ```sh
> curl -sH "Authorization: Bearer $TOKEN" \
>   -H "Accept: application/vnd.oci.image.index.v1+json,application/vnd.docker.distribution.manifest.list.v2+json" \
>   "https://ghcr.io/v2/ggml-org/llama.cpp/manifests/server-${BUILD}" | jq -r '.errors[0].code // "ok"'
> ```

## Applying the bump

1. Update `const upstreamBuild` in `startos/manifest/index.ts` to the verified-published build tag (e.g. `'b9982'`) — the one you confirmed all four variants for above, not merely the newest release.
2. Bump `version` + `releaseNotes` in `startos/versions/current.ts`. Edit in place — the file name stays `current.ts`; spin off a new file only if the bump needs a migration.
3. Skim the upstream commit range for breaking flag/server-API changes that might invalidate the presets in `startos/actions/presets.ts`. Build numbers are dense (dozens per day), so most bumps are uneventful — but `llama-server` does occasionally rename flags.
4. Build and verify at least the `generic` variant: `make generic`.
