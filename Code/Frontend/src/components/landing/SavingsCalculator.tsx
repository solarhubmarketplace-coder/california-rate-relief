'use client';

import { useState } from 'react';
import Link from 'next/link';

// =============================================================================
// SavingsCalculator — interactive bill input → 25-year savings extrapolation
// =============================================================================

export function SavingsCalculator() {
  const [bill, setBill] = useState(285);
  const newRate = Math.round(bill * 0.5);
  const monthly = bill - newRate;
  const lifetime = monthly * 12 * 25;

  const handleBill = (v: string) => {
    const n = Math.max(50, Math.min(2000, parseInt(v, 10) || 0));
    setBill(n);
  };

  return (
    <section className='py-16 md:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto'>
          <div>
            <div className='inline-block bg-amber-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
              Free calculator
            </div>
            <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>
              How much would <em>you</em> save?
            </h2>
            <p className='text-white/90 text-lg leading-relaxed mb-2'>
              Enter your average monthly power bill. We&apos;ll estimate your savings under the 2026
              California Rate Relief Program.
            </p>
            <p className='text-xs text-white/60'>
              Estimate only — final savings calculated during your eligibility call.
            </p>
          </div>

          <div className='bg-white text-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl'>
            <label htmlFor='billInput' className='block text-sm font-semibold text-slate-700 mb-2'>
              Your average monthly power bill
            </label>
            <div className='flex items-center border-2 border-slate-200 rounded-lg overflow-hidden focus-within:border-emerald-700'>
              <span className='text-slate-400 px-4 text-xl font-bold'>$</span>
              <input
                id='billInput'
                type='number'
                min={50}
                max={2000}
                step={5}
                value={bill}
                onChange={(e) => handleBill(e.target.value)}
                className='flex-1 px-2 py-3 text-2xl font-bold text-slate-900 focus:outline-none'
              />
              <span className='text-slate-400 px-4 text-sm'>/ mo</span>
            </div>
            <input
              type='range'
              min={100}
              max={800}
              step={5}
              value={Math.min(800, Math.max(100, bill))}
              onChange={(e) => setBill(parseInt(e.target.value, 10))}
              className='w-full mt-4 accent-emerald-700'
            />
            <div className='flex justify-between text-[10px] text-slate-500 mb-6'>
              <span>$100</span>
              <span>$800+</span>
            </div>

            <div className='space-y-3 border-t border-slate-100 pt-5'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-slate-600'>New monthly rate</span>
                <span className='text-xl font-extrabold text-emerald-700'>${newRate}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-slate-600'>Monthly savings</span>
                <span className='text-xl font-extrabold text-slate-900'>${monthly}</span>
              </div>
              <div className='flex items-center justify-between border-t border-dashed border-slate-200 pt-3'>
                <span className='text-sm font-bold text-slate-900'>25-year savings</span>
                <span className='text-2xl font-black text-emerald-700'>
                  ${lifetime.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href='#qualify'
              className='mt-6 block text-center bg-amber-400 hover:bg-amber-300 text-emerald-900 font-extrabold py-3.5 rounded-lg shadow-md transition-all'
            >
              Lock In My Savings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
