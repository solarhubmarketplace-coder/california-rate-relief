// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "ladwp solar program" and its cluster (ladwp solar incentives, ladwp
// solar rebate, ladwp shared solar program, los angeles electricity cost per
// kwh). /blog/ladwp-solar-rooftops-program covers one program in depth; this
// page covers every LADWP solar program and links to it. ladwp.com refuses
// WebFetch, so every LADWP figure below was fetched from ladwp.com with curl on
// 2026-09-23 and read from the page text; nothing was carried from memory.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/ladwp-solar-program';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  programs: 'https://www.ladwp.com/residential-services/solar-programs',
  rooftops: 'https://www.ladwp.com/residential-services/solar-programs/solar-rooftops',
  shared: 'https://www.ladwp.com/residential-services/solar-programs/shared-solar',
  sgip: 'https://www.ladwp.com/residential-services/solar-programs/self-generation-incentive-program',
  fit: 'https://www.ladwp.com/commercial-services/programs-and-rebates-commercial/feed-tariff-fit-program',
  srpGuidelines:
    'https://www.ladwp.com/sites/default/files/2026-01/Revised%20SRP%20Guidelines%20(BES%2011-3-25%20v.2).pdf',
  vnem: 'https://www.ladwp.com/commercial-services/programs-and-rebates-commercial/commercial-solar-programs/virtual-net-metering',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  sgipTracker: 'https://www.selfgenca.com/home/program_metrics/',
} as const;

const sources: Source[] = [
  { label: 'LADWP: Solar Programs (list of current programs)', url: S.programs },
  { label: 'LADWP: Solar Rooftops', url: S.rooftops },
  { label: 'LADWP: Solar Rooftops Program Guidelines, revised (posted January 2026)', url: S.srpGuidelines },
  { label: 'LADWP: Shared Solar (2026 rates and eligibility)', url: S.shared },
  { label: 'LADWP: Self-Generation Incentive Program (RSSE update, March 2026)', url: S.sgip },
  { label: 'LADWP: Feed-in Tariff (FiT) Program (capacity updated 09/18/2026)', url: S.fit },
  { label: 'LADWP: Virtual Net Energy Metering (VNEM) pilot', url: S.vnem },
  { label: 'CPUC: Net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'SGIP program tracker (category status by administrator)', url: S.sgipTracker },
];

const metaTitle = 'LADWP Solar Programs 2026: Rooftops, Shared Solar, Rebates';
const metaDescription =
  'LADWP lists no rebate on solar you buy. What it offers: Solar Rooftops ($360 to $900 a year), Shared Solar for apartments, SGIP and a feed-in tariff.';

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
    question: 'Does LADWP have a solar rebate?',
    answer:
      'Not for a system you buy or lease yourself. LADWP’s current solar programs page lists Solar Rooftops, Shared Solar, the Self-Generation Incentive Program, Utility Built Solar, the Feed-in Tariff programs and Virtual Net Metering; none is a rebate on panels you own. The money LADWP pays homeowners is Solar Rooftops rent, and SGIP funding for income-qualified customers.',
  },
  {
    question: 'What is the LADWP Shared Solar program?',
    answer:
      'A subscription for LADWP customers in apartments, condos and duplexes. You subscribe to 50 or 100 kWh a month from new solar plants in or near the LA basin, billed at a fixed Shared Solar rate for 10 years. LADWP lists the 2026 rate at $0.29624 per kWh standard and $0.28124 discounted, against a Tier 1 rate of $0.26408 for July to September 2026.',
  },
  {
    question: 'How much does LADWP pay for Solar Rooftops?',
    answer:
      'LADWP pays a fixed $360 to $900 a year, depending on system size, for up to 20 years, which it totals at $7,200 to $18,000. LADWP owns the 1 to 10 kW system and receives all the energy; the payment is for the use of your roof. The home must be owner-occupied.',
  },
  {
    question: 'Does NEM 3.0 apply to LADWP?',
    answer:
      'No. NEM 3.0 is the common name for the CPUC’s Net Billing Tariff for PG&E, SCE and SDG&E customers. LADWP is a city department and handles solar interconnection through its own net energy metering process; its SGIP page sends applicants to ladwp.com/nem.',
  },
  {
    question: 'Can renters in Los Angeles get solar?',
    answer:
      'Through Shared Solar, if you live in a multifamily unit on an eligible LADWP residential rate and have not taken part in LADWP’s old Solar Incentive program. There are no enrollment fees, and the subscription moves with you to another multifamily unit in LADWP territory.',
  },
];

export default function LadwpSolarProgramPage() {
  return (
    <PublicLayout
      breadcrumbLabel="LADWP solar programs"
      breadcrumbParent={{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="LADWP solar programs in 2026: what Los Angeles offers owners and renters"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Utility programs"
        title="LADWP solar programs in 2026: what Los Angeles offers owners and renters"
        crumbs={[{ label: 'Solar incentives', href: '/blog/california-solar-tax-credit-2026' }]}
        crumbLabel="LADWP solar programs"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="incentives"
        path={PATH}
        intro={
          <>
            <p>
              LADWP runs its own solar programs, separate from the CPUC rules for PG&amp;E, SCE and
              SDG&amp;E. For homes it offers Solar Rooftops, which pays $360 to $900 a year to put an
              LADWP-owned system on your roof; Shared Solar for apartment and condo households; and
              SGIP funding for income-qualified customers. Its current solar programs page lists no
              rebate on panels you buy yourself.
            </p>
            <p className="mt-3">
              Which program fits depends on whether you own the home, the kind of building and your
              income. The statewide programs are in{' '}
              <Link className={link} href="/blog/california-solar-tax-credit-2026">
                California solar incentives in 2026
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Solar Rooftops pays',
            value: '$360–$900 a year',
            note: 'For up to 20 years; LADWP owns the system.',
            source: { publisher: 'LADWP', date: UPDATED, url: S.rooftops },
          },
          {
            label: 'Shared Solar rate, 2026',
            value: '$0.29624/kWh',
            note: 'Standard; $0.28124 discounted. Fixed for 10 years.',
            source: { publisher: 'LADWP', date: UPDATED, url: S.shared },
          },
          {
            label: 'Tier 1 residential rate',
            value: '$0.26408/kWh',
            note: 'July to September 2026, as LADWP lists it.',
            source: { publisher: 'LADWP', date: UPDATED, url: S.shared },
          },
          {
            label: 'SGIP through LADWP',
            value: 'Income-qualified',
            note: 'Single-family at or below 80% of area median income; waitlist.',
            source: { publisher: 'LADWP', date: UPDATED, url: S.sgip },
          },
        ]}
        inquiry={<SolarInquiry utility="ladwp" topic="LADWP solar programs" market="CA" />}
      >
        <section>
          <h2>Every LADWP solar program, and who it is for</h2>
          <p>
            LADWP&rsquo;s solar programs page lists seven programs (
            <a className={link} href={S.programs}>
              LADWP
            </a>
            , checked September 23, 2026). Three matter to households: Solar Rooftops pays
            owner-occupants to host an LADWP-owned system, Shared Solar sells apartment and condo
            households solar power at a price fixed for 10 years, and SGIP funds solar and batteries
            for income-qualified customers. The rest serve property owners, developers or the city.
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                LADWP solar programs as listed on September 23, 2026
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Program</th>
                  <th className="p-3">Who it is for</th>
                  <th className="p-3">What you get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Solar Rooftops</th>
                  <td className="p-3 align-top">Owner-occupied homes on R1-A, R1-B, R1-D or R1-E rates</td>
                  <td className="p-3 align-top">$360–$900 a year for up to 20 years; LADWP owns the system</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Shared Solar</th>
                  <td className="p-3 align-top">Apartments, condos and duplexes</td>
                  <td className="p-3 align-top">50 or 100 kWh a month at a rate fixed for 10 years</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Self-Generation Incentive Program</th>
                  <td className="p-3 align-top">Income-qualified single-family and affordable multifamily</td>
                  <td className="p-3 align-top">Funding toward solar and battery storage; waitlisted</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Feed-in Tariff and FiT+</th>
                  <td className="p-3 align-top">Property owners and developers, projects of 30 kW and up</td>
                  <td className="p-3 align-top">LADWP buys all the output under a contract of up to 20 years</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Virtual Net Energy Metering pilot</th>
                  <td className="p-3 align-top">Owners and developers of multifamily sites</td>
                  <td className="p-3 align-top">Sell a building&rsquo;s solar output to LADWP; at least 40% of the proceeds go to the tenants</td>
                </tr>
                <tr className="border-t">
                  <th scope="row" className="p-3 align-top">Utility Built Solar</th>
                  <td className="p-3 align-top">City-owned rooftops and parking lots</td>
                  <td className="p-3 align-top">Not a household program</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>Is there an LADWP solar rebate?</h2>
          <p>
            Not on the current list. None of the programs on LADWP&rsquo;s solar page is a rebate for
            a system you buy, finance or lease yourself. LADWP&rsquo;s earlier Solar Incentive
            Program survives only in the fine print: Shared Solar excludes customers who took part in
            it, and the Solar Rooftops guidelines exclude customers enrolled in it or with an existing
            solar system. If a proposal includes an &ldquo;LADWP rebate,&rdquo; ask
            which program it means and ask for LADWP&rsquo;s written approval.
          </p>
          <p className="mt-3">
            A system you own connects under LADWP&rsquo;s own net energy metering process: LADWP&rsquo;s
            SGIP page sends applicants to ladwp.com/nem to start the interconnection study. The
            CPUC&rsquo;s Net Billing Tariff, usually called NEM 3.0, covers PG&amp;E, SCE and SDG&amp;E
            customers (
            <a className={link} href={S.cpucNem}>
              CPUC
            </a>
            ), not LADWP&rsquo;s.
          </p>
        </section>

        <section>
          <h2>Solar Rooftops: LADWP rents your roof</h2>
          <p>
            LADWP inspects the home, designs a 1 to 10 kW system, pulls the permit from the Los
            Angeles Department of Building and Safety, installs it and connects it. Customers
            &ldquo;receive fixed annual payments between $360–$900 depending on system size, for up
            to 20 years, totaling $7,200–$18,000.&rdquo; LADWP &ldquo;owns the system and receives all
            energy generated,&rdquo; and pays &ldquo;regardless of how much solar energy is
            produced.&rdquo; The home must be owner-occupied, and LADWP says the program &ldquo;shall at
            all times be subject to change or termination without notice&rdquo; (
            <a className={link} href={S.rooftops}>
              LADWP
            </a>
            , checked September 23, 2026).
          </p>
          <p className="mt-3">
            The trade is roof space for a fixed payment; your electric bill does not change. What
            you give up, how selling the home works and how it compares with owning a system are in{' '}
            <Link className={link} href="/blog/ladwp-solar-rooftops-program">
              the full LADWP Solar Rooftops guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Shared Solar: a fixed price for apartment and condo households</h2>
          <p>
            Shared Solar lets residential customers in multifamily homes &ldquo;fix a portion of
            their electric bill against rising utility costs for 10 years.&rdquo; You subscribe to
            either 50 or 100 kWh a month from new solar plants in or near the LA basin, billed at the
            Shared Solar rate. LADWP says there are no enrollment fees, ongoing costs or maintenance
            costs, and that the subscription moves with you to another multifamily unit in LADWP
            territory (
            <a className={link} href={S.shared}>
              LADWP
            </a>
            , checked September 23, 2026).
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Shared Solar rates next to the standard Tier 1 rate, as LADWP lists them
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Rate</th>
                  <th className="p-3">Dollars per kWh</th>
                  <th className="p-3">Period</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t"><td className="p-3">Shared Solar Standard Rate</td><td className="p-3">$0.29624</td><td className="p-3">2026</td></tr>
                <tr className="border-t"><td className="p-3">Shared Solar Discount Rate</td><td className="p-3">$0.28124</td><td className="p-3">2026</td></tr>
                <tr className="border-t"><td className="p-3">Standard Residential Tier 1 Rate</td><td className="p-3">$0.26408</td><td className="p-3">July to September 2026</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Read those together. In the third quarter of 2026, both Shared Solar rates were higher
            than the Tier 1 rate LADWP lists beside them, so subscribing did not lower that part of
            the bill then. What you buy is a price that stays fixed for 10 years while the regular
            rate can move. To qualify you need an LADWP account in good standing at a multifamily
            unit, on the R1A Standard Residential, R1D Low-Income or R1E Lifeline rate, and no past
            participation in the Solar Incentive program. Apply online through your LADWP account or
            by mail. Other options for tenants are in{' '}
            <Link className={link} href="/blog/solar-for-renters">
              solar for renters in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>SGIP through LADWP: income-qualified solar and batteries</h2>
          <p>
            LADWP administers the state&rsquo;s Self-Generation Incentive Program for its customers.
            It describes SGIP as funding &ldquo;for income qualified residential customers to install
            solar and battery storage systems.&rdquo; There are two paths (
            <a className={link} href={S.sgip}>
              LADWP
            </a>
            , checked September 23, 2026):
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Single-family:</strong> total household income at or below 80% of area median
              income, shown with your most recent federal tax documents.
            </li>
            <li>
              <strong>Multifamily:</strong> at least five deed-restricted low-income rental units,
              and either a location in a disadvantaged community or Indian Country, or at least 80% of
              households at or below 60% of area median income.
            </li>
          </ul>
          <p className="mt-3">
            Three cautions from LADWP&rsquo;s page. After a February 20, 2026 CPUC ruling about high
            reported project costs in the Residential Solar and Storage Equity budget, LADWP requires
            extra cost documentation and may modify or cancel applications with unusually high costs.
            Being notified in LADWP&rsquo;s SGIP lottery is not an award. And because of the waitlist
            and limited funding, LADWP says it is &ldquo;unable to guarantee that customers on the
            waitlist will receive an incentive.&rdquo; Applications go through the SGIP portal at
            selfgenca.com. Statewide category status is in{' '}
            <Link className={link} href="/battery/sgip-battery-rebate-california">
              the SGIP battery rebate guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Feed-in Tariff: selling all the power to LADWP</h2>
          <p>
            The Feed-in Tariff lets property owners and developers sell the output of local
            renewable projects directly to LADWP instead of using it on site, under a Standard Offer
            Power Purchase Agreement of no more than 20 years. The smallest size band is 30 kW, so it
            is a program for large roofs, carports and commercial property rather than a typical
            house. LADWP&rsquo;s price for in-basin solar is 14.5¢ per kWh for 30 to 500 kW, 14.0¢ for
            over 500 kW to 3 MW and 13.5¢ above 3 MW. Of the program&rsquo;s 235 MW, LADWP showed 57.8 MW
            available as of September 18, 2026 (
            <a className={link} href={S.fit}>
              LADWP
            </a>
            ). Businesses should start with{' '}
            <Link className={link} href="/commercial-solar">
              commercial solar in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>What LADWP electricity costs, for comparing any solar offer</h2>
          <p>
            A solar proposal is only as good as the rate it assumes you are replacing. On its Shared
            Solar page, LADWP lists the Standard Residential Tier 1 rate at $0.26408 per kWh for July
            to September 2026. Your bill may include higher tiers and other charges; the full rate
            structure is in{' '}
            <Link className={link} href="/blog/ladwp-rates">
              LADWP electricity rates
            </Link>
            , and{' '}
            <Link className={link} href="/blog/why-is-my-ladwp-bill-so-high">
              why an LADWP bill runs high
            </Link>{' '}
            walks through the usual causes. Programs in other territories are in{' '}
            <Link className={link} href="/blog/pge-solar-program">
              PG&amp;E&rsquo;s solar programs
            </Link>{' '}
            and{' '}
            <Link className={link} href="/blog/smud-solar-program">
              SMUD&rsquo;s solar programs
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We are
            not LADWP and do not run or decide eligibility for any LADWP program; apply through
            LADWP or the SGIP portal.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
