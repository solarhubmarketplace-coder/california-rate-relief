import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/where-does-california-get-its-electricity';
const url = `https://ratereliefca.com${path}`;
const title = 'Where Does California Get Its Electricity? 2024 Power Mix';
const h1 = 'Where Does California Get Its Electricity? The 2024 Power Mix, Imports and Daily Use';
const description =
  "In 2024 California's power came 34% from natural gas, 21% from solar and 62% from clean sources, per the CEC. Imports, hydro, nuclear and daily use.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('cecTseg2024', 'eiaBill2024', 'pgeBillExplainer', 'pgeCca', 'cpucRateComparison', 'paoQ2_2026');

const faqs = [
  {
    question: 'Where does California get most of its electricity?',
    answer:
      "From natural gas plants, which supplied 34.01% of California's total power mix in 2024, according to the California Energy Commission. Solar was second at 21.30%, followed by wind at 11.89%, large hydroelectric at 11.06% and nuclear at 9.92%.",
  },
  {
    question: 'How much of California electricity is imported?',
    answer:
      'In 2024, 62,157 gigawatt-hours, or about 22% of the 278,338 gigawatt-hours serving California, came from out-of-state plants, per the CEC. About three-quarters of the imports came from the Southwest and the rest from the Northwest.',
  },
  {
    question: 'How much electricity does California use per day?',
    answer:
      "The CEC's total system electric generation for 2024 was 278,338 gigawatt-hours, which averages about 760 gigawatt-hours a day. That excludes rooftop solar used on site. The average home used about 16.5 kWh a day in 2024, based on EIA data.",
  },
  {
    question: 'Does California still use coal?',
    answer:
      "Very little. Coal was 2.21% of the 2024 total power mix, and almost all of it was imported: 5,899 of the 6,162 gigawatt-hours came from out-of-state plants. In-state coal generation was 263 gigawatt-hours, 0.12% of in-state output.",
  },
  {
    question: 'What share of California electricity is clean?',
    answer:
      "The CEC counts 62% of California's 2024 power mix as clean energy, up from 58% in 2023. That category includes renewables such as solar, wind, geothermal, biomass and small hydro, plus large hydro and nuclear, which produce no greenhouse gases.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function WhereDoesCaliforniaGetItsElectricityPage() {
  return (
    <PublicLayout breadcrumbLabel="Where California gets its electricity" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="California electricity sources" kicker="California · Power supply" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                California got about a third of its electricity from natural gas in 2024, a fifth from solar, and most of the
                rest from wind, hydro and nuclear, according to the California Energy Commission. About 78% was generated in
                the state and 22% was imported. The CEC counts 62% of the mix as clean energy, up from 58% in 2023.
              </p>
              <p>
                These figures come from the CEC&apos;s 2024 Total System Electric Generation report, the latest full year it
                has published. They describe where the power serving California came from, not what any one utility bought:
                PG&amp;E, SCE, SDG&amp;E, the city utilities and the community choice providers each report their own mix. If
                you are here because of your bill, generation is only one part of it; our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to why California electric bills are high
                </Link>{' '}
                covers the rest.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="California electricity, 2024"
                  facts={[
                    { label: 'Total system generation', value: '278,338 GWh', note: 'Down 1% from 2023', source: { publisher: 'CEC', date: RATE_SOURCES_CHECKED, url: SRC.cecTseg2024.url } },
                    { label: 'Largest source', value: 'Natural gas, 34.01%', source: { publisher: 'CEC', date: RATE_SOURCES_CHECKED, url: SRC.cecTseg2024.url } },
                    { label: 'Solar share', value: '21.30%', note: 'Utility-scale; rooftop use excluded', source: { publisher: 'CEC', date: RATE_SOURCES_CHECKED, url: SRC.cecTseg2024.url } },
                    { label: 'Imported', value: '62,157 GWh (22%)', note: 'Down 5% from 2023', source: { publisher: 'CEC', date: RATE_SOURCES_CHECKED, url: SRC.cecTseg2024.url } },
                  ]}
                />
              </div>

              <h2>California electricity generation by source, 2024</h2>
              <p>
                The CEC adds up every utility-scale power plant in California, one megawatt or larger, and net imports from
                out-of-state plants serving California. The result for 2024 is below, sorted by share of the total mix.
              </p>
              <DataTable
                caption="California total power mix by fuel, 2024"
                columns={['Source', 'In-state (GWh)', 'Imported (GWh)', 'Total (GWh)', 'Share of total']}
                rows={[
                  ['Natural gas', '86,479', '8,176', '94,655', '34.01%'],
                  ['Solar', '50,666', '8,616', '59,283', '21.30%'],
                  ['Wind', '15,761', '17,341', '33,102', '11.89%'],
                  ['Large hydro', '25,222', '5,558', '30,780', '11.06%'],
                  ['Nuclear', '18,379', '9,234', '27,613', '9.92%'],
                  ['Geothermal', '10,453', '2,351', '12,803', '4.60%'],
                  ['Coal', '263', '5,899', '6,162', '2.21%'],
                  ['Biomass', '4,754', '640', '5,394', '1.94%'],
                  ['Small hydro', '3,969', '270', '4,240', '1.52%'],
                  ['Unspecified', '0', '4,051', '4,051', '1.46%'],
                  ['Other (waste heat, petroleum coke) and oil', '234', '22', '256', '0.09%'],
                  ['Total', '216,181', '62,157', '278,338', '100%'],
                ]}
                note={<>Source: California Energy Commission, 2024 Total System Electric Generation, checked September 23, 2026. The last row combines the CEC&apos;s &ldquo;Other&rdquo; (220 GWh) and &ldquo;Oil&rdquo; (36 GWh) lines. Rows may not add exactly because of rounding in the source.</>}
              />
              <p>
                Inside the state alone, natural gas made 40.00% of generation and solar 23.44%. Imports change the picture
                because they lean toward wind, nuclear and coal: more than half of the wind and almost all of the coal serving
                California was generated elsewhere. &ldquo;Unspecified&rdquo; is power bought on open markets that cannot be
                traced to one plant; the CEC notes it is typically a mix and may include renewables.
              </p>

              <h2>How much electricity California imports</h2>
              <p>
                Imports were 62,157 gigawatt-hours in 2024, down 5% from 2023. Most came from the Southwest, 46,344
                gigawatt-hours, with 15,813 from the Northwest. The CEC ties the Northwest decline to drought: BC Hydro, which
                traditionally sends power south, spent 2023 and 2024 importing about 20% of its own load, and imports from BC
                Hydro and the Bonneville Power Administration fell 70% from 2022 levels over those two years.
              </p>

              <h2>Hydro, solar and batteries in 2024</h2>
              <p>
                California&apos;s hydroelectric output fell 8% from a very wet 2023, which the CEC still ranks as the 11th
                highest of the past 25 years. Solar keeps growing at both scales. Beyond the utility-scale solar in the table,
                the CEC counts more than 17,400 megawatts of rooftop and other behind-the-meter solar, which it says displaces
                about 10% of the energy local utilities would otherwise supply. Statewide battery storage reached 15,040
                megawatts in 2024, including 2,515 megawatts of distributed systems at homes and businesses, which lets some
                of the midday solar be used in the evening peak.
              </p>

              <h2>How much electricity does California use per day?</h2>
              <p>
                Averaged over the 366 days of 2024, the CEC&apos;s total works out to about 760 gigawatt-hours a day. That is the
                power delivered from plants and imports; it leaves out rooftop solar used on site, which the CEC&apos;s demand
                forecast put at 26,765 gigawatt-hours for 2024. At the household level, EIA&apos;s 2024 data works out to about
                16.5 kWh a day for the average California home. Our{' '}
                <Link href="/blog/average-kwh-per-day-california" className={guideLink}>
                  average kWh per day guide
                </Link>{' '}
                breaks that down by type of home.
              </p>

              <h2>Does the power mix set your electricity price?</h2>
              <p>
                Only partly. The mix shapes the generation portion of a bill, which your utility or a community choice
                provider buys for you. Delivery charges for poles, wires and wildfire work are a separate part of the rate,
                and the CPUC Public Advocates Office names wildfire costs, transmission and distribution investment and
                rooftop solar incentives as the main reasons rates have risen. Those costs sit on top of whatever the power
                itself costs; for where that leaves California nationally, see{' '}
                <Link href="/blog/electricity-rates-highest-in-us-california" className={guideLink}>
                  how California&apos;s rates compare with other states
                </Link>
                .
              </p>
              <p>
                If a community choice aggregator supplies your electricity, it chooses the generation and PG&amp;E, SCE or
                SDG&amp;E still delivers it and sends the bill. The CPUC&apos;s{' '}
                <a href={SRC.cpucRateComparison.url} target="_blank" rel="noopener noreferrer" className={guideLink}>
                  rate comparison site
                </a>{' '}
                lists the providers at each ZIP code. For what solar at home does to your own share of the mix, and your bill,
                start with the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  current rates by utility
                </Link>{' '}
                and{' '}
                <Link href="/blog/do-solar-panels-work-at-night-california" className={guideLink}>
                  what happens to home solar after sunset
                </Link>
                .
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={RATE_SOURCES_CHECKED} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="electric_bills" currentPath={path} />
            </div>

            <SolarInquiry topic="California electricity sources and solar comparison" variant="bill" heading="Compare a Solar Plan With Your Electric Bill" />
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto max-w-3xl px-4">
        <TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>
    </PublicLayout>
  );
}
