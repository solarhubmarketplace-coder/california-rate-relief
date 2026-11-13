import test from 'node:test';
import assert from 'node:assert/strict';
import {
  captureFirstTouch,
  citySlugFromPath,
  isAttributablePage,
  pageTypeFromPath,
  resetFirstTouchMemory,
} from './attribution.ts';
import { FIRST_TOUCH_KEY, FIRST_TOUCH_TTL_DAYS } from './lead-contract.ts';

test('route classification keeps priority cohorts distinct', () => {
  assert.equal(pageTypeFromPath('/blog/rates'), 'blog');
  assert.equal(pageTypeFromPath('/commercial-solar/warehouse-solar-california'), 'commercial-solar');
  assert.equal(citySlugFromPath('/solar-savings/temecula'), 'temecula');
  assert.equal(citySlugFromPath('/solar-savings/bay-area'), null);
  assert.equal(isAttributablePage('ratereliefca.com', '/dashboard/leads'), false);
});

test('first touch retains the landing page and campaign across navigation', () => {
  let saved: string | null = null;
  const sessionStorage = {
    getItem: () => saved,
    setItem: (_key: string, value: string) => { saved = value; },
  };
  Object.assign(globalThis, {
    window: {
      location: {
        hostname: 'ratereliefca.com',
        pathname: '/blog/pge-vs-sce-vs-sdge-rates-compared',
        search: '?utm_source=google&utm_campaign=utility-rates',
      },
      sessionStorage,
    },
    document: { referrer: 'https://www.google.com/search?q=california+rates' },
  });

  const first = captureFirstTouch();
  assert.equal(first?.landing_page, '/blog/pge-vs-sce-vs-sdge-rates-compared');
  assert.equal(first?.utm_source, 'google');
  assert.equal(first?.referrer, 'www.google.com');

  globalThis.window.location.pathname = '/';
  globalThis.window.location.search = '';
  const afterNavigation = captureFirstTouch();
  assert.equal(afterNavigation?.landing_page, '/blog/pge-vs-sce-vs-sdge-rates-compared');
  assert.equal(afterNavigation?.utm_campaign, 'utility-rates');
});

// ---------------------------------------------------------------------------
// v2 first touch (residential lead contract, 12 Nov 2026)
// ---------------------------------------------------------------------------
function memoryStore() {
  const data = new Map<string, string>();
  return {
    data,
    getItem: (key: string) => (data.has(key) ? data.get(key)! : null),
    setItem: (key: string, value: string) => { data.set(key, value); },
  };
}

const blocked = {
  getItem: () => { throw new Error('blocked'); },
  setItem: () => { throw new Error('blocked'); },
};

function browser(opts: { path: string; search?: string; referrer?: string; local?: unknown; session?: unknown }) {
  resetFirstTouchMemory();
  Object.assign(globalThis, {
    window: {
      location: { hostname: 'ratereliefca.com', pathname: opts.path, search: opts.search ?? '' },
      localStorage: opts.local ?? memoryStore(),
      sessionStorage: opts.session ?? memoryStore(),
    },
    document: { referrer: opts.referrer ?? '' },
  });
}

test('v2 is written to localStorage on the first load and not overwritten later', () => {
  const local = memoryStore();
  browser({ path: '/blog/why-is-my-sce-bill-so-high', referrer: 'https://www.google.com/search?q=sce+bill', local });
  const first = captureFirstTouch();
  assert.equal(first?.traffic_channel, 'organic_google');
  assert.equal(first?.initial_referrer, 'https://www.google.com/search');
  assert.equal(first?.first_touch_version, 2);
  const stored = JSON.parse(local.data.get(FIRST_TOUCH_KEY)!);
  assert.equal(stored.v, 2);
  assert.equal(stored.landing_page, '/blog/why-is-my-sce-bill-so-high');

  // A later visit (new tab, same browser) from ChatGPT does not replace it.
  browser({ path: '/', referrer: 'https://chatgpt.com/', local });
  const later = captureFirstTouch();
  assert.equal(later?.landing_page, '/blog/why-is-my-sce-bill-so-high');
  assert.equal(later?.traffic_channel, 'organic_google');
});

test('a record older than the TTL is replaced by a fresh capture', () => {
  const local = memoryStore();
  const old = new Date(Date.now() - (FIRST_TOUCH_TTL_DAYS + 1) * 86_400_000).toISOString();
  local.setItem(FIRST_TOUCH_KEY, JSON.stringify({ v: 2, landing_page: '/blog/old', captured_at: old, traffic_channel: 'direct' }));
  browser({ path: '/solar-savings/temecula', referrer: 'https://www.bing.com/', local });
  const touch = captureFirstTouch();
  assert.equal(touch?.landing_page, '/solar-savings/temecula');
  assert.equal(touch?.traffic_channel, 'organic_bing_yahoo_ddg');
});

test('a v1 per-tab record is upgraded once into v2', () => {
  const local = memoryStore();
  const session = memoryStore();
  const capturedAt = new Date(Date.now() - 3_600_000).toISOString();
  session.setItem('crr_first_touch_v1', JSON.stringify({ landing_page: '/blog/pge', referrer: 'www.google.com', utm_source: null, captured_at: capturedAt }));
  browser({ path: '/', referrer: '', local, session });
  const touch = captureFirstTouch();
  assert.equal(touch?.landing_page, '/blog/pge');
  assert.equal(touch?.captured_at, capturedAt);
  assert.equal(touch?.initial_referrer, null);
  assert.equal(touch?.traffic_channel, 'organic_google');
  assert.equal(touch?.first_touch_version, 1);
  assert.equal(JSON.parse(local.data.get(FIRST_TOUCH_KEY)!).first_touch_version, 1);
  assert.ok(session.data.has('crr_first_touch_v1'));
});

test('blocked storage keeps the touch in memory', () => {
  browser({ path: '/blog/net-billing', referrer: 'https://www.perplexity.ai/', local: blocked, session: blocked });
  const first = captureFirstTouch();
  assert.equal(first?.traffic_channel, 'ai_referral');
  globalThis.window.location.pathname = '/';
  assert.equal(captureFirstTouch()?.landing_page, '/blog/net-billing');
});

test('blocked localStorage falls back to sessionStorage', () => {
  const session = memoryStore();
  browser({ path: '/blog/x', local: blocked, session });
  captureFirstTouch();
  assert.ok(session.data.has(FIRST_TOUCH_KEY));
});

test('an Android Google app referrer is kept and classed organic_google', () => {
  browser({ path: '/blog/sce-rates', referrer: 'android-app://com.google.android.googlequicksearchbox/' });
  const touch = captureFirstTouch();
  assert.equal(touch?.initial_referrer, 'android-app://com.google.android.googlequicksearchbox');
  assert.equal(touch?.referrer, null);
  assert.equal(touch?.traffic_channel, 'organic_google');
});

test('paid click ids win, and a direct visit is direct', () => {
  browser({ path: '/', search: '?gclid=abc', referrer: 'https://www.google.com/' });
  assert.equal(captureFirstTouch()?.traffic_channel, 'paid');
  browser({ path: '/' });
  assert.equal(captureFirstTouch()?.traffic_channel, 'direct');
});
