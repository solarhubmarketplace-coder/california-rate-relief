import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

// =============================================================================
// HOST-AWARE ROBOTS.TXT
// =============================================================================
// Each domain references its own sitemap so Google Search Console can
// programmatically discover that domain's URLs. Without this, all four
// domains pointed crawlers at CRR's sitemap.
// =============================================================================

const DOMAIN_BASE: Record<string, string> = {
  ratereliefca: 'https://ratereliefca.com',
  greenreviewshub: 'https://greenreviewshub.com',
  securehomegear: 'https://securehomegear.com',
  athomebiohacking: 'https://athomebiohacking.com',
  glp1comparehub: 'https://www.glp1comparehub.com', // canonical host = www (apex 308-redirects to it); keep in sync with sitemap.ts + per-page canonicals
};

function detectDomainKey(host: string): string {
  const h = host.toLowerCase();
  if (h.includes('glp1comparehub')) return 'glp1comparehub';
  if (h.includes('greenreviewshub')) return 'greenreviewshub';
  if (h.includes('securehomegear')) return 'securehomegear';
  if (h.includes('athomebiohacking')) return 'athomebiohacking';
  return 'ratereliefca';
}

// -----------------------------------------------------------------------------
// PRIVATE ROUTES — shared by every rule below
// -----------------------------------------------------------------------------
// One list, referenced by the '*' rule and by every named-crawler rule, so an
// explicit opt-in for a crawler can never accidentally widen its access to the
// dashboard, the login page, or the API.
// -----------------------------------------------------------------------------

const DISALLOWED_PATHS = [
  '/dashboard/',
  '/login',
  '/api/',
  '/testing-guide',
];

// -----------------------------------------------------------------------------
// EXPLICITLY ALLOWED AI + SEARCH CRAWLERS  (added 2026-09-10)
// -----------------------------------------------------------------------------
// WHY THESE ARE LISTED BY NAME, given that `User-agent: *` already allows '/':
//
//   1. An explicit `Allow` is the documented opt-in for the AI-training and
//      AI-search agents. Several operators (OpenAI, Anthropic, Perplexity,
//      Google-Extended, Applebot-Extended) treat a named record as the signal
//      of intent; a bare wildcard is ambiguous and some tooling and CDN bot-
//      management rulesets default those agents to BLOCKED.
//   2. Some CDN / WAF "AI bot" presets and some robots.txt generators inject a
//      default deny for these agents. A named Allow record here is the record
//      of the site owner's actual intent and survives that kind of default.
//
// CONSEQUENCE OF EDITING THIS LIST — READ BEFORE YOU TOUCH IT:
//   Removing a name from this array opts ratereliefca.com (and the other four
//   hosts served by this codebase) OUT of that crawler. For the AI-search
//   agents that means the site stops being eligible for citation in that
//   product's answers. CRR's measured #1 positions are AI Overview citations,
//   so an accidental deletion here is a direct traffic loss, not a cosmetic
//   change. Add names freely; delete one only deliberately.
//
// Each agent receives allow '/' plus the same DISALLOWED_PATHS as '*', so
// private routes stay private no matter which agent is reading.
// -----------------------------------------------------------------------------

const ALLOWED_CRAWLERS = [
  // OpenAI — search index, training crawler, and on-demand user fetches
  'OAI-SearchBot',
  'GPTBot',
  'ChatGPT-User',
  // Perplexity — index crawler and on-demand user fetches
  'PerplexityBot',
  'Perplexity-User',
  // Anthropic — training crawler, search index, and on-demand user fetches
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Google — Gemini / AI Overviews grounding (separate token from Googlebot,
  // which is covered by '*'; Google-Extended controls AI use, not indexing)
  'Google-Extended',
  // Microsoft / Bing — also the crawler behind Copilot and the IndexNow index
  'Bingbot',
  // Apple — web index and the separate AI-training opt-in token
  'Applebot',
  'Applebot-Extended',
  // Common Crawl — the corpus many downstream models and tools are built on
  'CCBot',
  // Amazon
  'Amazonbot',
  // Meta AI
  'meta-externalagent',
  // ByteDance
  'Bytespider',
  // DuckDuckGo
  'DuckDuckBot',
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const hdrs = await headers();
  const host = hdrs.get('x-forwarded-host') || hdrs.get('host') || 'ratereliefca.com';
  const base = DOMAIN_BASE[detectDomainKey(host)];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...DISALLOWED_PATHS],
      },
      ...ALLOWED_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: [...DISALLOWED_PATHS],
      })),
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
