// Script to submit URLs directly to IndexNow (Bing, Yandex, Seznam, Naver)
// Usage:
//   node scripts/indexnow-direct.mjs                  # dry-run against live sitemap
//   node scripts/indexnow-direct.mjs --submit         # live submission (run after deploy)
//   node scripts/indexnow-direct.mjs --since 2026-09-10
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

async function main() {
  const argv = process.argv.slice(2);
  const hasFlag = (f) => argv.includes(f);
  const getArg = (f, fallback) => {
    const idx = argv.indexOf(f);
    return idx !== -1 && argv[idx + 1] ? argv[idx + 1] : fallback;
  };

  const host = getArg('--host', 'ratereliefca.com');
  const sitemapUrl = getArg('--sitemap', `https://${host}/sitemap.xml`);
  const since = getArg('--since', null);
  const liveSubmit = hasFlag('--submit') || hasFlag('--live');

  // Discover key from public/*.txt
  const publicDir = path.resolve('public');
  const keyFiles = fs.readdirSync(publicDir).filter(f => /^[a-fA-F0-9]{8,128}\.txt$/.test(f));
  if (keyFiles.length === 0) {
    console.error('[indexnow] Error: No hex key file found in public/');
    process.exitCode = 1;
    return;
  }

  const keyFileName = keyFiles[0];
  const key = fs.readFileSync(path.join(publicDir, keyFileName), 'utf8').trim();
  const keyLocation = `https://${host}/${keyFileName}`;

  console.log(`[indexnow] Key: ${key}`);
  console.log(`[indexnow] Key Location: ${keyLocation}`);
  console.log(`[indexnow] Fetching sitemap from: ${sitemapUrl}...`);

  let xml = '';
  try {
    const res = await fetch(sitemapUrl, { headers: { 'User-Agent': 'IndexNow-Ping/1.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    xml = await res.text();
  } catch (err) {
    console.error(`[indexnow] Failed to fetch sitemap: ${err.message}`);
    process.exitCode = 1;
    return;
  }

  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(m => {
    const loc = m[1].match(/<loc>\s*([\s\S]*?)\s*<\/loc>/);
    const lastmod = m[1].match(/<lastmod>\s*([\s\S]*?)\s*<\/lastmod>/);
    return {
      url: loc ? loc[1].trim() : null,
      lastmod: lastmod ? lastmod[1].trim() : null,
    };
  }).filter(e => e.url && e.url.includes(host));

  console.log(`[indexnow] Found ${entries.length} URLs for ${host} in sitemap.`);

  let filtered = entries;
  if (since) {
    const cutoff = new Date(since);
    filtered = entries.filter(e => e.lastmod && new Date(e.lastmod) >= cutoff);
    console.log(`[indexnow] Filtered to ${filtered.length} URLs with lastmod >= ${since}`);
  }

  const urlList = filtered.map(e => e.url);

  console.log(`\n[indexnow] URLs prepared for submission (${urlList.length} total):`);
  for (let i = 0; i < Math.min(25, urlList.length); i++) {
    console.log(`  - ${urlList[i]} (lastmod: ${filtered[i].lastmod || 'none'})`);
  }
  if (urlList.length > 25) {
    console.log(`  ... and ${urlList.length - 25} more URLs`);
  }

  const payload = {
    host,
    key,
    keyLocation,
    urlList,
  };

  if (!liveSubmit) {
    console.log(`\n[indexnow] DRY RUN: No live submission sent to api.indexnow.org.`);
    console.log(`[indexnow] Key file check: public/${keyFileName} is ready.`);
    console.log(`[indexnow] To execute live submission post-deploy, run:`);
    console.log(`  node scripts/indexnow-direct.mjs --submit`);
    return;
  }

  console.log(`\n[indexnow] Submitting ${urlList.length} URLs to https://api.indexnow.org/indexnow ...`);
  const submitRes = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  console.log(`[indexnow] Response: HTTP ${submitRes.status} ${submitRes.statusText}`);
  const text = await submitRes.text();
  if (text) console.log(`[indexnow] Response body: ${text}`);

  if (submitRes.status === 200 || submitRes.status === 202) {
    console.log(`[indexnow] Submission succeeded!`);
  } else {
    console.error(`[indexnow] Submission returned non-success status: ${submitRes.status}`);
    process.exitCode = 1;
  }
}

await main();
