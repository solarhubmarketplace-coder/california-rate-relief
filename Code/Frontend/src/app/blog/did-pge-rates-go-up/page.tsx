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
import { SourceList } from '@/components/growth/DecisionPage';
import { KeyFacts } from '@/components/trust/KeyFacts';
import { FaqBlock } from '@/components/trust/FaqBlock';
import { DataTable, GuideHeader, guideLink } from '@/components/growth/RateGuideParts';
import { RATE_SOURCES_CHECKED, SRC, rateSources } from '@/data/rate-sources';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/did-pge-rates-go-up';
const url = `https://ratereliefca.com${path}`;
const title = 'Did PG&E Rates Go Up? Every Rate Change, 2023 to 2026';
const h1 = 'Did PG&E Rates Go Up? Every Change From 2023 to 2026, and What Comes Next';
const description =
  'PG&E rates fell twice in 2026, to 33.7¢ per kWh, after big increases in 2023 and January 2024. See each change by date, why, and what 2027 may bring.';
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'California utility rate tracker', href: '/california-utility-rate-tracker' };

const sources = rateSources(
  'paoQ2_2026',
  'paoQ1_2026',
  'paoQ4_2025',
  'paoQ3_2025',
  'paoQ1_2025',
  'paoQ4_2024',
  'paoQ3_2024',
  'paoQ2_2024',
  'paoPgeRequests',
  'cpucPgeGrc2023',
  'pgeRatesIndex',
  'pgeResRatesCurrent',
  'pgeBillExplainer',
  'sceBsc',
);

const faqs = [
  {
    question: 'Did PG&E rates go up in 2026?',
    answer:
      "No, they went down. The CPUC Public Advocates Office reports PG&E's residential average rate fell about 7.5% on January 1, 2026 and 3.7% on March 1, 2026, to 33.7 cents per kWh, where it stood on June 1. Its July 2026 report projects about 33.9 cents by December 31, 2026.",
  },
  {
    question: 'Did PG&E rates go up in 2024?',
    answer:
      "Yes, then partly back down. On PG&E's tiered E-1 plan, the Tier 1 price jumped about 17% on January 1, 2024, weeks after the CPUC decided PG&E's 2023–2026 general rate case, and peaked at 42.676 cents on April 1. July 1, 2024 brought an 8.9% cut in the average rate as wildfire-cost recovery ended, and October 1 added about 3% back.",
  },
  {
    question: 'Did PG&E rates go up in 2023?',
    answer:
      "Yes. The E-1 Tier 1 price rose from 32.549 cents on January 1, 2023 to 35.841 cents on September 1, 2023, about 10%, across four changes, per PG&E's rate tables.",
  },
  {
    question: 'How much will PG&E rates go up in 2027?',
    answer:
      "Nothing is approved yet. PG&E's 2027 general rate case asks to raise revenue from $14.8 billion in 2026 to $19.9 billion by 2030. The Public Advocates Office estimates that, counting other expected requests, the average PG&E bill could rise about 16% in 2027 and 30% by 2030 if everything is approved.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function DidPgeRatesGoUpPage() {
  return (
    <PublicLayout breadcrumbLabel="Did PG&E rates go up?" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="Did PG&E rates go up?" kicker="PG&E · Rate history" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                Not in 2026. PG&amp;E&apos;s residential average rate fell about 7.5% on January 1 and 3.7% on March 1, to 33.7
                cents per kWh, per the CPUC Public Advocates Office. But prices climbed through 2023 and jumped on January 1,
                2024, and the average is still 39% above January 2021. PG&amp;E&apos;s 2027 rate case could push bills up again.
              </p>
              <p>
                So the honest answer depends on which bill you compare. Against 2025, a PG&amp;E customer&apos;s per-kWh price is
                lower. Against 2021, it is much higher. This page walks through every change since 2023 with its date, size and
                cause, all from PG&amp;E&apos;s rate tables and the Public Advocates Office&apos;s quarterly reports. For all
                utilities side by side, see the{' '}
                <Link href={hub.href} className={guideLink}>
                  California utility rate tracker
                </Link>
                .
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E rates in four numbers"
                  facts={[
                    { label: 'Residential average rate, June 1, 2026', value: '33.7¢/kWh', note: 'Excludes the Climate Credit', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'Change in 2026 so far', value: '−7.5%, −3.7%', note: 'January 1 and March 1', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ1_2026.url } },
                    { label: 'Change since January 2021', value: '+39%', note: '+69% since January 2016', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoQ2_2026.url } },
                    { label: 'Possible bill change in 2027', value: '≈+16%', note: 'If all pending requests are approved', source: { publisher: 'CPUC Public Advocates Office', date: RATE_SOURCES_CHECKED, url: SRC.paoPgeRequests.url } },
                  ]}
                />
              </div>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="PG&E rate change check" utility="pge" />
              </div>

              <h2>Every PG&amp;E rate change since mid-2024, and why</h2>
              <p>
                The Public Advocates Office reports each change as a percentage of the residential average rate for customers
                who buy both delivery and generation from PG&amp;E. The causes are almost all wildfire-cost recovery switching
                on and off, plus the yearly generation forecast.
              </p>
              <DataTable
                caption="PG&E residential average rate changes, July 2024 to March 2026"
                columns={['Effective', 'Advice letter', 'Change', 'Main reason given']}
                rows={[
                  ['July 1, 2024', '7307-E', '−8.9%', 'End of 2022 wildfire interim rate relief ($1.104 billion) and a 2023 fuel-cost trigger ($571.6 million)'],
                  ['September 1, 2024', '7366-E', 'Revenue +1%', 'Charges for the third series of wildfire hardening recovery bonds'],
                  ['October 1, 2024', '7382-E', '≈+3%', '2023 wildfire interim relief of $943.9 million, collected through February 28, 2026'],
                  ['January 1, 2025', '7469-E', '≈+0.2%', 'Returns of $274 million in unspent demand response funds and $200 million in wildfire mitigation funds offset other changes'],
                  ['March 1, 2025', '7516-E', '≈+1.6%', '$502.8 million of 2021 vegetation management costs over 12 months'],
                  ['September 1, 2025', '7684-E', '≈−2.1%', 'End of two-year 2021 wildfire recovery ($872.3 million) and of $516 million interim wildfire and gas safety recovery'],
                  ['January 1, 2026', '7797-E', '≈−7.5%', '2026 generation forecast: about $1 billion less resource adequacy cost for bundled customers; higher bundled sales'],
                  ['March 1, 2026', '7846-E', '≈−3.7%', 'End of 2021 and 2023 wildfire interim relief (−4.9%); Base Services Charge begins; $746.6 million of 2023 wildfire costs added'],
                ]}
                note={<>Sources: CPUC Public Advocates Office quarterly electric rates reports, Q2 2024 through Q1 2026, checked September 23, 2026. The September 2024 filing was reported as a revenue change, not a rate change.</>}
              />

              <h2>2023 and early 2024: the steep part</h2>
              <p>
                The quarterly reports above start in mid-2024, so for the earlier years we use PG&amp;E&apos;s own residential
                rate tables, specifically the Tier 1 price on the tiered E-1 plan. It is one plan, not the average, but it moves
                with the average and goes back further.
              </p>
              <DataTable
                caption="PG&E E-1 Tier 1 price at selected dates (cents per kWh)"
                columns={['Effective', 'E-1 Tier 1', 'Change from previous row']}
                rows={[
                  ['January 1, 2023', '32.549¢', '—'],
                  ['September 1, 2023', '35.841¢', '+10.1% over 2023'],
                  ['January 1, 2024', '42.009¢', '+17.2%'],
                  ['April 1, 2024 (peak)', '42.676¢', '+1.6%'],
                  ['July 1, 2024', '38.828¢', '−9.0%'],
                  ['October 1, 2024', '40.206¢', '+3.5%'],
                  ['March 1, 2025', '40.730¢', '+1.3%'],
                  ['January 1, 2026', '37.839¢', '−7.1% since March 2025'],
                  ['March 1, 2026', '32.561¢ + daily charge', '−13.9%, with a new $0.79343 daily charge'],
                ]}
                note={<>Source: PG&amp;E residential rate tables for each period, from PG&amp;E&apos;s current and historic electric rates page, checked September 23, 2026. Changes are our arithmetic. Excludes the Climate Credit and taxes.</>}
              />
              <p>
                The January 1, 2024 jump came weeks after the CPUC resolved PG&amp;E&apos;s 2023–2026 general rate case on
                November 16, 2023. The CPUC cited inflation and a large investment in undergrounding power lines among the top
                drivers of PG&amp;E&apos;s request and approved 2,008 miles of hardened lines, 1,230 of them underground. Tier
                prices on other plans, and the full list of E-1 dates, are in our{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates guide
                </Link>
                .
              </p>

              <h2>Why the March 2026 cut did not lower every bill</h2>
              <p>
                On March 1, 2026, PG&amp;E moved part of its costs into the Base Services Charge, about $24 a month for most
                customers, and lowered the per-kWh price to match. PG&amp;E&apos;s bill explainer says lower electricity prices may
                or may not lead to a lower total bill, because each customer&apos;s usage differs. SCE, which made the same
                change in November 2025, says low-use homes may see higher bills and high-use homes lower ones, and the same
                arithmetic applies at PG&amp;E. If your bill went up anyway, work through{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>
                , and check the{' '}
                <Link href="/blog/income-qualified-bill-discount-pge" className={guideLink}>
                  CARE and FERA discounts
                </Link>
                , which cut the daily charge to about $6 or $12 a month.
              </p>

              <h2>Why PG&amp;E rates went up over ten years</h2>
              <p>
                Measured from January 2016 to June 2026, the Public Advocates Office puts PG&amp;E&apos;s increase at 69%, and it
                names three main statewide drivers, citing the CPUC&apos;s SB 695 report: wildfire mitigation and wildfire
                liability costs; transmission and distribution investment; and rooftop solar incentives under net energy
                metering. Its shorter windows show how much of that came recently: up 39% since January 2021 and 8% since June
                2023.
              </p>

              <h2>Will PG&amp;E rates go up in 2027?</h2>
              <p>
                Probably, though nothing is decided. PG&amp;E&apos;s 2027 general rate case proposes raising revenue from $14.8
                billion in 2026 to $19.9 billion by 2030, 34%. The Public Advocates Office&apos;s analysis, updated June 24, 2026,
                argues that PG&amp;E&apos;s description of rates as stabilizing leaves out requests outside the rate case, such
                as Diablo Canyon, undergrounding and wildfire cost recovery. Counting those, it estimates total revenue could go
                from $15.4 billion to $22.2 billion, and the average bill could rise about 16% in 2027 and 30% by 2030 if all are
                approved. Its separate projection for the rest of 2026, which counts only filed requests, is about 33.9 cents
                per kWh by December 31.
              </p>
              <p>
                The rate tracker is the place to check for anything newer. For the other two big utilities, see the{' '}
                <Link href="/blog/sce-rate-increase-2026" className={guideLink}>
                  SCE rate history
                </Link>{' '}
                and{' '}
                <Link href="/blog/sdge-rate-increase-2026" className={guideLink}>
                  SDG&amp;E rate history
                </Link>
                ; for PG&amp;E&apos;s current time-of-use prices, the{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E TOU guide
                </Link>
                ; and for a bill-reading walkthrough of the 2026 changes, our{' '}
                <Link href="/blog/pge-rate-increase-2026" className={guideLink}>
                  PG&amp;E 2026 rate guide
                </Link>
                . If rising rates have you weighing solar, start with{' '}
                <Link href="/blog/nem-3-california-still-worth-it" className={guideLink}>
                  whether solar under NEM 3.0 still pays
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
              <HubSpokeLinks hub="utility_rates" currentPath={path} />
            </div>

            <SolarInquiry utility="pge" topic="PG&E rate changes" heading="Compare a Solar Plan With Your PG&E Rate" />
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
