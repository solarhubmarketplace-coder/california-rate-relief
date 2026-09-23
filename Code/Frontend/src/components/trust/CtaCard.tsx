import type { ReactNode } from 'react';

// =============================================================================
// CtaCard — the one calm ask per page, in the brand color.
//
// Presentational only. It frames whatever action the page already has — an
// existing link to the intake route, or an existing form — and changes none of
// it: no href, handler, tracking call, form field or consent text lives here.
// No urgency styling: no countdowns, no "limited", no second color.
// =============================================================================

/** The brand button, for the one primary action inside a CtaCard. */
export const CTA_BUTTON_CLASS =
  'inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

export interface CtaCardProps {
  heading: ReactNode;
  body?: ReactNode;
  /** The action(s): an existing link or form. */
  children?: ReactNode;
  /** Small print under the action. */
  footnote?: ReactNode;
  id?: string;
  className?: string;
  /** Heading level; h2 by default. */
  headingAs?: 'h2' | 'h3';
}

export function CtaCard({ heading, body, children, footnote, id, className = '', headingAs = 'h2' }: CtaCardProps) {
  const H = headingAs;
  return (
    <section
      id={id}
      className={`mt-12 rounded-lg border border-border border-t-4 border-t-primary bg-card p-6 md:p-8 ${className}`}
    >
      <H className="text-xl font-bold tracking-tight text-foreground md:text-2xl">{heading}</H>
      {body && <div className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{body}</div>}
      {children && <div className="mt-5">{children}</div>}
      {footnote && <p className="mt-3 text-xs text-muted-foreground">{footnote}</p>}
    </section>
  );
}
