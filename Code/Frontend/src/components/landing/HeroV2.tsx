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
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/85 to-emerald-700/40' />
      </div>

      <div className='relative container mx-auto px-4 py-16 md:py-24 lg:py-32'>
        <div className='max-w-3xl text-white'>
          <div className='inline-flex items-center gap-2 bg-amber-500/95 text-emerald-900 font-bold text-xs md:text-sm px-3 py-1.5 rounded-full mb-5'>
            CALIFORNIA SOLAR PROJECT REVIEW
          </div>

          {/* Single H1 */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-5'>
            Start With Your Actual Property and Power Bill.
            <br />
            <span className='text-amber-500'>Then Compare Written Options.</span>
          </h1>

          <p className='text-lg md:text-xl text-white/95 leading-relaxed mb-7 max-w-2xl'>
            California Rate Relief is a private referral service. We collect the basic project
            details and make them available for review by a matched California solar provider.
          </p>

          {/* Trust strip */}
          <div className='flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm md:text-base'>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>Property-specific review</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>Residential and commercial paths</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle2 className='w-5 h-5 text-amber-500' />
              <span>No obligation to accept a quote</span>
            </div>
          </div>

          <Link
            href='/#qualify'
            className='inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-emerald-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all'
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
