'use client';

import { useState, useMemo } from 'react';
import { DollarSign, Zap, Sun, TrendingDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Utility rate data (cents per kWh, as of 2026)
const UTILITY_DATA: Record<
  string,
  { name: string; rate: number; annualIncrease: number; label: string }
> = {
  sce: {
    name: 'Southern California Edison',
    rate: 0.345,
    annualIncrease: 0.06,
    label: 'SCE — 34.5¢/kWh',
  },
  sdge: {
    name: 'San Diego Gas & Electric',
    rate: 0.457,
    annualIncrease: 0.07,
    label: 'SDG&E — 45.7¢/kWh',
  },
  pge: {
    name: 'Pacific Gas & Electric',
    rate: 0.415,
    annualIncrease: 0.055,
    label: 'PG&E — 41.5¢/kWh',
  },
  mvu: {
    name: 'Moreno Valley Utility',
    rate: 0.32,
    annualIncrease: 0.04,
    label: 'MVU — 32¢/kWh',
  },
  rpu: {
    name: 'Riverside Public Utilities',
    rate: 0.28,
    annualIncrease: 0.035,
    label: 'RPU — 28¢/kWh',
  },
};

const PPA_RATE = 0.2; // 20¢/kWh fixed PPA rate
const PPA_ESCALATOR = 0.019; // 1.9% annual PPA escalator
const PEAK_SUN_HOURS = 5.5; // SoCal average
const SYSTEM_LOSS = 0.14; // 14% system losses (inverter, wiring, soiling)

interface SavingsCalculatorProps {
  /** Pre-select utility for the city page */
  defaultUtility?: string;
  /** City name to personalize the heading */
  cityName?: string;
}

export default function SavingsCalculator({
  defaultUtility = 'sce',
  cityName,
}: SavingsCalculatorProps) {
  const [monthlyBill, setMonthlyBill] = useState(300);
  const [utility, setUtility] = useState(defaultUtility);

  const results = useMemo(() => {
    const util = UTILITY_DATA[utility] || UTILITY_DATA.sce;
    const monthlyKwh = monthlyBill / util.rate;
    const annualKwh = monthlyKwh * 12;

    // System size needed
    const dailyKwh = annualKwh / 365;
    const systemKw = dailyKwh / (PEAK_SUN_HOURS * (1 - SYSTEM_LOSS));

    // Year 1 PPA cost
    const annualPpaCost = annualKwh * PPA_RATE;
    const monthlyPpaCost = annualPpaCost / 12;

    // Year 1 savings
    const year1Savings = monthlyBill * 12 - annualPpaCost;
    const monthlySavings = year1Savings / 12;
    const savingsPercent = Math.round((monthlySavings / monthlyBill) * 100);

    // 25-year cumulative comparison
    let totalUtilityCost = 0;
    let totalPpaCost = 0;
    let currentUtilityRate = util.rate;
    let currentPpaRate = PPA_RATE;

    for (let year = 1; year <= 25; year++) {
      const yearlyUtility = annualKwh * currentUtilityRate;
      const yearlyPpa = annualKwh * currentPpaRate;
      totalUtilityCost += yearlyUtility;
      totalPpaCost += yearlyPpa;
      currentUtilityRate *= 1 + util.annualIncrease;
      currentPpaRate *= 1 + PPA_ESCALATOR;
    }

    const totalSavings = totalUtilityCost - totalPpaCost;

    return {
      monthlyKwh: Math.round(monthlyKwh),
      systemKw: Math.round(systemKw * 10) / 10,
      monthlyPpaCost: Math.round(monthlyPpaCost),
      monthlySavings: Math.round(monthlySavings),
      savingsPercent,
      year1Savings: Math.round(year1Savings),
      totalSavings: Math.round(totalSavings),
      totalUtilityCost: Math.round(totalUtilityCost),
      totalPpaCost: Math.round(totalPpaCost),
      utilityName: util.name,
      utilityRate: util.rate,
    };
  }, [monthlyBill, utility]);

  const formatCurrency = (n: number) =>
    n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <div className="my-12 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-6 md:p-8 shadow-sm">
      {/* Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-3">
          <Zap className="h-3.5 w-3.5" />
          Interactive Calculator
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
          {cityName
            ? `How Much Could You Save in ${cityName}?`
            : 'How Much Could You Save With Solar?'}
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
          Adjust your bill and utility to see estimated PPA savings. No login required.
        </p>
      </div>

      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
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
            min={100}
            max={800}
            step={10}
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>$100</span>
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
            className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            {Object.entries(UTILITY_DATA).map(([key, u]) => (
              <option key={key} value={key}>
                {u.label}
              </option>
            ))}
          </select>
          <p className="text-xs text-muted-foreground mt-2">
            Current rate: {(UTILITY_DATA[utility]?.rate * 100).toFixed(1)}¢/kWh →
            PPA rate: {(PPA_RATE * 100).toFixed(0)}¢/kWh fixed
          </p>
        </div>
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <ResultCard
          icon={<TrendingDown className="h-5 w-5 text-green-600" />}
          label="Monthly Savings"
          value={formatCurrency(results.monthlySavings)}
          sublabel={`${results.savingsPercent}% less`}
          highlight
        />
        <ResultCard
          icon={<DollarSign className="h-5 w-5 text-primary" />}
          label="New Monthly Cost"
          value={formatCurrency(results.monthlyPpaCost)}
          sublabel="Fixed PPA rate"
        />
        <ResultCard
          icon={<Sun className="h-5 w-5 text-amber-500" />}
          label="System Size"
          value={`${results.systemKw} kW`}
          sublabel={`${results.monthlyKwh} kWh/mo`}
        />
        <ResultCard
          icon={<DollarSign className="h-5 w-5 text-green-600" />}
          label="25-Year Savings"
          value={formatCurrency(results.totalSavings)}
          sublabel="vs. staying with utility"
        />
      </div>

      {/* 25-year comparison bar */}
      <div className="bg-background rounded-xl p-5 border border-border mb-6">
        <p className="text-sm font-semibold text-foreground mb-3">25-Year Cost Comparison</p>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">{results.utilityName}</span>
              <span className="font-semibold text-red-600">{formatCurrency(results.totalUtilityCost)}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div className="bg-red-500 h-3 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-muted-foreground">Solar PPA (fixed rate)</span>
              <span className="font-semibold text-green-600">{formatCurrency(results.totalPpaCost)}</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div
                className="bg-green-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${Math.round((results.totalPpaCost / results.totalUtilityCost) * 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Assumes {((UTILITY_DATA[utility]?.annualIncrease || 0.06) * 100).toFixed(0)}% annual utility rate
          increases and {(PPA_ESCALATOR * 100).toFixed(1)}% PPA escalator. Actual savings vary by usage
          and rate tier.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/#qualify"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Check My Eligibility — Free, 60 Seconds
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="text-xs text-muted-foreground mt-2">
          No cost, no obligation. See if you qualify for the Rate Relief Program.
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
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sublabel: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 text-center border ${
        highlight
          ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950'
          : 'border-border bg-background'
      }`}
    >
      <div className="flex justify-center mb-2">{icon}</div>
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-lg md:text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{sublabel}</p>
    </div>
  );
}
