import Link from "next/link";
import { growthCities } from "@/data/growth-cities";
import { DecisionPage, QuoteChecklist } from "./DecisionPage";
import { CityProviderOptions } from "./CityProviderOptions";
import {
  CityLocalChecks,
  CityPublishedProvider,
  CityQuestions,
  CityRegionalLinks,
} from "./CityLocalDetails";
export function CityComparison({ slug }: { slug: string }) {
  const city = growthCities[slug];
  return (
    <DecisionPage
      title={`Compare solar companies in ${city.name}, California`}
      intro={`A useful ${city.county} quote starts with the actual property, electric bill and scope of work. Compare the same system. Then compare the contract.`}
      path={`/solar-companies/${slug}`}
      sources={city.sources}
      utility={city.utility}
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
          {city.hasSavingsGuide !== false && (
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
      <CityQuestions slug={slug} />
      <CityRegionalLinks slug={slug} />
    </DecisionPage>
  );
}
