import Link from "next/link";
import { growthCities, type GrowthCitySection } from "@/data/growth-cities";
import {
  companiesCityHref,
  hasCompaniesCityPage,
} from "@/lib/canonical-redirects";
import { formatSourceCheckedDate } from "./DecisionPage";
import { FaqJsonLd } from "@/components/shared/FaqJsonLd";
import { cityLinkLabel, cityPagePath, liveCityPageTypes } from "@/lib/city-pages";

/** "a Temecula quote", "an Orange County quote". */
function withArticle(name: string): string {
  return /^[AEIOU]/i.test(name) ? `an ${name}` : `a ${name}`;
}

export function CityLocalChecks({ slug }: { slug: string }) {
  const city = growthCities[slug];
  if (!city?.checks) return null;
  return (
    <section>
      <h2>What {withArticle(city.name)} quote needs to explain</h2>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Local project questions for {city.name}
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Check</th>
              <th className="p-4">Ask each bidder</th>
            </tr>
          </thead>
          <tbody>
            {city.checks.map(([label, detail]) => (
              <tr className="border-t" key={label}>
                <th scope="row" className="p-4 align-top">
                  {label}
                </th>
                <td className="p-4">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/**
 * The city's own sourced sections (2026-09-23): the utility and generation
 * provider and how each bills a solar home, the city's permit path, and any
 * local program. Plain paragraphs from growth-cities.ts; every fact in them is
 * listed in the page's sources.
 */
export function CityLocalSections({
  slug,
  exclude,
}: {
  slug: string;
  /** Sections another page of the city carries (2026-09-24: bill copy on /solar-savings). */
  exclude?: (section: GrowthCitySection) => boolean;
}) {
  const city = growthCities[slug];
  const sections = (city?.sections ?? []).filter((section) => !exclude?.(section));
  if (!sections.length) return null;
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-3" : undefined}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </>
  );
}

/**
 * A region page's table (2026-09-23, Tier 2): for each place in the county or
 * region, who delivers the power, who supplies the generation by default and
 * which office issues the solar permit, with a link to the place's own page
 * when it has one. Links point at a live page only (companies first, else the
 * city's lead page), so none lands on a redirect.
 */
export function CityRegionPlaces({ slug }: { slug: string }) {
  const city = growthCities[slug];
  const region = city?.region;
  if (!region?.places.length) return null;
  const pageFor = (placeSlug: string) => {
    const types = liveCityPageTypes(placeSlug);
    if (types.length === 0) return null;
    const type = types.includes("companies") ? "companies" : types[0];
    return { href: cityPagePath(type, placeSlug), label: cityLinkLabel(type, placeSlug, `region:${slug}`) };
  };
  return (
    <section>
      <h2>{region.heading}</h2>
      {region.intro.map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-3" : "mb-4"}>
          {paragraph}
        </p>
      ))}
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Electric utility, generation provider and permit office by place in {city.name}
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Place</th>
              <th className="p-4">Delivers power</th>
              <th className="p-4">Generation</th>
              <th className="p-4">Solar permit</th>
            </tr>
          </thead>
          <tbody>
            {region.places.map((place) => {
              const page = place.slug ? pageFor(place.slug) : null;
              return (
                <tr className="border-t" key={place.name}>
                  <th scope="row" className="p-4 align-top">
                    {page ? (
                      <Link href={page.href} className="underline">
                        {place.name}
                      </Link>
                    ) : (
                      place.name
                    )}
                  </th>
                  <td className="p-4 align-top">{place.utility}</td>
                  <td className="p-4 align-top">{place.generation}</td>
                  <td className="p-4 align-top">{place.permit}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {region.note ? <p className="mt-4">{region.note}</p> : null}
      {region.hub ? (
        <p className="mt-4">
          For what each of these utilities charges today, see{" "}
          <Link href={region.hub.href} className="underline">
            {region.hub.label}
          </Link>
          .
        </p>
      ) : null}
    </section>
  );
}

export function CityPublishedProvider({ slug }: { slug: string }) {
  const city = growthCities[slug];
  const provider = city.provider;
  if (!provider) return null;
  return (
    <section>
      <h2>A company website to investigate in {city.name}</h2>
      <p className="mb-4">
        Published service information checked{" "}
        {formatSourceCheckedDate(city.sourceCheckedDate || "2026-09-10")}. This
        is a starting point for requesting a comparable bid. Address acceptance,
        current license status and contract terms still need to be checked
        directly.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Published service scope and quote questions
          </caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-4">Company source</th>
              <th className="p-4">Published scope</th>
              <th className="p-4">Confirm in the proposal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <th scope="row" className="p-4 align-top">
                <a
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {provider.name}
                </a>
              </th>
              <td className="p-4 align-top">{provider.detail}</td>
              <td className="p-4 align-top">{provider.ask}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        This listing is not a ranking, endorsement or statement of a referral
        agreement. Add other available bids using the same project requirements.
        Unknown roof work, battery scope and service obligations belong in
        written questions, not assumptions.
      </p>
    </section>
  );
}

export function CityQuestions({ slug }: { slug: string }) {
  const city = growthCities[slug];
  if (!city?.faq) return null;
  return (
    <section>
      {/* FAQPage schema built from exactly the strings rendered below. */}
      <FaqJsonLd items={city.faq.map(([question, answer]) => ({ question, answer }))} />
      <h2>{city.name} solar quote questions</h2>
      <div className="space-y-5">
        {city.faq.map(([question, answer]) => (
          <div key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CityRegionalLinks({ slug }: { slug: string }) {
  const city = growthCities[slug];
  if (!city.nearby?.length) return null;
  return (
    <section>
      <h2>Compare nearby California markets</h2>
      <p className="mb-3">
        A nearby guide can help frame a question. Its utility and permit rules
        still need to match the property.
      </p>
      <ul className="space-y-2">
        {city.nearby.map((neighbor) => (
          <li key={neighbor}>
            <Link href={companiesCityHref(neighbor)} className="underline">
              {growthCities[neighbor].name}, California:{" "}
              {hasCompaniesCityPage(neighbor)
                ? "quote comparison"
                : "solar cost"}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
