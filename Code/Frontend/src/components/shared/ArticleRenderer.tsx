import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import type { ArticlePage } from '@/data/article-types';
import { ArticleContents } from './ArticleContents';
// Relative imports on purpose: ArticleRenderer.test.mjs bundles this file with
// esbuild and stubs only next/link and lucide-react.
import { Byline } from '../trust/Byline';
import { KeyFacts } from '../trust/KeyFacts';
import { FaqBlock } from '../trust/FaqBlock';
import { CtaCard, CTA_BUTTON_CLASS } from '../trust/CtaCard';
import { SourceChip } from '../trust/SourceChip';
import { TocRail, RAIL_GRID } from '../trust/TocRail';

/**
 * Renders a data-driven long-form page.
 *
 * Deliberately shares only chrome (layout, CTA, source list) and never body
 * prose, so per-page uniqueness stays high. scripts/qc-gate.mjs measures the
 * unique-word budget and cross-page overlap that this structure protects.
 */

function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p
            key={i}
            className={className ?? 'text-foreground/80 leading-relaxed mb-4'}
          >
            {p}
          </p>
        ))}
    </>
  );
}

export function articleAnchorId(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
}

export function uniqueArticleAnchors(headings: string[]): string[] {
  const used = new Set<string>();
  return headings.map((heading) => {
    const base = articleAnchorId(heading);
    let candidate = base;
    let suffix = 2;
    while (used.has(candidate)) {
      candidate = `${base}-${suffix}`;
      suffix += 1;
    }
    used.add(candidate);
    return candidate;
  });
}

/** Words of body prose on a data-driven page (intro, sections, FAQ, wrap-up). */
export function articleWordCount(page: ArticlePage): number {
  return [
    page.intro,
    ...page.sections.map((section) => `${section.heading} ${section.body}`),
    page.whenThisIsWrong,
    ...page.faqs.map((faq) => `${faq.question} ${faq.answer}`),
    page.bottomLine,
  ]
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

/**
 * Index of the section after which a mid-article block goes: halfway through
 * the sections, never before the first or after the last.
 */
export function midArticleIndex(sectionCount: number): number {
  return sectionCount < 2 ? -1 : Math.ceil(sectionCount / 2) - 1;
}

export function ArticleRenderer({
  page,
  related,
  inquiryHref,
  tools,
  quickCheck,
  midArticle,
  inquiry,
  hubLink,
}: {
  page: ArticlePage;
  related?: { href: string; title: string }[];
  inquiryHref?: string;
  tools?: ReactNode;
  /** Bill-first step (HeroQuickCheck) rendered right after the intro. */
  quickCheck?: ReactNode;
  /** One in-content ask rendered halfway through the sections (long pages). */
  midArticle?: ReactNode;
  /**
   * The page's inquiry form. When given it takes the place of the link-only
   * CtaCard at the end of the article, so the page keeps one closing ask.
   */
  inquiry?: ReactNode;
  /**
   * One sentence linking up to the page's hub, rendered right after the intro
   * (plan 7.4). The JSON bodies are plain text and cannot carry the link.
   */
  hubLink?: ReactNode;
}) {
  const midAfter = midArticle ? midArticleIndex(page.sections.length) : -1;
  const sectionIds = uniqueArticleAnchors(page.sections.map((section) => section.heading))
    .map((id) => `section-${id}`);
  const contents = [
    ...page.sections.map((section, index) => ({ id: sectionIds[index], label: section.heading })),
    ...(page.dataTable.rows.length > 0
      ? [{ id: 'comparison-table', label: page.dataTable.caption }]
      : []),
    ...(page.faqs.length > 0
      ? [{ id: 'frequently-asked-questions', label: 'Frequently asked questions' }]
      : []),
    ...(page.sources.length > 0 ? [{ id: 'sources', label: 'Sources' }] : []),
  ];

  return (
    // Desktop: article column plus a sticky "On this page" rail (22b §3.7).
    // Below lg the rail is not rendered and the inline contents box is shown.
    <div className={`mx-auto max-w-6xl ${RAIL_GRID}`}>
    <article className="min-w-0 max-w-3xl">
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-2 tracking-tight leading-tight">
          {page.h1}
        </h1>
        {/* Byline above the first paragraph. reviewedAt is the date the page
            declares it was last verified; it is also the schema dateModified. */}
        <Byline
          updated={page.reviewedAt}
          dateLabel="Last verified"
          sourceCount={page.sources.length}
          sourcesHref="#sources"
        />
      </header>

      <div className="prose-content">
        <Paragraphs text={page.intro} className="text-lg text-foreground/85 leading-relaxed mb-5" />
        {hubLink && <div className="-mt-2 mb-5">{hubLink}</div>}
      </div>

      {quickCheck}

      <div className="lg:hidden">
        <ArticleContents items={contents} />
      </div>

      {page.keyStats.length > 0 && (
        <KeyFacts
          facts={page.keyStats}
          sourcesHref={page.sources.length > 0 ? '#sources' : undefined}
          className="mb-10"
        />
      )}

      <div className="prose-content">
        {tools}

        {page.sections.map((s, index) => (
          <Fragment key={`${s.heading}-${index}`}>
            <section id={sectionIds[index]} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {s.heading}
              </h2>
              <Paragraphs text={s.body} />
            </section>
            {index === midAfter && midArticle}
          </Fragment>
        ))}

        {page.dataTable.rows.length > 0 && (
          <div id="comparison-table" className="my-10 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {page.dataTable.caption}
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <caption className="sr-only">{page.dataTable.caption}</caption>
                <thead>
                  <tr className="bg-muted/50">
                    {page.dataTable.columns.map((c) => (
                      <th
                        key={c}
                        className="text-left font-semibold text-foreground px-4 py-3 whitespace-nowrap"
                      >
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.dataTable.rows.map((row, i) => (
                    <tr key={i} className="border-t border-border align-top">
                      {row.map((cell, j) => (
                        <td key={j} className="px-4 py-3 text-foreground/80">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="my-10 rounded-xl border border-status-warning/30 bg-status-warning/10 p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
            <AlertTriangle className="h-5 w-5 text-status-warning" />
            When this is the wrong move
          </h2>
          <Paragraphs text={page.whenThisIsWrong} />
        </div>

        {/* FAQPage JSON-LD for these same items is emitted by ArticleRoute,
            so the block renders the visible Q&A only. */}
        <FaqBlock
          items={page.faqs}
          id="frequently-asked-questions"
          schema={false}
          renderAnswer={(answer) => <Paragraphs text={answer} />}
        />

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
          The bottom line
        </h2>
        <Paragraphs text={page.bottomLine} />
      </div>

      {/* The page's one closing ask: the inquiry form when the route passes
          one (2026-09-23), otherwise the link-only card. Card copy, href and
          label logic unchanged; only the frame moved to the shared CtaCard. */}
      {inquiry ?? <CtaCard
        headingAs="h3"
        heading="See what your options actually look like"
        body={
          <p>
            Share your property and project details. California Rate Relief reviews
            inquiries and forwards suitable projects to an independent provider,
            subject to service availability. A submission is not a quote, financing approval or program eligibility decision.
          </p>
        }
      >
        <Link
          href={inquiryHref || (page.cluster === 'commercial' ? '/commercial-assessment' : '/#qualify')}
          className={CTA_BUTTON_CLASS}
        >
          {inquiryHref ? 'Optional solar inquiry' : page.cluster === 'commercial' ? 'Request a Commercial Assessment' : 'Request a Residential Assessment'}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CtaCard>}

      {related && related.length > 0 && (
        <div className="mt-10 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-4">
            Related reading
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="text-primary hover:underline font-medium text-sm"
              >
                {r.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {page.sources.length > 0 && (
        <div id="sources" className="mt-10 scroll-mt-24 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-foreground mb-1">Sources</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Rates and incentive programs change. Each figure above traces to one
            of these.
          </p>
          <ul className="space-y-3 text-sm">
            {page.sources.map((s) => (
              <li key={s.url} className="text-foreground/75">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline font-medium"
                >
                  {s.name}
                </a>{' '}
                {/* publisher · date: the link's own host and the page's stated
                    verification date. */}
                <SourceChip href={s.url} date={page.reviewedAt} dateVerb="verified" />
                <span className="text-muted-foreground"> — {s.supports}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
    <TocRail items={contents} />
    </div>
  );
}

export default ArticleRenderer;
