'use client';
import { useEffect, useState } from 'react';
import { calculateSolarScenario } from '@/lib/solar-savings-engine';
import {
  saveCalculatorContext,
  readCalculatorContext,
  utilityOptions,
  type CalculatorContext,
} from '@/lib/calculator-context';
import { isCaliforniaZip } from '@/lib/ca-utility-by-zip';
const money = (n: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n);
export function SolarCalculator({ utility = '' }: { utility?: string }) {
  const [values, setValues] = useState<CalculatorContext>({
    utility,
    zip: '',
    monthlyBill: '',
    annualKwh: '',
    systemKw: '',
    solarPrice: '',
    batteryPrice: '',
    annualBillAfter: '',
  });
  const [result, setResult] = useState<ReturnType<
    typeof calculateSolarScenario
  > | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    const saved = readCalculatorContext();
    if (saved) setValues(saved);
  }, []);
  const inputClass =
    'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-slate-900';
  const fields: [keyof CalculatorContext, string, boolean][] = [
    ['zip', 'California ZIP', true],
    ['monthlyBill', 'Average monthly electricity bill ($)', true],
    ['annualKwh', 'Annual usage from your bills (kWh)', false],
    ['systemKw', 'Quoted solar size (kW DC)', false],
    ['solarPrice', 'Solar-only cash price ($)', false],
    ['batteryPrice', 'Battery cash price ($)', false],
    ['annualBillAfter', 'Quoted annual utility bill after solar ($)', false],
  ];
  return (
    <section
      id="calculator"
      className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-8"
    >
      <h2 className="text-2xl font-bold">
        Check the numbers in your bill and quote
      </h2>
      <p className="mt-2 text-slate-700">
        Start with your electricity bill. If you have a quote, add its system
        size, cash price and remaining utility bill. Leave unknown values blank.
        After changing values, calculate again to update the optional inquiry.
      </p>
      <form
        className="mt-5 grid gap-4 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          setError('');
          setResult(null);
          try {
            if (!isCaliforniaZip(values.zip))
              throw new Error(
                'Enter a California ZIP. Your bill confirms the utility; ZIP alone does not.',
              );
            const n = (value?: string) =>
              value?.trim() ? Number(value) : undefined;
            const next = calculateSolarScenario({
              monthlyBill: Number(values.monthlyBill),
              annualKwh: n(values.annualKwh),
              systemKw: n(values.systemKw),
              solarPrice: n(values.solarPrice),
              batteryPrice: n(values.batteryPrice),
              annualBillAfter: n(values.annualBillAfter),
            });
            setResult(next);
            saveCalculatorContext(values);
          } catch (cause) {
            setError(
              cause instanceof Error ? cause.message : 'Check your inputs.',
            );
          }
        }}
      >
        <label className="text-sm font-medium">
          Utility on your bill
          <select
            required
            className={inputClass}
            value={values.utility}
            onChange={(e) => {
              setResult(null);
              setValues({ ...values, utility: e.target.value });
            }}
          >
            <option value="">Choose utility</option>
            {utilityOptions.map(([id, label]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        {fields.map(([key, label, required]) => (
          <label key={key} className="text-sm font-medium">
            {label}
            {!required && ' (optional)'}
            <input
              required={required}
              type={key === 'zip' ? 'text' : 'number'}
              inputMode={key === 'zip' ? 'numeric' : 'decimal'}
              min={key === 'monthlyBill' ? '1' : '0'}
              step="any"
              maxLength={key === 'zip' ? 5 : undefined}
              pattern={key === 'zip' ? '[0-9]{5}' : undefined}
              className={inputClass}
              value={values[key] || ''}
              onChange={(e) => {
                setResult(null);
                setValues({ ...values, [key]: e.target.value });
              }}
            />
          </label>
        ))}
        <button className="rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white md:col-span-2">
          Calculate without contact details
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-4 text-red-800">
          {error}
        </p>
      )}
      {result && (
        <div role="status" className="mt-6 space-y-4 rounded-xl bg-white p-5">
          <h3 className="text-lg font-bold">Your comparison</h3>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              ['Current annual electricity bill', money(result.annualBill)],
              [
                'Bill average per kWh',
                result.blendedBillPerKwh === null
                  ? 'Add annual usage'
                  : `$${result.blendedBillPerKwh.toFixed(3)} (includes bill charges)`,
              ],
              [
                'Solar-only price per watt',
                result.solarPricePerWatt === null
                  ? 'Add size and solar cash price'
                  : `$${result.solarPricePerWatt.toFixed(2)}/W`,
              ],
              [
                'Solar + entered battery cash price',
                result.cashPrice === null
                  ? 'Add solar cash price'
                  : money(result.cashPrice),
              ],
              [
                'Annual bill difference',
                result.annualDifference === null
                  ? 'Add quoted remaining utility bill'
                  : money(result.annualDifference),
              ],
              [
                'Simple cash payback',
                result.simplePayback === null
                  ? 'Not established by these inputs'
                  : `${result.simplePayback.toFixed(1)} years`,
              ],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-sm text-slate-600">{label}</dt>
                <dd className="mt-1 text-xl font-bold">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="text-sm text-slate-600">
            Arithmetic from your inputs, not a production or savings forecast.
            Annual bill = monthly bill × 12. Price per watt excludes the
            battery. Simple payback = entered cash price ÷ positive annual bill
            difference. It excludes financing, maintenance, replacements,
            degradation, future rate changes and incentives. Your quoted
            remaining bill must include delivery, fixed charges and export
            credits. A zero battery entry does not mean storage is included.
          </p>
          <a
            href="#solar-inquiry"
            className="inline-block rounded-lg bg-emerald-800 px-4 py-3 font-semibold text-white"
          >
            Use these details in an optional inquiry
          </a>
        </div>
      )}
    </section>
  );
}
