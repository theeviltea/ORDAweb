// Сборка сайта в один HTML для превью-артефакта (картинки и шрифты — соседними файлами).
import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..');
const out = path.join(root, 'preview-artifact');
mkdirSync(out, { recursive: true });
const shims = path.join(root, 'tools/artifact-preview/shims');

const res = await build({
  entryPoints: [path.join(root, 'tools/artifact-preview/entry.tsx')],
  bundle: true,
  minify: true,
  write: false,
  format: 'iife',
  jsx: 'automatic',
  target: 'es2020',
  outdir: out,
  loader: { '.js': 'jsx' },
  alias: { 'next/link': path.join(shims, 'link.tsx'), 'next/navigation': path.join(shims, 'navigation.ts'), '@': path.join(root, 'src') },
  define: { 'process.env.NEXT_PUBLIC_BASE_PATH': '"."', 'process.env.NODE_ENV': '"production"' },
  external: ['*.ttf'],
});
const js = res.outputFiles.find((f) => f.path.endsWith('.js')).text.replace(/<\/script/g, '<\\/script');
let css = res.outputFiles
  .filter((f) => f.path.endsWith('.css'))
  .map((f) => f.text)
  .join('\n');
css = css.replace(/url\([^)]*?fonts\/([^)'"]+)['"]?\)/g, "url('fonts/$1')").replace(/@font-face\{[^}]*\}/g, '');
const fonts = `@font-face{font-family:'SO Sporty';src:url('fonts/SOSporty.ttf') format('truetype');font-weight:100 900;font-display:swap}
${[
  ['400', '400Regular'],
  ['500', '500Medium'],
  ['600', '600SemiBold'],
  ['700', '700Bold'],
]
  .map(([w, f]) => `@font-face{font-family:'Roboto Condensed';src:url('fonts/RobotoCondensed_${f}.ttf') format('truetype');font-weight:${w};font-display:swap}`)
  .join('\n')}`;
const globals = readFileSync(path.join(root, 'src/app/globals.css'), 'utf8').replace(/@font-face[^}]*\}/g, '');
const html = `<title>ORDA Сайт</title>
<meta name="theme-color" content="#172A51">
<style>
:root { color-scheme: dark; }
${fonts}
${globals}
${css}
</style>
<div id="root"></div>
<script>${js}</script>
`;
writeFileSync(path.join(out, 'index.html'), html);
console.log('ok', (html.length / 1024).toFixed(0) + 'KB');
