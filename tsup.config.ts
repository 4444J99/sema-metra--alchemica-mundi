import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'cli/index': 'src/cli/index.ts',
  },
  format: ['esm'],
  // TypeScript 7 ships no compiler API, so tsup --dts is broken (tsup 9.0.0
  // hard-requires `typescript` for declaration bundling; the
  // @typescript/typescript6 fallback only helps rollup-plugin-dts, not
  // tsup itself). Declarations come from `tsc --emitDeclarationOnly`
  // in the build script instead; revisit when tsup supports TS 7 / 7.1.
  dts: false,
  sourcemap: true,
  clean: true,
  target: 'node20',
  splitting: false,
});
