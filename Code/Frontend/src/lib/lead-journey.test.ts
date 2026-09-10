import test from 'node:test';
import assert from 'node:assert/strict';
import { publicJourneyPath, recordJourneyPage } from './lead-journey.ts';

function browser(path = '/blog/pge-vs-sce-vs-sdge-rates-compared') {
  const data = new Map<string, string>();
  Object.assign(globalThis, { window: {
    location: { hostname: 'ratereliefca.com', pathname: path },
    sessionStorage: { getItem: (key: string) => data.get(key) || null, setItem: (key: string, value: string) => { data.set(key, value); } },
  } });
  return data;
}

test('captures article to guide to intake and freezes the submitted history', () => {
  browser(); recordJourneyPage(); recordJourneyPage();
  window.location.pathname = '/blog/pge-time-of-use-rates-2026'; recordJourneyPage();
  window.location.pathname = '/';
  const sent = recordJourneyPage();
  assert.deepEqual(sent?.pages.map(page => page.path), ['/blog/pge-vs-sce-vs-sdge-rates-compared', '/blog/pge-time-of-use-rates-2026', '/']);
  window.location.pathname = '/contact'; recordJourneyPage();
  assert.equal(sent?.pages.length, 3);
});

test('preserves entry and recent visits when a long journey is capped', () => {
  browser('/blog/entry'); recordJourneyPage();
  for (let i = 0; i < 35; i++) { window.location.pathname = `/blog/page-${i}`; recordJourneyPage(); }
  const result = recordJourneyPage();
  assert.equal(result?.pages.length, 30);
  assert.equal(result?.pages[0].path, '/blog/entry');
  assert.equal(result?.pages.at(-1)?.path, '/blog/page-34');
  assert.equal(result?.truncated, true);
});

test('strips query/hash data and excludes private or external routes', () => {
  assert.equal(publicJourneyPath('/blog/pge?email=private#form'), '/blog/pge');
  for (const value of ['/dashboard/leads/123', '//outside.com', '/login', '/api/intake', '/blog/person%40mail.com']) assert.equal(publicJourneyPath(value), null);
  browser('/dashboard/referrals'); assert.equal(recordJourneyPage(), null);
  window.location.hostname = 'glp1comparehub.com'; window.location.pathname = '/';
  assert.equal(recordJourneyPage(), null);
});

test('survives corrupted and unavailable session storage', () => {
  const data = browser('/blog/entry');
  data.set('crr_lead_journey_v1', 'not-json');
  assert.ok(recordJourneyPage());
  window.sessionStorage.getItem = () => { throw new Error('blocked'); };
  window.sessionStorage.setItem = () => { throw new Error('blocked'); };
  window.location.pathname = '/';
  assert.equal(recordJourneyPage()?.pages.at(-1)?.path, '/');
});
