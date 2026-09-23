import { SourceChip } from './SourceChip';

// =============================================================================
// KeyFacts — the short box of figures a reader came for, before the body.
//
// Renders ONLY what the page supplies. With no facts it renders nothing; it
// never pads itself out, and it never attaches a source to a fact that did not
// arrive with one. A fact with its own source shows a publisher · date chip; a
// page whose sources are listed once at the foot gets a pointer to that list.
// =============================================================================

export interface KeyFact {
  label: string;
  value: string;
  note?: string;
  source?: { publisher?: string; date?: string; url?: string };
}

export interface KeyFactsProps {
  facts: KeyFact[];
  heading?: string;
  /** Anchor of the page's sources list, shown when facts carry no chip. */
  sourcesHref?: string;
  className?: string;
}

export function KeyFacts({ facts, heading = 'Key facts', sourcesHref, className = '' }: KeyFactsProps) {
  if (!facts || facts.length === 0) return null;
  const anyChip = facts.some((f) => f.source && (f.source.publisher || f.source.url || f.source.date));
  const cols = facts.length % 3 === 0 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';
  return (
    <section
      aria-label={heading}
      className={`my-8 rounded-lg border border-border border-l-4 border-l-highlight bg-card p-5 md:p-6 ${className}`}
    >
      {/* The ! modifiers beat the CRR heading scale in globals.css ([data-site] h2). */}
      <h2 className="!m-0 !text-xs !font-bold uppercase !leading-snug !tracking-wider text-highlight-foreground">{heading}</h2>
      <dl className={`mt-4 grid grid-cols-1 gap-x-6 gap-y-5 ${cols}`}>
        {facts.map((f) => (
          <div key={`${f.label}-${f.value}`} className="min-w-0">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.label}</dt>
            <dd className="mt-1 text-xl font-bold tabular-nums leading-tight text-foreground">{f.value}</dd>
            {f.note && <dd className="mt-1 text-sm leading-snug text-foreground/70">{f.note}</dd>}
            {f.source && (f.source.publisher || f.source.url || f.source.date) && (
              <dd className="mt-2">
                <SourceChip publisher={f.source.publisher} href={f.source.url} date={f.source.date} />
              </dd>
            )}
          </div>
        ))}
      </dl>
      {!anyChip && sourcesHref && (
        <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
          Sources are listed{' '}
          <a href={sourcesHref} className="text-primary underline underline-offset-2 hover:no-underline">
            at the foot of this page
          </a>
          .
        </p>
      )}
    </section>
  );
}
