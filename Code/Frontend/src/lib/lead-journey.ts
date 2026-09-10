/** A bounded history of public pages in this tab, attached only when intake is sent. */
export interface JourneyPage { path: string; viewed_at: string }
export interface LeadJourney {
  version: 1;
  scope: 'browser_tab';
  pages: JourneyPage[];
  truncated: boolean;
}
const KEY = 'crr_lead_journey_v1';
const LIMIT = 30;
let memory: LeadJourney = { version: 1, scope: 'browser_tab', pages: [], truncated: false };

export function publicJourneyPath(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const path = value.split(/[?#]/)[0];
  if (path.length > 500 || !/^\/[a-z0-9/_-]*$/i.test(path) || path.startsWith('//')) return null;
  if (/^\/(dashboard|login|reset-password|testing-guide|testing|api|book|register|signup)(\/|$)/i.test(path)) return null;
  return path;
}

export function recordJourneyPage(): LeadJourney | null {
  if (typeof window === 'undefined' || !['ratereliefca.com', 'www.ratereliefca.com', 'localhost'].includes(window.location.hostname)) return null;
  const path = publicJourneyPath(window.location.pathname);
  if (!path) return null;
  try {
    const raw = window.sessionStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved?.version === 1 && Array.isArray(saved.pages)) {
        const pages: JourneyPage[] = saved.pages.slice(0, LIMIT).flatMap((page: JourneyPage) => {
          const clean = publicJourneyPath(page?.path);
          return clean && typeof page?.viewed_at === 'string' && Number.isFinite(Date.parse(page.viewed_at))
            ? [{ path: clean, viewed_at: new Date(page.viewed_at).toISOString() }] : [];
        });
        memory = { version: 1, scope: 'browser_tab', pages, truncated: saved.truncated === true || saved.pages.length > LIMIT };
      }
    } else {
      memory = { version: 1, scope: 'browser_tab', pages: [], truncated: false };
    }
  } catch { /* Blocked storage retains the history available in this document. */ }
  if (memory.pages.at(-1)?.path !== path) {
    memory.pages.push({ path, viewed_at: new Date().toISOString() });
    if (memory.pages.length > LIMIT) {
      memory.pages.splice(1, 1); // Keep entry and the most recent 29 pages.
      memory.truncated = true;
    }
  }
  try { window.sessionStorage.setItem(KEY, JSON.stringify(memory)); } catch { /* Intake must still work. */ }
  return { ...memory, pages: memory.pages.map(page => ({ ...page })) };
}
