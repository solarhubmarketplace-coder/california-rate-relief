import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// =============================================================================
// FinalCTA — bottom-of-page conversion section
// =============================================================================

export function FinalCTA() {
  return (
    <section className='relative py-20 md:py-28 overflow-hidden'>
      <div className='absolute inset-0'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src='https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=1080&fit=crop&q=80'
          alt=''
          className='w-full h-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-emerald-700/85' />
      </div>
      <div className='relative container mx-auto px-4 max-w-4xl text-center text-white'>
        <div className='inline-flex items-center gap-2 bg-amber-400/95 text-emerald-900 font-bold text-xs md:text-sm px-3 py-1.5 rounded-full mb-5'>
          RESIDENTIAL SOLAR ASSESSMENT
        </div>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5'>
          Get a property-specific review.
        </h2>
        <p className='text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8'>
          Share your utility, bill range and property details. A matched provider can review the available options.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
          <Link
            href='/#qualify'
            className='inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-emerald-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-2xl'
          >
            Request a Residential Review
            <ArrowRight className='w-5 h-5' />
          </Link>
        </div>
        {/* No phone number is published yet — a real one can be dropped in here (and in FloatingMobileCTA) once the owner supplies it. */}
        <p className='mt-4 text-sm text-white/80'>
          No obligation to accept a quote. Submission does not establish eligibility or savings.
        </p>
      </div>
    </section>
  );
}
