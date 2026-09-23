'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// =============================================================================
// HeroV2 — CRR homepage hero.
// Design pass 2 (2026-09-22): light surface, ink text, one brand-color button,
// no stock photo or color overlay — the neutral-publisher register Chad chose.
// Copy is unchanged from pass 1.
// =============================================================================

export function HeroV2() {
  return (
    <section className='border-b border-border bg-card'>
      <div className='container mx-auto px-4 py-14 md:py-20'>
        <div className='max-w-3xl'>
          {/* Quiet trust-strip text row, not an urgency pill (D.5) */}
          <p className='text-xs md:text-sm font-semibold uppercase tracking-wide text-primary mb-5'>
            Independent referral service · Sources cited · Updated September 2026
          </p>

          {/* Single H1 */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-5'>
            Compare California solar options against your actual bill and utility rate.
          </h1>

          <p className='text-lg md:text-xl text-foreground/80 leading-relaxed mb-7 max-w-2xl'>
            Sourced, dated and reviewed. California Rate Relief is an independent referral
            service — we cite public sources and connect you with a matched provider only when
            you ask.
          </p>

          {/* Trust strip */}
          <div className='flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm md:text-base text-foreground/80'>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-primary' aria-hidden='true' />
              <span>Property-specific review</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-primary' aria-hidden='true' />
              <span>Residential and commercial paths</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-primary' aria-hidden='true' />
              <span>No obligation to accept a quote</span>
            </div>
          </div>

          <Link
            href='/#qualify'
            className='inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-7 py-3.5 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2'
          >
            Request a Residential Review
            <ArrowRight className='w-5 h-5' />
          </Link>
          <p className='text-muted-foreground text-xs mt-3'>
            Submission is not an approval, quote, or savings guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
