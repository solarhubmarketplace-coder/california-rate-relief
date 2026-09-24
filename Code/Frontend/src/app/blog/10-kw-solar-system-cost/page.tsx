// 2026-09-23 new page (topical-authority wave, Tier 2, agent costfin).
// Answers "10 kw solar system cost" / "10kw solar system cost california".
// Cost figures come only from primary data fetched 2026-09-23:
//   - California Distributed Generation Statistics (CPUC-authorized): average
//     cost per watt (AC) for residential solar-only systems of 10 kW or more,
//     PG&E, SCE and SDG&E, by year of permission to operate, from the site's
//     own cost-per-watt chart endpoint (data through 2026-05-31);
//   - Berkeley Lab, Distributed Solar & Storage 2026 Data Update (installer
//     spread, system sizes, storage premium), statements quoted from its text.
// The dollar figures for a 10 kW system are this page's arithmetic on those
// per-watt averages and are labeled as such. No production figure is given:
// NREL's PVWatts API was not reachable from here, so the page sends readers to
// run it for their own address instead of quoting a number.
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { CostFinGuideShell } from '@/components/growth/CostFinGuideShell';
import type { Source } from '@/components/growth/DecisionPage';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';

const PATH = '/blog/10-kw-solar-system-cost';
const URL = `https://ratereliefca.com${PATH}`;
const UPDATED = '2026-09-23';
const link = 'text-primary underline underline-offset-2';

const S = {
  dgstats: 'https://www.californiadgstats.ca.gov/charts/nem/',
  lbnl2026:
    'https://emp.lbl.gov/sites/default/files/2026-08/Distributed%20Solar%20%26%20Storage-2026%20Data%20Update_FINAL.pdf',
  cpucGuide:
    'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide',
  cpucNem: 'https://www.cpuc.ca.gov/NEM/',
  irs25d: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
  smudSolar: 'https://www.smud.org/Going-Green/Solar-for-Your-Home',
  pvwatts: 'https://pvwatts.nrel.gov/',
} as const;

const sources: Source[] = [
  { label: 'California Distributed Generation Statistics (CPUC-authorized): residential cost per watt, systems under and over 10 kW, PG&E, SCE and SDG&E, data through May 31, 2026', url: S.dgstats },
  { label: 'Berkeley Lab: Distributed Solar and Storage, 2026 Data Update (August 2026)', url: S.lbnl2026 },
  { label: 'CPUC: California Solar Consumer Protection Guide (sizing and bids)', url: S.cpucGuide },
  { label: 'CPUC: Net energy metering and the Net Billing Tariff', url: S.cpucNem },
  { label: 'IRS: Residential Clean Energy Credit', url: S.irs25d },
  { label: 'SMUD: Solar for your home (system size limits)', url: S.smudSolar },
  { label: 'NREL: PVWatts Calculator', url: S.pvwatts },
];

const metaTitle = '10 kW Solar System Cost in California: What 2025 Data Shows';
const metaDescription =
  'At the 2025 California average for home systems of 10 kW or more ($4.26/W), 10 kW is about $42,600 before incentives. By utility, installer and size.';

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
    question: 'How much does a 10 kW solar system cost in California?',
    answer:
      'About $42,600 before incentives, if you take the 2025 average reported to California Distributed Generation Statistics for residential solar-only systems of 10 kW or more at PG&E, SCE and SDG&E: $4.26 per watt. That is our arithmetic on a self-reported average, not a quote. The average was lower at SCE ($3.42 per watt) and higher at SDG&E ($5.11).',
  },
  {
    question: 'How much is a 10 kW solar system with a battery?',
    answer:
      'More, and it should be priced as a separate line. Berkeley Lab found that among cash-purchase residential systems installed in 2025, median prices were $2.1 per watt higher for solar paired with storage than for solar alone. Most of its paired-system data came from California. On 10 kW that difference is about $21,000, but ask for the battery’s price on its own line.',
  },
  {
    question: 'Is there a tax credit on a 10 kW system in 2026?',
    answer:
      'Not for a homeowner who buys it. The IRS says the Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025. The price you are quoted is the price you pay unless a program such as SGIP applies to a battery.',
  },
  {
    question: 'How many solar panels are in a 10 kW system?',
    answer:
      'Divide 10,000 watts by the rating of the panels on the quote. With 400-watt panels that is 25 panels; with higher-rated panels, fewer. The quote should list the panel model, its wattage and the count.',
  },
  {
    question: 'Is 10 kW too big for my house?',
    answer:
      'It depends on your use, not your roof. The CPUC says a system is typically sized to around 80 to 85% of the previous year’s electricity use, and that Net Billing customers are limited to no more than 150% of the past 12 months of use, with an attestation that use will rise needed to oversize. SMUD caps systems at 110% of use, or 120% with a battery.',
  },
];

const byUtility: [string, string, string, string, string][] = [
  ['PG&E', '$4.08', '2,173', 'about $40,800', '$5.19'],
  ['SCE', '$3.42', '664', 'about $34,200', '$4.15'],
  ['SDG&E', '$5.11', '1,129', 'about $51,100', '$5.98'],
  ['All three', '$4.26', '3,966', 'about $42,600', '$5.11'],
];

export default function TenKwSolarCostPage() {
  return (
    <PublicLayout
      breadcrumbLabel="10 kW solar system cost"
      breadcrumbParent={{ label: 'Solar cost and value', href: '/solar-panels-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="How much does a 10 kW solar system cost in California?"
        url={URL}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <CostFinGuideShell
        eyebrow="Solar cost"
        title="How much does a 10 kW solar system cost in California?"
        crumbs={[{ label: 'Solar cost and value', href: '/solar-panels-california' }]}
        crumbLabel="10 kW solar system cost"
        updated={UPDATED}
        sourceCheckedDate={UPDATED}
        sources={sources}
        faqs={faqs}
        hub="cost_value"
        path={PATH}
        intro={
          <>
            <p>
              About $42,600 before incentives, at the 2025 average that California homeowners and
              installers reported for solar-only systems of 10 kW or more: $4.26 per watt across
              PG&amp;E, SCE and SDG&amp;E. The average ran from $3.42 per watt at SCE to $5.11 at
              SDG&amp;E, and individual installers&rsquo; prices vary more than that. Treat it as a
              benchmark for checking a quote, not a price.
            </p>
            <p className="mt-3">
              For other sizes and what drives the price, see{' '}
              <Link className={link} href="/solar-panels-california">
                California solar panel cost and sizing
              </Link>
              .
            </p>
          </>
        }
        keyFacts={[
          {
            label: 'CA average, 10 kW and up, 2025',
            value: '$4.26/W',
            note: 'Residential solar-only, PG&E, SCE, SDG&E; 3,966 systems.',
            source: { publisher: 'CA DG Stats', date: UPDATED, url: S.dgstats },
          },
          {
            label: '10 kW at that average',
            value: 'About $42,600',
            note: 'Our arithmetic, before incentives; per AC watt.',
            source: { publisher: 'CA DG Stats', date: UPDATED, url: S.dgstats },
          },
          {
            label: 'Same, Jan to May 2026',
            value: '$4.35/W',
            note: '772 systems so far this year.',
            source: { publisher: 'CA DG Stats', date: UPDATED, url: S.dgstats },
          },
          {
            label: 'Installer medians, 2025',
            value: '$2.4–$6.3/W',
            note: 'Top 100 U.S. residential installers, host-owned.',
            source: { publisher: 'Berkeley Lab', date: UPDATED, url: S.lbnl2026 },
          },
        ]}
        inquiry={<SolarInquiry topic="10 kW solar system quote check" market="CA" />}
      >
        <section>
          <h2>What a 10 kW system costs, from California&rsquo;s own data</h2>
          <p>
            California Distributed Generation Statistics publishes the average reported cost per watt
            of residential solar systems at PG&amp;E, SCE and SDG&amp;E, split into systems under 10 kW
            and systems of 10 kW or more. For 2025, systems of 10 kW or more averaged $4.26 per watt,
            which puts a 10 kW system at about $42,600 before incentives. The table shows each utility
            and the smaller-system average beside it.
          </p>
          <div className="mt-3 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Average reported residential cost per watt, systems with permission to operate in 2025
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Utility</th>
                  <th className="p-3">10 kW or more, $/W</th>
                  <th className="p-3">Systems</th>
                  <th className="p-3">10 kW at that average</th>
                  <th className="p-3">Under 10 kW, $/W</th>
                </tr>
              </thead>
              <tbody>
                {byUtility.map((r) => (
                  <tr key={r[0]} className="border-t">
                    <th scope="row" className="p-3 align-top">{r[0]}</th>
                    <td className="p-3 align-top">{r[1]}</td>
                    <td className="p-3 align-top">{r[2]}</td>
                    <td className="p-3 align-top">{r[3]}</td>
                    <td className="p-3 align-top">{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Source:{' '}
            <a className={link} href={S.dgstats}>
              California DG Stats, cost per watt chart
            </a>
            , residential, nominal dollars, data through May 31, 2026, checked September 23, 2026. The
            &ldquo;10 kW at that average&rdquo; column is our multiplication, not a published figure.
            For January to May 2026, the all-utility average for 10 kW and up was $4.35 per watt across
            772 systems; PG&amp;E had no 2026 figure in the chart.
          </p>
        </section>

        <section>
          <h2>How to read those averages</h2>
          <p>
            Four notes from DG Stats itself change how you should use the numbers:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Self-reported.</strong> &ldquo;All cost values are self-reported by applicants,
              and no additional verification has been performed.&rdquo; The top and bottom 1% are
              removed.
            </li>
            <li>
              <strong>Solar only.</strong> The chart &ldquo;samples single-technology applications that
              did not participate in a state subsidy program,&rdquo; so systems sold with a battery are
              not in these averages.
            </li>
            <li>
              <strong>AC watts.</strong> Solar cost per watt is &ldquo;represented using AC
              capacity.&rdquo; Most quotes state the system in DC panel watts. Berkeley Lab calls the
              ratio of panel to inverter rating the inverter loading ratio; ask your quote for both
              numbers before comparing.
            </li>
            <li>
              <strong>Averages, not medians.</strong> A few expensive systems pull an average up, and
              the averages here are for whole utility territories.
            </li>
          </ul>
          <p className="mt-3">
            The CPUC&rsquo;s consumer guide points shoppers to the same database to see recent
            installation costs by ZIP code and adds that &ldquo;these costs are not verified by the
            government&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            ). City-by-city permit fees and cost context are in{' '}
            <Link className={link} href="/solar-cost">
              solar panel cost by California city
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Why a 10 kW system can cost less per watt, and why yours might not</h2>
          <p>
            In the California data, systems of 10 kW or more averaged less per watt than smaller
            systems in every year from 2015 to 2026; in 2025 the gap was $4.26 against $5.11 (
            <a className={link} href={S.dgstats}>
              DG Stats
            </a>
            ).
          </p>
          <p className="mt-3">
            Berkeley Lab is more cautious about recent national data: &ldquo;Economies of scale are
            not especially evident among residential systems installed in 2025; other confounding
            factors may dominate the visual trends, though prior econometric analyses have shown clear
            effects.&rdquo; It also found that soft costs and other balance-of-system costs were
            &ldquo;roughly 80% of the total installed price&rdquo; of residential systems in 2025 (
            <a className={link} href={S.lbnl2026}>
              Berkeley Lab, August 2026
            </a>
            ). So a larger system is not automatically a better deal per watt; the installer and the
            job matter more.
          </p>
        </section>

        <section>
          <h2>How much installers&rsquo; prices differ</h2>
          <p>
            A lot. Berkeley Lab ranked the top 100 U.S. residential installers by the median price of
            their host-owned systems in 2025: medians &ldquo;ranged from $2.4 to $6.3/W,&rdquo;
            &ldquo;roughly 60% had median prices below $4/W, and almost 25% had median prices less
            than $3/W, while about 10% had median prices greater than $5/W.&rdquo; Within one
            installer, project prices typically spanned $1 to $2 per watt. Berkeley Lab also says
            California, which dominates its sample, &ldquo;is a relatively low-cost state for
            residential PV&rdquo; (
            <a className={link} href={S.lbnl2026}>
              Berkeley Lab, August 2026
            </a>
            ).
          </p>
          <p className="mt-3">
            On 10 kW, a $1 per watt difference is $10,000. That is why the CPUC tells shoppers to get
            bids from at least three qualified providers and warns that &ldquo;the cheapest bid is not
            necessarily the best option&rdquo; (
            <a className={link} href={S.cpucGuide}>
              CPUC
            </a>
            ). How to find and check installers is in{' '}
            <Link className={link} href="/best-solar-companies-california">
              comparing solar companies in California
            </Link>
            .
          </p>
        </section>

        <section>
          <h2>Is 10 kW the right size?</h2>
          <p>
            Probably larger than average. Berkeley Lab says the median U.S. residential system was 7.7
            kW in 2025, &ldquo;with most systems ranging from roughly 5-12 kW&rdquo; (
            <a className={link} href={S.lbnl2026}>
              Berkeley Lab
            </a>
            ). Size should follow your electricity use:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              The CPUC says, &ldquo;Typically, a system is sized to around 80-85 percent of your
              electricity use from the previous year,&rdquo; and that it is &ldquo;generally not in
              your financial interest&rdquo; to install a system that produces more than you use in a
              year (
              <a className={link} href={S.cpucGuide}>
                CPUC
              </a>
              ).
            </li>
            <li>
              At PG&amp;E, SCE and SDG&amp;E, the CPUC says Net Billing customers are limited to no
              more than 150% of the past 12 months of use, and must attest that their use will rise to
              install an oversized system. Exported power is credited at values it says are
              &ldquo;usually lower than the retail rate&rdquo; (
              <a className={link} href={S.cpucNem}>
                CPUC
              </a>
              ).
            </li>
            <li>
              SMUD allows up to 110% of your last 12 months of use, or 120% on its Solar and Storage
              Rate with a battery (
              <a className={link} href={S.smudSolar}>
                SMUD
              </a>
              ).
            </li>
          </ul>
          <p className="mt-3">
            How much a 10 kW array produces depends on your roof&rsquo;s direction, tilt, shading and
            location. Run your address through NREL&rsquo;s free{' '}
            <a className={link} href={S.pvwatts}>
              PVWatts calculator
            </a>{' '}
            and compare its annual kWh with the production on your quote and with your last 12 months of
            use. A planned EV or heat pump is a reason to size up; a smaller bid is worth pricing too.
          </p>
        </section>

        <section>
          <h2>What the price does and does not include</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>No federal credit.</strong> The IRS says the homeowner credit &ldquo;is not
              available for any property placed in service after December 31, 2025&rdquo; (
              <a className={link} href={S.irs25d}>
                IRS
              </a>
              ). A 2026 quote that subtracts 30% is using a credit you cannot claim.
            </li>
            <li>
              <strong>A battery is extra.</strong> Berkeley Lab found paired solar-plus-storage cash
              purchases had median prices $2.1 per watt higher than solar alone in 2025, and that about
              80% of its paired-system price data came from California (
              <a className={link} href={S.lbnl2026}>
                Berkeley Lab
              </a>
              ). Put the battery on its own line; see{' '}
              <Link className={link} href="/battery/home-battery-cost-california">
                home battery cost in California
              </Link>
              .
            </li>
            <li>
              <strong>Roof and electrical work.</strong> A roof replacement or main panel upgrade can be
              bundled into the price. Ask for each as a separate line so the solar price per watt
              compares.
            </li>
            <li>
              <strong>Loans cost more up front.</strong> Berkeley Lab found loan-financed systems
              &ldquo;considerably higher priced than cash-purchase systems, potentially due in part to
              loan origination fees rolled into the up-front price.&rdquo; Compare the cash price
              first; see{' '}
              <Link className={link} href="/solar-problems/solar-dealer-fees-explained">
                solar dealer fees explained
              </Link>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2>Check a 10 kW quote in three steps</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            <li>
              Divide the cash price of the solar alone by its size in watts. Note whether the size is
              DC or AC.
            </li>
            <li>
              Compare the result with your utility&rsquo;s 2025 average above and with Berkeley
              Lab&rsquo;s installer range. Well above both is a reason to ask why.
            </li>
            <li>
              Put the quote, your bill and your usage into the{' '}
              <Link className={link} href="/tools/solar-panel-calculator">
                solar quote calculator
              </Link>
              , and work out{' '}
              <Link className={link} href="/blog/solar-payback-period-california">
                your payback period
              </Link>
              . If you would rather not buy, compare{' '}
              <Link className={link} href="/blog/ppa-loan-vs-solar-lease-vs-cash-california">
                a lease, PPA or loan
              </Link>{' '}
              on the same system.
            </li>
          </ol>
        </section>

        <section>
          <h2>A referral request is optional and separate</h2>
          <p>
            California Rate Relief is a referral service. We are not a licensed contractor. The
            figures on this page are published averages and our arithmetic on them; a referral request
            does not produce a price, and only a written quote for your home does.
          </p>
        </section>
      </CostFinGuideShell>
    </PublicLayout>
  );
}
