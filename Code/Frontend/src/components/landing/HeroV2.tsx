'use client';

import Link from 'next/link';
import { ArrowRight, Heart, CheckCircle2 } from 'lucide-react';

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
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/85 to-emerald-700/40' />
      </div>

      <div className='relative container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='max-w-3xl text-white'>
          {/* Urgency badge */}
          <div className='inline-flex items-center gap-2 bg-amber-500/95 text-emerald-900 font-bold text-xs md:text-sm px-3 py-1.5 rounded-full mb-5 animate-pulse'>
            <Heart className='h-4 w-4' aria-hidden='true' />
            2026 PROGRAM SLOTS FILLING FAST
          </div>

          {/* Single H1 */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5'>
            Lock in a Lower Power Rate.
            <br />
            <span className='text-amber-500'>$0 Down. 25-Year Warranty.</span>
          </h1>

          <p className='text-lg md:text-xl text-white/95 leading-relaxed mb-7 max-w-2xl'>
            The 2026 California Rate Relief Program installs solar + battery on your home for $0
            and locks your power rate up to <strong className='text-amber-500'>50% lower</strong>{' '}
            than PG&amp;E, SCE, or SDG&amp;E for 25 years.
          </p>

          {/* Trust strip */}
          <div className='flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm md:text-base'>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>$0 down · no loans</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>Fixed rate for 25 years</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>Bumper-to-bumper coverage</span>
            </div>
          </div>

          <Link
            href='#qualify'
            className='inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all'
          >
            Check My Eligibility · 60 Seconds
            <ArrowRight className='w-5 h-5' />
          </Link>
          <p className='text-white/80 text-xs mt-3'>
            No spam. No credit pull. We confirm if your address qualifies.
          </p>
        </div>
      </div>
    </section>
  );
}
