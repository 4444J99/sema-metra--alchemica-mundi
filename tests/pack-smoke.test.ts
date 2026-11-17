/**
 * Pack smoke test — proves the published artifact installs and runs.
 *
 * Covers sema-metra--alchemica-mundi#18 (ACTIVATION AUDIT: ship-soon): before
 * this test there was no evidenced consumer-packaging contract — no proof the
 * packed tarball installs in a clean directory and the `sema` binary runs.
 *
 * What it does, in order:
 *  1. builds the package (`npm run build`, the same build `prepublishOnly`
 *     runs before a publish),
 *  2. asserts `npm pack --dry-run` lists exactly the intended artifact
 *     (`dist/` + `data/` + package files — no `src/`, `tests/`, `.github/`,
 *     or `seed.yaml`),
 *  3. packs twice and asserts byte-identical tarballs (deterministic pack),
 *  4. installs the tarball in a fresh temporary consumer project and proves
 *     the package imports (`createAlchemica` is a function) and the installed
 *     `sema --help` exits 0.
 *
 * It never publishes, tags, or touches credentials: the tarballs and the
 * consumer project live in temp dirs that are deleted afterwards.
 */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const repoRoot = resolve(fileURLToPath(new URL('../', import.meta.url)));
const tarballName = 'sema-metra--alchemica-mundi-1.0.0.tgz';
const STEP_TIMEOUT_MS = 120_000;

function run(cmd: string, args: string[], cwd: string): string {
  return execFileSync(cmd, args, {
    cwd,
    encoding: 'utf8',
    timeout: STEP_TIMEOUT_MS,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
}

function sha256(file: string): string {
  return createHash('sha256').update(readFileSync(file)).digest('hex');
}

describe('pack smoke (issue #18)', () => {
  it(
    'packed tarball installs in a clean project and sema --help exits 0',
    { timeout: 180_000 },
    () => {
      const packDirA = mkdtempSync(join(tmpdir(), 'sema-pack-a-'));
      const packDirB = mkdtempSync(join(tmpdir(), 'sema-pack-b-'));
      const consumerDir = mkdtempSync(join(tmpdir(), 'sema-consumer-'));
      try {
        // 1. Build — the same build prepublishOnly runs before a publish.
        run('npm', ['run', 'build'], repoRoot);

        // 2. Dry-run file list must be exactly the intended artifact.
        const dryRun = JSON.parse(
          run('npm', ['pack', '--dry-run', '--json'], repoRoot),
        ) as Array<{ files: Array<{ path: string }> }>;
        expect(dryRun).toHaveLength(1);
        const paths = dryRun[0].files.map((f) => f.path);
        expect(paths).toContain('dist/index.js');
        expect(paths).toContain('dist/cli/index.js');
        expect(paths).toContain('dist/index.d.ts');
        expect(paths).toContain('data/dualities.json');
        expect(paths).toContain('package.json');
        expect(paths).toContain('README.md');
        expect(paths).toContain('LICENSE');
        for (const p of paths) {
          expect(p).not.toMatch(/^(src|tests|\.github)\//);
          expect(p).not.toBe('seed.yaml');
          expect(p).toMatch(/^(LICENSE|README\.md|package\.json|data\/|dist\/)/);
        }

        // 3. Deterministic pack: two packs, identical tarball hash.
        run('npm', ['pack', '--pack-destination', packDirA, '--silent'], repoRoot);
        run('npm', ['pack', '--pack-destination', packDirB, '--silent'], repoRoot);
        const tarballA = join(packDirA, tarballName);
        const tarballB = join(packDirB, tarballName);
        expect(existsSync(tarballA)).toBe(true);
        expect(sha256(tarballA)).toBe(sha256(tarballB));

        // 4. Install in a fresh consumer project; prove import + binary.
        run(
          'npm',
          ['install', '--no-audit', '--no-fund', '--no-save', tarballA],
          consumerDir,
        );
        const bin = join(consumerDir, 'node_modules', '.bin', 'sema');
        expect(existsSync(bin)).toBe(true);
        const help = run(bin, ['--help'], consumerDir);
        expect(help).toContain('Usage: sema');

        const checkFile = join(consumerDir, 'check-import.mjs');
        writeFileSync(
          checkFile,
          "import { createAlchemica } from 'sema-metra--alchemica-mundi';\n" +
            "if (typeof createAlchemica !== 'function') throw new Error('createAlchemica is not a function');\n" +
            "console.log('import ok');\n",
        );
        const importOut = run('node', [checkFile], consumerDir);
        expect(importOut).toContain('import ok');
      } finally {
        rmSync(packDirA, { recursive: true, force: true });
        rmSync(packDirB, { recursive: true, force: true });
        rmSync(consumerDir, { recursive: true, force: true });
      }
    },
  );
});
