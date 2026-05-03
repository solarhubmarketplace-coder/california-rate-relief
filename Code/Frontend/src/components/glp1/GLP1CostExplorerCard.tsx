'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';

type Med = 'sema' | 'tirz';

const COST_DATA: Record<Med, {
  brandName: string;
  brandSubtitle: string;
  startingPrice: string;
  retailYearly: string;
  telehealthYearly: string;
  compoundedYearly: string;
  potentialSavings: string;
  providerCount: number;
}> = {
  sema: {
    brandName: 'Semaglutide',
    brandSubtitle: '(Ozempic, Wegovy)',
    startingPrice: 'from $2,988/yr',
    retailYearly: '$12,000/yr',
    telehealthYearly: '$5,500/yr',
    compoundedYearly: '$2,988/yr',
    potentialSavings: '$9,012+/year',
    providerCount: 50,
  },
  tirz: {
    brandName: 'Tirzepatide',
    brandSubtitle: '(Mounjaro, Zepbound)',
    startingPrice: 'from $3,588/yr',
    retailYearly: '$15,000/yr',
    telehealthYearly: '$8,500/yr',
    compoundedYearly: '$3,588/yr',
    potentialSavings: '$11,412+/year',
    providerCount: 50,
  },
};

export function GLP1CostExplorerCard() {
  const [med, setMed] = useState<Med>('sema');
  const data = COST_DATA[med];

  return (
    <div
      className='rounded-3xl p-6 md:p-8 text-white shadow-2xl w-full max-w-md mx-auto lg:mx-0'
      style={{ backgroundColor: '#2D0E2D' }}
    >
      {/* Header */}
      <div className='mb-6 text-center'>
        <h3 className='text-base md:text-lg font-semibold mb-1'>Explore Treatment Costs</h3>
        <p className='text-xs md:text-sm' style={{ color: 'rgba(255,255,255,0.65)' }}>
          Plan your weight loss journey with real provider pricing
        </p>
      </div>

      {/* Tabs: Sema / Tirz */}
      <div
        className='grid grid-cols-2 gap-2 p-1 rounded-2xl mb-5'
        style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
      >
        <button
          type='button'
          onClick={() => setMed('sema')}
          className='py-3 px-3 rounded-xl text-sm font-semibold transition-all'
          style={{
            backgroundColor: med === 'sema' ? '#FFFFFF' : 'transparent',
            color: med === 'sema' ? '#2D0E2D' : 'rgba(255,255,255,0.7)',
          }}
        >
          <div className='font-bold'>Semaglutide</div>
          <div className='text-[10px] opacity-75'>(Ozempic, Wegovy)</div>
          <div className='text-[10px] opacity-75 mt-0.5'>{COST_DATA.sema.startingPrice}</div>
        </button>
        <button
          type='button'
          onClick={() => setMed('tirz')}
          className='py-3 px-3 rounded-xl text-sm font-semibold transition-all'
          style={{
            backgroundColor: med === 'tirz' ? '#FFFFFF' : 'transparent',
            color: med === 'tirz' ? '#2D0E2D' : 'rgba(255,255,255,0.7)',
          }}
        >
          <div className='font-bold'>Tirzepatide</div>
          <div className='text-[10px] opacity-75'>(Mounjaro, Zepbound)</div>
          <div className='text-[10px] opacity-75 mt-0.5'>{COST_DATA.tirz.startingPrice}</div>
        </button>
      </div>

      {/* Cost-tier rows (3 stacked, each colored differently) */}
      <div className='space-y-2.5 mb-4'>
        <CostRow label='Retail Pharmacy' value={`from ${data.retailYearly}`} bg='#FCE4DC' fg='#B14739' />
        <CostRow label='Telehealth (Brand)' value={`from ${data.telehealthYearly}`} bg='#FFF4D6' fg='#8A6D1A' />
        <CostRow label='Compounded Options' value={`from ${data.compoundedYearly}`} bg='#D8F1E0' fg='#1F6B3D' />
      </div>

      {/* Savings callout */}
      <div
        className='rounded-xl p-3 mb-4 flex items-start gap-2.5'
        style={{ backgroundColor: 'rgba(95, 191, 170, 0.14)', border: '1px solid rgba(95, 191, 170, 0.4)' }}
      >
        <TrendingUp className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#5FBFAA' }} />
        <div>
          <div className='text-sm font-semibold' style={{ color: '#A9E5D1' }}>
            Potential savings of {data.potentialSavings}
          </div>
          <div className='text-xs mt-0.5' style={{ color: 'rgba(255,255,255,0.6)' }}>
            Compare {data.providerCount}+ providers to find the best price for your situation
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href='/tools/cost-calculator'
        className='block w-full text-center py-3.5 rounded-xl font-bold transition-all hover:-translate-y-0.5 shadow-lg'
        style={{
          backgroundColor: '#F47C5B',
          color: '#FFFFFF',
        }}
      >
        Calculate Your Costs
      </Link>
    </div>
  );
}

function CostRow({ label, value, bg, fg }: { label: string; value: string; bg: string; fg: string }) {
  return (
    <div
      className='flex items-center justify-between rounded-xl px-4 py-3'
      style={{ backgroundColor: bg, color: fg }}
    >
      <span className='text-sm font-semibold'>{label}</span>
      <span className='text-sm font-bold'>{value}</span>
    </div>
  );
}
