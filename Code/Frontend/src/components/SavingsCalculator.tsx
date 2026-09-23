'use client';

import { useState, useMemo } from 'react';
import { DollarSign, Zap, CalendarClock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { intakeHrefForPath } from '@/lib/intake-routing';
import { getUtilityRate, Q2_2026_URL } from '@/data/utility-rate-tracker';

// =============================================================================
// Quote check calculator for the older /solar-savings/[city] and
// /solar-companies/[city] templates.
//
// 2026-09-23 compliance pass. The previous version assumed a 20¢/kWh PPA price,
// a 1.9% escalator, 6–7% yearly utility increases and 5.5 peak sun hours —
// none of them sourced — and printed "Monthly Savings", "% less" and
// "25-Year Savings" from those guesses. It also fell back to SCE's rate for
// any utility it did not list, so a SMUD or Glendale page showed SCE numbers.
//
// Now: the only rates shown are the CPUC Public Advocates Office averages in
// utility-rate-tracker.ts. The quote figures (first-year payment, escalator,
// term) are whatever the visitor's own contract says. The tool adds up the
// contract's payments; it produces no savings figure and no projection of
// future utility rates, because no primary source supports one.
// =============================================================================

const IOU_KEYS = ['sce', 'sdge', 'pge'] as const;
type IouKey = (typeof IOU_KEYS)[number];

/** CPUC Decision 24-05-028: $24.15 a month for customers not on CARE or FERA. */
const IOU_FIXED_CHARGE = 24.15;

function isIouKey(key: string): key is IouKey {
  return (IOU_KEYS as readonly string[]).includes(key);
}

interface SavingsCalculatorProps {
  /** Pre-select utility for the city page */
  defaultUtility?: string;
  /** City name to personalize the heading */
  cityName?: string;
}

const formatCurrency = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

function readNumber(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = Number(trimmed);
  return Number.isFinite(value) && value >= 0 ? value : null;
}

export default function SavingsCalculator({
  defaultUtility = 'sce',
  cityName,
}: SavingsCalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState(300);
  const [utility, setUtility] = useState<string>(isIouKey(defaultUtility) ? defaultUtility : 'other');
  const [payment, setPayment] = useState('');
  const [escalator, setEscalator] = useState('');
  const [term, setTerm] = useState('');
  const pathname = usePathname();
  const intakeHref = pathname ? intakeHrefForPath(pathname) : '/#qualify';

  const rate = isIouKey(utility) ? getUtilityRate(utility) : null;

  const usage = useMemo(() => {
    if (!rate || rate.averageResidentialRateCents === null) return null;
    const energyDollars = Math.max(monthlyBill - IOU_FIXED_CHARGE, 0);
    return Math.round(energyDollars / (rate.averageResidentialRateCents / 100));
  }, [monthlyBill, rate]);

  const contract = useMemo(() => {
    const first = readNumber(payment);
    const years = readNumber(term);
    const esc = readNumber(escalator) ?? 0;
    if (first === null || years === null || years < 1 || years > 40) return null;
    const wholeYears = Math.round(years);
    let total = 0;
    let monthly = first;
    for (let year = 1; year <= wholeYears; year++) {
      total += monthly * 12;
      if (year < wholeYears) monthly *= 1 + esc / 100;
    }
    return { first, finalMonthly: monthly, total, years: wholeYears, esc };
  }, [payment, escalator, term]);

  const inputClass =
    'w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50';

  return (
    <div className="my-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 md:p-8 shadow-sm">
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          <Zap className="h-3.5 w-3.5" />
          Quote check
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
          {cityName
            ? `Check a Solar Quote Against Your ${cityName} Bill`
            : 'Check a Solar Quote Against Your Bill'}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
          Enter your bill and the terms from a lease, PPA or loan quote. The
          tool adds up the contract&apos;s payments; it does not predict savings.
        </p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Bill slider */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Monthly Electric Bill
          </label>
          <div className="text-3xl font-bold text-primary mb-3">
            {formatCurrency(monthlyBill)}
            <span className="text-sm font-normal text-muted-foreground">/mo</span>
          </div>
          <input
            type="range"
            min={50}
            max={800}
            step={10}
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>$50</span>
            <span>$800</span>
          </div>
        </div>

        {/* Utility selector */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Your Utility Provider
          </label>
          <select
            value={utility}
            onChange={(e) => setUtility(e.target.value)}
            className={inputClass}
          >
            {IOU_KEYS.map((key) => (
              <option key={key} value={key}>
                {getUtilityRate(key).name}
              </option>
            ))}
            <option value="other">Other or publicly owned utility</option>
          </select>
          <p className="text-xs text-muted-foreground mt-2">
            {rate && rate.averageResidentialRateCents !== null ? (
              <>
                {rate.name} average residential rate:{' '}
                {rate.averageResidentialRateCents.toFixed(1)}¢/kWh as of{' '}
                {rate.asOf.replace(/ \(.*\)$/, '')} (
                <a href={Q2_2026_URL} target="_blank" rel="noopener noreferrer" className="underline">
                  CPUC Public Advocates Office
                </a>
                ). Your own rate plan may differ.
              </>
            ) : (
              'Publicly owned utilities set their own rates. Use the kWh and charges printed on your bill.'
            )}
          </p>
        </div>
      </div>

      {/* Quote inputs */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <label className="text-sm font-medium text-foreground">
          First-year monthly payment in the quote ($)
          <input
            className={`${inputClass} mt-1`}
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </label>
        <label className="text-sm font-medium text-foreground">
          Annual escalator in the quote (%)
          <input
            className={`${inputClass} mt-1`}
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            value={escalator}
            onChange={(e) => setEscalator(e.target.value)}
          />
        </label>
        <label className="text-sm font-medium text-foreground">
          Contract term (years)
          <input
            className={`${inputClass} mt-1`}
            type="number"
            inputMode="numeric"
            min={1}
            max={40}
            step={1}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <ResultCard
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          label="Your current bill"
          value={formatCurrency(monthlyBill)}
          sublabel="per month, as entered"
        />
        <ResultCard
          icon={<Zap className="h-5 w-5 text-amber-500" />}
          label="Rough monthly usage"
          value={usage === null ? 'See bill' : `${usage.toLocaleString('en-US')} kWh`}
          sublabel={usage === null ? 'kWh is printed on your bill' : 'bill less fixed charge ÷ avg rate'}
        />
        <ResultCard
          icon={<CalendarClock className="h-5 w-5 text-primary" />}
          label="Final-year payment"
          value={contract ? formatCurrency(contract.finalMonthly) : '—'}
          sublabel={contract ? `per month in year ${contract.years}` : 'enter payment and term'}
        />
        <ResultCard
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          label="Total contract payments"
          value={contract ? formatCurrency(contract.total) : '—'}
          sublabel={contract ? `${contract.years} years at ${contract.esc}% a year` : 'enter payment and term'}
        />
      </div>

      <div className="bg-background rounded-xl p-5 border border-border mb-6 text-xs text-muted-foreground space-y-2">
        <p>
          The contract totals come only from the numbers you entered. A lease
          or PPA payment does not replace your whole bill: you still pay the
          utility for power the system does not cover
          {isIouKey(utility)
            ? `, plus the $${IOU_FIXED_CHARGE.toFixed(2)} monthly fixed charge most PG&E, SCE and SDG&E customers pay under CPUC Decision 24-05-028 (about $6 on CARE and $12 on FERA)`
            : ''}
          . Ask the provider for its production estimate and add those
          remaining charges before comparing the quote with your current bill.
        </p>
        <p>
          The usage figure is a rough estimate from an average rate; the kWh on
          your own bill is more accurate.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href={intakeHref}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Request a solar review
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-muted-foreground mt-2">
          California Rate Relief is compensated by a solar provider when a
          homeowner we refer signs an agreement. A submission is not a quote,
          financing approval or program eligibility decision.
        </p>
      </div>
    </div>
  );
}

function ResultCard({
  icon,
  label,
  value,
  sublabel,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel: string;
}) {
  return (
    <div className="rounded-xl p-4 text-center border border-border bg-background">
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg md:text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  );
}
