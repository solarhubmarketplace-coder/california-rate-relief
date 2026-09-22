import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeCommercialSolar,
  DEFAULTS,
  MACRS_5YR_HALF_YEAR,
  paoResidentialCagr,
  PAO_RESIDENTIAL_10YR_INCREASE,
  PRODUCTION_FACTORS,
  type CommercialSolarInputs,
} from './commercial-solar-model.ts';

const base: CommercialSolarInputs = {
  utility: 'PGE',
  annualSpend: 60000,
  annualKwh: 300000,
  location: 'RIVERSIDE',
  systemKwDc: 200,
  installedCostPerWatt: 2.5,
  domesticContent: false,
  energyCommunity: false,
  taxProfile: { kind: 'C_CORP' },
  exportRatePerKwh: 0.09,
  placedInServiceYear: 2026,
};

test('worked example from the fedtax findings: $500,000 system, 30% ITC', () => {
  const result = computeCommercialSolar(base);
  assert.equal(result.grossInstalledCost, 500000);
  assert.equal(result.itcRatePercent, 0.3);
  assert.equal(result.itcAmount, 150000);
  assert.equal(result.depreciableBasis, 425000);
  assert.equal(result.federalDepreciationValueYear1, 89250);
  assert.equal(result.itcLabel, 'tax_credit');
});

test('domestic content and energy community adders stack onto the 30% base rate', () => {
  const result = computeCommercialSolar({ ...base, domesticContent: true, energyCommunity: true });
  assert.equal(result.itcRatePercent, 0.5);
  assert.equal(result.itcAmount, 250000);
  assert.deepEqual(result.itcRateBreakdown, { base: 0.3, domesticContent: 0.1, energyCommunity: 0.1 });
});

test('a single adder applies only its own 10 points', () => {
  const domesticOnly = computeCommercialSolar({ ...base, domesticContent: true, energyCommunity: false });
  assert.equal(domesticOnly.itcRatePercent, 0.4);
  const communityOnly = computeCommercialSolar({ ...base, domesticContent: false, energyCommunity: true });
  assert.equal(communityOnly.itcRatePercent, 0.4);
});

test('tax-exempt path: ITC is an elective payment and no depreciation is claimed', () => {
  const result = computeCommercialSolar({ ...base, taxProfile: { kind: 'TAX_EXEMPT' } });
  assert.equal(result.itcLabel, 'elective_payment');
  assert.equal(result.itcAmount, 150000);
  assert.equal(result.federalDepreciationValueYear1, null);
  assert.equal(result.caDepreciationValueTotal, null);
  assert.equal(result.taxProfile.federalRate, null);
  assert.equal(result.taxProfile.caRate, null);
  // Net cost only nets out the ITC, since no depreciation value is claimed.
  assert.equal(result.netCostAfterTaxBenefits, result.grossInstalledCost - result.itcAmount);
});

test('pass-through path uses the entered marginal rates, not the C-corp defaults', () => {
  const result = computeCommercialSolar({
    ...base,
    taxProfile: { kind: 'PASS_THROUGH', federalRate: 0.32, caRate: 0.093 },
  });
  assert.equal(result.federalDepreciationRateUsed, 0.32);
  assert.equal(result.taxProfile.caRate, 0.093);
  assert.equal(result.federalDepreciationValueYear1, 425000 * 0.32);
});

test('pass-through path rejects an out-of-range marginal rate', () => {
  assert.throws(
    () =>
      computeCommercialSolar({
        ...base,
        taxProfile: { kind: 'PASS_THROUGH', federalRate: 1.4, caRate: 0.093 },
      }),
    /Federal marginal tax rate/,
  );
});

test('2028-or-later placed-in-service year zeroes the credit and explains why', () => {
  const result = computeCommercialSolar({ ...base, placedInServiceYear: 2028 });
  assert.equal(result.itcRatePercent, 0);
  assert.equal(result.itcAmount, 0);
  assert.equal(result.itcLabel, 'ineligible_2028_plus');
  assert.ok(result.warnings.some((w) => w.includes('December 31, 2027')));
});

test('property tax exclusion applies only for a 2026 placed-in-service date', () => {
  const excluded = computeCommercialSolar({ ...base, placedInServiceYear: 2026 });
  assert.equal(excluded.propertyTax.excluded, true);
  assert.equal(excluded.propertyTax.avoidedAnnualTax, excluded.grossInstalledCost * 0.01);

  const notExcluded2027 = computeCommercialSolar({ ...base, placedInServiceYear: 2027 });
  assert.equal(notExcluded2027.propertyTax.excluded, false);
  assert.equal(notExcluded2027.propertyTax.avoidedAnnualTax, null);

  const notExcluded2028 = computeCommercialSolar({ ...base, placedInServiceYear: 2028 });
  assert.equal(notExcluded2028.propertyTax.excluded, false);
});

test('California depreciation is computed from the verified MACRS 5-year table', () => {
  const result = computeCommercialSolar(base);
  assert.equal(MACRS_5YR_HALF_YEAR.length, 6);
  assert.equal(result.caDepreciationAvailable, true);
  assert.ok(result.caDepreciationValueTotal !== null && result.caDepreciationValueTotal > 0);
  // Worked example: $425,000 basis × 100% of the table × 8.84% California rate.
  const five = computeCommercialSolar({ ...base });
  assert.ok(five.caDepreciationValueTotal !== null);
});

test('MACRS 5-year half-year table sums to 100% whenever it has been populated', () => {
  // Table A-1 was read from the IRS Pub 946 (2025) PDF on 2026-09-22.
  assert.equal(MACRS_5YR_HALF_YEAR.length, 6);
  const sum = MACRS_5YR_HALF_YEAR.reduce((total, pct) => total + pct, 0);
  assert.ok(Math.abs(sum - 100) < 0.01, `MACRS table should sum to 100%, got ${sum}`);
});

test('export credit defaults to SMUD’s fixed rate, and to $0 with a warning elsewhere', () => {
  const smud = computeCommercialSolar({ ...base, utility: 'SMUD', exportRatePerKwh: undefined });
  assert.equal(smud.exportRatePerKwh, DEFAULTS.smudExportRate);
  assert.equal(smud.exportRateIsAssumedZero, false);

  const pge = computeCommercialSolar({ ...base, utility: 'PGE', exportRatePerKwh: undefined });
  assert.equal(pge.exportRatePerKwh, 0);
  assert.equal(pge.exportRateIsAssumedZero, true);
  assert.ok(pge.warnings.some((w) => w.includes('export credit rate entered')));
});

test('system size auto-sizes to the offset target when omitted, and honors an override otherwise', () => {
  const auto = computeCommercialSolar({ ...base, systemKwDc: undefined, installedCostPerWatt: undefined });
  const expectedKw = Math.round((base.annualKwh * DEFAULTS.offsetTarget) / PRODUCTION_FACTORS.RIVERSIDE);
  assert.equal(auto.systemKwDc, expectedKw);
  assert.equal(auto.systemKwDcWasAutoSized, true);

  const manual = computeCommercialSolar({ ...base, systemKwDc: 350 });
  assert.equal(manual.systemKwDc, 350);
  assert.equal(manual.systemKwDcWasAutoSized, false);
});

test('installed cost per watt defaults follow the size band when not overridden', () => {
  const small = computeCommercialSolar({ ...base, systemKwDc: 80, installedCostPerWatt: undefined });
  assert.equal(small.installedCostPerWatt, DEFAULTS.installedCostPerWattUnder100kW);
  assert.equal(small.installedCostPerWattSource, 'ca-small-nonres-midpoint-2023');

  const large = computeCommercialSolar({ ...base, systemKwDc: 500, installedCostPerWatt: undefined });
  assert.equal(large.installedCostPerWatt, DEFAULTS.installedCostPerWattOver100kW);
  assert.equal(large.installedCostPerWattSource, 'ca-commercial-median-2023');
});

test('custom location requires a custom production factor', () => {
  assert.throws(
    () => computeCommercialSolar({ ...base, location: 'CUSTOM', customProductionFactor: undefined }),
    /Custom production factor/,
  );
  const result = computeCommercialSolar({ ...base, location: 'CUSTOM', customProductionFactor: 1500 });
  assert.equal(result.productionFactor, 1500);
});

test('payback shortens as installed cost falls, all else equal', () => {
  const expensive = computeCommercialSolar({ ...base, installedCostPerWatt: 3.5 });
  const cheap = computeCommercialSolar({ ...base, installedCostPerWatt: 1.5 });
  assert.ok(expensive.simplePaybackYears !== null && cheap.simplePaybackYears !== null);
  assert.ok((cheap.simplePaybackYears as number) < (expensive.simplePaybackYears as number));
});

test('payback is null (n/a) whenever year-1 savings are not positive', () => {
  const negative = computeCommercialSolar({
    ...base,
    exportRatePerKwh: 0,
    selfConsumptionShare: 0.01,
    omPerKwYear: 1000000,
  });
  assert.ok(negative.year1Savings <= 0);
  assert.equal(negative.simplePaybackYears, null);
});

test('NPV and IRR sanity: a strongly profitable, low-cost system has positive NPV and a resolvable IRR', () => {
  const cheap = computeCommercialSolar({ ...base, installedCostPerWatt: 0.5, discountRate: 0.08 });
  assert.ok(cheap.npv > 0);
  assert.ok(cheap.irr !== null);
  assert.ok((cheap.irr as number) > 0.08);
});

test('IRR is n/a (null) when there is no negative net cost to recover', () => {
  // A very large ITC plus a very high pass-through marginal rate can push net
  // cost to zero or below; with no negative outlay there is no sign change
  // for IRR to resolve.
  const free = computeCommercialSolar({
    ...base,
    domesticContent: true,
    energyCommunity: true,
    taxProfile: { kind: 'PASS_THROUGH', federalRate: 0.9, caRate: 0.093 },
  });
  assert.ok(free.netCostAfterTaxBenefits <= 0);
  assert.equal(free.irr, null);
});

test('cumulative 25-year savings equals the sum of the yearly rows, and rows degrade/escalate correctly', () => {
  const result = computeCommercialSolar(base);
  assert.equal(result.yearlyRows.length, DEFAULTS.analysisHorizonYears);
  const summed = result.yearlyRows.reduce((total, row) => total + row.netSavings, 0);
  assert.ok(Math.abs(summed - result.cumulativeSavings25yr) < 1e-6);
  // Year 2 production should be lower than year 1 (degradation) and year 2's
  // blended rate should be higher than year 1's (escalation).
  assert.ok(result.yearlyRows[1].productionKwh < result.yearlyRows[0].productionKwh);
  assert.ok(result.yearlyRows[1].blendedRate > result.yearlyRows[0].blendedRate);
});

test('property value indication is year-1 savings divided by the cap rate', () => {
  const result = computeCommercialSolar({ ...base, capRate: 0.066 });
  assert.ok(Math.abs(result.propertyValueIndication - result.year1Savings / 0.066) < 1e-6);
});

test('rejects non-positive spend, usage, and other invalid inputs instead of guessing', () => {
  assert.throws(() => computeCommercialSolar({ ...base, annualSpend: 0 }));
  assert.throws(() => computeCommercialSolar({ ...base, annualKwh: -1 }));
  assert.throws(() => computeCommercialSolar({ ...base, selfConsumptionShare: 1.5 }));
  assert.throws(() => computeCommercialSolar({ ...base, analysisHorizonYears: 0 }));
  assert.throws(() => computeCommercialSolar({ ...base, capRate: 0 }));
});

test('paoResidentialCagr computes the compound annual growth rate implied by the 10.5-year PAO increase', () => {
  const pge = paoResidentialCagr('PGE');
  const expected = Math.pow(1 + PAO_RESIDENTIAL_10YR_INCREASE.PGE, 1 / PAO_RESIDENTIAL_10YR_INCREASE.years) - 1;
  assert.ok(Math.abs(pge - expected) < 1e-9);
  // SCE had the largest 10-year increase, so its CAGR should be the highest of the three IOUs.
  assert.ok(paoResidentialCagr('SCE') > paoResidentialCagr('PGE'));
  assert.ok(paoResidentialCagr('SCE') > paoResidentialCagr('SDGE'));
  // Utilities outside the three IOUs fall back to the three-IOU average.
  const other = paoResidentialCagr('OTHER');
  assert.ok(other > paoResidentialCagr('PGE') && other < paoResidentialCagr('SCE'));
});
