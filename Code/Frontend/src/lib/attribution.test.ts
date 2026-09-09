import test from 'node:test';
import assert from 'node:assert/strict';
import {
  captureFirstTouch,
  citySlugFromPath,
  isAttributablePage,
  pageTypeFromPath,
} from './attribution.ts';

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
