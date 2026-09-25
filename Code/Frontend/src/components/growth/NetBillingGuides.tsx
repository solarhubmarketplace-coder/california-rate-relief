import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";
import { SRC } from "@/data/rate-sources";
import { CRR_SOCIAL_CARD } from "@/lib/crr-social";

const cpucNem: Source = {
  label: "CPUC: Net Energy Metering and Net Billing",
  url: "https://www.cpuc.ca.gov/NEM/",
};
const cpucConsumerGuide: Source = {
  label: "CPUC: California Solar Consumer Protection Guide",
  url: "https://www.cpuc.ca.gov/solarguide/",
};
const cpucNbtOverview: Source = {
  label: "CPUC: Net Billing Tariff (NBT) overview",
  url: "https://www.cpuc.ca.gov/nbt",
};
const pgeSolarBillingPlan: Source = {
  label: "PG&E: Solar Billing Plan",
  url: "https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html",
};
const sources = [cpucNem, cpucConsumerGuide];
// Additional sources cited only by the "comparison" guide's 2026-09-22 delta.
// Kept separate so the other three guides' source lists are unaffected.
const comparisonOnlySources = [cpucNbtOverview, pgeSolarBillingPlan];
// Tier 3 (2026-09-23): NEM 2.0 definition, three-way comparison, expiry,
// municipal utilities and non-export systems. Comparison guide only.
const comparisonT3Sources: Source[] = [
  SRC.cpucNbt,
  SRC.pgeNemProgram,
  SRC.pgeNemBill,
  SRC.pgeNscRates,
  SRC.pgeRule21,
  SRC.ladwpResRates,
  SRC.smudResRates,
  SRC.smudRateArchive,
];

const guides = {
  comparison: {
    path: "/blog/nem-2-vs-nem-3-california",
    title: "NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You",
    intro:
      "California's solar billing tariff changed from NEM 2.0 to NEM 3.0 (officially the Net Billing Tariff) in April 2023. If you installed solar before April 15, 2023, you're grandfathered onto NEM 2.0 for 20 years; after that date, you're on NEM 3.0. The two differ mainly in export compensation, which is what this page compares side by side.",
    metaTitle: "NEM 1.0 vs 2.0 vs 3.0 in California: What NEM 2.0 Is",
    metaDescription:
      "What NEM 2.0 is, how it differs from NEM 1.0 and NEM 3.0 (the Net Billing Tariff), when each started and ends, and how solar export credits changed.",
  },
  timeline: {
    path: "/blog/nem-3-california-timeline",
    title: "NEM 3.0 California timeline: confirmed dates and account checks",
    intro:
      "The current tariff can affect a solar proposal, but an old deadline or a generic export-rate claim does not tell you what applies to your account. Start with the official timeline and the current bill.",
    metaTitle: "NEM 3.0 California Timeline: Confirmed Dates",
    metaDescription:
      "The current tariff can affect a proposal, but an old deadline or generic export-rate claim won't tell you what applies to your account.",
  },
  decision: {
    path: "/blog/nem-3-california-still-worth-it",
    title: "Is solar still worth it under California Net Billing? Compare the written numbers",
    intro:
      "Net Billing changes how exports appear on a bill. Whether a proposal works for a home depends on its actual usage, tariff, production model, contract price and remaining utility charges.",
    metaTitle: "Is Solar Still Worth It Under California Net Billing?",
    metaDescription:
      "Net Billing changes how exports appear on a bill. Whether a proposal works depends on usage, tariff, production model and contract price.",
  },
  billing: {
    path: "/blog/net-billing-vs-net-metering-california",
    title: "Net Billing vs. Net Metering in California: check your tariff",
    intro:
      "California's Net Billing Tariff (NBT) is what most people call NEM 3.0 — they're the same tariff, not two different things. The CPUC's own program page uses \"Net Billing Tariff (NBT)\" throughout and doesn't use the term \"NEM 3.0\" anywhere; NEM 3.0 is industry and consumer shorthand for the same CPUC decision. Net Metering (NEM 1.0 and NEM 2.0) is the older, separate system NBT replaced for new interconnection applicants starting April 15, 2023.",
    metaTitle: "Net Billing vs. Net Metering in California",
    metaDescription:
      "The CPUC calls it the Net Billing Tariff; most people call it NEM 3.0. See how it differs from the older Net Metering (NEM) system, per the CPUC.",
  },
} as const;

export type NetBillingGuideKind = keyof typeof guides;

export function netBillingMetadata(kind: NetBillingGuideKind): Metadata {
  const guide = guides[kind];
  // `intro` is the visible opening paragraph, so it cannot double as the search
  // snippet without changing what the page says. These override the snippet
  // only; a guide setting neither behaves exactly as before.
  const metaTitle =
    "metaTitle" in guide && guide.metaTitle ? guide.metaTitle : guide.title;
  const metaDescription =
    "metaDescription" in guide && guide.metaDescription
      ? guide.metaDescription
      : guide.intro;
  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: guide.path },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      url: `https://ratereliefca.com${guide.path}`,
      modifiedTime:
        kind === "comparison"
          ? "2026-09-23T00:00:00Z"
          : kind === "billing"
            ? "2026-09-22T00:00:00Z"
            : "2026-09-12T00:00:00Z",
      images: [CRR_SOCIAL_CARD],
    },
  };
}

function ComparisonContent() {
  return (
    <>
      <section>
        <h2>What the two tariff names describe</h2>
        <p>
          The CPUC describes NEM as a program in which a participating customer
          receives bill credits for excess generation exported to the grid. Its
          current Net Billing Tariff, also called the Solar Billing Plan or NEM
          3.0, applies to new interconnection applicants in the large
          investor-owned utility territories beginning April 15, 2023.
        </p>
        <p className="mt-3">
          Under both structures, generation used in the home first reduces
          electricity bought from the grid. The key billing difference is how
          exported generation is credited. The CPUC says Net Billing export
          compensation usually differs from the retail rate and can vary by
          time; the account's current utility documents control the actual
          calculation. Why midday exports earn so little and evening exports so
          much comes down to the grid pattern known as{" "}
          <Link className="underline" href="/blog/solar-duck-curve-california">
            the duck curve behind net billing
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>What is NEM 2.0 in California?</h2>
        <p>
          NEM 2.0 (written NEM2 on PG&amp;E paperwork, and sometimes mistyped as
          &ldquo;NMEC 2.0&rdquo;) is California&apos;s second net energy metering
          tariff for rooftop solar. The CPUC created it in 2016 under Assembly
          Bill 327, in Decision D.16-01-044, to replace the original NEM 1.0.
          It applied to PG&amp;E, SCE and SDG&amp;E customers who applied to
          interconnect from their utility&apos;s NEM 1.0 sunset in 2016 or 2017
          until April 14, 2023.
        </p>
        <p className="mt-3">
          Under NEM 2.0, solar you export is credited at the same retail price
          you pay for power in that hour, including generation, distribution and
          transmission. The CPUC added three conditions NEM 1.0 did not have:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>A one-time interconnection fee</strong> for systems up to 1
            MW: $145 at PG&amp;E, $94 at SCE and $132 at SDG&amp;E.
          </li>
          <li>
            <strong>Non-bypassable charges</strong>, small per-kWh charges for
            public programs, paid on the net energy you draw from the grid in each
            hour instead of once a year.
          </li>
          <li>
            <strong>A time-of-use rate.</strong> Any of the utility&apos;s TOU
            plans qualifies; NEM 2.0 does not tie you to one plan.
          </li>
        </ul>
        <p className="mt-3">
          Billing is annual: charges and credits roll forward for 12 months and
          are settled at the true-up. If you exported more than you used over the
          year, the surplus is paid at the net surplus compensation rate, which the
          CPUC puts at roughly 2 to 3 cents per kWh. PG&amp;E&apos;s rate for
          true-up months in 2025 ranged from 2.919 to 3.396 cents.
        </p>
      </section>
      <section>
        <h2>The side-by-side: NEM 2.0 vs. NEM 3.0</h2>
        <p>
          Both tariffs work the same basic way &mdash; your solar offsets
          what you use first, and only the leftover gets exported &mdash;
          but they price that leftover, and the years you&apos;re locked
          into a plan, differently.
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">NEM 2.0 versus NEM 3.0 comparison</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4"></th>
                <th className="p-4">NEM 2.0</th>
                <th className="p-4">NEM 3.0 (Net Billing Tariff)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Export compensation basis</th>
                <td className="p-4">Bill credits at the full retail rate &mdash; generation, distribution and transmission components together, per the CPUC</td>
                <td className="p-4">Credits from the CPUC&apos;s Avoided Cost Calculator (ACC), a value &ldquo;usually lower than the retail rate&rdquo; that varies by time of day, day of week and season, per the CPUC and PG&amp;E</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Time-of-use requirement</th>
                <td className="p-4">Must take service on a time-of-use rate &mdash; any qualifying TOU plan, per the CPUC</td>
                <td className="p-4">Must take service on &ldquo;a specific TOU rate&rdquo; with a steeper on-peak/off-peak spread than other TOU rates, per the CPUC (PG&amp;E auto-enrolls residential NEM 3.0 customers on Electric Home, E-ELEC)</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Grandfathering / legacy period</th>
                <td className="p-4">20 years from your interconnection date, under D.14-03-041, per the CPUC</td>
                <td className="p-4">No 20-year legacy period. The original customer is &ldquo;guaranteed the use of the NBT tariff for nine years,&rdquo; per the CPUC</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What ends it early</th>
                <td className="p-4">
                  Expanding the system past your utility&apos;s threshold moves the account onto NEM 3.0 before the 20 years is up &mdash; PG&amp;E&apos;s is more than 10% of the original nameplate capacity or more than 1 kW, per PG&amp;E. Full utility-by-utility thresholds:{" "}
                  <Link className="underline" href="/blog/what-is-nem-3-california">What is NEM 3.0 in California?</Link>
                </td>
                <td className="p-4">The nine-year tariff lock is the floor. PG&amp;E and SCE (not SDG&amp;E) customers who interconnect an NEM 3.0 system before the end of 2027 also get nine years of enhanced export credits on top of that, per the CPUC</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">True-up billing cadence</th>
                <td className="p-4">Annual billing &mdash; both charges and credits roll over for the full 12 months, per the CPUC</td>
                <td className="p-4">
                  Monthly billing &mdash; you&apos;re billed or credited every month, and only unresolved solar credits carry forward to the annual true-up, per the CPUC. See{" "}
                  <Link className="underline" href="/solar-problems/true-up-bill-california-explained">how the annual true-up is settled</Link>{" "}
                  for what that looks like utility by utility
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Battery economics</th>
                <td className="p-4">Exporting paid close to what you&apos;d otherwise pay to buy the power back, so storing it yourself added little financial upside</td>
                <td className="p-4">
                  Exporting now pays less than buying power back at your TOU rate, so using stored solar in the evening is the main lever NEM 3.0 gives homeowners to control the bill &mdash; nearly 70% of NEM 3.0 (NBT) customers had paired a battery with solar by the end of 2024, per the CPUC. See{" "}
                  <Link className="underline" href="/battery/battery-payback-nem-3-california">battery payback under NEM 3.0</Link>{" "}
                  for the utility-by-utility math
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>NEM 1.0 vs. NEM 2.0 vs. NEM 3.0: all three</h2>
        <p>
          The CPUC created NEM 1.0 in 1996 under Senate Bill 656, and systems
          joined it until the 2016&ndash;2017 sunset dates. NEM 2.0 followed in
          2016, and the Net Billing Tariff (NEM 3.0) has applied to new
          applications since April 15, 2023. This is how the CPUC compares them:
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">NEM 1.0, NEM 2.0 and NEM 3.0 compared</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4"></th>
                <th className="p-4">NEM 1.0</th>
                <th className="p-4">NEM 2.0</th>
                <th className="p-4">NEM 3.0 (NBT)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Required rate plan</th>
                <td className="p-4">Any</td>
                <td className="p-4">Any time-of-use rate</td>
                <td className="p-4">A specific electrification TOU rate (E-ELEC, TOU-D-PRIME or EV-TOU-5)</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Credit for exports before true-up</th>
                <td className="p-4">Import (retail) rates</td>
                <td className="p-4">Import (retail) rates</td>
                <td className="p-4">Avoided Cost Calculator values, usually lower than retail rates</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Surplus at true-up</th>
                <td className="p-4">Wholesale price</td>
                <td className="p-4">Wholesale price</td>
                <td className="p-4">Wholesale price</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Non-bypassable charges on</th>
                <td className="p-4">Net energy used over the year</td>
                <td className="p-4">Net energy used in each hour</td>
                <td className="p-4">All energy imported</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Interconnection fee</th>
                <td className="p-4">None</td>
                <td className="p-4">$94&ndash;$145</td>
                <td className="p-4">$94&ndash;$145</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Billing</th>
                <td className="p-4">Annual billing and true-up</td>
                <td className="p-4">Annual billing and true-up</td>
                <td className="p-4">Pay monthly; credits roll over to an annual true-up</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">System size limit</th>
                <td className="p-4">Annual load, capped at 1 MW</td>
                <td className="p-4">Annual load</td>
                <td className="p-4">Annual load plus up to 50% if you attest to the need</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground">
          Source: CPUC, Net Energy Metering and Net Billing, comparison of
          standard NEM tariffs and NBT, checked September 23, 2026. Applies to
          PG&amp;E, SCE and SDG&amp;E.
        </p>
      </section>
      <section>
        <h2>When does NEM 2.0 expire?</h2>
        <p>
          Twenty years after your system&apos;s interconnection date, under CPUC
          Decision D.14-03-041, unless you choose to switch to the current tariff
          sooner. A system interconnected in 2020 keeps NEM 2.0 until 2040. The
          clock follows the system&apos;s interconnection date, not the date you
          bought the house. PG&amp;E states the same 20-year period for its NEM 1.0
          customers.
        </p>
        <p className="mt-3">
          The door to new NEM 2.0 accounts is shut. PG&amp;E says applications
          submitted before April 15, 2023 had to be completed by April 15, 2026 to
          keep NEM2; from that date, unfinished NEM2 applications move to the Solar
          Billing Plan.
        </p>
      </section>
      <section>
        <h2>Municipal utilities and non-export systems</h2>
        <p>
          NEM 2.0 and NEM 3.0 are CPUC tariffs for PG&amp;E, SCE and SDG&amp;E.
          City-owned utilities write their own. LADWP still uses net energy
          metering: its NEM rider credits exported energy at your rate
          schedule&apos;s energy price and carries credits forward, but zeroes any
          balance left when you close the account. SMUD moved new solar customers to
          its Solar and Storage Rate on March 1, 2022, which pays 9.6 cents per kWh
          for exports at any hour, and lets its NEM 1.0 customers stay on that rate
          through 2030. See{" "}
          <Link className="underline" href="/blog/ladwp-net-metering">LADWP net metering</Link>{" "}
          and the{" "}
          <Link className="underline" href="/blog/smud-solar-program">SMUD solar program</Link>{" "}
          for the details.
        </p>
        <p className="mt-3">
          A non-export system is a third path. PG&amp;E&apos;s Rule 21 defines it as
          a system sized and designed so its output serves only the home and cannot
          flow onto the grid. It takes no NEM or net billing credits because it sends
          nothing out, but it still has to be interconnected under the
          utility&apos;s Rule 21 process. The CPUC&apos;s net metering page expressly
          leaves non-export interconnection out of scope.
        </p>
      </section>
      <section>
        <h2>Who should check the existing NEM tariff</h2>
        <p>
          The CPUC states that NEM 2.0 customers may remain on that tariff for
          20 years from interconnection, unless they choose to switch to the
          current tariff. A homeowner should confirm the interconnection date,
          tariff and any proposed system change directly with the utility before
          treating a proposal as a continuation of the prior arrangement.
        </p>
        <p className="mt-3">
          Three changes cause most of the questions. Adding panels past your
          utility&apos;s threshold moves the account to NEM 3.0 (see{" "}
          <Link className="underline" href="/blog/adding-solar-panels-existing-system-california">
            adding solar panels to an existing system
          </Link>
          ). Selling the home does not restart the 20-year clock, which runs from the
          interconnection date, and a lease or PPA contract is a separate matter
          (see{" "}
          <Link className="underline" href="/blog/what-happens-to-solar-lease-when-i-sell-california">
            selling a home with a solar lease or PPA
          </Link>{" "}
          and{" "}
          <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa">
            solar PPA vs. lease
          </Link>
          ). And the rate plan you pick still decides what each exported kWh earns
          under NEM 2.0, since credits follow the hour&apos;s retail price; PG&amp;E&apos;s
          plans are listed in{" "}
          <Link className="underline" href="/blog/pge-rate-schedules">
            PG&amp;E rate schedules
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>What a comparable proposal needs to show</h2>
        <p>
          Ask every bidder to identify the utility, tariff, assumed onsite use,
          projected imports, projected exports, remaining delivery and fixed
          charges, and the source date for each assumption. A single estimated
          monthly payment does not show those inputs.
        </p>
      </section>
      <QuoteChecklist />
      <section>
        <h2>Use the current bill before relying on a comparison</h2>
        <p>
          This guide applies to PG&amp;E, SCE and SDG&amp;E Net Billing context. A
          municipal or community-choice account can have additional service and
          billing details. Read the current bill and utility enrollment before
          comparing it to a generic example. For the official consumer checklist,
          see the <a className="underline" href={cpucConsumerGuide.url}>CPUC guide</a>.
        </p>
      </section>
      <RelatedGuides
        heading="What the tariff change does to a battery and a true-up"
        intro="The table above covers both at a glance: NEM 3.0's lower, hourly export credit is what makes self-consuming stored solar worth more than exporting it, and its true-up runs on a monthly billing cycle instead of NEM 2.0's fully annual one. For the two specific questions this raises:"
        links={[
          { href: "/battery/battery-payback-nem-3-california", label: "Whether a battery pays back under NEM 3.0" },
          { href: "/solar-problems/true-up-bill-california-explained", label: "How the annual true-up is settled" },
        ]}
      />
    </>
  );
}

// The comparison page's FAQ as data (2026-09-23), rendered by DecisionPage's
// FaqBlock so the visible Q&A and the FAQPage schema come from the same strings.
// The links that used to sit inside these answers now live in the body
// ("Who should check the existing NEM tariff" and the RelatedGuides block).
const comparisonFaqs: FaqJsonLdItem[] = [
  {
    question: "What is NEM 2.0 in California?",
    answer:
      "NEM 2.0 is California's second net energy metering tariff for rooftop solar at PG&E, SCE and SDG&E, created by the CPUC in 2016 (Decision D.16-01-044). It credits exported solar at the retail price of the hour, requires a time-of-use rate, charges a one-time interconnection fee ($145 at PG&E, $94 at SCE, $132 at SDG&E) and collects non-bypassable charges on net usage in each hour. It closed to new applicants on April 14, 2023.",
  },
  {
    question: "What's the actual difference between NEM 2.0 and NEM 3.0 in California?",
    answer:
      "Mainly export compensation. NEM 2.0 credits exported solar at the retail rate; NEM 3.0 (the Net Billing Tariff) credits it using the CPUC's Avoided Cost Calculator, which is usually lower and changes by hour. NEM 3.0 also replaces the 20-year legacy period with a nine-year tariff guarantee, requires a specific electrification rate plan, and bills monthly instead of annually.",
  },
  {
    question: "What is the difference between NEM 1.0, NEM 2.0 and NEM 3.0?",
    answer:
      "NEM 1.0 (1996 to the 2016-2017 sunsets) credited exports at retail with no interconnection fee and any rate plan. NEM 2.0 (2016 to April 14, 2023) kept retail credits but added a $94 to $145 fee, hourly non-bypassable charges and a time-of-use requirement. NEM 3.0 (applications from April 15, 2023) credits exports at avoided-cost values and bills monthly. NEM 1.0 and 2.0 accounts keep their tariff for 20 years from interconnection.",
  },
  {
    question: "When does NEM 2.0 expire?",
    answer:
      "Twenty years from the date your system was interconnected, under CPUC Decision D.14-03-041, unless you switch to the current tariff sooner. A system interconnected in 2020 keeps NEM 2.0 until 2040. Adding capacity past your utility's threshold can end it early.",
  },
  {
    question: "Is NEM 2.0 better than NEM 3.0?",
    answer:
      "For export credits alone, NEM 2.0 pays more per kilowatt-hour sent to the grid. Whether that makes NEM 2.0 better for your household depends on how much you export versus use yourself, and whether a battery is in the picture; NEM 3.0's economics improve when you can shift usage to match your own solar output. Neither this page nor the CPUC states a single answer that applies to every home.",
  },
  {
    question: "When did NEM 3.0 take effect in California?",
    answer:
      "The CPUC adopted the Net Billing Tariff in Decision D.22-12-056 in December 2022, and it has applied to PG&E, SCE and SDG&E customers who applied to interconnect on or after April 15, 2023. There is no later start date; April 15, 2023 is the date that decides whether a system is on NEM 2.0 or NEM 3.0.",
  },
  {
    question: "How are export credits calculated under NEM 3.0?",
    answer:
      "Each hour's exports are credited at a value from the CPUC's Avoided Cost Calculator, which the utilities call Energy Export Credits. The CPUC says the value is usually lower than the retail rate but can rise above it on late summer evenings. Residential PG&E and SCE customers who apply before the end of 2027 get a small adder for nine years; SDG&E customers are excluded.",
  },
  {
    question: "Does NEM 3.0 apply to LADWP?",
    answer:
      "No. The Net Billing Tariff covers PG&E, SCE and SDG&E. LADWP is a city-owned utility with its own net energy metering rider, which credits exports at your rate schedule's energy price and carries credits forward, but zeroes any credit balance when you close the account. SMUD also sets its own solar rate.",
  },
  {
    question: "What does NEM mean on a PG&E bill?",
    answer:
      "NEM stands for Net Energy Metering, PG&E's program for customers with their own solar. A NEM account gets a monthly statement showing that month's charges, including the Base Services Charge, and a running total of solar charges and credits, then an annual True-Up statement after 12 months that settles the net amount.",
  },
  {
    question: "What is a non-export solar system in California?",
    answer:
      "A system sized and designed so its output serves only the home and cannot flow onto the utility grid, as PG&E's Rule 21 defines it. Because nothing is exported, it earns no net metering or net billing credits, but it still has to be interconnected through the utility's Rule 21 process.",
  },
  {
    question: "I have PG&E NEM 2.0 (\"PGE NEM2\"). What happens if I add panels or a battery?",
    answer:
      "Adding capacity can move your account onto NEM 3.0 before your 20 years are up if it crosses PG&E's threshold: more than 10% of your original system's nameplate capacity, or more than 1 kW, per PG&E. Check the threshold with PG&E before signing an expansion contract.",
  },
  {
    question: "Does a battery pay back differently under NEM 2.0 vs. NEM 3.0?",
    answer:
      "Under NEM 2.0, exporting paid close to retail value, so a battery's main draw was backup power, not bill savings. Under NEM 3.0, exporting pays less than buying the same power back, so a battery that shifts your usage to your own solar has a real bill-savings case, but the size of that case depends on your utility and usage.",
  },
  {
    question: "Does this change if my solar is leased or under a PPA (like Sunrun)?",
    answer:
      "The tariff (NEM 2.0 vs. NEM 3.0) is tied to the system's interconnection date, not who owns it. What a leased or PPA system's export credits mean for your bill, and what happens on a sale, is a contract question with your leaseholder, separate from the utility tariff.",
  },
];

// Rendered via DecisionPage's `faq` prop (after the source list), matching
// the draft's placement instruction ("appended after the existing 'Sources
// checked' section and before 'Have your bill reviewed'"). Only used for
// kind === "billing".
function BillingFaq() {
  return (
    <section>
      <h2>FAQ</h2>
      <div className="mt-3 space-y-6">
        <div>
          <h3>Is NEM 3.0 the same thing as the Net Billing Tariff?</h3>
          <p>
            Yes. &ldquo;Net Billing Tariff (NBT)&rdquo; is the CPUC&apos;s own
            name for the program; &ldquo;NEM 3.0&rdquo; is the common name
            everyone else uses for the same tariff, adopted by the CPUC in
            Decision D.22-12-056.
          </p>
        </div>
        <div>
          <h3>Is Net Billing the same as Net Metering?</h3>
          <p>
            No. Net Metering (NEM 1.0 and NEM 2.0) is the older system,
            closed to new interconnection applicants. Net Billing (NBT, also
            called NEM 3.0) is the separate tariff that replaced it for
            applications submitted on or after April 15, 2023.
          </p>
        </div>
        <div>
          <h3>What does the CPUC actually call NEM 3.0 in its own materials?</h3>
          <p>
            &ldquo;Net Billing Tariff (NBT).&rdquo; The CPUC&apos;s own Net
            Energy Metering program page doesn&apos;t use the term &ldquo;NEM
            3.0&rdquo; anywhere in its text.
          </p>
        </div>
        <div>
          <h3>Is &ldquo;Solar Billing Plan&rdquo; a different program from NEM 3.0?</h3>
          <p>
            No &mdash; it&apos;s PG&amp;E&apos;s and SCE&apos;s own branded
            name for how they implement the Net Billing Tariff on a
            customer&apos;s account. It&apos;s the same underlying CPUC
            tariff as NBT/NEM 3.0, not a fourth program.
          </p>
        </div>
      </div>
    </section>
  );
}

function TimelineContent() {
  return (
    <>
      <section>
        <h2>December 2022: the CPUC adopted the Net Billing Tariff</h2>
        <p>
          CPUC Decision D.22-12-056 adopted the Net Billing Tariff as the
          successor to the standard NEM tariffs for the large investor-owned
          utilities. The CPUC refers to the tariff as the Solar Billing Plan in
          utility materials and recognizes NEM 3.0 as a common name.
        </p>
      </section>
      <section>
        <h2>April 15, 2023: the tariff for new applications changed</h2>
        <p>
          The CPUC states that customers applying for interconnection on or after
          April 15, 2023 take service on the Net Billing Tariff in the applicable
          large-IOU territory. That date is not a substitute for checking an
          individual system's interconnection record or present bill.
        </p>
      </section>
      <section>
        <h2>Existing NEM accounts have their own timeline</h2>
        <p>
          The CPUC says NEM 2.0 customer-generators can remain on that tariff for
          20 years from the date of interconnection, or switch to the current
          tariff. If a property already has solar, obtain the utility's written
          tariff and interconnection information before changing equipment or
          signing an expansion contract.
        </p>
      </section>
      <section>
        <h2>What to check today</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Identify the electricity provider and tariff shown on the bill.</li>
          <li>Confirm whether the proposal is for a new system, a repair, storage or added generation.</li>
          <li>Ask how the proposal models imports, exports, delivery charges and the annual bill process.</li>
          <li>Keep the utility source date with the written proposal.</li>
        </ol>
      </section>
      <section>
        <h2>Find the current rule before acting</h2>
        <p>
          The CPUC maintains the statewide Net Billing information. Utility rules
          and account details determine how it applies to an individual property.
          Use the <Link className="underline" href="/blog/what-is-nem-3-california">main Net Billing guide</Link> for the billing distinction and the current
          bill to evaluate a proposal.
        </p>
      </section>
    </>
  );
}

function DecisionContent() {
  return (
    <>
      <section>
        <h2>There is no statewide yes-or-no answer</h2>
        <p>
          Under Net Billing, solar used at the property reduces electricity bought
          from the grid, while exported electricity earns bill credits under the
          applicable tariff. That makes the usage pattern, production model and
          contract scope material to the decision. It does not create a universal
          savings or payback result.
        </p>
      </section>
      <section>
        <h2>Start with the real account</h2>
        <p>
          Use a full year of bill history, the rate plan, current generation
          provider and existing solar enrollment. Ask for a monthly proposal that
          distinguishes electricity used onsite, grid imports, exports, delivery
          charges and credits. A bill can still have charges after a solar system
          operates.
        </p>
      </section>
      <section>
        <h2>Storage is a separate scope and cost decision</h2>
        <p>
          A battery can store energy for later use and may be designed for backup
          loads. It does not automatically make a proposal economical or provide
          whole-home backup. Request usable capacity, output, supported circuits,
          reserve setting, warranty responsibilities and the complete installed
          price separately from the solar array.
        </p>
      </section>
      <QuoteChecklist />
      <section>
        <h2>Compare contracts before deciding</h2>
        <p>
          Compare a cash price, loan, lease or PPA only after the underlying
          equipment and bill assumptions match. Include roof work, electrical
          work, permits, interconnection, service responsibility, payment terms
          and the remaining utility bill. The <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">financing comparison</Link> helps organize those terms without selecting a winner.
        </p>
      </section>
    </>
  );
}

function BillingContent() {
  return (
    <>
      <section>
        <h2>Two names, one tariff: NBT and NEM 3.0</h2>
        <p>
          The CPUC&apos;s own Net Energy Metering program page refers to the
          newer tariff as the &ldquo;net billing tariff (NBT)&rdquo;
          throughout &mdash; the term &ldquo;NEM 3.0&rdquo; doesn&apos;t
          appear anywhere in that page&apos;s own text. &ldquo;NEM 3.0&rdquo;
          is the name installers, media and homeowners use for the same
          CPUC decision, D.22-12-056, not a separate program. On top of
          that, PG&amp;E and SCE each brand their own implementation of NBT
          as the &ldquo;Solar Billing Plan&rdquo; &mdash; a third name for
          the same underlying CPUC tariff, specific to how those two
          utilities present it on a bill.
        </p>
      </section>
      <section>
        <h2>Net Billing (NBT / NEM 3.0) vs. Net Metering (NEM 1.0 / 2.0)</h2>
        <p>
          &ldquo;Net Metering&rdquo; is the CPUC&apos;s umbrella term for the
          two earlier tariffs, NEM 1.0 and NEM 2.0, which credit exported
          solar close to the full retail rate. &ldquo;Net Billing&rdquo; is
          the separate, newer system that applies to interconnection
          applications submitted on or after April 15, 2023, and
          compensates exports using the CPUC&apos;s Avoided Cost Calculator
          instead &mdash; a value the CPUC states is &ldquo;usually lower
          than the retail rate.&rdquo; For the full side-by-side of what that
          changes on a bill, see{" "}
          <Link className="underline" href="/blog/nem-2-vs-nem-3-california">
            NEM 2.0 vs. NEM 3.0 in California
          </Link>
          . To find out which one actually applies to a specific account,
          see{" "}
          <Link className="underline" href="/blog/what-is-nem-3-california">
            What is NEM 3.0 in California?
          </Link>
          .
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Quick reference: net metering and net billing terminology</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Term</th>
                <th className="p-4">What it means</th>
                <th className="p-4">Who uses it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Net Energy Metering (NEM)</td>
                <td className="p-4">The CPUC&apos;s umbrella term for NEM 1.0 and NEM 2.0 &mdash; legacy tariffs crediting exports near the retail rate</td>
                <td className="p-4">CPUC, utilities</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Net Billing Tariff (NBT)</td>
                <td className="p-4">The CPUC&apos;s official name for the tariff that replaced NEM for new interconnection applicants after April 15, 2023</td>
                <td className="p-4">CPUC</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">NEM 3.0</td>
                <td className="p-4">The common name for NBT &mdash; same tariff, same CPUC decision (D.22-12-056), not a separate program</td>
                <td className="p-4">Installers, media, homeowners</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Solar Billing Plan</td>
                <td className="p-4">PG&amp;E&apos;s and SCE&apos;s own product name for their implementation of NBT/NEM 3.0</td>
                <td className="p-4">PG&amp;E, SCE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section>
        <h2>Start with the utility territory</h2>
        <p>
          The CPUC&apos;s standard Net Energy Metering and Net Billing guidance
          applies in the territories of PG&amp;E, SCE and SDG&amp;E. Municipal
          utilities and small investor-owned utilities have separately adopted
          tariffs. Identify the electricity provider on the bill before using
          a California-wide comparison.
        </p>
      </section>
      <section>
        <h2>What Net Billing changed for new large-IOU applications</h2>
        <p>
          Since April 15, 2023, new interconnection applicants in the large
          investor-owned utility territories have taken service under the Net
          Billing Tariff, which the utilities call the Solar Billing Plan. As
          with the earlier NEM tariffs, generation used onsite first serves
          onsite load. The difference is how excess generation exported to the
          grid is credited.
        </p>
        <p className="mt-3">
          The CPUC states that standard NEM export bill credits use the
          customer&apos;s retail energy rates before true-up, while Net Billing
          export credits use the CPUC Avoided Cost Calculator values. Net
          Billing export compensation is usually lower than retail rates, but
          can be higher during late-summer evenings. Do not use a generic
          cents-per-kWh figure in place of the utility&apos;s current tariff and
          proposal assumptions.
        </p>
      </section>
      <section>
        <h2>Existing NEM accounts need a separate check</h2>
        <p>
          The CPUC says NEM 2.0 customer-generators may remain on that tariff
          for 20 years from their interconnection date, unless they choose to
          switch. A proposal for added generation, storage, repair or a new
          owner should be checked against the utility&apos;s written account and
          interconnection information before anyone assumes the prior tariff
          continues unchanged.
        </p>
      </section>
      <section>
        <h2>Ask for a billing model you can inspect</h2>
        <p>
          A proposal should identify the utility, tariff, usage history,
          expected onsite use, expected imports, expected exports, delivery and
          fixed charges, and the date and source of every rate assumption. The
          CPUC consumer guide also directs customers to review the disclosure
          documents, contract and financing terms before signing.
        </p>
      </section>
      <QuoteChecklist />
      <section>
        <h2>Use primary sources before deciding</h2>
        <p>
          The <Link className="underline" href="/blog/what-is-nem-3-california">main Net Billing guide</Link> explains the
          broader California context. For a property-specific decision, keep a
          copy of the current bill and written proposal, then verify tariff and
          interconnection questions with the serving utility.
        </p>
      </section>
      <RelatedGuides
        heading="Where the difference shows up on a real bill"
        links={[
          { href: "/solar-problems/true-up-bill-california-explained", label: "What the annual true-up bill contains" },
          { href: "/battery/battery-payback-nem-3-california", label: "Whether storage changes the arithmetic" },
        ]}
      />
    </>
  );
}

export function NetBillingGuide({ kind }: { kind: NetBillingGuideKind }) {
  const guide = guides[kind];
  const content = kind === "comparison" ? <ComparisonContent /> : kind === "timeline" ? <TimelineContent /> : kind === "decision" ? <DecisionContent /> : <BillingContent />;
  const faq = kind === "billing" ? <BillingFaq /> : undefined;
  const faqs = kind === "comparison" ? comparisonFaqs : [];
  return (
    <DecisionPage
      title={guide.title}
      intro={guide.intro}
      path={guide.path}
      sources={
        kind === "comparison"
          ? [...sources, ...comparisonOnlySources, ...comparisonT3Sources]
          : kind === "billing"
            ? [...sources, ...comparisonOnlySources]
            : sources
      }
      sourceCheckedDate={kind === "comparison" ? "2026-09-23" : kind === "billing" ? "2026-09-22" : "2026-09-12"}
      faq={faq}
      faqs={faqs}
    >
      {content}
      {/* The comparison page is the NEM hub (SEO/24 §5.1): it lists every NEM
          spoke. The other three kinds are spokes and link across to siblings. */}
      <HubSpokeLinks hub="nem" currentPath={guide.path} />
    </DecisionPage>
  );
}
