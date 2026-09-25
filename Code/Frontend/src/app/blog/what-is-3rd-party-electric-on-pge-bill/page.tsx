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

const path = '/blog/what-is-3rd-party-electric-on-pge-bill';
const url = `https://ratereliefca.com${path}`;
const title = 'What Is 3rd Party Electric on a PG&E Bill? CCA Charges';
const h1 = 'What Is “3rd Party Electric” on a PG&E Bill?';
const description =
  "3rd party electric on a PG&E bill is your community choice provider's generation charge. PG&E still delivers and bills. See the PCIA and a real comparison.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('pgeBillExplainer', 'pgeCca', 'pgeUnderstandBill', 'pgeWestLightJrc', 'cpucRateComparison', 'cpucDirectAccess');

const faqs = [
  {
    question: 'Why am I being charged for 3rd party electric on my PG&E bill?',
    answer:
      'Because a company other than PG&E bought the electricity you used, usually a community choice aggregator run by your city or county. PG&E says those third-party charges appear on the PG&E bill, and PG&E collects the payment for them. PG&E still charges you separately for delivering the power.',
  },
  {
    question: 'Am I paying twice for electricity?',
    answer:
      "No. The third-party section covers generation, the cost of producing the power. PG&E's section covers delivery over its lines, plus charges such as the PCIA. If PG&E supplied your power, the generation cost would be on the PG&E side instead. The one charge a CCA customer pays that looks extra, the PCIA, is PG&E recovering the above-market cost of power it bought for you before you switched.",
  },
  {
    question: 'What is 3rd party gas on my PG&E bill?',
    answer:
      "The same idea for natural gas. PG&E's bill explainer says your gas may be bought by a third-party gas provider, which it calls a CTA, and those charges appear on the PG&E bill. PG&E still charges for delivering the gas through its pipes.",
  },
  {
    question: 'Who do I call about 3rd party charges?',
    answer:
      'For the third-party generation charges, call the provider named on the bill. For PG&E delivery charges, PG&E lists 1-866-743-0335. PG&E still handles meter reading, billing, maintenance and outages for CCA customers.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function ThirdPartyElectricPgeBillPage() {
  return (
    <PublicLayout breadcrumbLabel="3rd party electric on a PG&E bill" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="3rd party electric on a PG&E bill" kicker="PG&E · Reading the bill" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                &ldquo;3rd party electric&rdquo; on a PG&amp;E bill is the charge for electricity bought by someone other than
                PG&amp;E, almost always a community choice aggregator (CCA) run by your city or county. PG&amp;E still delivers
                the power, reads the meter and sends one combined bill. You are not paying twice: the third party replaces
                PG&amp;E&apos;s generation charge.
              </p>
              <p>
                PG&amp;E&apos;s own bill explainer puts it this way: the electricity and gas you use are bought by PG&amp;E or by
                a third-party provider such as a CCA or a CTA, and those third-party charges appear on your PG&amp;E bill.
                Below is how to read that section, what the PCIA line means, and whether the third party costs more. For the
                broader question of why bills are high, start with our{' '}
                <Link href={hub.href} className={guideLink}>
                  guide to high California electric bills
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="Third-party electric at a glance"
                  facts={[
                    { label: 'CCAs in PG&E territory', value: '12', note: 'Enrollment is automatic where a city or county joins', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeCca.url } },
                    { label: 'Who bills and collects', value: 'PG&E', note: 'One consolidated bill', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeCca.url } },
                    { label: 'PCIA/FF for a 2016-vintage CCA customer', value: '3.746¢/kWh', note: 'vs. −0.918¢ for PG&E customers', source: { publisher: 'PG&E and WestLight Energy', date: RATE_SOURCES_CHECKED, url: SRC.pgeWestLightJrc.url } },
                    { label: 'PG&E line for its charges', value: '1-866-743-0335', note: 'Call the CCA for its charges', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeCca.url } },
                  ]}
                />
              </div>

              <h2>Why a third party is on your bill</h2>
              <p>
                When a city or county starts or joins a community choice program, PG&amp;E says California law requires that
                customers there be enrolled automatically, and the CCA must send at least two notices within a 60-day period.
                If you missed them, the first sign may be a new section on the bill. From then on, the CCA buys or generates your electricity, and PG&amp;E keeps doing everything else: transmission and
                distribution, meter reading, billing, maintenance and outage response. PG&amp;E also collects your payment and
                passes the CCA&apos;s share along.
              </p>
              <p>
                PG&amp;E names 12 CCAs in its territory: Ava Community Energy (Alameda and San Joaquin counties), Central Coast
                Community Energy, CleanPowerSF, King City Community Power, MCE (Contra Costa, Marin, Napa and Solano counties),
                Pioneer Community Energy (Placer County), Redwood Coast Energy Authority (Humboldt County), San Jose Clean
                Energy, Silicon Valley Clean Energy, Sonoma Clean Power (Sonoma and Mendocino counties), Valley Clean Energy
                (Davis, Woodland, Winters and unincorporated Yolo County) and WestLight Energy, formerly Peninsula Clean Energy
                (San Mateo County and Los Banos).
              </p>

              <h2>Reading the bill: three kinds of electric charges</h2>
              <p>
                A CCA customer&apos;s electric charges fall into three buckets. PG&amp;E&apos;s joint rate comparisons with each
                CCA use the same three, which makes them the easiest way to see the split with real numbers.
              </p>
              <ul>
                <li>
                  <strong>Generation (the third-party section).</strong> The cost of producing the electricity, set by your CCA.
                  PG&amp;E defines generation charges as the cost of creating the electricity that powers your home.
                </li>
                <li>
                  <strong>PG&amp;E delivery.</strong> The cost of moving power over PG&amp;E&apos;s wires, the same per kWh whether
                  PG&amp;E or a CCA supplies the power.
                </li>
                <li>
                  <strong>PCIA and franchise fee.</strong> Charged by PG&amp;E to customers who buy power elsewhere. For PG&amp;E
                  customers, the same costs are folded into PG&amp;E&apos;s generation rate.
                </li>
              </ul>

              <h2>What the PCIA line means</h2>
              <p>
                The Power Charge Indifference Adjustment makes sure that PG&amp;E customers and CCA customers both pay the
                above-market cost of power PG&amp;E bought on their behalf. &ldquo;Above market&rdquo; means contracts that cost
                more than the power would sell for today. Your PCIA depends on your vintage, the year you moved to the CCA,
                because that decides which of PG&amp;E&apos;s past purchases were made for you. The franchise fee surcharge
                works the same way; PG&amp;E collects it for cities and counties.
              </p>
              <p>
                The vintage can make a real difference. In PG&amp;E&apos;s joint rate comparison with WestLight Energy, current as
                of July 2026, the combined PCIA and franchise fee is 3.746 cents per kWh for WestLight customers on the 2016
                vintage and minus 0.918 cents for PG&amp;E customers on the 2025 vintage.
              </p>

              <h2>Is the third party more expensive than PG&amp;E?</h2>
              <p>
                It depends on the CCA, the plan and the month, which is exactly why PG&amp;E and each CCA publish joint rate
                comparisons. Here is one, on PG&amp;E&apos;s tiered E-1 plan:
              </p>
              <DataTable
                caption="PG&E vs. WestLight Energy on residential plan E-1, July 2026 (per kWh)"
                columns={['Component', 'PG&E', 'WestLight ECOplus (50% renewable)', 'WestLight ECO100 (100% renewable)']}
                rows={[
                  ['Generation', '$0.12762', '$0.07506', '$0.08506'],
                  ['PG&E delivery', '$0.29919', '$0.29919', '$0.29919'],
                  ['PCIA and franchise fee', '−$0.00918', '$0.03746', '$0.03746'],
                  ['Total per kWh', '$0.41763', '$0.41171', '$0.42171'],
                  ['Average monthly bill, 374 kWh', '$156.31', '$154.10', '$157.84'],
                ]}
                note={<>Source: PG&amp;E and WestLight Energy Joint Rate Comparisons, rates current as of July 2026, checked September 23, 2026. Excludes the California Climate Credit. Other CCAs publish their own comparisons on PG&amp;E&apos;s CCA page.</>}
              />
              <p>
                Two lessons from that table. First, delivery is by far the biggest piece, about 30 cents of the roughly 41, and
                you pay it no matter who supplies the power. Second, a CCA&apos;s cheaper generation rate can be mostly offset by
                the PCIA; here the 50% renewable plan came out about $2.21 a month cheaper than PG&amp;E, and the 100%
                renewable plan about $1.53 more. The comparison for your CCA and plan is linked from PG&amp;E&apos;s CCA page, and the CPUC&apos;s rate
                comparison site covers the rest of the state.
              </p>

              <h2>What stays the same when a CCA supplies your power</h2>
              <p>
                PG&amp;E says CCA customers keep access to CARE and FERA, Medical Baseline, Budget Billing and payment plans,
                energy-efficiency rebates and demand response programs. So the income-qualified discounts in our{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  PG&amp;E bill discount guide
                </Link>{' '}
                still apply. Your PG&amp;E rate plan still matters too, because it sets the delivery price and the hours; see{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use plans
                </Link>{' '}
                and{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates
                </Link>
                . If you move into a CCA city, you still call PG&amp;E to start service.
              </p>
              <p>
                Businesses sometimes see a similar split for a different reason: an Electric Service Provider under Direct
                Access, explained in{' '}
                <Link href="/blog/direct-access-electricity-california" className={guideLink}>
                  Direct Access electricity in California
                </Link>
                . For solar owners, generation credits for exports are also handled by the provider that buys your power, so
                CCA and PG&amp;E solar customers can see different credits; our{' '}
                <Link href="/solar-problems/true-up-bill-california-explained" className={guideLink}>
                  true-up bill explainer
                </Link>{' '}
                covers the annual settlement. For how PG&amp;E&apos;s own prices have moved, see{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  whether PG&amp;E rates went up
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

            <SolarInquiry utility="pge" topic="PG&E and CCA bill review" variant="bill" heading="Compare a Solar Plan With Your PG&E Bill" />
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
