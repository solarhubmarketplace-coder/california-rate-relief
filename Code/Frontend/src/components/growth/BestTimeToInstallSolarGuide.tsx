import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";
import { CRR_SOCIAL_CARD } from "@/lib/crr-social";

const path = "/blog/best-time-to-install-solar-panels-california";
const title = "Best Time to Install Solar Panels in California: Use the Project Clock";
const intro = "There is no single best month for every California home. The right time is when the roof, electricity-use record, bids, permit path, utility application and contract schedule are ready. Compare those dates before chasing a seasonal sales pitch.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "Best Time to Install Solar Panels in California";
const metaDescription =
  "Season doesn't set your solar timeline — your true-up date, the SGIP budget clock, and utility rate changes do. Here's how to time it in California.";

const sources: Source[] = [
  { label: "CPUC: California Solar Consumer Protection Guide", url: "https://www.cpuc.ca.gov/solarguide/" },
  { label: "California Energy Commission: residential solar permit status", url: "https://www.energy.ca.gov/programs-and-topics/programs/residential-solar-permit-reporting-program-sb-379/residential-solar" },
  { label: "CPUC: Rule 21 interconnection", url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/infrastructure/rule-21-interconnection" },
  { label: "U.S. Department of Energy: consumer solar installation steps", url: "https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar" },
  { label: "IRS: Residential Clean Energy Credit", url: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit" },
  { label: "SGIP Program Administrator: statewide program metrics", url: "https://www.selfgenca.com/home/program_metrics/" },
  { label: "CPUC Public Advocates Office: Q2 2026 electric rates report", url: "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf" },
];

export const bestTimeToInstallSolarMetadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: path },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-22T00:00:00Z",
    images: [CRR_SOCIAL_CARD],
  },
};

export function BestTimeToInstallSolarGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      sourceCheckedDate="2026-09-22"
      topic="best time to install solar panels in California"
      primaryResourceHref="/tools/solar-panel-calculator"
      primaryResourceLabel="Normalize the bill and quote"
      comparisonHref="/blog/solar-installation-timeline-california"
      comparisonLabel="California installation timeline"
    >
      <section className="rounded-xl border border-primary/20 bg-primary/5 p-5">
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
        <h2>Your first bill isn&apos;t your true-up — installation month matters less than you&apos;d think</h2>
        <p>
          A written turn-on date matters for a reason beyond the calendar: it sets your personal true-up clock, not just your first monthly bill. Under the Net Billing Tariff, your NEM Start Date — the day you were first interconnected — starts that clock, and every subsequent 12-month period resets from your last true-up date. The annual settlement nets a full year of production against a full year of usage, so a summer surplus offsets a winter deficit within that same 12-month window regardless of which month the window starts.
        </p>
        <p className="mt-3">
          Chasing a specific install month to &ldquo;catch summer production first&rdquo; does not change the annual outcome, because true-up nets a full year no matter when it begins — it only changes which calendar month your true-up bill lands in. Knowing that date in advance, and giving the system a full 12-month cycle before judging results, matters more than the season you started in. See the{" "}
          <Link className="underline" href="/solar-problems/true-up-bill-california-explained">
            true-up bill explainer
          </Link>{" "}
          for what builds up monthly versus what settles at true-up.
        </p>
      </section>

      <section>
        <h2>If a battery rebate is part of the plan, that clock runs separately</h2>
        <p>
          For a paired battery, the incentive that most affects timing is not seasonal — it is the Self-Generation Incentive Program&apos;s step-down budget, which the statewide administrator portal tracks in real time rather than by season. Budget steps close whenever the dollars run out, not on a fixed calendar date, so &ldquo;wait until spring&rdquo; or &ldquo;wait until fall&rdquo; is not a real strategy here; checking the current status before signing is.
        </p>
        <p className="mt-3">
          See the{" "}
          <Link className="underline" href="/battery/sgip-battery-rebate-california">
            SGIP battery rebate page
          </Link>{" "}
          for the current category-by-category budget status and eligibility rules.
        </p>
      </section>

      <section>
        <h2>Utility rate changes don&apos;t follow a solar season either</h2>
        <p>
          The same logic applies to waiting for a rate hike to make the math better. PG&amp;E&apos;s, SCE&apos;s and SDG&amp;E&apos;s average residential rates each last changed on their own schedule, driven by separate Advice Letter filings rather than a shared seasonal calendar — there is no single &ldquo;rates go up in January&rdquo; pattern to plan around. If a rate comparison is part of the decision, use the current published numbers rather than assuming a seasonal trend; see the{" "}
          <Link className="underline" href="/california-utility-rate-tracker">
            California utility rate tracker
          </Link>{" "}
          for the full table.
        </p>
      </section>

      <section>
        <h2>A simple go-or-wait rule</h2>
        <p>
          Go forward when the roof is ready, the usage record is representative, three comparable bids are complete, the contractor and equipment are identified, and the permit-to-operation schedule is written into the deal. Wait when any of those facts are still moving. Use the <Link className="underline" href="/blog/solar-installation-timeline-california">full installation timeline</Link> to challenge an optimistic schedule before signing.
        </p>
      </section>
    </DecisionPage>
  );
}
