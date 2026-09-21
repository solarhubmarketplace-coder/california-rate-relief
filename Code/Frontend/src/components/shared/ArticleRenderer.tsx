import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import type { ArticlePage } from '@/data/article-types';
import { ArticleContents } from './ArticleContents';

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

export function ArticleRenderer({
  page,
  related,
  inquiryHref,
  tools,
}: {
  page: ArticlePage;
  related?: { href: string; title: string }[];
  inquiryHref?: string;
  tools?: ReactNode;
}) {
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
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
          {page.h1}
        </h1>
        <p className="text-sm text-muted-foreground">
          Last verified {page.reviewedAt}. Figures carry their sources at the
          foot of this page.{page.sources.length > 0 && (
            <> <a href="#sources" className="text-primary underline underline-offset-2">Review the sources</a>.</>
          )}
        </p>
      </header>

      <div className="prose-content">
        <Paragraphs text={page.intro} className="text-lg text-foreground/85 leading-relaxed mb-5" />
      </div>

      <ArticleContents items={contents} />

      {page.keyStats.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {page.keyStats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="text-2xl font-bold text-primary tabular-nums">
                {s.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mt-1">
                {s.label}
              </div>
              <div className="text-sm text-foreground/70 mt-2 leading-snug">
                {s.note}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="prose-content">
        {tools}

        {page.sections.map((s, index) => (
          <section key={`${s.heading}-${index}`} id={sectionIds[index]} className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
              {s.heading}
            </h2>
            <Paragraphs text={s.body} />
          </section>
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

        <div className="my-10 rounded-xl border border-amber-500/40 bg-amber-500/5 p-6">
          <h2 className="flex items-center gap-2 text-xl font-bold text-foreground mb-3">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            When this is the wrong move
          </h2>
          <Paragraphs text={page.whenThisIsWrong} />
        </div>

        <h2 id="frequently-asked-questions" className="scroll-mt-24 text-2xl font-bold text-foreground mt-10 mb-4">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {page.faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
              <Paragraphs text={f.answer} />
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
          The bottom line
        </h2>
        <Paragraphs text={page.bottomLine} />
      </div>

      <div className="mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
          See what your options actually look like
        </h3>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Share your property and project details. California Rate Relief reviews
          inquiries and forwards suitable projects to an independent provider,
          subject to service availability. No cost to submit and no obligation.
        </p>
        <Link
          href={inquiryHref || (page.cluster === 'commercial' ? '/commercial-assessment' : '/#qualify')}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          {inquiryHref ? 'Optional solar inquiry' : page.cluster === 'commercial' ? 'Request a Commercial Assessment' : 'Request a Residential Assessment'}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

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
          <ul className="space-y-2 text-sm">
            {page.sources.map((s) => (
              <li key={s.url} className="text-foreground/75">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-primary hover:underline font-medium"
                >
                  {s.name}
                </a>
                <span className="text-muted-foreground"> — {s.supports}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default ArticleRenderer;
