'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Info } from 'lucide-react';
import { trackEvent } from '@/components/GoogleAnalyticsClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  computeCommercialSolar,
  DEFAULTS,
  paoResidentialCagr,
  PRODUCTION_FACTORS,
  SOURCES,
  LEAVES_OUT_ITEMS,
  type CommercialSolarInputs,
  type CommercialSolarOutputs,
  type Location,
  type PlacedInServiceYear,
  type TaxProfile,
  type Utility,
} from '@/lib/commercial-solar-model';

// =============================================================================
// CommercialSolarCalculator — live, source-cited commercial PV calculator.
// No submit; results recompute on every keystroke. Every number is either
// sourced (small "source" link, publisher + date) or an editable assumption
// (labeled "assumption"). See src/lib/commercial-solar-model.ts for the math
// and full source map.
// =============================================================================

const selectClass =
  'h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2';

const fmtUsd0 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const fmtUsd2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
const fmtNumber0 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
const fmtPercent1 = (fraction: number) => `${(fraction * 100).toFixed(1)}%`;

const UTILITY_LABELS: Record<Utility, string> = {
  PGE: 'PG&E',
  SCE: 'SCE',
  SDGE: 'SDG&E',
  SMUD: 'SMUD',
  LADWP: 'LADWP',
  OTHER: 'Other / CCA',
};

const LOCATION_LABELS: Record<Location, string> = {
  RIVERSIDE: 'Riverside',
  LOS_ANGELES: 'Los Angeles',
  FRESNO: 'Fresno',
  SAN_JOSE: 'San Jose',
  SACRAMENTO: 'Sacramento',
  SAN_DIEGO: 'San Diego',
  CUSTOM: 'Custom (enter production factor)',
};

const TAX_PROFILE_LABELS: Record<TaxProfile['kind'], string> = {
  C_CORP: 'C corporation',
  PASS_THROUGH: 'Pass-through (S corp, partnership, sole proprietor)',
  TAX_EXEMPT: 'Tax-exempt (nonprofit, government, tribal)',
};

// Source ids surfaced somewhere on this page, for the "Methodology and sources" block.
const METHODOLOGY_SOURCE_IDS = [
  'fedtax-01',
  'fedtax-02',
  'fedtax-03',
  'fedtax-05',
  'fedtax-06',
  'fedtax-07',
  'fedtax-08',
  'fedtax-13',
  'fedtax-14',
  'fedtax-22',
  'fedtax-24',
  'fedtax-28',
  'fedtax-30',
  'fedtax-33',
  'fedtax-38',
  'fedtax-41',
  'irc-11b',
  'pub-946-table-a1',
  'cal-const-xiiia-1',
  'lbnl-2026-update',
  'catax-05',
  'catax-06',
  'catax-07',
  'catax-16',
  'catax-17',
  'costs-11',
  'costs-12',
  'costs-13',
  'costs-20',
  'costs-24',
  'costs-30-35',
  'rates-06',
  'rates-08',
  'rates-10',
  'rates-13',
  'rates-14',
  'rates-19',
  'rates-20',
  'rates-21',
  'rates-22',
  'rates-23',
  'rates-24',
  'rates-26',
  'rates-27',
  'rates-30',
  'rates-31',
  'rates-32',
  'rates-33',
  'rates-34',
  'rates-35',
  'value-06',
  'value-09',
  'value-10',
  'value-13',
  'value-27',
  'value-29',
  'value-30',
  'programs-02',
  'programs-03',
  'programs-16',
  'programs-39',
] as const;

function SourceTag({ id }: { id: string }) {
  const source = SOURCES[id];
  if (!source) return null;
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="ml-1 text-[11px] font-medium text-primary underline decoration-dotted underline-offset-2 hover:decoration-solid"
      title={`${source.publisher}, ${source.date}`}
    >
      source
    </a>
  );
}

function Assumption() {
  return (
    <span className="ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
      assumption
    </span>
  );
}

function FieldNote({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-muted-foreground">{children}</p>;
}

function LineItem({
  label,
  value,
  sub,
  emphasis,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  sub?: React.ReactNode;
  emphasis?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-dashed border-border py-2 last:border-0">
      <div>
        <div className={emphasis ? 'font-semibold text-foreground' : 'text-sm text-foreground'}>{label}</div>
        {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
      </div>
      <div className={emphasis ? 'shrink-0 text-lg font-bold text-primary' : 'shrink-0 text-sm font-semibold text-foreground'}>
        {value}
      </div>
    </div>
  );
}

interface FormState {
  utility: Utility;
  annualSpend: string;
  annualKwh: string;
  location: Location;
  customProductionFactor: string;
  systemKwDcOverride: string;
  installedCostPerWattOverride: string;
  domesticContent: boolean;
  energyCommunity: boolean;
  placedInServiceYear: PlacedInServiceYear;
  taxProfileKind: TaxProfile['kind'];
  passThroughFederalRate: string;
  passThroughCaRate: string;
  selfConsumptionShare: string;
  exportRatePerKwh: string;
  rateEscalation: string;
  degradation: string;
  omPerKwYear: string;
  omEscalation: string;
  analysisHorizonYears: string;
  discountRate: string;
  capRate: string;
}

const initialState: FormState = {
  utility: 'PGE',
  annualSpend: '60000',
  annualKwh: '300000',
  location: 'RIVERSIDE',
  customProductionFactor: '',
  systemKwDcOverride: '',
  installedCostPerWattOverride: '',
  domesticContent: false,
  energyCommunity: false,
  placedInServiceYear: 2026,
  taxProfileKind: 'C_CORP',
  passThroughFederalRate: '',
  passThroughCaRate: '',
  selfConsumptionShare: String(DEFAULTS.selfConsumptionShare * 100),
  exportRatePerKwh: '',
  rateEscalation: String(DEFAULTS.rateEscalation * 100),
  degradation: String(DEFAULTS.degradation * 100),
  omPerKwYear: String(DEFAULTS.omPerKwYear),
  omEscalation: String(DEFAULTS.omEscalation * 100),
  analysisHorizonYears: String(DEFAULTS.analysisHorizonYears),
  discountRate: String(DEFAULTS.discountRate * 100),
  capRate: String(DEFAULTS.capRate * 100),
};

function parseOptionalNumber(raw: string): number | undefined {
  const trimmed = raw.trim();
  if (trimmed === '') return undefined;
  const n = Number(trimmed);
  return Number.isFinite(n) ? n : undefined;
}

function toInputs(state: FormState): CommercialSolarInputs {
  const taxProfile: TaxProfile =
    state.taxProfileKind === 'PASS_THROUGH'
      ? {
          kind: 'PASS_THROUGH',
          federalRate: (parseOptionalNumber(state.passThroughFederalRate) ?? 0) / 100,
          caRate: (parseOptionalNumber(state.passThroughCaRate) ?? 0) / 100,
        }
      : { kind: state.taxProfileKind };

  return {
    utility: state.utility,
    annualSpend: parseOptionalNumber(state.annualSpend) ?? 0,
    annualKwh: parseOptionalNumber(state.annualKwh) ?? 0,
    location: state.location,
    customProductionFactor: parseOptionalNumber(state.customProductionFactor),
    systemKwDc: parseOptionalNumber(state.systemKwDcOverride),
    installedCostPerWatt: parseOptionalNumber(state.installedCostPerWattOverride),
    domesticContent: state.domesticContent,
    energyCommunity: state.energyCommunity,
    taxProfile,
    selfConsumptionShare: (parseOptionalNumber(state.selfConsumptionShare) ?? DEFAULTS.selfConsumptionShare * 100) / 100,
    exportRatePerKwh: parseOptionalNumber(state.exportRatePerKwh),
    rateEscalation: (parseOptionalNumber(state.rateEscalation) ?? DEFAULTS.rateEscalation * 100) / 100,
    degradation: (parseOptionalNumber(state.degradation) ?? DEFAULTS.degradation * 100) / 100,
    omPerKwYear: parseOptionalNumber(state.omPerKwYear) ?? DEFAULTS.omPerKwYear,
    omEscalation: (parseOptionalNumber(state.omEscalation) ?? DEFAULTS.omEscalation * 100) / 100,
    analysisHorizonYears: parseOptionalNumber(state.analysisHorizonYears) ?? DEFAULTS.analysisHorizonYears,
    discountRate: (parseOptionalNumber(state.discountRate) ?? DEFAULTS.discountRate * 100) / 100,
    capRate: (parseOptionalNumber(state.capRate) ?? DEFAULTS.capRate * 100) / 100,
    placedInServiceYear: state.placedInServiceYear,
  };
}

function buildSummary(state: FormState, outputs: CommercialSolarOutputs): string {
  const lines = [
    'California Rate Relief — commercial solar calculator summary',
    `Utility: ${UTILITY_LABELS[state.utility]} | Location: ${LOCATION_LABELS[state.location]}`,
    `Annual spend: ${fmtUsd0.format(Number(state.annualSpend) || 0)} | Annual usage: ${fmtNumber0.format(Number(state.annualKwh) || 0)} kWh | Blended rate: ${fmtUsd2.format(outputs.blendedRate)}/kWh`,
    `System size: ${fmtNumber0.format(outputs.systemKwDc)} kWdc${outputs.systemKwDcWasAutoSized ? ' (auto-sized)' : ''} at ${fmtUsd2.format(outputs.installedCostPerWatt)}/W`,
    `Gross installed cost: ${fmtUsd0.format(outputs.grossInstalledCost)}`,
    `Federal ITC (§48E): ${fmtPercent1(outputs.itcRatePercent)} = ${fmtUsd0.format(outputs.itcAmount)} (${outputs.itcLabel.replace(/_/g, ' ')})`,
    `Depreciable basis: ${fmtUsd0.format(outputs.depreciableBasis)}`,
    `Federal year-1 depreciation tax value: ${outputs.federalDepreciationValueYear1 !== null ? fmtUsd0.format(outputs.federalDepreciationValueYear1) : 'n/a'}`,
    `California depreciation tax value: ${outputs.caDepreciationValueTotal !== null ? fmtUsd0.format(outputs.caDepreciationValueTotal) : '[source pending]'}`,
    `Net cost after tax benefits (undiscounted): ${fmtUsd0.format(outputs.netCostAfterTaxBenefits)}`,
    `Year-1 production: ${fmtNumber0.format(outputs.year1ProductionKwh)} kWh (self-consumed ${fmtNumber0.format(outputs.year1SelfConsumedKwh)} / exported ${fmtNumber0.format(outputs.year1ExportedKwh)})`,
    `Year-1 savings: ${fmtUsd0.format(outputs.year1Savings)}`,
    `Simple payback: ${outputs.simplePaybackYears !== null ? `${outputs.simplePaybackYears.toFixed(1)} years` : 'n/a'}`,
    `25-year cumulative savings: ${fmtUsd0.format(outputs.cumulativeSavings25yr)}`,
    `NPV at ${state.discountRate}% discount rate: ${fmtUsd0.format(outputs.npv)}`,
    `IRR: ${outputs.irr !== null ? fmtPercent1(outputs.irr) : 'n/a'}`,
    `Property value indication (income approach): ${fmtUsd0.format(outputs.propertyValueIndication)}`,
    `Property tax: ${outputs.propertyTax.note}`,
    'This is an unofficial estimate built from public sources, not a quote, appraisal, or tax advice.',
  ];
  return lines.join('\n');
}

export default function CommercialSolarCalculator() {
  const [state, setState] = useState<FormState>(initialState);
  const [escalationFromPao, setEscalationFromPao] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    if (key === 'rateEscalation') setEscalationFromPao(false);
    setState((current) => ({ ...current, [key]: value }));
  };

  const { outputs, error } = useMemo(() => {
    try {
      return { outputs: computeCommercialSolar(toInputs(state)), error: null as string | null };
    } catch (cause) {
      return { outputs: null as CommercialSolarOutputs | null, error: cause instanceof Error ? cause.message : 'Enter valid numbers above.' };
    }
  }, [state]);

  const handleUsePaoTrend = () => {
    const cagr = paoResidentialCagr(state.utility);
    update('rateEscalation', (cagr * 100).toFixed(2));
    setEscalationFromPao(true);
  };

  const handleCopySummary = async () => {
    if (!outputs) return;
    const summary = buildSummary(state, outputs);
    try {
      await navigator.clipboard.writeText(summary);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('error');
    }
    trackEvent('commercial_calculator_result', {
      utility: state.utility,
      location: state.location,
      tax_profile: state.taxProfileKind,
      placed_in_service_year: state.placedInServiceYear,
      system_kw_dc: Math.round(outputs.systemKwDc),
    });
    window.setTimeout(() => setCopyStatus('idle'), 2500);
  };

  return (
    <div className="space-y-6">
      {/* ---------------------------------------------------------------- */}
      {/* Building & bill */}
      {/* ---------------------------------------------------------------- */}
      <Card>
        <CardHeader>
          <CardTitle>Your building and bill</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="calc-utility">Utility</Label>
              <select
                id="calc-utility"
                className={selectClass}
                value={state.utility}
                onChange={(e) => update('utility', e.target.value as Utility)}
              >
                {(Object.keys(UTILITY_LABELS) as Utility[]).map((u) => (
                  <option key={u} value={u}>
                    {UTILITY_LABELS[u]}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="calc-location">
                Location (production factor) <SourceTag id="costs-30-35" />
              </Label>
              <select
                id="calc-location"
                className={selectClass}
                value={state.location}
                onChange={(e) => update('location', e.target.value as Location)}
              >
                {(Object.keys(LOCATION_LABELS) as Location[]).map((loc) => (
                  <option key={loc} value={loc}>
                    {LOCATION_LABELS[loc]}
                  </option>
                ))}
              </select>
              {state.location === 'CUSTOM' ? (
                <Input
                  type="number"
                  min={0}
                  placeholder="kWh per kWdc-year"
                  value={state.customProductionFactor}
                  onChange={(e) => update('customProductionFactor', e.target.value)}
                  className="h-11"
                />
              ) : (
                <FieldNote>
                  {fmtNumber0.format(PRODUCTION_FACTORS[state.location])} kWh/kWdc-yr, PVWatts 100-kWdc fixed-tilt roof
                  model.
                </FieldNote>
              )}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="calc-spend">Annual electricity spend ($)</Label>
              <Input
                id="calc-spend"
                type="number"
                min={0}
                placeholder="60000 (example)"
                value={state.annualSpend}
                onChange={(e) => update('annualSpend', e.target.value)}
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="calc-kwh">Annual electricity usage (kWh)</Label>
              <Input
                id="calc-kwh"
                type="number"
                min={0}
                placeholder="300000 (example)"
                value={state.annualKwh}
                onChange={(e) => update('annualKwh', e.target.value)}
                className="h-11"
              />
            </div>
          </div>
          {outputs && (
            <FieldNote>
              Blended rate: <span className="font-semibold text-foreground">{fmtUsd2.format(outputs.blendedRate)}/kWh</span>
              . For context only — PG&E B-10/B-19 <SourceTag id="rates-06" /> and SDG&E AL-TOU/TOU-M <SourceTag id="rates-10" />{' '}
              summer on-peak energy rates run well above this blended figure, and demand charges are billed separately{' '}
              <SourceTag id="rates-08" />; neither default is used in this calculator.
            </FieldNote>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="calc-size">
                System size (kWdc){outputs?.systemKwDcWasAutoSized ? <Assumption /> : null}
              </Label>
              <Input
                id="calc-size"
                type="number"
                min={0}
                placeholder={outputs ? `${fmtNumber0.format(outputs.systemKwDc)} (auto-sized)` : 'auto-sized'}
                value={state.systemKwDcOverride}
                onChange={(e) => update('systemKwDcOverride', e.target.value)}
                className="h-11"
              />
              <FieldNote>Auto-sized to cover 80% of annual kWh at this location&rsquo;s production factor. Override any time.</FieldNote>
            </div>
            <div className="space-y-2">
              <Label htmlFor="calc-costperwatt">
                Installed cost ($/Wdc){' '}
                {outputs?.installedCostPerWattSource !== 'user' ? (
                  <SourceTag id={outputs?.installedCostPerWattSource === 'ca-commercial-median-2023' ? 'costs-24' : 'costs-20'} />
                ) : null}
              </Label>
              <Input
                id="calc-costperwatt"
                type="number"
                step="0.01"
                min={0}
                placeholder={outputs ? outputs.installedCostPerWatt.toFixed(2) : ''}
                value={state.installedCostPerWattOverride}
                onChange={(e) => update('installedCostPerWattOverride', e.target.value)}
                className="h-11"
              />
              <FieldNote>
                {outputs?.installedCostPerWattSource === 'ca-commercial-median-2023'
                  ? 'California large non-residential (>100 kW), commercial customers, 2023 median.'
                  : outputs?.installedCostPerWattSource === 'ca-small-nonres-midpoint-2023'
                    ? 'California-relevant small non-residential (≤100 kW) 2023 20th–80th percentile midpoint.'
                    : 'Your entered figure.'}{' '}
                LBNL&rsquo;s August 2026 update was checked this session and did not publish a size-class or California figure
                to replace this 2023 vintage — see Methodology below <SourceTag id="lbnl-2026-update" />.
              </FieldNote>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ---------------------------------------------------------------- */}
      {/* Tax position */}
      {/* ---------------------------------------------------------------- */}
      <Card>
        <CardHeader>
          <CardTitle>Tax position</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="rounded-lg border border-status-warning/30 bg-status-warning/10 p-3 text-sm text-foreground">
            <div className="flex gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Construction starting after July 4, 2026 must be placed in service by December 31, 2027 to receive any
                §48E credit <SourceTag id="fedtax-13" />
                <SourceTag id="fedtax-14" />.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calc-pis">Placed-in-service year</Label>
            <select
              id="calc-pis"
              className={selectClass}
              value={state.placedInServiceYear}
              onChange={(e) => update('placedInServiceYear', Number(e.target.value) as PlacedInServiceYear)}
            >
              <option value={2026}>2026</option>
              <option value={2027}>2027</option>
              <option value={2028}>2028 or later</option>
            </select>
          </div>

          <div className="space-y-3">
            <Label>
              Federal ITC adders (§48E base 30% <SourceTag id="fedtax-02" /> — automatic under 1 MW AC, PWA otherwise{' '}
              <SourceTag id="fedtax-03" />)
            </Label>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
              <Checkbox
                checked={state.domesticContent}
                onCheckedChange={(checked) => update('domesticContent', checked === true)}
                className="mt-0.5"
              />
              <span>
                Domestic content (+10 points) <SourceTag id="fedtax-06" />
                <SourceTag id="fedtax-07" />
                <FieldNote>
                  Cost-ratio threshold: 50% for construction beginning in 2026, 55% from 2027 onward{' '}
                  <SourceTag id="fedtax-08" />.
                </FieldNote>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
              <Checkbox
                checked={state.energyCommunity}
                onCheckedChange={(checked) => update('energyCommunity', checked === true)}
                className="mt-0.5"
              />
              <span>
                Energy community (+10 points) <SourceTag id="fedtax-05" />
              </span>
            </label>
          </div>

          <div className="space-y-3">
            <Label>Tax profile</Label>
            <RadioGroup
              value={state.taxProfileKind}
              onValueChange={(value) => update('taxProfileKind', value as TaxProfile['kind'])}
              className="gap-3"
            >
              {(Object.keys(TAX_PROFILE_LABELS) as TaxProfile['kind'][]).map((kind) => (
                <label key={kind} className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                  <RadioGroupItem value={kind} id={`tax-${kind}`} />
                  {TAX_PROFILE_LABELS[kind]}
                </label>
              ))}
            </RadioGroup>

            {state.taxProfileKind === 'C_CORP' && (
              <FieldNote>
                Federal 21% <SourceTag id="irc-11b" /> · California 8.84% <SourceTag id="fedtax-38" />.
              </FieldNote>
            )}
            {state.taxProfileKind === 'PASS_THROUGH' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="calc-pt-fed">Your federal marginal rate (%)</Label>
                  <Input
                    id="calc-pt-fed"
                    type="number"
                    min={0}
                    max={100}
                    value={state.passThroughFederalRate}
                    onChange={(e) => update('passThroughFederalRate', e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="calc-pt-ca">Your California marginal rate (%)</Label>
                  <Input
                    id="calc-pt-ca"
                    type="number"
                    min={0}
                    max={100}
                    value={state.passThroughCaRate}
                    onChange={(e) => update('passThroughCaRate', e.target.value)}
                    className="h-11"
                  />
                </div>
              </div>
            )}
            {state.taxProfileKind === 'TAX_EXEMPT' && (
              <FieldNote>
                The ITC is received as an elective-pay direct payment, not a credit against tax; no depreciation is
                claimed <SourceTag id="fedtax-24" />.
              </FieldNote>
            )}
          </div>
        </CardContent>
      </Card>

      {/* ---------------------------------------------------------------- */}
      {/* Export credit, escalation, self-consumption */}
      {/* ---------------------------------------------------------------- */}
      <Card>
        <CardHeader>
          <CardTitle>Export credit and escalation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="calc-export">
                Export credit ($/kWh){' '}
                {state.utility === 'SMUD' ? <SourceTag id="rates-35" /> : null}
              </Label>
              <Input
                id="calc-export"
                type="number"
                step="0.001"
                min={0}
                placeholder={state.utility === 'SMUD' ? DEFAULTS.smudExportRate.toFixed(3) : 'enter your rate'}
                value={state.exportRatePerKwh}
                onChange={(e) => update('exportRatePerKwh', e.target.value)}
                className="h-11"
              />
              <FieldNote>
                {state.utility === 'SMUD'
                  ? 'SMUD Solar and Storage Rate export credit, flat regardless of time or season.'
                  : state.utility === 'LADWP'
                    ? 'LADWP credits use a separate marginal-cost mechanism revised monthly, not the IOUs’ NBT tables.'
                    : 'IOU NBT/Solar Billing Plan export values are hourly Avoided Cost Calculator prices, locked for 9 years — read yours from your utility’s NBT/SBP table.'}{' '}
                <SourceTag id="rates-23" />
                <SourceTag id="rates-24" />
                {state.utility === 'LADWP' && <SourceTag id="rates-33" />}
              </FieldNote>
            </div>
            <div className="space-y-2">
              <Label htmlFor="calc-selfconsumption">
                Self-consumption share (%) <Assumption />
              </Label>
              <Input
                id="calc-selfconsumption"
                type="number"
                min={0}
                max={100}
                value={state.selfConsumptionShare}
                onChange={(e) => update('selfConsumptionShare', e.target.value)}
                className="h-11"
              />
              <FieldNote>Share of production used on site; the rest is exported.</FieldNote>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calc-escalation">
              Utility rate escalation (%/yr) <Assumption />
            </Label>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Input
                id="calc-escalation"
                type="number"
                step="0.1"
                value={state.rateEscalation}
                onChange={(e) => update('rateEscalation', e.target.value)}
                className="h-11 sm:max-w-[160px]"
              />
              <Button type="button" variant="outline" size="sm" onClick={handleUsePaoTrend}>
                Use CPUC PAO 10-year trend
              </Button>
            </div>
            <FieldNote>
              {escalationFromPao
                ? `Compound annual growth rate implied by ${UTILITY_LABELS[state.utility]}’s 10-year residential rate increase, January 2016–June 2026 — residential, not commercial.`
                : 'Default 3%/yr. The button fills the CAGR implied by CPUC Public Advocates Office 10-year residential rate data — residential, not commercial.'}{' '}
              <SourceTag id="rates-27" />
              <SourceTag id="rates-30" />
              <SourceTag id="rates-31" />
              <SourceTag id="rates-32" />
            </FieldNote>
          </div>
        </CardContent>
      </Card>

      {/* ---------------------------------------------------------------- */}
      {/* Advanced assumptions */}
      {/* ---------------------------------------------------------------- */}
      <Accordion type="single" collapsible className="rounded-lg border border-border bg-card px-4">
        <AccordionItem value="advanced" className="border-0">
          <AccordionTrigger className="text-sm font-semibold text-foreground">Advanced assumptions</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="calc-degradation">
                  Degradation (%/yr) <SourceTag id="costs-12" />
                </Label>
                <Input
                  id="calc-degradation"
                  type="number"
                  step="0.01"
                  value={state.degradation}
                  onChange={(e) => update('degradation', e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-om">
                  O&amp;M ($/kWdc-yr) <SourceTag id="costs-11" />
                </Label>
                <Input
                  id="calc-om"
                  type="number"
                  step="0.01"
                  value={state.omPerKwYear}
                  onChange={(e) => update('omPerKwYear', e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-om-esc">
                  O&amp;M escalation (%/yr) <Assumption />
                </Label>
                <Input
                  id="calc-om-esc"
                  type="number"
                  step="0.1"
                  value={state.omEscalation}
                  onChange={(e) => update('omEscalation', e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-horizon">
                  Analysis horizon (years) <Assumption />
                </Label>
                <Input
                  id="calc-horizon"
                  type="number"
                  value={state.analysisHorizonYears}
                  onChange={(e) => update('analysisHorizonYears', e.target.value)}
                  className="h-11"
                />
                <FieldNote>NREL ATB models a 30-year system lifetime <SourceTag id="costs-13" />.</FieldNote>
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-discount">
                  Discount rate (%) <Assumption />
                </Label>
                <Input
                  id="calc-discount"
                  type="number"
                  step="0.1"
                  value={state.discountRate}
                  onChange={(e) => update('discountRate', e.target.value)}
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="calc-caprate">
                  Cap rate (%) <SourceTag id="value-27" />
                </Label>
                <Input
                  id="calc-caprate"
                  type="number"
                  step="0.1"
                  value={state.capRate}
                  onChange={(e) => update('capRate', e.target.value)}
                  className="h-11"
                />
                <FieldNote>CBRE H1 2026 national all-property median — use your appraiser&rsquo;s rate.</FieldNote>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* ---------------------------------------------------------------- */}
      {/* Results */}
      {/* ---------------------------------------------------------------- */}
      {error && (
        <div role="alert" className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {outputs && (
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle>Estimated results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">Cost and tax benefits</h3>
              <LineItem
                label={`Gross installed cost (${fmtNumber0.format(outputs.systemKwDc)} kWdc × ${fmtUsd2.format(outputs.installedCostPerWatt)}/W)`}
                value={fmtUsd0.format(outputs.grossInstalledCost)}
              />
              <LineItem
                label={`Federal ITC (§48E, ${fmtPercent1(outputs.itcRatePercent)})`}
                value={outputs.itcLabel === 'ineligible_2028_plus' ? '$0 (ineligible)' : fmtUsd0.format(outputs.itcAmount)}
                sub={outputs.itcLabel === 'elective_payment' ? 'Received as an elective payment, not a tax credit.' : undefined}
              />
              <LineItem label="Depreciable basis (gross − 50% of ITC)" value={fmtUsd0.format(outputs.depreciableBasis)} />
              <LineItem
                label="Federal year-1 depreciation tax value (100% bonus)"
                value={outputs.federalDepreciationValueYear1 !== null ? fmtUsd0.format(outputs.federalDepreciationValueYear1) : 'n/a'}
                sub={
                  outputs.federalDepreciationValueYear1 === null
                    ? 'Not applicable — tax-exempt elective pay claims no depreciation.'
                    : undefined
                }
              />
              <LineItem
                label="California depreciation tax value (5-yr MACRS, no bonus)"
                value={outputs.caDepreciationValueTotal !== null ? fmtUsd0.format(outputs.caDepreciationValueTotal) : '[source pending]'}
                sub={
                  outputs.caDepreciationValueTotal === null && outputs.taxProfile.kind !== 'TAX_EXEMPT'
                    ? 'IRS Publication 946 Table A-1 could not be fetched this session; not computed.'
                    : undefined
                }
              />
              <LineItem
                label="Net cost after tax benefits (undiscounted)"
                value={fmtUsd0.format(outputs.netCostAfterTaxBenefits)}
                sub="Tax benefits arrive on tax returns, not at purchase. A business with no tax liability cannot use the credit without transferring it (§6418)."
                emphasis
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">Production and savings</h3>
              <LineItem
                label="Year-1 production"
                value={`${fmtNumber0.format(outputs.year1ProductionKwh)} kWh`}
                sub={`Self-consumed ${fmtNumber0.format(outputs.year1SelfConsumedKwh)} kWh · Exported ${fmtNumber0.format(outputs.year1ExportedKwh)} kWh`}
              />
              <LineItem
                label="Year-1 savings"
                value={fmtUsd0.format(outputs.year1Savings)}
                sub={
                  outputs.exportRateIsAssumedZero
                    ? 'Exported energy valued at $0 — enter your export rate above. Demand-charge changes are not modeled; NBT export values vary hourly.'
                    : 'Demand-charge changes are not modeled; NBT export values vary hourly and this figure holds the entered rate flat.'
                }
                emphasis
              />
              <LineItem
                label="Simple payback"
                value={outputs.simplePaybackYears !== null ? `${outputs.simplePaybackYears.toFixed(1)} years` : 'n/a'}
              />
              <LineItem
                label={`${state.analysisHorizonYears}-year cumulative savings`}
                value={fmtUsd0.format(outputs.cumulativeSavings25yr)}
                sub="Includes rate escalation and production degradation."
              />
              <LineItem label={`NPV at ${state.discountRate}% discount rate`} value={fmtUsd0.format(outputs.npv)} />
              <LineItem label="IRR" value={outputs.irr !== null ? fmtPercent1(outputs.irr) : 'n/a'} />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-muted-foreground">Property impact</h3>
              <LineItem
                label="Property value indication (income approach)"
                value={fmtUsd0.format(outputs.propertyValueIndication)}
                sub={
                  <>
                    Year-1 NOI increase ÷ cap rate — an indication using the income-capitalization method appraisers use
                    for income property <SourceTag id="value-06" />
                    <SourceTag id="value-09" />
                    <SourceTag id="value-10" />. Not an appraisal; leased/PPA systems are treated differently{' '}
                    <SourceTag id="value-29" />
                    <SourceTag id="value-30" />. Certification-based green-building premiums (LEED/Energy Star) are not
                    solar-specific and are not included here <SourceTag id="value-13" />.
                  </>
                }
              />
              <LineItem
                label="Property tax"
                value={outputs.propertyTax.avoidedAnnualTax !== null ? `${fmtUsd0.format(outputs.propertyTax.avoidedAnnualTax)}/yr avoided` : 'No exclusion'}
                sub={
                  <>
                    {outputs.propertyTax.note} <SourceTag id="cal-const-xiiia-1" />
                  </>
                }
              />
            </div>

            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <h3 className="mb-2 flex items-center gap-1.5 text-sm font-bold text-foreground">
                <Info className="h-4 w-4" /> What this leaves out
              </h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {LEAVES_OUT_ITEMS.map((item) => (
                  <li key={item.text} className="flex gap-2">
                    <span aria-hidden className="text-muted-foreground/60">
                      &bull;
                    </span>
                    <span>
                      {item.text}
                      {item.sourceIds.map((id) => (
                        <SourceTag key={id} id={id} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                This is an unofficial estimate built from public sources — not a quote, appraisal, or tax advice.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Button type="button" variant="outline" onClick={handleCopySummary}>
                  {copyStatus === 'copied' ? 'Copied' : copyStatus === 'error' ? 'Copy failed — select text manually' : 'Copy this summary'}
                </Button>
                <Button asChild>
                  <Link href="/commercial-assessment">Request a commercial project review</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* ---------------------------------------------------------------- */}
      {/* Methodology and sources */}
      {/* ---------------------------------------------------------------- */}
      <details className="rounded-lg border border-border bg-card p-4 text-sm">
        <summary className="cursor-pointer font-semibold text-foreground">Methodology and sources</summary>
        <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
          {METHODOLOGY_SOURCE_IDS.map((id) => {
            const source = SOURCES[id];
            if (!source) return null;
            return (
              <li key={id}>
                <a href={source.url} target="_blank" rel="noopener noreferrer nofollow" className="font-medium text-primary hover:underline">
                  {source.label}
                </a>{' '}
                — {source.publisher}, {source.date}
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
}
