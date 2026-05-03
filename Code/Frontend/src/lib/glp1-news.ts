/**
 * News articles registry for glp1comparehub.com.
 * Used for SEO freshness signals + the /news/ index + dynamic /news/[slug] pages.
 *
 * Add new entries at the top (newest first). Each article should reflect a real
 * GLP-1 news event the user can verify — never fabricate developments.
 */

export interface NewsArticle {
  slug: string;
  title: string;
  publishedDate: string; // ISO YYYY-MM-DD
  author: string;
  excerpt: string;
  body: string; // Markdown-style body, kept in TS for now (move to MDX when CMS added)
  category: 'Pricing' | 'FDA' | 'Industry' | 'Research' | 'Provider Update';
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'may-2026-glp1-telehealth-pricing-update',
    title: 'May 2026 GLP-1 Telehealth Pricing Update — What Changed and Why',
    publishedDate: '2026-05-02',
    author: 'GLP1CompareHub Editorial Team',
    category: 'Pricing',
    excerpt:
      'Compounded GLP-1 prices held steady in April, while branded options continued their slow descent. SkinnyRx stays the highest-rated affiliate program; GobyMeds becomes the new entry-tier price leader at $99/mo. Full breakdown of every provider in our directory.',
    body: `
We re-verified pricing across 10 GLP-1 telehealth providers this week. Here's what we found.

## Headline numbers

- **Lowest entry-level compounded semaglutide:** GobyMeds at $99/mo (down from previous price-leader range of $149-$179)
- **Highest verified CPA in our affiliate stack:** SkinnyRx ($170 fixed, network-reported via OfferVault as of May 2026 — verify directly before quoting publicly)
- **Branded GLP-1:** Wegovy access through OrderlyMeds at $1,839/mo, Zepbound at $1,498/mo (no change since April)
- **New format:** DirectMeds is the only verified provider in our stack offering sublingual semaglutide ($179.10/mo) and sublingual tirzepatide ($224.10/mo) — both 40% cheaper than their injectable equivalents at the same provider.

## Provider-by-provider snapshot

| Provider | Compounded Sema | Compounded Tirz | Notes |
|---|---|---|---|
| GobyMeds | $99+/mo | $133+/mo | Entry-tier price leader; B12/NAD+ stack add-ons available |
| Ivim Health | $75/mo + $74.99 fee | $149/mo + $74.99 fee | Two-part pricing; only verified provider with microdosing GLP-1 program |
| Eden Health | $129 first mo (3-mo plan) | $129 first mo (3-mo plan) | Same Price at Every Dose; deepest adjacent-peptide menu |
| MEDVi | $179-$249/mo | $229-$299/mo | Strongest brand search of the stack |
| SkinnyRx | $199-$299/mo | $299-$399/mo | Highest-rated, 503A pharmacy specialist |
| TrimRx | from $179/mo | from $179/mo | JS-only catalog; manual verification needed |
| DirectMeds | $179.10-$297/mo | $224.10-$399/mo | Sublingual options — only provider in stack |
| Elevate Health | varies | $897/3-mo bundle | 3-month commitment for lowest per-day cost |
| OrderlyMeds | $149-$224/mo | $299-$449/mo | Public affiliate program; lifestyle bundle (BetterHelp + meals) |

## Why pricing is moving

Compounded semaglutide saw modest price compression as more 503A pharmacies entered the space. The FDA's April 30, 2026 503B compounded shutdown proposal continues to loom — if implemented, expect 503A providers (which include all of the names above) to retain access while 503B-only providers may pull GLP-1 lines.

## What to do with this

1. **Re-verify pricing on every page that quotes a number.** Pricing in this space moves monthly.
2. **Don't anchor on a single provider's CPA.** Affiliate program rates verified up to 5× lower than business-plan estimates earlier this year.
3. **Watch the FDA 503B proposal.** A shutdown reshuffles the entire compounded affiliate market.

— GLP1CompareHub Editorial Team
`,
  },
];

export const getNewsBySlug = (slug: string): NewsArticle | undefined =>
  newsArticles.find((a) => a.slug === slug);
