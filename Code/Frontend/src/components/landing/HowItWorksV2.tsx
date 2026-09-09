import { Search, Wrench, TrendingDown } from 'lucide-react';

// =============================================================================
// HowItWorksV2 — 3-card pattern matching landing-page redesign
// =============================================================================

export function HowItWorksV2() {
  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-14'>
          <div className='inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
            How it works
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3'>
            Share the project. Review the actual terms.
          </h2>
          <p className='text-lg text-slate-600'>
            California Rate Relief gathers the basics and connects the request with a solar provider for review.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-6 md:gap-8'>
          {/* Card 1 — green fill */}
          <div className='relative bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-7 text-white shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-amber-500 text-emerald-900 rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              1
            </div>
            <Search className='w-12 h-12 text-amber-500 mb-4' />
            <h3 className='text-xl font-extrabold mb-2'>Describe the property</h3>
            <p className='text-white/85 text-sm leading-relaxed'>
              Share the utility, typical bill, property status and contact information needed for an initial review.
            </p>
          </div>

          {/* Card 2 — green border, white fill */}
          <div className='relative bg-white rounded-2xl p-7 border-2 border-emerald-700 shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-emerald-700 text-white rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              2
            </div>
            <Wrench className='w-12 h-12 text-emerald-700 mb-4' />
            <h3 className='text-xl font-extrabold text-slate-900 mb-2'>Provider review</h3>
            <p className='text-slate-600 text-sm leading-relaxed'>
              A matched provider can review roof, usage, utility territory and available project structures.
            </p>
          </div>

          {/* Card 3 — gray border */}
          <div className='relative bg-white rounded-2xl p-7 border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all'>
            <div className='w-14 h-14 bg-amber-500 text-emerald-900 rounded-xl flex items-center justify-center mb-5 font-black text-2xl'>
              3
            </div>
            <TrendingDown className='w-12 h-12 text-blue-700 mb-4' />
            <h3 className='text-xl font-extrabold text-slate-900 mb-2'>Compare written terms</h3>
            <p className='text-slate-600 text-sm leading-relaxed'>
              Savings, ownership, financing, warranty and transfer terms depend on the provider&apos;s written proposal and contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
