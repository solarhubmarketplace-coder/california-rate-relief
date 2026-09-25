#!/usr/bin/env node
/**
 * brand-sweep.mjs — drop "Program" from the California Rate Relief brand.
 *
 * Decision #39 (2026-09-24): the brand is "California Rate Relief". The site
 * still said "California Rate Relief Program" in copy and markup (Article
 * publisher names, legal pages, the footer, a booking page). This script
 * rewrites every occurrence under src/ in .ts, .tsx, .json and .md files.
 *
 * Grammar: "the California Rate Relief Program" becomes "California Rate
 * Relief" (a name takes no article), except where the name is used as a
 * modifier ("the California Rate Relief Program website" becomes "the
 * California Rate Relief website"). The older short form "the Rate Relief
 * Program" on the legacy legal pages becomes "California Rate Relief".
 *
 * Skipped on purpose:
 *   - Code/Backend (voice and SMS scripts are out of scope; this script only
 *     walks Code/Frontend/src).
 *   - The form, consent and intake files the release rules forbid touching.
 *   - src/app/testing-guide/page.tsx, which quotes the backend voice script's
 *     greeting verbatim; it changes only when that script does.
 *
 * Idempotent: a second run finds nothing to change. Run from Code/Frontend:
 *   node scripts/brand-sweep.mjs            # rewrite files, print a summary
 *   node scripts/brand-sweep.mjs --dry-run  # print what would change
 *   node scripts/brand-sweep.mjs --check    # exit 1 if anything is left
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const EXTENSIONS = new Set(['.ts', '.tsx', '.json', '.md']);

const SKIP_FILES = new Set([
  'src/components/landing/QualificationWizard.tsx',
  'src/components/landing/CommercialAssessmentForm.tsx',
  'src/lib/intake.ts',
  'src/lib/intake-routing.ts',
  'src/lib/attribution.ts',
  'src/lib/submission-identity.ts',
  'src/components/GoogleAnalyticsClient.tsx',
  'src/app/testing-guide/page.tsx',
]);

/** Nouns after which the brand is a modifier and keeps its article. */
const MODIFIED_NOUNS = 'website|web site|site|team|services?|brand|name|logo|pages?';

/** Ordered rules; each is applied to the whole file text. */
const RULES = [
  {
    // "the California Rate Relief Program website" -> "the California Rate Relief website"
    re: new RegExp(`\\b([Tt]he)(\\s+)California Rate Relief Program(\\s+)(?=(?:${MODIFIED_NOUNS})\\b)`, 'g'),
    to: '$1$2California Rate Relief$3',
  },
  {
    // "the California Rate Relief Program's" -> "California Rate Relief's"
    re: /\b[Tt]he\s+California Rate Relief Program(?='s\b|’s\b)/g,
    to: 'California Rate Relief',
  },
  {
    // "the California Rate Relief Program" / "The California Rate Relief Program" -> "California Rate Relief"
    re: /\b[Tt]he\s+California Rate Relief Program\b/g,
    to: 'California Rate Relief',
  },
  {
    // any remaining "California Rate Relief Program" (names, alt text, titles)
    re: /\bCalifornia Rate Relief Program\b/g,
    to: 'California Rate Relief',
  },
  {
    // legacy short form on the old legal pages: "the Rate Relief Program"
    re: /\b[Tt]he\s+Rate Relief Program\b/g,
    to: 'California Rate Relief',
  },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name.startsWith('.')) continue;
      walk(p, out);
    } else {
      const dot = name.lastIndexOf('.');
      if (dot !== -1 && EXTENSIONS.has(name.slice(dot))) out.push(p);
    }
  }
  return out;
}

const args = new Set(process.argv.slice(2));
const dryRun = args.has('--dry-run') || args.has('--check');
const check = args.has('--check');

let filesChanged = 0;
let replacements = 0;
const changed = [];

for (const file of walk(SRC)) {
  const rel = relative(ROOT, file).split(sep).join('/');
  if (SKIP_FILES.has(rel)) continue;
  const before = readFileSync(file, 'utf8');
  if (!before.includes('Rate Relief Program')) continue;
  let after = before;
  let count = 0;
  for (const { re, to } of RULES) {
    after = after.replace(re, (...m) => {
      count += 1;
      // Expand $1..$n in the replacement by hand so the counter still runs.
      return to.replace(/\$(\d)/g, (_, n) => m[Number(n)] ?? '');
    });
  }
  if (after !== before) {
    filesChanged += 1;
    replacements += count;
    changed.push(`${rel} (${count})`);
    if (!dryRun) writeFileSync(file, after);
  }
}

for (const line of changed) console.log(line);
console.log(
  `${dryRun ? 'would change' : 'changed'} ${replacements} occurrence(s) in ${filesChanged} file(s)`,
);
if (check && filesChanged > 0) process.exit(1);
