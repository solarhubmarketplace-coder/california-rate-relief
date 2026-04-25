import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

// =============================================================================
// FinalCTA — bottom-of-page conversion section
// =============================================================================

export function FinalCTA() {
  return (
    <section className='relative py-20 md:py-28 overflow-hidden'>
      <div className='absolute inset-0'>
        <img
          src='https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1920&h=1080&fit=crop&q=80'
          alt=''
          className='w-full h-full object-cover'
          loading='lazy'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-700/85' />
      </div>
      <div className='relative container mx-auto px-4 max-w-4xl text-center text-white'>
        <div className='inline-flex items-center gap-2 bg-yellow-400/95 text-green-900 font-bold text-xs md:text-sm px-3 py-1.5 rounded-full mb-5'>
          <span className='w-2 h-2 bg-red-600 rounded-full animate-pulse' />
          2026 PROGRAM SLOTS FILLING — LIMITED AVAILABILITY
        </div>
        <h2 className='text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5'>
          Stop watching your power bill go up.
        </h2>
        <p className='text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8'>
          60-second eligibility check. $0 down. 25-year fixed rate. No credit pull, no obligation.
        </p>
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center'>
          <Link
            href='#qualify'
            className='inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-extrabold text-lg px-8 py-4 rounded-xl shadow-2xl'
          >
            Check My Eligibility Now
            <ArrowRight className='w-5 h-5' />
          </Link>
          {/* REPLACE 800-555-0123 WITH REAL PHONE NUMBER */}
          <a
            href='tel:18005550123'
            className='inline-flex items-center gap-2 text-white font-bold text-lg hover:text-yellow-400'
          >
            <Phone className='w-5 h-5' />
            or call (800) 555-0123
          </a>
        </div>
      </div>
    </section>
  );
}
