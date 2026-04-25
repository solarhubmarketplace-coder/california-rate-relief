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
    <section className='py-16 md:py-24 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto'>
          <div>
            <div className='inline-block bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wide uppercase'>
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

          <div className='bg-white text-gray-800 rounded-2xl p-6 md:p-8 shadow-2xl'>
            <label htmlFor='billInput' className='block text-sm font-semibold text-gray-700 mb-2'>
              Your average monthly power bill
            </label>
            <div className='flex items-center border-2 border-gray-200 rounded-lg overflow-hidden focus-within:border-green-700'>
              <span className='text-gray-400 px-4 text-xl font-bold'>$</span>
              <input
                id='billInput'
                type='number'
                min={50}
                max={2000}
                step={5}
                value={bill}
                onChange={(e) => handleBill(e.target.value)}
                className='flex-1 px-2 py-3 text-2xl font-bold text-gray-900 focus:outline-none'
              />
              <span className='text-gray-400 px-4 text-sm'>/ mo</span>
            </div>
            <input
              type='range'
              min={100}
              max={800}
              step={5}
              value={Math.min(800, Math.max(100, bill))}
              onChange={(e) => setBill(parseInt(e.target.value, 10))}
              className='w-full mt-4 accent-green-700'
            />
            <div className='flex justify-between text-[10px] text-gray-500 mb-6'>
              <span>$100</span>
              <span>$800+</span>
            </div>

            <div className='space-y-3 border-t border-gray-100 pt-5'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>New monthly rate</span>
                <span className='text-xl font-extrabold text-green-700'>${newRate}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-gray-600'>Monthly savings</span>
                <span className='text-xl font-extrabold text-gray-900'>${monthly}</span>
              </div>
              <div className='flex items-center justify-between border-t border-dashed border-gray-200 pt-3'>
                <span className='text-sm font-bold text-gray-900'>25-year savings</span>
                <span className='text-2xl font-black text-green-700'>
                  ${lifetime.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href='#qualify'
              className='mt-6 block text-center bg-yellow-400 hover:bg-yellow-300 text-green-900 font-extrabold py-3.5 rounded-lg shadow-md transition-all'
            >
              Lock In My Savings →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
