// Never store arbitrary URLs, query strings, private routes or unbounded events.
function cleanJourney(value) {
  if (value?.version !== 1 || value.scope !== 'browser_tab' || !Array.isArray(value.pages)) return null;
  const pages = value.pages.slice(0, 30).flatMap(page => {
    const path = typeof page?.path === 'string' ? page.path.split(/[?#]/)[0] : '';
    const timestamp = typeof page?.viewed_at === 'string' ? Date.parse(page.viewed_at) : NaN;
    if (!/^\/[a-z0-9/_-]*$/i.test(path) || path.startsWith('//') || path.length > 500 || !Number.isFinite(timestamp)) return [];
    if (/^\/(dashboard|login|reset-password|testing-guide|testing|api|book|register|signup)(\/|$)/i.test(path)) return [];
    return [{ path, viewed_at: new Date(timestamp).toISOString() }];
  });
  return pages.length ? { version: 1, scope: 'browser_tab', pages, truncated: value.truncated === true || value.pages.length > 30 } : null;
}
module.exports = { cleanJourney };
