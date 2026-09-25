// Run: node --experimental-strip-types --test src/data/topic-hubs.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { TOPIC_HUBS } from './topic-hubs.ts';

// 2026-09-24: a spoke removed with its comma left behind ("spokes": [,) made a
// hole in the installer_reviews list. Holes are legal JS and pass tsc, but
// Array.findIndex visits them as undefined, so every page that rendered
// HubSpokeLinks for that hub threw at request time (19 pages returned 500).
test('every hub has a spokes array with no holes and an href on every entry', () => {
  for (const h of TOPIC_HUBS) {
    assert.ok(Array.isArray(h.spokes), h.hub);
    for (let i = 0; i < h.spokes.length; i++) {
      assert.ok(i in h.spokes, `${h.hub}: hole at spokes[${i}]`);
      const s = h.spokes[i];
      assert.ok(s && typeof s.href === 'string' && s.href.startsWith('/'), `${h.hub}: spokes[${i}] has no href`);
      assert.ok(typeof s.label === 'string' && s.label.length > 0, `${h.hub}: spokes[${i}] has no label`);
    }
  }
});
