const regional: Record<
  string,
  { name: string; url: string; detail: string; ask: string }
> = {
  'san-diego': {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/locations/california/san-diego-county/',
    detail: 'Publishes a San Diego County solar service page.',
    ask: 'Have the design name the SDG&E tariff and any CCA generation provider, with the battery and remaining bill shown separately.',
  },
  fresno: {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/locations/california/fresno/',
    detail: 'Publishes a Fresno solar and home battery page.',
    ask: 'Compare the full year of cooling use, monthly production and evening imports. Confirm the city or county permit authority.',
  },
  'los-angeles': {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/locations/california/los-angeles-county/',
    detail: 'Publishes a Los Angeles County solar service page.',
    ask: 'Confirm the electric utility at the property. Ask for the applicable LADWP or investor-owned utility billing model.',
  },
  sacramento: {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/learning-center/best-solar-companies-in-california/',
    detail: 'Lists Sacramento among the California locations on its site.',
    ask: 'For SMUD electricity, request a proposal under the confirmed SMUD solar rate, rather than statewide NEM assumptions.',
  },
  bakersfield: {
    name: 'BSW Roofing, Solar & Air',
    url: 'https://bswroofing.com/',
    detail:
      'Its Bakersfield site describes solar, roofing and air-conditioning services.',
    ask: 'Separate roof work, solar, battery and any cooling equipment. Have each warranty identify the business responsible for service.',
  },
  'san-jose': {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/locations/california/san-jose/',
    detail: 'Publishes a San Jose solar and home battery page.',
    ask: 'Show PG&E delivery and the actual generation provider. Confirm permit scope for both panels and storage.',
  },
};
export function CityProviderOptions({
  slug,
  name,
}: {
  slug: string;
  name: string;
}) {
  const option = regional[slug];
  if (!option) {
    return (
      <section>
        <h2>Verify the company behind each {name} quote</h2>
        <p>
          This page does not rank or confirm local companies. Ask each bidder
          for the legal business name, license number, written address coverage
          and the person responsible for installation and later service. Check
          the current record through the{" "}
          <a
            href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
            className="underline"
          >
            CSLB license lookup
          </a>{" "}
          before signing.
        </p>
      </section>
    );
  }
  return (
    <section>
      <h2>Company options to investigate in {name}</h2>
      <p className="mb-4">
        These company websites were checked September 10, 2026. Their published
        locations help start a comparison; each company must confirm your
        address and project. This is an unranked list, with no claim of a
        referral agreement or verified current license.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Published company options and local quote questions
          </caption>
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Company and source</th>
              <th className="p-3">What the site publishes</th>
              <th className="p-3">Question for the bid</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <th scope="row" className="p-3 align-top">
                <a href={option.url} className="underline">
                  {option.name}
                </a>
              </th>
              <td className="p-3 align-top">{option.detail}</td>
              <td className="p-3 align-top">{option.ask}</td>
            </tr>
            <tr className="border-t">
              <th scope="row" className="p-3 align-top">
                <a
                  href="https://www.sunrun.com/solar-by-state/ca"
                  className="underline"
                >
                  Sunrun
                </a>
              </th>
              <td className="p-3 align-top">
                Lists {name} on its California location page.
              </td>
              <td className="p-3 align-top">
                Ask for both the equipment scope and payment obligations.
                Compare the full contract term, service process and remaining
                utility bill.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        Add another local bid where available. Use the same usage history and
        equipment requirements for every proposal, then check the exact
        contracting business in CSLB’s current records.
      </p>
    </section>
  );
}
