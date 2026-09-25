import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { BillComparison } from '@/components/growth/BillComparison';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/why-is-my-sdge-bill-so-high';
const url = `https://ratereliefca.com${path}`;
const title = 'Why Is My SDG&E Bill So High? 2026 Prices and Causes';
const h1 = 'Why Is My SDG&E Bill So High? The 2026 Prices, the Long Summer and What to Check on Your Bill';
const description =
  'SDG&E has the highest rates of California’s big three: 45.5¢/kWh in June 2026. Summer runs to Oct. 31, peak is 4–9 p.m. daily, and a $24 charge applies.';
const published = '2026-04-24';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources(
  'paoQ2_2026',
  'paoQ1_2026',
  'sdgeTouDr1Aug2026',
  'sdgeDrAug2026',
  'sdgePricingPlans',
  'sdgeHowRatesSet',
  'sdgeWhenMatters',
  'sdgeMyBill',
  'sdgeSolarBill',
  'sdgeNemBill',
  'cpucClimateCredit',
);

const faqs = [
  {
    question: 'Why is my SDG&E bill so high?',
    answer:
      "Usually a mix of four things. SDG&E's prices are the highest of California's three big utilities, 45.5 cents per kWh on average in June 2026 per the CPUC Public Advocates Office. Summer prices run from June 1 to October 31. The 4-to-9 p.m. on-peak price, 69.135 cents on TOU-DR1 in summer, applies every day including weekends. And usage above 130% of baseline loses a 10.702-cent credit.",
  },
  {
    question: 'Did SDG&E raise rates in 2026?',
    answer:
      "Yes, at the start of the year. The Public Advocates Office reports SDG&E's residential average rose about 11.4% on January 1, 2026, driven mainly by generation costs, including recovering a $621.0 million 2025 under-collection. It then fell about 2.0% on June 1, 2026 after a transmission cost reduction, leaving an average of 45.5 cents per kWh.",
  },
  {
    question: 'Why is my SDG&E bill high in October?',
    answer:
      "Because October is still summer at SDG&E. SDG&E's summer season runs June 1 to October 31, a month longer than PG&E's and SCE's, so October evenings still carry the summer on-peak price of 69.135 cents on TOU-DR1 rather than the winter 61.471 cents.",
  },
  {
    question: 'What is the Base Services Charge on my SDG&E bill?',
    answer:
      "A daily fixed charge of $0.79343, about $24 a month, that SDG&E says took effect in October 2025. FERA customers and households in qualifying deed-restricted affordable housing pay $0.39688 a day. It does not change with usage, and solar export credits cannot pay it.",
  },
  {
    question: 'How many SDG&E customers are behind on their bills?',
    answer:
      "The CPUC Public Advocates Office's July 2026 report counts 253,820 SDG&E residential customers in arrears, about 18%, owing $501 on average. If you are one of them, ask SDG&E about payment arrangements and income-qualified programs before the balance grows.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function WhyIsMySDGEBillSoHigh() {
  return (
    <PublicLayout breadcrumbLabel="Why is my SDG&E bill so high?" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Why is my SDG&E bill so high?" kicker="SDG&E · Billing" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                SDG&amp;E bills run high mainly because its prices are the highest of California&apos;s three big utilities: 45.5
                cents per kWh on average in June 2026, against about 34 cents at PG&amp;E and SCE. On top of that, SDG&amp;E&apos;s
                summer pricing lasts until October 31, its 4-to-9 p.m. peak applies every day, and a $24 monthly Base Services
                Charge applies however little you use.
              </p>
              <p>
                Those are the structural causes. The one that changed your bill this month is usually more specific: more days
                in the billing period, more air conditioning, more use in peak hours, or usage past your baseline. The checks
                below use SDG&amp;E&apos;s own rate tables effective August 1, 2026 and the CPUC Public Advocates Office&apos;s
                reports, checked September 23, 2026. For the statewide picture, see{' '}
                <Link href={hub.href} className={guideLink}>
                  why California electric bills are high
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="SDG&E numbers behind a high bill"
                  facts={[
                    { label: 'Residential average, June 2026', value: '45.5¢/kWh', note: 'Highest of PG&E, SCE, SDG&E', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'TOU-DR1 summer on-peak', value: '69.135¢/kWh', note: '4–9 p.m. every day; Aug 1, 2026', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeTouDr1Aug2026.url } },
                    { label: 'Summer season', value: 'June 1–Oct. 31', source: { publisher: 'SDG&E', date: RATE_SOURCES_CHECKED, url: SRC.sdgeHowRatesSet.url } },
                    { label: 'January 1, 2026 change', value: '+11.4%', note: 'Then −2.0% on June 1', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ1_2026.url } },
                  ]}
                />
              </div>

              <h2>Start with two bills from comparable periods</h2>
              <p>
                A bill total alone does not identify the cause. Pull the current bill and the same month last year. Record the
                billing days, total kWh, rate plan and generation provider. Divide kWh by days: if kWh per day rose, you used
                more; if it held steady and the bill still rose, prices or the plan did the work.
              </p>
              <div className="not-prose my-8">
                <BillComparison utilityName="SDG&E" />
              </div>

              <h2>1. SDG&amp;E&apos;s prices are the highest of the big three</h2>
              <p>
                The CPUC Public Advocates Office puts SDG&amp;E&apos;s residential average at 45.5 cents per kWh in June 2026,
                excluding the Climate Credit, against 34.4 cents at SCE and 33.7 cents at PG&amp;E. It is up 5% over three years,
                42% since January 2021 and 97% since January 2016. The biggest recent step was January 1, 2026, when the
                office reports the average rose about 11.4%. The largest driver was generation: SDG&amp;E&apos;s 2026 fuel and
                purchased-power forecast added $613.8 million, including $621.0 million to recover a 2025 under-collection because
                SDG&amp;E&apos;s market revenues came in lower than forecast. The June 1, 2026 change cut about 2.0% after a federal
                transmission decision. The full history is in{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E&apos;s rate increase history
                </Link>
                .
              </p>

              <h2>2. Summer lasts five months</h2>
              <p>
                SDG&amp;E&apos;s summer season runs June 1 to October 31, and winter November 1 to May 31. That is one month longer
                than PG&amp;E&apos;s and SCE&apos;s summers, which end September 30. On TOU-DR1, the on-peak price is 69.135 cents
                in summer against 61.471 cents in winter, so an October heat wave is billed at summer peak prices. If your bill
                spiked in September or October, the calendar is part of the answer.
              </p>

              <h2>3. The 4-to-9 p.m. peak runs seven days a week</h2>
              <DataTable
                caption="SDG&E TOU-DR1 prices, effective August 1, 2026 (cents per kWh)"
                columns={['Period', 'Weekday hours', 'Summer', 'Winter']}
                rows={[
                  ['On-peak', '4–9 p.m. (weekends too)', '69.135¢', '61.471¢'],
                  ['Off-peak', '6–10 a.m., 2–4 p.m., 9 p.m.–midnight', '46.421¢', '53.060¢'],
                  ['Super off-peak', 'Midnight–6 a.m., 10 a.m.–2 p.m. (weekends midnight–2 p.m.)', '37.433¢', '43.719¢'],
                ]}
                note={<>Source: SDG&amp;E Schedule TOU-DR1 total rates table, effective August 1, 2026, and When Matters page, checked September 23, 2026. Usage up to 130% of baseline gets a 10.702¢ credit.</>}
              />
              <p>
                Unlike some plans elsewhere in California, SDG&amp;E keeps 4 to 9 p.m. as on-peak on weekends and holidays. A
                household that runs air conditioning, cooking and laundry through a summer weekend evening pays nearly twice the
                super off-peak price for all of it. Our own arithmetic: 10 kWh a day moved from 6 p.m. to noon on TOU-DR1 in
                summer saves about $3.17 a day. The full plan menu, including TOU-DR2 and the flat DR plan, is in{' '}
                <Link href="/blog/sdge-time-of-use-rates-2026" className={guideLink}>
                  SDG&amp;E time-of-use rates and peak hours
                </Link>
                .
              </p>

              <h2>4. Usage past your baseline loses its credit</h2>
              <p>
                SDG&amp;E sets a monthly baseline allowance that it says covers 50% to 60% of what the average residential customer
                uses. On TOU-DR1 and TOU-DR2, usage up to 130% of baseline gets a 10.702-cent credit per kWh; usage above that
                pays full price. On the flat DR plan, the first tier costs 41.299 cents and everything above 130% of baseline
                costs 52.000 cents. So a hot month that pushes you well past baseline raises the price of the extra kWh, not just
                the count.
              </p>

              <h2>5. The Base Services Charge</h2>
              <p>
                Since October 2025, every SDG&amp;E residential plan except the separately metered EV-TOU carries a Base Services
                Charge of $0.79343 a day, about $24 a month, or $0.39688 for FERA customers and qualifying deed-restricted
                affordable housing. It is billed alongside the per-kWh prices above, so its effect on a total depends on usage;
                in a low-usage apartment it can be a large share of the bill. SDG&amp;E&apos;s plan pages leave it out of the listed
                prices, so it is easy to miss when comparing plans.
              </p>

              <h2>6. The Climate Credit moved to late summer</h2>
              <p>
                The CPUC says the 2026 electric California Climate Credit goes out in high-bill months. SDG&amp;E electric
                customers receive $49.36 on the August bill and $49.36 on the September bill. A bill from another month will not
                have that credit, which can make it look higher by comparison.
              </p>

              <h2>7. A community choice provider or solar changes how the bill reads</h2>
              <p>
                If your account is enrolled with a community choice provider, the provider&apos;s generation charge replaces
                SDG&amp;E&apos;s and SDG&amp;E still bills delivery; compare the generation line, not the whole bill, with
                SDG&amp;E&apos;s rate. If the home has solar, read the imports, exports and credits separately: on the Solar Billing
                Plan the bill is due monthly and export credits cannot pay the Base Services Charge and other non-nettable
                charges. Our guide to{' '}
                <Link href="/blog/how-to-read-sdge-bill" className={guideLink}>
                  reading an SDG&amp;E bill, with or without solar
                </Link>{' '}
                shows where each line sits, and{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={guideLink}>
                  how a California true-up bill works
                </Link>{' '}
                covers the annual settlement.
              </p>

              <h2>What to do, in order</h2>
              <ol>
                <li>Compare kWh per day with the same month last year before comparing dollars.</li>
                <li>Check the Electricity Dashboard for your highest-usage hour; if it is between 4 and 9 p.m., start there.</li>
                <li>Confirm your plan in My Energy Center and compare it with your usage; most plans lock for 12 months once you switch.</li>
                <li>If money is tight, ask SDG&amp;E about payment arrangements and income-qualified programs early. The Public Advocates Office counts 253,820 SDG&amp;E customers, about 18%, behind on their bills, owing $501 on average.</li>
                <li>Only then compare solar or a battery, using a proposal that shows your remaining bill on EV-TOU-5, the rate new solar customers are placed on.</li>
              </ol>
              <p>
                For solar specifically, see{' '}
                <Link href="/blog/sdge-and-solar" className={guideLink}>
                  SDG&amp;E and solar
                </Link>
                ; for local project checks, the city guides for{' '}
                <Link href="/solar-cost/san-diego" className={guideLink}>
                  San Diego
                </Link>
                ,{' '}
                <Link href="/solar-cost/escondido" className={guideLink}>
                  Escondido
                </Link>{' '}
                and{' '}
                <Link href="/solar-cost/chula-vista" className={guideLink}>
                  Chula Vista
                </Link>
                . Other utilities: why{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  PG&amp;E
                </Link>{' '}
                and{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  SCE
                </Link>{' '}
                bills run high.
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

            <SolarInquiry utility="sdge" topic="SDG&E bill review" variant="bill" heading="Compare a Solar Plan With Your SDG&E Bill" />
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
