/**
 * First-touch page attribution.
 *
 * Why this exists: as of 2026-09-05 a lead's origin page was unrecoverable.
 * `deriveLeadSource()` records only the channel and flattens every same-site
 * referrer to 'direct', and the `leads` table had no landing-page column, so a
 * Bakersfield lead and a Temecula lead were indistinguishable. Google Search
 * Console showed the 159 city pages producing 9% of clicks while 51 blog posts
 * produced 52% — but with no page attribution there was no way to tell which
 * pages produced *revenue*, which is the number that should drive the build order.
 *
 * The wizard currently lives only on the homepage, so a visitor typically lands
 * on /solar-savings/bakersfield and converts on /. We therefore capture the FIRST
 * page of the session and carry it through, rather than reading location at
 * submit time (which would credit every lead to the homepage).
 *
 * Storage is sessionStorage: it survives in-site navigation, dies with the tab,
 * and never leaves the browser except on the lead payload itself.
 */

const KEY = 'crr_first_touch_v1';

export interface FirstTouch {
  landing_page: string;
  landing_city_slug: string | null;
  landing_page_type: string;
  referrer: string | null;
  captured_at: string;
}

/** Classify a path into the layers reported by Search Console. */
export function pageTypeFromPath(path: string): string {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/solar-savings/')) return 'solar-savings';
  if (path.startsWith('/solar-companies/')) return 'solar-companies';
  if (path.startsWith('/commercial-solar')) return 'commercial-solar';
  if (path.startsWith('/solar-installers/')) return 'solar-installers';
  if (path.startsWith('/panel-reviews')) return 'panel-reviews';
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/battery/')) return 'battery';
  return 'other';
}

/**
 * Extract the city slug from a city-page path. Returns null for non-city pages
 * and for the five regional hubs, which are regions rather than cities and would
 * otherwise pollute per-city rollups.
 */
const REGIONAL_HUBS = new Set([
  'orange-county',
  'bay-area',
  'inland-empire',
  'san-diego-county',
  'central-valley',
]);

export function citySlugFromPath(path: string): string | null {
  const m = path.match(/^\/solar-(?:savings|companies)\/([a-z0-9-]+)\/?$/);
  if (!m) return null;
  return REGIONAL_HUBS.has(m[1]) ? null : m[1];
}

/** Read the GA4 client id from the _ga cookie, if GA has set one. */
export function gaClientId(): string | null {
  if (typeof document === 'undefined') return null;
  try {
    const m = document.cookie.match(/(?:^|;\s*)_ga=GA\d\.\d\.(\d+\.\d+)/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

/**
 * Record the first page of this session, if not already recorded.
 * Safe to call on every page view; only the first call writes.
 */
export function captureFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined') return null;
  try {
    const existing = window.sessionStorage.getItem(KEY);
    if (existing) return JSON.parse(existing) as FirstTouch;

    const path = window.location.pathname || '/';
    let referrer: string | null = null;
    if (document.referrer) {
      try {
        const host = new URL(document.referrer).hostname;
        // Only external referrers are meaningful; in-site navigation is noise.
        if (!host.includes(window.location.hostname)) referrer = host;
      } catch {
        /* malformed referrer — ignore */
      }
    }

    const ft: FirstTouch = {
      landing_page: path,
      landing_city_slug: citySlugFromPath(path),
      landing_page_type: pageTypeFromPath(path),
      referrer,
      captured_at: new Date().toISOString(),
    };
    window.sessionStorage.setItem(KEY, JSON.stringify(ft));
    return ft;
  } catch {
    // Private mode / storage disabled — attribution degrades, capture must not break.
    return null;
  }
}

/** Read the stored first touch without writing. */
export function getFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as FirstTouch) : null;
  } catch {
    return null;
  }
}

/** The page the form was actually submitted from. */
export function currentPath(): string | null {
  if (typeof window === 'undefined') return null;
  return window.location.pathname || null;
}
