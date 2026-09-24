// 2026-09-23 new page (topical-authority wave, agent costfin). CREATE_DEDICATED:
// "prepaid lease solar" impressions were landing on /blog/prepaid-ppa-california-2026,
// which is about a different contract. Every figure below was fetched from its
// primary source on 2026-09-23; installer marketing pages are not used.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/prepaid-lease-solar';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const BOE_FAQ =
  'https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm';
const LBNL_TPO = 'https://www.osti.gov/servlets/purl/1342946';

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (overview and questions to ask)', url: CPUC_GUIDE },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion FAQs', url: BOE_FAQ },
  {
    label:
      'Berkeley Lab: Leasing Into the Sun, California home sales with third-party-owned and prepaid solar (LBNL-1007003, January 2017)',
    url: LBNL_TPO,
  },
];

const metaTitle = 'Prepaid Solar Lease in California: What You Pay and Own';
const metaDescription =
  'A prepaid solar lease swaps monthly payments for one upfront payment. The provider still owns the panels. Costs, sale, buyout and end-of-term checks.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: URL,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is a prepaid solar lease?',
    answer:
      'It is a solar lease where you pay some or all of the lease payments upfront instead of monthly. The solar provider still owns the system on your roof and, under a lease, is responsible for monitoring, maintenance and repairs. You are paying for the use of the equipment for the contract term, not buying it.',
  },
  {
    question: 'Is a prepaid lease the same as buying the panels?',
    answer:
      'No. You may pay a similar amount upfront, but the provider keeps ownership. That changes who maintains the system, what has to happen when you sell the home, and what you are left with when the term ends. Compare the prepaid price with a cash price for the same system before choosing.',
  },
  {
    question: 'Do I get a tax credit for a prepaid solar lease?',
    answer:
      'No. The homeowner credit was for costs of property you bought, and the IRS says the Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025. The provider may have its own business tax position; that is not a credit you claim.',
  },
  {
    question: 'Does a prepaid lease raise my property taxes?',
    answer:
      'Not under the current exclusion. The Board of Equalization says a qualifying system is excluded whether it is leased or owned, and no form or filing is required. The statute is scheduled to sunset on January 1, 2027, so check the rule in force when the system is completed.',
  },
  {
    question: 'What happens to a prepaid lease when I sell my house?',
    answer:
      'The CPUC says that if you sell before a lease or PPA is over, you will have to pay the provider the remaining value or transfer the contract to the buyer. With a fully prepaid lease there may be little left to pay, but the transfer paperwork, the buyer’s approval and any fees still come from the contract. Ask for those terms in writing before you prepay.',
  },
];

export default function PrepaidLeaseSolarPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Prepaid solar lease"
      breadcrumbParent={{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Prepaid solar lease in California: what you pay, and what you still don't own"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar financing"
        title="Prepaid solar lease in California: what you pay, and what you still don't own"
        crumbs={[{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }]}
        crumbLabel="Prepaid solar lease"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="financing"
        path={PATH}
        intro={
          <>
            <p>
              A prepaid solar lease is a lease where you pay some or all of the payments
              upfront instead of every month. The solar provider still owns the panels. The
              CPUC lists paying more upfront to cut monthly payments as one way leases can be
              arranged. You are paying for the use of the equipment for the term, not for the
              equipment itself.
            </p>
            <p className="mt-3">
              If you are still choosing between buying, a loan, a lease and a PPA, start with{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                the full comparison of the four ways to pay for solar
              </Link>
              . This page covers the prepaid version of a lease.
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Who owns the system',
            value: 'The solar provider',
            note: 'Under a lease, the provider owns the system on your property.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'Typical lease term',
            value: '20 to 25 years',
            note: '“A typical lease contract period is 20-25 years.”',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'Homeowner federal credit',
            value: 'None',
            note: 'Not available for property placed in service after December 31, 2025.',
            source: { publisher: 'IRS', date: '2026-09-23', url: IRS_25D },
          },
          {
            label: 'Resale premium found',
            value: 'Not significant',
            note: 'California sales, 2011 to 2013, including 17 prepaid or near-prepaid systems.',
            source: { publisher: 'Berkeley Lab', date: '2026-09-23', url: LBNL_TPO },
          },
        ]}
        inquiry={<SolarInquiry variant="decision" topic="Prepaid solar lease in California" market="CA" />}
      >
        <section>
          <h2>How a prepaid lease differs from a monthly lease</h2>
          <p>
            The CPUC describes a standard lease this way: &ldquo;you will make scheduled
            monthly payments in exchange for all the electricity the system produces,&rdquo;
            and &ldquo;the solar provider owns the system on your property.&rdquo; A prepaid
            lease moves some or all of those scheduled payments to the start. The CPUC&rsquo;s
            question list for lease and PPA shoppers includes: &ldquo;Is there an option to
            make a down payment to reduce my monthly payments (for a lease) or kilowatt-hour
            rate (for a PPA)?&rdquo; (
            <a className={link} href={CPUC_GUIDE}>
              CPUC, California Solar Consumer Protection Guide
            </a>
            , checked September 23, 2026.)
          </p>
          <p className="mt-3">
            What does not change is who owns the system. That one fact decides most of what
            follows: the provider maintains it, the provider&rsquo;s contract controls what
            happens at a sale, and the equipment is not yours at the end unless the contract
            says you can buy it.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Monthly lease, prepaid lease, prepaid PPA and cash purchase
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">Monthly lease</th>
                  <th className="p-3">Prepaid lease</th>
                  <th className="p-3">Prepaid PPA</th>
                  <th className="p-3">Cash purchase</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Who owns it', 'Provider', 'Provider', 'Provider', 'You'],
                  ['What you pay for', 'Scheduled payments for the system’s output', 'The same payments, moved upfront in whole or part', 'Expected electricity, paid ahead at a per-kWh price', 'The equipment and installation'],
                  ['Monthly solar bill', 'Yes', 'None if fully prepaid; smaller if partly', 'None if fully prepaid; smaller if partly', 'None'],
                  ['Repairs', 'Provider', 'Provider', 'Provider', 'You'],
                  ['At a home sale', 'Transfer or pay the remaining value', 'Transfer; little or nothing left to pay if fully prepaid', 'Transfer; same as a prepaid lease', 'Transfers with the house'],
                ].map((row) => (
                  <tr key={row[0]} className="border-t">
                    <th scope="row" className="p-3 align-top">{row[0]}</th>
                    {row.slice(1).map((cell, i) => (
                      <td key={i} className="p-3 align-top">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="border-t bg-muted p-3 text-xs text-muted-foreground">
              Ownership, repair responsibility and the sale rule are from the CPUC guide. The
              prepaid columns describe the structure only; your contract sets the actual terms.
            </p>
          </div>
        </section>

        <section>
          <h2>How much does a prepaid solar lease cost?</h2>
          <p>
            No public agency publishes lease prices, so there is no honest statewide number to
            give you. What you can do is make the offer answer the CPUC&rsquo;s first two
            questions: &ldquo;What is the total cost of the solar system or solar energy over
            the entire course of the contract?&rdquo; and &ldquo;How much will I pay up front,
            how much over time, and for how long?&rdquo;
          </p>
          <p className="mt-3">Then run three comparisons on the same system size and the same roof layout:</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <strong>Prepaid versus monthly.</strong> Add up every monthly payment the
              standard lease would charge over the term, escalator included. Compare that total
              with the prepaid price. Paying early means giving up the use of that money now.
            </li>
            <li>
              <strong>Prepaid lease versus cash.</strong> If the prepaid price is close to the
              cash price for the same system, you are paying about the same money for a system
              you will not own. The gap is what you pay for the provider handling repairs.
            </li>
            <li>
              <strong>Prepaid versus your utility bill.</strong> A prepaid lease leaves a
              smaller utility bill, not a zero one. The CPUC says savings estimates &ldquo;do not
              guarantee savings.&rdquo; Ask for the bill the proposal expects you to keep paying.
            </li>
          </ol>
          <p className="mt-3">
            What sets a standard lease payment is covered in{' '}
            <Link className={link} href="/blog/how-much-does-it-cost-to-lease-solar-panels-california">
              what a California solar lease costs
            </Link>
            . For the equipment price you would pay to buy instead, see{' '}
            <Link className={link} href="/solar-panels-california">
              California solar panel cost and sizing
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Prepaid lease or buy outright: what is actually different</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Maintenance.</strong> Under a lease, the CPUC says the &ldquo;solar
              provider is responsible for all monitoring, maintenance, and repairs.&rdquo; When
              you buy, those are yours.
            </li>
            <li>
              <strong>Federal tax credit.</strong> None either way for a system installed now.
              The IRS says the Residential Clean Energy Credit &ldquo;is not available for any
              property placed in service after December 31, 2025&rdquo; (
              <a className={link} href={IRS_25D}>
                IRS
              </a>
              , checked September 23, 2026). What California still offers is in{' '}
              <Link className={link} href="/blog/california-solar-tax-credit-2026">
                the state&rsquo;s solar incentives in 2026
              </Link>
              .
            </li>
            <li>
              <strong>Property tax.</strong> No difference under the current rule. The Board
              of Equalization says the system &ldquo;is excluded whether it is leased or
              owned&rdquo; (
              <a className={link} href={BOE_FAQ}>
                BOE FAQs
              </a>
              , checked September 23, 2026).
            </li>
            <li>
              <strong>Provider risk.</strong> The CPUC lists it as a risk: &ldquo;Solar provider
              could go out of business during the contract period.&rdquo; A monthly customer
              stops paying when service stops. A prepaid customer has already paid. Before you
              prepay, ask what happens to repairs, any production guarantee and your contract
              if the company is sold or closes.
            </li>
          </ul>
        </section>

        <section>
          <h2>Selling a home with a prepaid lease</h2>
          <p>
            The CPUC&rsquo;s rule of thumb for any lease or PPA: &ldquo;If you sell your house
            before the lease or PPA contract is over, you will have to pay the solar provider
            the remainder of the value of the lease or PPA or transfer the contract to the new
            property owner.&rdquo; With a fully prepaid lease there may be little value left to
            pay, which is the main selling point of prepaying. The transfer still runs through
            the contract, and the CPUC suggests asking, &ldquo;Are there fees for transferring
            the lease, PPA, or PACE financing to a new homeowner?&rdquo;
          </p>
          <p className="mt-3">
            Does prepaying help the sale price? The only California study found no clear
            answer. Berkeley Lab looked at 20,106 California home sales from 2011 to 2013,
            including 113 with third-party-owned systems, 17 of them prepaid or more than 75%
            prepaid. It &ldquo;fails to uncover statistically significant premiums for TPO PV
            homes nor for those with pre-paid leases as compared to non-PV homes.&rdquo; It
            did find a larger premium for prepaid systems than for non-prepaid ones, but that
            difference was not statistically significant (
            <a className={link} href={LBNL_TPO}>
              LBNL-1007003
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            The step-by-step for a sale is in{' '}
            <Link className={link} href="/blog/what-happens-to-solar-lease-when-i-sell-california">
              selling a California home with a lease or PPA
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What happens at the end of a prepaid lease</h2>
          <p>
            Prepaying does not change what the contract says about year 20 or 25. Ask, in
            writing, before you pay:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Can you renew, buy the system, or have it removed at the end of the term, and at what price?</li>
            <li>Who pays for removal and for repairing the roof where the mounts were?</li>
            <li>If you want out early, will you owe a balloon payment or early termination fee? The CPUC asks this question directly.</li>
            <li>Is part of the prepayment refunded if the system is removed, damaged or shut off for a long period?</li>
            <li>Does the provider offer a minimum energy guarantee, which the CPUC calls &ldquo;common with leases and power purchase agreements&rdquo;, and does it still apply once you have prepaid?</li>
          </ul>
          <p className="mt-3">
            If you are thinking about leaving a lease you already have, read{' '}
            <Link className={link} href="/blog/what-happens-if-stop-paying-solar-lease-california">
              what happens if you stop paying a solar lease
            </Link>{' '}
            before you act.
          </p>
        </section>

        <section>
          <h2>Prepaid lease or prepaid PPA?</h2>
          <p>
            Both put the payments upfront and both leave the provider owning the system. The
            difference is what the prepayment buys. A lease prepays scheduled payments; a PPA
            prepays electricity at a per-kWh price, which the CPUC describes as paying
            &ldquo;for all the power the solar system generates (at a fixed per-kilowatt-hour
            rate).&rdquo; Ask a prepaid PPA provider what happens if the system produces more
            or less than the amount you prepaid for. The checks for that contract are in{' '}
            <Link className={link} href="/blog/prepaid-ppa-california-2026">
              the prepaid PPA checklist
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. A
            referral request does not set a lease price, approve a contract or promise savings.
            Get the complete lease, its payment schedule and the state disclosure document from
            any provider before you prepay.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
