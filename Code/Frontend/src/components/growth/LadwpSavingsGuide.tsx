import Link from "next/link";
import { DecisionPage } from "./DecisionPage";
import { SolarCalculator } from "./SolarCalculator";

export const ladwpSavingsTitle =
  "Solar Savings in Los Angeles: Check Your LADWP Bill and Quote";
export const ladwpSavingsDescription =
  "Compare your own electricity bill, solar cash price and remaining LADWP charges. Separate battery costs and financing before deciding whether a proposal works.";

export function LadwpSavingsGuide() {
  return (
    <DecisionPage
      title={ladwpSavingsTitle}
      intro="The useful number is the difference between your current electricity cost and the full cost after solar. Start with your own bill and a written proposal. Leave unknown amounts blank."
      path="/solar-savings/los-angeles"
      utility="ladwp"
      topic="Los Angeles LADWP solar savings comparison"
      sourceCheckedDate="2026-09-11"
      sources={[
        {
          label:
            "LADWP: current residential consumption rates and separate charges",
          url: "https://www.ladwp.com/account/customer-service/electric-rates/residential-rates",
        },
        {
          label: "LADWP: standard tiers and time-of-use schedules",
          url: "https://www.ladwp.com/account/understanding-your-rates/residential-electric-rates",
        },
        {
          label: "LADWP: net-metering terms and credits",
          url: "https://www.ladwp.com/account/customer-service/electric-rates/ev-nem-reo-rates",
        },
      ]}
    >
      <h2>Confirm which utility serves the property</h2>
      <p>
        This guide addresses LADWP billing. Check the provider printed on your
        statement; a Los Angeles County address alone does not identify the
        tariff. Use the calculator&apos;s utility selector if your bill names
        another provider.
      </p>
      <p>
        LADWP offers standard R-1A tiers and R-1B time-of-use pricing. Its
        net-metering terms use the applicable account schedule. Ask the bidder
        to identify that schedule and show the remaining utility charges after
        solar. A generic California export-rate assumption is not enough.
      </p>

      <h2>Bring the same inputs to every proposal</h2>
      <ul>
        <li>
          Twelve months of electricity charges and kWh, with water, sewer, trash
          and old balances separated.
        </li>
        <li>
          Solar-only cash price, system size and annual production estimate for
          the actual roof.
        </li>
        <li>
          Battery price and its intended backup or billing role, quoted
          separately.
        </li>
        <li>
          Expected utility charges after solar, including charges the proposal
          says will remain.
        </li>
        <li>
          Any loan, lease or PPA payment, escalation, transfer terms and
          responsibility for equipment service.
        </li>
      </ul>
      <p>
        Keep each proposal on the same usage baseline. A low first-year payment
        can hide a different system size, omitted roof work or a longer
        obligation.
      </p>

      <SolarCalculator utility="ladwp" />

      <h2>Read the result as a comparison</h2>
      <p>
        The tool uses the amounts you enter. It does not establish your
        roof&apos;s production, eligibility for an incentive or a guaranteed
        saving. Get missing figures from the written quote and confirm billing
        assumptions with LADWP before treating a result as a decision.
      </p>
      <p>
        For financing or a lease/PPA, compare the contract&apos;s full payments
        and the remaining utility bill together. A cash-price comparison by
        itself does not include those obligations. Ask for solar-only and
        battery alternatives if you want to see what storage changes.
      </p>

      <h2>Check the bill before changing the equipment</h2>
      <p>
        If a recent bill jumped, start with the{" "}
        <Link href="/blog/why-is-my-ladwp-bill-so-high">
          LADWP usage, rate and assistance checklist
        </Link>
        . If you are choosing between bidders, use the{" "}
        <Link href="/solar-companies/los-angeles">
          Los Angeles solar company comparison
        </Link>{" "}
        for scope and contractor questions.
      </p>
      <p>
        California Rate Relief is a private referral service. The optional
        inquiry below requests help with a solar comparison; it is not an LADWP
        assistance application or a promise of savings.
      </p>
    </DecisionPage>
  );
}
