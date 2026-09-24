// 2026-09-23 new page (claude/t3-misc-20260923) for "california solar duck
// curve" and "california solar energy curtailment" (Tier 3 build_page; the
// curtailment row folds in here instead of getting its own URL). Figures come
// from CAISO, the EIA, the California Energy Commission and the CPUC, all
// fetched on 2026-09-23. Annual curtailment totals were summed from CAISO's
// monthly chart data (curtailments-monthly.csv, file dated 9/10/2026); the
// CAISO page says the older production-and-curtailment reports stopped on
// 2025-06-01, so the page names the chart file it used.
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd, type FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const PATH = '/blog/solar-duck-curve-california';
const UPDATED = '2026-09-23';
const metaTitle = 'California Solar Duck Curve: What It Is and Why It Matters';
const metaDescription =
  'The duck curve is California’s midday dip in net demand as solar floods the grid, then the steep evening ramp. Curtailment, batteries and your bill.';

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    publishedTime: `${UPDATED}T00:00:00Z`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CAISO_DUCK = 'https://www.caiso.com/documents/flexibleresourceshelprenewables_fastfacts.pdf';
const CAISO_GRID = 'https://www.caiso.com/about/our-business/managing-the-evolving-grid';
const CAISO_CURT_CSV = 'https://www.caiso.com/content/charts/curtailments-monthly.csv';
const EIA_DUCK = 'https://www.eia.gov/todayinenergy/detail.php?id=56880';
const CEC_CAPACITY =
  'https://www.energy.ca.gov/data-reports/energy-almanac/california-electricity-data/electric-generation-capacity-and-energy';
const CEC_BATTERY =
  'https://www.energy.ca.gov/news/2026-08/california-surpasses-21000-megawatts-battery-resources-supporting-states';
const CPUC_NBT =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing';

const sources: Source[] = [
  { label: 'California ISO: What the duck curve tells us about managing a green grid (fast facts, 2016)', url: CAISO_DUCK },
  { label: 'California ISO: Managing the evolving grid (oversupply and curtailment)', url: CAISO_GRID },
  { label: 'California ISO: monthly wind and solar curtailment chart data (file dated September 10, 2026)', url: CAISO_CURT_CSV },
  { label: 'U.S. Energy Information Administration: duck curves are getting deeper in California (June 21, 2023)', url: EIA_DUCK },
  { label: 'California Energy Commission: Electric Generation Capacity and Energy (updated June 16, 2026)', url: CEC_CAPACITY },
  { label: 'California Energy Commission: California surpasses 21,000 megawatts of battery resources (August 7, 2026)', url: CEC_BATTERY },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: CPUC_NBT },
];

const CURTAILMENT: [string, string][] = [
  ['2019', '961,343'],
  ['2020', '1,587,497'],
  ['2021', '1,504,840'],
  ['2022', '2,449,247'],
  ['2023', '2,659,527'],
  ['2024', '3,423,376'],
  ['2025', '3,766,065'],
  ['2026, January to August', '4,948,794'],
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is the California duck curve?',
    answer:
      'It is the shape of California’s net load over a day: electricity demand minus the power coming from solar and wind. Net load sags in the middle of the day as solar output peaks, then climbs steeply around sunset when solar drops off and people get home. Drawn on a chart, the midday sag is the duck’s belly and the evening climb is its neck.',
  },
  {
    question: 'Why is it called the duck curve?',
    answer:
      'Because the chart looks like a duck. The California ISO, which runs most of the state’s grid, published net load scenarios in which the mid-afternoon belly deepens year after year and the evening ramp rises into an arch like a duck’s neck. The name stuck.',
  },
  {
    question: 'What is solar curtailment in California?',
    answer:
      'Curtailment is when the grid operator reduces how much a solar or wind plant generates because there is more renewable power than demand can use. The California ISO says its market does this automatically, and that it happens most in spring and fall, when mild, sunny, breezy days produce a lot of renewable power and demand is low.',
  },
  {
    question: 'How much solar does California curtail?',
    answer:
      'Adding up the California ISO’s monthly chart data, wind and solar curtailment was about 3.42 million megawatt-hours in 2024 and 3.77 million in 2025. From January through August 2026 it was already about 4.95 million, more than any full year in the data. The months with the most curtailment in 2026 were April and May.',
  },
  {
    question: 'Do batteries fix the duck curve?',
    answer:
      'They help. Batteries charge on midday solar and discharge into the evening ramp, which raises the belly and flattens the neck. The EIA reported California’s battery capacity grew from 0.2 gigawatts in 2018 to 4.9 gigawatts in April 2023, and the California Energy Commission counted 21,112 megawatts serving the grid on August 7, 2026. Curtailment has kept rising anyway, because solar capacity has grown too.',
  },
  {
    question: 'Does the duck curve affect my electric bill?',
    answer:
      'Yes, through rate design. Time-of-use rates price evening power higher than midday power, and the CPUC’s Net Billing Tariff credits rooftop solar exports at values that are usually lower than the retail rate but can rise above it on late summer evenings. Both reflect the same pattern: midday power is plentiful and evening power is scarce.',
  },
];

const h2 = 'text-2xl font-bold text-foreground mt-10 mb-4';
const p = 'leading-relaxed text-foreground/80 mb-4';
const link = 'text-primary underline underline-offset-2';

export default function SolarDuckCurveCalifornia() {
  return (
    <PublicLayout
      breadcrumbLabel="The California duck curve"
      breadcrumbParent={{ label: 'NEM 2.0 vs NEM 3.0', href: '/blog/nem-2-vs-nem-3-california' }}
    >
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline="The California solar duck curve: what it is and why it matters"
        url={`https://ratereliefca.com${PATH}`}
        datePublished={UPDATED}
        dateModified={UPDATED}
        description={metaDescription}
      />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-8 md:pt-12">
        <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog/nem-2-vs-nem-3-california" className="hover:text-primary">NEM 2.0 vs NEM 3.0</Link>
          <span aria-hidden="true">/</span>
          <span className="text-foreground">The duck curve</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">California grid explainer</p>
        <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">
          The California solar duck curve: what it is and why it matters
        </h1>
        <Byline updated={UPDATED} sourceCount={sources.length} />
        <p className="mt-5 text-lg leading-relaxed text-foreground/80">
          The duck curve is the daily shape of California&rsquo;s net load, meaning electricity demand
          minus what solar and wind supply. It sags in the middle of the day, when solar floods the
          grid, then shoots up around sunset, when solar fades and households turn things on. The sag
          is why the grid sometimes switches solar plants off, and the evening climb is why your
          utility charges more for evening power and credits rooftop solar exports less at midday.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          California Rate Relief is a referral service. We are not a licensed contractor.
        </p>

        <KeyFacts
          facts={[
            { label: 'Evening ramp CAISO planned for', value: '13,000 MW in ~3 hours', note: 'Spring scenario in its 2016 duck curve fact sheet.', source: { publisher: 'CAISO', date: UPDATED, url: CAISO_DUCK } },
            { label: 'Utility-scale solar in California, 2025', value: '23,749 MW', note: 'Plants 1 MW and larger; rooftop solar not included.', source: { publisher: 'CEC', date: UPDATED, url: CEC_CAPACITY } },
            { label: 'Wind and solar curtailed, Jan–Aug 2026', value: '4.95 million MWh', note: 'Summed from CAISO monthly chart data.', source: { publisher: 'CAISO', date: UPDATED, url: CAISO_CURT_CSV } },
            { label: 'Battery storage serving the grid', value: '21,112 MW', note: 'As of August 7, 2026.', source: { publisher: 'CEC', date: UPDATED, url: CEC_BATTERY } },
          ]}
          sourcesHref="#sources"
        />

        <div>
          <h2 className={h2}>What the duck curve shows</h2>
          <p className={p}>
            Grid operators care less about total demand than about <em>net load</em>, which the
            California ISO defines as the difference between forecast load and the expected output of
            variable resources such as solar and wind. Net load is what the rest of the fleet, from
            gas plants to hydro, imports and batteries, has to cover.
          </p>
          <p className={p}>
            On a sunny spring day, solar output climbs through the morning and peaks around midday,
            so net load drops into a deep trough: the duck&rsquo;s belly. Late in the afternoon solar
            falls away just as people come home, cook and run air conditioning, so net load rises
            sharply into the evening peak: the duck&rsquo;s neck. The California ISO&rsquo;s 2016
            fact sheet described a spring scenario in which it had to bring on an additional 13,000
            megawatts within about three hours as the sun set (
            <a href={CAISO_DUCK} className={link}>CAISO</a>).
          </p>

          <h2 className={h2}>Why the belly keeps getting deeper</h2>
          <p className={p}>
            Every new solar plant adds to midday supply and does little for the evening. The EIA put
            it plainly in 2023: as solar capacity in California continues to grow, &ldquo;the midday
            dip in net load is getting lower&rdquo; (<a href={EIA_DUCK} className={link}>EIA</a>).
            The California Energy Commission counts in-state solar plants of 1 megawatt and larger at
            14,981 megawatts at the end of 2021 and 23,749 megawatts at the end of 2025 (
            <a href={CEC_CAPACITY} className={link}>CEC</a>, updated June 16, 2026). Rooftop solar
            is not in that figure, and it deepens the belly too, because it lowers the demand the grid
            sees in the middle of the day. How big solar&rsquo;s share of the state&rsquo;s power has
            become is covered in{' '}
            <Link href="/blog/what-percentage-of-california-power-is-solar" className={link}>
              what percentage of California&rsquo;s power is solar
            </Link>
            .
          </p>

          <h2 className={h2}>Curtailment: when California switches solar off</h2>
          <p className={p}>
            When the belly gets too deep, there is more renewable power than the grid can use or
            export. The California ISO says that in those hours its market &ldquo;automatically
            reduces, or curtails, renewable generation to match supply with demand,&rdquo; and that
            it happens most often in spring and fall, when &ldquo;moderate weather, and sunny, breezy
            days produce an abundant supply of renewable generation&rdquo; (
            <a href={CAISO_GRID} className={link}>CAISO</a>). It applies to generators in the
            ISO&rsquo;s market, which are mostly large solar and wind farms, rather than to a home
            rooftop system.
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border">
            <table className="w-full text-left text-sm">
              <caption className="p-4 text-left font-semibold">
                Wind and solar curtailed on the California ISO grid, by year (MWh)
              </caption>
              <thead className="bg-muted">
                <tr>
                  <th className="p-3">Year</th>
                  <th className="p-3">Curtailed (MWh)</th>
                </tr>
              </thead>
              <tbody>
                {CURTAILMENT.map(([year, mwh]) => (
                  <tr key={year} className="border-t">
                    <th scope="row" className="p-3 font-normal">{year}</th>
                    <td className="p-3">{mwh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            These totals are our sums of the California ISO&rsquo;s monthly wind and solar
            curtailment chart data, in a file dated September 10, 2026 (
            <a href={CAISO_CURT_CSV} className={link}>CAISO</a>). Curtailment roughly quadrupled from
            2019 to 2025, and the first eight months of 2026 already exceeded any full year, with April
            and May each near 1.45 million MWh. The California ISO stopped publishing its separate
            production-and-curtailment reports on June 1, 2025, so check the chart file for newer
            months.
          </p>

          <h2 className={h2}>Batteries are flattening the neck</h2>
          <p className={p}>
            Batteries do the obvious thing: charge on cheap midday solar and discharge into the
            evening ramp. The EIA reported that California&rsquo;s battery capacity grew from 0.2
            gigawatts in 2018 to 4.9 gigawatts in April 2023. By August 7, 2026, the California Energy
            Commission counted 21,112 megawatts of battery storage serving the state&rsquo;s grid,
            about 3,000 megawatts of it in more than 300,000 smaller systems at homes, schools, farms
            and businesses (<a href={CEC_BATTERY} className={link}>CEC</a>). The year-by-year build-out
            is on{' '}
            <Link href="/battery/battery-storage-capacity-california" className={link}>
              California battery storage capacity
            </Link>
            . The curtailment numbers above show that batteries have not kept pace with midday solar
            in spring, but they carry a growing share of the evening peak.
          </p>

          <h2 className={h2}>What the duck curve means for your electric bill</h2>
          <p className={p}>
            The California ISO&rsquo;s own list of fixes included time-of-use rates that encourage
            daytime use, more storage and more electric vehicles (
            <a href={CAISO_DUCK} className={link}>CAISO</a>). All three now show up on a California
            bill. Time-of-use plans charge the most in the late afternoon and evening; the hours for
            each utility are in{' '}
            <Link href="/blog/electricity-peak-hours-california" className={link}>
              electricity peak hours in California
            </Link>
            .
          </p>
          <p className={p}>
            Rooftop solar is paid the same way. For PG&amp;E, SCE and SDG&amp;E customers on the Net
            Billing Tariff, the CPUC credits exports using its Avoided Cost Calculator values, which
            it says are &ldquo;usually lower than the retail rate&rdquo; but &ldquo;can rise above the
            retail rate on late summer evenings.&rdquo; The CPUC also reports that nearly 70 percent of
            net billing customers had paired a battery with their solar by the end of 2024 (
            <a href={CPUC_NBT} className={link}>CPUC</a>). In other words, the duck curve is why a new
            system&rsquo;s midday exports earn little and why a battery that shifts that energy into
            the evening is now the usual design. The hourly values are in{' '}
            <Link href="/blog/nem-3-export-rates-california" className={link}>
              NEM 3.0 export rates by hour
            </Link>
            , and the tariff change itself is in{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              NEM 2.0 versus NEM 3.0
            </Link>
            .
          </p>

          <h2 className={h2}>What you can do with it at home</h2>
          <p className={p}>
            You cannot change the grid&rsquo;s shape, but you can stop paying for it. Run the
            dishwasher, laundry, pool pump and EV charging in the middle of the day where your plan
            prices those hours lower, and move as little as you can into the evening peak. If you
            have solar on net billing, using your own midday output is worth more than exporting it.
            If you are pricing a battery, size it to your evening use, not to a sales chart; the
            method is in{' '}
            <Link href="/battery/how-many-batteries-do-i-need-california" className={link}>
              how many batteries you actually need
            </Link>
            , and whether it pays back on your rate is in the{' '}
            <Link href="/battery/battery-payback-nem-3-california" className={link}>
              battery payback analysis
            </Link>
            .
          </p>
        </div>

        <SourceList sources={sources} sourceCheckedDate={UPDATED} />
        <FaqBlock items={faqs} schema={false} heading="Duck curve and curtailment questions" />
        <HubSpokeLinks hub="nem" currentPath={PATH} />
        <div className="mt-10">
          <SolarInquiry topic="The California duck curve and your solar bill" />
        </div>
        <AuthorBio
          domain="crr"
          palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }}
        />
      </main>
      <Footer />
    </PublicLayout>
  );
}
