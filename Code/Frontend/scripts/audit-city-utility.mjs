#!/usr/bin/env node
/**
 * Audit the serving utility assigned to every city in src/data/cities-data.ts.
 *
 * WHY
 * ---
 * /solar-savings/bakersfield shipped titled "2026 SCE Rates" for a city that is
 * predominantly PG&E. The cause is one field: `utilityCode: 'sce'` on the
 * Bakersfield entry in cities-data.ts. Because two templates render all 154 city
 * pages from that file, a single wrong field produces a wrong page, a wrong title,
 * wrong rates, wrong TOU windows and a wrong savings calculation — and it does it
 * silently.
 *
 * One wrong assignment found by accident means the rest are unaudited, not
 * correct. This script finds every assignment that disagrees with the dominant
 * utility for its county.
 *
 * WHAT THIS IS NOT
 * ----------------
 * It is NOT authoritative and it does not edit anything. County is a coarse proxy
 * for a service territory: real boundaries follow neither county nor ZIP lines,
 * several counties are split between two utilities, and municipal utilities carve
 * out single cities inside investor-owned territory. So this produces a REVIEW
 * LIST, ranked by how much traffic the page earns, to be checked against the
 * California Energy Commission's Electric Load Serving Entities GIS layer — the
 * authoritative source, and the one Block 4.1 calls for.
 *
 * A flag here means "verify this", not "this is wrong". A city with no flag has
 * not been verified either; it has only failed to disagree with a coarse rule.
 *
 * USAGE
 *   node scripts/audit-city-utility.mjs
 *   node scripts/audit-city-utility.mjs --json scripts/out/city-utility-audit.json
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = join(ROOT, 'src', 'data', 'cities-data.ts');

/**
 * Dominant electric utility by county, with the split counties marked.
 *
 * `split: true` means the county is genuinely served by more than one utility,
 * so an assignment that disagrees with `dominant` may still be right. Those are
 * reported at lower severity.
 *
 * Municipal utilities are handled separately below, because they are city-level
 * carve-outs inside a county otherwise served by an investor-owned utility.
 */
const COUNTY_UTILITY = {
  // --- SDG&E ---
  'San Diego County': { dominant: 'sdge', split: false },

  // --- SCE ---
  'Orange County': { dominant: 'sce', split: true },      // Anaheim is APU
  'Riverside County': { dominant: 'sce', split: true },    // Riverside is RPU; IID in the east
  'San Bernardino County': { dominant: 'sce', split: true },
  'Ventura County': { dominant: 'sce', split: false },
  'Los Angeles County': { dominant: 'sce', split: true },  // LADWP, Pasadena, Glendale, Burbank
  'Imperial County': { dominant: 'iid', split: false },
  'Inyo County': { dominant: 'sce', split: false },
  'Mono County': { dominant: 'sce', split: false },
  'Santa Barbara County': { dominant: 'sce', split: true },
  'Tulare County': { dominant: 'sce', split: true },

  // --- PG&E ---
  'Kern County': { dominant: 'pge', split: true },         // eastern Kern is SCE. Bakersfield is PG&E.
  'Fresno County': { dominant: 'pge', split: false },
  'Kings County': { dominant: 'pge', split: true },
  'Madera County': { dominant: 'pge', split: false },
  'Merced County': { dominant: 'pge', split: true },       // MID
  'Stanislaus County': { dominant: 'pge', split: true },    // MID, TID
  'San Joaquin County': { dominant: 'pge', split: true },   // Lodi Electric
  'Alameda County': { dominant: 'pge', split: true },       // Alameda Municipal Power
  'Contra Costa County': { dominant: 'pge', split: false },
  'San Francisco County': { dominant: 'pge', split: false },
  'San Mateo County': { dominant: 'pge', split: false },
  'Santa Clara County': { dominant: 'pge', split: true },   // Palo Alto, Santa Clara
  'Santa Cruz County': { dominant: 'pge', split: false },
  'Monterey County': { dominant: 'pge', split: false },
  'San Luis Obispo County': { dominant: 'pge', split: false },
  'Marin County': { dominant: 'pge', split: false },
  'Sonoma County': { dominant: 'pge', split: true },        // Healdsburg
  'Napa County': { dominant: 'pge', split: false },
  'Solano County': { dominant: 'pge', split: false },
  'Yolo County': { dominant: 'pge', split: false },
  'Butte County': { dominant: 'pge', split: false },
  'Shasta County': { dominant: 'pge', split: true },        // Redding Electric
  'Placer County': { dominant: 'pge', split: true },        // Roseville Electric
  'El Dorado County': { dominant: 'pge', split: true },     // SMUD in part
  'Nevada County': { dominant: 'pge', split: false },
  'Humboldt County': { dominant: 'pge', split: false },
  'Mendocino County': { dominant: 'pge', split: false },

  // --- SMUD ---
  'Sacramento County': { dominant: 'smud', split: true },
};

/**
 * City-level municipal carve-outs. These OVERRIDE the county rule: the county is
 * investor-owned territory but this specific city is served by its own utility.
 * Keyed by city slug.
 */
const MUNICIPAL_CITIES = {
  'los-angeles': 'ladwp',
  sacramento: 'smud',
  pasadena: 'pwp',
  glendale: 'gwp',
  burbank: 'bwp',
  anaheim: 'apu',
  riverside: 'rpu',
  'palo-alto': 'cpau',
  redding: 'reu',
  lodi: 'lodi',
  healdsburg: 'healdsburg',
  alameda: 'amp',
  roseville: 'roseville',
  modesto: 'mid',
  turlock: 'tid',
  indio: 'iid',
  'santa-clara': 'svp',
  vernon: 'vernon',
  azusa: 'azusa',
  colton: 'colton',
  banning: 'banning',
};

// ---------------------------------------------------------------------------
// parse cities-data.ts without executing it
// ---------------------------------------------------------------------------
function parseCities(src) {
  const cities = [];
  // Each entry begins with `name:` and carries slug, county and utilityCode.
  const entryRe = /\{\s*name:\s*'([^']+)'[\s\S]{0,400}?slug:\s*'([^']+)'[\s\S]{0,400}?county:\s*'([^']*)'[\s\S]{0,400}?utilityCode:\s*'([^']+)'/g;
  let m;
  while ((m = entryRe.exec(src)) !== null) {
    cities.push({ name: m[1], slug: m[2], county: m[3], utilityCode: m[4] });
  }
  return cities;
}

function main() {
  if (!existsSync(DATA)) {
    console.error(`cities-data.ts not found at ${DATA}`);
    process.exit(1);
  }
  const src = readFileSync(DATA, 'utf8');
  const cities = parseCities(src);

  if (!cities.length) {
    console.error('parsed 0 cities — the shape of cities-data.ts has changed, fix the parser');
    process.exit(1);
  }

  const flags = [];
  const unknownCounty = [];

  for (const c of cities) {
    const muni = MUNICIPAL_CITIES[c.slug];
    if (muni) {
      if (c.utilityCode !== muni) {
        flags.push({
          ...c,
          severity: 'SERIOUS',
          expected: muni,
          why: `${c.name} is served by its own municipal utility (${muni.toUpperCase()}), not ${c.utilityCode.toUpperCase()}`,
        });
      }
      continue;
    }

    const rule = COUNTY_UTILITY[c.county];
    if (!rule) {
      unknownCounty.push(c);
      continue;
    }
    if (c.utilityCode !== rule.dominant) {
      flags.push({
        ...c,
        severity: rule.split ? 'REVIEW' : 'SERIOUS',
        expected: rule.dominant,
        why: rule.split
          ? `${c.county} is split territory; ${c.utilityCode.toUpperCase()} is possible but ${rule.dominant.toUpperCase()} is dominant — verify against the CEC layer`
          : `${c.county} is ${rule.dominant.toUpperCase()} territory, page says ${c.utilityCode.toUpperCase()}`,
      });
    }
  }

  const byUtility = cities.reduce((acc, c) => {
    acc[c.utilityCode] = (acc[c.utilityCode] || 0) + 1;
    return acc;
  }, {});

  const line = '-'.repeat(78);
  console.log(line);
  console.log(`City utility audit — ${cities.length} cities in cities-data.ts`);
  console.log(line);
  console.log('\nassigned utilityCode counts:', byUtility);

  const serious = flags.filter((f) => f.severity === 'SERIOUS');
  const review = flags.filter((f) => f.severity === 'REVIEW');

  console.log(`\nSERIOUS — assignment disagrees with a county that is not split (${serious.length})`);
  for (const f of serious) {
    console.log(`  ${f.slug.padEnd(22)} ${f.county.padEnd(24)} says ${f.utilityCode.toUpperCase().padEnd(6)} expected ${f.expected.toUpperCase()}`);
    console.log(`      ${f.why}`);
  }

  console.log(`\nREVIEW — split county, verify against the CEC layer (${review.length})`);
  for (const f of review) {
    console.log(`  ${f.slug.padEnd(22)} ${f.county.padEnd(24)} says ${f.utilityCode.toUpperCase().padEnd(6)} dominant ${f.expected.toUpperCase()}`);
  }

  if (unknownCounty.length) {
    console.log(`\nNO COUNTY RULE — add the county to COUNTY_UTILITY (${unknownCounty.length})`);
    for (const c of unknownCounty) {
      console.log(`  ${c.slug.padEnd(22)} county: "${c.county}" says ${c.utilityCode.toUpperCase()}`);
    }
  }

  console.log(`\n${line}`);
  console.log(`RESULT: ${serious.length} serious, ${review.length} to review, ${unknownCounty.length} without a county rule`);
  console.log('This audit is a proxy. Verify every flag against the CEC Electric Load');
  console.log('Serving Entities GIS layer before changing a utilityCode — a wrong');
  console.log('"correction" produces the same class of defect it is meant to fix.');
  console.log(line);

  const jsonIdx = process.argv.indexOf('--json');
  if (jsonIdx >= 0 && process.argv[jsonIdx + 1]) {
    const out = process.argv[jsonIdx + 1];
    mkdirSync(dirname(join(ROOT, out)), { recursive: true });
    writeFileSync(
      join(ROOT, out),
      JSON.stringify(
        {
          audited_at: '2026-09-10',
          source_file: 'src/data/cities-data.ts',
          city_count: cities.length,
          assigned_counts: byUtility,
          authoritative_source_needed: 'CEC Electric Load Serving Entities GIS layer',
          serious,
          review,
          unknown_county: unknownCounty,
          cities,
        },
        null,
        2
      )
    );
    console.log(`json: ${out}`);
  }
}

main();
