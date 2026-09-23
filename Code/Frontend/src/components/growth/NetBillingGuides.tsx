import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";

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

const guides = {
  comparison: {
    path: "/blog/nem-2-vs-nem-3-california",
    title: "NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You",
    intro:
      "California's solar billing tariff changed from NEM 2.0 to NEM 3.0 (officially the Net Billing Tariff) in April 2023. If you installed solar before April 15, 2023, you're grandfathered onto NEM 2.0 for 20 years; after that date, you're on NEM 3.0. The two differ mainly in export compensation, which is what this page compares side by side.",
    metaTitle: "NEM 2.0 vs NEM 3.0 California: Export Compensation",
    metaDescription:
      "NEM 2.0 vs NEM 3.0 in California: how solar export compensation changed after April 2023, and what it means if you're grandfathered in.",
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
      modifiedTime: kind === "comparison" || kind === "billing" ? "2026-09-22T00:00:00Z" : "2026-09-12T00:00:00Z",
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
          calculation.
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
                <td className="p-4">Credits from the CPUC&apos;s Avoided Cost Calculator (ACC), a value &ldquo;usually lower than import rates&rdquo; that varies by time of day, day of week and season, per the CPUC and PG&amp;E</td>
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
        <h2>NEM 1.0, briefly</h2>
        <p>
          If you&apos;re comparing all three: NEM 1.0 was the original
          tariff, closed to new interconnections after its 2016&ndash;2017
          sunset dates, per the CPUC. Like NEM 2.0, it carries a 20-year
          legacy period from the interconnection date &mdash; PG&amp;E
          states this for its own NEM 1.0 customers. Nothing on this page
          changes for a NEM 1.0 account; the comparison above is
          specifically NEM 2.0 vs. NEM 3.0.
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

// Rendered via DecisionPage's `faq` prop (after the source list), matching
// the draft's placement instruction ("after Sources checked, before Have
// your bill reviewed"). Only used for kind === "comparison".
function ComparisonFaq() {
  return (
    <section>
      <h2>FAQ</h2>
      <div className="mt-3 space-y-6">
        <div>
          <h3>What&apos;s the actual difference between NEM 2.0 and NEM 3.0 in California?</h3>
          <p>
            Mainly export compensation. NEM 2.0 credits exported solar near
            the full retail rate; NEM 3.0 (the Net Billing Tariff) credits
            it using the CPUC&apos;s Avoided Cost Calculator, which is
            usually lower and changes by hour. NEM 3.0 also drops the
            20-year legacy period in favor of a nine-year tariff-lock
            guarantee, and bills monthly instead of annually. See the table
            above for the full side-by-side.
          </p>
        </div>
        <div>
          <h3>Is NEM 2.0 better than NEM 3.0?</h3>
          <p>
            For export credits alone, NEM 2.0 pays more per kilowatt-hour
            sent to the grid. Whether that makes NEM 2.0 &ldquo;better&rdquo;
            for your household depends on how much you export versus use
            yourself, and whether a battery is in the picture &mdash;
            NEM 3.0&apos;s economics improve when you can shift usage to
            match your own solar output. Neither this page nor the CPUC
            states a single answer that applies to every home.
          </p>
        </div>
        <div>
          <h3>What about NEM 1.0 vs. NEM 2.0 vs. NEM 3.0?</h3>
          <p>
            NEM 1.0 is closed to new interconnections and, like NEM 2.0,
            carries a 20-year legacy period. This page focuses on the
            NEM 2.0-to-NEM 3.0 change specifically; see &ldquo;NEM 1.0,
            briefly&rdquo; above for where NEM 1.0 fits.
          </p>
        </div>
        <div>
          <h3>I have PG&amp;E NEM 2.0 (&ldquo;PGE NEM2&rdquo;) &mdash; what happens if I add panels or a battery?</h3>
          <p>
            Adding capacity can move your account onto NEM 3.0 before your
            20 years are up if it crosses PG&amp;E&apos;s threshold &mdash;
            more than 10% of your original system&apos;s nameplate
            capacity, or more than 1 kW, per PG&amp;E. See{" "}
            <Link className="underline" href="/blog/adding-solar-panels-existing-system-california">
              Adding solar panels to an existing system in California
            </Link>{" "}
            for the filing steps and how to stay under that line.
          </p>
        </div>
        <div>
          <h3>Does a battery pay back differently under NEM 2.0 vs. NEM 3.0?</h3>
          <p>
            Under NEM 2.0, exporting paid close to retail value, so a
            battery&apos;s main draw was backup power, not bill savings.
            Under NEM 3.0, exporting pays less than buying the same power
            back, so a battery that shifts your usage to your own solar has
            a real bill-savings case &mdash; but the size of that case
            depends on your utility and usage. See{" "}
            <Link className="underline" href="/battery/battery-payback-nem-3-california">
              battery payback under NEM 3.0
            </Link>{" "}
            for the math.
          </p>
        </div>
        <div>
          <h3>Does this change if my solar is leased or under a PPA (like Sunrun)?</h3>
          <p>
            The tariff (NEM 2.0 vs. NEM 3.0) is tied to the system&apos;s
            interconnection date, not who owns it. But what a leased or
            PPA&apos;d system&apos;s export credits mean for your bill, and
            what happens on a sale, is a contract question with your
            leaseholder, separate from the utility tariff. See{" "}
            <Link className="underline" href="/blog/what-happens-to-solar-lease-when-i-sell-california">
              Selling a home with a solar lease or PPA
            </Link>{" "}
            and{" "}
            <Link className="underline" href="/blog/solar-ppa-vs-lease-california">
              Solar PPA vs. lease
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

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
          than import rates.&rdquo; For the full side-by-side of what that
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
  const faq = kind === "comparison" ? <ComparisonFaq /> : kind === "billing" ? <BillingFaq /> : undefined;
  return (
    <DecisionPage
      title={guide.title}
      intro={guide.intro}
      path={guide.path}
      sources={kind === "comparison" || kind === "billing" ? [...sources, ...comparisonOnlySources] : sources}
      sourceCheckedDate={kind === "comparison" || kind === "billing" ? "2026-09-22" : "2026-09-12"}
      faq={faq}
    >
      {content}
    </DecisionPage>
  );
}
