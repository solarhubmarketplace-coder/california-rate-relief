import Link from 'next/link';
import type { ReactNode } from 'react';
import { Byline } from '@/components/trust/Byline';

// =============================================================================
// RateGuideParts — the header, answer box and data table shared by the
// utility-rate and electric-bill guides (topical-authority wave, 2026-09-23).
//
// Presentation only. Every figure a guide shows is written in that guide next
// to its source; nothing here supplies a number. The page itself still renders
// PublicLayout, ArticleJsonLd, the source list and the inquiry form, so each
// route carries its own schema, CTA and disclosure.
// =============================================================================

export const guideLink =
  'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Visible breadcrumb, kicker, H1, standfirst and byline. The trail must match
 * the `breadcrumbParent` the page passes to PublicLayout, so the visible crumbs
 * and the BreadcrumbList schema agree.
 */
export function GuideHeader({
  parent,
  current,
  kicker,
  title,
  dek,
  updated,
  sourceCount,
}: {
  parent: Crumb;
  current: string;
  kicker: string;
  title: string;
  dek?: ReactNode;
  updated: string;
  sourceCount: number;
}) {
  return (
    <header className="mb-8">
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={parent.href} className="hover:text-primary">
          {parent.label}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-foreground">{current}</span>
      </nav>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
        {kicker}
      </span>
      <h1 className="mb-4 mt-4 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {dek && <p className="text-lg text-muted-foreground">{dek}</p>}
      <Byline updated={updated} sourceCount={sourceCount} sourcesHref="#sources" />
    </header>
  );
}

/** The short, direct answer a reader came for, set apart from the body. */
export function QuickAnswer({ children, label = 'Short answer' }: { children: ReactNode; label?: string }) {
  return (
    <div className="not-prose my-8 rounded-xl border border-border bg-muted/30 p-5">
      <p className="mb-2 font-semibold text-foreground">{label}</p>
      <div className="space-y-3 leading-relaxed text-foreground/85">{children}</div>
    </div>
  );
}

/** A plain, scrollable data table with a visible caption and a source note. */
export function DataTable({
  caption,
  columns,
  rows,
  note,
}: {
  caption: string;
  columns: string[];
  rows: ReactNode[][];
  note?: ReactNode;
}) {
  return (
    <div className="not-prose my-6">
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="border-b border-border p-3 text-left font-semibold text-foreground">{caption}</caption>
          <thead className="bg-muted">
            <tr>
              {columns.map((c) => (
                <th key={c} scope="col" className="p-3 align-bottom font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-border align-top">
                {row.map((cell, j) =>
                  j === 0 ? (
                    <th key={j} scope="row" className="p-3 font-medium">
                      {cell}
                    </th>
                  ) : (
                    <td key={j} className="p-3 tabular-nums">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  );
}
