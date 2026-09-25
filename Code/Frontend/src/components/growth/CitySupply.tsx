import Link from 'next/link';
import { CPUC_IOU_CODES, UTILITY_DATA, type CityData } from '@/data/cities-data';
import { getUtilityRate, RATE_TRACKER_PATH, type UtilityRateKey } from '@/data/utility-rate-tracker';
import {
  SAVINGS_GENERATION,
  SAVINGS_SOURCES,
  SAVINGS_SPLIT,
  SAVINGS_SPLIT_SOURCE,
  SCE_BASELINE_ALLOCATION,
  SCE_BASELINE_REGIONS,
  SCE_TIER_PRICES,
  UTILITY_PLANS,
  type SavingsSource,
} from '@/data/savings-providers';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';

// =============================================================================
// "Who supplies your power and what it costs" for /solar-savings/<city>
// (2026-09-24, Block 3.4, Decision 42). Every figure comes from
// src/data/savings-providers.ts or the rate tracker, each with its source.
// =============================================================================

const TRACKER_KEY: Record<string, UtilityRateKey> = {
  pge: 'pge',
  sce: 'sce',
  sdge: 'sdge',
  smud: 'smud',
  gwp: 'gwp',
  mid: 'mid',
  rpu: 'riverside',
  apu: 'anaheim',
};

export interface CitySupplyFacts {
  city: CityData;
  /** Delivering utility's short name ("PG&E", "SMUD"). */
  utility: string;
  isIou: boolean;
  generation: (typeof SAVINGS_GENERATION)[string] | undefined;
  split: string | undefined;
  rateCents: number | null;
  rateAsOf: string | null;
  regions: readonly number[];
  answer: string;
  faqs: FaqJsonLdItem[];
  sources: SavingsSource[];
}

function regionPhrase(regions: readonly number[]): string {
  return regions.length === 1 ? `baseline region ${regions[0]}` : `baseline regions ${regions.slice(0, -1).join(', ')} and ${regions[regions.length - 1]}`;
}

function uniqueSources(list: SavingsSource[]): SavingsSource[] {
  const seen = new Set<string>();
  return list.filter((s) => (seen.has(s.url) ? false : (seen.add(s.url), true)));
}

export function citySupplyFacts(city: CityData): CitySupplyFacts {
  const u = UTILITY_DATA[city.utilityCode];
  const utility = u?.shortName ?? city.utilityDisplayName ?? 'the utility';
  const isIou = CPUC_IOU_CODES.has(city.utilityCode);
  const generation = SAVINGS_GENERATION[city.slug];
  const split = SAVINGS_SPLIT[city.slug];
  const trackerKey = TRACKER_KEY[city.utilityCode];
  const record = trackerKey ? getUtilityRate(trackerKey) : null;
  const rateCents = record?.averageResidentialRateCents ?? null;
  const rateAsOf = record && rateCents !== null ? record.asOf.replace(/ \(.*\)$/, '') : null;
  const regions = city.utilityCode === 'sce' ? SCE_BASELINE_REGIONS[city.slug] ?? [] : [];
  const name = city.name;

  const who = split
    ? `${name} is split between utilities: the Energy Commission's load-serving map shows ${split}, so the bill is the place to check which one serves your address.`
    : generation?.cca
      ? `${name} homes get their electricity from two providers on one ${utility} bill: ${utility} delivers it, and ${generation.cca.name} supplies the generation by default.`
      : isIou
        ? `${utility} both delivers and supplies the electricity for ${name} homes; no community choice aggregator supplies ${name} on the Energy Commission's load-serving map.`
        : `${u?.name ?? utility}, a publicly owned utility, supplies and delivers electricity in ${name}, so the CPUC does not set its rates.`;
  const cost =
    rateCents !== null
      ? ` ${utility}'s average residential rate was ${rateCents.toFixed(1)}¢ per kWh as of ${rateAsOf} (CPUC Public Advocates Office), and most of its customers also pay a fixed $24.15 a month.`
      : record?.sourceUrl
        ? ` ${utility} publishes its own rate schedules rather than an average the CPUC reports.`
        : '';
  const answer = `${who}${cost}`;

  const faqs: FaqJsonLdItem[] = [
    {
      question: `Who provides electricity in ${name}?`,
      answer: split
        ? `The Energy Commission's load-serving map shows ${split}. Your bill names the utility that serves your address.`
        : generation?.cca
          ? `${utility} delivers the power and sends the bill; ${generation.cca.name} supplies the generation by default. Both appear as separate charges on the ${utility} bill.`
          : isIou
            ? `${utility} delivers and supplies it. The Energy Commission's map shows no community choice aggregator at the center of ${name}, so the generation charges on the bill are ${utility}'s own.`
            : `${u?.name ?? utility} supplies and delivers it, and sets its own rates.`,
    },
  ];
  if (regions.length) {
    faqs.push({
      question: `What is SCE's baseline allowance in ${name}?`,
      answer: `SCE's Index of Communities puts ${name} in ${regionPhrase(regions)}. The summer allowance is ${regions.map((r) => `${SCE_BASELINE_ALLOCATION[r].summer} kWh a day in region ${r}`).join(' and ')}; that much is billed at the lower tier on SCE's tiered plan.`,
    });
  }
  const plans = UTILITY_PLANS[city.utilityCode];

  const sources = uniqueSources([
    ...(split ? [SAVINGS_SPLIT_SOURCE] : [SAVINGS_SOURCES.cecIouPou]),
    ...(generation?.sources ?? []),
    ...(rateCents !== null ? [SAVINGS_SOURCES.paoQ2_2026] : []),
    ...(record && rateCents === null && record.sourceUrl
      ? [{ label: record.sourceLabel, url: record.sourceUrl, fetchedAt: record.fetchedAt }]
      : []),
    ...(isIou || split ? [SAVINGS_SOURCES.d2405028, SAVINGS_SOURCES.cpucCareFera, SAVINGS_SOURCES.cpucNbt] : []),
    ...(plans ? [plans.source] : []),
    ...(regions.length ? [SAVINGS_SOURCES.sceIndex, SAVINGS_SOURCES.sceTiered] : []),
  ]);
  return { city, utility, isIou, generation, split, rateCents, rateAsOf, regions, answer, faqs, sources };
}

const link = 'text-primary hover:underline';

/** The provider, cost, plan, discount and solar-billing sections. */
export function CitySupplySections({ facts, companiesHref, costHref }: { facts: CitySupplyFacts; companiesHref?: string; costHref?: string }) {
  const { city, utility, isIou, generation, split, rateCents, rateAsOf, regions } = facts;
  const u = UTILITY_DATA[city.utilityCode];
  const name = city.name;
  const plans = UTILITY_PLANS[city.utilityCode];
  const record = TRACKER_KEY[city.utilityCode] ? getUtilityRate(TRACKER_KEY[city.utilityCode]) : null;
  const cpucRules = isIou || Boolean(split);
  return (
    <>
      <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Who supplies electricity in {name}</h2>
      {split ? (
        <p className="text-foreground/80 leading-relaxed mb-6">
          The Energy Commission&apos;s load-serving map shows {split}. Read the utility name
          and rate schedule on your {name} bill before you compare plans or solar offers.
        </p>
      ) : generation?.cca ? (
        <p className="text-foreground/80 leading-relaxed mb-6">
          {utility} delivers power to {name} homes, reads the meter and sends the bill;{' '}
          <a href={generation.cca.url} target="_blank" rel="noopener noreferrer" className={link}>
            {generation.cca.name}
          </a>{' '}
          supplies the generation by default, because {generation.basis}. The {name} bill
          lists {utility} delivery charges and {generation.cca.short} generation charges
          separately.
        </p>
      ) : isIou ? (
        <p className="text-foreground/80 leading-relaxed mb-6">
          {utility} delivers and supplies {name}&apos;s electricity, because {generation?.basis ?? "the CEC's load-serving map shows no community choice aggregator there"}.
        </p>
      ) : (
        <p className="text-foreground/80 leading-relaxed mb-6">
          {u?.name ?? utility} is publicly owned: it supplies and delivers {name}&apos;s
          electricity and sets its own rates{u?.accountUrl ? (
            <>
              , published on its{' '}
              <a href={record?.sourceUrl ?? u.accountUrl} target="_blank" rel="noopener noreferrer" className={link}>
                rates and service pages
              </a>
            </>
          ) : null}
          .
        </p>
      )}

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What electricity costs in {name}</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        {rateCents !== null
          ? `${utility}'s average residential rate was ${rateCents.toFixed(1)}¢ per kWh as of ${rateAsOf} (CPUC Public Advocates Office), plus a fixed $24.15 a month ($12.08 on FERA, $6.00 on CARE) under CPUC Decision 24-05-028. `
          : record?.basisNote
            ? `No comparable average is published: ${record.basisNote}. `
            : `${utility} publishes its own schedules rather than an average the CPUC reports. `}
        {plans ? `Its residential plans include ${plans.text}. ` : ''}
        The{' '}
        <Link href={RATE_TRACKER_PATH} className={link}>
          California utility rate tracker
        </Link>{' '}
        compares the large utilities.
      </p>
      {regions.length > 0 ? (
        <p className="text-foreground/80 leading-relaxed mb-6">
          SCE&apos;s Index of Communities puts {name} in {regionPhrase(regions)}.{' '}
          {regions
            .map((r) => {
              const a = SCE_BASELINE_ALLOCATION[r];
              return `Region ${r} (${a.climate}): ${a.summer} kWh a day June to September, ${a.winter} kWh a day October to May`;
            })
            .join('; ')}
          . That baseline is billed at {SCE_TIER_PRICES.tier1}¢ per kWh on the tiered plan and use
          above it at {SCE_TIER_PRICES.tier2}¢, as SCE posted them on Sept. 24, 2026.
        </p>
      ) : null}

      <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Discounts and solar billing</h2>
      <p className="text-foreground/80 leading-relaxed mb-6">
        {cpucRules
          ? `${split ? 'On a PG&E, SCE or SDG&E bill, ' : ''}CARE takes 30–35% off and FERA 18% off for eligible households, according to the CPUC, and new solar customers go on its Net Billing Tariff, whose export credit the CPUC says is usually below the retail rate.`
          : `CARE, FERA and the CPUC Net Billing Tariff cover PG&E, SCE and SDG&E only; ${utility} runs its own discounts and solar rules.`}{' '}
        <a href={u?.careFeraUrl ?? u?.accountUrl} target="_blank" rel="noopener noreferrer" className={link}>
          {utility}&apos;s assistance page
        </a>{' '}
        has the application.{generation?.cca ? ` ${generation.cca.short} credits the generation part of a solar bill under its own terms.` : ''}
        {companiesHref ? (
          <>
            {' '}Installers active here are on the{' '}
            <Link href={companiesHref} className={link}>
              {name} solar companies page
            </Link>
            {costHref ? (
              <>
                ; prices and permits on the{' '}
                <Link href={costHref} className={link}>
                  {name} solar cost page
                </Link>
              </>
            ) : null}
            .
          </>
        ) : null}
      </p>
    </>
  );
}
