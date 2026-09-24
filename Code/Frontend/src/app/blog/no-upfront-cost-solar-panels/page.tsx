// 2026-09-23 new page (topical-authority wave, agent costfin). CREATE_DEDICATED:
// "no upfront cost solar panels", "are free solar panels really free" and
// "pros and cons of free solar panels" were landing on
// /blog/free-solar-panels-california, which answers a different question (are
// there genuine no-cost programs). This page answers who pays for a
// no-upfront-cost system, how, and the trade-offs. It does not repeat the
// down-payment-cap detail on /blog/zero-down-solar-california.
// Rule 5: no promise of free solar. "Free" and "no cost" appear only inside an
// attributed government quotation or as a description of what an ad claims.
// Every figure was fetched from its primary source on 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/no-upfront-cost-solar-panels';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_DAC =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const USC_48E =
  'https://uscode.house.gov/view.xhtml?req=%28title%3A26+section%3A48E+edition%3Aprelim%29';
const LBNL_TPO = 'https://www.osti.gov/servlets/purl/1342946';

const sources: Source[] = [
  { label: 'CPUC: California Solar Consumer Protection Guide (overview, false claims and questions to ask)', url: CPUC_GUIDE },
  { label: 'CPUC: Solar in Disadvantaged Communities (DAC-SASH)', url: CPUC_DAC },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: '26 U.S.C. § 48E, clean electricity investment credit', url: USC_48E },
  {
    label:
      'Berkeley Lab: Leasing Into the Sun, California home sales with third-party-owned solar (LBNL-1007003, January 2017)',
    url: LBNL_TPO,
  },
];

const metaTitle = 'No Upfront Cost Solar Panels in California: Who Pays';
const metaDescription =
  'No-upfront-cost solar is paid later: a loan, a lease or a per-kWh PPA. How the company gets paid, the pros and cons, and the total-cost test to run first.';

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
    question: 'Are no-upfront-cost solar panels really free?',
    answer:
      'No. The CPUC puts it plainly: "Solar energy is rarely free." No-upfront-cost means the cost is paid later, through loan payments with interest, lease payments or a per-kWh price on a PPA. The exception the CPUC names is a few government-funded programs for low-income households.',
  },
  {
    question: 'How do solar companies make money if I pay nothing upfront?',
    answer:
      'A lender or provider pays for the installation and gets it back from you over the contract. On a loan, that is principal plus interest and any fees. On a lease or PPA, the provider owns the system and collects your payments for the term, which the CPUC says is typically 20 to 25 years for a lease. An owner may also have its own business tax position under federal law; that is not a benefit you claim.',
  },
  {
    question: 'What are the pros and cons of no-upfront-cost solar?',
    answer:
      'The pros: no cash needed at signing, and on a lease or PPA the provider is responsible for monitoring, maintenance and repairs. The cons: you pay for the system over time, often with an escalator or interest; you keep a utility bill as well as a solar bill; a lease or PPA has to be transferred or paid off when you sell; and the provider could go out of business during the contract.',
  },
  {
    question: 'Is it better to pay cash or go solar with no money down?',
    answer:
      'Compare the total, not the first payment. Put the cash price, the loan’s total repayment, and the lease or PPA’s full payment schedule side by side for the same system, then add the utility bill each one leaves you with. If a no-money-down option only looks better because its estimate assumes a steep rise in utility rates, ask for it rerun with a lower assumption.',
  },
  {
    question: 'Does the government pay for solar panels in California?',
    answer:
      'Only for a narrow group. The CPUC says its DAC-SASH program "enables income-qualified homeowners in DACs to receive no-cost rooftop solar," with $3 per watt incentives. Eligibility depends on income, location in a disadvantaged community and owning and living in the home. Everything else sold as a government program is usually a loan, lease or PPA.',
  },
];

export default function NoUpfrontCostSolarPanelsPage() {
  return (
    <PublicLayout
      breadcrumbLabel="No-upfront-cost solar"
      breadcrumbParent={{ label: 'Solar cost and value', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="No-upfront-cost solar panels: who pays, how much, and the pros and cons"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar cost and value"
        title="No-upfront-cost solar panels: who pays, how much, and the pros and cons"
        crumbs={[{ label: 'Solar cost and value', href: '/solar-panels-california' }]}
        crumbLabel="No-upfront-cost solar"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="cost_value"
        path={PATH}
        intro={
          <>
            <p>
              No-upfront-cost solar is not free. It means the cost of the system is paid
              later: through a loan you repay with interest, a monthly lease payment, or a
              per-kWh price on a power purchase agreement (PPA). The CPUC says &ldquo;solar
              energy is rarely free.&rdquo; The real question is what you pay over the whole
              contract, and whether that beats the utility bill you would otherwise keep.
            </p>
            <p className="mt-3">
              For what the same system costs to buy outright, see{' '}
              <Link className={link} href="/solar-panels-california">
                California solar panel cost and sizing
              </Link>
              . This page covers what happens when you pay nothing at signing.
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'What the CPUC says',
            value: '“Rarely free”',
            note: 'The exception is a few government-funded programs for low-income households.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'Typical lease term',
            value: '20 to 25 years',
            note: '“A typical lease contract period is 20-25 years.”',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'Typical escalator',
            value: '1% to 3% a year',
            note: 'Be cautious of a contract with an escalator higher than that.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'Homeowner federal credit',
            value: 'None for new systems',
            note: 'Not available for property placed in service after December 31, 2025.',
            source: { publisher: 'IRS', date: '2026-09-23', url: IRS_25D },
          },
        ]}
        inquiry={<SolarInquiry variant="decision" topic="No-upfront-cost solar in California" market="CA" />}
      >
        <section>
          <h2>Are no-upfront-cost solar panels really free?</h2>
          <p>
            No. The CPUC&rsquo;s consumer guide lists &ldquo;You can get free solar energy at
            no cost to you&rdquo; among the claims to watch for and answers it:
            &ldquo;Solar energy is rarely free. An honest company will be upfront about all
            the costs you will pay over time. There is one exception: a few
            government-funded solar programs offer free or low-cost solar to low-income
            households.&rdquo; (
            <a className={link} href={CPUC_GUIDE}>
              CPUC, California Solar Consumer Protection Guide
            </a>
            , checked September 23, 2026.)
          </p>
          <p className="mt-3">
            A no-upfront-cost offer is one of three things. Each moves the cost to a
            different place:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>A solar loan.</strong> You own the system and repay the lender. With
              no down payment, the whole price is borrowed, so you pay interest and any fees
              on all of it.
            </li>
            <li>
              <strong>A lease.</strong> The provider owns the system. The CPUC: &ldquo;you
              will make scheduled monthly payments in exchange for all the electricity the
              system produces.&rdquo;
            </li>
            <li>
              <strong>A PPA.</strong> The provider owns the system, and &ldquo;you typically
              pay for all the power the solar system generates (at a fixed
              per-kilowatt-hour rate).&rdquo;
            </li>
          </ul>
          <p className="mt-3">
            The CPUC adds that customers with a loan, lease or PPA &ldquo;will also receive a
            monthly bill from a loan company or solar provider,&rdquo; on top of whatever
            utility bill remains. How the three compare in full is in{' '}
            <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
              lease, PPA, loan and cash compared for California homes
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>How do solar companies make money on no-upfront-cost solar?</h2>
          <p>
            Someone pays the installer on day one, and you pay that someone back. The
            business works because the contract is long and the payments are certain:
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Payments over decades.</strong> The CPUC says &ldquo;a typical lease
              contract period is 20-25 years.&rdquo; A lease or PPA provider recovers the
              system cost, and its profit, from your payments over that term.
            </li>
            <li>
              <strong>Escalators.</strong> Many contracts raise the payment or the per-kWh
              price each year. The CPUC says escalators are &ldquo;typically in the range of a
              1 percent to 3 percent increase above the rate you paid in the previous
              year&rdquo; and to be cautious above that. The arithmetic is simple: at 3% a
              year, the payment is about 1.8 times the first-year amount after 20 increases.
            </li>
            <li>
              <strong>Interest and fees on loans.</strong> A lender earns the interest. Some
              loans also fold a fee into the price to buy down the advertised rate; see{' '}
              <Link className={link} href="/solar-problems/solar-dealer-fees-explained">
                how solar dealer fees work
              </Link>
              .
            </li>
            <li>
              <strong>The owner&rsquo;s tax position.</strong> The owner of a leased or PPA
              system may have its own federal business credit under{' '}
              <a className={link} href={USC_48E}>
                26 U.S.C. § 48E
              </a>
              , which has its own rules and end dates for solar. That credit is the
              owner&rsquo;s, not yours. The homeowner credit is gone for new systems: the IRS
              says it &ldquo;is not available for any property placed in service after
              December 31, 2025&rdquo; (
              <a className={link} href={IRS_25D}>
                IRS
              </a>
              , checked September 23, 2026).
            </li>
          </ul>
          <p className="mt-3">
            None of that makes the deal bad. It means the price is real and is paid later. The
            job is to see the whole of it before you sign.
          </p>
        </section>

        <section>
          <h2>Pros and cons of no-upfront-cost solar</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <h3>What works in your favor</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>No cash needed at signing.</li>
                <li>
                  On a lease or PPA, the CPUC says the &ldquo;solar provider is responsible
                  for all monitoring, maintenance, and repairs.&rdquo;
                </li>
                <li>A lease payment is set in advance, which makes budgeting simpler.</li>
                <li>On a PPA, a low-production month means a smaller solar bill.</li>
                <li>
                  With a loan, you own the system, so you control repairs, upgrades and what
                  happens at a sale.
                </li>
              </ul>
            </div>
            <div className="rounded-xl border p-4">
              <h3>What works against you</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>You pay for the system over time, often with interest or an escalator.</li>
                <li>You get a solar bill and keep a smaller utility bill.</li>
                <li>
                  At a sale, the CPUC says you &ldquo;will have to pay the solar provider the
                  remainder of the value of the lease or PPA or transfer the contract.&rdquo;
                </li>
                <li>
                  The CPUC lists the risk that a &ldquo;solar provider could go out of business
                  during the contract period.&rdquo;
                </li>
                <li>
                  No resale boost has been shown: Berkeley Lab&rsquo;s California study of 113
                  third-party-owned home sales found no statistically significant premium (
                  <a className={link} href={LBNL_TPO}>
                    LBNL-1007003
                  </a>
                  ).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2>The total-cost test to run before you sign</h2>
          <p>
            Ask each offer the CPUC&rsquo;s first questions: &ldquo;What is the total cost of
            the solar system or solar energy over the entire course of the contract?&rdquo;
            and &ldquo;Will my payments increase over time? How much will they increase and
            how frequently?&rdquo; Then:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>Get a cash price for the same system, even if you plan to finance.</li>
            <li>Add up every payment in the loan, lease or PPA schedule, escalator included.</li>
            <li>
              Add the utility bill each option leaves you with. On PG&amp;E, SCE and SDG&amp;E,
              exported solar is credited at values the CPUC says are &ldquo;usually lower than
              the retail rate&rdquo; (
              <a className={link} href={CPUC_NEM}>
                CPUC
              </a>
              ), so the bill does not go to zero.
            </li>
            <li>
              Check the savings estimate&rsquo;s assumption about utility rates. The CPUC says
              providers may assume up to 10% a year, and that estimates &ldquo;do not guarantee
              savings.&rdquo;
            </li>
            <li>Compare the totals over the years you expect to stay in the home.</li>
          </ol>
          <p className="mt-3">
            The{' '}
            <Link className={link} href="/tools/solar-panel-calculator">
              solar cost calculator
            </Link>{' '}
            does the bill and price-per-watt arithmetic, and the financing comparison takes a
            lease, PPA and loan schedule side by side. How long a purchase takes to earn back
            its price is in{' '}
            <Link className={link} href="/blog/solar-payback-period-california">
              the solar payback period in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>No money down is not the same as a no-cost program</h2>
          <p>
            A small number of programs pay for solar for households that qualify. For
            single-family homeowners the main one is DAC-SASH, which the CPUC says
            &ldquo;enables income-qualified homeowners in DACs to receive no-cost rooftop
            solar,&rdquo; with &ldquo;$3/watt incentives&rdquo; (
            <a className={link} href={CPUC_DAC}>
              CPUC
            </a>
            , checked September 23, 2026). It depends on income, a location in a
            disadvantaged community and owning the home you live in. A sales offer that calls
            itself a government program is usually a loan, lease or PPA. Who genuinely
            qualifies, and how to tell the difference, is in{' '}
            <Link className={link} href="/blog/free-solar-panels-california">
              which programs genuinely pay for solar, and which ads only say so
            </Link>
            . What a $0 down payment means legally is in{' '}
            <Link className={link} href="/blog/zero-down-solar-california">
              $0 down solar in California
            </Link>
            , and the remaining state programs are in{' '}
            <Link className={link} href="/blog/california-solar-tax-credit-2026">
              California solar incentives for 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. A
            referral request does not approve financing, set a price or promise savings. Ask
            any provider for the full contract and the state disclosure document before you
            sign.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
