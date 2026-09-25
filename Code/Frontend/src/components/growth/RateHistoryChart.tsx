// =============================================================================
// RateHistoryChart — server-rendered SVG line chart of the residential average
// rates the rate tracker already publishes (plan 7.6, G-57/G-79).
//
// Presentation only: every figure comes in through props from
// RATE_HISTORY_SNAPSHOTS in src/data/utility-rate-tracker.ts, which carries the
// source report for each snapshot. No client JavaScript: the hover layer is
// the SVG <title> on each point, and the same figures are in the page's
// rate-history table, which the caption points to.
//
// Colors: the dataviz reference categorical slots 1-3 (blue, orange, aqua),
// validated on a white surface with scripts/validate_palette.js (all pairs:
// CVD dE >= 9.2, normal-vision dE >= 24). Aqua is under 3:1 against white, so
// every line carries a direct end label and a legend entry, never color alone.
// =============================================================================

import type { ReactNode } from 'react';

export interface RateHistorySeries {
  /** Utility name as printed, e.g. "PG&E". */
  name: string;
  /** One value per snapshot, cents per kWh; null where no figure is published. */
  values: (number | null)[];
}

export interface RateHistoryPoint {
  /** Short axis label, e.g. "Jun 2025". */
  label: string;
  /** Long label for the point's tooltip, e.g. "June 2025 (as of July 1, 2025)". */
  longLabel: string;
  /** Months since the first snapshot, so the x spacing follows the calendar. */
  month: number;
}

const COLORS = ['#2a78d6', '#eb6834', '#1baf7a'];
const W = 480;
const H = 300;
const M = { top: 18, right: 104, bottom: 46, left: 40 };

function fmt(v: number) {
  return `${v.toFixed(1)}¢`;
}

export function RateHistoryChart({
  id,
  title,
  description,
  points,
  series,
  tableHref,
  sourceNote,
}: {
  id: string;
  title: string;
  description: string;
  points: RateHistoryPoint[];
  series: RateHistorySeries[];
  /** In-page link to the table that holds the same figures. */
  tableHref: string;
  sourceNote: ReactNode;
}) {
  const all = series.flatMap((s) => s.values.filter((v): v is number => v !== null));
  if (!all.length || points.length < 2) return null;
  const yMin = Math.floor(Math.min(...all) / 5) * 5 - 5;
  const yMax = Math.ceil(Math.max(...all) / 5) * 5;
  const ticks: number[] = [];
  for (let t = yMin; t <= yMax; t += 5) ticks.push(t);
  const plotW = W - M.left - M.right;
  const plotH = H - M.top - M.bottom;
  const lastMonth = points[points.length - 1].month;
  const x = (month: number) => M.left + (month / lastMonth) * plotW;
  const y = (v: number) => M.top + (1 - (v - yMin) / (yMax - yMin)) * plotH;

  // End labels, nudged apart so two close lines never overprint (min 16px).
  const ends = series
    .map((s, i) => {
      const last = [...s.values].reverse().find((v): v is number => v !== null);
      return last === undefined ? null : { i, name: s.name, value: last, y: y(last) };
    })
    .filter((e): e is { i: number; name: string; value: number; y: number } => e !== null)
    .sort((a, b) => a.y - b.y);
  for (let k = 1; k < ends.length; k++) {
    if (ends[k].y - ends[k - 1].y < 16) ends[k].y = ends[k - 1].y + 16;
  }

  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  return (
    <figure className='not-prose my-8 rounded-xl border border-border bg-white p-4 sm:p-5' aria-labelledby={titleId}>
      <p id={titleId} className='m-0 text-base font-semibold text-foreground'>
        {title}
      </p>
      <ul className='m-0 mt-2 flex list-none flex-wrap gap-x-5 gap-y-1 p-0 text-sm text-foreground/80' aria-hidden='true'>
        {series.map((s, i) => (
          <li key={s.name} className='flex items-center gap-2'>
            <span className='inline-block h-[3px] w-5 rounded' style={{ backgroundColor: COLORS[i % COLORS.length] }} />
            {s.name}
          </li>
        ))}
      </ul>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role='img'
        aria-labelledby={`${titleId} ${descId}`}
        className='mt-2 h-auto w-full max-w-[640px]'
        style={{ fontFamily: 'inherit' }}
      >
        <title>{title}</title>
        <desc id={descId}>{description}</desc>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={M.left} x2={W - M.right} y1={y(t)} y2={y(t)} stroke='#e1e0d9' strokeWidth={1} />
            <text x={M.left - 6} y={y(t)} textAnchor='end' dominantBaseline='middle' fontSize={12} fill='#56666C'>
              {t}¢
            </text>
          </g>
        ))}
        {points.map((p) => {
          // "Jan 2026" as two lines, so snapshots two months apart never collide.
          const [mon, yr] = p.label.split(' ');
          return (
            <text key={p.label} x={x(p.month)} y={H - M.bottom + 16} textAnchor='middle' fontSize={12} fill='#56666C'>
              <tspan x={x(p.month)}>{mon}</tspan>
              {yr && (
                <tspan x={x(p.month)} dy={14}>
                  {yr}
                </tspan>
              )}
            </text>
          );
        })}
        {series.map((s, i) => {
          const color = COLORS[i % COLORS.length];
          const pts = s.values
            .map((v, k) => (v === null ? null : { v, k }))
            .filter((p): p is { v: number; k: number } => p !== null);
          const d = pts.map((p, n) => `${n ? 'L' : 'M'}${x(points[p.k].month).toFixed(1)},${y(p.v).toFixed(1)}`).join(' ');
          return (
            <g key={s.name}>
              <path d={d} fill='none' stroke={color} strokeWidth={2} strokeLinejoin='round' strokeLinecap='round' />
              {pts.map((p) => (
                <circle key={p.k} cx={x(points[p.k].month)} cy={y(p.v)} r={4.5} fill={color} stroke='#ffffff' strokeWidth={2}>
                  <title>{`${s.name}, ${points[p.k].longLabel}: ${fmt(p.v)} per kWh`}</title>
                </circle>
              ))}
            </g>
          );
        })}
        {ends.map((e) => (
          <text key={e.name} x={W - M.right + 10} y={e.y} dominantBaseline='middle' fontSize={12.5} fill='#12191C'>
            <tspan fontWeight={600}>{e.name}</tspan> {fmt(e.value)}
          </text>
        ))}
      </svg>
      <figcaption className='mt-3 text-xs leading-relaxed text-muted-foreground'>
        {sourceNote}{' '}
        <a href={tableHref} className='text-primary underline underline-offset-2'>
          The same figures as a table
        </a>
        .
      </figcaption>
    </figure>
  );
}

export default RateHistoryChart;
