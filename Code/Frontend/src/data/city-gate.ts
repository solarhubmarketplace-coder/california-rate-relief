// =============================================================================
// city-gate.ts — may this city page be indexed? (Block 3, item 3.5)
//
// A city page passes when BOTH hold:
//   1. it states at least MIN_LOCAL_DATA_POINTS named local data points, each a
//      sourced fact about that city (not its county or the state), and
//   2. its text shares less than MAX_SIBLING_OVERLAP of its 8-word phrases with
//      any other page of the same family.
// A page that fails stays out of the index (the routing lane's isHeldPath
// reads this) until it passes, or is merged into the page named in the
// manifest.
//
// HOW OVERLAP IS MEASURED (the method scripts/qc-gate-tsx.mjs uses)
//   - Text: what a reader reads in the article body — the H1, the answer, each
//     section, the city's local project checks and the FAQ — built by the same
//     function the template renders from (src/lib/city-cost-content.ts). Shared
//     furniture (header, footer, breadcrumb, byline, quick check, bill tool,
//     inquiry form, lists of links to other pages) is not part of it.
//   - Lowercase, replace every character outside [a-z0-9 ] with a space, split
//     on whitespace, take every run of 8 consecutive words as a shingle.
//   - overlap(A, B) = |shingles(A) ∩ shingles(B)| / min(|shingles(A)|, |shingles(B)|).
//   - maxSiblingOverlap = the largest overlap against any other page in the family.
//
// FAMILIES
// Only 'cost' has a text model here. Another family (companies, savings) is
// reported as not gated (gated: false, pass: true) until its lane registers a
// text model with registerCityPageTextModel(); a page is never held by a gate
// that cannot read it.
//
// Imports are relative with .ts extensions so scripts/city-gate.mjs and the
// Node test runner load this file directly. Server-only (DG Stats JSON).
// =============================================================================

import { getPublishableCityCostRows } from './city-cost-data.ts';
import { buildCostPageContent, costPageText } from '../lib/city-cost-content.ts';
import { costPageSeo } from '../lib/city-pages.ts';

export const MIN_LOCAL_DATA_POINTS = 3;
export const MAX_SIBLING_OVERLAP = 0.5;
export const SHINGLE_WORDS = 8;

export type CityGateFamily = 'cost' | 'companies' | 'savings';

export interface CityPageTextModel {
  /** Every live slug in the family. */
  slugs(): string[];
  /** The body text a reader reads, and the named local data points on the page. */
  page(slug: string): { text: string; localDataPoints: { id: string; label: string }[] } | null;
}

export interface CityGateResult {
  family: CityGateFamily;
  slug: string;
  /** False when no text model is registered for the family. */
  gated: boolean;
  pass: boolean;
  reasons: string[];
  localDataPoints: { id: string; label: string }[];
  maxSiblingOverlap: number;
  nearestSibling: string | null;
  words: number;
}

// -----------------------------------------------------------------------------
// Text models
// -----------------------------------------------------------------------------

const costModel: CityPageTextModel = {
  slugs: () => getPublishableCityCostRows().map((r) => r.slug),
  page: (slug) => {
    const row = getPublishableCityCostRows().find((r) => r.slug === slug);
    if (!row) return null;
    const content = buildCostPageContent(row);
    return { text: costPageText(content, costPageSeo(row).h1), localDataPoints: content.localDataPoints };
  },
};

const MODELS: Partial<Record<CityGateFamily, CityPageTextModel>> = { cost: costModel };

/** For another lane's family: give the gate a way to read its pages. */
export function registerCityPageTextModel(family: CityGateFamily, model: CityPageTextModel): void {
  MODELS[family] = model;
  familyCache.delete(family);
}

// -----------------------------------------------------------------------------
// Shingles
// -----------------------------------------------------------------------------

export function shingles(text: string, size = SHINGLE_WORDS): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set<string>();
  for (let i = 0; i + size <= words.length; i++) set.add(words.slice(i, i + size).join(' '));
  return set;
}

export function overlap(a: Set<string>, b: Set<string>): number {
  if (!a.size || !b.size) return 0;
  const [small, large] = a.size <= b.size ? [a, b] : [b, a];
  let shared = 0;
  for (const s of small) if (large.has(s)) shared += 1;
  return shared / small.size;
}

// -----------------------------------------------------------------------------
// The gate
// -----------------------------------------------------------------------------

interface FamilyPages {
  pages: Map<string, { shingles: Set<string>; words: number; localDataPoints: { id: string; label: string }[] }>;
  results: Map<string, CityGateResult>;
}

const familyCache = new Map<CityGateFamily, FamilyPages>();

function loadFamily(family: CityGateFamily): FamilyPages | null {
  const model = MODELS[family];
  if (!model) return null;
  const cached = familyCache.get(family);
  if (cached) return cached;
  const pages: FamilyPages['pages'] = new Map();
  for (const slug of model.slugs()) {
    const page = model.page(slug);
    if (!page) continue;
    pages.set(slug, {
      shingles: shingles(page.text),
      words: page.text.split(/\s+/).filter(Boolean).length,
      localDataPoints: page.localDataPoints,
    });
  }
  const entry = { pages, results: new Map() };
  familyCache.set(family, entry);
  return entry;
}

export function cityPageGate(family: CityGateFamily, slug: string): CityGateResult {
  const loaded = loadFamily(family);
  if (!loaded) {
    return {
      family,
      slug,
      gated: false,
      pass: true,
      reasons: [`no text model registered for the ${family} family; not gated`],
      localDataPoints: [],
      maxSiblingOverlap: 0,
      nearestSibling: null,
      words: 0,
    };
  }
  const cached = loaded.results.get(slug);
  if (cached) return cached;
  const page = loaded.pages.get(slug);
  if (!page) {
    const result: CityGateResult = {
      family,
      slug,
      gated: true,
      pass: false,
      reasons: ['not a live page in this family'],
      localDataPoints: [],
      maxSiblingOverlap: 0,
      nearestSibling: null,
      words: 0,
    };
    loaded.results.set(slug, result);
    return result;
  }
  let worst = 0;
  let nearest: string | null = null;
  for (const [other, candidate] of loaded.pages) {
    if (other === slug) continue;
    const o = overlap(page.shingles, candidate.shingles);
    if (o > worst) {
      worst = o;
      nearest = other;
    }
  }
  const reasons: string[] = [];
  if (page.localDataPoints.length < MIN_LOCAL_DATA_POINTS) {
    reasons.push(`${page.localDataPoints.length} named local data points (need ${MIN_LOCAL_DATA_POINTS})`);
  }
  if (worst >= MAX_SIBLING_OVERLAP) {
    reasons.push(`${(worst * 100).toFixed(1)}% 8-gram overlap with ${nearest} (must be under ${MAX_SIBLING_OVERLAP * 100}%)`);
  }
  const result: CityGateResult = {
    family,
    slug,
    gated: true,
    pass: reasons.length === 0,
    reasons,
    localDataPoints: page.localDataPoints,
    maxSiblingOverlap: Math.round(worst * 1000) / 1000,
    nearestSibling: nearest,
    words: page.words,
  };
  loaded.results.set(slug, result);
  return result;
}

/** Every page of a family, gated. */
export function cityGateReport(family: CityGateFamily): CityGateResult[] {
  const model = MODELS[family];
  if (!model) return [];
  return model.slugs().map((slug) => cityPageGate(family, slug));
}
