'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { glp1Providers } from '@/lib/glp1-providers';
import { Calculator, Calendar, DollarSign, Pill, ArrowRight, ShieldCheck } from 'lucide-react';

// ============================================================
// Titration schedules (from glp1-medications.ts dosingSchedule)
// ============================================================

interface TitrationStep {
  weeks: number; // duration this dose is held (weeks)
  dose: string;
  phase: 'Initiation' | 'Titration' | 'Maintenance';
}

const SEMA_TITRATION: TitrationStep[] = [
  { weeks: 4, dose: '0.25 mg', phase: 'Initiation' },
  { weeks: 4, dose: '0.5 mg',  phase: 'Titration' },
  { weeks: 4, dose: '1.0 mg',  phase: 'Titration' },
  { weeks: 4, dose: '1.7 mg',  phase: 'Titration' },
  { weeks: 36, dose: '2.4 mg', phase: 'Maintenance' },
];

const TIRZ_TITRATION: TitrationStep[] = [
  { weeks: 4, dose: '2.5 mg',  phase: 'Initiation' },
  { weeks: 4, dose: '5 mg',    phase: 'Titration' },
  { weeks: 4, dose: '7.5 mg',  phase: 'Titration' },
  { weeks: 4, dose: '10 mg',   phase: 'Titration' },
  { weeks: 4, dose: '12.5 mg', phase: 'Titration' },
  { weeks: 28, dose: '15 mg',  phase: 'Maintenance' },
];

// ============================================================
// Page
// ============================================================

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'GLP-1 Cost Calculator',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  url: 'https://glp1comparehub.com/tools/cost-calculator',
  description: 'Interactive tool that estimates 12-month GLP-1 medication cost based on provider, dose schedule, and titration plan.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

export default function CostCalculatorPage() {
  const [medication, setMedication] = useState<'sema' | 'tirz'>('tirz');
  const [providerSlug, setProviderSlug] = useState<string>('skinnyrx');
  const [duration, setDuration] = useState<3 | 6 | 9 | 12>(12);

  const provider = useMemo(() => glp1Providers.find((p) => p.slug === providerSlug), [providerSlug]);

  // Estimate monthly price as midpoint of provider.monthlyPrice (heuristic)
  const monthlyEstimate = useMemo(() => extractMonthlyEstimate(provider?.monthlyPrice), [provider]);

  const result = useMemo(
    () => buildSchedule({ medication, monthlyEstimate, durationMonths: duration }),
    [medication, monthlyEstimate, duration]
  );

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Disclaimer:</strong> Estimates only. Actual prices may vary. Always confirm pricing on
          the provider&rsquo;s site.
        </div>
      </div>

      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Cost Calculator</span>
            </nav>

            <h1
              className='text-3xl md:text-5xl font-bold mb-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              GLP-1 Cost Calculator
            </h1>
            <p className='text-base md:text-lg max-w-3xl' style={{ color: '#3D5560' }}>
              Estimate your 12-month GLP-1 medication cost. Includes titration schedule, monthly
              dose, and cumulative spend.
            </p>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-5xl mx-auto px-4 md:px-6 grid lg:grid-cols-[1fr_1.4fr] gap-6'>
            {/* INPUTS */}
            <div
              className='bg-white rounded-2xl p-6 md:p-7 shadow-sm self-start sticky top-20'
              style={{ border: '1px solid #E5DDC8' }}
            >
              <h2
                className='text-xl font-bold mb-5'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <Calculator className='inline h-5 w-5 mr-1' style={{ color: '#D4A33A' }} />
                Inputs
              </h2>

              {/* Medication */}
              <Label>Medication</Label>
              <div className='grid grid-cols-2 gap-2 mb-5'>
                <ToggleButton active={medication === 'sema'} onClick={() => setMedication('sema')}>
                  Semaglutide<br/><span className='text-[10px] opacity-70'>(Wegovy)</span>
                </ToggleButton>
                <ToggleButton active={medication === 'tirz'} onClick={() => setMedication('tirz')}>
                  Tirzepatide<br/><span className='text-[10px] opacity-70'>(Zepbound)</span>
                </ToggleButton>
              </div>

              {/* Provider */}
              <Label>Provider</Label>
              <select
                value={providerSlug}
                onChange={(e) => setProviderSlug(e.target.value)}
                className='w-full mb-5 px-4 py-3 rounded-xl text-sm font-semibold appearance-none bg-white'
                style={{
                  border: '1.5px solid #E5DDC8',
                  color: '#0E2A3A',
                }}
              >
                {glp1Providers
                  .filter((p) => p.status === 'Active')
                  .map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name} {p.medicationType?.includes('Compounded') ? '(Compounded)' : ''}
                      {p.medicationType?.length === 1 && p.medicationType[0] === 'Brand Name' ? '(Branded)' : ''}
                    </option>
                  ))}
              </select>

              {/* Duration */}
              <Label>Treatment Duration</Label>
              <div className='grid grid-cols-4 gap-2'>
                {([3, 6, 9, 12] as const).map((d) => (
                  <ToggleButton key={d} active={duration === d} onClick={() => setDuration(d)} compact>
                    {d}mo
                  </ToggleButton>
                ))}
              </div>
            </div>

            {/* OUTPUTS */}
            <div className='space-y-5'>
              {/* Summary */}
              <div
                className='bg-white rounded-2xl p-6 md:p-7 shadow-sm'
                style={{ border: '1px solid #E5DDC8' }}
              >
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
                  <SummaryStat
                    icon={<DollarSign className='h-4 w-4' />}
                    label={`${duration}-Month Total`}
                    value={`$${result.total.toLocaleString()}`}
                    highlight
                  />
                  <SummaryStat
                    icon={<Calendar className='h-4 w-4' />}
                    label='Average Per Month'
                    value={`$${Math.round(result.total / duration).toLocaleString()}`}
                  />
                  <SummaryStat
                    icon={<Pill className='h-4 w-4' />}
                    label='Pricing Model'
                    value={result.model}
                  />
                </div>
              </div>

              {/* Month-by-month table */}
              <div
                className='bg-white rounded-2xl overflow-hidden shadow-sm'
                style={{ border: '1px solid #E5DDC8' }}
              >
                <div className='p-5' style={{ borderBottom: '1px solid #E5DDC8' }}>
                  <h3 className='font-bold' style={{ color: '#0E2A3A' }}>
                    Month-by-Month Breakdown
                  </h3>
                </div>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr style={{ backgroundColor: '#F8F4ED' }}>
                        <Th>Month</Th>
                        <Th>Phase</Th>
                        <Th>Dose</Th>
                        <Th right>Cost</Th>
                        <Th right>Cumulative</Th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.schedule.slice(0, duration).map((row) => (
                        <tr key={row.month} className='border-t' style={{ borderColor: '#E5DDC8' }}>
                          <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
                            Month {row.month}
                          </td>
                          <td className='px-5 py-3'>
                            <PhaseTag phase={row.phase} />
                          </td>
                          <td className='px-5 py-3' style={{ color: '#3D5560' }}>{row.dose}</td>
                          <td className='px-5 py-3 text-right font-semibold' style={{ color: '#D4A33A' }}>
                            ${row.cost.toLocaleString()}
                          </td>
                          <td className='px-5 py-3 text-right font-bold' style={{ color: '#0E2A3A' }}>
                            ${row.cumulative.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* What's included */}
              <div
                className='bg-white rounded-2xl p-6 md:p-7 shadow-sm'
                style={{ border: '1px solid #E5DDC8' }}
              >
                <h3 className='font-bold mb-4' style={{ color: '#0E2A3A' }}>
                  What&rsquo;s Typically Included at {provider?.name ?? 'this provider'}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {(provider?.consultIncluded || true) && <Badge>✓ Consultation</Badge>}
                  {<Badge>✓ Shipping</Badge>}
                  {<Badge>✓ Supplies (syringes/needles)</Badge>}
                  {provider?.labsIncluded && <Badge>✓ Lab Work</Badge>}
                  {!provider?.labsIncluded && <Badge dim>✗ Lab Work (not included)</Badge>}
                </div>
              </div>

              {/* Educational: titration explainer */}
              <div
                className='bg-white rounded-2xl p-6 md:p-7 shadow-sm'
                style={{ border: '1px solid #E5DDC8' }}
              >
                <h3 className='font-bold mb-3' style={{ color: '#0E2A3A' }}>
                  About {medication === 'sema' ? 'Semaglutide' : 'Tirzepatide'} Titration
                </h3>
                <p className='text-sm mb-3' style={{ color: '#3D5560' }}>
                  GLP-1 medications are titrated up over time to minimize side effects. Most providers
                  use one of two pricing models:
                </p>
                <div className='space-y-2 text-sm' style={{ color: '#3D5560' }}>
                  <p>
                    <strong style={{ color: '#0E2A3A' }}>Flat Rate:</strong> Same monthly price regardless
                    of dose. Common at compounded providers (SkinnyRx, MEDVi, GobyMeds).
                  </p>
                  <p>
                    <strong style={{ color: '#0E2A3A' }}>Dose-Escalated:</strong> Price increases as you
                    move to higher doses. Common at branded GLP-1 (Wegovy, Zepbound, Ozempic).
                  </p>
                </div>
              </div>

              {/* Compounded vs Brand explainer */}
              <div
                className='rounded-2xl p-6 md:p-7'
                style={{ backgroundColor: '#F0EBE0', border: '1px solid #E5DDC8' }}
              >
                <div className='flex items-start gap-3'>
                  <ShieldCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#7CA982' }} />
                  <div>
                    <h3 className='font-bold mb-2' style={{ color: '#0E2A3A' }}>
                      Compounded vs Brand-Name
                    </h3>
                    <p className='text-sm' style={{ color: '#3D5560' }}>
                      Compounded GLP-1 (compounded semaglutide / tirzepatide) is produced by
                      state-licensed 503A and 503B compounding pharmacies under specific FDA exemptions.
                      It is NOT FDA-approved. It is typically 60-80% cheaper than branded equivalents
                      (Wegovy, Zepbound). Consult your prescriber about which is appropriate for you.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className='flex flex-wrap gap-3 pt-2'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md'
                  style={{ backgroundColor: '#D4A33A' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/providers'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ backgroundColor: 'white', color: '#0E2A3A', border: '1.5px solid #0E2A3A' }}
                >
                  Browse All Providers
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

// ============================================================
// Helper UI components
// ============================================================

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
      {children}
    </div>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
  compact = false,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`rounded-xl ${compact ? 'py-2.5' : 'py-3'} text-center text-sm font-semibold transition-all`}
      style={{
        backgroundColor: active ? '#D4A33A' : 'white',
        color: active ? 'white' : '#0E2A3A',
        border: active ? '1.5px solid #D4A33A' : '1.5px solid #E5DDC8',
      }}
    >
      {children}
    </button>
  );
}

function Th({ children, right = false }: { children: React.ReactNode; right?: boolean }) {
  return (
    <th
      className={`px-5 py-3 text-xs font-bold uppercase tracking-wider ${right ? 'text-right' : 'text-left'}`}
      style={{ color: '#6B7B82' }}
    >
      {children}
    </th>
  );
}

function PhaseTag({ phase }: { phase: 'Initiation' | 'Titration' | 'Maintenance' }) {
  const colors = {
    Initiation: { bg: '#E8DCC0', fg: '#7A6020' },
    Titration: { bg: '#F4EBD0', fg: '#7A6020' },
    Maintenance: { bg: '#D9E8D4', fg: '#2D5A3D' },
  };
  const c = colors[phase];
  return (
    <span
      className='inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full'
      style={{ backgroundColor: c.bg, color: c.fg }}
    >
      {phase}
    </span>
  );
}

function SummaryStat({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div className='text-[11px] font-bold uppercase tracking-widest mb-1 flex items-center gap-1' style={{ color: '#6B7B82' }}>
        {icon} {label}
      </div>
      <div
        className={`font-bold ${highlight ? 'text-2xl md:text-3xl' : 'text-xl'}`}
        style={{
          color: highlight ? '#D4A33A' : '#0E2A3A',
          fontFamily: highlight ? '"Playfair Display", "Georgia", serif' : undefined,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Badge({ children, dim = false }: { children: React.ReactNode; dim?: boolean }) {
  return (
    <span
      className='inline-block text-xs font-semibold px-3 py-1.5 rounded-full'
      style={{
        backgroundColor: dim ? '#EBE3D2' : '#D9E8D4',
        color: dim ? '#6B7B82' : '#2D5A3D',
      }}
    >
      {children}
    </span>
  );
}

// ============================================================
// Schedule builder
// ============================================================

function extractMonthlyEstimate(priceStr?: string): number {
  if (!priceStr) return 200;
  const nums = priceStr.match(/\$?(\d+)/g);
  if (!nums || nums.length === 0) return 200;
  const cleaned = nums.map((n) => parseInt(n.replace('$', ''), 10)).filter((n) => n > 50 && n < 3000);
  if (cleaned.length === 0) return 200;
  // Use midpoint or average
  const avg = cleaned.reduce((a, b) => a + b, 0) / cleaned.length;
  return Math.round(avg);
}

interface ScheduleRow {
  month: number;
  phase: 'Initiation' | 'Titration' | 'Maintenance';
  dose: string;
  cost: number;
  cumulative: number;
}

function buildSchedule({
  medication,
  monthlyEstimate,
  durationMonths,
}: {
  medication: 'sema' | 'tirz';
  monthlyEstimate: number;
  durationMonths: number;
}): { schedule: ScheduleRow[]; total: number; model: string } {
  const titration = medication === 'sema' ? SEMA_TITRATION : TIRZ_TITRATION;
  const schedule: ScheduleRow[] = [];

  // Convert week-based titration to month-based (1 month = 4 weeks for sim)
  let monthCounter = 1;
  let cumulative = 0;
  const totalMonthsNeeded = durationMonths;

  for (const step of titration) {
    const monthsAtThisDose = Math.ceil(step.weeks / 4);
    for (let i = 0; i < monthsAtThisDose && monthCounter <= totalMonthsNeeded; i++) {
      cumulative += monthlyEstimate;
      schedule.push({
        month: monthCounter,
        phase: step.phase,
        dose: step.dose,
        cost: monthlyEstimate,
        cumulative,
      });
      monthCounter++;
    }
    if (monthCounter > totalMonthsNeeded) break;
  }

  return {
    schedule,
    total: cumulative,
    model: 'Flat Rate',
  };
}
