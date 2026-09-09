/** CRR first touch in this browser tab, captured before a visitor reaches a form. */
const KEY = 'crr_first_touch_v1';
const TRACKING_KEYS = ['gclid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type TrackingParams = Record<typeof TRACKING_KEYS[number], string | null>;

export interface FirstTouch extends TrackingParams {
  landing_page: string;
  landing_city_slug: string | null;
  landing_page_type: string;
  referrer: string | null;
  captured_at: string;
}

let memoryTouch: FirstTouch | null = null;
const EXCLUDED_PATHS = ['/dashboard', '/login', '/reset-password', '/testing-guide', '/testing', '/api', '/book', '/register', '/signup'];

export function isAttributablePage(hostname: string, pathname: string): boolean {
  const host = hostname.toLowerCase();
  return (host === 'ratereliefca.com' || host === 'www.ratereliefca.com' || host === 'localhost')
    && !EXCLUDED_PATHS.some(path => pathname === path || pathname.startsWith(path + '/'));
}

export function pageTypeFromPath(path: string): string {
  if (path === '/' || path === '') return 'home';
  if (path.startsWith('/solar-savings/')) return 'solar-savings';
  if (path.startsWith('/solar-companies/')) return 'solar-companies';
  if (path === '/commercial-solar' || path.startsWith('/commercial-solar/')) return 'commercial-solar';
  if (path.startsWith('/solar-installers/')) return 'solar-installers';
  if (path === '/panel-reviews' || path.startsWith('/panel-reviews/')) return 'panel-reviews';
  if (path.startsWith('/blog/')) return 'blog';
  if (path.startsWith('/battery/')) return 'battery';
  return 'other';
}

const REGIONAL_HUBS = new Set(['orange-county', 'bay-area', 'inland-empire', 'san-diego-county', 'central-valley']);

export function citySlugFromPath(path: string): string | null {
  const match = path.match(/^\/solar-(?:savings|companies)\/([a-z0-9-]+)\/?$/);
  return match && !REGIONAL_HUBS.has(match[1]) ? match[1] : null;
}

function trackingValue(value: unknown): string | null {
  return typeof value === 'string' ? value.trim().slice(0, 200) || null : null;
}

function externalHost(referrer: string): string | null {
  try {
    const url = new URL(referrer);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    const host = url.hostname.toLowerCase();
    return host === 'ratereliefca.com' || host.endsWith('.ratereliefca.com') ? null : host;
  } catch {
    return null;
  }
}

function storedTouch(raw: string): FirstTouch | null {
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value.landing_page !== 'string'
      || !value.landing_page.startsWith('/') || value.landing_page.startsWith('//')
      || typeof value.captured_at !== 'string' || !Number.isFinite(Date.parse(value.captured_at))) return null;
    const path = value.landing_page.split(/[?#]/)[0];
    if (!isAttributablePage(window.location.hostname, path)) return null;
    return {
      ...Object.fromEntries(TRACKING_KEYS.map(key => [key, trackingValue(value[key])])) as TrackingParams,
      landing_page: path,
      landing_city_slug: citySlugFromPath(path),
      landing_page_type: pageTypeFromPath(path),
      referrer: typeof value.referrer === 'string' ? externalHost('https://' + value.referrer) : null,
      captured_at: value.captured_at,
    };
  } catch {
    return null;
  }
}

export function getFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined' || !isAttributablePage(window.location.hostname, window.location.pathname)) return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    const saved = raw ? storedTouch(raw) : null;
    if (saved) memoryTouch = saved;
  } catch {
    // Storage blocked: retain attribution for this document.
  }
  return memoryTouch;
}

export function captureFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined' || !isAttributablePage(window.location.hostname, window.location.pathname)) return null;
  const existing = getFirstTouch();
  if (existing) return existing;
  const path = window.location.pathname || '/';
  const params = new URLSearchParams(window.location.search);
  const touch: FirstTouch = {
    ...Object.fromEntries(TRACKING_KEYS.map(key => [key, trackingValue(params.get(key))])) as TrackingParams,
    landing_page: path,
    landing_city_slug: citySlugFromPath(path),
    landing_page_type: pageTypeFromPath(path),
    referrer: externalHost(document.referrer),
    captured_at: new Date().toISOString(),
  };
  memoryTouch = touch;
  try {
    window.sessionStorage.setItem(KEY, JSON.stringify(touch));
  } catch {
    // Intake continues without persistent storage.
  }
  return touch;
}

export function deriveLeadSource(touch: FirstTouch | null): string {
  if (!touch) return 'unknown';
  if (touch.gclid) return 'google_ads';
  if (touch.utm_source) return touch.utm_source;
  if (touch.fbclid) return 'facebook';
  if (!touch.referrer) return 'direct';
  if (/^(?:www\.)?google\.(?:com|ca|co\.uk|com\.au|de|fr|co\.in)$/.test(touch.referrer)) return 'organic_google';
  return 'referral_' + touch.referrer;
}

export function gaClientId(): string | null {
  if (typeof document === 'undefined') return null;
  try {
    const match = document.cookie.match(/(?:^|;\s*)_ga=GA\d\.\d\.(\d+\.\d+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export function currentPath(): string | null {
  return typeof window === 'undefined' ? null : window.location.pathname || null;
}
