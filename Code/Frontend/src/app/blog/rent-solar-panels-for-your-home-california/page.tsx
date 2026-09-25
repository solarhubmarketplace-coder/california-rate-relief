// 2026-09-23 upgrade (topical-authority wave, agent costfin). Title and URL kept:
// the Decision 14 G03 retitle of this page is held ("held: Decision 14 default"),
// and the G05 fold-in of the lease-cost page was held too at that date. GS-MERGES
// 2026-09-24 (plan 6.3) applied G05: the lease-cost page now 301s here and its
// material is in #what-sets-the-payment. Added: rent-to-own, what renting costs,
// end of term, getting out of a lease, rent vs buy. Tenant options moved to
// /blog/solar-for-renters and are summarized here. Claims the previous body
// carried without a primary source on 2026-09-23 (SOMAH tenant credit amounts,
// CCA counts, "lifetime cost is usually higher", a customer count for a
// bankrupt provider) were removed. Every figure below was fetched 2026-09-23.
// 2026-09-23 Tier 2 (agent costfin): added the roof-lease section ("lease roof
// for solar panels" reaches this page), sourced to LADWP Solar Rooftops.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/rent-solar-panels-for-your-home-california';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const MERGED = '2026-09-24'; // GS-MERGES 2026-09-24: G05 fold-in
const link = 'text-primary underline underline-offset-2';

const S = {
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  pgeSolarBill: 'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html',
  irs: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  boeFaq: 'https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm',
  lbnlTpo: 'https://www.osti.gov/servlets/purl/1342946',
  sunnova8k: 'https://www.sec.gov/Archives/edgar/data/1772695/000177269525000105/nova-20250608.htm',
  cpucCre: 'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-updates-existing-community-solar-programs',
  ladwpRooftops: 'https://www.ladwp.com/residential-services/solar-programs/solar-rooftops',
  // GS-MERGES 2026-09-24: the disclosure-document statute, carried with G05.
  bpc7169: 'https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=7169',
} as const;

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide', url: S.cpucGuide },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'PG&E: how solar customers are billed (Base Services Charge)', url: S.pgeSolarBill },
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion FAQs', url: S.boeFaq },
  { label: 'Berkeley Lab: Leasing Into the Sun (LBNL-1007003, January 2017)', url: S.lbnlTpo },
  { label: 'Sunnova Energy International: Form 8-K (Item 1.03), filed 2025-06-09', url: S.sunnova8k },
  { label: 'CPUC: community solar program update (June 11, 2026)', url: S.cpucCre },
  { label: 'California Business and Professions Code § 7169: the solar energy system disclosure document (checked September 24, 2026)', url: S.bpc7169 },
  { label: 'LADWP: Solar Rooftops (utility-owned system, annual roof payments)', url: S.ladwpRooftops },
];

const metaTitle = 'Rent Solar Panels for Your Home in California: Lease vs PPA';
const metaDescription =
  'Renting solar in California means a lease or PPA: who owns the panels, what you pay, rent-to-own and buyouts, the end of the term and getting out early.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: URL,
    publishedTime: '2026-04-23T00:00:00Z',
    modifiedTime: `${MERGED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const faqs: FaqJsonLdItem[] = [
  {
    question: 'Can you rent solar panels for your home in California?',
    answer:
      'Yes, if you own the home. Renting solar means a lease or a power purchase agreement (PPA): a provider owns the panels on your roof and you pay a scheduled monthly amount (lease) or a price for each kWh the system produces (PPA). The CPUC says a typical lease runs 20 to 25 years.',
  },
  {
    question: 'How much does it cost to rent solar panels per month?',
    answer:
      'No public agency publishes lease or PPA prices, so any typical monthly figure is a sales estimate. Your cost is the lease payment or PPA charge, plus any escalator, plus the utility bill you still pay. The state disclosure documents must show the total cost and a one-year bill savings estimate before you sign.',
  },
  {
    question: 'Is there rent-to-own solar?',
    answer:
      'Not as a separate legal product. The closest thing is a lease or PPA that lets you buy the system during or at the end of the term. Ask for the purchase price or formula in writing before you sign; the CPUC warns a buyout "could be thousands of dollars." If owning is the goal, compare a solar loan, which makes you the owner from day one.',
  },
  {
    question: 'What happens at the end of a solar lease?',
    answer:
      'Whatever the contract says. Before signing, ask whether you can renew, buy the system or have it removed at the end of the term, at what price, and who repairs the roof after removal.',
  },
  {
    question: 'How do I get out of a solar lease in California?',
    answer:
      'If you signed in the last few days, you can cancel: at least three business days, or five if you are 65 or older, per the CPUC. After that, the exits are the contract’s: transfer it to a buyer when you sell, pay the remaining value, or negotiate a buyout. Stopping payment is not an exit; read what happens first.',
  },
  {
    question: 'Is it better to buy or lease solar in California?',
    answer:
      'Neither is better for everyone. Buying gives you the system and its repairs; leasing gives you a set payment and the provider handles repairs. Neither gets the federal homeowner credit for a system installed now, and the property tax exclusion applies to both. Compare the total you would pay over the years you expect to stay.',
  },
];

export default function RentSolarPanels() {
  return (
    <PublicLayout
      breadcrumbLabel="Rent solar panels"
      breadcrumbParent={{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Rent Solar Panels for Your Home in California: Lease vs PPA"
        url={URL}
        datePublished="2026-04-23"
        dateModified={MERGED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar financing"
        title="Rent Solar Panels for Your Home in California: Lease vs PPA"
        crumbs={[{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }]}
        crumbLabel="Rent solar panels"
        updated={MERGED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="financing"
        path={PATH}
        intro={
          <>
            <p>
              Renting solar panels for your home in California means a solar lease or a power
              purchase agreement (PPA). A provider owns the panels on your roof. You pay a
              scheduled monthly amount (lease) or a price for each kWh the system produces
              (PPA). A lease typically runs 20 to 25 years, and you still get a utility bill.
              If you rent the home itself, your options are different.
            </p>
            <p className="mt-3">
              How renting compares with buying, a loan or a PPA in full is in{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                the comparison of all four ways to pay for solar
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Who owns the panels',
            value: 'The provider',
            note: 'For both a lease and a PPA.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucGuide },
          },
          {
            label: 'Typical lease term',
            value: '20 to 25 years',
            note: '“A typical lease contract period is 20-25 years.”',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucGuide },
          },
          {
            label: 'Typical escalator',
            value: '1% to 3% a year',
            note: 'Be cautious above that range.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucGuide },
          },
          {
            label: 'Time to cancel after signing',
            value: '3 business days',
            note: 'Five business days if you are 65 or older.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: S.cpucGuide },
          },
        ]}
        inquiry={<SolarInquiry topic="Renting solar panels in California" />}
      >
        <section>
          <h2>Lease or PPA: the two ways to rent solar</h2>
          <p>
            The CPUC describes both. With a lease, &ldquo;you will make scheduled monthly
            payments in exchange for all the electricity the system produces.&rdquo; With a PPA,
            &ldquo;you typically pay for all the power the solar system generates (at a fixed
            per-kilowatt-hour rate).&rdquo; In both, &ldquo;the solar provider owns the system on
            your property,&rdquo; and the &ldquo;solar provider is responsible for all
            monitoring, maintenance, and repairs&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC, California Solar Consumer Protection Guide
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            Repairs such as{' '}
            <Link className={link} href="/blog/replacement-solar-inverter-cost">
              a failed inverter
            </Link>{' '}
            are the provider&rsquo;s to fix under that rule. The practical difference: a lease
            payment stays the same in a cloudy month, while a
            PPA bill falls with output. That is why the CPUC suggests asking whether the provider
            offers &ldquo;a minimum energy guarantee (common with leases and power purchase
            agreements).&rdquo; More in{' '}
            <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california#lease-vs-ppa">
              lease versus PPA
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Is there rent-to-own solar?</h2>
          <p>
            Not as its own product. What sellers call rent-to-own is usually a lease or PPA with
            an option to buy the system during the term or at the end. Before you sign one, ask
            for the purchase price or the formula for every year of the contract, in writing. The
            CPUC warns that ending a lease or PPA early can mean you &ldquo;might have to buy out
            the contract, which could be thousands of dollars.&rdquo;
          </p>
          <p className="mt-3">
            If owning the system is the goal, compare a solar loan, which makes you the owner from
            the first day. If you have cash but want the provider to keep maintenance, a prepaid
            lease is the middle path; see{' '}
            <Link className={link} href="/blog/prepaid-lease-solar">
              what a prepaid solar lease buys
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>How much it costs to rent solar panels</h2>
          <p>
            No public agency publishes lease or PPA prices, so a &ldquo;typical monthly
            payment&rdquo; in an ad cannot be checked. What you can check is the offer in front of
            you. The CPUC&rsquo;s first questions: &ldquo;What is the total cost of the solar
            system or solar energy over the entire course of the contract?&rdquo; and &ldquo;Will
            my payments increase over time? How much will they increase and how
            frequently?&rdquo; It says escalators are &ldquo;typically in the range of a 1 percent
            to 3 percent increase above the rate you paid in the previous year.&rdquo;
          </p>
          <p className="mt-3">
            Then add the utility bill you keep. Under the Net Billing Tariff, exported solar is
            credited at values the CPUC says are &ldquo;usually lower than the retail rate&rdquo; (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ), and some charges stay: PG&amp;E&rsquo;s Base Services Charge, about $24 a month for
            most customers, &ldquo;is not eligible to be offset by monthly generation
            credits&rdquo; (
            <a className={link} href={S.pgeSolarBill}>
              PG&amp;E
            </a>
            ). Compare lease or PPA payment plus remaining bill against today&rsquo;s bill, for the
            first year and the last. What sets the payment itself is 
            <a className={link} href="#what-sets-the-payment">
              below
            </a>
            .
          </p>
        </section>

        {/* GS-MERGES 2026-09-24: /blog/how-much-does-it-cost-to-lease-solar-panels-california
            301s here (plan 6.3, topic-map G05, cluster 12 "solar leasing").
            Its disclosure-document, payment-inputs, two-escalators,
            compounding and contract-terms material is carried below; Bus. &
            Prof. Code 7169 and the CPUC guide re-read 2026-09-24. Not carried:
            one installer's escalator band and two installers' production-
            guarantee and buyout wording (installer sites are not sources). */}
        <section id="what-sets-the-payment">
          <h2>What sets a lease or PPA payment</h2>
          <p>
            A lease payment is not a list price. It comes from one roof, one production estimate,
            one term and one household&rsquo;s use, so two quotes for the same address can differ
            and both be real. California puts the total in a fixed place: the Solar Energy System
            Disclosure Document, &ldquo;printed on the front page or cover page of every solar
            energy contract&rdquo; in boldface 16-point type, must show &ldquo;the total cost and
            payments for the system, including financing costs&rdquo; (
            <a className={link} href={S.bpc7169}>
              Bus. &amp; Prof. Code § 7169(b)
            </a>
            , checked September 24, 2026).
          </p>
          <p className="mt-3">Ask what the payment is built from:</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>The system size, panel and inverter models, and roof layout.</li>
            <li>The production estimate and its shading, tilt and loss assumptions.</li>
            <li>
              Whether you pay for the equipment (a lease) or for its output (a PPA), which changes
              what a low-production year costs you.
            </li>
            <li>The term, and whether you pay monthly or prepay part of it.</li>
            <li>Any escalator, and anything else in scope: battery, roof or panel work.</li>
          </ul>
          <h3 className="mt-6">Two different things get called an escalator</h3>
          <p>
            A contract escalator raises what you pay the provider each year; ask for the full
            payment schedule for every year of the term. A utility-rate escalation assumption is
            an input to the savings estimate, not a charge. The CPUC says &ldquo;solar providers
            are allowed to use a maximum electricity rate escalation of 10% in any calculation, as
            of 2025&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            , checked September 24, 2026). Ask which one a salesperson means.
          </p>
          <p className="mt-3">
            A contract escalator compounds. With the first year&rsquo;s payment set at 100, here
            is where each rate takes it (arithmetic only, no dollar figure):
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Escalator compounding index by contract year</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Year</th>
                  <th className="p-3">1% a year</th>
                  <th className="p-3">2% a year</th>
                  <th className="p-3">3% a year</th>
                </tr>
              </thead>
              <tbody>
                  <tr className="border-t">
                    <td className="p-3">1</td>
                    <td className="p-3">100</td>
                    <td className="p-3">100</td>
                    <td className="p-3">100</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">5</td>
                    <td className="p-3">104</td>
                    <td className="p-3">108</td>
                    <td className="p-3">113</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">10</td>
                    <td className="p-3">109</td>
                    <td className="p-3">120</td>
                    <td className="p-3">130</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">15</td>
                    <td className="p-3">115</td>
                    <td className="p-3">132</td>
                    <td className="p-3">151</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">20</td>
                    <td className="p-3">121</td>
                    <td className="p-3">146</td>
                    <td className="p-3">175</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">25</td>
                    <td className="p-3">127</td>
                    <td className="p-3">161</td>
                    <td className="p-3">203</td>
                  </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mt-6">Terms that decide a cost you have not been quoted</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>End of term:</strong> renewal, removal, purchase, or nothing stated.
            </li>
            <li>
              <strong>Buyout and early termination:</strong> the formula in the contract, not a
              verbal estimate.
            </li>
            <li>
              <strong>A home sale:</strong> whether a buyer may take over the agreement, and what
              happens if not. Section 7169(c) lets the disclosure cover the effect on a sale,
              &ldquo;including any balloon payments or solar energy system relocation that may be
              required if the contract is not assigned to the new owner.&rdquo;
            </li>
            <li>
              <strong>Repairs, monitoring and insurance:</strong> who is responsible, for how
              long, and what is excluded.
            </li>
            <li>
              <strong>Production guarantee:</strong> whether there is one, what output it covers,
              how a shortfall is measured and who starts a claim. An estimate is not a guarantee,
              and a guarantee does not cap the escalator.
            </li>
            <li>
              <strong>Roof access:</strong> who pays to remove and reinstall the system if the
              roof needs work during the term.
            </li>
          </ul>
        </section>

        <section>
          <h2>Who can rent solar panels</h2>
          <p>
            Each provider sets its own requirements. Expect questions about owning the home,
            credit, the roof&rsquo;s age and shade, and your utility. Ask for the criteria in
            writing. A roof near the end of its life is usually a problem, because the panels
            would have to come off for the re-roof; see{' '}
            <Link className={link} href="/blog/is-my-roof-good-for-solar-california">
              whether your roof is ready for solar
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What happens at the end of a solar lease</h2>
          <p>Only the contract answers this. Ask, before signing:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Can you renew, buy the system or have it removed at the end, and at what price?</li>
            <li>Who pays for removal and for repairing the roof under the mounts?</li>
            <li>
              If you want to end early, &ldquo;will I owe a balloon payment and/or an early
              termination fee? If so, how much will I owe?&rdquo; (CPUC)
            </li>
          </ul>
        </section>

        <section>
          <h2>How to get out of a solar lease in California</h2>
          <ol className="mt-3 list-decimal space-y-3 pl-5">
            <li>
              <strong>Just signed?</strong> The CPUC: &ldquo;You have at least three business
              days to cancel your contract for any reason. If you are 65 years old or older, you
              have five business days.&rdquo; See{' '}
              <Link
                className={link}
                href="/blog/can-you-cancel-solar-panel-contract-before-installation-california"
              >
                how to cancel a California solar contract
              </Link>
              .
            </li>
            <li>
              <strong>Selling the home.</strong> &ldquo;If you sell your house before the lease or
              PPA contract is over, you will have to pay the solar provider the remainder of the
              value of the lease or PPA or transfer the contract to the new property owner.&rdquo;
              The steps are in{' '}
              <Link className={link} href="/blog/what-happens-to-solar-lease-when-i-sell-california">
                selling a home with a solar lease
              </Link>
              .
            </li>
            <li>
              <strong>Buying out the contract.</strong> Ask the provider for the buyout figure in
              writing, and compare it with the remaining payments.
            </li>
            <li>
              <strong>Not paying.</strong> This is not an exit. Read{' '}
              <Link className={link} href="/blog/what-happens-if-stop-paying-solar-lease-california">
                what happens if you stop paying a solar lease
              </Link>{' '}
              first.
            </li>
          </ol>
          <p className="mt-3">
            The provider can change too. The CPUC lists the risk that a &ldquo;solar provider
            could go out of business during the contract period.&rdquo; Sunnova Energy
            International and two affiliates filed Chapter 11 petitions on June 8, 2025, and said
            they planned to keep operating while pursuing asset sales (
            <a className={link} href={S.sunnova8k}>
              Sunnova, Form 8-K
            </a>
            ). Ask who services your system if the company is sold.
          </p>
        </section>

        <section>
          <h2>Rent or buy: is it better to lease solar in California?</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">Renting (lease or PPA) versus buying</caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">Rent: lease or PPA</th>
                  <th className="p-3">Buy: cash or loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Upfront cost', 'Often none', 'Cash price, or none with a loan'],
                  ['Repairs', 'Provider (CPUC)', 'You'],
                  ['Federal homeowner credit', 'None', 'None for systems placed in service after December 31, 2025 (IRS)'],
                  ['Property tax exclusion', 'Applies: “excluded whether it is leased or owned” (BOE)', 'Applies'],
                  ['At a sale', 'Transfer or pay the remaining value (CPUC)', 'Transfers with the house; pay off any loan'],
                  ['Resale premium evidence', 'None found in California (Berkeley Lab, 113 sales)', 'Separate studies; see the home value guide'],
                ].map((r) => (
                  <tr key={r[0]} className="border-t">
                    <th scope="row" className="p-3 align-top">{r[0]}</th>
                    <td className="p-3 align-top">{r[1]}</td>
                    <td className="p-3 align-top">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Sources: CPUC guide; IRS (
            <a className={link} href={S.irs}>
              Residential Clean Energy Credit
            </a>
            ); BOE (
            <a className={link} href={S.boeFaq}>
              exclusion FAQs
            </a>
            ); Berkeley Lab (
            <a className={link} href={S.lbnlTpo}>
              LBNL-1007003
            </a>
            ), all checked September 23, 2026. The fuller decision is in{' '}
            <Link className={link} href="/blog/is-it-better-to-buy-or-lease-solar-panels-california">
              buy or lease solar panels in California
            </Link>
            , and the home-value research in{' '}
            <Link className={link} href="/blog/does-solar-increase-home-value-california">
              does solar increase home value
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>The reverse deal: leasing your roof to a solar program</h2>
          <p>
            &ldquo;Renting solar&rdquo; can also mean the opposite arrangement: someone else owns the
            panels and pays you for the roof space. In California the clearest example is a utility
            program. LADWP&rsquo;s Solar Rooftops program installs a 1 to 10 kW system that LADWP
            owns, takes all the power it produces, and pays owner-occupants &ldquo;fixed annual
            payments between $360–$900 depending on system size, for up to 20 years, totaling
            $7,200–$18,000&rdquo; (
            <a className={link} href={S.ladwpRooftops}>
              LADWP
            </a>
            , checked September 23, 2026). Your electric bill does not change; the payment is rent.
          </p>
          <p className="mt-3">
            That is a different trade from a lease, where you pay the provider and use the power. It
            suits a homeowner who wants income from an unused roof more than lower bills. LADWP says
            the program is subject to change or termination without notice. The details are in{' '}
            <Link className={link} href="/blog/ladwp-solar-rooftops-program">
              the LADWP Solar Rooftops guide
            </Link>
            , and LADWP&rsquo;s other programs, including Shared Solar for apartments, in{' '}
            <Link className={link} href="/blog/ladwp-solar-program">
              LADWP solar programs
            </Link>
            . If a private company offers to rent your roof, read the agreement for the term, removal
            at the end, roof repairs and what happens when you sell, just as you would a lease. What is
            available outside Los Angeles, and the contract terms to check, are covered in{' '}
            <Link className={link} href="/blog/lease-roof-for-solar-panels">
              leasing your roof to a utility or developer instead
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>If you rent the home, not just the panels</h2>
          <p>
            Tenants cannot sign a rooftop lease or PPA; the owner has to. Tenant options run
            through the electric bill instead: CPUC bill-discount programs for income-qualified
            households, utility community renewable programs, and SOMAH credits in affordable
            apartments. The CPUC also adopted rules on June 11, 2026 for a new Community Renewable
            Energy Program open to renters and multifamily residents, but utilities must still
            submit implementation plans for approval, so it is not open yet (
            <a className={link} href={S.cpucCre}>
              CPUC
            </a>
            ). Everything a tenant can use now is in{' '}
            <Link className={link} href="/blog/solar-for-renters">
              solar for renters in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor.
            California Rate Relief is compensated by a solar provider when a homeowner we refer
            signs an agreement. A referral request does not set a lease price or promise savings.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
