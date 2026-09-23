'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// =============================================================================
// HeroV2 — CRR homepage hero.
// Design pass 2 (2026-09-22): light surface, ink text, one brand-color button,
// no color overlay — the neutral-publisher register Chad chose. The original
// hero shows a photo in the right column on large screens (Chad, 2026-09-22):
// Pexels photo 12284244 (Pexels License, free commercial use), cropped and
// self-hosted in /public/img so it loads with the page. Copy is unchanged from pass 1.
// =============================================================================

export function HeroV2() {
  return (
    <section className='border-b border-border bg-card'>
      <div className='container mx-auto px-4 py-14 md:py-20 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-12 lg:items-center'>
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

        {/* Photo column — large screens only, so the CTA stays above the fold on phones.
            The photo is offered only through a <source> gated on the same
            1024px (lg) breakpoint. An eager, high-priority <img> inside a
            display:none column is still fetched, so phones were downloading
            the 95 KB 800w file (at high priority, competing with the CSS and
            fonts) for a column they never show. Below lg the <img> falls back
            to a 1x1 inline GIF, so no request is made. At lg and up the
            browser picks the same srcset candidates as before. */}
        <div className='hidden lg:block'>
          <div className='relative overflow-hidden rounded-2xl border border-border shadow-sm aspect-[6/5]'>
            <picture>
              <source
                media='(min-width: 1024px)'
                type='image/webp'
                srcSet='/img/hero-home-solar-800.webp 800w, /img/hero-home-solar.webp 1320w'
                sizes='45vw'
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
                width={1320}
                height={1100}
                alt='Two-story California craftsman home with black rooftop solar panels, palm trees and a waterfront lawn at golden hour'
                className='absolute inset-0 w-full h-full object-cover'
                loading='eager'
                fetchPriority='high'
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
