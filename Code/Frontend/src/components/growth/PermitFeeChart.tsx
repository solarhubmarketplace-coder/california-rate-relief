// =============================================================================
// PermitFeeChart — server-rendered SVG dot chart of the residential solar
// permit fees the California Solar Cost Index publishes, against the Gov. Code
// §66015 limit (plan 7.6, G-57/G-79).
//
// One dot per city with a published fee, stacked in $50 bins (right-closed, so
// a $450 fee sits at or below the limit line and $453 sits above it). Every
// number is computed from the index rows the page already renders; nothing is
// typed in. No client JavaScript: each dot carries an SVG <title> with the city
// and fee, and a table with the same data sits under the chart.
//
// Colors: dataviz reference slots 1 and 2 (blue, orange), validated on white
// with scripts/validate_palette.js (CVD dE 24.7, normal-vision dE 33.6, both
// >= 3:1). The legend names both groups, so color never carries it alone.
// =============================================================================

import type { ReactNode } from 'react';
import type { CostIndexRow } from '@/data/solar-cost-index';
import { formatUsd } from '@/data/solar-cost-index';

const BELOW = '#2a78d6';
const ABOVE = '#eb6834';
const BIN = 50;
const W = 480;
const M = { top: 34, right: 16, bottom: 40, left: 16 };
const R = 4.5;
const STEP = 11; // vertical distance between stacked dots (9px dot + 2px gap)

export function PermitFeeChart({
  id,
  rows,
  limitUsd,
  limitLabel,
  sourceNote,
}: {
  id: string;
  rows: CostIndexRow[];
  limitUsd: number;
  limitLabel: string;
  sourceNote: ReactNode;
}) {
  const fees = rows
    .filter((r) => r.fee.status === 'published' && r.fee.amountUsd !== null)
    .map((r) => ({ city: r.city, usd: r.fee.amountUsd as number, display: r.fee.amountDisplay as string }))
    .sort((a, b) => a.usd - b.usd || a.city.localeCompare(b.city));
  if (fees.length < 2) return null;

  const above = fees.filter((f) => f.usd > limitUsd);
  const atLimit = fees.filter((f) => f.usd === limitUsd).length;
  const maxUsd = Math.ceil(fees[fees.length - 1].usd / 200) * 200;
  const binOf = (usd: number) => Math.max(0, Math.ceil(usd / BIN) - 1); // right-closed bins
  const bins = new Map<number, typeof fees>();
  for (const f of fees) {
    const b = binOf(f.usd);
    bins.set(b, [...(bins.get(b) ?? []), f]);
  }
  const tallest = Math.max(...[...bins.values()].map((v) => v.length));
  const plotW = W - M.left - M.right;
  const plotH = tallest * STEP + 6;
  const H = M.top + plotH + M.bottom;
  const x = (usd: number) => M.left + (usd / maxUsd) * plotW;
  const baseY = M.top + plotH;
  const tickStep = maxUsd > 1000 ? 400 : 200;
  const ticks: number[] = [];
  for (let t = 0; t <= maxUsd; t += tickStep) ticks.push(t);
  // Label the tallest stack when it is the cluster sitting exactly on the limit.
  const limitBin = binOf(limitUsd);
  const limitStack = bins.get(limitBin) ?? [];

  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const title = `Published residential solar permit fees in ${fees.length} California cities, against the $${limitUsd} state limit`;
  const desc =
    `Dot chart, one dot per city, stacked in $${BIN} steps. ${fees.length - above.length} cities charge $${limitUsd} or less, ` +
    `${atLimit} of them exactly $${limitUsd}. ${above.length} charge more: ` +
    above.map((f) => `${f.city} ${f.display}`).join(', ') +
    `. Fees run from ${fees[0].display} to ${fees[fees.length - 1].display}.`;

  return (
    <figure className='not-prose my-8 max-w-3xl rounded-xl border border-border bg-white p-4 sm:p-5' aria-labelledby={titleId}>
      <p id={titleId} className='m-0 text-base font-semibold text-foreground'>
        {title}
      </p>
      <ul className='m-0 mt-2 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 text-sm text-foreground/80'>
        <li className='flex items-center gap-2'>
          <span aria-hidden='true' className='inline-block h-2.5 w-2.5 rounded-full' style={{ backgroundColor: BELOW }} />
          At or below ${limitUsd}: {fees.length - above.length} cities
        </li>
        <li className='flex items-center gap-2'>
          <span aria-hidden='true' className='inline-block h-2.5 w-2.5 rounded-full' style={{ backgroundColor: ABOVE }} />
          Above ${limitUsd}: {above.length} cities
        </li>
      </ul>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role='img'
        aria-labelledby={`${titleId} ${descId}`}
        className='mt-2 h-auto w-full max-w-[640px]'
        style={{ fontFamily: 'inherit' }}
      >
        <title>{title}</title>
        <desc id={descId}>{desc}</desc>
        <line x1={M.left} x2={W - M.right} y1={baseY} y2={baseY} stroke='#c3c2b7' strokeWidth={1} />
        {ticks.map((t) => (
          <text key={t} x={x(t)} y={baseY + 18} textAnchor={t === 0 ? 'start' : t === maxUsd ? 'end' : 'middle'} fontSize={12} fill='#56666C'>
            {t === 0 ? '$0' : `$${t.toLocaleString('en-US')}`}
          </text>
        ))}
        <line x1={x(limitUsd)} x2={x(limitUsd)} y1={M.top - 14} y2={baseY} stroke='#12191C' strokeWidth={1.25} strokeDasharray='4 3' />
        <text x={x(limitUsd) + 6} y={M.top - 16} fontSize={12} fill='#12191C'>
          {limitLabel}
        </text>
        {atLimit > 1 && limitStack.length === tallest && (
          <text x={x(limitUsd) + 8} y={baseY - 6 - (limitStack.length - 1) * STEP} dominantBaseline='middle' fontSize={12} fill='#12191C'>
            &larr; {atLimit} of these charge exactly ${limitUsd}
          </text>
        )}
        {[...bins.entries()].map(([b, list]) =>
          list.map((f, k) => (
            <circle
              key={`${f.city}-${f.usd}`}
              cx={x(b * BIN + BIN / 2)}
              cy={baseY - 6 - k * STEP}
              r={R}
              fill={f.usd > limitUsd ? ABOVE : BELOW}
              stroke='#ffffff'
              strokeWidth={1.5}
            >
              <title>{`${f.city}: ${f.display}`}</title>
            </circle>
          )),
        )}
      </svg>
      <figcaption className='mt-3 text-xs leading-relaxed text-muted-foreground'>{sourceNote}</figcaption>
      <details className='mt-3 text-sm'>
        <summary className='cursor-pointer font-semibold text-primary'>The chart as a table</summary>
        <div className='mt-2 overflow-x-auto'>
          <table className='w-full border-collapse text-sm'>
            <caption className='sr-only'>{title}</caption>
            <thead>
              <tr className='border-b border-border text-left'>
                <th scope='col' className='py-1.5 pr-4'>City</th>
                <th scope='col' className='py-1.5 pr-4'>Published fee</th>
                <th scope='col' className='py-1.5'>Against the ${limitUsd} limit</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={`${f.city}-${f.usd}`} className='border-b border-border/60'>
                  <td className='py-1.5 pr-4'>{f.city}</td>
                  <td className='py-1.5 pr-4'>{formatUsd(f.usd)}</td>
                  <td className='py-1.5'>{f.usd > limitUsd ? 'Above' : f.usd === limitUsd ? 'At the limit' : 'Below'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}

export default PermitFeeChart;
