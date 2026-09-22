'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// =============================================================================
// HeroV2 — full-width California solar background, urgency badge, dual CTA
// =============================================================================

export function HeroV2() {
  return (
    <section className='relative overflow-hidden'>
      {/* Background image — REPLACE with branded photo of an actual install when available */}
      <div className='absolute inset-0'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1920&h=1080&fit=crop&q=80'
          alt='California home with rooftop solar and battery storage'
          className='w-full h-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/30' />
      </div>

      <div className='relative container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='max-w-3xl text-white'>
          {/* Quiet trust-strip text row, not an urgency pill (D.5) */}
          <p className='text-xs md:text-sm font-semibold uppercase tracking-wide text-white/80 mb-5'>
            Independent referral service · Sources cited · Updated September 2026
          </p>

          {/* Single H1 */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5'>
            Compare California solar options against your actual bill and utility rate.
          </h1>

          <p className='text-lg md:text-xl text-white/95 leading-relaxed mb-7 max-w-2xl'>
            Sourced, dated and reviewed. California Rate Relief is an independent referral
            service — we cite public sources and connect you with a matched provider only when
            you ask.
          </p>

          {/* Trust strip */}
          <div className='flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm md:text-base'>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-white/80' />
              <span>Property-specific review</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-white/80' />
              <span>Residential and commercial paths</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-white/80' />
              <span>No obligation to accept a quote</span>
            </div>
          </div>

          <Link
            href='/#qualify'
            className='inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta/90 text-cta-foreground font-semibold text-lg px-8 py-4 rounded-xl transition-colors'
          >
            Request a Residential Review
            <ArrowRight className='w-5 h-5' />
          </Link>
          <p className='text-white/80 text-xs mt-3'>
            Submission is not an approval, quote, or savings guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
