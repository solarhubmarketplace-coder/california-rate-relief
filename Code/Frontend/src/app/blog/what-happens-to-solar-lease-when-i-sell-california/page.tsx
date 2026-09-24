import type { Metadata } from "next";
import Link from "next/link";
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { DecisionPage, type Source } from "@/components/growth/DecisionPage";
import { HubSpokeLinks } from "@/components/growth/HubSpokeLinks";
import type { FaqJsonLdItem } from "@/components/shared/FaqJsonLd";

// 2026-09-23 Tier 2 (agent costfin): upgraded for the "sell solar rent" cluster
// and the questions Search Console shows reaching this page ("can you buy out a
// solar ppa", "selling a home with ppa solar panels", "solar panel lease
// transfer", "who is responsible for transferring the lease", "what happens at
// the end of a solar lease"). Opening now answers directly; added buyout,
// who-does-what, moving the panels, end of term, a FAQ and the financing hub
// block. Quotations re-fetched 2026-09-23 from the CPUC guide and Sunrun's
// FY2025 Form 10-K (one provider's contract terms, labeled as such).
const CPUC_GUIDE_FULL =
  "https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide";
const SUNRUN_10K =
  "https://www.sec.gov/Archives/edgar/data/1469367/000162828026012289/run-20251231.htm";
const SMUD_SSR = "https://www.smud.org/Rate-Information/Solar-and-Storage-Rate";

const faqs: FaqJsonLdItem[] = [
  {
    question: "What happens to a solar lease or PPA when you sell your house in California?",
    answer:
      "It does not end. The CPUC says that if you sell before the contract is over, you will have to pay the solar provider the remainder of the value of the lease or PPA or transfer the contract to the new owner. Some contracts also let you buy the system and sell it with the house. The contract decides which options you have and at what price.",
  },
  {
    question: "Can you buy out a solar PPA or lease?",
    answer:
      "Usually, on the contract's terms. The CPUC warns that buying out a lease or PPA can cost thousands of dollars and suggests asking whether ending early means a balloon payment or an early termination fee. Ask the provider for the payoff amount in writing before you list the home.",
  },
  {
    question: "Who is responsible for transferring a solar lease when a house is sold?",
    answer:
      "The seller, who signed the contract, starts it with the solar provider, and the buyer has to apply and be accepted. Sunrun, for example, says in its 2025 annual report that a customer can assign the agreement to a new homeowner who meets its credit requirements and agrees to its terms. Agents and escrow coordinate the timing, but the provider approves the transfer.",
  },
  {
    question: "Can I take leased solar panels to my new house?",
    answer:
      "Not on your own. With a lease or PPA the solar provider owns the system on your property, so moving it is the provider's decision and the contract's terms. Ask whether the contract allows relocation and at what cost; usually the choice at a sale is transfer or payoff.",
  },
  {
    question: "What happens at the end of a solar lease?",
    answer:
      "Whatever the contract's end-of-term section says. One provider's filing gives the common menu: renew, buy the system at fair market value, or have it removed. Ask who restores the roof after removal and whether renewal pricing is set in the contract.",
  },
];

const sources: Source[] = [
  {
    label: "CPUC: California Solar Consumer Protection Guide",
    url: "https://www.cpuc.ca.gov/solarguide/",
  },
  {
    label: "CPUC: Consumer Protection Guide, leases and PPAs in detail (sale, buyout, escalators)",
    url: CPUC_GUIDE_FULL,
  },
  {
    label: "Sunrun Inc.: Form 10-K for fiscal year 2025, filed February 26, 2026 (home-sale and end-of-term terms)",
    url: SUNRUN_10K,
  },
  {
    label: "SMUD: Solar and Storage Rate (what a buyer of a SMUD solar home is billed on)",
    url: SMUD_SSR,
  },
  {
    label: "CSLB: Solar requirements and disclosure information",
    url: "https://www.cslb.ca.gov/Consumers/Solar_Requirements.aspx",
  },
  {
    label: "CSLB: Solar Smart consumer guide",
    url: "https://www.cslb.ca.gov/Consumers/Solar_Smart/",
  },
];

export const metadata: Metadata = {
  title: "Selling a CA Home With Solar Lease or PPA: Buyout Guide",
  description:
    "Selling a home with a solar lease or PPA? See how transfer, buyout and end-of-term options work before you list.",
  alternates: {
    canonical: "/blog/what-happens-to-solar-lease-when-i-sell-california",
  },
  openGraph: {
    title: "Selling a CA Home With Solar Lease or PPA: Buyout Guide",
    description:
      "Selling a home with a solar lease or PPA? See how transfer, buyout and end-of-term options work before you list.",
    type: "article",
    url: "https://ratereliefca.com/blog/what-happens-to-solar-lease-when-i-sell-california",
    modifiedTime: "2026-09-23T00:00:00Z",
  },
};

export default function SolarLeaseHomeSaleCA() {
  return (
    <DecisionPage
      title="Selling a California Home With a Solar Lease or PPA: Transfer or Buyout"
      intro="Selling a California home with a solar lease or PPA usually means one of two things: the buyer takes over the contract, or you pay off what is left of it. The CPUC puts it plainly: you will have to pay the provider the remainder of the value of the lease or PPA or transfer the contract to the new owner. Your contract decides the price and the paperwork, so read it before you list."
      path="/blog/what-happens-to-solar-lease-when-i-sell-california"
      sources={sources}
      sourceCheckedDate="2026-09-23"
      contentModifiedDate="2026-09-23"
      topic="Solar lease or PPA home-sale review"
      faqs={faqs}
      breadcrumbs={[{ label: "Leases, PPAs and financing", href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california" }]}
      breadcrumbLabel="Selling a home with a solar lease"
    >
      <section>
        <h2>Your three options when you sell</h2>
        <p>
          The CPUC&apos;s consumer guide lists the usual paths for a home with a leased or PPA
          system: &ldquo;the new owner must agree to take on the lease/agreement, you continue
          making payments, or you buy out the lease/agreement, which could be thousands of
          dollars&rdquo; (
          <a className="underline" href={CPUC_GUIDE_FULL}>
            CPUC
          </a>
          , checked September 23, 2026). In practice that means:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>Transfer the contract to the buyer.</strong> The buyer applies to the provider
            and takes over the remaining payments. The provider decides whether the buyer qualifies.
          </li>
          <li>
            <strong>Pay off or buy out the contract.</strong> You pay what the contract says is
            left. Some contracts let the seller buy the system so it sells with the house; Sunrun, for
            example, says a customer who sells &ldquo;has the right to purchase the system or assign
            the Customer Agreement to the new homeowner.&rdquo;
          </li>
          <li>
            <strong>Prepay part of it to make a transfer easier.</strong> Some providers let the
            seller prepay remaining payments to lower the buyer&apos;s monthly rate. Sunrun says its
            customers may &ldquo;prepay all or a portion of the remaining payments due&rdquo; to
            &ldquo;lower or eliminate the monthly rate to be paid by the new homeowner&rdquo; (
            <a className="underline" href={SUNRUN_10K}>
              Sunrun Form 10-K, filed February 26, 2026
            </a>
            ).
          </li>
        </ul>
      </section>

      <section>
        <h2>Can you buy out a solar PPA or lease?</h2>
        <p>
          Usually, but the contract sets the price, not the law. The CPUC says that if you sell
          before the contract is over, you &ldquo;will have to pay the solar provider the remainder
          of the value of the lease or PPA,&rdquo; and that &ldquo;buying out a lease or PPA can cost
          thousands of dollars.&rdquo; Its question list for any lease or PPA includes: &ldquo;If I
          end my agreement early, will I owe a balloon payment and/or an early termination fee? If
          so, how much will I owe?&rdquo; (
          <a className="underline" href={CPUC_GUIDE_FULL}>
            CPUC
          </a>
          ).
        </p>
        <p className="mt-3">
          Ask the provider for a written payoff quote with a date on it before you list, and ask how
          it is calculated so you can check it. If you prepaid a PPA, ask whether the payoff credits
          the electricity you paid for and have not yet received; see{" "}
          <Link className="underline" href="/blog/prepaid-ppa-california-2026">
            the prepaid PPA checklist
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Who does what in a solar lease transfer</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Seller:</strong> signed the contract, so starts the transfer or payoff with the
            provider and supplies the contract, payment history and system documents.
          </li>
          <li>
            <strong>Buyer:</strong> applies to the provider and must be accepted. Sunrun, for example,
            says a customer can assign the agreement to a new homeowner who &ldquo;meets our credit
            requirements and agrees to be bound by the terms and conditions&rdquo; (
            <a className="underline" href={SUNRUN_10K}>
              Sunrun Form 10-K
            </a>
            ). Other providers set their own terms.
          </li>
          <li>
            <strong>Provider:</strong> approves or declines the buyer, quotes any transfer fee or
            payoff, and updates the contract.
          </li>
          <li>
            <strong>Agents and escrow:</strong> build the provider&apos;s timeline into the sale.
          </li>
        </ul>
        <p className="mt-3">
          The CPUC suggests asking, before you sign a lease or PPA, &ldquo;What happens if the home
          buyer doesn&apos;t want the solar system or doesn&apos;t qualify to take on my lease,
          PPA, or PACE-financed system?&rdquo; and &ldquo;Are there fees for transferring the lease,
          PPA, or PACE financing to a new homeowner?&rdquo; If you did not ask then, ask now.
        </p>
      </section>

      <section>
        <h2>Can you take the panels with you?</h2>
        <p>
          Not on your own. With a lease or PPA, the CPUC says, &ldquo;the solar provider owns the
          system on your property.&rdquo; Moving it to your next home is a question for the provider
          and your contract. If you move within a utility territory, the account side changes too:
          SMUD, for example, puts customers who move to a property with solar on its Solar and
          Storage Rate (
          <a className="underline" href={SMUD_SSR}>
            SMUD
          </a>
          ). For an owned system, what removal and reinstallation involve is in{" "}
          <Link className="underline" href="/blog/solar-panel-removal-reinstall-cost">
            solar panel removal and reinstall
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>What happens at the end of a solar lease</h2>
        <p>
          If you are not selling, the end of the term is the other exit. The contract&apos;s
          end-of-term section decides it. One provider&apos;s annual report lists the usual menu:
          after the initial term, customers can renew &ldquo;typically at a 10% discount to
          then-prevailing power prices,&rdquo; buy the system at its fair market value, or have it
          removed (
          <a className="underline" href={SUNRUN_10K}>
            Sunrun Form 10-K
          </a>
          ). Ask who repairs the roof after removal and whether renewal pricing is written into
          the contract. More on renting and its end is in{" "}
          <Link className="underline" href="/blog/rent-solar-panels-for-your-home-california">
            renting solar panels for your home
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Start with the signed agreement</h2>
        <p>
          The CPUC explains that solar leases and power-purchase agreements
          usually have long terms, and that a seller may need to transfer the
          agreement or address the remaining obligation when selling the home.
          The applicable contract and disclosures determine what is available
          in a particular sale.
        </p>
        <p className="mt-3">
          Do not assume a buyer will qualify, that a buyout is available, or
          that a transfer will happen on a particular timetable. Ask the
          provider to identify the exact contract section that answers each
          question and keep its answer in writing.
        </p>
      </section>

      <section>
        <h2>Put the home-sale terms on one sheet</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Solar lease or PPA home-sale document checklist
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-4">Question</th>
                <th className="p-4">Document or clause to review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Who owns the system?</th>
                <td className="p-4">The agreement&apos;s ownership, maintenance and insurance terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">Can the agreement transfer to a buyer?</th>
                <td className="p-4">The transfer or assignment section, including any provider review and the buyer documents it requires.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What payment obligation remains?</th>
                <td className="p-4">The payment schedule, escalator, taxes, fees and any early-termination or payoff terms.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What happens at the end of the term?</th>
                <td className="p-4">The end-of-term, renewal, purchase and removal provisions.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-4 align-top">What records exist for the transaction?</th>
                <td className="p-4">The signed agreement, disclosure documents, amendments, provider correspondence and any separate financing papers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Common paths need written confirmation</h2>
        <p>
          A provider may describe a contract transfer, a payoff or buyout, or
          another contract solution. Those labels do not establish the price,
          availability, timing, buyer requirements or final responsibility.
          Request the current written terms from the provider before making a
          listing or closing decision.
        </p>
        <p className="mt-3">
          The CPUC tells homeowners to ask what happens if they sell the home,
          whether a buyer must qualify and whether transfer or early-termination
          charges apply. Those are contract questions, not universal California
          outcomes.
        </p>
      </section>

      <section>
        <h2>Collect documents before listing</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Find the complete signed solar agreement and every amendment or change order.</li>
          <li>Request the provider&apos;s current written home-sale or transfer instructions.</li>
          <li>List the remaining payment, escalator, payoff and end-of-term terms from the contract.</li>
          <li>Give the relevant documents to the professionals handling the sale so they can address the actual agreement.</li>
          <li>Keep written confirmation of any provider instruction, quote or completed contract step.</li>
        </ol>
      </section>

      <section>
        <h2>Use the California disclosure documents</h2>
        <p>
          CSLB states that California solar disclosure materials must address
          how financing, lease or PPA terms can affect a sale of the home,
          including the consequences if an agreement is not assigned. The same
          materials and the signed agreement are the starting point for a
          property-specific review.
        </p>
        <p className="mt-3">
          CSLB&apos;s consumer guidance also advises customers to check escalator,
          sale, early-exit and performance terms before signing. For a pending
          sale, review those terms again rather than relying on a sales
          presentation or a general internet estimate.
        </p>
      </section>

      <section>
        <h2>A referral request does not resolve a home sale</h2>
        <p>
          California Rate Relief is a referral service. We are not a licensed contractor. A
          request for a review does not approve a transfer, determine a payoff, promise a
          buyer outcome or establish a sale timeline. Review written documents
          from the provider and the professionals handling the transaction
          before choosing a path.
        </p>
        <p className="mt-3">
          For the underlying payment structures, use the <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">California payment-option comparison</Link> to organize cash, loan, lease and PPA documents separately.
        </p>
      </section>
      <RelatedGuides
        heading="Documents a buyer, agent or escrow officer will ask for"
        links={[
          { href: "/solar-problems/ucc-1-lien-solar-california", label: "UCC-1 filings and how they show up in a title search" },
          { href: "/solar-problems/true-up-bill-california-explained", label: "How a mid-year true-up is settled at closing" },
          { href: "/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa", label: "Whether the agreement is a lease or a PPA" },
          { href: "/blog/what-happens-if-stop-paying-solar-lease-california", label: "What default does to the transfer" },
          // claude/ca-financing-20260918
          { href: "/blog/is-it-better-to-buy-or-lease-solar-panels-california", label: "Whether buying or leasing fits the next house" },
          { href: "/blog/how-much-does-it-cost-to-lease-solar-panels-california", label: "What determines a lease or PPA payment in the first place" },
          { href: "/blog/do-solar-panels-increase-property-taxes-california", label: "The property tax exclusion and a change in ownership" },
          { href: "/blog/does-solar-increase-home-value-california", label: "What solar does to a California home's value" },
        ]}
      />
      <HubSpokeLinks hub="financing" currentPath="/blog/what-happens-to-solar-lease-when-i-sell-california" />
    </DecisionPage>
  );
}
