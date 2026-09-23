#!/usr/bin/env node
/**
 * WCAG 2.1 AA contrast check for the CRR palette (src/app/crr-palette.css).
 *
 * Reads the token values straight out of the palette file, so the numbers it
 * prints are the numbers the site renders. Tailwind opacity modifiers such as
 * `bg-primary/5` and `text-white/80` are modelled as alpha blends over the
 * surface they sit on, because that is the color a reader actually sees.
 *
 * Thresholds: 4.5:1 for text (SC 1.4.3, normal-size text), 3:1 for the
 * non-text UI pairs (SC 1.4.11: input borders, focus ring, alert icons).
 *
 * USAGE
 *   node scripts/check-crr-palette-contrast.mjs          # the live palette
 *   node scripts/check-crr-palette-contrast.mjs --all    # live + every @alt
 *   node scripts/check-crr-palette-contrast.mjs --alt civic
 *
 * Exits 1 if any checked pair fails.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PALETTE_FILE = join(ROOT, 'src', 'app', 'crr-palette.css');
const css = readFileSync(PALETTE_FILE, 'utf8');

// ---------------------------------------------------------------------------
// parse
// ---------------------------------------------------------------------------
const block = /html\[data-site="ratereliefca"\]\s*\{([\s\S]*?)\n\}/.exec(css);
if (!block) {
  console.error(`No html[data-site="ratereliefca"] block found in ${PALETTE_FILE}`);
  process.exit(2);
}
const decl = /--([a-z0-9-]+)\s*:\s*([^;]+);/g;
function parseDecls(text) {
  const out = {};
  let m;
  while ((m = decl.exec(text))) out[m[1]] = m[2].trim();
  return out;
}
const live = parseDecls(block[1].replace(/\/\*[\s\S]*?\*\//g, ''));

const alts = {};
for (const line of css.split('\n')) {
  const m = /@alt\s+([a-z0-9-]+)\s+--([a-z0-9-]+)\s*:\s*([^;]+);/.exec(line);
  if (!m) continue;
  (alts[m[1]] ||= {})[m[2]] = m[3].trim();
}

// ---------------------------------------------------------------------------
// color math
// ---------------------------------------------------------------------------
function resolve(tokens, name, depth = 0) {
  const raw = tokens[name];
  if (raw === undefined) throw new Error(`token --${name} is not defined`);
  const ref = /^var\(--([a-z0-9-]+)\)$/.exec(raw);
  if (ref) {
    if (depth > 8) throw new Error(`var() loop at --${name}`);
    return resolve(tokens, ref[1], depth + 1);
  }
  return raw;
}
function hslToRgb(triplet) {
  const m = /^(-?[\d.]+)\s+([\d.]+)%\s+([\d.]+)%$/.exec(triplet);
  if (!m) throw new Error(`not an HSL triplet: "${triplet}"`);
  const h = ((Number(m[1]) % 360) + 360) % 360;
  const s = Number(m[2]) / 100;
  const l = Number(m[3]) / 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const mm = l - c / 2;
  const [r, g, b] =
    h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x]
      : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return [r, g, b].map((v) => Math.round((v + mm) * 255));
}
const hex = (rgb) => '#' + rgb.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase();
function luminance([r, g, b]) {
  const lin = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
const blend = (fg, alpha, bg) => fg.map((v, i) => Math.round(v * alpha + bg[i] * (1 - alpha)));

/**
 * A color expression: "token", "token/0.05 over other-expression",
 * "white", "white/0.8 over token".
 */
function color(tokens, expr) {
  const over = /^(.+?)\s+over\s+(.+)$/.exec(expr);
  if (over) {
    const [name, alpha] = over[1].split('/');
    const base = color(tokens, over[2]);
    return blend(color(tokens, name), Number(alpha), base);
  }
  if (expr === 'white') return [255, 255, 255];
  return hslToRgb(resolve(tokens, expr));
}

// ---------------------------------------------------------------------------
// the pairs the templates actually render
// ---------------------------------------------------------------------------
const TEXT = 4.5;
const UI = 3;
const PAIRS = [
  // body text
  ['foreground', 'background', TEXT, 'body text on page'],
  ['foreground', 'card', TEXT, 'body text on card'],
  ['foreground', 'muted', TEXT, 'body text on gray band'],
  ['foreground/0.8 over background', 'background', TEXT, 'text-foreground/80 on page'],
  ['foreground/0.7 over card', 'card', TEXT, 'text-foreground/70 on card (notes)'],
  ['foreground/0.6 over background', 'background', TEXT, 'text-foreground/60 on page (source lines)'],
  ['foreground', 'highlight-soft', TEXT, 'text on key-facts tint'],
  ['foreground', 'primary/0.05 over card', TEXT, 'text on CTA card tint'],
  ['foreground', 'status-warning/0.1 over card', TEXT, 'text in deadline alert'],
  // secondary text
  ['muted-foreground', 'background', TEXT, 'secondary text on page'],
  ['muted-foreground', 'card', TEXT, 'secondary text on card'],
  ['muted-foreground', 'muted', TEXT, 'secondary text on gray band (top strip)'],
  ['muted-foreground', 'primary/0.05 over card', TEXT, 'secondary text on CTA card tint'],
  // links and brand text
  ['primary', 'background', TEXT, 'link on page'],
  ['primary', 'card', TEXT, 'link on card / inverse button'],
  ['primary', 'muted', TEXT, 'link on gray band (top strip)'],
  ['primary', 'highlight-soft', TEXT, 'link on key-facts tint'],
  ['primary', 'primary/0.05 over card', TEXT, 'link on CTA card tint'],
  ['primary', 'primary/0.1 over card', TEXT, 'brand badge (bg-primary/10)'],
  // buttons
  ['primary-foreground', 'primary', TEXT, 'primary button label'],
  ['primary-foreground', 'primary/0.9 over card', TEXT, 'primary button label, hover'],
  ['cta-foreground', 'cta', TEXT, 'legacy bg-cta button (alias of brand)'],
  ['destructive-foreground', 'destructive', TEXT, 'destructive button label'],
  // text on brand-filled bands (footer, calculator band)
  ['white', 'primary', TEXT, 'white on brand band'],
  ['white/0.9 over primary', 'primary', TEXT, 'text-white/90 on brand band'],
  ['white/0.85 over primary', 'primary', TEXT, 'text-white/85 on brand card'],
  ['white/0.8 over primary', 'primary', TEXT, 'text-white/80 on brand band'],
  ['white/0.7 over primary', 'primary', TEXT, 'text-white/70 on brand band (captions)'],
  // (text-white/60 on the brand band is 4.46:1 and is not used on CRR chrome)
  // footer: ink surface
  ['white', 'foreground', TEXT, 'footer heading on ink'],
  ['white/0.8 over foreground', 'foreground', TEXT, 'footer link on ink'],
  ['white/0.7 over foreground', 'foreground', TEXT, 'footer caption on ink'],
  // accent
  ['highlight-foreground', 'highlight-soft', TEXT, 'accent text on accent tint (step badges, key-facts label)'],
  ['highlight-foreground', 'card', TEXT, 'accent text on card'],
  ['highlight-foreground', 'background', TEXT, 'accent text on page'],
  // semantic
  ['status-success', 'card', TEXT, 'verified text'],
  ['status-success', 'status-success/0.1 over card', TEXT, 'verified text on tint'],
  ['status-warning', 'card', TEXT, 'deadline text'],
  ['status-warning', 'status-warning/0.1 over card', TEXT, 'deadline text on tint'],
  ['status-error', 'card', TEXT, 'error text'],
  ['status-error', 'status-error/0.1 over card', TEXT, 'error text on tint'],
  ['status-info', 'card', TEXT, 'info text'],
  ['destructive', 'card', TEXT, 'form error text'],
  // non-text UI (SC 1.4.11)
  ['input', 'card', UI, 'form field border'],
  ['input', 'background', UI, 'form field border on page'],
  ['ring', 'background', UI, 'focus ring'],
  ['ring', 'card', UI, 'focus ring on card'],
  ['status-warning', 'status-warning/0.1 over card', UI, 'deadline icon on tint'],
  ['highlight', 'card', UI, 'key-fact marker bar'],
];

function run(name, tokens) {
  let failed = 0;
  console.log(`\n${name}`);
  console.log('  ratio   need  fg        bg        pair');
  for (const [fgExpr, bgExpr, need, label] of PAIRS) {
    const fg = color(tokens, fgExpr);
    const bg = color(tokens, bgExpr);
    const r = ratio(fg, bg);
    const ok = r >= need;
    if (!ok) failed += 1;
    console.log(
      `  ${r.toFixed(2).padStart(5)}  ${need.toFixed(1).padStart(4)}  ${hex(fg)}  ${hex(bg)}  ${ok ? '' : 'FAIL  '}${label}`
    );
  }
  const swatches = ['primary', 'highlight', 'highlight-foreground', 'foreground', 'muted-foreground', 'background', 'muted', 'border', 'input', 'status-success', 'status-warning', 'status-error'];
  console.log('  tokens: ' + swatches.map((t) => `${t} ${hex(color(tokens, t))}`).join(', '));
  console.log(failed ? `  ${failed} pair(s) FAIL` : `  all ${PAIRS.length} pairs pass`);
  return failed;
}

const argv = process.argv.slice(2);
const altIdx = argv.indexOf('--alt');
let failures = 0;
if (altIdx >= 0) {
  const n = argv[altIdx + 1];
  if (!alts[n]) {
    console.error(`unknown alternate "${n}"; known: ${Object.keys(alts).join(', ') || 'none'}`);
    process.exit(2);
  }
  failures += run(`alternate: ${n}`, { ...live, ...alts[n] });
} else {
  failures += run('live palette (src/app/crr-palette.css)', live);
  if (argv.includes('--all')) {
    for (const [n, over] of Object.entries(alts)) failures += run(`alternate: ${n}`, { ...live, ...over });
  }
}
process.exit(failures ? 1 : 0);
