'use client';

import { useState } from 'react';
import { calculateBillComparison } from '@/lib/bill-comparison';
import { ToolReportRequest } from './ToolReportRequest';

type BillValues = {
  currentBillingDays: string;
  priorBillingDays: string;
  currentKwh: string;
  priorKwh: string;
  currentElectricCharges: string;
  priorElectricCharges: string;
};

const emptyValues: BillValues = {
  currentBillingDays: '',
  priorBillingDays: '',
  currentKwh: '',
  priorKwh: '',
  currentElectricCharges: '',
  priorElectricCharges: '',
};

const number = (value: number, digits = 2) =>
  new Intl.NumberFormat('en-US', {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

const currency = (value: number, digits = 2) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function signed(value: number, suffix: string) {
  return `${value > 0 ? '+' : ''}${number(value)}${suffix}`;
}

function percent(value: number | null) {
  return value === null ? 'Not shown' : `${value > 0 ? '+' : ''}${number(value, 1)}%`;
}

function readRequired(values: BillValues, field: keyof BillValues, label: string) {
  const raw = values[field].trim();
  if (!raw) throw new Error(`Enter ${label}.`);
  return Number(raw);
}

export function BillComparison({ utilityName = 'PG&E' }: { utilityName?: string }) {
  const [values, setValues] = useState<BillValues>(emptyValues);
  const [error, setError] = useState('');
  const [result, setResult] = useState<ReturnType<
    typeof calculateBillComparison
  > | null>(null);
  const inputClass =
    'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-900';
  const field = (
    key: keyof BillValues,
    label: string,
    group: string,
    minimum?: string,
  ) => (
    <label className="text-sm font-medium" key={key}>
      <span className="block text-slate-700">{group}</span>
      {label}
      <input
        className={inputClass}
        type="number"
        inputMode="decimal"
        step="any"
        min={minimum}
        value={values[key]}
        onChange={(event) => {
          setResult(null);
          setValues({ ...values, [key]: event.target.value });
        }}
      />
    </label>
  );

  return (
    <section
      id="bill-comparison"
      className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-8"
    >
      <h2 className="text-2xl font-bold">Compare two {utilityName} bills</h2>
      <p className="mt-2 text-slate-700">
        Enter the billing days, total kWh and current electric charges from a
        current bill and a prior bill. Blank fields stay blank; this is
        arithmetic only and does not diagnose a rate plan or cause of a change.
      </p>
      <p className="mt-2 text-sm text-slate-600">
        Use the current-electric-charges line rather than the total account
        balance. Credits can make that charge negative.
      </p>
      <form
        className="mt-5 grid gap-4 md:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          setError('');
          setResult(null);
          try {
            setResult(
              calculateBillComparison({
                currentBillingDays: readRequired(
                  values,
                  'currentBillingDays',
                  'current billing days',
                ),
                priorBillingDays: readRequired(
                  values,
                  'priorBillingDays',
                  'prior billing days',
                ),
                currentKwh: readRequired(values, 'currentKwh', 'current kWh'),
                priorKwh: readRequired(values, 'priorKwh', 'prior kWh'),
                currentElectricCharges: readRequired(
                  values,
                  'currentElectricCharges',
                  'current electric charges',
                ),
                priorElectricCharges: readRequired(
                  values,
                  'priorElectricCharges',
                  'prior electric charges',
                ),
              }),
            );
          } catch (cause) {
            setError(cause instanceof Error ? cause.message : 'Check your inputs.');
          }
        }}
      >
        {field('currentBillingDays', 'Billing days', 'Current bill', '0.01')}
        {field('priorBillingDays', 'Billing days', 'Prior bill', '0.01')}
        {field('currentKwh', 'Total electricity use (kWh)', 'Current bill', '0')}
        {field('priorKwh', 'Total electricity use (kWh)', 'Prior bill', '0')}
        {field('currentElectricCharges', 'Current electric charges ($)', 'Current bill')}
        {field('priorElectricCharges', 'Current electric charges ($)', 'Prior bill')}
        <button className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white md:col-span-2">
          Compare without contact details
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-4 text-red-800">
          {error}
        </p>
      )}
      {result && (
        <div role="status" className="mt-6 space-y-5 rounded-xl bg-white p-5">
          <h3 className="text-lg font-bold">Daily comparison</h3>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-slate-600">Current electricity use</dt>
              <dd className="mt-1 text-xl font-bold">{number(result.currentKwhPerDay)} kWh/day</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Prior electricity use</dt>
              <dd className="mt-1 text-xl font-bold">{number(result.priorKwhPerDay)} kWh/day</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Current electric charges</dt>
              <dd className="mt-1 text-xl font-bold">{currency(result.currentChargesPerDay)}/day</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Prior electric charges</dt>
              <dd className="mt-1 text-xl font-bold">{currency(result.priorChargesPerDay)}/day</dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Daily use difference</dt>
              <dd className="mt-1 text-xl font-bold">
                {signed(result.kwhPerDayDifference, ' kWh/day')}
              </dd>
              <p className="mt-1 text-sm text-slate-600">
                Absolute difference: {number(result.absoluteKwhPerDayDifference)} kWh/day · Percent: {percent(result.kwhPerDayPercentChange)}
              </p>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Daily charge difference</dt>
              <dd className="mt-1 text-xl font-bold">
                {currency(result.chargesPerDayDifference)}/day
              </dd>
              <p className="mt-1 text-sm text-slate-600">
                Absolute difference: {currency(result.absoluteChargesPerDayDifference)}/day · Percent: {percent(result.chargesPerDayPercentChange)}
              </p>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Current blended charges per kWh</dt>
              <dd className="mt-1 text-xl font-bold">
                {result.currentBlendedChargesPerKwh === null
                  ? 'Not available when kWh is zero'
                  : `${currency(result.currentBlendedChargesPerKwh, 3)}/kWh`}
              </dd>
            </div>
            <div>
              <dt className="text-sm text-slate-600">Prior blended charges per kWh</dt>
              <dd className="mt-1 text-xl font-bold">
                {result.priorBlendedChargesPerKwh === null
                  ? 'Not available when kWh is zero'
                  : `${currency(result.priorBlendedChargesPerKwh, 3)}/kWh`}
              </dd>
            </div>
          </dl>
          <p className="text-sm text-slate-600">
            “Blended charges per kWh” divides the entered current electric
            charges by total bill kWh. It is not a tariff or an explanation for
            the difference between bills.
          </p>
        </div>
      )}
      {/* The comparison above is complete without contact details. This optional
          block is the only place the tool asks for any, and it is only rendered
          once a result exists. */}
      {result && (
        <ToolReportRequest
          sourceTool="bill_comparison"
          variant="bill"
          topic={`${utilityName} two-bill comparison`}
        />
      )}
    </section>
  );
}
