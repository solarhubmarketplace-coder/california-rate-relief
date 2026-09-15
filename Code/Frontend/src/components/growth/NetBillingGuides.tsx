import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, QuoteChecklist, type Source } from "./DecisionPage";

const cpucNem: Source = {
  label: "CPUC: Net Energy Metering and Net Billing",
  url: "https://www.cpuc.ca.gov/NEM/",
};
const cpucConsumerGuide: Source = {
  label: "CPUC: California Solar Consumer Protection Guide",
  url: "https://www.cpuc.ca.gov/solarguide/",
};
const sources = [cpucNem, cpucConsumerGuide];

const guides = {
  comparison: {
    path: "/blog/nem-2-vs-nem-3-california",
    title: "NEM 2.0 vs. NEM 3.0 in California: what changed",
    intro:
      "NEM 3.0 is the common name for California's Net Billing Tariff. The rule that applies to a specific account depends on its utility, interconnection history and current tariff—not a sales claim.",
    metaTitle: "NEM 2.0 vs NEM 3.0 in California: What Changed",
    metaDescription:
      "NEM 3.0, the Net Billing Tariff, applies to new interconnection applicants in the large IOU territories from April 15, 2023. Check your tariff.",
  },
  timeline: {
    path: "/blog/nem-3-california-timeline",
    title: "NEM 3.0 California timeline: confirmed dates and account checks",
    intro:
      "The current tariff can affect a solar proposal, but an old deadline or a generic export-rate claim does not tell you what applies to your account. Start with the official timeline and the current bill.",
  },
  decision: {
    path: "/blog/nem-3-california-still-worth-it",
    title: "Is solar still worth it under California Net Billing? Compare the written numbers",
    intro:
      "Net Billing changes how exports appear on a bill. Whether a proposal works for a home depends on its actual usage, tariff, production model, contract price and remaining utility charges.",
  },
  billing: {
    path: "/blog/net-billing-vs-net-metering-california",
    title: "Net Billing vs. Net Metering in California: check your tariff",
    intro:
      "California's Net Billing Tariff and the older Net Energy Metering tariffs credit exports differently. The current bill, utility territory and interconnection record determine what applies to a specific account.",
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
      modifiedTime: "2026-09-12T00:00:00Z",
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
    </>
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
    </>
  );
}

export function NetBillingGuide({ kind }: { kind: NetBillingGuideKind }) {
  const guide = guides[kind];
  const content = kind === "comparison" ? <ComparisonContent /> : kind === "timeline" ? <TimelineContent /> : kind === "decision" ? <DecisionContent /> : <BillingContent />;
  return (
    <DecisionPage
      title={guide.title}
      intro={guide.intro}
      path={guide.path}
      sources={sources}
      sourceCheckedDate="2026-09-12"
    >
      {content}
    </DecisionPage>
  );
}
