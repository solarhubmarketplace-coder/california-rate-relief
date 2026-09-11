const providers = [
  {
    name: 'NRG Clean Power',
    url: 'https://nrgcleanpower.com/learning-center/best-solar-companies-in-california/',
    published:
      'Its California site lists solar, storage, roofing and panel cleaning.',
    compare:
      'Confirm which work the contracting business performs, the crew assigned to your address and the separate roofing and solar warranty terms.',
  },
  {
    name: 'OC Solar',
    url: 'https://ocsolar.com/',
    published:
      'Its site lists Southern California service areas and an online solar and storage quote process.',
    compare:
      'Check your address against its service area. Have the site assessment confirm roof condition, electrical work and the final installed price.',
  },
  {
    name: 'Sunrun',
    url: 'https://www.sunrun.com/solar-by-state/ca',
    published:
      'Its California page describes a solar subscription and ownership through a cash purchase or loan.',
    compare:
      'Compare ownership with the subscription using the same equipment. Ask for total payments, service obligations and home-sale terms.',
  },
  {
    name: 'Tesla',
    url: 'https://www.tesla.com/support/energy/solar-panels/learn/purchasing-solar',
    published:
      'Its purchasing guide describes cash, financing and lease options.',
    compare:
      'Confirm address availability, the business doing the installation, the final equipment scope and the service process before choosing a payment option.',
  },
];
export function ProviderComparison() {
  return (
    <section id="company-comparison">
      <h2>Solar companies to compare</h2>
      <p className="mb-4">
        These are starting points for collecting comparable proposals. The
        published services below were checked September 10, 2026. They do not
        establish a current license, price or acceptance of your address. The
        list is unranked; inclusion does not mean California Rate Relief has a
        referral agreement with a company.
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            Published company options and questions for a written quote
          </caption>
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Company and source</th>
              <th className="p-3">Published options</th>
              <th className="p-3">Check in the proposal</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((p) => (
              <tr key={p.name} className="border-t">
                <th scope="row" className="p-3 align-top">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-800 underline"
                  >
                    {p.name}
                  </a>
                </th>
                <td className="p-3 align-top">{p.published}</td>
                <td className="p-3 align-top">{p.compare}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4">
        Add a local contractor to the comparison. Search the{' '}
        <a
          href="https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx"
          className="text-emerald-800 underline"
        >
          CSLB license lookup
        </a>{' '}
        using the exact business name on the bid, then compare its scope and
        service terms with the other proposals. Online ratings can suggest
        questions to ask. They do not replace the contract or a current license
        check.
      </p>
    </section>
  );
}
