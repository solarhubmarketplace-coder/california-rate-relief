const fs = require('fs');
const path = require('path');
const contract = require('../src/lib/lead-contract');
const CA_ZIPS = require('../src/data/ca-zip-places');

// Same vectors as Code/Frontend/src/lib/lead-contract.fixtures.ts (DESIGN 1.5).
const STREETS = [
  ['123 Main St', 'ok'], ['123 Stewart Ave', 'ok'], ['88 Floorwood Dr', 'ok'], ['123 Lot St', 'unit_word'],
  ['45 Space Center Blvd', 'unit_word'], ['PO Box 12', 'po_box'], ['P.O. Box 12', 'po_box'], ['P. O. Box 12', 'po_box'],
  ['Post Office Box 77', 'po_box'], ['12 Main St Unit 4', 'unit_question'], ['12 Main St #4', 'unit_question'],
  ['12 Main St Apt 4', 'unit_word'], ['12 Main St APT. 4', 'unit_word'], ['12 Main St, Ste 5', 'unit_word'],
  ['12 Main St Apt4', 'unit_word'], ['12 Main St Unit4', 'unit_question'], ['300 Unity Dr', 'ok'], ['4500 Lotus Ave', 'ok'],
  ['120 Spaceport Way', 'ok'], ['2 Suites Ln', 'ok'], ['500 W Unit Rd', 'unit_question'],
  ['1600 Amphitheatre Pkwy #B', 'unit_question'], ['10 Main St Floor 3', 'unit_word'], ['1 Trailer Park Rd', 'unit_word'],
  ['18 Ste-Marie Ave', 'unit_word'], ['3 Box Canyon Rd', 'ok'], ['Main St', 'street_format'], ['123', 'street_format'],
  ['12-B Oak St', 'ok'], ['1234-1236 Elm St', 'ok'], ['10 Calle Peñasquitos', 'ok'], ['', 'street_required'],
];

const CHANNELS = [
  [{}, 'direct'],
  [{ initial_referrer: 'https://www.google.com/' }, 'organic_google'],
  [{ initial_referrer: 'https://www.google.co.uk/' }, 'organic_google'],
  [{ initial_referrer: 'android-app://com.google.android.googlequicksearchbox/' }, 'organic_google'],
  [{ referrer: 'www.google.com' }, 'organic_google'],
  [{ initial_referrer: 'https://gemini.google.com/app' }, 'ai_referral'],
  [{ initial_referrer: 'https://mail.google.com/' }, 'referral'],
  [{ initial_referrer: 'https://www.bing.com/search' }, 'organic_bing_yahoo_ddg'],
  [{ initial_referrer: 'https://r.search.yahoo.com/' }, 'organic_bing_yahoo_ddg'],
  [{ initial_referrer: 'https://duckduckgo.com/' }, 'organic_bing_yahoo_ddg'],
  [{ initial_referrer: 'https://www.yahoo.com/' }, 'referral'],
  [{ initial_referrer: 'https://chatgpt.com/' }, 'ai_referral'],
  [{ utm_source: 'chatgpt.com' }, 'ai_referral'],
  [{ initial_referrer: 'https://www.perplexity.ai/' }, 'ai_referral'],
  [{ initial_referrer: 'https://copilot.microsoft.com/' }, 'ai_referral'],
  [{ initial_referrer: 'https://claude.ai/' }, 'ai_referral'],
  [{ gclid: 'x', initial_referrer: 'https://www.google.com/' }, 'paid'],
  [{ msclkid: 'x' }, 'paid'],
  [{ fbclid: 'x', initial_referrer: 'https://www.facebook.com/' }, 'paid'],
  [{ utm_medium: 'cpc' }, 'paid'],
  [{ utm_medium: 'paid_social' }, 'paid'],
  [{ utm_medium: 'email' }, 'email'],
  [{ utm_medium: 'Email' }, 'email'],
  [{ initial_referrer: 'https://www.reddit.com/r/solar' }, 'referral'],
  [{ utm_source: 'newsletter' }, 'referral'],
  [{ utm_source: 'google', utm_medium: 'organic' }, 'organic_google'],
  [{ initial_referrer: 'https://ratereliefca.com/blog/x' }, 'direct'],
  [{ initial_referrer: 'https://google.evil.com/' }, 'referral'],
  [{ initial_referrer: 'https://notbing.com/' }, 'referral'],
  [{ initial_referrer: 'android-app://com.slack/' }, 'referral'],
];

describe('residential lead contract (API copy)', () => {
  test.each(STREETS)('classifyStreet(%p) -> %p', (input, expected) => {
    expect(contract.classifyStreet(input)).toBe(expected);
  });

  test.each(CHANNELS)('deriveTrafficChannel(%p) -> %p', (input, expected) => {
    expect(contract.deriveTrafficChannel(input)).toBe(expected);
  });

  test('ZIP set has 2,593 entries and equals the rows in migration 012', () => {
    const sql = fs.readFileSync(path.join(__dirname, '../migrations/012_ca_zip_places.sql'), 'utf8');
    const rows = [...sql.matchAll(/^\s*\('(\d{5})',/gm)].map((m) => m[1]).sort();
    expect(CA_ZIPS.size).toBe(2593);
    expect([...CA_ZIPS].sort()).toEqual(rows);
  });

  test('isCaZip', () => {
    expect(contract.isCaZip('90001')).toBe(true);
    expect(contract.isCaZip('89501')).toBe(false);
    expect(contract.isCaZip('9000')).toBe(false);
    expect(contract.isCaZip(undefined)).toBe(false);
  });

  test('sanitizeReferrer keeps app referrers and strips queries', () => {
    expect(contract.sanitizeReferrer('https://www.google.com/search?q=x')).toBe('https://www.google.com/search');
    expect(contract.sanitizeReferrer('android-app://com.google.android.googlequicksearchbox/')).toBe('android-app://com.google.android.googlequicksearchbox');
    expect(contract.sanitizeReferrer('https://ratereliefca.com/')).toBeNull();
    expect(contract.sanitizeReferrer('javascript:alert(1)')).toBeNull();
  });

  test('composeAddress', () => {
    expect(contract.composeAddress('123 Main St', 'Temecula', '92591')).toBe('123 Main St, Temecula, CA 92591');
  });
});
