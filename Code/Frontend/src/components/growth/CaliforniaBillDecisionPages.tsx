import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { BillComparison } from "./BillComparison";
import { DecisionPage, type Source } from "./DecisionPage";

const sources: Source[] = [
  { label: "CPUC: California Electric Rate Comparison", url: "https://www.cpuc.ca.gov/RateComparison" },
  { label: "CPUC: CARE and FERA bill discounts", url: "https://www.cpuc.ca.gov/care" },
  { label: "CPUC: Utility bill assistance and disputes", url: "https://www.cpuc.ca.gov/consumer-support/late-bill-assistance/my-bill" },
  { label: "CPUC: Medical Baseline", url: "https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/medical-baseline" },
];

// Additional sources cited only by the "lower" guide's 2026-09-22 delta.
// Kept separate from `sources` above so the "high" guide's source list is
// unaffected.
const lowerOnlySources: Source[] = [
  { label: "PG&E: Time-of-use rate plans", url: "https://www.pge.com/en/account/rate-plans/find-your-best-rate-plan/time-of-use-rate-plans.html" },
  { label: "SCE: Time-of-Use Residential Rate Plans", url: "https://www.sce.com/residential/rates/Time-Of-Use-Residential-Rate-Plans" },
  { label: "SDG&E: When Matters (TOU peak window)", url: "https://www.sdge.com/whenmatters" },
  { label: "PG&E: Baseline allowance", url: "https://www.pge.com/en/account/rate-plans/how-rates-work/baseline-allowance.html" },
  { label: "CPUC: CARE/FERA program (income limits and Base Services Charge)", url: "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program" },
  { label: "PG&E: Medical Baseline program", url: "https://www.pge.com/en/account/billing-and-assistance/financial-assistance/medical-baseline-program.html" },
  { label: "CPUC: California Climate Credit", url: "https://www.cpuc.ca.gov/climatecredit" },
  { label: "CPUC: California Climate Credit FAQ", url: "https://www.cpuc.ca.gov/industries-and-topics/natural-gas/greenhouse-gas-cap-and-trade-program/california-climate-credit/california-climate-credit---faq" },
  { label: "U.S. EIA: California electricity profile", url: "https://www.eia.gov/electricity/state/california/" },
];

// Added only to the "high" guide's source list — kept separate from the
// shared `sources` array above so the "lower" guide (a different page) is
// unaffected.
const highBillAdditionalSources: Source[] = [
  {
    label: "CPUC Public Advocates Office: Q2 2026 Electric Rates Report",
    url: "https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf",
  },
];

const guides = {
  high: {
    path: "/blog/why-is-my-california-electric-bill-so-high",
    title: "Why Is My California Electric Bill So High? Check the Bill Before Guessing",
    intro: "A higher California electric bill can come from more daily use, a different rate or billing period, a credit or adjustment, or a combination of them. Compare two bills on the same daily basis, then check the account with the utility.",
    metaTitle: "Why Is My California Electric Bill So High? Check First",
    metaDescription:
      "California electric rates are up 69–101% since 2016 on wildfire, transmission, and NEM costs, per CPUC. See what's driving yours and what to check first.",
    modifiedTime: "2026-09-22T00:00:00Z",
    sourceCheckedDate: "2026-09-22",
  },
  lower: {
    path: "/blog/how-to-lower-electric-bill-california",
    title: "How to Lower Your Electric Bill in California: Start With the Moves You Can Verify",
    intro: "Start with the current bill, rate plan and programs you may already qualify for. Then price efficiency or solar against the same usage history. That order keeps a sales estimate from becoming the baseline.",
    metaTitle: "How to Lower Your Electric Bill in California: 6 Steps",
    metaDescription:
      "The four things that actually change a California electric bill: rate plan, baseline, fixed charges, and usage — plus CARE, FERA, and the Climate Credit.",
  },
} as const;

export type CaliforniaBillGuideKind = keyof typeof guides;

export function californiaBillMetadata(kind: CaliforniaBillGuideKind): Metadata {
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
        kind === "lower"
          ? "2026-09-22T00:00:00Z"
          : "modifiedTime" in guide && guide.modifiedTime
            ? guide.modifiedTime
            : "2026-09-12T00:00:00Z",
    },
  };
}

function UtilityGuideLinks() {
  return (
    <section>
      <h2>Use the guide for the utility printed on the bill</h2>
      <p>
        California does not have one residential electric bill. Start with the
        provider named on the statement, including any separate generation
        provider, and use the matching guide:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li><Link className="underline" href="/blog/why-is-my-pge-bill-so-high">PG&amp;E high-bill guide</Link></li>
        <li><Link className="underline" href="/blog/why-is-my-sce-bill-so-high">SCE high-bill guide</Link></li>
        <li><Link className="underline" href="/blog/why-is-my-sdge-bill-so-high">SDG&amp;E high-bill guide</Link></li>
        <li><Link className="underline" href="/blog/why-is-my-ladwp-bill-so-high">LADWP high-bill guide</Link></li>
      </ul>
    </section>
  );
}

function HighBillContent() {
  return (
    <>
      <section>
        <h2>What CPUC says is driving rates up statewide</h2>
        <p>
          The CPUC&apos;s Public Advocates Office publishes a quarterly rate
          report. Its most recent edition — the Q2 2026 report, covering rates
          through June 2026 — names three drivers of the statewide increase:
          &ldquo;Wildfire mitigation and wildfire liability costs,&rdquo;
          &ldquo;Transmission &amp; distribution investments,&rdquo; and
          &ldquo;Rooftop solar incentives (&lsquo;net energy
          metering&rsquo;).&rdquo;
        </p>
        <p className="mt-3">
          Over the last ten years (January 2016 to June 2026), the same
          report shows average residential rates up 69% at PG&amp;E, 101% at
          SCE, and 97% at SDG&amp;E. As of June 2026, that puts the average
          residential rate at 33.7 cents/kWh at PG&amp;E, 34.4 cents/kWh at
          SCE, and 45.5 cents/kWh at SDG&amp;E — see the{" "}
          <Link className="underline" href="/california-utility-rate-tracker">
            California Utility Rate Tracker
          </Link>{" "}
          for the full current table and how each utility&apos;s most recent
          change broke down in dollars.
        </p>
        <p className="mt-3">
          Those three categories are the statewide pattern, not a diagnosis
          of your bill specifically. Each utility&apos;s own rate case or
          cost-recovery proceeding moves the actual dollars — SCE&apos;s 2026
          rate, for example, reflects its wildfire self-insurance reserve and
          a 2023 Energy Resource Recovery Account proceeding; PG&amp;E&apos;s
          reflects the wind-down of two wildfire-cost recovery programs. For
          that utility-by-utility detail, see{" "}
          <Link className="underline" href="/california-utility-rate-tracker">
            why rates moved in 2026
          </Link>
          .
        </p>
        <p className="mt-3">
          For what&apos;s actually causing <em>your</em> bill to be high this
          month, start with the usage and charge comparison below.
        </p>
      </section>
      <section>
        <h2>First question: did you use more electricity each day?</h2>
        <p>
          Put the current bill next to a prior bill and divide total kWh by the
          number of billing days. A longer billing period can make the total look
          worse even when daily use barely changed. If daily kWh jumped, check
          heating or cooling, EV charging, pool equipment, electric water
          heating, new appliances and equipment that may be running longer than
          expected.
        </p>
      </section>
      <BillComparison utilityName="California electric" />
      <section>
        <h2>Second question: did the charge per day rise faster than usage?</h2>
        <p>
          Compare current electric charges per day and the blended charge per kWh
          shown by the calculator. That blended number is a diagnostic, not a
          utility tariff. If daily usage stayed close but daily charges rose,
          inspect the rate plan, peak-period usage, generation provider, credits,
          adjustments and any annual settlement on the statement.
        </p>
      </section>
      <section>
        <h2>Check the rate plan and provider before blaming one line item</h2>
        <p>
          The CPUC rate-comparison tool lets residents search by ZIP code, county
          or city and compare residential, CARE and EV options. Some accounts also
          show a community choice aggregator for generation while the utility
          handles delivery. Read both parts of the same bill before comparing it
          with a neighbor&apos;s account.
        </p>
      </section>
      <section>
        <h2>If the statement still does not add up, dispute it in order</h2>
        <p>
          The CPUC directs customers to contact the utility first with a complete
          copy of the bill. If a CPUC-regulated utility cannot resolve the issue,
          the CPUC Consumer Affairs Branch can explain the dispute process.
          Municipal utilities such as LADWP have their own complaint channels.
        </p>
      </section>
      <UtilityGuideLinks />
      <section>
        <h2>Evaluate solar only after the cause is visible</h2>
        <p>
          A proposal should use a full year of actual usage, identify the current
          tariff and generation provider, and show projected onsite use, grid
          purchases, exports and remaining charges. A promised percentage is not
          a bill model. Get the assumptions in writing and compare the proposal
          with the same bill history you used above.
        </p>
      </section>
      <section>
        <h2>Programs that lower what you owe, regardless of the cause</h2>
        <p>
          If the higher rate itself is the issue rather than a billing error,
          CARE and FERA reduce both the per-kWh price and the flat monthly
          Base Services Charge for income-qualified households — see the{" "}
          <Link className="underline" href="/programs/care-california">
            CARE and FERA program page
          </Link>{" "}
          (publishing alongside this page — confirm both go live together)
          {" "}for current income limits and how to apply through your utility.
          For what that fixed charge is and how it&apos;s calculated for
          non-qualifying households, see{" "}
          <Link
            className="underline"
            href="/blog/california-24-dollar-fixed-charge-explained"
          >
            California&apos;s $24 fixed charge, explained
          </Link>
          . For the full list of what actually moves a California bill —
          rate plan timing, the baseline allowance, and usage — see{" "}
          <Link
            className="underline"
            href="/blog/how-to-lower-electric-bill-california"
          >
            how to lower your electric bill
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>Frequently asked questions</h2>
        <p className="font-semibold">
          Why is my electric bill high even though I have solar panels?
        </p>
        <p className="mt-2">
          Solar doesn&apos;t remove every charge. The monthly Base Services
          Charge (about $24 for most households, less for CARE/FERA),
          non-bypassable charges, and — on a combined PG&amp;E or SDG&amp;E
          account — gas charges keep showing up regardless of how much the
          system produced. See{" "}
          <Link
            className="underline"
            href="/solar-problems/do-i-still-get-a-utility-bill-with-solar"
          >
            do you still get a utility bill with solar?
          </Link>{" "}
          for the full breakdown.
        </p>
        <p className="mt-4 font-semibold">Is my gas bill part of this?</p>
        <p className="mt-2">
          No. This page covers electricity only. A combined PG&amp;E or
          SDG&amp;E statement bills gas separately, on its own meter and its
          own rate, unrelated to what&apos;s driving electric rates.
        </p>
      </section>
    </>
  );
}

function LowerBillContent() {
  return (
    <>
      <section>
        <h2>The four things that actually move a California bill</h2>
        <p>Everything below sorts into one of four levers:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Rate plan and timing.</strong> Under time-of-use pricing,
            the same kilowatt-hour costs more or less depending on when
            it&apos;s used. PG&amp;E, SCE, and SDG&amp;E each set their own
            on-peak window (Step 2 below has the current hours for each), and
            shifting laundry, EV charging, or the dishwasher outside that
            window is the highest-leverage change most households can make
            without spending anything.
          </li>
          <li>
            <strong>Baseline allowance and tiers.</strong> Utilities are
            required to price a &ldquo;baseline&rdquo; block of energy
            &mdash; sized to roughly 50&ndash;60% of an average
            customer&apos;s usage in the local climate zone &mdash; at the
            lowest rate, then charge more for usage above it. Baseline
            territory, heating source, and the season all move where that
            line falls.
          </li>
          <li>
            <strong>Fixed charges.</strong> California&apos;s investor-owned
            utilities also bill a flat monthly Base Services Charge that
            doesn&apos;t move with usage &mdash; currently $24.15 for most
            residential accounts. See the{" "}
            <Link className="underline" href="/blog/california-24-dollar-fixed-charge-explained">
              fixed-charge breakdown
            </Link>{" "}
            for what it covers and why it exists.
          </li>
          <li>
            <strong>Usage.</strong> What&apos;s left is the part under direct
            control &mdash; air conditioning, water heating, and any other
            high-draw equipment. Step 5 below covers finding it from the
            account&apos;s own billing data.
          </li>
        </ul>
        <p className="mt-3">
          For scale, California&apos;s statewide average electricity price
          was 27.04 cents per kWh in 2024, the second-highest of any state.
          In a rate environment like that, the first three levers matter as
          much as cutting usage.
        </p>
      </section>
      <section>
        <h2>1. Establish the real baseline</h2>
        <p>
          Gather at least two bills and, when available, a full year of usage.
          Compare kWh per day and electric charges per day so weather, billing
          period length and one-time adjustments do not distort the decision.
          Then mark the rate plan and any separate generation provider shown on
          the statement.
        </p>
      </section>
      <BillComparison utilityName="California electric" />
      <section>
        <h2>2. Compare the rates available to the account</h2>
        <p>
          Use the CPUC rate-comparison tool and the utility&apos;s own account tools.
          Compare the current plan with residential, CARE and EV options that
          actually apply at the service address. Look at when the household uses
          electricity before switching a time-of-use plan.
        </p>
        <p className="mt-3">
          <strong>On-peak hours by utility (2026):</strong>
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">On-peak hours by utility, 2026</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Utility</th>
                <th className="p-4">Plan</th>
                <th className="p-4">On-peak window</th>
                <th className="p-4">Applies</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">PG&amp;E</td>
                <td className="p-4">E-TOU-C</td>
                <td className="p-4">4&ndash;9 p.m.</td>
                <td className="p-4">Every day</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">PG&amp;E</td>
                <td className="p-4">E-TOU-D</td>
                <td className="p-4">5&ndash;8 p.m.</td>
                <td className="p-4">Weekdays only</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">SCE</td>
                <td className="p-4">4&ndash;9 p.m. TOU plan</td>
                <td className="p-4">4&ndash;9 p.m.</td>
                <td className="p-4">Summer weekdays</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">SCE</td>
                <td className="p-4">5&ndash;8 p.m. TOU plan</td>
                <td className="p-4">5&ndash;8 p.m.</td>
                <td className="p-4">Summer weekdays</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">SDG&amp;E</td>
                <td className="p-4">Standard residential TOU</td>
                <td className="p-4">4&ndash;9 p.m.</td>
                <td className="p-4">Every day, including weekends and holidays</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          Each utility runs more than one time-of-use plan, and the window can
          shift by season &mdash; confirm the current plan and window for the
          account before moving usage around it. Full rate-plan detail:{" "}
          <Link className="underline" href="/blog/pge-time-of-use-rates-2026">
            PG&amp;E&apos;s time-of-use rates
          </Link>
          ,{" "}
          <Link className="underline" href="/blog/sce-time-of-use-rates-2026">
            SCE&apos;s time-of-use rates
          </Link>
          ,{" "}
          <Link className="underline" href="/blog/sdge-time-of-use-rates-2026">
            SDG&amp;E&apos;s time-of-use rates
          </Link>
          .
        </p>
      </section>
      <section>
        <h2>3. Check CARE and FERA before buying anything</h2>
        <p>
          The CPUC says qualifying customers at the large regulated electric
          utilities receive a 30–35% CARE discount. FERA applies an 18% electric
          bill discount for qualifying households above the CARE income range.
          Income limits change, so use the current CPUC table and apply through
          the utility instead of relying on an old article or salesperson.
        </p>
        <p className="mt-3">
          Both discounts also cut the flat monthly Base Services Charge: CARE
          customers pay $6/month instead of the standard $24.15, and FERA
          customers pay $12/month &mdash; savings of about $18 and $12 a
          month respectively, on top of the percentage discount. Current
          income limits, effective June 1, 2026 through May 31, 2027:
        </p>
        <div className="overflow-x-auto rounded-xl border my-4">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">CARE and FERA income limits by household size</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Household size</th>
                <th className="p-4">CARE limit (200% of federal poverty level)</th>
                <th className="p-4">FERA limit (250% of federal poverty level)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">1&ndash;2 people</td>
                <td className="p-4">$43,280</td>
                <td className="p-4">$54,100</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">3 people</td>
                <td className="p-4">$54,640</td>
                <td className="p-4">$68,300</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">4 people</td>
                <td className="p-4">$66,000</td>
                <td className="p-4">$82,500</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">5 people</td>
                <td className="p-4">$77,360</td>
                <td className="p-4">$96,700</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">6 people</td>
                <td className="p-4">$88,720</td>
                <td className="p-4">$110,900</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Each additional person</td>
                <td className="p-4">+$11,360</td>
                <td className="p-4">+$14,200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          See the{" "}
          <Link className="underline" href="/programs/care-california">
            CARE and FERA program page
          </Link>{" "}
          (publishing alongside this page &mdash; confirm both go live
          together) for how to apply through each utility.
        </p>
      </section>
      <section>
        <h2>4. Check Medical Baseline and no-cost efficiency programs</h2>
        <p>
          Medical Baseline provides additional qualifying energy use at the
          utility&apos;s lowest residential rate for customers with specified medical
          needs. The CPUC also lists the Energy Savings Assistance Program, which
          can provide no-cost weatherization and certain efficient equipment to
          income-qualified households. Eligibility and available measures belong
          to the current utility program.
        </p>
        <p className="mt-3">
          At PG&amp;E, that additional allotment is about 500 kWh a month
          &mdash; roughly 16.7 kWh a day &mdash; on top of the standard
          baseline, granted on medical need rather than income, with a
          doctor&apos;s certification. SCE, SDG&amp;E, and LADWP run
          comparable Medical Baseline programs at the account&apos;s own
          utility; confirm the exact allotment there, since it isn&apos;t
          necessarily the same number.
        </p>
      </section>
      <section>
        <h2>5. Reduce the load the bill proves is expensive</h2>
        <p>
          Use the bill and interval data to find the hours and equipment driving
          consumption. Shift flexible loads only when the current rate plan makes
          that useful. Before paying for insulation, appliances, controls or
          other work, check the utility&apos;s current rebates and get the complete
          installed cost in writing.
        </p>
      </section>
      <section>
        <h2>6. Put solar on the same measuring stick</h2>
        <p>
          A solar quote should start from the same full-year usage record. Ask for
          monthly production, shading and loss assumptions, projected onsite use,
          grid imports, export credits and charges that remain after installation.
          Compare the cash price and complete contract terms. If a quote cannot
          show those numbers, it has not shown what happens to the bill.
        </p>
      </section>
      <section>
        <h2>Where solar fits among these four levers</h2>
        <p>
          Solar addresses the usage lever most directly. It doesn&apos;t touch
          the fixed charge, and under net billing it interacts with &mdash;
          rather than replaces &mdash; the rate plan and baseline structure
          above: a system sized to the account&apos;s own usage history can
          reduce what&apos;s billed at retail rates, but the Base Services
          Charge still applies, baseline and tier boundaries still apply, and
          the time-of-use window still determines what solar production is
          worth at each hour. None of that argues for or against it.
          It&apos;s the same measuring stick as everywhere else on this page:
          pull the usage history, compare it to what a proposal claims, and
          treat a solar quote as one more rate scenario to check against the
          current bill.
        </p>
      </section>
      <section>
        <h2>Check the bill for the California Climate Credit</h2>
        <p>
          This one isn&apos;t an action &mdash; it&apos;s a line item to
          expect. Funded by the state&apos;s Cap-and-Invest program, the
          credit is applied automatically to PG&amp;E, SCE, and SDG&amp;E
          residential electric accounts (and their CCA customers), with no
          enrollment, no income test, and no effect from having solar or net
          metering. LADWP and SMUD customers don&apos;t get it &mdash; the
          credit only applies to utilities the CPUC regulates, and those two
          are municipal.
        </p>
        <p className="mt-3">
          For 2026, PG&amp;E and SCE residential electric customers are
          getting $36.18 and $36.00, and SDG&amp;E customers $49.36 &mdash;
          each split across two credits, posted in August and September
          2026. That&apos;s a change from the April/October pattern of past
          years: the CPUC moved the schedule to land during the
          higher-usage summer months instead. It shows up as its own line
          on the statement, separate from usage charges, so it won&apos;t
          turn up in a rate comparison. Full amounts and dates:{" "}
          <Link className="underline" href="/programs/climate-credit-california">
            California Climate Credit page
          </Link>{" "}
          (publishing alongside this page &mdash; confirm both go live
          together).
        </p>
      </section>
      <UtilityGuideLinks />
      <RelatedGuides
        heading="If the load itself is the problem"
        links={[
          { href: "/solar-problems/running-ac-with-solar-california", label: "What all-day cooling does, with or without solar" },
          { href: "/solar-problems/do-i-still-get-a-utility-bill-with-solar", label: "What stays on the bill after solar" },
          { href: "/blog/is-community-solar-worth-it", label: "When a shared project fits better than a rooftop" },
          { href: "/solar-problems/true-up-bill-california-explained", label: "The annual true-up bill, explained" },
        ]}
      />
    </>
  );
}

export function CaliforniaBillDecisionPage({ kind }: { kind: CaliforniaBillGuideKind }) {
  const guide = guides[kind];
  return (
    <DecisionPage
      title={guide.title}
      intro={guide.intro}
      path={guide.path}
      sources={kind === "lower" ? [...sources, ...lowerOnlySources] : [...sources, ...highBillAdditionalSources]}
      topic={kind === "high" ? "California high electric bill" : "Lower a California electric bill"}
      sourceCheckedDate={
        kind === "lower"
          ? "2026-09-22"
          : "sourceCheckedDate" in guide && guide.sourceCheckedDate
            ? guide.sourceCheckedDate
            : "2026-09-12"
      }
      primaryResourceHref={kind === "high" ? "/blog/how-to-lower-electric-bill-california" : "/blog/why-is-my-california-electric-bill-so-high"}
      primaryResourceLabel={kind === "high" ? "Steps to lower the bill" : "Diagnose a high bill"}
      comparisonHref="/blog/net-billing-vs-net-metering-california"
      comparisonLabel="How solar billing works"
    >
      {kind === "high" ? <HighBillContent /> : <LowerBillContent />}
    </DecisionPage>
  );
}
