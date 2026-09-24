import Link from "next/link";
import { growthCities } from "@/data/growth-cities";
import { RelatedGuides, type RelatedGuideLink } from "@/components/shared/RelatedGuides";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { DecisionPage, QuoteChecklist } from "./DecisionPage";
import { CityProviderOptions } from "./CityProviderOptions";
import { cityCostPath, getPublishableCityCostSlugs } from "@/data/city-cost-data";
import {
  CityLocalChecks,
  CityLocalSections,
  CityPublishedProvider,
  CityQuestions,
} from "./CityLocalDetails";
import { CitySiblingLinks, NearbyCityPages } from "./NearbyCostCities";
import { cityPageDates, cityQuickCheckUtility, companiesPageSeo, isLiveCityPage } from "@/lib/city-pages";

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

export function CityComparison({ slug }: { slug: string }) {
  const city = growthCities[slug];
  // 2026-09-22: link to the /solar-cost/<city> twin when one is actually
  // publishable (sourced, gated) — see canonical-redirects.ts for the SERP
  // reasoning behind this route being live again instead of redirected.
  const hasCostTwin = getPublishableCityCostSlugs().includes(slug);
  const seo = companiesPageSeo(slug);
  const path = `/solar-companies/${slug}`;
  const modified = cityPageDates("companies", slug).modified;
  return (
    <DecisionPage
      title={seo?.h1 ?? `Compare solar companies in ${city.name}, California`}
      // The inquiry topic keeps its pre-2026-09-22 wording: it travels with the
      // lead, and the H1 change is not a reason to change intake data.
      topic={`Compare solar companies in ${city.name}, California`}
      authorSchema="person"
      breadcrumbs={[{ label: "Solar companies in California", href: "/best-solar-companies-california" }]}
      breadcrumbLabel={`Solar companies in ${city.name}`}
      intro={
        city.answer ??
        `A useful ${city.county} quote starts with the actual property, electric bill and scope of work. Compare the same system. Then compare the contract.`
      }
      path={path}
      sources={city.sources}
      utility={city.utility}
      sourceCheckedDate={city.sourceCheckedDate}
      contentModifiedDate={modified}
      keyStats={city.keyFacts}
      // Bill-first step right under the H1 and byline (a phone's first
      // screen); no utility pre-selected for a city split between utilities.
      quickCheck="afterByline"
      quickCheckUtility={cityQuickCheckUtility("companies", slug)}
    >
      <CitySiblingLinks slug={slug} type="companies" />
      {city.provider ? (
        <CityPublishedProvider slug={slug} />
      ) : (
        <CityProviderOptions slug={slug} name={city.name} />
      )}
      <section>
        <h2>Start with your {city.name} electricity bill</h2>
        <p>{city.bill}</p>
      </section>
      <CityLocalSections slug={slug} />
      <section>
        <h2>Local permit and project checks</h2>
        <p>{city.local}</p>
      </section>
      <CityLocalChecks slug={slug} />
      <QuoteChecklist />
      {city.projectLinks?.length ? (
        <RelatedGuides
          heading={`Related ${city.name} project questions`}
          intro="Use these guides to prepare the specific questions a written bid needs to answer."
          links={city.projectLinks}
        />
      ) : null}
      <section>
        <h2>A comparison to ask for</h2>
        <p>{city.example}</p>
      </section>
      <section>
        <h2>Verify the company behind the {city.name} quote</h2>
        <p>
          Match the legal business name and license number on the proposal to the{" "}
          <a
            href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
            className="underline"
          >
            CSLB license record
          </a>{" "}
          and follow our{" "}
          <Link className="underline" href="/solar-installers/how-to-verify-a-solar-contractor-california">
            contractor verification steps
          </Link>
          . Then line the offers up on the{" "}
          <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
            PPA, loan, lease and cash comparison
          </Link>
          {hasCostTwin ? (
            <>
              {" "}and the{" "}
              <Link className="underline" href={cityCostPath(slug)}>
                {city.name} price factors
              </Link>
            </>
          ) : null}
          {city.hasSavingsGuide !== false && isLiveCityPage("savings", slug) ? (
            <>
              ; what you pay the utility today is on the{" "}
              <Link className="underline" href={`/solar-savings/${slug}`}>
                {city.name} rates and bills page
              </Link>
            </>
          ) : null}
          .
        </p>
      </section>
      <CityQuestions slug={slug} />
      {/*
        Phase 1 of the 2026-09-17 California strategy linked every /solar-problems
        guide from every companies page. Two per page now, varied by city.
      */}
      <RelatedGuides
        heading={`Before you sign anything in ${city.name}`}
        intro="Two of the contract terms that most often change what a quote really costs."
        links={contractGuidesFor(slug)}
      />
      {/* 2026-09-22: replaces the hand-picked CityRegionalLinks list (15 of 50
          cities had one) with the nearest live city pages, same county first. */}
      <NearbyCityPages slug={slug} type="companies" />
      <HubSpokeLinks hub="city_installers" currentPath={path} max={6} title="Solar companies in other California cities" />
    </DecisionPage>
  );
}
