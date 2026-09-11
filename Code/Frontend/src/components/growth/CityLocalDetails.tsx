import Link from "next/link";
import { growthCities } from "@/data/growth-cities";

export function CityLocalChecks({ slug }: { slug: string }) {
  const city = growthCities[slug];
  if (!city.checks) return null;
  return (
    <section>
      <h2>What a {city.name} quote needs to explain</h2>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Local project questions for {city.name}
          </caption>
          <thead className="bg-slate-100">
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

export function CityPublishedProvider({ slug }: { slug: string }) {
  const city = growthCities[slug];
  const provider = city.provider;
  if (!provider) return null;
  return (
    <section>
      <h2>A company website to investigate in {city.name}</h2>
      <p className="mb-4">
        Published service information checked September 10, 2026. This is a
        starting point for requesting a comparable bid. Address acceptance,
        current license status and contract terms still need to be checked
        directly.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Published service scope and quote questions
          </caption>
          <thead className="bg-slate-100">
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
  if (!city.faq) return null;
  return (
    <section>
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
            <Link href={`/solar-companies/${neighbor}`} className="underline">
              {growthCities[neighbor].name}, California: quote comparison
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
