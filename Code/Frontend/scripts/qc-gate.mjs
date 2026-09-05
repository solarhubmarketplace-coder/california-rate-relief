#!/usr/bin/env node
/**
 * Content QC gate.
 *
 * Blocks publish on the three failure modes that put the existing city layer at
 * average position 37.4 in Search Console:
 *
 *   1. THIN      - not enough unique prose to be worth ranking
 *   2. DUPLICATE - too much byte overlap with a sibling page. The live
 *                  /solar-companies pages are 71-81% identical to each other;
 *                  that is the pattern Google's scaled-content-abuse policy
 *                  describes, and generating quickly makes it easier to repeat.
 *   3. UNSOURCED - a numeric claim with no source. Rates and incentives move
 *                  quarterly, and unsourced numbers are how a page ends up
 *                  telling Modesto residents they pay PG&E rates.
 *
 * Usage:  node scripts/qc-gate.mjs
 * Exits non-zero if any page fails. Wire into the build before deploying.
 */

import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const MIN_UNIQUE_WORDS = 600;
const MAX_OVERLAP = 0.25; // 25% of 8-gram shingles shared with any sibling
const SHINGLE = 8;

const DATA_FILES = [
  'src/data/article-pages.commercial.json',
  'src/data/article-pages.battery.json',
  'src/data/article-pages.installer.json',
  'src/data/article-pages.problems.json',
];

function loadPages() {
  const pages = [];
  for (const rel of DATA_FILES) {
    const p = join(ROOT, rel);
    if (!existsSync(p)) continue;
    const parsed = JSON.parse(readFileSync(p, 'utf8'));
    for (const page of parsed) pages.push(page);
  }
  return pages;
}

function prose(p) {
  return [
    p.intro,
    ...(p.sections || []).map((s) => `${s.heading} ${s.body}`),
    p.whenThisIsWrong,
    ...(p.faqs || []).map((f) => `${f.question} ${f.answer}`),
    p.bottomLine,
  ]
    .filter(Boolean)
    .join(' ');
}

function words(text) {
  return text.split(/\s+/).filter(Boolean);
}

function shingles(text) {
  const w = words(text.toLowerCase().replace(/[^a-z0-9\s]/g, ' '));
  const set = new Set();
  for (let i = 0; i + SHINGLE <= w.length; i++) {
    set.add(w.slice(i, i + SHINGLE).join(' '));
  }
  return set;
}

function overlap(a, b) {
  if (!a.size || !b.size) return 0;
  let shared = 0;
  for (const s of a) if (b.has(s)) shared++;
  return shared / Math.min(a.size, b.size);
}

// A number that looks like a claim: money, percentage, cents-per-kWh, kW/MW, year.
const NUMERIC_CLAIM =
  /(\$[\d,]+(?:\.\d+)?|\b\d+(?:\.\d+)?\s?(?:%|¢|cents|kw|mw|kwh|watts?)\b|\b20\d\d\b)/i;

function main() {
  const pages = loadPages();
  if (!pages.length) {
    console.log('QC gate: no generated page data found yet — nothing to check.');
    process.exit(0);
  }

  const failures = [];
  const warnings = [];
  const texts = new Map();
  const shingleSets = new Map();

  for (const p of pages) {
    const text = prose(p);
    texts.set(p.slug, text);
    shingleSets.set(p.slug, shingles(text));
  }

  // 1. THIN
  for (const p of pages) {
    const n = words(texts.get(p.slug)).length;
    if (n < MIN_UNIQUE_WORDS) {
      failures.push(`THIN       ${p.slug}: ${n} words (minimum ${MIN_UNIQUE_WORDS})`);
    }
  }

  // 2. DUPLICATE
  const slugs = pages.map((p) => p.slug);
  for (let i = 0; i < slugs.length; i++) {
    for (let j = i + 1; j < slugs.length; j++) {
      const o = overlap(shingleSets.get(slugs[i]), shingleSets.get(slugs[j]));
      if (o > MAX_OVERLAP) {
        failures.push(
          `DUPLICATE  ${slugs[i]} vs ${slugs[j]}: ${(o * 100).toFixed(1)}% overlap (max ${MAX_OVERLAP * 100}%)`
        );
      } else if (o > MAX_OVERLAP * 0.8) {
        warnings.push(
          `near-dupe  ${slugs[i]} vs ${slugs[j]}: ${(o * 100).toFixed(1)}%`
        );
      }
    }
  }

  // 3. UNSOURCED
  for (const p of pages) {
    const hasNumbers = NUMERIC_CLAIM.test(texts.get(p.slug));
    const sourceCount = (p.sources || []).length;
    if (hasNumbers && sourceCount === 0) {
      failures.push(`UNSOURCED  ${p.slug}: numeric claims present, zero sources listed`);
    } else if (hasNumbers && sourceCount < 3) {
      warnings.push(`thin-cites ${p.slug}: only ${sourceCount} source(s)`);
    }
    for (const s of p.sources || []) {
      if (!/^https?:\/\//.test(s.url || '')) {
        failures.push(`BAD-SOURCE ${p.slug}: source "${s.name}" has no valid URL`);
      }
    }
    if (!p.reviewedAt || !/^\d{4}-\d{2}-\d{2}$/.test(p.reviewedAt)) {
      failures.push(`NO-DATE    ${p.slug}: missing or malformed reviewedAt`);
    }
  }

  // Report
  console.log(`QC gate: ${pages.length} pages checked\n`);
  const counts = pages.reduce((acc, p) => {
    acc[p.cluster] = (acc[p.cluster] || 0) + 1;
    return acc;
  }, {});
  for (const [c, n] of Object.entries(counts)) console.log(`  ${c}: ${n} pages`);

  const wordCounts = pages
    .map((p) => ({ slug: p.slug, n: words(texts.get(p.slug)).length }))
    .sort((a, b) => a.n - b.n);
  console.log(
    `\n  words: min ${wordCounts[0].n} (${wordCounts[0].slug}), ` +
      `median ${wordCounts[Math.floor(wordCounts.length / 2)].n}, ` +
      `max ${wordCounts[wordCounts.length - 1].n}`
  );

  if (warnings.length) {
    console.log(`\nWARNINGS (${warnings.length}):`);
    for (const w of warnings) console.log('  ' + w);
  }

  if (failures.length) {
    console.log(`\nFAILURES (${failures.length}):`);
    for (const f of failures) console.log('  ' + f);
    console.log('\nQC gate FAILED — these pages must not ship.');
    process.exit(1);
  }

  console.log('\nQC gate PASSED.');
}

main();
