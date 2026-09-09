import { allPageRoutes } from './glp1-page-routes';

/**
 * Search disposition for glp1comparehub.com.
 *
 * This registry deliberately fails closed: adding a Next.js page does not make
 * it indexable (or even publicly routable on the GLP-1 host) until the route is
 * classified here. That prevents another shared-monorepo route leak and keeps
 * unfinished YMYL content out of Google's index.
 */

export const GLP1_CANONICAL_ORIGIN = 'https://www.glp1comparehub.com';

export type Glp1IndexRoute = {
  path: string;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

/**
 * Recovery content spine. These are the only URLs submitted in the GLP-1
 * sitemap and the only GLP-1 HTML routes that do not receive X-Robots-Tag:
 * noindex. Expand this list only after a page passes factual, clinical, FTC,
 * canonical, and editorial review.
 *
 * Composition (2026-09-09 expansion from the original 10-URL boilerplate-only
 * set — see notes on each block below for inclusion criteria):
 *   - utility/trust boilerplate (10, unchanged)
 *   - medication-vs-medication pillars (4)
 *   - commercial/money-intent pages (5)
 *   - regulatory trust pillars (3)
 *   - hubs (2): /providers, /compare
 *   - formulation cluster, top 3 by volume (3)
 *   - provider review pages that clear the word-count + monetization bar (8)
 *   - the four strongest static provider-vs-provider comparisons + 1 (5)
 */
export const GLP1_INDEX_ROUTES: readonly Glp1IndexRoute[] = [
  // --- utility / trust boilerplate (original 10) ---
  { path: '/',                     changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/pricing',              changeFrequency: 'weekly',  priority: 0.9 },
  { path: '/about',                changeFrequency: 'monthly', priority: 0.5 },
  { path: '/author/chad-simpson',  changeFrequency: 'monthly', priority: 0.5 },
  { path: '/methodology',          changeFrequency: 'monthly', priority: 0.6 },
  { path: '/affiliate-disclosure', changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/disclaimer',           changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/privacy',              changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/terms',                changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/contact',              changeFrequency: 'monthly', priority: 0.4 },

  // --- medication-vs-medication pillars ---
  { path: '/tirzepatide-vs-semaglutide', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/wegovy-vs-mounjaro',         changeFrequency: 'weekly', priority: 0.7 },
  { path: '/ozempic-vs-mounjaro',        changeFrequency: 'weekly', priority: 0.7 },
  { path: '/tirzepatide-vs-zepbound',    changeFrequency: 'weekly', priority: 0.7 },

  // --- commercial / money-intent pages (pricing changes often) ---
  { path: '/best-compounded-tirzepatide',  changeFrequency: 'weekly', priority: 0.8 },
  { path: '/best-compounded-semaglutide',  changeFrequency: 'weekly', priority: 0.75 },
  { path: '/cheapest-tirzepatide-online',  changeFrequency: 'weekly', priority: 0.8 },
  { path: '/cheapest-semaglutide-online',  changeFrequency: 'weekly', priority: 0.75 },
  { path: '/tirzepatide-near-me',          changeFrequency: 'weekly', priority: 0.8 },

  // --- regulatory trust pillars (E-E-A-T, low volatility) ---
  { path: '/is-compounded-glp-1-legal',              changeFrequency: 'monthly', priority: 0.65 },
  { path: '/fda-compounded-glp-1',                   changeFrequency: 'monthly', priority: 0.6 },
  { path: '/503a-compounding-pharmacy-tirzepatide',  changeFrequency: 'monthly', priority: 0.55 },

  // --- hubs ---
  { path: '/providers', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/compare',   changeFrequency: 'weekly', priority: 0.7 },

  // --- formulation cluster: top 3 by search volume only ---
  { path: '/wegovy-pill',            changeFrequency: 'weekly', priority: 0.7 },
  { path: '/oral-tirzepatide',       changeFrequency: 'weekly', priority: 0.65 },
  { path: '/sublingual-semaglutide', changeFrequency: 'weekly', priority: 0.6 },

  // --- provider reviews: >=1500 live words AND (affiliate status 'active' in
  // affiliate-links.ts OR kept for cross-linking per content review). Of the
  // cross-linking slugs (medvi, eden-health, ivim-health, skinnyrx, trimrx),
  // only eden-health (1,834 words) clears the word-count bar; medvi (764),
  // ivim-health (992), skinnyrx (856), and trimrx (741) do not and stay
  // noindex. All 7 'active' Katalys-tracked providers clear 1,500 words. ---
  { path: '/providers/care-bare-rx',  changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/directmeds',    changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/eden-health',   changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/embody',        changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/gala-health',   changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/strut-health',  changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/system-labs',   changeFrequency: 'weekly', priority: 0.6 },
  { path: '/providers/tmates',        changeFrequency: 'weekly', priority: 0.6 },

  // --- comparisons: only the four strongest static /compare pages, plus the
  // one strongest top-level provider-vs-provider page. Every other /compare
  // page and every other /tmates-vs-* page stays noindex. ---
  { path: '/compare/trimrx-vs-eden-health', changeFrequency: 'weekly', priority: 0.55 },
  { path: '/compare/medvi-vs-ivim-health',  changeFrequency: 'weekly', priority: 0.55 },
  { path: '/compare/skinnyrx-vs-medvi',     changeFrequency: 'weekly', priority: 0.55 },
  { path: '/compare/medvi-vs-eden-health',  changeFrequency: 'weekly', priority: 0.55 },
  { path: '/tmates-vs-embody',              changeFrequency: 'weekly', priority: 0.55 },
];

export const GLP1_INDEX_PATHS = GLP1_INDEX_ROUTES.map((route) => route.path);

const indexPathSet = new Set<string>(GLP1_INDEX_PATHS);

/** Existing GLP-1 pages stay available during cleanup, but default to noindex. */
const knownGlp1PathSet = new Set<string>(
  allPageRoutes.map((route) => (route.path === '/glp1-home' ? '/' : route.path))
);

for (const path of GLP1_INDEX_PATHS) knownGlp1PathSet.add(path);

/** Canonical aliases and obvious duplicate routes. */
const canonicalRedirects: Readonly<Record<string, string>> = {
  '/glp1-home': '/',
  '/medical-disclaimer': '/disclaimer',
  '/privacy-policy': '/privacy',
  '/terms-of-service': '/terms',
};

/**
 * Measured 301s (issued as 308 by the middleware, same as every other
 * redirect this registry returns) for pages consolidated during the 2026-09-09
 * recovery. Consulted before the /compare and index/noindex checks below.
 * Both sides of every entry must be known routes (index or noindex) so the
 * target actually renders — see the comment on each line.
 */
export const GLP1_REDIRECTS: Readonly<Record<string, string>> = {
  // /best/telemedicine-mounjaro and -zepbound are 65-76% duplicate content of
  // their -ozempic and -wegovy siblings (dynamic /best/[medication] route;
  // both targets exist and stay noindex per the "no /best/telemedicine-*" rule).
  '/best/telemedicine-mounjaro': '/best/telemedicine-ozempic',
  '/best/telemedicine-zepbound': '/best/telemedicine-wegovy',
  // Consolidate the duplicate microdose/microdosing spelling onto the
  // canonical page (static route, stays noindex — dosing/microdosing cluster).
  '/microdose-tirzepatide': '/microdosing-tirzepatide',
  // Consolidate the duplicate "cheapest compounded" phrasing onto the money
  // page that made the indexed content spine.
  '/cheapest-compounded-tirzepatide': '/best-compounded-tirzepatide',
};

/**
 * GLP-1 static provider-vs-provider folders that actually exist under
 * app/compare/ (excludes app/compare/[slug] — deleted 2026-09-09 — and the
 * SecureHomeGear camera comparisons that share the /compare prefix on other
 * hosts: arlo-vs-ring, canary-vs-ring, eufy-vs-arlo, eufy-vs-ring,
 * reolink-vs-eufy, ring-vs-blink, wyze-vs-ring). Hardcoded against disk
 * reality rather than filtered from glp1-page-routes.ts so this list cannot
 * silently drift from what Next.js can actually render — the exact failure
 * mode the dynamic-template deletion created upstream.
 */
export const GLP1_RETAINED_COMPARISON_PATHS: readonly string[] = [
  '/compare/directmeds-vs-gobymeds',
  '/compare/directmeds-vs-skinnyrx',
  '/compare/elevate-health-vs-eden-health',
  '/compare/elevate-health-vs-skinnyrx',
  '/compare/gobymeds-vs-ivim-health',
  '/compare/gobymeds-vs-medvi',
  '/compare/gobymeds-vs-orderlymeds',
  '/compare/ivim-health-vs-eden-health',
  '/compare/ivim-health-vs-trimrx',
  '/compare/medvi-vs-eden-health',
  '/compare/medvi-vs-ivim-health',
  '/compare/orderlymeds-vs-medvi',
  '/compare/skinnyrx-vs-eden-health',
  '/compare/skinnyrx-vs-ivim-health',
  '/compare/skinnyrx-vs-medvi',
  '/compare/skinnyrx-vs-trimrx',
  '/compare/trimrx-vs-eden-health',
  '/compare/trimrx-vs-medvi',
];

export const GLP1_RETAINED_COMPARISON_SLUGS = GLP1_RETAINED_COMPARISON_PATHS.map(
  (path) => path.slice('/compare/'.length)
);

const retainedComparisonPathSet = new Set(GLP1_RETAINED_COMPARISON_PATHS);

type ComparisonParts = { a: string; b: string };

export function parseGlp1ComparisonSlug(slug: string): ComparisonParts | null {
  const parts = slug.split('-vs-');
  if (parts.length !== 2 || !parts[0] || !parts[1] || parts[0] === parts[1]) {
    return null;
  }
  return { a: parts[0], b: parts[1] };
}

const reverseComparisonRedirects = new Map<string, string>();

for (const canonicalPath of GLP1_RETAINED_COMPARISON_PATHS) {
  const slug = canonicalPath.slice('/compare/'.length);
  const parsed = parseGlp1ComparisonSlug(slug);
  if (!parsed) continue;

  const reversePath = `/compare/${parsed.b}-vs-${parsed.a}`;
  if (!retainedComparisonPathSet.has(reversePath)) {
    reverseComparisonRedirects.set(reversePath, canonicalPath);
  }
}

export type Glp1ComparisonResolution =
  | { disposition: 'retained'; path: string; slug: string; a: string; b: string }
  | { disposition: 'redirect'; location: string }
  | { disposition: 'not-found' };

export function resolveGlp1ComparisonSlug(slug: string): Glp1ComparisonResolution {
  const parsed = parseGlp1ComparisonSlug(slug);
  if (!parsed) return { disposition: 'not-found' };

  const path = `/compare/${slug}`;
  if (retainedComparisonPathSet.has(path)) {
    return { disposition: 'retained', path, slug, ...parsed };
  }

  const canonicalPath = reverseComparisonRedirects.get(path);
  if (canonicalPath) return { disposition: 'redirect', location: canonicalPath };

  return { disposition: 'not-found' };
}

export type Glp1RouteDisposition =
  | { disposition: 'index' }
  | { disposition: 'noindex' }
  | { disposition: 'redirect'; location: string }
  | { disposition: 'not-found' };

export function normalizeGlp1Pathname(pathname: string): string {
  if (!pathname || pathname === '/') return '/';
  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return withLeadingSlash.replace(/\/+$/, '') || '/';
}

export function getGlp1RouteDisposition(pathname: string): Glp1RouteDisposition {
  const normalized = normalizeGlp1Pathname(pathname);

  // Collapse trailing-slash variants onto the registry's canonical URL.
  if (pathname !== normalized) {
    return { disposition: 'redirect', location: normalized };
  }

  const canonicalLocation = canonicalRedirects[normalized];
  if (canonicalLocation) {
    return { disposition: 'redirect', location: canonicalLocation };
  }

  const measuredRedirect = GLP1_REDIRECTS[normalized];
  if (measuredRedirect) {
    return { disposition: 'redirect', location: measuredRedirect };
  }

  if (normalized.startsWith('/compare/')) {
    const comparison = resolveGlp1ComparisonSlug(
      normalized.slice('/compare/'.length)
    );
    if (comparison.disposition === 'redirect') return comparison;
    if (comparison.disposition === 'retained') {
      return indexPathSet.has(normalized)
        ? { disposition: 'index' }
        : { disposition: 'noindex' };
    }
    return { disposition: 'not-found' };
  }

  if (indexPathSet.has(normalized)) return { disposition: 'index' };
  if (knownGlp1PathSet.has(normalized)) return { disposition: 'noindex' };

  // Unknown paths include every CRR, GRH, SHG, and AHB route not explicitly
  // shared above. Returning 404 here is the cross-domain isolation boundary.
  return { disposition: 'not-found' };
}
