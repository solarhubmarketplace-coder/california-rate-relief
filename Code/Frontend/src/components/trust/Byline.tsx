import Link from 'next/link';
import type { ReactNode } from 'react';
import { TRUST_LINKS, formatTrustDate, isIsoDate } from './trust-links';

// =============================================================================
// Byline — author, the page's own modified date, a source count, and links to
// Methodology and How we make money. Goes directly under the H1, above the
// first paragraph.
//
// Only the author's name and the link to the existing author page are shown.
// No title, credential or background is added here: nothing beyond the name is
// established for the byline, and the author page says what it says.
//
// The date is whatever the page already declares as its dateModified (or its
// sources-checked date); this component never invents one. The source count is
// the length of the page's own sources list, and is omitted when unknown.
// =============================================================================

export interface BylineProps {
  /** ISO date the page already uses as dateModified. */
  updated?: string;
  /** Label in front of the date. */
  dateLabel?: string;
  author?: string;
  authorHref?: string;
  /** Number of entries in the page's sources list. */
  sourceCount?: number;
  /** Anchor of the page's sources list. */
  sourcesHref?: string;
  /** Extra meta items (location, reading time) rendered after the date. */
  children?: ReactNode;
  className?: string;
}

function Dot() {
  return (
    <span aria-hidden="true" className="text-border">
      ·
    </span>
  );
}

export function Byline({
  updated,
  dateLabel = 'Updated',
  author = 'Chad Simpson',
  authorHref = TRUST_LINKS.author.href,
  sourceCount,
  sourcesHref = '#sources',
  children,
  className = '',
}: BylineProps) {
  return (
    <div
      className={`mt-4 flex flex-col gap-1 border-y border-border py-3 text-sm ${className}`}
      data-byline=""
    >
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
        <span>
          By{' '}
          <Link
            href={authorHref}
            rel="author"
            className="font-semibold text-foreground underline-offset-2 hover:text-primary hover:underline"
          >
            {author}
          </Link>
        </span>
        {updated && (
          <>
            <Dot />
            <span>
              {dateLabel}{' '}
              {isIsoDate(updated) ? (
                <time dateTime={updated.slice(0, 10)} className="font-medium text-foreground">
                  {formatTrustDate(updated)}
                </time>
              ) : (
                <span className="font-medium text-foreground">{updated}</span>
              )}
            </span>
          </>
        )}
        {typeof sourceCount === 'number' && sourceCount > 0 && (
          <>
            <Dot />
            <a href={sourcesHref} className="text-primary underline underline-offset-2 hover:no-underline">
              {sourceCount} {sourceCount === 1 ? 'source' : 'sources'} cited
            </a>
          </>
        )}
        {children && (
          <>
            <Dot />
            {children}
          </>
        )}
      </p>
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
        <Link
          href={TRUST_LINKS.methodology.href}
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          Methodology
        </Link>
        <Dot />
        <Link
          href={TRUST_LINKS.howWeMakeMoney.href}
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          How we make money
        </Link>
        <Dot />
        <Link
          href={TRUST_LINKS.editorialPolicy.href}
          className="text-primary underline underline-offset-2 hover:no-underline"
        >
          Editorial policy
        </Link>
      </p>
    </div>
  );
}
