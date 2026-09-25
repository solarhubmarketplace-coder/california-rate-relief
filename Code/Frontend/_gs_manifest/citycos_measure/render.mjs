// Render every /solar-companies and /solar-savings city page from a bundle to static HTML.
import fs from 'node:fs';
import path from 'node:path';
process.env.NEXT_PUBLIC_SUPABASE_URL ||= 'https://example.supabase.co';
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||= 'placeholder';
const [bundle, outDir, only] = process.argv.slice(2);
const React = (await import('react')).default;
const { renderToStaticMarkup } = await import('react-dom/server');
const { createRequire } = await import('node:module'); const m = createRequire(import.meta.url)(path.resolve(bundle));
fs.mkdirSync(outDir, { recursive: true });
const origError = console.error; console.error = () => {};
const jobs = [];
for (const { city } of m.companiesParams()) jobs.push(['solar-companies', city, m.CompaniesPage, m.companiesMeta]);
for (const { city } of m.savingsParams()) jobs.push(['solar-savings', city, m.SavingsPage, m.savingsMeta]);
const meta = {};
let ok = 0, bad = [];
for (const [type, city, Page, Meta] of jobs) {
  if (only && !`${type}/${city}`.startsWith(only)) continue;
  const params = Promise.resolve({ city });
  try {
    const el = await Page({ params });
    const html = renderToStaticMarkup(el);
    fs.writeFileSync(path.join(outDir, `${type}__${city}.html`), html);
    const md = await Meta({ params: Promise.resolve({ city }) });
    meta[`/${type}/${city}`] = { title: md?.title ?? null, description: md?.description ?? null };
    ok++;
  } catch (e) { bad.push(`${type}/${city}: ${e.message}`); }
}
fs.writeFileSync(path.join(outDir, '_meta.json'), JSON.stringify(meta, null, 1));
console.error = origError;
console.log('rendered', ok, 'failed', bad.length); if (bad.length) console.log(bad.slice(0, 10).join('\n'));
