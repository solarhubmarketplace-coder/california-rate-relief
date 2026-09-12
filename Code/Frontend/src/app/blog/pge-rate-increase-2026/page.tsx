import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";

const sources: Source[] = [
  {
    label: "PG&E: current and historic electric rates",
    url: "https://www.pge.com/tariffs/en/rate-information/electric-rates.html",
  },
  {
    label: "PG&E: Base Services Charge",
    url: "https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html",
  },
  {
    label: "PG&E: residential rate plans",
    url: "https://www.pge.com/en/account/rate-plans.html",
  },
];

export const metadata: Metadata = {
  title: "PG&E rate changes in 2026: how to check your California bill",
  description:
    "Use PG&E's current tariff, bill and rate-plan tools to understand a California electric bill in 2026. This guide does not substitute a generic rate for an account-specific bill.",
  alternates: { canonical: "/blog/pge-rate-increase-2026" },
  openGraph: {
    title: "PG&E rate changes in 2026: how to check your California bill",
    description:
      "A source-cited guide to checking current PG&E California bill and rate-plan information.",
    type: "article",
    url: "https://ratereliefca.com/blog/pge-rate-increase-2026",
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export default function PgeRateIncrease2026() {
  return (
    <DecisionPage
      title="PG&E rate changes in 2026: how to check your California bill"
      intro="A rate-change headline does not determine an individual bill. Check the Pacific Gas and Electric bill, current rate schedule, usage and applicable program details together."
      path="/blog/pge-rate-increase-2026"
      sources={sources}
      sourceCheckedDate="2026-09-12"
      utility="pge"
      topic="PG&E bill and solar comparison"
    >
      <section>
        <h2>First, confirm that the bill is from Pacific Gas and Electric</h2>
        <p>
          The acronym PGE can refer to more than one utility in national search
          results. This guide concerns Pacific Gas and Electric service in
          California. Use the name on the bill and the service address before
          relying on a rate article or calculator.
        </p>
      </section>
      <section>
        <h2>Use the current rate schedule, not an old average</h2>
        <p>
          PG&amp;E&apos;s electric-rates page identifies the current and historic
          residential schedules. The page lists residential inclusive time-of-use
          pricing effective from March 1, 2026. A bill can still differ from a
          headline average because the rate plan, baseline allowance, time of
          use, billing days, usage and generation arrangement are account
          specific.
        </p>
      </section>
      <section>
        <h2>How the Base Services Charge changed the bill display</h2>
        <p>
          PG&amp;E says that, beginning in March 2026, the bill separates some
          service costs into a Base Services Charge while lowering the
          electricity price compared with the otherwise applicable price. Most
          customers pay a charge around $24 per month, and the actual amount can
          vary with the number of billing days. PG&amp;E describes discounted
          amounts for eligible CARE and FERA customers on its current page.
        </p>
        <p className="mt-3">
          Do not add a fixed-charge figure to an old bill and call the result a
          new total. Compare the full current bill, including its rate schedule
          and electricity use. PG&amp;E states that lower per-kWh pricing may or
          may not lower an individual total bill because each customer&apos;s usage
          differs.
        </p>
      </section>
      <section>
        <h2>Check a rate plan against actual usage</h2>
        <p>
          PG&amp;E directs residential customers to compare rate plans using their
          actual usage. Its rate-plan resources distinguish time-of-use, tiered,
          electric-home and solar rate options. A plan that appears inexpensive
          in one hour or season is not necessarily the lower-bill option for a
          particular home.
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Keep a recent full bill and the current rate-plan name.</li>
          <li>Compare the same billing period in the prior year before attributing a change to one line item.</li>
          <li>Use PG&amp;E&apos;s account tools or rate-plan comparison with actual usage.</li>
          <li>Check eligibility directly for any income-qualified program before assuming a discount.</li>
        </ol>
      </section>
      <section>
        <h2>Solar needs a separate tariff and proposal review</h2>
        <p>
          A bill change does not establish a solar saving, system size or battery
          need. Existing solar customers and new proposals should identify the
          actual tariff, expected onsite use, imports, exports, delivery charges
          and remaining utility charges. The <Link className="underline" href="/blog/why-is-my-pge-bill-so-high">PG&amp;E bill guide</Link> and
          <Link className="underline" href="/blog/net-billing-vs-net-metering-california"> Net Billing comparison</Link> explain the
          documents to check before relying on a sales estimate.
        </p>
      </section>
    </DecisionPage>
  );
}
