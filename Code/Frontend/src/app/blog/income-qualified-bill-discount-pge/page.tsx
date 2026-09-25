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
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

const path = '/blog/income-qualified-bill-discount-pge';
const url = `https://ratereliefca.com${path}`;
const title = 'PG&E Income-Qualified Bill Discount: CARE and FERA (2026)';
const h1 = 'PG&E Income-Qualified Bill Discounts: CARE, FERA and the Lower Daily Charge';
const description =
  "PG&E's income-qualified discounts are CARE (35%+ off electricity) and FERA (18%). See 2026–27 income limits, the lower daily charge and how to apply.";
const published = '2026-09-23';
const updated = '2026-09-23';
const hub = { label: 'Why California electric bills are high', href: '/blog/why-is-my-california-electric-bill-so-high' };

const sources = rateSources('pgeCare', 'pgeFera', 'cpucCareFera', 'pgeResRatesCurrent', 'pgeBsc', 'pgeFinancialAssistance', 'paoQ2_2026', 'cpucRateComparison', 'pgeSolarBilling', 'opucPgeIqbd');

const faqs = [
  {
    question: 'What is the income-qualified discount on a PG&E bill?',
    answer:
      "In California it is CARE or FERA. CARE gives 35% or more off electricity and 20% or more off gas, and FERA gives 18% off electricity, for households under the CPUC's income limits. Both also put you on a lower daily Base Services Charge. The program actually named the Income Qualified Bill Discount belongs to Portland General Electric in Oregon.",
  },
  {
    question: 'What is the income limit for PG&E CARE in 2026?',
    answer:
      'From June 1, 2026 through May 31, 2027, total gross household income must be at or below $43,280 for one or two people, $54,640 for three, $66,000 for four and $77,360 for five, plus $11,360 for each additional person, per the CPUC. You can also qualify through programs such as CalFresh, Medi-Cal, WIC or SSI.',
  },
  {
    question: 'How much does CARE save on a PG&E bill?',
    answer:
      "PG&E's rate table says CARE customers get 35% off their bundled usage charges and the lowest Base Services Charge, $0.19713 a day instead of $0.79343. The CPUC Public Advocates Office puts the total discount at about 40% once the lower daily charge and exemptions are counted.",
  },
  {
    question: 'Can I get CARE if a community choice provider supplies my power?',
    answer:
      'Yes. The CPUC says the CARE and FERA discounts apply to income-qualified utility and community choice aggregation customers, so a CCA line on your bill does not stop you from enrolling through PG&E.',
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, type: 'article', url, publishedTime: `${published}T00:00:00Z`, modifiedTime: `${updated}T00:00:00Z`, images: [CRR_SOCIAL_CARD] },
};

export default function IncomeQualifiedBillDiscountPgePage() {
  return (
    <PublicLayout breadcrumbLabel="PG&E income-qualified bill discounts" breadcrumbParent={hub}>
      <ArticleJsonLd variant="Article" domain="crr" headline={title} url={url} datePublished={published} dateModified={updated} description={description} />
      <Header />
      <main className="bg-background py-16">
        <div className="container mx-auto px-4">
          <article className="mx-auto max-w-3xl">
            <GuideHeader parent={hub} current="PG&E income-qualified discounts" kicker="PG&E · Bill help" title={h1} updated={updated} sourceCount={sources.length} />

            <div className="prose prose-slate max-w-none">
              <p className="text-lg leading-relaxed text-foreground/85">
                PG&amp;E&apos;s income-qualified bill discounts are CARE and FERA. CARE takes 35% or more off electricity and
                20% or more off gas. FERA takes 18% off electricity for households just above the CARE limits. Both also lower
                PG&amp;E&apos;s daily Base Services Charge. A family of four qualifies for CARE with income up to $66,000 a
                year through May 31, 2027.
              </p>
              <HubUpLink path="/blog/income-qualified-bill-discount-pge" />
              <p>
                <strong>A note on the name.</strong> The program actually called the &ldquo;Income Qualified Bill
                Discount&rdquo; belongs to Portland General Electric, a different utility in Oregon, which started it on April
                15, 2022, under an Oregon state law, according to the Oregon Public Utility Commission. If your bill comes from
                Portland General Electric, ask them. This page covers Pacific Gas and Electric in California, where the same
                idea goes by CARE and FERA.
              </p>

              <div className="not-prose">
                <KeyFacts
                  heading="PG&E discounts at a glance"
                  facts={[
                    { label: 'CARE electric discount', value: '35% or more', note: '20% or more on gas', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeCare.url } },
                    { label: 'FERA electric discount', value: '18%', note: 'Same application as CARE', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeFera.url } },
                    { label: 'Base Services Charge on CARE', value: '$0.19713/day', note: 'vs. $0.79343 standard', source: { publisher: 'PG&E', date: RATE_SOURCES_CHECKED, url: SRC.pgeResRatesCurrent.url } },
                    { label: 'CARE limit, household of 4', value: '$66,000', note: 'June 1, 2026 to May 31, 2027', source: { publisher: 'CPUC', date: RATE_SOURCES_CHECKED, url: SRC.cpucCareFera.url } },
                  ]}
                />
              </div>

              <h2>What CARE and FERA take off a PG&amp;E bill</h2>
              <p>
                The discount has two parts. The first is a percentage off what you pay per kWh. PG&amp;E&apos;s current rate
                table says CARE customers get 35% off their total bundled volumetric charges on whatever plan they are on,
                except the California Climate Credit, and calls it a line-item discount, meaning it is figured on your regular
                charges rather than through a separate CARE rate plan. The second part is the Base Services Charge, the daily
                fixed charge PG&amp;E started on March 1, 2026. It comes in three income tiers.
              </p>
              <DataTable
                caption="PG&E income-qualified discounts and Base Services Charge tiers, 2026"
                columns={['Group', 'Discount on usage', 'Base Services Charge per day', 'About per 30 days']}
                rows={[
                  ['CARE (Income Tier 1)', '35% or more on electricity; 20% or more on gas', '$0.19713', '$5.91'],
                  ['FERA (Income Tier 2)', '18% on electricity', '$0.39688', '$11.91'],
                  ['Everyone else (Income Tier 3)', 'None', '$0.79343', '$23.80'],
                ]}
                note={<>Sources: PG&amp;E residential rate table effective March 1, 2026 (Advice Letter 7846-E); PG&amp;E CARE and FERA pages. All checked September 23, 2026. The 30-day column is our arithmetic. PG&amp;E says customers in deed-restricted affordable housing may also get a discounted Base Services Charge.</>}
              />
              <p>
                Put together, the Public Advocates Office estimates that CARE customers see total discounts of about 40% once
                the lower daily charge and exemptions are counted. Here is a simple example, our arithmetic on PG&amp;E&apos;s
                E-1 tiered plan at March 1, 2026 prices: a 30-day bill of 400 kWh, all within the baseline allowance, costs
                about $154.05 for a standard customer (400 × 32.561 cents plus 30 days × $0.79343). On CARE it is about $90.57
                (35% off the energy charge plus 30 days × $0.19713), roughly $63 less. Taxes and exemptions will move both
                numbers a little.
              </p>

              <h2>PG&amp;E CARE and FERA income limits, June 2026 to May 2027</h2>
              <p>
                Eligibility is based on total gross household income, meaning everyone living in the home and every source:
                wages, Social Security, pensions, child support, rental income, self-employment and the rest, before taxes.
                The CPUC sets the limits each year. The current table runs from June 1, 2026 through May 31, 2027.
              </p>
              <DataTable
                caption="CARE and FERA annual household income limits (June 1, 2026 to May 31, 2027)"
                columns={['People in household', 'CARE: up to', 'FERA: above CARE and up to']}
                rows={[
                  ['1–2', '$43,280', '$54,100'],
                  ['3', '$54,640', '$68,300'],
                  ['4', '$66,000', '$82,500'],
                  ['5', '$77,360', '$96,700'],
                  ['6', '$88,720', '$110,900'],
                  ['7', '$100,080', '$125,100'],
                  ['8', '$111,440', '$139,300'],
                  ['Each additional person', '+$11,360', '+$14,200'],
                ]}
                note={<>Source: CPUC CARE/FERA Program page, checked September 23, 2026. CARE is 200% of the federal poverty guidelines and FERA 250%. FERA is available only at PG&amp;E, SCE and SDG&amp;E.</>}
              />
              <p>
                You can also qualify for CARE without an income test if you or someone in the household is enrolled in
                LIHEAP, WIC, CalFresh/SNAP, CalWORKs or Tribal TANF, SSI, Medi-Cal or Medicaid, the National School Lunch
                Program, Bureau of Indian Affairs General Assistance, Head Start Income Eligible (tribal only) or Healthy
                Families A and B.
              </p>

              <h2>Rules that trip people up</h2>
              <ul>
                <li>The PG&amp;E bill must be in your name, and you must live at that address. Sub-metered tenants use the landlord&apos;s bill in their name.</li>
                <li>No one other than a spouse can claim you as a dependent on a tax return.</li>
                <li>For CARE, you cannot share a meter with another home, and your monthly use cannot exceed six times the Tier 1 allowance.</li>
                <li>PG&amp;E may ask for proof of income after you enroll, and CARE customers may be asked to take part in the Energy Savings Assistance program.</li>
                <li>CARE must be renewed every two years, or every four years on a fixed income. Tell PG&amp;E if you stop qualifying.</li>
              </ul>
              <p>
                One application covers both programs: if you do not qualify for CARE, PG&amp;E checks FERA, and the other way
                around. PG&amp;E says the online form takes a few minutes and needs no documents at the time you apply. You can
                also call PG&amp;E&apos;s CARE line at 1-866-743-2273.
              </p>

              <h2>If you are already behind on the bill</h2>
              <p>
                You have company. The Public Advocates Office counted 1,356,481 PG&amp;E customers, 24%, behind on their bills
                in May 2026, owing $572 on average. PG&amp;E lists several programs beyond the rate discount:
              </p>
              <ul>
                <li><strong>Arrearage Management Plan (AMP):</strong> up to $8,000 in debt forgiveness for CARE and FERA customers.</li>
                <li><strong>REACH:</strong> up to $800 toward a past-due bill if you received a disconnection notice.</li>
                <li><strong>Match My Payment:</strong> PG&amp;E may match your payment up to $1,000.</li>
                <li><strong>LIHEAP:</strong> up to $1,000 for past-due bills, through the federal program.</li>
                <li><strong>Payment arrangements and Budget Billing:</strong> spread a balance over several months, or even out seasonal peaks.</li>
                <li><strong>Medical Baseline:</strong> not income-based; it helps customers who depend on power for certain medical needs.</li>
              </ul>
              <p>
                Who qualifies for each, which to apply for first and how to reach the agencies are covered in{' '}
                <Link href="/blog/help-with-pge-bill" className={guideLink}>
                  REACH, LIHEAP and debt forgiveness for past-due bills
                </Link>
                .
              </p>

              <h2>How the discount fits with rates and your plan</h2>
              <p>
                CARE lowers the price of whatever plan you are on, so the plan choice still matters. The trade-offs between
                PG&amp;E&apos;s tiered and time-of-use plans are in{' '}
                <Link href="/blog/pge-tier-rates" className={guideLink}>
                  PG&amp;E tier rates
                </Link>{' '}
                and{' '}
                <Link href="/blog/pge-time-of-use-rates-2026" className={guideLink}>
                  PG&amp;E time-of-use plans
                </Link>
                . If a community choice provider buys your power, the discount still applies; the CPUC says CARE and FERA
                cover utility and CCA customers alike. What that provider&apos;s line means is covered in{' '}
                <Link href="/blog/what-is-3rd-party-electric-on-pge-bill" className={guideLink}>
                  third-party electric charges on a PG&amp;E bill
                </Link>
                . For how PG&amp;E prices have moved, see{' '}
                <Link href="/blog/did-pge-rates-go-up" className={guideLink}>
                  whether PG&amp;E rates went up
                </Link>{' '}
                and the{' '}
                <Link href="/california-utility-rate-tracker" className={guideLink}>
                  California utility rate tracker
                </Link>
                . If a small home&apos;s bill still looks high, the{' '}
                <Link href="/blog/average-pge-bill-for-1-bedroom-apartment" className={guideLink}>
                  one-bedroom PG&amp;E bill math
                </Link>{' '}
                shows what is typical, and{' '}
                <Link href="/blog/why-is-my-pge-bill-so-high" className={guideLink}>
                  why a PG&amp;E bill runs high
                </Link>{' '}
                walks through the checks.
              </p>
              <p>
                Going solar does not end the daily charge. PG&amp;E says Solar Billing Plan customers still see the Base
                Services Charge on their monthly statements, so a CARE or FERA household keeps paying its lower tier. How
                exports are credited is a separate question, covered in{' '}
                <Link href="/blog/net-billing-vs-net-metering-california" className={guideLink}>
                  net billing vs. net metering
                </Link>
                .
              </p>
              <p>
                Without panels, CARE or FERA can also open a solar discount. PG&amp;E&apos;s Green Saver program takes 20% off
                the electric bill for customers who buy their power from PG&amp;E, are eligible for CARE or FERA and live in a
                disadvantaged or tribal community, though PG&amp;E says it is currently at capacity and enrolls eligible customers automatically as
                space opens. The rules are in{' '}
                <Link href="/blog/pge-solar-program" className={guideLink}>
                  PG&amp;E&apos;s solar programs, including Green Saver
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

            <SolarInquiry utility="pge" topic="PG&E bill discounts" variant="bill" heading="Compare a Solar Plan With Your PG&E Bill" />
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
