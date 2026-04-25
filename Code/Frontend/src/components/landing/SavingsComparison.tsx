// =============================================================================
// SavingsComparison — before/after visual bar chart
// =============================================================================

export function SavingsComparison() {
  return (
    <section className='py-16 md:py-24 bg-slate-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <div className='inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
            The numbers
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3'>
            Your power bill, before vs. after
          </h2>
          <p className='text-lg text-slate-600'>
            Average California household based on 2026 PG&amp;E / SCE / SDG&amp;E rates.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
          {/* BEFORE */}
          <div className='bg-white rounded-2xl p-6 border border-slate-200 shadow-md'>
            <div className='text-xs font-bold text-red-600 uppercase tracking-wide mb-2'>
              Before · Utility Rate
            </div>
            <div className='text-4xl md:text-5xl font-black text-slate-900 mb-1'>
              $285<span className='text-lg text-slate-500 font-bold'>/mo</span>
            </div>
            <div className='text-sm text-slate-500 mb-5'>
              Avg California home @ ~$0.36/kWh and rising
            </div>
            <div className='h-32 bg-slate-100 rounded-lg flex items-end p-3'>
              <div className='w-full bg-red-400 rounded' style={{ height: '100%' }} />
            </div>
            <div className='mt-4 text-xs text-slate-500'>
              PG&amp;E rates rose ~22% in the last 24 months. Utility-grid pricing keeps climbing.
            </div>
          </div>

          {/* AFTER */}
          <div className='bg-white rounded-2xl p-6 border-2 border-emerald-700 shadow-xl'>
            <div className='text-xs font-bold text-emerald-700 uppercase tracking-wide mb-2'>
              After · Rate Relief Program
            </div>
            <div className='text-4xl md:text-5xl font-black text-emerald-700 mb-1'>
              $142<span className='text-lg text-slate-500 font-bold'>/mo</span>
            </div>
            <div className='text-sm text-slate-500 mb-5'>
              Locked rate for 25 years · ~50% savings
            </div>
            <div className='h-32 bg-slate-100 rounded-lg flex items-end p-3'>
              <div className='w-full bg-emerald-700 rounded' style={{ height: '50%' }} />
            </div>
            <div className='mt-4 text-xs text-emerald-700 font-semibold'>
              Saves ~$1,716 /year · ~$42,900 over the program lifetime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
