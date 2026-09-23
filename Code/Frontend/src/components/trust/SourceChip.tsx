import { formatTrustDate } from './trust-links';

// =============================================================================
// SourceChip — "publisher · date" next to a cited figure or in a sources list.
//
// It only restyles a source the markup already carries: the publisher is
// either given or read off the source URL's hostname, and the date is the date
// the page already states it checked that source. Nothing is looked up here.
// =============================================================================

/** "https://www.cpuc.ca.gov/x" -> "cpuc.ca.gov". Returns '' for a bad URL. */
export function sourceHost(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\d?\./, '');
  } catch {
    return '';
  }
}

export interface SourceChipProps {
  /** Short publisher name. Defaults to the hostname of `href`. */
  publisher?: string;
  /** ISO date or display string. */
  date?: string;
  /** Word in front of the date: "checked" when the page states a check date. */
  dateVerb?: string;
  href?: string;
  className?: string;
}

const CHIP =
  'inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-muted px-2 py-0.5 align-middle text-xs font-medium leading-5 text-muted-foreground';

export function SourceChip({ publisher, date, dateVerb = 'checked', href, className = '' }: SourceChipProps) {
  const name = publisher || (href ? sourceHost(href) : '');
  if (!name && !date) return null;
  const body = (
    <>
      {name && <span className="truncate">{name}</span>}
      {name && date && <span aria-hidden="true">·</span>}
      {date && (
        <span className="whitespace-nowrap">
          {dateVerb ? `${dateVerb} ` : ''}
          {formatTrustDate(date, true)}
        </span>
      )}
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${CHIP} transition-colors hover:border-primary/40 hover:text-primary ${className}`}
      >
        {body}
      </a>
    );
  }
  return <span className={`${CHIP} ${className}`}>{body}</span>;
}
