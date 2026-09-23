import Link from "next/link";
import { growthCities } from "@/data/growth-cities";
import { hasSavingsCityPage } from "@/lib/canonical-redirects";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, QuoteChecklist } from "./DecisionPage";
import { CityProviderOptions } from "./CityProviderOptions";
import { cityCostPath, getPublishableCityCostSlugs } from "@/data/city-cost-data";
import {
  CityLocalChecks,
  CityPublishedProvider,
  CityQuestions,
} from "./CityLocalDetails";
import { NearbyCityPages } from "./NearbyCostCities";
import { cityQuickCheckUtility, companiesPageSeo } from "@/lib/city-pages";
export function CityComparison({ slug }: { slug: string }) {
  const city = growthCities[slug];
  // 2026-09-22: link to the /solar-cost/<city> twin when one is actually
  // publishable (sourced, gated) — see canonical-redirects.ts for the SERP
  // reasoning behind this route being live again instead of redirected.
  const hasCostTwin = getPublishableCityCostSlugs().includes(slug);
  const seo = companiesPageSeo(slug);
  return (
    <DecisionPage
      title={seo?.h1 ?? `Compare solar companies in ${city.name}, California`}
      // The inquiry topic keeps its pre-2026-09-22 wording: it travels with the
      // lead, and the H1 change is not a reason to change intake data.
      topic={`Compare solar companies in ${city.name}, California`}
      authorSchema="person"
      breadcrumbs={[{ label: "Solar companies in California", href: "/best-solar-companies-california" }]}
      breadcrumbLabel={`Solar companies in ${city.name}`}
      intro={`A useful ${city.county} quote starts with the actual property, electric bill and scope of work. Compare the same system. Then compare the contract.`}
      path={`/solar-companies/${slug}`}
      sources={city.sources}
      utility={city.utility}
      sourceCheckedDate={city.sourceCheckedDate}
      // Bill-first step right under the H1 and byline (a phone's first
      // screen); no utility pre-selected for a city split between utilities.
      quickCheck="afterByline"
      quickCheckUtility={cityQuickCheckUtility("companies", slug)}
    >
      {city.provider ? (
        <CityPublishedProvider slug={slug} />
      ) : (
        <CityProviderOptions slug={slug} name={city.name} />
      )}
      <section>
        <h2>Start with your {city.name} electricity bill</h2>
        <p>{city.bill}</p>
      </section>
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
        <h2>Verify the company behind the quote</h2>
        <p>
          Ask for the legal business name, installer license number, written
          address coverage and the company responsible for repairs. Match the
          proposal to the{" "}
          <a
            href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
            className="underline"
          >
            CSLB license record
          </a>
          . A brand appearing in search results is not proof that it currently
          serves your home.
        </p>
        <p className="mt-3">
          No company list establishes acceptance of your address. Use the
          checklist to compare the bids you receive; ask for project references
          you can check directly.
        </p>
      </section>
      <section>
        <h2>Next: work through the bill and system assumptions</h2>
        <p>
          Use the{" "}
          <Link className="underline" href="/tools/solar-panel-calculator">
            bill and quote calculator
          </Link>{" "}
          to compare your own inputs.
          {" "}
          Compare the same scope across a{" "}
          <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
            PPA, loan, lease and cash purchase
          </Link>{" "}
          before treating a monthly payment as a project price.
          {city.hasSavingsGuide !== false && hasSavingsCityPage(slug) && (
            <>
              {" "}
              The existing{" "}
              <Link className="underline" href={`/solar-savings/${slug}`}>
                {city.name} savings guide
              </Link>{" "}
              addresses the separate bill and system-sizing question; the
              utility and proposal still need to be checked for your address.
            </>
          )}
        </p>
      </section>
      {hasCostTwin && (
        <section>
          <h2>What solar costs in {city.name}</h2>
          <p>
            The utility rate, {city.name}&apos;s permit process, and the ownership and
            property-tax rules that actually set the price for a project here are
            covered separately, with no company list involved. See{" "}
            <Link className="underline" href={cityCostPath(slug)}>
              what solar costs in {city.name}
            </Link>
            .
          </p>
        </section>
      )}
      <CityQuestions slug={slug} />
      {/*
        Phase 1 of the 2026-09-17 California strategy. The /solar-companies city
        layer earned 35,424 impressions in the 2026-08-12..2026-09-08 GSC window
        while the 21 /solar-problems pages earned nothing and carried zero
        inbound content links from outside their own subtree. This is the
        matching reader: someone comparing named installers for one city.
      */}
      <RelatedGuides
        heading={`Before you sign anything in ${city.name}`}
        intro="What the paperwork does, in the order it tends to cause trouble."
        links={[
          {
            href: "/solar-problems/solar-dealer-fees-explained",
            label: "How dealer fees pay for a low advertised rate",
          },
          {
            href: "/solar-problems/solar-escalator-clause-explained",
            label: "The escalator clause, and what it does to year 15",
          },
          {
            href: "/solar-problems/ucc-1-lien-solar-california",
            label: "UCC-1 liens and what they attach to",
          },
          {
            href: "/solar-problems/solar-contract-red-flags-california",
            label: "Contract red flags in the California disclosure forms",
          },
          {
            href: "/solar-problems/solar-door-to-door-sales-california",
            label: "What a door-to-door rep can and cannot legally do",
          },
          {
            href: "/solar-problems/solar-sales-tactics-california",
            label: "Common sales tactics and what each one obscures",
          },
          {
            href: "/solar-problems",
            label: "All California solar problem guides",
          },
        ]}
      />
      {/* 2026-09-22: replaces the hand-picked CityRegionalLinks list (15 of 50
          cities had one) with the nearest live city pages, same county first. */}
      <NearbyCityPages slug={slug} type="companies" />
    </DecisionPage>
  );
}
