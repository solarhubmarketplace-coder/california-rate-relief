'use client';

import Link from 'next/link';
import { glp1Providers, GLP1Provider } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight } from 'lucide-react';

interface GLP1ComparisonTableProps {
  /** Override the heading text if needed */
  heading?: string;
  /** Override which providers display (default: all) */
  providers?: GLP1Provider[];
  /** Source identifier for affiliate-click tracking */
  source?: string;
}

function trackTelehealthClick(payload: {
  provider: string;
  productKey: string;
  source: string;
}) {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
    posthog?: { capture?: (event: string, props: Record<string, unknown>) => void };
  };
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({
      event: 'telehealth_affiliate_click',
      provider: payload.provider,
      product_key: payload.productKey,
      affiliate_source: payload.source,
    });
  }
  if (w.posthog?.capture) {
    w.posthog.capture('telehealth_affiliate_click', {
      provider: payload.provider,
      product_key: payload.productKey,
      affiliate_source: payload.source,
    });
  }
}

export function GLP1ComparisonTable({
  heading = 'Compare Top GLP-1 Telehealth Providers (May 2026)',
  providers = glp1Providers,
  source = 'glp1-comparison-table',
}: GLP1ComparisonTableProps) {
  return (
    <div id='compare-table' className='max-w-7xl mx-auto px-6 py-12'>
      <h2 className='text-2xl md:text-3xl font-semibold text-center mb-3 text-slate-900'>
        {heading}
      </h2>
      <p className='text-sm text-center text-slate-500 mb-8 max-w-2xl mx-auto'>
        Pricing accurate as of May 2026. Click a provider to see current pricing and start a
        consultation. We may earn a commission — at no extra cost to you. See our{' '}
        <Link href='/affiliate-disclosure' className='text-teal-600 hover:underline'>
          affiliate disclosure
        </Link>
        .
      </p>

      <div className='overflow-x-auto'>
        <table className='w-full border-collapse bg-white rounded-3xl shadow-xl overflow-hidden'>
          <thead>
            <tr className='bg-slate-900 text-white'>
              <th className='px-6 md:px-8 py-5 md:py-6 text-left font-medium'>Provider</th>
              <th className='px-4 md:px-6 py-5 md:py-6 text-center font-medium'>Monthly Price</th>
              <th className='px-4 md:px-6 py-5 md:py-6 text-center font-medium hidden md:table-cell'>
                Medication Types
              </th>
              <th className='px-4 md:px-6 py-5 md:py-6 text-center font-medium'>Rating</th>
              <th className='px-4 md:px-8 py-5 md:py-6 text-right font-medium'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-200'>
            {providers.map((p) => (
              <tr key={p.productKey} className='hover:bg-teal-50 transition-colors'>
                <td className='px-6 md:px-8 py-6 md:py-8 align-top'>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2 flex-wrap'>
                      <span className='font-semibold text-slate-900'>{p.name}</span>
                      {p.badge && (
                        <span className='text-[10px] uppercase tracking-wider font-bold bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full whitespace-nowrap'>
                          {p.badge}
                        </span>
                      )}
                    </div>
                    {p.tagline && (
                      <span className='text-xs text-slate-500'>{p.tagline}</span>
                    )}
                    <span className='text-xs text-slate-500 md:hidden mt-1'>
                      {p.medications}
                    </span>
                  </div>
                </td>
                <td className='px-4 md:px-6 py-6 md:py-8 text-center'>
                  <span
                    className={
                      p.badge === 'Best Overall'
                        ? 'text-xl md:text-2xl font-bold text-teal-600 whitespace-nowrap'
                        : 'text-xl md:text-2xl font-bold text-slate-900 whitespace-nowrap'
                    }
                  >
                    {p.monthlyPrice}
                  </span>
                </td>
                <td className='px-4 md:px-6 py-6 md:py-8 text-center text-sm text-slate-700 hidden md:table-cell'>
                  {p.medications}
                </td>
                <td className='px-4 md:px-6 py-6 md:py-8 text-center'>
                  <div className='flex flex-col items-center gap-1'>
                    <span className='text-amber-400 text-base'>{p.starsDisplay}</span>
                    <span className='text-xs font-semibold text-slate-700'>
                      {p.rating.toFixed(1)}
                    </span>
                  </div>
                </td>
                <td className='px-4 md:px-8 py-6 md:py-8 text-right'>
                  <Link
                    href={buildAffiliateUrl(p.productKey, source)}
                    target='_blank'
                    rel='sponsored nofollow noopener noreferrer'
                    onClick={() =>
                      trackTelehealthClick({
                        provider: p.name,
                        productKey: p.productKey,
                        source,
                      })
                    }
                    className='inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-700 text-white px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg whitespace-nowrap text-sm md:text-base'
                  >
                    View Best Offer
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className='text-xs text-center text-slate-500 mt-4'>
        Pricing and availability current as of May 2026. We earn a commission if you sign up
        through our links — at no additional cost to you. See our{' '}
        <Link href='/methodology' className='text-teal-600 hover:underline'>
          methodology
        </Link>{' '}
        for how we evaluate providers.
      </p>
    </div>
  );
}
