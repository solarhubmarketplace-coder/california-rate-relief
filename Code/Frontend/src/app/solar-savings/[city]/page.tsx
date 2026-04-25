import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SavingsCalculator from '@/components/SavingsCalculator';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Sun, Zap, DollarSign, Home } from 'lucide-react';
import {
  CITIES,
  UTILITY_DATA,
  getCityBySlug,
  getAllCitySlugs,
  type CityData,
  type UtilityData,
} from '@/data/cities-data';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { TrustedSources } from '@/components/shared/TrustedSources';

// =============================================================================
// STATIC PARAMS — Pre-renders all city pages at build time
// =============================================================================
export function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

// =============================================================================
// DYNAMIC METADATA — SEO title, description, OG tags per city
// =============================================================================
interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `/solar-savings/${city.slug}`,
    },
    openGraph: {
      title: city.ogTitle,
      description: city.ogDescription,
      type: 'article',
      publishedTime: '2026-04-14T00:00:00Z',
    },
  };
}

// =============================================================================
// JSON-LD SCHEMA GENERATORS
// =============================================================================
function buildLocalBusinessSchema(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `California Rate Relief Program — ${city.name}`,
    url: `https://ratereliefca.com/solar-savings/${city.slug}`,
    description: `Helping ${city.name} homeowners reduce their electricity bills through solar energy programs. Licensed, bonded, and insured.`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'California',
      },
    },
    serviceType: 'Solar Power Purchase Agreement (PPA)',
    priceRange: '$0 down',
  };
}

function buildFAQSchema(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// =============================================================================
// PAGE COMPONENT
// =============================================================================
export default async function CityPage({ params }: PageProps) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const utility = UTILITY_DATA[city.utilityCode];
  const rateDisplay = `${(utility.ratePerKwh * 100).toFixed(1)}¢`;
  const annualBill = city.avgMonthlyBill * 12;

  const localBusinessSchema = buildLocalBusinessSchema(city);
  const faqSchema = buildFAQSchema(city);

  return (
    <PublicLayout>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">
                {city.name}, CA
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Savings in {city.name}: What It Actually Costs and What
                You&apos;ll Save in 2026
              </h1>
              <p className="text-lg text-muted-foreground">
                A data-driven guide for {city.name} homeowners — your local
                rates, solar costs, incentives, HOA rules, and every option for
                lowering your electric bill.
              </p>
            </header>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {rateDisplay}
                </div>
                <div className="text-xs text-muted-foreground">
                  {utility.shortName} avg. rate/kWh
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  ${city.avgMonthlyBill}
                </div>
                <div className="text-xs text-muted-foreground">
                  Avg. monthly bill
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Sun className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {city.peakSunHours} hrs
                </div>
                <div className="text-xs text-muted-foreground">
                  Peak sun hours/day
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Home className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">
                  {city.population}
                </div>
                <div className="text-xs text-muted-foreground">
                  Population (2025)
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-slate max-w-none">
              {/* Intro */}
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {city.introText}
              </p>

              {/* What Residents Pay */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                What {city.name} Residents Actually Pay for Electricity
              </h2>
              {city.electricitySection.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}

              {/* Step 1: Check Rate Plan */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Step 1: Check Your {utility.shortName} Rate Plan (Free, 10
                Minutes)
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Before anything else, log into your{' '}
                <a
                  href={utility.accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {utility.shortName} account
                </a>{' '}
                and check which rate plan you&apos;re on. {utility.ratePlanAdvice}
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                If you can shift heavy electricity use (laundry, dishwasher, EV
                charging, pool pump) to off-peak hours (before 4 PM or after 9
                PM), you can save 10-15% just by being on the right TOU plan.
                {city.name === 'Temecula' &&
                  ' In Temecula specifically, pre-cooling your home before 4 PM during summer and running the pool pump in the morning are two of the highest-impact changes.'}
              </p>

              {/* Step 2: Discounts */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Step 2: Check If You Qualify for Discounts
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {utility.shortName} offers income-based discount programs that
                many qualifying {city.name} households haven&apos;t applied
                for. <strong>CARE</strong> provides a 30-35% discount on your
                entire bill if your household income is below certain
                thresholds. <strong>FERA</strong> offers an 18% discount for
                families of 3+ with slightly higher income limits. Check
                eligibility and apply at{' '}
                <a
                  href={utility.careFeraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {utility.shortName}&apos;s assistance page
                </a>
                .
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                If anyone in your household relies on electricity-dependent
                medical equipment (CPAP, home dialysis, powered wheelchair,
                etc.), you may qualify for <strong>Medical Baseline</strong>,
                which gives you additional electricity at the lowest rate tier.
              </p>

              {/* Solar Potential */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {city.name}&apos;s Solar Potential
              </h2>
              {city.solarPotentialText.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-foreground/80 leading-relaxed mb-6"
                >
                  {paragraph}
                  {i === city.solarPotentialText.split('\n\n').length - 1 && (
                    <>
                      {' '}
                      You can check your specific home&apos;s solar potential
                      for free at{' '}
                      <a
                        href={city.googleSunroofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Google Project Sunroof
                      </a>
                      .
                    </>
                  )}
                </p>
              ))}

              {/* What Solar Costs */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                What Solar Costs in {city.name} (2026 Numbers)
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The average {city.name} household needs a {city.systemSizeKw} kW
                solar system to cover their electricity usage. Here&apos;s what
                that looks like across different options.
              </p>

              {/* Cost Comparison Table */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">
                        Option
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        Upfront Cost
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        Monthly Cost
                      </th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">
                        Payback
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Cash purchase ({city.systemSizeKw} kW)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~${city.systemCostCash.toLocaleString()}
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~6-7 years
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar loan ({city.systemSizeKw} kW)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $180-$250
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ~9-12 years
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        Solar PPA
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $0
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        $150-$200
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        Day 1 savings
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium text-foreground/80">
                        No solar ({utility.shortName} only)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        —
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        ${city.avgMonthlyBill}+ (rising)
                      </td>
                      <td className="text-center py-3 px-3 text-foreground/80">
                        —
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/60 text-xs mb-8 italic">
                Costs are approximate based on 2026 EnergySage data for{' '}
                {city.name}. Actual costs vary by roof, system size, and
                provider. PPA monthly costs include remaining utility charges
                {utility.fixedCharge > 0
                  ? ` ($${utility.fixedCharge} fixed charge + any grid usage)`
                  : ' (any grid usage)'}
                .
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6">
                To compare quotes from local installers for a purchased system,{' '}
                <a
                  href={city.energySageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  EnergySage&apos;s {city.name} page
                </a>{' '}
                lets you get multiple quotes side by side. Always get at least 3
                quotes before committing to any option.
              </p>

              {/* HOA Rules */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                HOA Rules for Solar in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Many {city.name} neighborhoods have HOAs, and homeowners often
                worry about getting approval for solar panels. Here&apos;s what
                you need to know: under California&apos;s Solar Rights Act
                (Civil Code § 714), your HOA{' '}
                <strong>cannot prohibit</strong> you from installing solar
                panels. They can impose reasonable aesthetic restrictions (like
                panel placement preferences), but any restriction that increases
                your system cost by more than $1,000 or reduces efficiency by
                more than 10% is legally unenforceable.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In practice, most {city.name} HOAs have streamlined their solar
                approval process because so many homeowners are going solar. You
                typically submit an architectural review application, and if the
                HOA doesn&apos;t respond with a written denial within 45 days,
                your application is deemed approved by default. If your HOA
                gives you pushback, the law is clearly on your side — and they
                can be liable for damages plus your attorney&apos;s fees if
                they unreasonably block your installation.
              </p>

              {/* NEM & Battery */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                {utility.nemVersion} and Battery Storage in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {city.name} is on {utility.shortName}&apos;s{' '}
                {utility.nemVersion} tariff, which means the excess solar
                energy you send back to the grid earns only {utility.exportRate}{' '}
                — far less than the {rateDisplay}+ you pay to buy it back
                during peak hours. This is why battery storage has become
                essential for maximizing savings.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                With a battery, you store excess daytime solar and use it during
                peak evening hours (4-9 PM) when {utility.shortName} rates are
                highest. A solar + battery system typically offsets 70-90% of
                your grid usage, compared to 40-60% with solar alone. For more
                detail on how this works, see our{' '}
                <Link
                  href="/blog/nem-3-california-still-worth-it"
                  className="text-primary hover:underline"
                >
                  NEM 3.0 guide
                </Link>
                .
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                California&apos;s Self-Generation Incentive Program (SGIP) may
                still offer rebates for battery storage — check current
                availability at{' '}
                <a
                  href="https://www.selfgenca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  selfgenca.com
                </a>
                . SGIP funds are limited and allocated first-come, first-served.
              </p>

              {/* When Solar Doesn't Work */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                When Solar Doesn&apos;t Make Sense in {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {city.whenSolarDoesntWork}
              </p>

              {/* City-Specific Tips */}
              {city.localTips.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                    {city.name}-Specific Tips
                  </h2>
                  {city.localTips.map((tip, i) => (
                    <p
                      key={i}
                      className="text-foreground/80 leading-relaxed mb-6"
                    >
                      <strong>{tip.title}</strong> {tip.content}
                    </p>
                  ))}
                </>
              )}

              {/* FAQs */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Frequently Asked Questions
              </h2>
              {city.faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-lg font-bold text-foreground mt-6 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    {faq.answer}
                  </p>
                </div>
              ))}

              {/* Tax Credit FAQ — shared across all cities */}
              <h3 className="text-lg font-bold text-foreground mt-6 mb-2">
                Is the federal solar tax credit still available?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The residential tax credit (Section 25D) expired at the end of
                2025. If you buy a system outright, there is no federal credit.
                However, the commercial credit (Section 48E) is still
                available, which is how PPA providers can offer $0-down solar
                at rates below utility prices. See our{' '}
                <Link
                  href="/blog/solar-tax-credit-expired-2026-options"
                  className="text-primary hover:underline"
                >
                  full guide on post-tax-credit options
                </Link>
                .
              </p>

              {/* Bottom Line */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                The Bottom Line for {city.name}
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {city.bottomLine}
              </p>
            </div>

            {/* Savings Calculator */}
            <SavingsCalculator
              defaultUtility={city.utilityCode}
              cityName={city.name}
            />

            {/* CTA */}
            <div className="mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight">
                {city.name} Homeowner? See Your Options
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                If you&apos;re exploring the PPA route, check your eligibility
                for the California Rate Relief Program in about 60 seconds. No
                cost, no obligation.
              </p>
              <Link
                href="/#qualify"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Check My Eligibility
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Related Content */}
            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Related Articles
              </h3>
              <div className="space-y-3">
                {city.relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block text-primary hover:underline font-medium"
                  >
                    {article.title} →
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
