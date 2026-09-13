import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";

const path = "/blog/best-time-to-install-solar-panels-california";
const title = "Best Time to Install Solar Panels in California: Use the Project Clock";
const intro = "There is no single best month for every California home. The right time is when the roof, electricity-use record, bids, permit path, utility application and contract schedule are ready. Compare those dates before chasing a seasonal sales pitch.";

const sources: Source[] = [
  { label: "CPUC: California Solar Consumer Protection Guide", url: "https://www.cpuc.ca.gov/solarguide/" },
  { label: "California Energy Commission: residential solar permit status", url: "https://www.energy.ca.gov/programs-and-topics/programs/residential-solar-permit-reporting-program-sb-379/residential-solar" },
  { label: "CPUC: Rule 21 interconnection", url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/infrastructure/rule-21-interconnection" },
  { label: "U.S. Department of Energy: consumer solar installation steps", url: "https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar" },
  { label: "IRS: Residential Clean Energy Credit", url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit" },
];

export const bestTimeToInstallSolarMetadata: Metadata = {
  title,
  description: intro,
  alternates: { canonical: path },
  openGraph: {
    title,
    description: intro,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export function BestTimeToInstallSolarGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      sourceCheckedDate="2026-09-12"
      topic="best time to install solar panels in California"
      primaryResourceHref="/tools/solar-panel-calculator"
      primaryResourceLabel="Normalize the bill and quote"
      comparisonHref="/blog/how-long-does-solar-installation-take-california"
      comparisonLabel="California installation timeline"
    >
      <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <h2>The best time is the first complete, defensible project window</h2>
        <p>
          A calendar month cannot repair a bad roof, incomplete proposal or missing utility step. Start when the roof is ready, your recent electricity use reflects the load you expect to keep, and at least three written bids price the same scope. Then make the contractor put the permit, inspection, interconnection and permission-to-operate responsibilities on a dated schedule.
        </p>
      </section>

      <section>
        <h2>Do the roof work first</h2>
        <p>
          The CPUC tells California consumers to consider the roof&apos;s condition, shade and direction before signing, and to replace a roof first if replacement is planned soon. Paying to remove and reinstall a new solar array for predictable roof work can erase any seasonal bargain. Get a written roof assessment and the expected remaining roof life before treating a start date as real.
        </p>
      </section>

      <section>
        <h2>Use a representative electricity record</h2>
        <p>
          Size and savings should reflect the home you expect to operate, not one unusually low or high month. Gather a full recent year when available. List planned changes such as an electric vehicle, heat pump, pool, addition or efficiency work. Ask each bidder to show the same annual usage, proposed system size, first-year production, self-consumption and remaining utility bill.
        </p>
      </section>

      <section>
        <h2>Separate installation days from the full approval timeline</h2>
        <p>
          The U.S. Department of Energy says physical installation may take only a few days while permits and inspections can take weeks to months. California also has local permit review and a separate utility interconnection process. The Energy Commission&apos;s permit dashboard shows that local online permitting systems vary by jurisdiction, while CPUC Rule 21 governs interconnection for investor-owned utilities.
        </p>
        <p className="mt-3">
          Ask for five dates: design complete, permit submitted, equipment scheduled, inspection requested and utility approval expected. A promised install week is not the date the system can operate.
        </p>
      </section>

      <section>
        <h2>Compare contracts before comparing seasons</h2>
        <p>
          The current CPUC guide recommends at least three bids and requires California solar contracts to include an approximate start and end date. Make each proposal state what can move those dates, whether equipment can be substituted, when payments become due and what lets you exit if the project stalls.
        </p>
        <QuoteChecklist />
      </section>

      <section>
        <h2>Do not let an expired federal deadline rush the decision</h2>
        <p>
          The current IRS page says the residential clean energy credit is unavailable for property placed in service after December 31, 2025. A salesperson should not use the former residential credit as a reason to sign a 2026 California contract. Verify any tax, utility or local incentive from the agency that administers it before putting it into the price comparison.
        </p>
      </section>

      <section>
        <h2>A simple go-or-wait rule</h2>
        <p>
          Go forward when the roof is ready, the usage record is representative, three comparable bids are complete, the contractor and equipment are identified, and the permit-to-operation schedule is written into the deal. Wait when any of those facts are still moving. Use the <Link className="underline" href="/blog/how-long-does-solar-installation-take-california">full installation timeline</Link> to challenge an optimistic schedule before signing.
        </p>
      </section>
    </DecisionPage>
  );
}
