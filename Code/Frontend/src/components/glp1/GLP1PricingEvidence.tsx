import { AlertTriangle, CheckCircle2, ExternalLink } from 'lucide-react';
import type { GLP1ProviderPriceRecord } from '@/lib/glp1-provider-pricing';

export function GLP1PricingEvidence({
  records,
  compact = false,
}: {
  records: readonly GLP1ProviderPriceRecord[];
  compact?: boolean;
}) {
  return (
    <div className='grid grid-cols-1 gap-5 lg:grid-cols-2'>
      {records.map((record) => (
        <article
          key={record.slug}
          className='flex h-full flex-col rounded-2xl bg-white p-5 shadow-sm md:p-6'
          style={{ border: '1px solid #E5DDC8' }}
        >
          <div className='mb-4 flex flex-wrap items-start justify-between gap-3'>
            <div>
              <h3 className='text-xl font-bold' style={{ color: '#0E2A3A' }}>
                {record.provider}
              </h3>
              <p className='mt-1 text-2xl font-extrabold' style={{ color: '#7A6020' }}>
                {record.headlinePrice}
              </p>
            </div>
            <span
              className='inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide'
              style={{
                backgroundColor:
                  record.publicPriceStatus === 'published' ? '#D9E8D4' : '#F4EBD0',
                color: record.publicPriceStatus === 'published' ? '#2D5A3D' : '#7A6020',
              }}
            >
              {record.publicPriceStatus === 'published' ? (
                <CheckCircle2 className='h-3.5 w-3.5' />
              ) : (
                <AlertTriangle className='h-3.5 w-3.5' />
              )}
              {record.publicPriceStatus === 'published' ? 'Price published' : 'Price unclear'}
            </span>
          </div>

          <div className='mb-4'>
            <h4 className='mb-2 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>
              What the provider page says
            </h4>
            <ul className='space-y-1.5 text-sm leading-relaxed' style={{ color: '#273F49' }}>
              {record.priceLines.map((line) => (
                <li key={line} className='flex gap-2'>
                  <span aria-hidden style={{ color: '#D4A33A' }}>•</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {!compact && (
            <div className='mb-4'>
              <h4 className='mb-2 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>
                Listed as included
              </h4>
              <p className='text-sm leading-relaxed' style={{ color: '#273F49' }}>
                {record.included.join(' · ')}
              </p>
            </div>
          )}

          <div
            className='mb-5 rounded-xl px-4 py-3 text-sm leading-relaxed'
            style={{ backgroundColor: '#F8F4ED', color: '#3D5560' }}
          >
            <strong style={{ color: '#0E2A3A' }}>Read before checkout:</strong>{' '}
            {record.caveat}
          </div>

          <div className='mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-xs' style={{ borderColor: '#E5DDC8' }}>
            <span style={{ color: '#6B7B82' }}>Checked {record.checkedOn}</span>
            <a
              href={record.sourceUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1.5 font-bold underline underline-offset-4'
              style={{ color: '#0F4D5C' }}
            >
              {record.sourceLabel}
              <ExternalLink className='h-3.5 w-3.5' aria-hidden />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
