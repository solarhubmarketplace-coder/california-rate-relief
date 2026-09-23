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
 * 2026-09-22: also audits src/data/city-cost-data.ts (/solar-cost) and
 * src/data/growth-cities.ts (/solar-companies comparison pages), knows the
 * cities checked as split between utilities (SPLIT_CITIES) and the city-level
 * exceptions (CITY_OVERRIDES), each verified against the CEC layer and the
 * utility's own service-area statement that day.
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
  // 'reu' is the key cities-data.ts gives Roseville Electric Utility, so
  // Redding Electric Utility (no page yet) takes its own key. Before
  // 2026-09-22 this table mapped roseville to 'roseville', which flagged a
  // correct assignment as SERIOUS on every run.
  redding: 'redding',
  lodi: 'lodi',
  healdsburg: 'healdsburg',
  alameda: 'amp',
  roseville: 'reu',
  modesto: 'mid',
  turlock: 'tid',
  indio: 'iid',
  'santa-clara': 'svp',
  vernon: 'vernon',
  azusa: 'azusa',
  colton: 'colton',
  banning: 'banning',
};

/**
 * Cities that more than one utility serves, checked against primary sources on
 * 2026-09-22 (California Energy Commission Electric Load Serving Entities layer
 * intersected with Census TIGERweb city boundaries, plus each utility's own
 * service-area statement). A page for one of these must not present a single
 * utility as the city's: cities-data.ts sets utilityConfirmationRequired,
 * city-cost-data.ts carries utilitySplit (Corona has its own template path),
 * and growth-cities.ts uses 'other' or names the split in its copy.
 */
const SPLIT_CITIES = {
  'moreno-valley': ['mvu', 'sce'], // moval.org/mvu: new developments only
  merced: ['pge', 'meid'], // mercedid.org/power
  modesto: ['mid', 'tid'], // mid.org: north of the Tuolumne River
  riverside: ['rpu', 'sce'],
  corona: ['corona', 'sce'],
  'palm-desert': ['sce', 'iid'],
  'rancho-cucamonga': ['sce', 'rcmu'], // cityofrc.us/rcmu: SCE is the main provider
  vallejo: ['pge', 'pittsburg'], // CEC layer only
};

/**
 * Non-municipal city exceptions to the county rule. San Clemente is in Orange
 * County but SDG&E territory: SDG&E serves "San Diego and southern Orange
 * counties", SCE's own city list (updated 2025-03-17) omits San Clemente, and
 * the CEC layer places the whole city in SDG&E.
 */
const CITY_OVERRIDES = {
  'san-clemente': 'sdge',
  // Kern County is PG&E-dominant, but SCE's city list includes California City.
  'california-city': 'sce',
};

/** How each utility in SPLIT_CITIES is named in page copy. */
const UTILITY_NAME_PATTERN = {
  sce: 'Southern California Edison|\\bSCE\\b',
  pge: 'PG&E|Pacific Gas',
  mvu: 'Moreno Valley Utility|\\bMVU\\b',
  meid: 'Merced Irrigation',
  mid: 'Modesto Irrigation|\\bMID\\b',
  tid: 'Turlock Irrigation|\\bTID\\b',
  rpu: 'Riverside Public Utilities|\\bRPU\\b',
  corona: 'Corona',
  iid: 'Imperial Irrigation|\\bIID\\b',
  rcmu: 'RCMU|Rancho Cucamonga Municipal',
  pittsburg: 'Pittsburg',
};

/** city-cost-data.ts and growth-cities.ts key some utilities differently. */
const KEY_ALIASES = { roseville: 'reu', anaheim: 'apu' };
const norm = (code) => KEY_ALIASES[code] ?? code;

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

function expectedFor(slug, county) {
  if (SPLIT_CITIES[slug]) return { split: SPLIT_CITIES[slug] };
  if (CITY_OVERRIDES[slug]) return { code: CITY_OVERRIDES[slug] };
  if (MUNICIPAL_CITIES[slug]) return { code: MUNICIPAL_CITIES[slug] };
  const rule = COUNTY_UTILITY[(county.match(/^[A-Za-z .]+ County/) || [county])[0]];
  return rule ? { code: rule.dominant, soft: rule.split } : null;
}

async function auditOtherLayers() {
  const out = [];
  const cost = await import(join(ROOT, 'src', 'data', 'city-cost-data.ts'));
  for (const row of cost.getPublishableCityCostRows()) {
    const exp = expectedFor(row.slug, row.county);
    const code = norm(row.utilityKey);
    const base = { name: row.city, slug: `cost:${row.slug}`, county: row.county.slice(0, 24), utilityCode: code };
    if (!exp) continue;
    if (exp.split) {
      const handled = Boolean(row.utilitySplit) || row.slug === 'corona';
      if (!handled) out.push({ ...base, severity: 'SERIOUS', expected: exp.split.join('|'), why: `/solar-cost/${row.slug} names one utility for a split city; add utilitySplit` });
    } else if (code !== exp.code) {
      out.push({ ...base, severity: exp.soft ? 'REVIEW' : 'SERIOUS', expected: exp.code, why: `/solar-cost/${row.slug} says ${code.toUpperCase()}` });
    }
  }
  const growth = await import(join(ROOT, 'src', 'data', 'growth-cities.ts'));
  for (const [slug, g] of Object.entries(growth.growthCities)) {
    const exp = expectedFor(slug, g.county);
    const code = norm(g.utility);
    const base = { name: g.name, slug: `companies:${slug}`, county: g.county.slice(0, 24), utilityCode: code };
    if (!exp) continue;
    if (exp.split) {
      // 'other' means "no single utility pre-selected"; a named code must be
      // matched by copy that names the split.
      const namesSplit = exp.split.every((u) => new RegExp(UTILITY_NAME_PATTERN[u] ?? u, 'i').test(g.bill));
      if (!namesSplit && code !== 'other') out.push({ ...base, severity: 'REVIEW', expected: exp.split.join('|'), why: `growth copy for ${slug} does not name every utility in the split` });
    } else if (code !== 'other' && code !== exp.code) {
      out.push({ ...base, severity: exp.soft ? 'REVIEW' : 'SERIOUS', expected: exp.code, why: `/solar-companies/${slug} says ${code.toUpperCase()}` });
    }
  }
  return out;
}

async function main() {
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
    if (SPLIT_CITIES[c.slug]) {
      const at = src.indexOf(`slug: '${c.slug}'`);
      const entry = src.slice(at, src.indexOf('\n  },', at) + 1 || undefined);
      const confirm = /utilityConfirmationRequired:\s*true/.test(entry);
      const namesAll = SPLIT_CITIES[c.slug].every((u) => new RegExp(UTILITY_NAME_PATTERN[u] ?? u, 'i').test(entry));
      if (!confirm && !namesAll) {
        flags.push({ ...c, severity: 'SERIOUS', expected: SPLIT_CITIES[c.slug].join('|'), why: `${c.name} is split between ${SPLIT_CITIES[c.slug].join(' and ').toUpperCase()}; set utilityConfirmationRequired or name every utility in the copy` });
      }
      continue;
    }
    if (CITY_OVERRIDES[c.slug]) {
      if (c.utilityCode !== CITY_OVERRIDES[c.slug]) {
        flags.push({ ...c, severity: 'SERIOUS', expected: CITY_OVERRIDES[c.slug], why: `${c.name} is ${CITY_OVERRIDES[c.slug].toUpperCase()} territory, page says ${c.utilityCode.toUpperCase()}` });
      }
      continue;
    }
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

  // The two newer city layers: /solar-cost (city-cost-data.ts) and the
  // /solar-companies comparison pages (growth-cities.ts). Imported rather than
  // regex-parsed; Node strips the types.
  const layerFlags = await auditOtherLayers();
  flags.push(...layerFlags);

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

await main();
