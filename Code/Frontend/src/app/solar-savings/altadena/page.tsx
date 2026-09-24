import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import { SourceList, type Source } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { Q2_2026_URL, Q3_2025_URL } from '@/data/utility-rate-tracker';

// =============================================================================
// /solar-savings/altadena — the SCE bill increase as it reached Altadena
// (Tier 3, citysav, 2026-09-23; "sce electricity bill hike altadena").
//
// Hand-written rather than a cities-data.ts entry on purpose. Altadena is an
// unincorporated community, and every CITIES entry also switches on a
// /solar-companies/<slug> page and a "Compare installers" card on the Los
// Angeles County hub; neither was asked for or passes Rule 3 here. The page
// is therefore not in the city link graph or the sitemap by itself: the
// manifest (_ta_manifest/t3-citysav.json) asks for the sitemap entry, the
// city_bills hub link and the inbound links.
//
// Every figure below is from a CPUC, CPUC Public Advocates Office, SCE, Clean
// Power Alliance or California Energy Commission source fetched 2026-09-23.
// =============================================================================

const path = '/solar-savings/altadena';
const url = `https://ratereliefca.com${path}`;
const title = 'SCE Electricity Bill Hike in Altadena: What Changed (2026)';
const h1 = 'The SCE Bill Hike in Altadena: What Changed, What It Costs and Where to Get Help';
const description =
  "Altadena SCE bills rose when the CPUC's 2025 rate case took effect Oct. 1, 2025: what it added, the $24 charge, Clean Power Alliance rates and local help.";
const published = '2026-09-23';
const updated = '2026-09-23';
const checked = '2026-09-23';
const hub = { label: 'Los Angeles County solar guide', href: '/solar-savings/los-angeles-county' };

const SRC = {
  cpucFact: {
    label: "CPUC: Decision Fact Sheet, Southern California Edison's 2025 General Rate Case (Sept. 18, 2025)",
    url: 'https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/general-rate-cases/sce/fact-sheet-sce-grc-091825.pdf',
  },
  cpucGrc: {
    label: 'CPUC: Southern California Edison GRC proceeding (A.23-05-010, Decision 25-09-030)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-rates/general-rate-case/southern-california-edison-grc-proceedings',
  },
  paoQ3: { label: 'CPUC Public Advocates Office, Q3 2025 Electric Rates Report', url: Q3_2025_URL },
  paoQ2: { label: 'CPUC Public Advocates Office, Q2 2026 Electric Rates Report', url: Q2_2026_URL },
  sceBsc: { label: 'SCE: Base Services Charge', url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/bsc' },
  sceTou: {
    label: 'SCE: Time-of-Use residential rate plans (TOU-D-4-9PM prices, baseline credit)',
    url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/time-of-use-plans',
  },
  sceTiered: {
    label: 'SCE: Tiered Rate Plan (baseline allocations, Medical Baseline)',
    url: 'https://www.sce.com/save-money/rates-financing/residential-rate-plans/tiered-rate-plan',
  },
  sceIndex: {
    label: 'SCE tariff: Index of Communities, baseline regions (Cal. PUC Sheet 53902-E)',
    url: 'https://www.sce.com/sites/default/files/inline-files/ce62-12.pdf',
  },
  sceSbp: { label: 'SCE: Solar Billing Plan', url: 'https://www.sce.com/residential/generating-your-own-power/solar-billing-plan' },
  sceDisaster: {
    label: 'SCE: Disaster recovery resources (Altadena Rebuild & Community Hub, NEM customers who rebuild)',
    url: 'https://www.sce.com/disasterrecovery',
  },
  sceClaims: { label: 'SCE: Wildfire Recovery Compensation Program (Eaton Fire)', url: 'https://www.sce.com/directclaims' },
  cpaJrc: {
    label: 'SCE and Clean Power Alliance: Joint Rate Comparisons (SCE rates June 1, 2026; CPA rates July 1, 2026)',
    url: 'https://files.cleanpoweralliance.org/uploads/2026/07/SCE-and-CPA-JRC-July-2026-1.pdf',
  },
  cpaCounty: {
    label: 'Clean Power Alliance: Unincorporated Los Angeles County (default option)',
    url: 'https://cleanpoweralliance.org/place/unincorporated-los-angeles-county/',
  },
  cpaRates: { label: 'Clean Power Alliance: Residential rates and power options', url: 'https://cleanpoweralliance.org/residential-rate/' },
  cpaNem: { label: 'Clean Power Alliance: Solar customers (NEM and Solar Billing Plan)', url: 'https://cleanpoweralliance.org/nem/' },
  cpaWildfire: { label: 'Clean Power Alliance: Wildfire resilience', url: 'https://cleanpoweralliance.org/wildfireresilience/' },
  cpucCare: {
    label: 'CPUC: CARE/FERA Program',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/electric-costs/care-fera-program',
  },
  cec: {
    label: 'California Energy Commission: Electric Load Serving Entities (IOU & POU and CCA layers), queried 2026-09-23',
    url: 'https://cecgis-caenergy.opendata.arcgis.com/datasets/CAEnergy::electric-load-serving-entities-iou-pou/about',
  },
} satisfies Record<string, Source>;

const sources: Source[] = Object.values(SRC);

const faqs = [
  {
    question: 'Why did my SCE bill go up in Altadena?',
    answer:
      "Mainly because of SCE's 2025 general rate case. On October 1, 2025 the CPUC's decision reached rates, and SCE's residential average rose about 13.1%, to 35.3 cents per kWh; the CPUC estimated the decision added $15.52 a month to a typical 500 kWh bill. In November 2025 SCE also added a $24.15 monthly Base Services Charge and cut the price of each kWh by about 10%, which can raise a low-use home's bill.",
  },
  {
    question: 'Who provides electricity in Altadena?',
    answer:
      'SCE delivers it and sends the bill, and Clean Power Alliance, the community choice provider for unincorporated Los Angeles County, supplies it by default on its 100% Green Power option. A sliver at the edge of Altadena is in Pasadena Water and Power territory.',
  },
  {
    question: 'Is the SCE rate increase paying for the Eaton Fire?',
    answer:
      "The CPUC's summary of the 2025 rate case describes wildfire mitigation, aging equipment and grid growth, and does not mention the Eaton Fire, which began after the case's hearings ended. Wildfire costs of all kinds were about 14% of SCE's January 2026 revenue requirement, including wildfire insurance and the Wildfire Fund Charge, according to the CPUC Public Advocates Office.",
  },
  {
    question: 'Will SCE rates go up again?',
    answer:
      'The rate case already authorizes base-revenue increases of $544 million in 2026, $522 million in 2027 and $447 million in 2028. The CPUC Public Advocates Office projected SCE\'s residential average at about 33.5 cents per kWh by December 31, 2026, counting only requests already filed, and says the forecast will likely rise as new requests come in.',
  },
  {
    question: 'Is Clean Power Alliance cheaper than SCE?',
    answer:
      'It depends on the option. On the July 2026 joint comparison for a 522 kWh month on TOU-D-4-9PM, Lean Power came to $190.49, Clean Power to $194.39, the same as SCE generation, and 100% Green Power, the default for unincorporated Los Angeles County, to $208.05.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title,
    description,
    type: 'article',
    url,
    publishedTime: `${published}T00:00:00Z`,
    modifiedTime: `${updated}T00:00:00Z`,
  },
};

export default function AltadenaSceBillPage() {
  return (
    <PublicLayout breadcrumbLabel="Altadena SCE bills" breadcrumbParent={hub}>
      <ArticleJsonLd
        variant="Article"
        domain="crr"
        headline={h1}
        url={url}
        datePublished={published}
        dateModified={updated}
        description={description}
      />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader
              parent={hub}
              current="Altadena SCE bills"
              kicker="Altadena, CA · Bills and rates"
              title={h1}
              updated={updated}
              sourceCount={sources.length}
            />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Altadena&apos;s electric bills went up mainly on October 1, 2025, when the CPUC&apos;s decision in Southern
                California Edison&apos;s 2025 general rate case reached customers&apos; rates. SCE&apos;s residential average
                rate rose about 13.1% that day, to 35.3 cents per kWh, and the CPUC estimated the decision alone added $15.52 a
                month to a typical 500 kWh bill, or $9.79 for a CARE household. Changes since then left the average at 34.4
                cents on June 1, 2026.
              </p>
              <p>
                Altadena is unincorporated Los Angeles County, so there is no city utility: SCE delivers the power and, by
                default, Clean Power Alliance supplies it. This page covers what changed on the bill, whether the increase is
                tied to the Eaton Fire, what a typical Altadena bill looks like now, and the help SCE and Clean Power Alliance
                offer residents, including those rebuilding.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Altadena electric bills at a glance"
                  facts={[
                    { label: 'SCE rate change, Oct. 1, 2025', value: '+13.1%', note: 'Residential average, 2025 rate case', source: { publisher: 'CPUC Public Advocates Office', date: checked, url: SRC.paoQ3.url } },
                    { label: 'SCE residential average, June 1, 2026', value: '34.4¢/kWh', source: { publisher: 'CPUC Public Advocates Office', date: checked, url: SRC.paoQ2.url } },
                    { label: 'CPUC estimate, 500 kWh non-CARE bill', value: '+$15.52/mo', note: '$171.17 to $186.69 (9.1%)', source: { publisher: 'CPUC', date: checked, url: SRC.cpucFact.url } },
                    { label: 'Base Services Charge, since Nov. 2025', value: '$24.15/mo', note: '$12.08 on FERA, $6.00 on CARE', source: { publisher: 'SCE', date: checked, url: SRC.sceBsc.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Altadena SCE bill and solar comparison" utility="sce" />
              </div>

              <h2>Who provides electricity in Altadena</h2>
              <p>
                Altadena is not a city, so it has no municipal utility. On the California Energy Commission&apos;s utility
                map, about 99.5% of the Altadena community is SCE territory; a sliver at its edge falls in Pasadena Water and
                Power&apos;s area. Clean Power Alliance, which has served unincorporated Los Angeles County since 2018, covers
                about 99% of Altadena on the same map.
              </p>
              <p>
                SCE delivers the power, maintains the lines and sends the bill. Clean Power Alliance buys the electricity. For
                unincorporated Los Angeles County its default option is 100% Green Power, which is 100% renewable; the others
                are Lean Power, 40% clean, and Clean Power, 50% clean, and you can switch among them at any time.
              </p>

              <h2>What the 2025 rate case changed</h2>
              <p>
                Every four years the CPUC sets how much SCE may collect from customers to run and rebuild its system. In
                Decision 25-09-030, issued September 18, 2025, it adopted a 2025 revenue requirement of $9.664 billion: $819
                million less than the $10.483 billion SCE asked for, but $1.082 billion, or 12.61%, more than the $8.582 billion
                authorized for 2024. It approved $41.78 billion in total for 2025 through 2028, with further base-revenue
                increases of $544 million in 2026, $522 million in 2027 and $447 million in 2028.
              </p>
              <p>
                Because the decision came nine months into the year it covered, SCE also began recovering what it would have
                collected from January through September 2025: $902 million, spread over 24 months. The CPUC Public Advocates
                Office counted that and the new base revenue together as a $1.69 billion increase over SCE&apos;s June 1, 2025
                revenue requirement. The CPUC&apos;s bill estimate below covers the decision&apos;s new revenue; the 13.1% is
                the change in the average rate on October 1, when the catch-up amount began as well.
              </p>
            </div>

            <DataTable
              caption="CPUC estimate of the 2025 rate case's effect on a 500 kWh monthly SCE bill"
              columns={['Household', 'June 2025 bill', "SCE's request", 'Decision']}
              rows={[
                ['Non-CARE', '$171.17', '$195.89 (+$24.72, 14.4%)', '$186.69 (+$15.52, 9.1%)'],
                ['CARE', '$107.99', '$123.58 (+$15.59, 14.4%)', '$117.79 (+$9.79, 9.1%)'],
              ]}
              note={
                <>
                  Source: CPUC Decision Fact Sheet, Southern California Edison&apos;s 2025 General Rate Case, September 18,
                  2025, checked September 23, 2026. The CPUC assumes usage of 500 kWh a month.
                </>
              }
            />

            <div className="prose prose-slate max-w-none">
              <h2>Is the increase paying for the Eaton Fire?</h2>
              <p>
                The CPUC&apos;s summary of the decision describes what the money pays for: wildfire mitigation, including $941
                million for 177 miles of targeted undergrounding, $1.272 billion for 1,653 miles of covered conductor and $553.5
                million for vegetation management, plus upgrades to aging equipment and to the grid for growing demand. It does
                not mention the Eaton Fire, which began in January 2025, months after the case&apos;s evidentiary hearings
                ended in May 2024.
              </p>
              <p>
                Wildfire costs of every kind are still a growing share of SCE&apos;s bills. The Public Advocates Office counts
                $2.69 billion of SCE&apos;s January 2026 revenue requirement, about 14%, as wildfire-related, a figure that
                includes wildfire insurance and the Wildfire Fund Charge; in January 2023 it was $1.45 billion, or 9%.
              </p>
              <p>
                Separately from rates, SCE runs a voluntary Wildfire Recovery Compensation Program for people and businesses
                affected by the Eaton Fire. Claims can be filed online or by calling 888-912-8528 until November 30, 2026, and
                accepting an offer means signing a settlement that includes a promise not to litigate further.
              </p>

              <h2>What an Altadena bill looks like now</h2>
              <p>
                Clean Power Alliance and SCE&apos;s joint rate comparison, using SCE rates as of June 1, 2026 and Clean Power
                Alliance rates as of July 1, 2026, prices a typical 522 kWh month on SCE&apos;s TOU-D-4-9PM plan for each
                option:
              </p>
            </div>

            <DataTable
              caption="Average monthly bill, 522 kWh on TOU-D-4-9PM, by generation option"
              columns={['Generation option', 'Standard', 'CARE']}
              rows={[
                ['SCE generation', '$194.39', '$116.82'],
                ['Clean Power Alliance Lean Power (40% clean)', '$190.49', '$114.47'],
                ['Clean Power Alliance Clean Power (50% clean)', '$194.39', '$116.82'],
                ['Clean Power Alliance 100% Green Power, in communities where it is the default', '$208.05', '$116.82'],
              ]}
              note={
                <>
                  Source: SCE and Clean Power Alliance Joint Rate Comparisons, July 2026, checked September 23, 2026.
                  Outside its default communities, 100% Green Power is listed at $208.05, and $125.03 for CARE.
                </>
              }
            />

            <div className="prose prose-slate max-w-none">
              <p>
                Since November 2025 every bill also carries SCE&apos;s Base Services Charge: $24.15 a month for most customers,
                $12.08 on FERA and $6.00 on CARE. SCE says it cut the price of each kWh by about 10% in exchange, so a
                low-use home can pay more than before and a high-use home less.
              </p>
              <p>
                How much of your usage gets the lower price depends on your baseline region. SCE&apos;s index of communities
                places Altadena in regions 9 and 16; the summer baseline is 16.9 kWh a day in region 9 and 14.7 in region 16,
                and on TOU-D-4-9PM that allowance earns a credit of 10 cents per kWh. For customers with SCE generation, that
                plan charges about 58 cents per kWh from 4 to 9 p.m. on summer weekdays and 34 cents at other hours. The{' '}
                <Link href="/blog/sce-time-of-use-rates-2026" className={guideLink}>
                  SCE time-of-use guide
                </Link>{' '}
                lists every period, and{' '}
                <Link href="/blog/why-is-my-sce-bill-so-high" className={guideLink}>
                  why an Edison bill runs high
                </Link>{' '}
                walks through a bill line by line.
              </p>

              <h2>Help with the bill in Altadena</h2>
              <ul>
                <li>
                  <strong>CARE and FERA.</strong> CARE takes 30 to 35% off the electric bill and FERA 18% for households under
                  the CPUC&apos;s income limits, and both lower the Base Services Charge. The joint comparison prices CARE
                  households on every Clean Power Alliance option too.
                </li>
                <li>
                  <strong>Medical Baseline.</strong> Households that rely on powered medical equipment can apply for SCE&apos;s
                  Medical Baseline, which adds 16.5 kWh a day to the baseline allocation.
                </li>
                <li>
                  <strong>In person.</strong> SCE&apos;s Altadena Rebuild &amp; Community Hub, 2680 Fair Oaks Ave., is open
                  Monday to Friday, 8 a.m. to 5 p.m., and SCE also takes walk-ins at the Los Angeles County Permit One-Stop,
                  464 W. Woodbury Rd., Suite 210. SCE&apos;s disaster line is 1-800-250-7339.
                </li>
                <li>
                  <strong>Rebuilding.</strong> SCE says solar customers who rebuild may be able to stay on their original NEM
                  tariff with application fees waived, and it points rebuilding homeowners to its SWITCH and RISE Homes
                  programs for all-electric, energy-efficient homes. New service is requested through SCE&apos;s project
                  portal.
                </li>
                <li>
                  <strong>Solar with a battery.</strong> Clean Power Alliance lists its Sun Storage Rebate, up to $2,250 for
                  eligible customers installing solar with a battery, among its wildfire resilience programs.
                </li>
              </ul>

              <h2>Solar at today&apos;s rates</h2>
              <p>
                New rooftop systems go on SCE&apos;s Solar Billing Plan and its TOU-D-PRIME rate, where exports earn credits
                that vary by the hour and are locked for nine years, with an extra credit of about 4 cents per kWh, about 9
                cents for income-qualified customers, for those who enroll before 2028. If Clean Power Alliance supplies your
                power, it applies the generation side of those credits, trues up every April and pays surplus at a rate it
                sets 10% above SCE&apos;s.
              </p>
              <p>
                SCE says that because its export credits are worth less than the power you buy, storing your own energy for
                the expensive hours is now worth more than exporting it. Solar credits cannot pay the Base Services Charge. For
                the details, see{' '}
                <Link href="/blog/sce-solar-billing-plan" className={guideLink}>
                  how SCE&apos;s Solar Billing Plan pays for exports
                </Link>{' '}
                and, for older systems,{' '}
                <Link href="/blog/sce-settlement-bill" className={guideLink}>
                  how to read an SCE annual settlement bill
                </Link>
                . The rate history behind this page is on{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE&apos;s rate increases since 2024
                </Link>
                .
              </p>
            </div>

            <div className="not-prose">
              <FaqBlock items={faqs} />
              <SourceList sources={sources} sourceCheckedDate={checked} />
              <p className="mt-4 text-sm text-muted-foreground">
                California Rate Relief is a referral service. We are not a licensed contractor.
              </p>
              <HubSpokeLinks hub="city_bills" currentPath={path} />
            </div>

            <SolarInquiry utility="sce" topic="Altadena SCE bill and solar comparison" heading="Compare a Solar Plan With Your SCE Bill" />
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
