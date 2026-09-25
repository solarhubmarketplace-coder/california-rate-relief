import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";
import { CRR_SOCIAL_CARD } from "@/lib/crr-social";

const path = "/blog/what-happens-if-stop-paying-solar-lease-california";
const title = "What Happens If You Stop Paying a Solar Lease? Read the Default Section";
const intro = "Stopping payment usually does not cancel a solar lease. The agreement controls notices, late charges, default, acceleration, collection, equipment and early termination. Pull the exact documents before changing a payment.";


// The two consts above are visible copy: `title` heads the page and `intro` is the
// opening paragraph a reader sees. The search snippet has a different job and a
// hard length budget, so it is declared separately here. Reusing `intro` as the
// meta description is what caused a draft pass to overwrite a live opening
// paragraph on the SDG&E guide.
const metaTitle = "What Happens If You Stop Paying a Solar Lease?";
const metaDescription =
  "What Sunrun, Tesla and other providers say about default, UCC-1 filings and repossession — plus your transfer and buyout options in California.";

const sources: Source[] = [
  { label: "California CSLB: Solar Smart", url: "https://cslb.ca.gov/Consumers/Solar_Smart/" },
  { label: "CPUC: California Solar Consumer Protection Guide", url: "https://www.cpuc.ca.gov/solarguide/" },
  { label: "FTC: Debt Collection FAQs", url: "https://consumer.ftc.gov/articles/debt-collection-faqs" },
  { label: "CFPB: dispute a credit-report error", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/" },
  { label: "California CSLB: solar complaint form", url: "https://web.cslb.ca.gov/OnlineServices/SolarComplaint/SolarComplaintFormProcess.aspx" },
  { label: "California DFPI: submit a complaint", url: "https://dfpi.ca.gov/submit-a-complaint/" },
  { label: "Tesla: Property & Title (UCC-1 filing)", url: "https://www.tesla.com/support/energy/solar-panels/documents/property-title" },
  { label: "Tesla: Removal & Reinstallation", url: "https://www.tesla.com/support/energy/solar-panels/after-installation/removal-reinstallation" },
  { label: "Tesla: Solar lease buyout guide", url: "https://www.tesla.com/learn/tesla-solar-lease-buyout-guide" },
  { label: "Sunrun: Terms of Service", url: "https://www.sunrun.com/sunrun-terms-of-service" },
  { label: "Sunrun: Moving Made Easy", url: "https://www.sunrun.com/moving-made-easy" },
];

export const stopPayingSolarLeaseMetadata: Metadata = {
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

export function StopPayingSolarLeaseGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      sourceCheckedDate="2026-09-22"
      topic="California solar lease payment and contract review"
      primaryResourceHref="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
      primaryResourceLabel="Identify the financing structure"
      comparisonHref="/blog/what-happens-to-solar-lease-when-i-sell-california"
      comparisonLabel="Lease and home-sale checklist"
    >
      <section className="rounded-xl border border-status-warning/30 bg-status-warning/10 p-5">
        <h2>Do not assume nonpayment ends the agreement</h2>
        <p>
          A solar lease is a long-term contract for equipment owned by another company. Missing a payment and ending the lease are different events. California&apos;s CSLB warns consumers to look for contract language that permits a lien or makes all remaining payments due after a missed payment or other default. Those remedies are not identical in every agreement. Your signed lease, amendments and servicing notices are the starting point.
        </p>
      </section>

      <section>
        <h2>Find the six clauses that control the next step</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted"><tr><th className="p-4">Clause</th><th className="p-4">What to record</th></tr></thead>
            <tbody>
              {[
                ["Payment", "Due date, grace period, late charge, returned-payment charge and payment method."],
                ["Default", "What counts as default and whether written notice is required."],
                ["Cure", "How much time the agreement gives you to fix a missed payment or disputed amount."],
                ["Remedies", "Collection, acceleration, equipment access or removal, liens, suspension and legal costs."],
                ["Dispute", "Required address, notice method, informal resolution, arbitration or court terms."],
                ["Early termination", "Buyout formula, termination charge and any restrictions on ending the lease."],
              ].map(([item, detail]) => (
                <tr className="border-t" key={item}><th className="p-4 align-top" scope="row">{item}</th><td className="p-4">{detail}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Contact the current servicer before the due date when possible</h2>
        <p>
          Use the phone number and notice address on the latest statement, not an old salesperson&apos;s contact. Ask for the current amount due, any late charge, the date default begins, available short-term arrangements and whether an arrangement changes credit reporting or other remedies. Get the answer in writing. A phone promise that conflicts with the agreement is hard to prove later.
        </p>
      </section>

      <section>
        <h2>Separate inability to pay from a contract dispute</h2>
        <p>
          If the problem is affordability, ask the servicer for its documented options before missing a payment. If the amount, signature, system performance or sales representation is disputed, send a dated written notice through the contract&apos;s required channel. Identify the exact charge or promise, attach the supporting pages and state the resolution requested. Keep proof of delivery and every response.
        </p>
        <p className="mt-3">
          Continuing to pay the electric utility is a separate obligation. Solar may reduce part of a utility bill, but a lease payment does not replace every utility charge.
        </p>
      </section>

      <section>
        <h2>If a debt collector contacts you</h2>
        <p>
          The FTC explains that a third-party collector generally must provide validation information, including the creditor and amount, and that a timely written dispute can require collection of the disputed debt to pause until verification is sent. These federal collection rules do not decide whether the original solar charge is valid. Save the notice, check the deadline and respond rather than ignoring it.
        </p>
      </section>

      <section>
        <h2>Check the credit record for accuracy</h2>
        <p>
          If a missed payment or collection appears on a credit report and the information is wrong, the CFPB directs consumers to dispute it with the credit-reporting company. Include the account, specific error and documents that support the correction. A valid dispute process does not erase accurate negative information.
        </p>
      </section>

      <section>
        <h2>Use the complaint channel that matches the problem</h2>
        <p>
          California&apos;s CSLB accepts solar complaints involving cash, lease, PPA and financed projects, including workmanship, abandonment and misrepresentation issues. DFPI accepts complaints about financial institutions and financial service providers within its jurisdiction. A complaint is a record and review request; it is not automatic contract cancellation. For a threatened lawsuit, lien, acceleration or large disputed balance, take the complete file to a qualified California consumer attorney promptly.
        </p>
      </section>

      <section>
        <h2>What Sunrun and Tesla&apos;s own sites say about default — and what they don&apos;t</h2>
        <p>
          Your signed agreement controls, not a general rule. What Sunrun and Tesla publish on their own websites about missed payments is still useful to know: <strong>neither company publishes its default, late-fee, or repossession terms publicly</strong> (sunrun.com and tesla.com, checked September 22, 2026).
        </p>
        <p className="mt-3">
          These pages contain no default, late-payment, or repossession language (checked September 22, 2026): Tesla&apos;s billing page, its Removal &amp; Reinstallation page, its Solar Service and Warranty page, Sunrun&apos;s &ldquo;Our Guarantee&rdquo; page, and Sunrun&apos;s monthly-lease plan page. Sunrun&apos;s own website Terms of Service makes the separation explicit: it states that if you have &ldquo;entered into a Solar Power Purchase Agreement or Lease Agreement with Sunrun,&rdquo; that is a distinct document from the site terms you&apos;re reading (sunrun.com, accessed 2026-09-22). In other words, the default, cure, and remedies language the six-clause table above tells you to pull is real, but it lives only in the contract you signed — not on either company&apos;s public site. Request your specific clause language in writing, exactly as the &ldquo;Contact the current servicer&rdquo; section above already recommends.
        </p>
      </section>

      <section>
        <h2>Repossession, removal, and the UCC-1 filing</h2>
        <p>
          Tesla&apos;s public Removal &amp; Reinstallation page documents exactly three removal scenarios — roof work, a home remodel, and relocation — all initiated by the customer, and it notes that during a voluntary removal &ldquo;your energy contract remains active, so you are still responsible for any monthly payments during this time&rdquo; (tesla.com, accessed 2026-09-22). It does not describe an involuntary removal or repossession process for nonpayment. That gap doesn&apos;t mean it can&apos;t happen; it means the procedure, if one exists, is in the private agreement&apos;s default and remedies clauses, not on either company&apos;s support site.
        </p>
        <p className="mt-3">
          What both companies do state publicly is narrower and more mechanical: the UCC-1 filing itself. Tesla&apos;s Property &amp; Title page says plainly, &ldquo;This UCC-1 filing is not a lien — this is filed on the solar system itself and not the home&rdquo; (tesla.com, accessed 2026-09-22). That matches what our own UCC-1 explainer documents in more depth — the filing secures the company&apos;s interest in the equipment, not the house, and foreclosure is a separate legal remedy under mortgage law that a UCC-1 alone doesn&apos;t trigger. For the full mechanics of what a UCC-1 fixture filing means, how it shows up on title, and how it gets released, see our{" "}
          <Link className="underline" href="/solar-problems/ucc-1-lien-solar-california">
            UCC-1 solar lien explainer
          </Link>
          .
        </p>
        <p className="mt-3">
          Credit reporting: see the &ldquo;Check the credit record for accuracy&rdquo; section above. Neither provider&apos;s public pages add anything to it (sunrun.com and tesla.com, checked September 22, 2026).
        </p>
      </section>

      <section>
        <h2>Options besides letting it go to default</h2>
        <p>Two alternatives are documented on the providers&apos; own sites, and one gap is worth naming plainly.</p>
        <ul className="mt-3 list-disc space-y-3 pl-5">
          <li>
            <strong>Transfer.</strong> If the issue is that you no longer want or can afford the system at this address, both companies run a formal transfer process — moving the agreement to a new owner, typically with a soft credit check on their end. That process, and what it does to a UCC-1 filing during a sale, is covered in full on our sibling page — see{" "}
            <Link className="underline" href="/blog/what-happens-to-solar-lease-when-i-sell-california">
              what happens to a solar lease when you sell
            </Link>{" "}
            rather than repeating it here.
          </li>
          <li>
            <strong>Buyout.</strong> Tesla publishes a specific early-buyout formula: the price is &ldquo;whichever amount is lower, the estimated price from your contract or the appraised FMV,&rdquo; with a standard buyout timing of year six of the term (tesla.com, accessed 2026-09-22). Sunrun&apos;s published buyout path is prepaying the remaining balance and bundling it into a home sale price (sunrun.com, accessed 2026-09-22). Paying off the remaining obligation ends the payment relationship without a default ever being declared.
          </li>
          <li>
            <strong>Hardship programs.</strong> Neither company publishes a hardship or forbearance program on its website (checked September 22, 2026). Tesla&apos;s documented early-buyout exception applies only &ldquo;in cases where you&apos;re selling your home and relocating,&rdquo; not for financial hardship generally (tesla.com, accessed 2026-09-22). If your situation is a temporary inability to pay rather than a wish to sell or buy out, the only sourced path is the advice above: contact the servicer in writing before you miss a payment and ask directly what arrangements, if any, they offer — because none is stated in advance on either company&apos;s site.
          </li>
        </ul>
        <p className="mt-3">
          This is general information about what providers publish, not legal advice about your specific contract. If you&apos;re facing default, review your actual agreement&apos;s Default, Cure, and Remedies sections and consider talking to a consumer-rights or real-estate attorney before deciding how to proceed. If your question is really about whether the system and your rate plan still make sense for your home, California Rate Relief can walk through a no-cost bill review with you.
        </p>
      </section>

      <section>
        <h2>The practical order</h2>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Collect the lease, amendments, disclosure, statements and payment history.</li>
          <li>Mark the payment, default, cure, remedy, dispute and termination clauses.</li>
          <li>Ask the current servicer for written options and deadlines.</li>
          <li>Send any dispute with proof and keep the utility account current.</li>
          <li>Use the proper regulator or legal help if the written response does not resolve it.</li>
        </ol>
        <p className="mt-3">
          First confirm whether the document is actually a lease, PPA or loan. The consequences and exit terms differ. Use the <Link className="underline" href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">financing comparison</Link> to identify the structure before applying this checklist.
        </p>
      </section>
    </DecisionPage>
  );
}
