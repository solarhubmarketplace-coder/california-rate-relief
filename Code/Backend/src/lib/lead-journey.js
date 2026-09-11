// Shared by the journey and standalone attribution paths.
function cleanPublicPath(value) {
  const path = typeof value === 'string' ? value.split(/[?#]/)[0] : '';
  if (!/^\/[a-z0-9/_-]*$/i.test(path) || path.startsWith('//') || path.length > 500) return null;
  if (/^\/(dashboard|login|reset-password|testing-guide|testing|api|book|register|signup)(\/|$)/i.test(path)) return null;
  return path;
}
// Never store arbitrary URLs, query strings, private routes or unbounded events.
function cleanJourney(value) {
  if (value?.version !== 1 || value.scope !== 'browser_tab' || !Array.isArray(value.pages)) return null;
  const pages = value.pages.slice(0, 30).flatMap(page => {
    const path = cleanPublicPath(page?.path);
    const timestamp = typeof page?.viewed_at === 'string' ? Date.parse(page.viewed_at) : NaN;
    if (!path || !Number.isFinite(timestamp)) return [];
    return [{ path, viewed_at: new Date(timestamp).toISOString() }];
  });
  return pages.length ? { version: 1, scope: 'browser_tab', pages, truncated: value.truncated === true || value.pages.length > 30 } : null;
}
module.exports = { cleanJourney, cleanPublicPath };
