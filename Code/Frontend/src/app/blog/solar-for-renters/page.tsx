// 2026-09-23 new page (topical-authority wave, agent costfin). Answers
// "solar for renters california": what a tenant can do without owning the roof.
// Every program rule below was fetched from the administering agency or utility
// on 2026-09-23. No savings figure is promised; the 20% figures are program
// discounts as the CPUC states them, and CARE/FERA percentages are the CPUC's.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/solar-for-renters';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const CPUC_DAC =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/solar-in-disadvantaged-communities';
const PGE_SOLAR_CHOICE = 'https://www.pge.com/en/clean-energy/solar/community-renewable-programs.html';
const SCE_PROGRAMS =
  'https://www.sce.com/clean-energy-efficiency/solar-generation-storage/solar-billing-incentives';
const SOMAH = 'https://calsomah.org/about';
const CPUC_CARE_FERA =
  'https://www.cpuc.ca.gov/consumer-support/financial-assistance-savings-and-discounts/family-electric-rate-assistance-program';
const IRS_25D = 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit';
const CPUC_CRE =
  'https://www.cpuc.ca.gov/news-and-updates/all-news/cpuc-updates-existing-community-solar-programs';
const SOMAH_OWNERS = 'https://www.calsomah.org/property-owners';
// 2026-09-23 Tier 2 (agent costfin): PG&E Solar Choice enrollment is on hold
// (D.21-12-036) and Green Saver is at capacity; both now say so. Added LADWP
// Shared Solar, the one renter program in the largest city-owned utility.
const PGE_GREEN_SAVER =
  'https://www.pge.com/en/save-energy-and-money/energy-saving-programs/green-saver-program.html';
const LADWP_SHARED = 'https://www.ladwp.com/residential-services/solar-programs/shared-solar';
const BOE_FAQ =
  'https://boe.ca.gov/proptaxes/active-solar-energy-system/frequently-asked-questions.htm';

const sources: Source[] = [
  { label: 'CPUC: Solar in Disadvantaged Communities (DAC-GT, CSGT, SOMAH)', url: CPUC_DAC },
  { label: 'PG&E: Solar Choice and community renewable programs (enrollment on hold)', url: PGE_SOLAR_CHOICE },
  { label: 'PG&E: Green Saver program (at capacity)', url: PGE_GREEN_SAVER },
  { label: 'LADWP: Shared Solar (2026 rates and eligibility)', url: LADWP_SHARED },
  { label: 'SCE: Solar billing and incentives (Community Renewables Program)', url: SCE_PROGRAMS },
  { label: 'SOMAH: Solar on Multifamily Affordable Housing, about the program', url: SOMAH },
  { label: 'SOMAH: property owner eligibility', url: SOMAH_OWNERS },
  { label: 'CPUC: community solar program update (June 11, 2026)', url: CPUC_CRE },
  { label: 'CPUC: CARE and FERA discounts and income guidelines', url: CPUC_CARE_FERA },
  { label: 'IRS: Residential Clean Energy Credit', url: IRS_25D },
  { label: 'Board of Equalization: Active Solar Energy System Exclusion FAQs', url: BOE_FAQ },
];

const metaTitle = 'Solar for Renters in California: What You Can Actually Do';
const metaDescription =
  'Renters can’t sign a rooftop solar deal, but they can use CPUC 20% bill-discount programs, utility community solar, SOMAH and CARE or FERA. What fits whom.';

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
    question: 'Can renters get solar in California?',
    answer:
      'Not on the roof, unless the owner installs it. What renters can do is join a program that credits or discounts their own electric bill: the CPUC’s DAC Green Tariff and Community Solar Green Tariff for income-qualified customers in disadvantaged communities, a utility program such as LADWP’s Shared Solar or SCE’s Community Renewables Program, or SOMAH bill credits in affordable multifamily housing whose owner takes part. PG&E’s Solar Choice enrollment is on hold, and its Green Saver discount is at capacity.',
  },
  {
    question: 'How much do the CPUC community solar programs save?',
    answer:
      'The CPUC describes both the DAC Green Tariff and the Community Solar Green Tariff as giving eligible residential customers "a 20% bill discount." They are for income-qualified customers in disadvantaged communities. Ask your utility whether your address and household qualify.',
  },
  {
    question: 'Can I put solar panels on a rented house?',
    answer:
      'Only with the owner’s agreement, and a lease or PPA would normally be signed by the owner because the equipment is attached to their property. If you pay the electric bill, ask the owner how any bill savings and any cost would be shared, and get it in the rental agreement.',
  },
  {
    question: 'Can renters claim the federal solar tax credit?',
    answer:
      'Not for anything installed now. The IRS said the Residential Clean Energy Credit applied to improvements to your main home "whether you own or rent it," but the credit is not available for any property placed in service after December 31, 2025.',
  },
  {
    question: 'What if my electric bill is the real problem?',
    answer:
      'Start with bill assistance. The CPUC says CARE gives a 30 to 35% discount on the electric bill and FERA an 18% discount for households whose income is slightly above the CARE limits. Neither needs a roof or a landlord’s permission; you apply through your utility.',
  },
];

export default function SolarForRentersPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Solar for renters"
      breadcrumbParent={{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Solar for renters in California: what you can do without owning the roof"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar options"
        title="Solar for renters in California: what you can do without owning the roof"
        crumbs={[{ label: 'Leases, PPAs and financing', href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california' }]}
        crumbLabel="Solar for renters"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="financing"
        path={PATH}
        intro={
          <>
            <p>
              As a renter in California you can&rsquo;t sign a rooftop solar lease, loan or
              PPA, because the panels go on someone else&rsquo;s property. You can still cut
              or green your own electric bill: CPUC bill-discount programs for income-qualified
              households, your utility&rsquo;s community renewable program, SOMAH bill credits
              in affordable apartments, and bill assistance. Which one fits depends on your
              utility, income and building.
            </p>
            <p className="mt-3">
              Homeowners weighing a rooftop system should start with{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                the four ways to pay for solar, compared
              </Link>
              . This page is for households that do not own the roof.
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'DAC-GT and CSGT',
            value: '20% bill discount',
            note: 'For income-qualified residential customers in disadvantaged communities.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_DAC },
          },
          {
            label: 'CARE discount',
            value: '30–35%',
            note: 'On the electric bill, for income-qualified households.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_CARE_FERA },
          },
          {
            label: 'FERA discount',
            value: '18%',
            note: 'For households slightly above the CARE income limits.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_CARE_FERA },
          },
          {
            label: 'SOMAH incentives',
            value: '$100M a year',
            note: 'Average, for solar on multifamily affordable housing.',
            source: { publisher: 'SOMAH', date: '2026-09-23', url: SOMAH },
          },
        ]}
        inquiry={<SolarInquiry variant="bill" topic="Solar options for renters in California" market="CA" />}
      >
        <section>
          <h2>Why rooftop solar is the owner&rsquo;s decision</h2>
          <p>
            Every rooftop route (cash, loan, lease or PPA) puts equipment on the building and
            usually a contract or financing statement against the property. That has to be
            signed by whoever owns it. The state&rsquo;s main low-income rooftop program,
            DAC-SASH, is for homeowners: the CPUC describes it as enabling
            &ldquo;income-qualified homeowners in DACs to receive no-cost rooftop solar&rdquo; (
            <a className={link} href={CPUC_DAC}>
              CPUC
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            So a renter&rsquo;s options fall into two groups: programs that credit your own
            utility account, and persuading the owner to install. The first group is faster.
          </p>
        </section>

        <section>
          <h2>Bill-discount community solar for income-qualified households</h2>
          <p>
            The CPUC runs two programs for customers who cannot put solar on their own roof.
            Both are for residential customers in disadvantaged communities (DACs):
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>DAC Green Tariff (DAC-GT).</strong> Lets &ldquo;income-qualified,
              residential customers in DACs who may be unable to install solar on their roof
              to benefit from utility-scale clean energy&rdquo; with &ldquo;a 20% bill
              discount.&rdquo;
            </li>
            <li>
              <strong>Community Solar Green Tariff (CSGT).</strong> Lets residential customers
              in DACs &ldquo;who may be unable to install solar on their roof to benefit from a
              local solar project and receive a 20% bill discount.&rdquo; Communities work with
              a local nonprofit or government sponsor to organize participation.
            </li>
          </ul>
          <p className="mt-3">
            A disadvantaged community is defined by census tract, not by city, so ask your
            utility to check your exact address. To see{' '}
            <Link className={link} href="/blog/solar-discount">
              which utility or CCA runs the 20% solar discount for your address
            </Link>
            , and whether it is taking new customers, use the provider-by-provider list.
          </p>
          <p className="mt-3">
            At PG&amp;E the bill-discount program is called Green Saver. PG&amp;E says it gives
            &ldquo;a 20% discount on electricity bills,&rdquo; on top of any CARE or FERA discount,
            for customers who are eligible for or enrolled in CARE or FERA and live in a disadvantaged
            or tribal community, and that it is open to renters. It also says the program &ldquo;is
            currently at capacity&rdquo;: PG&amp;E auto-enrolls eligible customers as space opens (
            <a className={link} href={PGE_GREEN_SAVER}>
              PG&amp;E
            </a>
            , checked September 23, 2026). The rest of PG&amp;E&rsquo;s programs are in{' '}
            <Link className={link} href="/blog/pge-solar-program">
              PG&amp;E solar programs
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Renting in Los Angeles: LADWP Shared Solar</h2>
          <p>
            LADWP runs a program built for apartment and condo households. Shared Solar lets
            residential customers in multifamily dwellings &ldquo;fix a portion of their electric
            bill against rising utility costs for 10 years.&rdquo; You subscribe to 50 or 100 kWh a
            month from new solar plants in or near the LA basin, with no enrollment fees, and the
            subscription moves with you to another multifamily unit in LADWP territory. For 2026
            LADWP lists the Shared Solar rate at $0.29624 per kWh standard and $0.28124 discounted,
            beside a Tier 1 rate of $0.26408 for July to September 2026 (
            <a className={link} href={LADWP_SHARED}>
              LADWP
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            Read the rates together: in the third quarter of 2026 the Shared Solar rate was above the
            Tier 1 rate, so what you buy is a price fixed for 10 years, not a discount today. You need
            an account in good standing on the R1A, R1D or R1E residential rate and no past
            participation in LADWP&rsquo;s Solar Incentive program. LADWP&rsquo;s other programs are in{' '}
            <Link className={link} href="/blog/ladwp-solar-program">
              LADWP solar programs
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A community solar program built for renters is coming, not open yet</h2>
          <p>
            On June 11, 2026 the CPUC announced rules for a new Community Renewable Energy
            Program. It says community solar &ldquo;allows customers, such as non-profits,
            businesses, renters, and those living in multifamily housing, to subscribe to a
            portion of a shared solar array,&rdquo; and subscribers &ldquo;receive a reduction on
            their electricity bills.&rdquo; It is not open yet: &ldquo;Investor-owned utilities must
            submit implementation and marketing plans for CPUC approval,&rdquo; and no enrollment
            date was given (
            <a className={link} href={CPUC_CRE}>
              CPUC
            </a>
            , checked September 23, 2026). Be wary of anyone selling a subscription to it before
            your utility announces enrollment.
          </p>
        </section>

        <section>
          <h2>Your utility&rsquo;s community renewable program</h2>
          <p>
            If you do not qualify for the discount programs, the big utilities offer ways to
            match your use with renewable energy without panels on your building.
          </p>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>PG&amp;E Solar Choice (enrollment on hold).</strong> &ldquo;In the Solar
              Choice program, you can elect to purchase solar energy to match either 50% or 100% of
              your energy use.&rdquo; PG&amp;E says participation &ldquo;may result in either a bill
              premium or discount depending on a customer&rsquo;s rate schedule and PCIA
              vintage.&rdquo; But enrollment &ldquo;is on hold per California Public Utility
              Commission directive in Decision 21-12-036,&rdquo; and new applicants go on a
              waitlist. Customers served by a community choice aggregator and customers on net
              energy metering are not eligible (
              <a className={link} href={PGE_SOLAR_CHOICE}>
                PG&amp;E
              </a>
              , checked September 23, 2026).
            </li>
            <li>
              <strong>SCE Community Renewables Program.</strong> SCE lists it among its solar
              programs as a way to &ldquo;get clean energy in your community&rdquo; (
              <a className={link} href={SCE_PROGRAMS}>
                SCE
              </a>
              , checked September 23, 2026). Ask SCE for the current price effect on your
              rate.
            </li>
          </ul>
          <p className="mt-3">
            Read the price effect before you enroll. A program that greens your power can
            raise or lower your bill; PG&amp;E says so directly. If your city is served by a
            community choice aggregator, ask it what renewable options it offers.
          </p>
        </section>

        <section>
          <h2>Living in affordable multifamily housing: SOMAH</h2>
          <p>
            SOMAH &ldquo;provides financial incentives for installing solar panel and
            integrated storage systems that benefit both low-income tenants and property
            owners of multifamily affordable housing properties throughout California.&rdquo;
            Tenants benefit through energy bill credits. The program &ldquo;provides an
            average of $100 million in financial incentives each year,&rdquo; covers
            properties in PG&amp;E, SCE, SDG&amp;E, Liberty Utilities and PacifiCorp territory,
            and applications go through the PowerClerk portal (
            <a className={link} href={SOMAH}>
              SOMAH
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            A building qualifies if it has at least five units, is deed-restricted low-income
            rental housing, and meets one more test: 66% of residents at or below 80% of area
            median income, a location in a top-25% CalEnviroScreen census tract, ownership by a
            California Native American tribe, or ownership by a public housing authority (
            <a className={link} href={SOMAH_OWNERS}>
              SOMAH
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            The property owner applies, not the tenant. If you live in an affordable housing
            building, give the manager the program information and ask whether the building
            has applied.
          </p>
        </section>

        <section>
          <h2>Asking your landlord to install solar</h2>
          <p>
            A landlord who owns a single-family rental or a small building can add solar the
            same way any owner can. Two facts can help the conversation:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Property tax.</strong> The Board of Equalization says a qualifying system
              &ldquo;is excluded whether it is leased or owned,&rdquo; and &ldquo;there is no
              form or filing required to receive the exclusion&rdquo; (
              <a className={link} href={BOE_FAQ}>
                BOE
              </a>
              , checked September 23, 2026). The exclusion is scheduled to sunset on January
              1, 2027.
            </li>
            <li>
              <strong>No homeowner credit for a landlord.</strong> The IRS says, &ldquo;You
              can&rsquo;t claim the credit if you&rsquo;re a landlord or other property owner
              who doesn&rsquo;t live in the home,&rdquo; and the credit is not available for
              property placed in service after December 31, 2025 anyway (
              <a className={link} href={IRS_25D}>
                IRS
              </a>
              ).
            </li>
          </ul>
          <p className="mt-3">
            If you pay the electric bill, the savings land on your account while the cost
            lands on the owner. Agree in writing how that is shared, for example through the
            rent, before anything is installed. If the owner is weighing a lease, point them
            to{' '}
            <Link className={link} href="/blog/rent-solar-panels-for-your-home-california">
              how renting solar panels works for a home
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>When the bill is the urgent problem</h2>
          <p>
            Bill assistance does not depend on a roof. The CPUC says CARE gives
            &ldquo;30–35% discount on their electric bill,&rdquo; and FERA &ldquo;applies an
            18% discount on electricity bills&rdquo; for families whose income is slightly
            above the CARE limits. FERA covers PG&amp;E, SCE and SDG&amp;E customers. For June
            1, 2026 to May 31, 2027, the FERA limit is $54,100 for a household of one or two,
            $68,300 for three and $82,500 for four (
            <a className={link} href={CPUC_CARE_FERA}>
              CPUC
            </a>
            , checked September 23, 2026). Apply through your utility.
          </p>
          <p className="mt-3">
            More on reading a high bill is in{' '}
            <Link className={link} href="/blog/why-is-my-california-electric-bill-so-high">
              why California electric bills run high
            </Link>
            , and the full list of state programs is in{' '}
            <Link className={link} href="/blog/california-solar-tax-credit-2026">
              California solar incentives in 2026
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We
            do not run or decide eligibility for any program on this page; apply through the
            utility or administrator named in each section.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
