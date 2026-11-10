'use client';

// Solar lease / PPA buyout calculator. Sibling of SolarFinancingComparison,
// and built the same way on purpose: the component holds strings, the pure
// model in src/lib/solar-lease-buyout.ts holds the arithmetic and the test.
//
// SOURCING NOTE for anyone editing this file. There is no default escalator,
// no default term and no default buyout percentage here, and there must not be
// one. src/data/facts.ts carries no lease, PPA, escalator or buyout fact, so
// any pre-filled "typical" number would be invented. Every field starts empty
// and every figure shown is arithmetic on what the reader typed off their own
// contract. If a sourced benchmark ever lands in facts.ts it can be displayed
// beside a result as a comparison; it must not become an input default.
//
// The lead form is result-gated and optional, same as the sibling tool: every
// number this produces is produced without contact details and stays that way.

import { useState } from 'react';
import {
  BUYOUT_LIMITS,
  calculateSolarLeaseBuyout,
  type SolarLeaseBuyoutResult,
} from '@/lib/solar-lease-buyout';
import { ToolReportRequest } from './ToolReportRequest';

export type BuyoutValues = {
  monthlyPaymentNow: string;
  annualEscalatorPercent: string;
  yearsElapsed: string;
  termYears: string;
  quotedBuyout: string;
};

const emptyValues: BuyoutValues = {
  monthlyPaymentNow: '',
  annualEscalatorPercent: '',
  yearsElapsed: '',
  termYears: '',
  quotedBuyout: '',
};

const currency = (value: number, digits = 0) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

const percent = (value: number, digits = 1) =>
  new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function required(
  values: BuyoutValues,
  field: keyof BuyoutValues,
  label: string,
) {
  const raw = values[field].trim();
  if (!raw) throw new Error(`Enter ${label}.`);
  const parsed = Number(raw);
  if (!Number.isFinite(parsed)) throw new Error(`Check ${label}.`);
  return parsed;
}

function optional(values: BuyoutValues, field: keyof BuyoutValues) {
  const raw = values[field].trim();
  if (!raw) return undefined;
  const parsed = Number(raw);
  if (!Number.isFinite(parsed))
    throw new Error('Check the quoted buyout figure, or leave it blank.');
  return parsed;
}

/** Exported for the sake of a direct unit check of the string-to-number step. */
export function calculateBuyoutFromValues(
  values: BuyoutValues,
): SolarLeaseBuyoutResult {
  return calculateSolarLeaseBuyout({
    monthlyPaymentNow: required(
      values,
      'monthlyPaymentNow',
      'the monthly payment on the contract right now',
    ),
    annualEscalatorPercent: required(
      values,
      'annualEscalatorPercent',
      'the annual escalator printed in the contract, as a percent',
    ),
    yearsElapsed: required(
      values,
      'yearsElapsed',
      'the number of whole contract years already elapsed',
    ),
    termYears: required(
      values,
      'termYears',
      'the full contract term in years',
    ),
    quotedBuyout: optional(values, 'quotedBuyout'),
  });
}

export function BuyoutCalculator() {
  const [values, setValues] = useState<BuyoutValues>(emptyValues);
  const [error, setError] = useState('');
  const [result, setResult] = useState<SolarLeaseBuyoutResult | null>(null);

  const inputClass =
    'mt-1 w-full rounded-lg border border-border bg-white px-3 py-3 text-foreground';
  const input = (
    key: keyof BuyoutValues,
    label: string,
    hint: string,
    minimum = '0',
    step = 'any',
    maximum?: string,
  ) => (
    <label className="text-sm font-medium" key={key}>
      {label}
      <input
        className={inputClass}
        type="number"
        inputMode="decimal"
        min={minimum}
        max={maximum}
        step={step}
        value={values[key]}
        onChange={(event) => {
          setResult(null);
          setError('');
          setValues({ ...values, [key]: event.target.value });
        }}
      />
      <span className="mt-1 block font-normal text-muted-foreground">
        {hint}
      </span>
    </label>
  );

  return (
    <section
      id="buyout-calculator"
      className="my-8 scroll-mt-24 rounded-2xl border border-border bg-muted p-5 md:p-8"
    >
      <h2 className="text-2xl font-bold">
        Work out what buying out of your solar lease is being compared against
      </h2>
      <p className="mt-2 text-foreground/80">
        Read the four figures below off your own lease or power purchase
        agreement and enter them. This tool then totals the payments left on the
        term, applies the escalator you entered, and sets that total beside any
        buyout figure you have been quoted.
      </p>
      <p className="mt-2 text-sm font-semibold text-foreground">
        Every figure this produces comes only from what you type. There is no
        assumed escalator, no assumed term and no industry average anywhere in
        it. Your signed contract and the payoff quote the lease company puts in
        writing are the only authoritative numbers.
      </p>
      <form
        className="mt-5 space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setError('');
          setResult(null);
          try {
            setResult(calculateBuyoutFromValues(values));
          } catch (cause) {
            setError(
              cause instanceof Error
                ? cause.message
                : 'Check the figures you entered.',
            );
          }
        }}
      >
        <fieldset className="rounded-xl border border-border bg-white p-4">
          <legend className="px-1 font-semibold">
            From your contract and your current statement
          </legend>
          <div className="grid gap-4 md:grid-cols-2">
            {input(
              'monthlyPaymentNow',
              'Monthly payment right now ($)',
              'The amount being billed this month, not the amount in year one.',
              '0',
              'any',
              String(BUYOUT_LIMITS.maxMonthlyPayment),
            )}
            {input(
              'annualEscalatorPercent',
              'Annual escalator (%)',
              'Copy the rate printed in the contract. Enter 0 if the payment is fixed.',
              '0',
              'any',
              String(BUYOUT_LIMITS.maxEscalatorPercent),
            )}
            {input(
              'yearsElapsed',
              'Whole contract years already elapsed',
              'Count from the date the contract started, not the install date.',
              '0',
              '1',
              String(BUYOUT_LIMITS.maxTermYears - 1),
            )}
            {input(
              'termYears',
              'Full contract term (years)',
              'The total term written in the agreement.',
              '1',
              '1',
              String(BUYOUT_LIMITS.maxTermYears),
            )}
          </div>
        </fieldset>
        <fieldset className="rounded-xl border border-border bg-white p-4">
          <legend className="px-1 font-semibold">
            Optional: a buyout figure already quoted to you
          </legend>
          <div className="grid gap-4 md:max-w-sm">
            {input(
              'quotedBuyout',
              'Quoted buyout or payoff figure ($)',
              'Leave this blank if you have not asked for one yet.',
              '0',
              'any',
              String(BUYOUT_LIMITS.maxQuotedBuyout),
            )}
          </div>
        </fieldset>
        <button className="min-h-[44px] rounded-lg bg-foreground px-5 py-3 font-semibold text-white">
          Total the payments left, without contact details
        </button>
      </form>

      {error && (
        <p role="alert" className="mt-4 text-red-800">
          {error}
        </p>
      )}

      {result && (
        <div className="mt-6 space-y-5 rounded-xl bg-white p-5">
          <p role="status" className="sr-only">
            Results ready for {result.remainingYears} remaining contract{' '}
            {result.remainingYears === 1 ? 'year' : 'years'}.
          </p>
          <h3 className="text-lg font-bold">
            What you entered, totalled over the {result.remainingYears} contract{' '}
            {result.remainingYears === 1 ? 'year' : 'years'} left
          </h3>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">
                Remaining payments, escalator applied
              </h4>
              <p className="mt-2 text-2xl font-bold">
                {currency(result.escalatedRemainingTotal)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your entered payment raised by {percent(result.escalatorRate, 2)} a
                year for each remaining contract year, then added up. Not
                discounted to a present value.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">
                Remaining payments if nothing escalated
              </h4>
              <p className="mt-2 text-2xl font-bold">
                {currency(result.flatRemainingTotal)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Today&apos;s payment, held flat, times twelve months for every whole
                contract year left. The
                escalator you entered adds{' '}
                {currency(result.escalatorAddsOnTop)} on top of this.
              </p>
            </div>
            <div className="rounded-lg border p-4">
              <h4 className="font-semibold">Cost per year of staying</h4>
              <p className="mt-2 text-2xl font-bold">
                {currency(result.averageAnnualCostOfStaying)}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                The escalated remaining total spread evenly across the years
                left. By the final year the monthly payment reaches{' '}
                {currency(result.finalYearMonthlyPayment, 2)}.
              </p>
            </div>
          </div>

          {result.quotedBuyout !== undefined && (
            <div className="rounded-lg border border-primary/40 bg-muted/40 p-4">
              <h4 className="font-semibold">
                The quoted buyout against the payments you entered
              </h4>
              <p className="mt-2 text-sm text-foreground">
                You entered a quoted buyout of{' '}
                <strong>{currency(result.quotedBuyout)}</strong>. The payments
                left on the term, as you entered them, total{' '}
                <strong>{currency(result.escalatedRemainingTotal)}</strong>.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                <li>
                  Difference:{' '}
                  <strong>
                    {currency(Math.abs(result.buyoutVsRemainingPayments ?? 0))}
                  </strong>{' '}
                  {(result.buyoutVsRemainingPayments ?? 0) >= 0
                    ? 'less than the remaining payments you entered.'
                    : 'more than the remaining payments you entered.'}
                </li>
                {result.buyoutShareOfRemainingPayments !== undefined && (
                  <li>
                    The quote is{' '}
                    <strong>
                      {percent(result.buyoutShareOfRemainingPayments)}
                    </strong>{' '}
                    of the remaining payments you entered.
                  </li>
                )}
                <li>
                  Cost per year of buying out, spread over the{' '}
                  {result.remainingYears}{' '}
                  {result.remainingYears === 1 ? 'year' : 'years'} it ends:{' '}
                  <strong>
                    {currency(result.averageAnnualCostOfBuyingOut ?? 0)}
                  </strong>
                  , against {currency(result.averageAnnualCostOfStaying)} a year
                  to stay.
                </li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                This is a difference between two figures you supplied. It is not
                a valuation of the equipment, an opinion on whether the quote is
                reasonable, or a recommendation either way.
              </p>
            </div>
          )}

          <div>
            <h4 className="font-semibold">
              Payment schedule for the rest of the term
            </h4>
            <div className="mt-2 overflow-x-auto rounded-lg border">
              <table className="w-full text-left text-sm">
                <caption className="p-2 text-left text-xs text-muted-foreground">
                  Built entirely from the payment, escalator, elapsed years and
                  term you entered.
                </caption>
                <thead className="bg-muted">
                  <tr>
                    <th className="p-2">Contract year</th>
                    <th className="p-2">Monthly payment</th>
                    <th className="p-2">That year</th>
                    <th className="p-2">Running total</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row) => (
                    <tr className="border-t" key={row.contractYear}>
                      <th scope="row" className="p-2 font-normal">
                        {row.contractYear}
                        {row.yearsFromNow === 0 ? ' (now)' : ''}
                      </th>
                      <td className="p-2 tabular-nums">
                        {currency(row.monthlyPayment, 2)}
                      </td>
                      <td className="p-2 tabular-nums">
                        {currency(row.annualTotal)}
                      </td>
                      <td className="p-2 tabular-nums">
                        {currency(row.cumulativeTotal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            These totals exclude what the electricity itself costs you, any
            maintenance or inverter replacement, tax treatment, the resale value
            of the equipment, and whatever transfer or prepayment conditions
            your own agreement imposes. They do not establish a saving and do
            not identify a better option. A payoff figure is only binding when
            the lease company puts it in writing.
          </p>
        </div>
      )}

      {/* Optional and result-gated only: every number above is produced
          without contact details and stays that way. */}
      {result && (
        <ToolReportRequest
          sourceTool="lease_buyout_calculator"
          variant="decision"
          topic="California solar lease or PPA buyout review"
          label="Ask about this buyout comparison"
        />
      )}
    </section>
  );
}
