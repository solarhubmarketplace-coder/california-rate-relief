import type { ReactNode } from 'react';
import { FaqJsonLd, type FaqJsonLdItem } from '../shared/FaqJsonLd';

// =============================================================================
// FaqBlock — visible questions and answers, plus FAQPage JSON-LD built from the
// same strings, so the markup can never describe text the reader cannot see.
//
// Pass schema={false} where the route already emits FAQPage for these items
// (ArticleRoute does), so a page never carries two FAQPage nodes.
// Renders nothing when there are no items.
// =============================================================================

export interface FaqBlockProps {
  items: FaqJsonLdItem[];
  heading?: string;
  id?: string;
  schema?: boolean;
  /** Renders one answer. Defaults to splitting on blank lines into paragraphs. */
  renderAnswer?: (answer: string) => ReactNode;
  className?: string;
}

function defaultAnswer(answer: string) {
  return answer
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p, i) => (
      <p key={i} className="mb-3 leading-relaxed text-foreground/80 last:mb-0">
        {p}
      </p>
    ));
}

export function FaqBlock({
  items,
  heading = 'Frequently asked questions',
  id = 'frequently-asked-questions',
  schema = true,
  renderAnswer = defaultAnswer,
  className = '',
}: FaqBlockProps) {
  if (!items || items.length === 0) return null;
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`my-10 scroll-mt-24 ${className}`}>
      {schema && <FaqJsonLd items={items} />}
      <h2 id={`${id}-heading`} className="mb-4 text-2xl font-bold text-foreground">
        {heading}
      </h2>
      <div className="divide-y divide-border border-y border-border">
        {items.map((f) => (
          <div key={f.question} className="py-5">
            <h3 className="mb-2 text-lg font-semibold text-foreground">{f.question}</h3>
            {renderAnswer(f.answer)}
          </div>
        ))}
      </div>
    </section>
  );
}
