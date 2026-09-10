import type { ReactElement } from 'react';

// =============================================================================
// FaqJsonLd — schema.org FAQPage for pages that already answer questions
// =============================================================================
// Opt-in, per page. Only pass Q&A text that is ALREADY VISIBLE on the page —
// schema.org FAQPage that does not match on-page content is a structured-data
// violation, and the whole point is to mark up the answers a reader can see.
//
// Not a client component: no hooks, no host dependency. It renders wherever the
// page puts it, on any host, because the caller supplies the content.
//
// Usage:
//   <FaqJsonLd items={[{ question: 'When did NEM 3.0 start?', answer: '...' }]} />
// =============================================================================

export interface FaqJsonLdItem {
  /** The question exactly as it reads on the page. */
  question: string;
  /** The answer as it reads on the page. Inline HTML is stripped. */
  answer: string;
}

export interface FaqJsonLdProps {
  items: FaqJsonLdItem[];
}

/**
 * schema.org wants plain text in acceptedAnswer, so tags come out and the
 * handful of entities that show up in this codebase's JSX get decoded.
 * Block-level closers become a space so 'one.</p><p>Two' does not fuse.
 */
function toPlainText(input: string): string {
  return input
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(?:p|div|li|ol|ul|h[1-6]|blockquote)>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;|&ldquo;|&rdquo;/gi, '"')
    .replace(/&#0?39;|&apos;|&lsquo;|&rsquo;/gi, "'")
    .replace(/&mdash;/gi, '—')
    .replace(/&ndash;/gi, '–')
    .replace(/&hellip;/gi, '…')
    .replace(/&deg;/gi, '°')
    .replace(/&cent;/gi, '¢')
    .replace(/&times;/gi, '×')
    .replace(/&middot;/gi, '·')
    // Numeric references last-but-one, then &amp; last, so an escaped '&amp;lt;'
    // is not double-decoded into a live '<'.
    .replace(/&#(\d{2,5});/g, (_m, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/gi, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

/** JSON-LD goes through dangerouslySetInnerHTML; never let a raw '<' through. */
function serialize(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function FaqJsonLd({ items }: FaqJsonLdProps): ReactElement | null {
  if (!items || items.length === 0) return null;

  const entities = items
    .map((item) => ({
      question: toPlainText(item.question || ''),
      answer: toPlainText(item.answer || ''),
    }))
    .filter((item) => item.question.length > 0 && item.answer.length > 0);

  if (entities.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: serialize(data) }}
    />
  );
}
