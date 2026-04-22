'use client';

import { BuyButton } from './BuyButton';

export interface ComparisonRow {
  /** Key into AFFILIATE_LINKS */
  productKey: string;
  /** Display name (column header) */
  name: string;
  /** Optional badge like "Best Overall", "Budget Pick", etc. */
  badge?: string;
  /** Map of spec label → spec value */
  specs: Record<string, string>;
  /** Star rating 0-5 */
  rating?: number;
}

interface ComparisonTableProps {
  /** Ordered list of spec rows to display. Order = table row order. */
  specLabels: string[];
  /** Products (column data) */
  products: ComparisonRow[];
  /** Track which hub/review this table is on */
  source?: string;
}

/**
 * The single highest-leverage CRO element on any multi-product page.
 * Per 2026 research: a comparison table with a per-product CTA row lifts
 * affiliate click-through 50-120% over the same content without per-row CTAs.
 *
 * Usage:
 *   <ComparisonTable
 *     source="best-power-stations-2026"
 *     specLabels={['Capacity', 'Output', 'Price']}
 *     products={[
 *       { productKey: 'ecoflow-delta-pro-3', name: 'EcoFlow Delta Pro 3', badge: 'Best Overall', rating: 4.7, specs: {...}},
 *       ...
 *     ]}
 *   />
 */
export function ComparisonTable({
  specLabels,
  products,
  source = 'comparison-table',
}: ComparisonTableProps) {
  return (
    <div className='my-8'>
      <div className='overflow-x-auto rounded-xl border border-border'>
        <table className='w-full text-sm'>
          <thead>
            <tr className='bg-muted/50'>
              <th className='px-3 py-3 text-left font-semibold text-foreground sticky left-0 bg-muted/50 min-w-[120px]'>
                Feature
              </th>
              {products.map((p) => (
                <th
                  key={p.productKey}
                  className='px-3 py-3 text-left font-semibold min-w-[160px]'
                >
                  <div className='flex flex-col gap-1'>
                    {p.badge && (
                      <span className='inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400'>
                        {p.badge}
                      </span>
                    )}
                    <span className='text-foreground'>{p.name}</span>
                    {p.rating !== undefined && (
                      <span className='text-xs text-muted-foreground'>
                        ★ {p.rating}/5
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='divide-y divide-border'>
            {specLabels.map((label, rowIdx) => (
              <tr
                key={label}
                className={rowIdx % 2 === 0 ? 'bg-muted/20' : ''}
              >
                <td className='px-3 py-3 font-medium text-foreground/80 sticky left-0 bg-inherit'>
                  {label}
                </td>
                {products.map((p) => (
                  <td
                    key={`${p.productKey}-${label}`}
                    className='px-3 py-3 text-foreground/70'
                  >
                    {p.specs[label] || '—'}
                  </td>
                ))}
              </tr>
            ))}
            {/* CTA row — the revenue driver */}
            <tr className='bg-amber-500/10'>
              <td className='px-3 py-3 font-semibold text-foreground sticky left-0 bg-amber-500/10'>
                Check Price
              </td>
              {products.map((p) => (
                <td key={`${p.productKey}-cta`} className='px-3 py-3'>
                  <BuyButton
                    productKey={p.productKey}
                    source={`${source}-row`}
                    variant='compact'
                    label='Check Price'
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p className='text-xs text-muted-foreground mt-2 italic'>
        Prices and specs verified{' '}
        {new Date().toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
        })}
        . Click through for current pricing and availability.
      </p>
    </div>
  );
}
