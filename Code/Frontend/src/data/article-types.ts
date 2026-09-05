/**
 * Shared shape for data-driven long-form pages.
 *
 * Why data-driven rather than hand-written TSX: the existing hand-built city
 * templates render 71-81% identical copy across pages, which is what put the
 * /solar-companies layer at position 37.4 in Search Console. A single record
 * type plus one renderer makes the unique-content budget of every page
 * measurable and lets scripts/qc-gate.mjs mechanically block a page that is too
 * thin or too similar to its siblings before it can ship.
 *
 * Every numeric claim on these pages must carry a source in `sources`, with an
 * as-of date, because rates and incentive programs move quarterly.
 */

export interface ArticleStat {
  label: string;
  value: string;
  note: string;
}

export interface ArticleSection {
  heading: string;
  /** Plain text. Blank line separates paragraphs. No markdown. */
  body: string;
}

export interface ArticleTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleSource {
  name: string;
  url: string;
  /** What claim on the page this source backs. */
  supports: string;
}

export type ArticleCluster =
  | 'commercial'
  | 'battery'
  | 'installer'
  | 'problems';

export interface ArticlePage {
  slug: string;
  cluster: ArticleCluster;

  // SEO
  metaTitle: string;
  metaDescription: string;
  h1: string;

  // Body
  intro: string;
  keyStats: ArticleStat[];
  sections: ArticleSection[];
  dataTable: ArticleTable;
  /** Who this is a bad idea for. The brand's credibility depends on this being real. */
  whenThisIsWrong: string;
  faqs: ArticleFAQ[];
  bottomLine: string;

  sources: ArticleSource[];

  /** ISO date the content was last verified against its sources. */
  reviewedAt: string;
}

/** Word count of the prose that is unique to a page (excludes shared chrome). */
export function articleWordCount(p: ArticlePage): number {
  const text = [
    p.intro,
    ...p.sections.map((s) => `${s.heading} ${s.body}`),
    p.whenThisIsWrong,
    ...p.faqs.map((f) => `${f.question} ${f.answer}`),
    p.bottomLine,
  ].join(' ');
  return text.split(/\s+/).filter(Boolean).length;
}
