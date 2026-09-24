// 2026-09-23 new page (topical-authority wave, agent costfin). Answers
// "replacement solar inverter cost". No public agency publishes a current
// residential replacement price, and this site does not publish a dollar
// figure it cannot source, so the page explains what sets the price, what a
// warranty or lease already covers, the state equipment list a replacement
// must be on, and NREL's upkeep benchmark as budget context. Fetched 2026-09-23.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/replacement-solar-inverter-cost';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const CEC_LISTS = 'https://www.energy.ca.gov/programs-and-topics/programs/solar-equipment-lists';
const NREL_ATB = 'https://atb.nrel.gov/electricity/2024/residential_pv';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const SGIP = 'https://www.selfgenca.com/home/program_metrics/';

const sources: Source[] = [
  { label: 'California Energy Commission: Solar Equipment Lists (Grid Support Inverter List)', url: CEC_LISTS },
  { label: 'NREL Annual Technology Baseline 2024: residential PV operation and maintenance costs', url: NREL_ATB },
  { label: 'CPUC: California Solar Consumer Protection Guide', url: CPUC_GUIDE },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'SGIP program tracker', url: SGIP },
];

const metaTitle = 'Replacement Solar Inverter Cost in California: What Sets It';
const metaDescription =
  'A replacement solar inverter’s cost depends on type, warranty, labor, permits and whether you add a battery. What to check first and how to read a quote.';

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
    question: 'How much does it cost to replace a solar inverter in California?',
    answer:
      'No public agency publishes a current residential replacement price, so this page does not give one. The cost depends on whether you have one string inverter or many microinverters, whether a warranty covers the part or the labor, the permit your city requires and whether you upgrade to a battery-ready model. Get the quote itemized.',
  },
  {
    question: 'Who pays to replace the inverter on a leased or PPA system?',
    answer:
      'Usually the provider. The CPUC says that under a lease or PPA the solar provider is responsible for all monitoring, maintenance and repairs. Check your contract and call the provider before you pay anyone.',
  },
  {
    question: 'Does a replacement inverter have to be on an approved list?',
    answer:
      'The California Energy Commission keeps a Grid Support Inverter List of smart inverters that meet national safety and performance standards, and says some utilities and local governments use its lists in interconnection or permit applications. Ask your installer to show the replacement model on the current list.',
  },
  {
    question: 'How much should I budget each year for solar upkeep, including inverters?',
    answer:
      'NREL’s Annual Technology Baseline uses $30 per kW of solar per year for residential operation and maintenance from 2023, within a $0 to $40 range, and counts component failure among those costs. For a 6 kW system that is about $180 a year on average. It is a benchmark, not a quote.',
  },
];

export default function ReplacementSolarInverterCostPage() {
  return (
    <PublicLayout
      breadcrumbLabel="Replacement inverter cost"
      breadcrumbParent={{ label: 'Solar cost and value', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="Replacement solar inverter cost in California: what sets the price"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar cost and value"
        title="Replacement solar inverter cost in California: what sets the price"
        crumbs={[{ label: 'Solar cost and value', href: '/solar-panels-california' }]}
        crumbLabel="Replacement inverter cost"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="cost_value"
        path={PATH}
        intro={
          <>
            <p>
              What a replacement inverter costs depends on the type you have (one string
              inverter or many microinverters), whether a warranty covers the part or the labor,
              whether you move to a battery-ready model, and the permit and utility steps where
              you live. No public agency publishes a current replacement price, so get the quote
              itemized. Check the warranty, or your lease, before you pay anything.
            </p>
            <p className="mt-3">
              For what a whole new system costs, see{' '}
              <Link className={link} href="/solar-panels-california">
                California solar panel cost and sizing
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'Lease or PPA repairs',
            value: 'Provider’s job',
            note: 'The provider is responsible for monitoring, maintenance and repairs.',
            source: { publisher: 'CPUC', date: '2026-09-23', url: CPUC_GUIDE },
          },
          {
            label: 'State inverter list',
            value: 'Updated 3 times a month',
            note: 'CEC Grid Support Inverter List, usually the 1st, 11th and 21st.',
            source: { publisher: 'CEC', date: '2026-09-23', url: CEC_LISTS },
          },
          {
            label: 'Upkeep benchmark',
            value: '$30 per kW a year',
            note: 'Residential O&M, 2023 onward, within a $0–$40 range.',
            source: { publisher: 'NREL', date: '2026-09-23', url: NREL_ATB },
          },
        ]}
        inquiry={<SolarInquiry variant="decision" topic="Replacement solar inverter in California" market="CA" />}
      >
        <section>
          <h2>Check who already pays for it</h2>
          <ul className="mt-3 list-disc space-y-3 pl-5">
            <li>
              <strong>Leased or PPA system.</strong> The CPUC says the &ldquo;solar provider is
              responsible for all monitoring, maintenance, and repairs&rdquo; (
              <a className={link} href={CPUC_GUIDE}>
                CPUC
              </a>
              , checked September 23, 2026). Call the provider first; if it was sold or
              reorganized, ask who services the contract now.
            </li>
            <li>
              <strong>Manufacturer warranty.</strong> Find the inverter&rsquo;s model and serial
              number on the unit and look up its warranty. Ask whether it covers only the part or
              also labor and shipping, and whether it transfers to you if you bought the house with
              the system on it.
            </li>
            <li>
              <strong>Installer workmanship warranty.</strong> If the failure is wiring or
              installation, the installer&rsquo;s warranty may apply even after the part warranty
              ends.
            </li>
          </ul>
        </section>

        <section>
          <h2>What goes into a replacement quote</h2>
          <p>Ask for each line separately. A single lump sum hides what you are paying for.</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              <strong>The inverter hardware.</strong> One string inverter, one or more
              microinverters, or a hybrid unit that can also run a battery. The difference between
              the two main types is in{' '}
              <Link className={link} href="/blog/string-inverter-vs-microinverter">
                string inverters versus microinverters
              </Link>
              .
            </li>
            <li>
              <strong>Labor.</strong> Replacing a wall-mounted string inverter is different work
              from replacing microinverters under panels on the roof, which may mean lifting
              modules.
            </li>
            <li>
              <strong>Permit and inspection.</strong> Your city or county decides what permit
              applies. Ask whether the quote includes it and who pulls it. City permit pages for
              solar are collected in the{' '}
              <Link className={link} href="/california-solar-cost-index">
                California solar cost index
              </Link>
              .
            </li>
            <li>
              <strong>Monitoring.</strong> Whether the new inverter reconnects to your monitoring,
              and at what cost.
            </li>
            <li>
              <strong>Removal and disposal</strong> of the old unit.
            </li>
          </ol>
        </section>

        <section>
          <h2>The replacement should be on California&rsquo;s inverter list</h2>
          <p>
            The California Energy Commission says its Solar Equipment Lists &ldquo;include
            equipment that meets established national safety and performance standards.&rdquo;
            The Grid Support Inverter List covers solar inverters, battery inverters and combined
            solar-and-battery inverters, described as &ldquo;smart inverters.&rdquo; The functions
            required vary by utility; in investor-owned utility territory, CPUC Electric Rule 21
            sets them. The CEC
            says &ldquo;some utilities or local governments may use the Energy Commission&rsquo;s
            solar equipment lists during their interconnection or permit application
            processes,&rdquo; and the lists are updated &ldquo;three times a month, typically on the
            1st, 11th, and 21st&rdquo; (
            <a className={link} href={CEC_LISTS}>
              CEC
            </a>
            , checked September 23, 2026). Ask the installer to show the model on the current list.
          </p>
        </section>

        <section>
          <h2>Tell the utility before you change the system</h2>
          <p>
            A like-for-like swap is different from a bigger inverter, more panels or an added
            battery. Ask your utility, in writing, whether the change needs a new interconnection
            application and whether it affects your billing tariff. It matters most if you are on
            an older net metering plan: the CPUC says NEM 2.0 customers may stay on that tariff for
            20 years from the date they interconnected (
            <a className={link} href={CPUC_NEM}>
              CPUC
            </a>
            ). The difference between the plans is in{' '}
            <Link className={link} href="/blog/nem-2-vs-nem-3-california">
              NEM 2.0 versus NEM 3.0
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Replace, or upgrade to a battery-ready inverter?</h2>
          <p>
            A failed inverter is a natural moment to ask about storage, because a hybrid inverter
            can run a battery later. Price both options on the same quote. Battery incentives are
            limited: on September 23, 2026 the{' '}
            <a className={link} href={SGIP}>
              SGIP tracker
            </a>{' '}
            showed most residential categories closed. Whether a battery earns its cost on your rate
            plan is in{' '}
            <Link className={link} href="/battery/battery-payback-nem-3-california">
              battery payback under NEM 3.0
            </Link>
            , and sizing is in{' '}
            <Link className={link} href="/battery/how-many-batteries-do-i-need-california">
              how many batteries you need
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Budgeting for it before it fails</h2>
          <p>
            NREL&rsquo;s Annual Technology Baseline uses a residential operation and maintenance cost
            of &ldquo;$30/kWDC-yr for 2023,&rdquo; split into system-related ($27) and
            administration ($3) costs, and says analysts &ldquo;estimate O&amp;M costs can range
            from $0 to $40/kWDC-yr.&rdquo; It lists component failure among those costs (
            <a className={link} href={NREL_ATB}>
              NREL ATB
            </a>
            , checked September 23, 2026). For a 6 kW system, $30 per kW is about $180 a year on
            average. That is a planning benchmark, not a replacement price, and inverter costs come
            in one lump when they come.
          </p>
          <p className="mt-3">
            What else upkeep involves is in{' '}
            <Link className={link} href="/blog/solar-panel-maintenance-cost">
              solar panel maintenance cost in California
            </Link>
            , and how an inverter failure shows up first is in{' '}
            <Link className={link} href="/solar-problems/solar-panels-not-producing-enough">
              solar panels not producing enough
            </Link>
            . A replacement cost also belongs in any{' '}
            <Link className={link} href="/blog/solar-payback-period-california">
              payback calculation
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. We do
            not repair or replace equipment. Check the warranty or your lease provider first, and
            verify any contractor&rsquo;s license before work starts.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
