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

const guides = {
  high: {
    path: "/blog/why-is-my-california-electric-bill-so-high",
    title: "Why Is My California Electric Bill So High? Check the Bill Before Guessing",
    intro: "A higher California electric bill can come from more daily use, a different rate or billing period, a credit or adjustment, or a combination of them. Compare two bills on the same daily basis, then check the account with the utility.",
    metaTitle: "Why Is My California Electric Bill So High? Check First",
    metaDescription:
      "A higher bill can come from more use, a different rate or billing period, or a credit. Compare two bills on the same daily basis, then check with the utility.",
  },
  lower: {
    path: "/blog/how-to-lower-electric-bill-california",
    title: "How to Lower Your Electric Bill in California: Start With the Moves You Can Verify",
    intro: "Start with the current bill, rate plan and programs you may already qualify for. Then price efficiency or solar against the same usage history. That order keeps a sales estimate from becoming the baseline.",
    metaTitle: "How to Lower Your Electric Bill in California: 6 Steps",
    metaDescription:
      "Start with the current bill, rate plan and programs you may already qualify for before pricing efficiency or solar against the same usage history.",
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
      modifiedTime: "2026-09-12T00:00:00Z",
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
    </>
  );
}

function LowerBillContent() {
  return (
    <>
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
      <UtilityGuideLinks />
      <RelatedGuides
        heading="If the load itself is the problem"
        links={[
          { href: "/solar-problems/running-ac-with-solar-california", label: "What all-day cooling does, with or without solar" },
          { href: "/solar-problems/do-i-still-get-a-utility-bill-with-solar", label: "What stays on the bill after solar" },
          { href: "/blog/is-community-solar-worth-it", label: "When a shared project fits better than a rooftop" },
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
      sources={sources}
      topic={kind === "high" ? "California high electric bill" : "Lower a California electric bill"}
      sourceCheckedDate="2026-09-12"
      primaryResourceHref={kind === "high" ? "/blog/how-to-lower-electric-bill-california" : "/blog/why-is-my-california-electric-bill-so-high"}
      primaryResourceLabel={kind === "high" ? "Steps to lower the bill" : "Diagnose a high bill"}
      comparisonHref="/blog/net-billing-vs-net-metering-california"
      comparisonLabel="How solar billing works"
    >
      {kind === "high" ? <HighBillContent /> : <LowerBillContent />}
    </DecisionPage>
  );
}
