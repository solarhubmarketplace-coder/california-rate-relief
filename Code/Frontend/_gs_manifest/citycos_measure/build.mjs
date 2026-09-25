import * as esbuild from '/home/claude/crr/wt/gs-citycos/Code/Frontend/node_modules/esbuild/lib/main.js';
import path from 'node:path';
const FE = process.argv[2] || '/home/claude/crr/wt/gs-citycos/Code/Frontend';
const here = path.dirname(new URL(import.meta.url).pathname);
const out = process.argv[3] || path.join(here, 'bundle.mjs');
const stubs = path.join(here, 'stubs.tsx');
await esbuild.build({
  entryPoints: [path.join(here, 'entry.tsx')],
  bundle: true, platform: 'node', format: 'cjs', outfile: out, jsx: 'automatic',
  nodePaths: [path.join(FE, 'node_modules')],
  alias: { '@': path.join(FE, 'src'), 'next/link': stubs, 'next/navigation': stubs, 'next/headers': stubs, 'next/script': path.join(here, 'script-stub.tsx'), 'next/image': path.join(here, 'image-stub.tsx') },
  external: ['react', 'react-dom', 'react-dom/server', 'react/jsx-runtime'],
  loader: { '.css': 'empty', '.json': 'json' },
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
  absWorkingDir: FE,
});
console.log('built', out);
