"use client";

import { useState } from "react";
import {
  calculateSelectedSolarFinancingComparison,
  type FinancingOption,
} from "@/lib/solar-financing-comparison";
import { ToolReportRequest } from "./ToolReportRequest";

export type FinancingValues = {
  horizonMonths: string;
  cashUpfrontPrice: string;
  loanUpfrontCost: string;
  loanMonthlyPayment: string;
  loanTermMonths: string;
  leaseUpfrontCost: string;
  leaseMonthlyPayment: string;
  leaseEscalatorPercent: string;
  leaseTermMonths: string;
  ppaAnnualProductionKwh: string;
  ppaInitialPricePerKwh: string;
  ppaEscalatorPercent: string;
  ppaTermMonths: string;
};

const emptyValues: FinancingValues = {
  horizonMonths: "",
  cashUpfrontPrice: "",
  loanUpfrontCost: "",
  loanMonthlyPayment: "",
  loanTermMonths: "",
  leaseUpfrontCost: "",
  leaseMonthlyPayment: "",
  leaseEscalatorPercent: "",
  leaseTermMonths: "",
  ppaAnnualProductionKwh: "",
  ppaInitialPricePerKwh: "",
  ppaEscalatorPercent: "",
  ppaTermMonths: "",
};

export const FINANCING_OPTIONS = ["cash", "loan", "lease", "ppa"] as const;

const optionLabels: Record<FinancingOption, string> = {
  cash: "Cash",
  loan: "loan",
  lease: "lease",
  ppa: "PPA",
};

export type SelectedComparisonResult = ReturnType<
  typeof calculateSelectedSolarFinancingComparison
>;

const currency = (value: number, digits = 0) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

const number = (value: number, digits = 0) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(value);

function required(
  values: FinancingValues,
  field: keyof FinancingValues,
  label: string,
) {
  const raw = values[field].trim();
  if (!raw) throw new Error(`Enter ${label}.`);
  return Number(raw);
}

export function calculateSelectedFinancingComparison(
  values: FinancingValues,
  selectedOptions: FinancingOption[],
): SelectedComparisonResult {
  const selected = FINANCING_OPTIONS.filter((option) =>
    selectedOptions.includes(option),
  );
  if (selected.length < 2)
    throw new Error("Select at least two actual proposals to compare.");

  const horizonMonths = required(
    values,
    "horizonMonths",
    "a comparison horizon in months",
  );
  return calculateSelectedSolarFinancingComparison({
    horizonMonths,
    ...(selected.includes("cash")
      ? {
          cash: {
            upfrontPrice: required(
              values,
              "cashUpfrontPrice",
              "the cash upfront price",
            ),
          },
        }
      : {}),
    ...(selected.includes("loan")
      ? {
          loan: {
            upfrontCost: required(
              values,
              "loanUpfrontCost",
              "the loan upfront cost",
            ),
            monthlyPayment: required(
              values,
              "loanMonthlyPayment",
              "the loan monthly payment",
            ),
            termMonths: required(
              values,
              "loanTermMonths",
              "the loan term in months",
            ),
          },
        }
      : {}),
    ...(selected.includes("lease")
      ? {
          lease: {
            upfrontCost: required(
              values,
              "leaseUpfrontCost",
              "the lease upfront cost",
            ),
            initialMonthlyPayment: required(
              values,
              "leaseMonthlyPayment",
              "the initial lease monthly payment",
            ),
            annualEscalator:
              required(
                values,
                "leaseEscalatorPercent",
                "the lease annual escalator",
              ) / 100,
            termMonths: required(
              values,
              "leaseTermMonths",
              "the lease term in months",
            ),
          },
        }
      : {}),
    ...(selected.includes("ppa")
      ? {
          ppa: {
            annualProductionKwh: required(
              values,
              "ppaAnnualProductionKwh",
              "the PPA annual production",
            ),
            initialPricePerKwh: required(
              values,
              "ppaInitialPricePerKwh",
              "the PPA starting price per kWh",
            ),
            annualEscalator:
              required(
                values,
                "ppaEscalatorPercent",
                "the PPA annual escalator",
              ) / 100,
            termMonths: required(
              values,
              "ppaTermMonths",
              "the PPA term in months",
            ),
          },
        }
      : {}),
  });
}

export function selectedComparisonLabel(options: FinancingOption[]) {
  return FINANCING_OPTIONS.filter((option) => options.includes(option))
    .map((option) => optionLabels[option])
    .join(" vs ");
}

export function buildFinancingReportContext(options: FinancingOption[]) {
  const comparison = selectedComparisonLabel(options);
  return {
    topic: `${comparison} financing comparison`,
    label: `Ask about this ${comparison} comparison`,
  };
}

function ContractNotice({
  termMonths,
  horizonMonths,
  missingHorizonMonths,
  afterHorizon,
}: {
  termMonths: number;
  horizonMonths: number;
  missingHorizonMonths: number;
  afterHorizon: number;
}) {
  if (missingHorizonMonths > 0)
    return (
      <p className="mt-2 text-sm text-status-warning">
        The entered term ends {missingHorizonMonths} months before the
        comparison horizon. Later costs are missing from this option.
      </p>
    );
  if (afterHorizon > 0)
    return (
      <p className="mt-2 text-sm text-muted-foreground">
        The entered {termMonths}-month term continues past the {horizonMonths}
        -month horizon. Scheduled payments after the horizon:{" "}
        {currency(afterHorizon)}.
      </p>
    );
  return (
    <p className="mt-2 text-sm text-muted-foreground">
      The entered term ends at the comparison horizon.
    </p>
  );
}

export function SolarFinancingComparison() {
  const [values, setValues] = useState<FinancingValues>(emptyValues);
  const [selectedOptions, setSelectedOptions] = useState<FinancingOption[]>([
    ...FINANCING_OPTIONS,
  ]);
  const [error, setError] = useState("");
  const [result, setResult] = useState<SelectedComparisonResult | null>(null);
  const inputClass =
    "mt-1 w-full rounded-lg border border-border bg-white px-3 py-3 text-foreground";
  const input = (
    key: keyof FinancingValues,
    label: string,
    minimum = "0",
    step = "any",
  ) => (
    <label className="text-sm font-medium" key={key}>
      {label}
      <input
        className={inputClass}
        type="number"
        inputMode="decimal"
        min={minimum}
        step={step}
        value={values[key]}
        onChange={(event) => {
          setResult(null);
          setError("");
          setValues({ ...values, [key]: event.target.value });
        }}
      />
    </label>
  );
  const selected = (option: FinancingOption) =>
    selectedOptions.includes(option);
  const reportContext = result
    ? buildFinancingReportContext(result.selectedOptions)
    : null;
  const optionLegend = (label: string) => (
    <legend className="px-1 font-semibold">{label}</legend>
  );

  return (
    <section className="my-8 rounded-2xl border border-border bg-muted p-5 md:p-8">
      <h2 className="text-2xl font-bold">
        Compare the contract payments you were quoted
      </h2>
      <p className="mt-2 text-foreground/80">
        Enter only written proposal terms. This tool totals those inputs without
        choosing a winner or adding a utility-bill, production, tax or resale
        assumption.
      </p>
      <p className="mt-2 text-sm text-foreground">
        Compare proposals with the same equipment, system size, production and
        project scope. Different scopes do not produce like-for-like totals.
      </p>
      <form
        className="mt-5 space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
          setError("");
          setResult(null);
          try {
            setResult(
              calculateSelectedFinancingComparison(values, selectedOptions),
            );
          } catch (cause) {
            const message =
              cause instanceof Error ? cause.message : "Check your inputs.";
            setError(
              selectedOptions.length < 2
                ? `${message} The page's optional inquiry remains available below.`
                : message,
            );
          }
        }}
      >
        <fieldset className="rounded-xl border border-border bg-white p-4">
          <legend className="px-1 font-semibold">
            Actual proposals to compare
          </legend>
          <p className="mb-3 text-sm text-foreground/80">
            Select at least two written offers. Unselected offers are ignored
            and are not treated as zero-dollar alternatives.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FINANCING_OPTIONS.map((option) => (
              <label
                className="flex items-center gap-2 text-sm font-medium"
                key={option}
              >
                <input
                  type="checkbox"
                  checked={selected(option)}
                  onChange={(event) => {
                    setResult(null);
                    setError("");
                    setSelectedOptions((current) =>
                      event.target.checked
                        ? FINANCING_OPTIONS.filter(
                            (candidate) =>
                              candidate === option ||
                              current.includes(candidate),
                          )
                        : current.filter((candidate) => candidate !== option),
                    );
                  }}
                />
                {optionLabels[option]}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="grid gap-4 md:max-w-sm">
          {input("horizonMonths", "Comparison horizon (months)", "1", "1")}
        </div>
        <fieldset
          disabled={!selected("cash")}
          className="rounded-xl border bg-white p-4 disabled:opacity-55"
        >
          {optionLegend("Cash ownership")}
          <div className="grid gap-4 md:grid-cols-2">
            {input("cashUpfrontPrice", "Upfront price ($)")}
          </div>
        </fieldset>
        <fieldset
          disabled={!selected("loan")}
          className="rounded-xl border bg-white p-4 disabled:opacity-55"
        >
          {optionLegend("Loan")}
          <div className="grid gap-4 md:grid-cols-3">
            {input("loanUpfrontCost", "Upfront cost ($)")}
            {input("loanMonthlyPayment", "Monthly payment ($)")}
            {input("loanTermMonths", "Term (months)", "1", "1")}
          </div>
        </fieldset>
        <fieldset
          disabled={!selected("lease")}
          className="rounded-xl border bg-white p-4 disabled:opacity-55"
        >
          {optionLegend("Lease")}
          <div className="grid gap-4 md:grid-cols-4">
            {input("leaseUpfrontCost", "Upfront cost ($)")}
            {input("leaseMonthlyPayment", "Initial monthly rent ($)")}
            {input("leaseEscalatorPercent", "Annual escalator (%)")}
            {input("leaseTermMonths", "Term (months)", "1", "1")}
          </div>
        </fieldset>
        <fieldset
          disabled={!selected("ppa")}
          className="rounded-xl border bg-white p-4 disabled:opacity-55"
        >
          {optionLegend("Power purchase agreement (PPA)")}
          <div className="grid gap-4 md:grid-cols-4">
            {input(
              "ppaAnnualProductionKwh",
              "Annual production in proposal (kWh)",
              "0.000001",
            )}
            {input("ppaInitialPricePerKwh", "Starting price per kWh ($)", "0")}
            {input("ppaEscalatorPercent", "Annual escalator (%)")}
            {input("ppaTermMonths", "Term (months)", "1", "1")}
          </div>
        </fieldset>
        <button className="rounded-lg bg-foreground px-5 py-3 font-semibold text-white">
          Compare entered terms without contact details
        </button>
      </form>
      {error && (
        <p role="alert" className="mt-4 text-red-800">
          {error}
        </p>
      )}
      {result && (
        <div role="status" className="mt-6 space-y-5 rounded-xl bg-white p-5">
          <h3 className="text-lg font-bold">Entered contract totals</h3>
          <p className="text-sm text-muted-foreground">
            Compared: {selectedComparisonLabel(result.selectedOptions)}.
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            {result.cash && (
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Cash</h4>
                <p className="mt-2 text-2xl font-bold">
                  {currency(result.cash.knownCostThroughHorizon)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Upfront price. No recurring contract payment was entered.
                </p>
              </div>
            )}
            {result.loan && (
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Loan</h4>
                <p className="mt-2 text-2xl font-bold">
                  {currency(result.loan.knownCostThroughHorizon)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Known payments through the selected horizon.
                </p>
                <ContractNotice
                  {...result.loan}
                  horizonMonths={result.horizonMonths}
                  afterHorizon={result.loan.scheduledPaymentsAfterHorizon}
                />
              </div>
            )}
            {result.lease && (
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">Lease</h4>
                <p className="mt-2 text-2xl font-bold">
                  {currency(result.lease.knownCostThroughHorizon)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Known payments through the selected horizon.
                </p>
                <ContractNotice
                  {...result.lease}
                  horizonMonths={result.horizonMonths}
                  afterHorizon={result.lease.scheduledPaymentsAfterHorizon}
                />
              </div>
            )}
            {result.ppa && (
              <div className="rounded-lg border p-4">
                <h4 className="font-semibold">PPA</h4>
                <p className="mt-2 text-2xl font-bold">
                  {currency(result.ppa.knownCostThroughHorizon)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Known PPA charges through the selected horizon.
                </p>
                <ContractNotice
                  {...result.ppa}
                  horizonMonths={result.horizonMonths}
                  afterHorizon={result.ppa.scheduledPaymentsAfterHorizon}
                />
              </div>
            )}
          </div>
          {(result.lease || result.ppa) && (
            <div className="grid gap-5 lg:grid-cols-2">
              {result.lease && (
                <div>
                  <h4 className="font-semibold">Lease payment schedule</h4>
                  <div className="mt-2 overflow-x-auto rounded-lg border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2">Year</th>
                          <th className="p-2">Months</th>
                          <th className="p-2">Monthly rent</th>
                          <th className="p-2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.lease.paymentRowsThroughHorizon.map((row) => (
                          <tr className="border-t" key={row.contractYear}>
                            <td className="p-2">{row.contractYear}</td>
                            <td className="p-2">{row.months}</td>
                            <td className="p-2">
                              {currency(row.monthlyPayment)}
                            </td>
                            <td className="p-2">{currency(row.total)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {result.ppa && (
                <div>
                  <h4 className="font-semibold">PPA charge schedule</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Uses the entered annual production of{" "}
                    {number(result.ppa.annualProductionKwh)} kWh for each
                    contract year. Partial periods are prorated.
                  </p>
                  <div className="mt-2 overflow-x-auto rounded-lg border">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-muted">
                        <tr>
                          <th className="p-2">Year</th>
                          <th className="p-2">Months</th>
                          <th className="p-2">Charged kWh</th>
                          <th className="p-2">Price/kWh</th>
                          <th className="p-2">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.ppa.paymentRowsThroughHorizon.map((row) => (
                          <tr className="border-t" key={row.contractYear}>
                            <td className="p-2">{row.contractYear}</td>
                            <td className="p-2">{row.months}</td>
                            <td className="p-2">
                              {number(row.productionChargedKwh)}
                            </td>
                            <td className="p-2">
                              {currency(row.pricePerKwh, 3)}
                            </td>
                            <td className="p-2">{currency(row.total)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            These totals exclude utility bills, maintenance, equipment
            replacement, tax treatment, transfer or buyout terms, and resale.
            They do not establish savings or identify a best option.
          </p>
        </div>
      )}
      {/* Optional and result-gated only: every number above is produced without
          contact details and stays that way. */}
      {result && reportContext && (
        <ToolReportRequest
          sourceTool="financing_comparison"
          variant="decision"
          topic={reportContext.topic}
          label={reportContext.label}
        />
      )}
    </section>
  );
}
