# Updating the upstream version

This package wraps [`ggml-org/llama.cpp`](https://github.com/ggml-org/llama.cpp), specifically its prebuilt `llama-server` container images published at `ghcr.io/ggml-org/llama.cpp`.

Every merged commit gets a monotonic build number `bNNNN` and a GitHub **pre-release** of that name — dozens a day. Upstream also cuts **stable releases**, tagged `vX.Y.Z`, every week or two; each one is the same commit as one of the builds. This package tracks stable releases only, and pins the build number of the commit the release points at. Each server image is published in four variants:

| Variant   | Image tag                                        | Arches       |
| --------- | ------------------------------------------------ | ------------ |
| `generic` | `ghcr.io/ggml-org/llama.cpp:server-bNNNN`        | amd64, arm64 |
| `nvidia`  | `ghcr.io/ggml-org/llama.cpp:server-cuda-bNNNN`   | amd64, arm64 |
| `rocm`    | `ghcr.io/ggml-org/llama.cpp:server-rocm-bNNNN`   | amd64        |
| `vulkan`  | `ghcr.io/ggml-org/llama.cpp:server-vulkan-bNNNN` | amd64, arm64 |

All four variants are cut from the same upstream commit and bump together.

## Determining the upstream version

**Upstream moved only when a new stable `vX.Y.Z` release resolves to a build newer than the one pinned in `startos/manifest/index.ts`.** A newer `bNNNN` pre-release is never a reason to bump, however many have landed. Read the stable tag list rather than relying on GitHub's Latest badge:

```sh
git ls-remote --tags https://github.com/ggml-org/llama.cpp 'refs/tags/v*' \
  | awk '$2 ~ /^refs\/tags\/v[0-9]+\.[0-9]+\.[0-9]+$/ {sub("refs/tags/","",$2); print $2}' \
  | sort -Vr
```

Starting with the newest tag, confirm its release is neither a draft nor a prerelease and resolve the tag to its build:

```sh
TAG=v0.6.0 # replace with the stable tag being checked
gh release view -R ggml-org/llama.cpp "$TAG" --json tagName,isDraft,isPrerelease,body
SHA=$(gh api "repos/ggml-org/llama.cpp/commits/$TAG" --jq .sha)
BUILD=$(git ls-remote --tags https://github.com/ggml-org/llama.cpp 'refs/tags/b*' \
  | awk -v s="$SHA" '$1==s {sub("refs/tags/","",$2); print $2}')
echo "$TAG = $BUILD"
```

If `BUILD` is not greater than the current `upstreamBuild`, there is no update. Otherwise **confirm all four variants exist for it** — a partial publish would break only some build targets, and a missing image is not caught at pack time; it fails CI with `failed to resolve reference ... not found`:

```sh
for variant in '' 'cuda-' 'rocm-' 'vulkan-'; do
  printf 'server-%s%s: ' "$variant" "$BUILD"
  docker manifest inspect "ghcr.io/ggml-org/llama.cpp:server-${variant}${BUILD}" >/dev/null 2>&1 \
    && echo OK || echo MISSING
done
```

Check that each image index includes every architecture declared for that variant. If a variant is missing, try the next older stable tag and use the newest complete release whose build exceeds the current pin. If none does, don't bump.

> [!NOTE]
> **A raw `curl` against `ghcr.io/v2/.../manifests/<tag>` needs an `Accept` header.** These images are OCI indexes; without an `Accept` naming the index media types, GHCR answers `MANIFEST_UNKNOWN` even for tags that exist — reporting the known-good current pin as missing. If you must use `curl` rather than `docker manifest inspect`, send:
>
> ```sh
> TOKEN=$(curl -s "https://ghcr.io/token?scope=repository:ggml-org/llama.cpp:pull" | jq -r .token)
> curl -sH "Authorization: Bearer $TOKEN" \
>   -H "Accept: application/vnd.oci.image.index.v1+json,application/vnd.docker.distribution.manifest.list.v2+json" \
>   "https://ghcr.io/v2/ggml-org/llama.cpp/manifests/server-${BUILD}" | jq -r '.errors[0].code // "ok"'
> ```

## Version representation

The prebuilt containers are upstream development builds identified by `bNNNN`, not the official release-mode binaries. The stable `vX.Y.Z` tag selects the commit to package; the build tag identifies the artifact actually included. ExVer cannot represent the leading `b`, so map `bNNNN` to `NNNN:<revision>`, retaining the complete build counter. For example, the containers at the `v0.6.0` commit are `b11429`, represented as `11429:0`. Keep both identifiers in the release notes.

Earlier packages used the synthetic `1.0.NNNN` mapping. Do not continue it: the build-number representation retains every upstream component and sorts above those legacy versions. Leave historical migration vertices at their original versions.

## Applying the bump

1. Update `const upstreamBuild` in `startos/manifest/index.ts` to the stable release's build tag (e.g. `'b11429'` for `v0.6.0`) — the one you confirmed all four variants and their architectures for above.
2. Set `version` in `startos/versions/current.ts` to `<build-number>:0`. Edit in place unless the **outgoing** current version carries a nonempty migration; in that case move it into a historical file and register it before writing a fresh `current.ts`. A migration introduced by this bump belongs in the new `current.ts`.
3. Classify the jump using the release policy and `maintaining-a-package.md` § Scale scrutiny. Read notes and source only to the depth that tier requires. For release notes, summarize changes since the actual pinned build, not features already present from the previous stable release's range. Link both the stable release (`https://github.com/ggml-org/llama.cpp/releases/tag/vX.Y.Z`) and the build comparison.
4. In the normal development workflow, build and verify at least the `generic` variant: `make generic`. An automated cycle explicitly limited to typechecking runs only `npm run check` and leaves the build and live verification to PR review.
