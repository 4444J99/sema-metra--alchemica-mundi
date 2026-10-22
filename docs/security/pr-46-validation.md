# PR #46 dependency security validation — 2026-10-22

Scope: advance the existing Dependabot PR; no replacement PR or deployment.
Original head: `e1df128eae275b32ccd23407ab7735ed4679cd20`.
Base: `e1bd27b40fca7aabbf965b3d9e03534293e37510` (`main`).

## Security findings

Vite is a development dependency through Vitest, whose Vite constraint accepts
major versions 6, 7 and 8. The proposed lock pins Vite 8.3.5 instead of 8.1.4.
There is no Vite application/dev-server configuration in this repository;
`dev` invokes tsup watch and the package build uses tsup/esbuild.
Installed-version applicability is established; actual exploitation of an
exposed Vite development server is not established by this inspection.

| Advisory | Old lock | New lock |
| --- | --- | --- |
| [GHSA-587h-7wmj-h5pm / CVE-2026-112942](https://github.com/advisories/GHSA-587h-7wmj-h5pm), high: Windows editor-launch existence-check bypass, potentially enabling command injection | Vite 8.1.4 affected (8.0.0–8.1.5) | Vite 8.3.5 patched (8.3 line fixed in 8.3.3) |
| [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv), Windows percent escaping | affected | patched |
| [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw), editor CLI flag interpretation | affected | patched |
| [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22), non-Windows filesystem allowance bypass | affected | patched |
| [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw), cross-origin custom middleware | affected | patched |
| [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q), high: source-map-js event-loop denial of service | source-map-js 1.2.1 affected | 1.2.2 patched |

The original PR also updates Rolldown 1.1.5→1.2.15, Lightning CSS
1.32.0→1.33.0 and their native bindings, Oxc types, PostCSS, nanoid,
picomatch and source-map-js. Vite and Rolldown retain exactly the same Node
engine constraint: `^20.19.0 || >=22.12.0`. Native binding versions agree
with their parent packages. The upstream Rolldown update removes the optional
wasm32/WASI binding and adds Android ARM EABI; this is not evidence of WASI
runtime compatibility. macOS, Windows and non-x64 execution remain untested.

The high-severity Vite WebSocket advisory GHSA-p9ff-h696-f583 only affects
8.0.0–8.0.4, so it is not the applicable high-severity finding for 8.1.4.
The original notification's specific alert ID was not available; the high
finding above is independently identified by audit and the reviewed advisory.

## Acceptance corrections in this PR

The successful original CI run 39841360957 masked failures with `|| true`,
`|| echo` and `continue-on-error`. Its logs show missing coverage-v8,
TypeScript errors, and a declaration-build crash. CodeRabbit explicitly
skipped review of the bot-authored PR. Neither is approval evidence.

The declaration crash and type errors reproduce on the base revision, with
TypeScript 7.0.2. Pinning TypeScript 5.9.3 restores tsup's compiler API and
ambient Node types; remove one unused FXChain import to satisfy existing
strict unused-local checking. No application logic changes are required.

Add the coverage provider and pin it with Vitest at 4.1.12, which also fixes
the audit findings [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9)
and [GHSA-qxg6-89mg-rqv8](https://github.com/advisories/GHSA-qxg6-89mg-rqv8).
Keep Vite at the proposed 8.3.5.

Commander 15.0.0 required Node 22.12, contradicting the package's declared
Node >=20 runtime support. Pin Commander 14.0.3 (Node >=20) to preserve that
contract. Document the existing stricter Vite development-tool floor.
CI now uses frozen installs and fails on validation errors, with engine-strict
and Node 20.19.0, 22.12.0 and 24.x. Node 18 was already outside the package
runtime contract and incompatible with both old and new Vite versions.

## Verification and integration gate

On Linux x64 / Node 24.19.0, the corrected tree passes:

- `npm ci --engine-strict --ignore-scripts --no-audit`
- `npm run typecheck`
- `npm test -- --coverage`: 8 files, 297 tests; 71.19% line coverage
- `npm run build`: ESM and declaration output, including data copy
- `npm audit --audit-level=high`: zero vulnerabilities at inspection time
- `npm pack`, with ESM, declaration files, CLI and data included

The package's CLI help and 101 exported names load under Node 20.0.0.
An outside-checkout production-only tarball install is used for runtime smoke
verification. Exact remote CI results, the reviewed head, and the final merge
commit are to be recorded in the PR review/integration result. Merge only after
the corrected head passes the repository checks; the original green results
do not cover the additional corrections. No branch deletion or cleanup is in
scope. Original history is retained as the correction commit's parent.

This validates dependency remediation, build/test compatibility and a limited
package smoke path. It does not establish production deployment, live audio
acceptance, browser acceptance, or universal platform compatibility.
