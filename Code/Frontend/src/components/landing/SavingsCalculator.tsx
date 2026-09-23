'use client';

import { useState } from 'react';
import Link from 'next/link';

// =============================================================================
// SavingsCalculator — interactive bill input → 25-year savings extrapolation
// =============================================================================

export function SavingsCalculator() {
  const [bill, setBill] = useState(285);
  const annualSpend = bill * 12;
  const fiveYearBaseline = annualSpend * 5;

  const handleBill = (v: string) => {
    const n = Math.max(50, Math.min(2000, parseInt(v, 10) || 0));
    setBill(n);
  };

  return (
    <section className='py-16 md:py-24 bg-muted border-y border-border text-foreground'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto'>
          <div>
            <p className='text-xs font-bold uppercase tracking-wide text-primary mb-3'>
              Bill calculator
            </p>
            <h2 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-4'>
              Start with your current bill.
            </h2>
            <p className='text-foreground/80 text-lg leading-relaxed mb-2'>
              Enter your average monthly power bill to see your current annual and five-year baseline.
            </p>
            <p className='text-xs text-muted-foreground'>
              This is current-dollar arithmetic, not a solar quote or forecast. A provider must model any project savings.
            </p>
          </div>

          <div className='bg-card text-card-foreground rounded-xl border border-border p-6 md:p-8'>
            <label htmlFor='billInput' className='block text-sm font-semibold text-muted-foreground mb-2'>
              Your average monthly power bill
            </label>
            <div className='flex items-center border-2 border-border rounded-lg overflow-hidden focus-within:border-primary'>
              <span className='text-muted-foreground px-4 text-xl font-bold'>$</span>
              <input
                id='billInput'
                type='number'
                min={50}
                max={2000}
                step={5}
                value={bill}
                onChange={(e) => handleBill(e.target.value)}
                className='flex-1 px-2 py-3 text-2xl font-bold text-foreground focus:outline-none'
              />
              <span className='text-muted-foreground px-4 text-sm'>/ mo</span>
            </div>
            {/* The visible <label> above belongs to the number field, so the
                slider carries its own name (Lighthouse "label", WCAG 4.1.2). */}
            <input
              type='range'
              aria-label='Average monthly power bill, slider'
              min={100}
              max={800}
              step={5}
              value={Math.min(800, Math.max(100, bill))}
              onChange={(e) => setBill(parseInt(e.target.value, 10))}
              aria-label='Adjust your average monthly power bill'
              aria-valuetext={`$${Math.min(800, Math.max(100, bill))} per month`}
              className='w-full mt-4 accent-primary'
            />
            <div className='flex justify-between text-[10px] text-muted-foreground mb-6'>
              <span>$100</span>
              <span>$800+</span>
            </div>

            <div className='space-y-3 border-t border-border pt-5'>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>Current monthly bill</span>
                <span className='text-xl font-extrabold text-primary'>${bill}</span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='text-sm text-muted-foreground'>Current annual baseline</span>
                <span className='text-xl font-extrabold text-foreground'>${annualSpend.toLocaleString()}</span>
              </div>
              <div className='flex items-center justify-between border-t border-dashed border-border pt-3'>
                <span className='text-sm font-bold text-foreground'>Five-year baseline</span>
                <span className='text-2xl font-black text-primary'>
                  ${fiveYearBaseline.toLocaleString()}
                </span>
              </div>
            </div>

            <Link
              href='/#qualify'
              className='mt-6 block text-center bg-cta hover:bg-cta/90 text-cta-foreground font-semibold py-3.5 rounded-lg transition-colors'
            >
              Request a Property Review →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
