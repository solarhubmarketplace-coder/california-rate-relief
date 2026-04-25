import { Search, Wrench, TrendingDown } from 'lucide-react';

// =============================================================================
// HowItWorksV2 — 3-card pattern matching landing-page redesign
// =============================================================================

export function HowItWorksV2() {
  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <div className='inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
            How it works
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3'>
            Switch power providers. Skip the ownership.
          </h2>
          <p className='text-lg text-gray-600'>
            No equipment to buy. No loan to sign. We install, we maintain, you pay a lower rate.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 md:gap-8'>
          {/* Card 1 — green fill */}
          <div className='relative bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-7 text-white shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-yellow-400 text-green-900 rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              1
            </div>
            <Search className='w-12 h-12 text-yellow-400 mb-4' />
            <h3 className='text-xl font-extrabold mb-2'>Check eligibility</h3>
            <p className='text-white/85 text-sm leading-relaxed'>
              Tell us your utility + ZIP. We confirm in seconds whether your home qualifies for the
              2026 program. No credit check.
            </p>
          </div>

          {/* Card 2 — green border, white fill */}
          <div className='relative bg-white rounded-2xl p-7 border-2 border-green-700 shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-green-700 text-white rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              2
            </div>
            <Wrench className='w-12 h-12 text-green-700 mb-4' />
            <h3 className='text-xl font-extrabold text-gray-900 mb-2'>We install — $0 down</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              Our crew handles permits, panels, battery, inverter, and inspection. No hardware to
              buy, no loans, no debt against your home.
            </p>
          </div>

          {/* Card 3 — gray border */}
          <div className='relative bg-white rounded-2xl p-7 border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-yellow-400 text-green-900 rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              3
            </div>
            <TrendingDown className='w-12 h-12 text-blue-700 mb-4' />
            <h3 className='text-xl font-extrabold text-gray-900 mb-2'>Pay lower power rates</h3>
            <p className='text-gray-600 text-sm leading-relaxed'>
              We become your power provider at a fixed rate up to <strong>50% lower</strong> than
              your utility. Locked for 25 years. Bumper-to-bumper coverage included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
