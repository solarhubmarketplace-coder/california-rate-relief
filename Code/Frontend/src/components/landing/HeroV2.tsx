'use client';

import { CheckCircle2 } from 'lucide-react';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HOME_WIZARD_TARGET } from '@/lib/quick-start';

// =============================================================================
// HeroV2 — CRR homepage hero.
// Design pass 2 (2026-09-22): light surface, ink text, one brand-color button,
// no color overlay — the neutral-publisher register Chad chose. The original
// hero shows a photo in the right column on large screens (Chad, 2026-09-22):
// Pexels photo 12284244 (Pexels License, free commercial use), cropped and
// self-hosted in /public/img so it loads with the page. Copy is unchanged from pass 1.
//
// 2026-09-23: the single "Request a Residential Review" button is replaced by
// HeroQuickCheck, the bill-first first step (utility + monthly bill, nothing
// sent). Continue scrolls to the QualificationWizard in #qualify directly
// below the hero and opens it past the questions already answered. On a phone
// the quick check sits right under the headline and intro (with slightly
// smaller type and spacing below md, so more of it is on the first screen);
// the three trust points follow it. From lg up the order, sizes and the photo
// column are as before.
// =============================================================================

export function HeroV2() {
  return (
    <section className='border-b border-border bg-card'>
      <div className='container mx-auto px-4 py-10 md:py-20 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-12 lg:items-center'>
        <div className='flex max-w-3xl flex-col'>
          {/* Quiet trust-strip text row, not an urgency pill (D.5) */}
          <p className='text-xs md:text-sm font-semibold uppercase tracking-wide text-primary mb-4 md:mb-5'>
            Independent referral service · Sources cited · Updated September 2026
          </p>

          {/* Single H1 */}
          <h1 className='text-[2rem] sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-4 md:mb-5'>
            Compare California solar options against your actual bill and utility rate.
          </h1>

          <p className='text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-5 md:mb-7 max-w-2xl'>
            Sourced, dated and reviewed. California Rate Relief is an independent referral
            service — we cite public sources and connect you with a matched provider only when
            you ask.
          </p>

          {/* Trust strip. Below the quick check and its disclaimer on phones and
              tablets (order-last), above it from lg up, where it always was. */}
          <div className='order-last mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-foreground/80 lg:order-none lg:mt-0 lg:mb-8'>
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

          {/* The page's one ask: the first step of the wizard below. */}
          <HeroQuickCheck
            targetId={HOME_WIZARD_TARGET}
            topic='Residential review (home page)'
            className='max-w-2xl'
          />
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
              {/* A plain <img> on purpose: next/image cannot express the
                  lg-gated <source> above. (The @next/next lint rule this used
                  to disable is not loaded by eslint.config.mjs, and a disable
                  comment for an unknown rule is itself a lint error.) */}
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
