import type { Metadata } from "next";
import Link from "next/link";
import { DecisionPage, type Source } from "./DecisionPage";

const path = "/blog/what-happens-if-stop-paying-solar-lease-california";
const title = "What Happens If You Stop Paying a Solar Lease? Read the Default Section";
const intro = "Stopping payment usually does not cancel a solar lease. The agreement controls notices, late charges, default, acceleration, collection, equipment and early termination. Pull the exact documents before changing a payment.";

const sources: Source[] = [
  { label: "California CSLB: Solar Smart", url: "https://cslb.ca.gov/Consumers/Solar_Smart/" },
  { label: "CPUC: California Solar Consumer Protection Guide", url: "https://www.cpuc.ca.gov/solarguide/" },
  { label: "FTC: Debt Collection FAQs", url: "https://consumer.ftc.gov/articles/debt-collection-faqs" },
  { label: "CFPB: dispute a credit-report error", url: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/" },
  { label: "California CSLB: solar complaint form", url: "https://web.cslb.ca.gov/OnlineServices/SolarComplaint/SolarComplaintFormProcess.aspx" },
  { label: "California DFPI: submit a complaint", url: "https://dfpi.ca.gov/submit-a-complaint/" },
];

export const stopPayingSolarLeaseMetadata: Metadata = {
  title,
  description: intro,
  alternates: { canonical: path },
  openGraph: {
    title,
    description: intro,
    type: "article",
    url: `https://ratereliefca.com${path}`,
    modifiedTime: "2026-09-12T00:00:00Z",
  },
};

export function StopPayingSolarLeaseGuide() {
  return (
    <DecisionPage
      title={title}
      intro={intro}
      path={path}
      sources={sources}
      sourceCheckedDate="2026-09-12"
      topic="California solar lease payment and contract review"
      primaryResourceHref="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
      primaryResourceLabel="Identify the financing structure"
      comparisonHref="/blog/what-happens-to-solar-lease-when-i-sell-california"
      comparisonLabel="Lease and home-sale checklist"
    >
      <section className="rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h2>Do not assume nonpayment ends the agreement</h2>
        <p>
          A solar lease is a long-term contract for equipment owned by another company. Missing a payment and ending the lease are different events. California&apos;s CSLB warns consumers to look for contract language that permits a lien or makes all remaining payments due after a missed payment or other default. Those remedies are not identical in every agreement. Your signed lease, amendments and servicing notices are the starting point.
        </p>
      </section>

      <section>
        <h2>Find the six clauses that control the next step</h2>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100"><tr><th className="p-4">Clause</th><th className="p-4">What to record</th></tr></thead>
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
