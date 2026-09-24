import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { FaqJsonLd } from '@/components/shared/FaqJsonLd';
import { RelatedGuides } from '@/components/shared/RelatedGuides';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { Byline } from '@/components/trust/Byline';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';

const path = '/blog/nem-3-export-rates-california';
const url = `https://ratereliefca.com${path}`;
const title = 'NEM 3.0 Export Rates in California: 2026 Values by Hour';
const h1 = 'NEM 3.0 Export Rates in California: What Your Solar Earns in 2026';
const description =
  'Under NEM 3.0, PG&E pays under 1¢/kWh for an April noon export but about $1.15 at 7 p.m. in August. 2026 export values by hour for PG&E, SCE and SDG&E.';
const updated = '2026-09-23';
const hub = { label: 'NEM 3.0 and net billing', href: '/blog/nem-2-vs-nem-3-california' };
const link = 'text-primary underline underline-offset-2';

// PG&E 2026 weekday Energy Export Credit values (Energy Produced + Energy
// Delivered, $/kWh), read from PG&E's price sheets for each interconnection
// application year. Averages are simple means of the sheet's hourly cells, not
// weighted by when a system exports.
const pgeRows: [string, string, string][] = [
  ['January, 12–1 p.m.', '$0.067', '$0.061'],
  ['April, 12–1 p.m.', '$0.0085', '$0.0105'],
  ['August, 12–1 p.m.', '$0.068', '$0.071'],
  ['January, 7–8 p.m.', '$0.094', '$0.069'],
  ['July, 7–8 p.m.', '$0.46', '$0.51'],
  ['August, 7–8 p.m.', '$1.15', '$1.83'],
  ['September, 7–8 p.m.', '$0.60', '$2.52'],
  ['All months, 10 a.m.–3 p.m. average', '$0.046', '$0.053'],
  ['All months, 4–9 p.m. average', '$0.199', '$0.240'],
];

const sources: Source[] = [
  { label: 'PG&E: Solar Billing Plan', url: 'https://www.pge.com/en/clean-energy/solar/getting-started-with-solar/solar-billing-plan.html' },
  { label: 'PG&E: Energy Export Credit price sheets, 2023–2026 (ZIP of PDFs)', url: 'https://www.pge.com/assets/pge/docs/vanities/PGE-EEC-Price-Sheets.zip' },
  { label: 'SCE: How Solar Billing Plans work', url: 'https://www.sce.com/clean-energy-efficiency/solar-generating-your-own-power/billing-incentives/solar-billing-plan' },
  { label: 'SCE: Understanding solar export pricing', url: 'https://www.sce.com/customer-service-center/help-center/solar/solar-billing-plan/understanding-export-pricing' },
  { label: 'SDG&E: Understanding your solar bill', url: 'https://www.sdge.com/solar/solar-billing-plan/UnderstandingYourSolarBill' },
  { label: 'CPUC: Net Energy Metering and Net Billing', url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing' },
  { label: 'CPUC Decision 22-12-056 (net billing tariff)', url: 'https://docs.cpuc.ca.gov/PublishedDocs/Published/G000/M500/K043/500043682.PDF' },
  { label: 'Cal Advocates: Q2 2026 Electric Rates Report', url: 'https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf' },
];

const faqs = [
  {
    question: 'What are NEM 3.0 export rates in California?',
    answer:
      'They are hourly credits based on the CPUC’s Avoided Cost Calculator, set for each month and hour and split between weekdays and weekends. PG&E’s 2026 values for 2025 and 2026 applicants range from under a cent per kWh at midday in spring to about $1.15 on August weekday evenings. SCE’s 2025 examples average about $0.06 per kWh for summer daytime exports and $0.21 for summer evenings.',
  },
  {
    question: 'How much does PG&E pay for exported solar under NEM 3.0?',
    answer:
      'It depends on the hour and on the year you applied. For 2025 and 2026 applicants, PG&E’s 2026 price sheet averages about $0.046 per kWh across weekday hours from 10 a.m. to 3 p.m. and about $0.199 from 4 to 9 p.m., generation and delivery credits combined. Those are simple averages of the sheet, not what a typical system earns.',
  },
  {
    question: 'Are NEM 3.0 export rates locked in?',
    answer:
      'For nine years. PG&E tells customers to use the price sheet for the year they submitted their interconnection application, and SCE says its values are fixed for nine years by application year. The CPUC guarantees the original customer the tariff for nine years.',
  },
  {
    question: 'Is there a bonus on NEM 3.0 export credits?',
    answer:
      'For residential PG&E and SCE customers who apply before the end of 2027, yes. The CPUC’s starting adders were $0.022 per kWh at PG&E and $0.040 at SCE for non-CARE households, and $0.090 and $0.093 for CARE households, stepping down 20 percent each year. SDG&E customers don’t get one.',
  },
  {
    question: 'Why are NEM 3.0 export rates so low at midday?',
    answer:
      'Because they reflect what the grid would otherwise pay for that energy, and midday is when California has the most solar. The CPUC says export values are usually below retail rates but can rise above them on late summer evenings, when demand is high and solar is fading.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
  twitter: crrTwitter(title, description),
};

export default function Nem3ExportRatesPage() {
  return (
    <PublicLayout breadcrumbLabel="NEM 3.0 export rates" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={h1} url={url} dateModified={updated} description={description} />
      <FaqJsonLd items={faqs} />
      <Header />
      <main className="bg-background py-12 md:py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {[{ label: 'Home', href: '/' }, hub].map((c) => (
                <span key={c.href} className="flex items-center gap-2">
                  <Link href={c.href} className="hover:text-primary">{c.label}</Link>
                  <span aria-hidden="true">/</span>
                </span>
              ))}
              <span className="text-foreground">{'NEM 3.0 export rates'}</span>
            </nav>
            <header>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl">{h1}</h1>
              <Byline updated={updated} sourceCount={sources.length} />
            </header>

            <div className="mt-6 space-y-5 text-foreground/85 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_p]:leading-relaxed">
              <p className="text-lg">
                Under NEM 3.0, California’s net billing tariff, your utility credits exported solar at a
                value that changes every hour of every month. Midday exports in spring earn almost nothing:
                PG&amp;E’s 2026 price sheet pays about $0.0085 per kWh for a weekday noon export in April.
                Summer evening exports earn the most, about $1.15 per kWh at 7 p.m. on an August weekday.
                What you earn depends on your utility, the year you applied, and when your system sends power
                to the grid.
              </p>
              <p>
                Below are the published numbers for PG&amp;E, the examples SCE gives, how SDG&amp;E splits its
                credits, the bonus that runs out after 2027, and what the pattern means for how you use solar.
                For background on the tariff itself, see the{' '}
                <Link href={hub.href} className={link}>NEM 2.0 vs. NEM 3.0 comparison</Link>.
              </p>
              <p className="text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>

              <HeroQuickCheck topic="NEM 3.0 export credits" className="my-6" />

              <KeyFacts
                sourcesHref="#sources"
                facts={[
                  { label: 'PG&E, April weekday noon', value: 'About $0.0085/kWh', note: '2026 values, 2025–2026 applicants, produced + delivered. PG&E price sheet.' },
                  { label: 'PG&E, August weekday 7 p.m.', value: 'About $1.15/kWh', note: 'Same sheet. The highest weekday value for those applicants.' },
                  { label: 'SCE summer, 2025 examples', value: '$0.06 day / $0.21 evening', note: 'Evening is 4–9 p.m. SCE Solar Billing Plan page.' },
                  { label: 'Retail average, June 2026', value: '33.7¢ PG&E / 34.4¢ SCE / 45.5¢ SDG&E', note: 'Residential, excluding Climate Credit. Cal Advocates Q2 2026 report.' },
                ]}
              />

              <h2>How NEM 3.0 export credits are set</h2>
              <p>
                The CPUC says net billing credits exports at a rate reflecting the value of that energy to the
                grid, drawn from its Avoided Cost Calculator, which is usually lower than retail rates but can
                rise above them on late summer evenings. Its 2022 decision, D.22-12-056, has the utilities
                publish average monthly values for each hour, separated into weekdays and weekends, for each
                year’s group of new customers.
              </p>
              <p>
                Those values are locked for nine years. PG&amp;E tells customers to use the price sheet for the
                year they submitted their interconnection application, and SCE’s export pricing page lists
                separate sets for 2023, 2024, 2025 and 2026 applicants, each fixed for nine years. After that,
                SCE says, the prices may change.
              </p>
              <p>
                Each credit has two parts. PG&amp;E calls them Energy Produced and Energy Delivered; SCE calls
                them generation and delivery. If a community choice aggregator supplies your electricity, the
                generation part comes from the CCA’s own pricing: PG&amp;E’s sheet says its Energy Produced
                credits apply only to customers with bundled PG&amp;E generation, and SCE says to check with
                your CCA.
              </p>

              <h2>PG&amp;E export values for 2026</h2>
              <p>
                PG&amp;E publishes a price sheet for each application year. The table uses the 2026 weekday
                values, adding the Energy Produced and Energy Delivered credits for each hour. Customers who
                applied in 2025 and 2026 share one set of values; 2023 and 2024 applicants share another.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">PG&amp;E 2026 weekday export credit values by application year</caption>
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-3">Weekday hour</th>
                      <th className="p-3">Applied 2025–2026</th>
                      <th className="p-3">Applied 2023–2024</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pgeRows.map(([hour, newer, older]) => (
                      <tr key={hour} className="border-t border-border">
                        <td className="p-3">{hour}</td>
                        <td className="p-3">{newer}</td>
                        <td className="p-3">{older}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">
                Per kWh, Energy Produced plus Energy Delivered, from PG&amp;E’s 2026 Energy Export Credit price
                sheets. Averages are simple means of the sheet’s hourly values, not weighted by when a system
                actually exports.
              </p>
              <p>
                Two patterns stand out. Spring middays are nearly worthless, because the grid has the most solar
                then; averaged over 10 a.m. to 3 p.m., April comes to about a cent or less. And the value
                concentrates in a few late-summer evening hours: for 2023 and 2024 applicants, a September
                weekday export at 7 p.m. is worth about $2.52 per kWh. Weekend middays in spring run lower
                still, with some hours at or near zero on the sheet.
              </p>

              <h2>SCE export values</h2>
              <p>
                SCE’s Solar Billing Plan page gives 2025 examples by season. In summer, exports earn about $0.06
                per kWh during the day, $0.21 in the 4–9 p.m. evening window, and $0.12 overnight. In winter,
                about $0.03, $0.09 and $0.10. SCE’s export pricing page has the full hourly files for each
                application year, built from the Avoided Cost Calculator approved as of January 1 of the year
                they were calculated.
              </p>
              <p>
                At true-up, SCE says surplus exports beyond your annual use are paid at a net surplus
                compensation rate of about $0.02 per kWh. Our{' '}
                <Link href="/blog/sce-nem-2" className={link}>SCE NEM 2.0 and Solar Billing Plan guide</Link>{' '}
                covers the rest of the SCE rules.
              </p>

              <h2>SDG&amp;E: two kinds of credit</h2>
              <p>
                SDG&amp;E issues Generation Export Credits and Delivery Export Credits separately, and says each
                can offset only the matching import charge. Neither can offset what SDG&amp;E calls required
                charges, including the Base Services Charge, customer and meter charges, non-bypassable charges
                and fixed charges. At the annual true-up, if your exports exceeded your imports, SDG&amp;E
                applies net surplus compensation rates to the excess instead, which it says prevents double
                compensation for the same exports.
              </p>

              <h2>The export bonus, and its 2027 deadline</h2>
              <p>
                The CPUC added a temporary bonus to export credits for residential PG&amp;E and SCE customers,
                called the ACC Plus adder. Decision 22-12-056 set the starting amounts at $0.022 per kWh for
                PG&amp;E non-CARE customers and $0.090 for CARE customers, and $0.040 and $0.093 at SCE, with
                the adder falling 20 percent at the end of each calendar year until it reaches zero. Customers
                lock in the amount in effect when they enroll for nine years. SCE describes the current bonus
                as about $0.04, or about $0.09 for income-qualified customers, for those who enroll before 2028.
              </p>
              <p>
                SDG&amp;E customers don’t receive the adder. The CPUC says that is because SDG&amp;E’s higher
                rates already produce more bill savings, and customers required to add solar under the building
                code, such as new construction, don’t receive it either.
              </p>

              <h2>What the export values mean for how you use solar</h2>
              <p>
                Compare the export numbers with what you pay. The California Public Advocates Office put the
                residential average rate in June 2026 at 33.7 cents per kWh for PG&amp;E, 34.4 for SCE and 45.5
                for SDG&amp;E, excluding the Climate Credit. A kilowatt-hour of solar you use at home is worth
                roughly your retail rate for that hour. The same kilowatt-hour exported at midday is worth a few
                cents or less.
              </p>
              <p>
                That is why the CPUC says customers maximize savings under net billing by adding battery
                storage, so they can use or export stored energy in high-value hours, and why it reports that
                nearly 70 percent of net billing customers had paired a battery with solar by the end of 2024.
                Without a battery, shift what you can into sunny hours: laundry, dishwashing, pool pumps, EV
                charging and pre-cooling. The{' '}
                <Link href="/battery/battery-payback-nem-3-california" className={link}>battery payback guide</Link>{' '}
                runs the storage side of the numbers.
              </p>

              <FaqBlock items={faqs} schema={false} id="faq" />
              <SourceList sources={sources} sourceCheckedDate={updated} />

              <RelatedGuides
                heading="Using the export numbers"
                links={[
                  { href: '/blog/nem-3-california-still-worth-it', label: 'Whether solar still makes sense under NEM 3.0' },
                  { href: '/battery/how-many-batteries-do-i-need-california', label: 'Sizing storage around your evening load' },
                  { href: '/blog/pge-time-of-use-rates-2026', label: 'PG&E time-of-use rates, the other side of the math' },
                  { href: '/blog/why-are-my-nem-charges-so-high', label: 'Why NEM charges climb on a solar bill' },
                  { href: '/battery/pge-solar-battery-rebate', label: 'Battery incentives for PG&E customers' },
                ]}
              />
              <HubSpokeLinks hub="nem" currentPath={path} />
            </div>

            <SolarInquiry topic="NEM 3.0 export credits" />
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
