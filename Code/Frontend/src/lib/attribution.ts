/**
 * CRR first touch, captured on the first page load before a visitor reaches a
 * form (components/FirstTouchCapture.tsx runs it on every CRR page view).
 *
 * v2 (12 Nov 2026, residential lead contract): kept in localStorage so it
 * survives new tabs and return visits (sessionStorage, then memory, when
 * storage is blocked); first touch wins until it is FIRST_TOUCH_TTL_DAYS old.
 * Adds the full first-party `initial_referrer` (app referrers such as
 * android-app://com.google.android.googlequicksearchbox are kept) and a derived
 * `traffic_channel`. A tab still holding a v1 record is upgraded once.
 */
import {
  FIRST_TOUCH_KEY, FIRST_TOUCH_TTL_DAYS, PII_LIKE_RE, UTM_KEYS, deriveTrafficChannel, isTrafficChannel, sanitizeReferrer,
  type TrafficChannel,
} from './lead-contract.ts';

const V1_KEY = 'crr_first_touch_v1';
const TRACKING_KEYS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
export type TrackingParams = Record<typeof TRACKING_KEYS[number], string | null>;

export interface FirstTouch extends TrackingParams {
  landing_page: string;
  landing_city_slug: string | null;
  landing_page_type: string;
  /** Host only, http(s) only (kept for leads.referrer). */
  referrer: string | null;
  /** Full first-touch referrer without query or fragment, or an app referrer. */
  initial_referrer: string | null;
  traffic_channel: TrafficChannel;
  /** 2 for a v2 capture; 1 when upgraded from an older per-tab record. */
  first_touch_version: 1 | 2;
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

function trackingValue(value: unknown, key?: string): string | null {
  const v = typeof value === 'string' ? value.trim().slice(0, 200) || null : null;
  // No personal data in attribution: a utm_* value that looks like an email
  // address or a phone number is dropped. Click ids are kept as sent.
  if (v && key && (UTM_KEYS as readonly string[]).includes(key) && PII_LIKE_RE.test(v)) return null;
  return v;
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

function isExpired(capturedAt: string, now = Date.now()): boolean {
  const at = Date.parse(capturedAt);
  return !Number.isFinite(at) || now - at > FIRST_TOUCH_TTL_DAYS * 86_400_000;
}

/** A stored record (v2, or v1 when upgrading), validated; null when unusable. */
function storedTouch(raw: string, version: 1 | 2): FirstTouch | null {
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value.landing_page !== 'string'
      || !value.landing_page.startsWith('/') || value.landing_page.startsWith('//')
      || typeof value.captured_at !== 'string' || !Number.isFinite(Date.parse(value.captured_at))) return null;
    if (version === 2 && value.v !== 2) return null;
    const path = value.landing_page.split(/[?#]/)[0];
    if (!isAttributablePage(window.location.hostname, path)) return null;
    const tracking = Object.fromEntries(TRACKING_KEYS.map(key => [key, trackingValue(value[key], key)])) as TrackingParams;
    const referrer = typeof value.referrer === 'string' ? externalHost('https://' + value.referrer) : null;
    const initialReferrer = version === 2 ? sanitizeReferrer(value.initial_referrer) : null;
    const derived = deriveTrafficChannel({ ...tracking, initial_referrer: initialReferrer, referrer });
    return {
      ...tracking,
      landing_page: path,
      landing_city_slug: citySlugFromPath(path),
      landing_page_type: pageTypeFromPath(path),
      referrer,
      initial_referrer: initialReferrer,
      traffic_channel: version === 2 && isTrafficChannel(value.traffic_channel) ? value.traffic_channel : derived,
      first_touch_version: version === 2 && value.first_touch_version === 1 ? 1 : version,
      captured_at: value.captured_at,
    };
  } catch {
    return null;
  }
}

type StorageName = 'localStorage' | 'sessionStorage';

function readKey(store: StorageName, key: string): string | null {
  try {
    return window[store].getItem(key);
  } catch {
    return null; // storage blocked
  }
}

function persist(touch: FirstTouch): void {
  const record = JSON.stringify({ v: 2, ...touch });
  for (const store of ['localStorage', 'sessionStorage'] as const) {
    try {
      window[store].setItem(FIRST_TOUCH_KEY, record);
      return;
    } catch {
      // try the next store; memory keeps it for this document either way
    }
  }
}

export function getFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined' || !isAttributablePage(window.location.hostname, window.location.pathname)) return null;
  for (const store of ['localStorage', 'sessionStorage'] as const) {
    const raw = readKey(store, FIRST_TOUCH_KEY);
    const saved = raw ? storedTouch(raw, 2) : null;
    if (saved && !isExpired(saved.captured_at)) {
      memoryTouch = saved;
      return saved;
    }
  }
  if (memoryTouch && !isExpired(memoryTouch.captured_at)) return memoryTouch;
  return null;
}

export function captureFirstTouch(): FirstTouch | null {
  if (typeof window === 'undefined' || !isAttributablePage(window.location.hostname, window.location.pathname)) return null;
  const existing = getFirstTouch();
  if (existing) return existing;

  // A tab that still holds a v1 (per-tab) record: upgrade it once, keeping its
  // landing page and capture time. v1 is left in place (harmless).
  const v1Raw = readKey('sessionStorage', V1_KEY);
  const upgraded = v1Raw ? storedTouch(v1Raw, 1) : null;
  if (upgraded && !isExpired(upgraded.captured_at)) {
    memoryTouch = upgraded;
    persist(upgraded);
    return upgraded;
  }

  const path = window.location.pathname || '/';
  const params = new URLSearchParams(window.location.search);
  const tracking = Object.fromEntries(TRACKING_KEYS.map(key => [key, trackingValue(params.get(key), key)])) as TrackingParams;
  const rawReferrer = typeof document !== 'undefined' ? document.referrer : '';
  const initialReferrer = sanitizeReferrer(rawReferrer);
  const referrer = externalHost(rawReferrer);
  const touch: FirstTouch = {
    ...tracking,
    landing_page: path,
    landing_city_slug: citySlugFromPath(path),
    landing_page_type: pageTypeFromPath(path),
    referrer,
    initial_referrer: initialReferrer,
    traffic_channel: deriveTrafficChannel({ ...tracking, initial_referrer: initialReferrer, referrer }),
    first_touch_version: 2,
    captured_at: new Date().toISOString(),
  };
  memoryTouch = touch;
  persist(touch);
  return touch;
}

/** Test hook: forget the in-memory touch. */
export function resetFirstTouchMemory(): void {
  memoryTouch = null;
}

export function deriveLeadSource(touch: FirstTouch | null): string {
  if (!touch) return 'unknown';
  if (touch.gclid || touch.gbraid || touch.wbraid) return 'google_ads';
  if (touch.msclkid) return 'bing_ads';
  if (touch.utm_source) return touch.utm_source;
  if (touch.fbclid) return 'facebook';
  if (!touch.referrer) return 'direct';
  if (/^(?:www\.)?google\.(?:com|ca|co\.uk|com\.au|de|fr|co\.in)$/.test(touch.referrer)) return 'organic_google';
  return 'referral_' + touch.referrer;
}

/** Observed acquisition, never inferred from a click or an untagged direct visit. */
export function acquisition(touch: FirstTouch | null): { source: string; medium: string } {
  if (!touch) return { source: 'unknown', medium: 'unknown' };
  if (touch.gclid || touch.gbraid || touch.wbraid) return { source: 'google', medium: 'cpc' };
  if (touch.msclkid) return { source: 'bing', medium: 'cpc' };
  if (touch.utm_medium?.toLowerCase() === 'organic') {
    const source = touch.utm_source?.toLowerCase() || 'unknown';
    return {source, medium: ['google','bing','duckduckgo','yahoo'].includes(source) ? 'organic' : source === 'unknown' ? 'unknown' : 'organic_other'};
  }
  if (touch.utm_medium) return { source: touch.utm_source || 'unknown', medium: touch.utm_medium.toLowerCase() };
  if (touch.utm_source || touch.fbclid) return { source: touch.utm_source || 'facebook', medium: 'unknown' };
  const referrer = touch.referrer || '';
  const engines: [RegExp, string][] = [
    [/^(www\.)?google\.(com|ca|co\.uk|com\.au|de|fr|co\.in)$/, 'google'],
    [/^(www\.)?bing\.com$/, 'bing'], [/^(www\.)?duckduckgo\.com$/, 'duckduckgo'],
    [/^(search\.)?yahoo\.com$/, 'yahoo'],
  ];
  const engine = engines.find(([pattern]) => pattern.test(referrer));
  if (engine) return { source: engine[1], medium: 'organic' };
  return referrer ? { source: referrer, medium: 'referral' } : { source: 'direct', medium: 'unknown' };
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
