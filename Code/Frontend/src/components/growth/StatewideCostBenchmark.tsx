import {
  STATEWIDE_COST_BENCHMARK,
  formatStatewideBenchmarkRange,
  isStatewideBenchmarkSourced,
} from '@/data/solar-cost-benchmark';

// =============================================================================
// StatewideCostBenchmark — the ONE rendered form of the statewide solar cost
// figure, used on /solar-cost and on every /solar-cost/[city] page.
//
// RULES THIS COMPONENT ENFORCES BY CONSTRUCTION
//   - It always says "statewide"/national, in the label and in the copy —
//     never worded so it could read as a city's or a home's price.
//   - It always names the source (publisher, document title, date) inline,
//     with a link, next to the figure — not in a footnote elsewhere.
//   - It renders nothing if the underlying data file is ever left unsourced
//     (see isStatewideBenchmarkSourced), the same fail-closed behavior
//     city-cost-data.ts's own gate applies to a row.
//   - It states no city-specific price, no invented range, no payback period
//     and no savings figure. Those stay banned; this component only ever
//     prints the one statewide number city-cost-data.ts's policy comment and
//     src/data/solar-cost-benchmark.ts describe.
// =============================================================================

interface StatewideCostBenchmarkProps {
  /** The city this instance is rendered on, so the disclaimer can name it
   *  explicitly ("not a price for San Diego"). Omit on a page with no single
   *  city, e.g. the /solar-cost hub. */
  cityName?: string;
}

const link = 'text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary';

export function StatewideCostBenchmark({ cityName }: StatewideCostBenchmarkProps) {
  if (!isStatewideBenchmarkSourced) return null;

  const { percentileBand, californiaContext, source } = STATEWIDE_COST_BENCHMARK;
  const range = formatStatewideBenchmarkRange();
  const notAPriceFor = cityName
    ? `It is not a price for ${cityName}, or for any specific home.`
    : 'It is not a price for any specific city or home.';

  return (
    <div className='not-prose my-8 rounded-xl border border-border bg-card p-5'>
      <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
        National benchmark &middot; LBNL
      </span>
      <p className='mt-3 text-foreground/90'>
        Homeowners who installed residential solar in {source.dataYear} paid{' '}
        <strong>{range}</strong> ({percentileBand}), before any tax credit, according to Lawrence
        Berkeley National Laboratory&apos;s <em>Tracking the Sun</em> research. {californiaContext}
      </p>
      <p className='mt-2 text-sm text-foreground/70'>
        This is a national research figure, not a quote. {notAPriceFor}
      </p>
      <p className='mt-3 text-xs text-foreground/60 [overflow-wrap:anywhere]'>
        Source:{' '}
        <a href={source.url} target='_blank' rel='noopener noreferrer' className={link}>
          {source.label}
        </a>
        , {source.publisher}, published {source.publishedDate} &mdash; verified {source.verifiedAt}.
      </p>
    </div>
  );
}
