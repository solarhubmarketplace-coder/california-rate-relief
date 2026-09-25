import Link from "next/link";
import { growthCities, type GrowthCity } from "@/data/growth-cities";
import { getCityBySlug, UTILITY_DATA, CPUC_IOU_CODES, utilityRateText, type CityData } from "@/data/cities-data";
import { RelatedGuides, type RelatedGuideLink } from "@/components/shared/RelatedGuides";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { DecisionPage, type KeyStat, type Source } from "./DecisionPage";
import { HeroQuickCheck } from "./HeroQuickCheck";
import { cityCostPath, getPublishableCityCostSlugs } from "@/data/city-cost-data";
import {
  CityLocalChecks,
  CityLocalSections,
  CityQuestions,
  CityRegionPlaces,
} from "./CityLocalDetails";
import { CitySiblingLinks, NearbyCityPages } from "./NearbyCostCities";
import { CityInstallerNumbers, CityInstallerTable, installerAnswer, placePhrase } from "./CityInstallers";
import {
  companiesDg,
  dgCountyScope,
  CSLB_CHECK_URL,
  DGSTATS_CHECKED,
  DGSTATS_URL,
  fmtCount,
  fmtShare,
  joinNames,
  type CompaniesDg,
} from "@/data/dgstats/companies";
import { cityPageDates, cityQuickCheckUtility, companiesPageSeo, growthUtilityForForm, isLiveCityPage } from "@/lib/city-pages";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";
import { isBillSection, savingsCarriesBill } from "@/lib/city-bill-content";

/**
 * The contract-risk guides a reader comparing installers needs. Until
 * 2026-09-23 every companies page linked the same seven (Block 5 §1.2 item 7:
 * 123 city pages carried the identical block). Each page now links two, picked
 * from the city slug so the pair varies across the family (Block 5 §4.2, §5.10).
 */
const CONTRACT_GUIDES: RelatedGuideLink[] = [
  { href: "/solar-problems/solar-dealer-fees-explained", label: "How dealer fees pay for a low advertised rate" },
  { href: "/solar-problems/solar-escalator-clause-explained", label: "The escalator clause, and what it does to year 15" },
  { href: "/solar-problems/ucc-1-lien-solar-california", label: "UCC-1 liens and what they attach to" },
  { href: "/solar-problems/solar-contract-red-flags-california", label: "Contract red flags in the California disclosure forms" },
  { href: "/solar-problems/solar-door-to-door-sales-california", label: "What a door-to-door rep can and cannot legally do" },
  { href: "/solar-problems/solar-sales-tactics-california", label: "Common sales tactics and what each one obscures" },
];

function contractGuidesFor(slug: string): RelatedGuideLink[] {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  const first = h % CONTRACT_GUIDES.length;
  const second = (first + 1 + (h % (CONTRACT_GUIDES.length - 1))) % CONTRACT_GUIDES.length;
  return [CONTRACT_GUIDES[first], CONTRACT_GUIDES[second === first ? (first + 1) % CONTRACT_GUIDES.length : second]];
}

const DG_SOURCE: Source = {
  label: "California Distributed Generation Statistics (CPUC): Interconnected Project Sites data set, data through May 31, 2026",
  url: DGSTATS_URL,
};
const CSLB_SOURCE: Source = {
  label: "California Contractors State License Board: Check a License",
  url: CSLB_CHECK_URL,
};

/**
 * 2026-09-24 (Block 3.3): the company websites the page used to show as "a
 * company to investigate" (growth-cities `provider`, and CityProviderOptions)
 * were picked by hand from the companies' own marketing, which RULES.md rule 4
 * does not accept as a source. The CPUC's interconnection records now answer
 * "which companies install here", so those blocks and their source rows go.
 */
function withoutProviderSources(city: GrowthCity): Source[] {
  if (!city.provider) return city.sources;
  const host = new URL(city.provider.url).hostname.replace(/^www\./, "");
  return city.sources.filter((s) => new URL(s.url).hostname.replace(/^www\./, "") !== host);
}

const DG_FACT_SOURCE = { publisher: "CPUC DG Stats", date: DGSTATS_CHECKED, url: DGSTATS_URL };

/** Key facts for a city with no hand-written ones: the DG Stats numbers. */
function dgKeyFacts(dg: CompaniesDg, legacy: CityData | undefined): KeyStat[] {
  const facts: KeyStat[] = [
    {
      label: "Home solar systems connected, 2025",
      value: fmtCount(dg.scope.systems2025),
      note: dg.kind === "city" ? `${dg.place}, ${joinNames(dg.ious)} customers` : dg.kind === "county" ? `${dg.county} County` : `${joinNames(dg.ious)}-served ${dg.place} addresses`,
      source: DG_FACT_SOURCE,
    },
  ];
  const tpo = fmtShare(dg.scope.thirdPartyOwnedShare2025);
  if (tpo) facts.push({ label: "Leased or PPA", value: tpo, note: "Share of 2025 systems a company owns", source: DG_FACT_SOURCE });
  if (legacy) {
    const utility = UTILITY_DATA[legacy.utilityCode];
    const rate = utility ? utilityRateText(utility) : null;
    if (utility && !legacy.utilityConfirmationRequired) {
      facts.push({
        label: "Electric utility",
        value: utility.shortName,
        note: rate?.cents ? `${rate.cents}/kWh average residential rate, CPUC` : "Sets its own rates and solar rules",
        ...(rate?.cents && utility.rateSource
          ? { source: { publisher: "CPUC Public Advocates Office", date: utility.rateSource.fetchedAt, url: utility.rateSource.url } }
          : {}),
      });
    } else {
      const battery = fmtShare(dg.scope.storageAttachShare2025);
      if (battery) facts.push({ label: "With a battery", value: battery, note: "Share of 2025 systems", source: DG_FACT_SOURCE });
    }
  }
  return facts;
}

/** Plain-data FAQ for a city with no hand-written questions. */
function dgFaqs(dg: CompaniesDg, place: string): FaqJsonLdItem[] {
  const [a, b, c] = dg.rows;
  const where = dg.kind === "county" ? `${dg.county} County` : placePhrase(place);
  const faqs: FaqJsonLdItem[] = [];
  if (a) {
    faqs.push({
      question: `Which solar companies install the most systems in ${placePhrase(place)}?`,
      answer: `In 2025 interconnection records, ${a.name} was the installer on ${fmtCount(a.n2025)} home systems in ${where}${b ? `, ${b.name} on ${fmtCount(b.n2025)}` : ""}${c ? ` and ${c.name} on ${fmtCount(c.n2025)}` : ""}, out of ${fmtCount(dg.scope.systems2025)}. Since January 2024 the same companies were named on ${[a, b, c].filter(Boolean).map((r) => fmtCount(r!.n2024to2026)).join(", ")} systems. That is a count, not a ranking.`,
    });
  }
  const tpo = fmtShare(dg.scope.thirdPartyOwnedShare2025);
  const battery = fmtShare(dg.scope.storageAttachShare2025);
  if (tpo) {
    faqs.push({
      question: `Do most ${placePhrase(place)} homeowners buy or lease their solar?`,
      answer: `Of ${fmtCount(dg.scope.systems2025)} home systems connected in ${where} in 2025, ${tpo} were leased or on a power purchase agreement${battery ? ` and ${battery} had a battery` : ""}${dg.scope.medianSizeKwDc2025 ? `; the median size was ${dg.scope.medianSizeKwDc2025} kW DC` : ""}.`,
    });
  }
  const licensed = dg.rows.filter((r) => r.cslb).slice(0, 3);
  faqs.push({
    question: `How do I check a ${placePhrase(place)} solar company's license?`,
    answer: `Look the number up on the CSLB's Check a License page.${licensed.length ? ` For the companies named on the most ${where} systems in 2025, the applications list ${joinNames(licensed.map((r) => `${r.cslb} for ${r.name}`))}.` : ""} The CSLB record shows the status, classification and any complaint disclosure.`,
  });
  return faqs;
}

/** "SDG&E connected every Encinitas system in the 2025 records." */
function utilityShareSentence(dg: CompaniesDg, name: string): string {
  const entries = Object.entries(dg.scope.utility2025).sort((a, b) => b[1] - a[1]);
  const label: Record<string, string> = { PGE: "PG&E", SCE: "SCE", SDGE: "SDG&E" };
  if (entries.length === 1) return `${label[entries[0][0]] ?? entries[0][0]} connected every ${name} system in the 2025 records.`;
  return `Of the ${fmtCount(dg.scope.systems2025)} ${name} systems in the 2025 records, ${joinNames(entries.map(([code, n]) => `${label[code] ?? code} connected ${fmtCount(n)}`))}.`;
}

function answerParagraph(city: GrowthCity | undefined): string | null {
  return city?.answer ?? null;
}

/**
 * /solar-companies/<city> for every live slug (2026-09-24, Block 3.3). The
 * page answers "which companies install solar here" first, from the CPUC's
 * interconnection records, then gives the quick check, the local numbers and
 * the city's own sourced facts. Cities with a growth-cities.ts entry keep
 * their key facts, sections and questions; the 19 cities that only have a
 * cities-data.ts entry get the same page built from the data set and their
 * utility record, replacing the older nine-company template.
 */
export function CityComparison({ slug }: { slug: string }) {
  const city = growthCities[slug];
  const legacy = city ? undefined : getCityBySlug(slug);
  const name = city?.name ?? legacy!.name;
  const county = city?.county ?? legacy!.county;
  const dg = companiesDg(slug, name, county);
  const hasCostTwin = getPublishableCityCostSlugs().includes(slug);
  const seo = companiesPageSeo(slug);
  const path = `/solar-companies/${slug}`;
  const modified = cityPageDates("companies", slug).modified;
  const hasSavings = (city ? city.hasSavingsGuide !== false : true) && isLiveCityPage("savings", slug);
  const countyScope = dg && dg.kind === "city" && dg.county ? dgCountyScope(dg.county) : null;
  const legacyUtility = legacy ? UTILITY_DATA[legacy.utilityCode] : undefined;
  const needsConfirmation = legacy?.utilityConfirmationRequired === true;
  // The inquiry topic keeps each template's pre-2026-09-24 wording: it travels
  // with the lead, and a page rebuild is not a reason to change intake data.
  const topic = city
    ? `Compare solar companies in ${name}, California`
    : `Solar companies in ${name} and quote comparison`;
  const sources: Source[] = city
    ? [...withoutProviderSources(city), DG_SOURCE, CSLB_SOURCE]
    : [
        DG_SOURCE,
        CSLB_SOURCE,
        ...(legacyUtility?.rateSource && CPUC_IOU_CODES.has(legacyUtility.code) && !needsConfirmation
          ? [{ label: legacyUtility.rateSource.label, url: legacyUtility.rateSource.url }]
          : []),
      ];
  const intro =
    (dg ? installerAnswer(dg) : null) ??
    city?.answer ??
    `A useful ${county} quote starts with the actual property, electric bill and scope of work. Compare the same system. Then compare the contract.`;
  const keyStats = city?.keyFacts ?? (dg ? dgKeyFacts(dg, legacy) : []);
  const lead = answerParagraph(city);
  const billOnSavings = savingsCarriesBill(slug);
  return (
    <DecisionPage
      title={seo?.h1 ?? `Solar companies in ${name}, California`}
      topic={topic}
      authorSchema="person"
      breadcrumbs={[{ label: "Solar companies in California", href: "/best-solar-companies-california" }]}
      breadcrumbLabel={`Solar companies in ${name}`}
      intro={intro}
      path={path}
      sources={sources}
      utility={city ? growthUtilityForForm(city.utility) : needsConfirmation ? "" : legacy!.utilityCode}
      // The city's own sources keep their check date; the DG Stats and CSLB
      // rows added 2026-09-24 carry theirs inline, next to the table.
      sourceCheckedDate={city?.sourceCheckedDate ?? DGSTATS_CHECKED}
      contentModifiedDate={modified}
      keyStats={keyStats}
      faqs={city ? [] : dg ? dgFaqs(dg, name) : []}
      // The quick check follows the first answer (the installer table), not
      // the H1 (Block 3.3 / 7.1): it is placed in the body below.
      quickCheck={false}
    >
      {dg ? <CityInstallerTable dg={dg} /> : null}
      <HeroQuickCheck
        compact
        topic={topic}
        utility={cityQuickCheckUtility("companies", slug)}
      />
      {dg ? <CityInstallerNumbers dg={dg} countyScope={countyScope} /> : null}
      <CitySiblingLinks slug={slug} type="companies" />
      {/* 2026-09-23 (Tier 2): a county or region page lists each place's
          utility, generation provider and permit office, linking city pages. */}
      <CityRegionPlaces slug={slug} />
      {lead ? (
        <section>
          <h2>Hiring a solar company in {placePhrase(name)}</h2>
          <p>{lead}</p>
        </section>
      ) : null}
      {/* 2026-09-24: where the city's savings page is live, the bill copy
          lives there (lib/city-bill-content.ts) and this page links to it. */}
      {city && !billOnSavings ? (
        <section>
          <h2>Start with your {name} electricity bill</h2>
          <p>{city.bill}</p>
        </section>
      ) : legacyUtility ? (
        <section>
          <h2>Who connects a {name} solar system</h2>
          <p>
            {dg && dg.kind !== "county" ? `${utilityShareSentence(dg, name)} ` : ""}
            {needsConfirmation
              ? `The city name does not settle the utility for every ${name} address, so confirm it on your bill.`
              : CPUC_IOU_CODES.has(legacyUtility.code)
                ? `A new ${name} system on ${legacyUtility.shortName} goes on the CPUC Net Billing Tariff; the key facts above give ${legacyUtility.shortName}'s average rate.`
                : utilityRateText(legacyUtility).sentence}
          </p>
        </section>
      ) : null}
      <CityLocalSections slug={slug} exclude={billOnSavings ? isBillSection : undefined} />
      <CityLocalChecks slug={slug} />
      {city?.projectLinks?.length ? (
        <RelatedGuides
          heading={`Related ${name} project questions`}
          intro="Use these guides to prepare the specific questions a written bid needs to answer."
          links={city.projectLinks}
        />
      ) : null}
      {city ? (
        <section>
          <h2>A comparison to ask for</h2>
          <p>{city.example}</p>
        </section>
      ) : null}
      <section>
        <h2>Verify the company behind the {name} quote</h2>
        <p>
          Match the business name and license number on each {name} proposal to the{" "}
          <a href={CSLB_CHECK_URL} className="underline">
            CSLB record
          </a>
          , then use our{" "}
          <Link className="underline" href="/solar-installers/how-to-verify-a-solar-contractor-california">
            contractor verification steps
          </Link>
          , the{" "}
          <Link className="underline" href="/blog/solar-system-quotes-california">
            quote comparison guide
          </Link>{" "}
          and the{" "}
          <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
            PPA, loan, lease and cash comparison
          </Link>
          {hasSavings ? (
            <>
              . What you pay the utility today is on the{" "}
              <Link className="underline" href={`/solar-savings/${slug}`}>
                {name} rates and bills page
              </Link>
            </>
          ) : null}
          .
        </p>
        {/* 2026-09-24 (Block 3.3): the "Local permit and project checks"
            section repeated the permit facts on 121 pages. One line to the
            page that carries them replaces it. */}
        {hasCostTwin ? (
          <p className="mt-3">
            Permit fees and the filing route are on the{" "}
            <Link className="underline" href={cityCostPath(slug)}>
              {name} solar cost and permit page
            </Link>
            .
          </p>
        ) : null}
      </section>
      <CityQuestions slug={slug} />
      {/*
        Phase 1 of the 2026-09-17 California strategy linked every /solar-problems
        guide from every companies page. Two per page now, varied by city.
      */}
      <RelatedGuides
        heading={`Before you sign anything in ${placePhrase(name)}`}
        intro="Two of the contract terms that most often change what a quote really costs."
        links={contractGuidesFor(slug)}
      />
      {/* 2026-09-22: replaces the hand-picked CityRegionalLinks list (15 of 50
          cities had one) with the nearest live city pages, same county first. */}
      {/* A county or region page already links every city page in it from
          its table, and has no map point for the distance sort. */}
      {city?.region ? null : <NearbyCityPages slug={slug} type="companies" />}
      <HubSpokeLinks hub="city_installers" currentPath={path} max={6} title="Solar companies in other California cities" />
    </DecisionPage>
  );
}
