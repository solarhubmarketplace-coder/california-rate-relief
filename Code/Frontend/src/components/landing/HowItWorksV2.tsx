import { Search, Wrench, TrendingDown } from 'lucide-react';

// =============================================================================
// HowItWorksV2 — 3-card pattern matching landing-page redesign
// =============================================================================

export function HowItWorksV2() {
  return (
    <section className='py-16 md:py-24 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <p className='text-xs font-bold uppercase tracking-wide text-primary mb-3'>
            How it works
          </p>
          <h2 className='text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3'>
            Share the project. Review the actual terms.
          </h2>
          <p className='text-lg text-muted-foreground'>
            California Rate Relief gathers the basics and connects the request with a solar provider for review.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 md:gap-8'>
          {/* Card 1 — white card like the other two (design pass 2: brand color
              is for links, buttons and the one ask, not for filled panels). */}
          <div className='relative bg-card rounded-xl p-7 border-2 border-border hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 bg-highlight-soft text-highlight-foreground rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              1
            </div>
            <Search className='w-12 h-12 text-primary mb-4' />
            <h3 className='text-xl font-extrabold text-foreground mb-2'>Describe the property</h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Share the utility, typical bill, property status and contact information needed for an initial review.
            </p>
          </div>

          {/* Card 2 — neutral border, white fill */}
          <div className='relative bg-card rounded-xl p-7 border-2 border-border hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 bg-highlight-soft text-highlight-foreground rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              2
            </div>
            <Wrench className='w-12 h-12 text-primary mb-4' />
            <h3 className='text-xl font-extrabold text-foreground mb-2'>Provider review</h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              A matched provider can review roof, usage, utility territory and available project structures.
            </p>
          </div>

          {/* Card 3 — neutral border. text-blue-700 icon was an unexplained
              4th color (pre-existing bug) — fixed to text-primary. */}
          <div className='relative bg-card rounded-xl p-7 border-2 border-border hover:shadow-md transition-shadow'>
            <div className='w-14 h-14 bg-highlight-soft text-highlight-foreground rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              3
            </div>
            <TrendingDown className='w-12 h-12 text-primary mb-4' />
            <h3 className='text-xl font-extrabold text-foreground mb-2'>Compare written terms</h3>
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Savings, ownership, financing, warranty and transfer terms depend on the provider&apos;s written proposal and contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
