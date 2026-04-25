import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'Solar Rebates by California Utility (2026): PG&E, SCE, SDG&E, LADWP, SMUD',
  description:
    'Solar and battery rebates by California utility in 2026 — PG&E, SCE, SDG&E, LADWP, SMUD, Roseville Electric, Glendale Water & Power. SGIP, DAC-SASH, TECH Clean, and municipal-only programs.',
  alternates: { canonical: '/blog/solar-rebates-by-california-utility' },
  openGraph: {
    title: 'Solar Rebates by California Utility (2026)',
    description: 'A utility-by-utility guide to every 2026 solar and battery rebate in California.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-rebates-by-california-utility',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar Rebates by California Utility (2026)',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-rebates-by-california-utility' },
};

export default function SolarRebatesByCAUtility() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Solar Rebates by California Utility (2026): PG&E, SCE, SDG&E, LADWP, SMUD"} url="https://ratereliefca.com/blog/solar-rebates-by-california-utility" datePublished="2026-04-24" dateModified="2026-04-24" description={"Solar and battery rebates by California utility in 2026 — PG&E, SCE, SDG&E, LADWP, SMUD, Roseville Electric, Glendale Water & Power. SGIP, DAC-SASH, TECH Clean, and municipal-only programs."} />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span className="text-foreground">Solar Rebates by CA Utility</span>
            </nav>

            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Rebate Guide · 2026</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar &amp; Battery Rebates by California Utility (2026)
              </h1>
              <p className="text-lg text-muted-foreground">
                California has the most fragmented solar-rebate landscape in the country. Some programs are statewide (SGIP, ITC); others are utility-specific. Here&apos;s what actually applies based on who bills you.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Statewide Programs (Apply Everywhere in California)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Federal Residential Clean Energy Credit (ITC).</strong> 30% of qualified solar + battery cost, through 2032. Applies regardless of utility.</li>
                <li><strong>Self-Generation Incentive Program (SGIP).</strong> Statewide battery rebate administered by CPUC. General market tier ~$150–$200/kWh. Equity Resiliency tier can cover the entire battery cost for qualifying households.</li>
                <li><strong>California Property Tax Exclusion.</strong> Solar and battery systems do not trigger property tax reassessment.</li>
                <li><strong>DAC-SASH and SASH.</strong> Low-income solar programs administered by GRID Alternatives. Income qualification required.</li>
                <li><strong>TECH Clean California.</strong> Heat-pump water heater and HVAC rebates for electrification — not solar-specific but stacks well with solar for home decarbonization.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">PG&amp;E (Pacific Gas &amp; Electric)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NEM 3.0 Net Billing.</strong> Export credit ~5–8¢/kWh (vs ~41¢ retail rate).</li>
                <li><strong>SGIP battery rebate.</strong> All PG&amp;E customers eligible. Equity Resiliency tier applies to Tier 2/3 HFTD zones (which covers large portions of Sonoma, Napa, Sierra foothills, and rural PG&amp;E territory).</li>
                <li><strong>CARE &amp; FERA bill discounts.</strong> 30–35% (CARE) or 18% (FERA) off entire bill for income-qualified households.</li>
                <li><strong>Medical Baseline allowance.</strong> Additional baseline electricity at lowest-tier pricing for medical-equipment households.</li>
                <li><strong>PSPS battery incentive bonus.</strong> PG&amp;E occasionally runs PSPS-area-specific battery programs, confirm current offerings in the PG&amp;E Marketplace.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SCE (Southern California Edison)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NEM 3.0 Net Billing.</strong> Export credit ~5–8¢/kWh (vs ~34.5¢ retail rate).</li>
                <li><strong>SGIP battery rebate.</strong> All SCE customers eligible. Equity Resiliency tier applies to Tier 2/3 HFTD zones (covers parts of Riverside, San Bernardino, LA mountain communities).</li>
                <li><strong>CARE &amp; FERA bill discounts.</strong> Same structure as PG&amp;E.</li>
                <li><strong>Medical Baseline.</strong> Same structure as PG&amp;E.</li>
                <li><strong>SCE EV TOU rate plans.</strong> Time-of-use plans designed around home EV charging — worth pairing with solar + battery.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SDG&amp;E (San Diego Gas &amp; Electric)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>NEM 3.0 Net Billing.</strong> Export credit ~5–8¢/kWh (vs ~45.7¢ retail rate — the highest utility rate in the nation, which makes solar self-consumption particularly valuable).</li>
                <li><strong>SGIP battery rebate.</strong> All SDG&amp;E customers eligible.</li>
                <li><strong>CARE &amp; FERA bill discounts.</strong> Same structure.</li>
                <li><strong>EV-TOU-5 rate plan.</strong> San Diego-specific EV rate worth comparing when pairing with solar.</li>
                <li><strong>Equity Resiliency battery incentive.</strong> Applies to back-country fire-prone zones (East County, Valley Center).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">LADWP (Los Angeles Department of Water and Power)</h2>
              <p>
                LADWP is a municipal utility and operates <em>outside</em> NEM 3.0 / CPUC jurisdiction. The economics are different:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>LADWP Solar Incentive Program (SIP).</strong> Historically $0.15–$0.25/W installed rebate for new solar. Confirm current availability — the program has gone through multiple iterations.</li>
                <li><strong>LADWP net metering.</strong> Retail-rate-equivalent export credit (much more favorable than NEM 3.0&apos;s 5–8¢).</li>
                <li><strong>LIRA (Low-Income Rate Assistance).</strong> 25% discount for income-qualified households.</li>
                <li><strong>Feed-In Tariff (FiT).</strong> Commercial / multi-family solar can sell power to LADWP under long-term contracts.</li>
                <li><strong>SGIP does not apply in LADWP territory.</strong> LADWP runs its own battery program separately.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SMUD (Sacramento Municipal Utility District)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SMUD Net Energy Metering.</strong> Retail-rate-equivalent export credit (again, much more favorable than NEM 3.0).</li>
                <li><strong>SMUD Storage Incentive.</strong> Rebates for customer-sited batteries; check current funding levels.</li>
                <li><strong>Energy Assistance Program Rate (EAPR).</strong> Discount for income-qualified SMUD customers.</li>
                <li><strong>Medical Equipment Discount Rate (MEDR).</strong> Discount for medical-baseline households.</li>
                <li><strong>EV Rate (Time-of-Day EV).</strong> Discounted overnight charging rate for EV owners.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Roseville Electric Utility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Roseville Electric Net Metering.</strong> Retail-rate-equivalent export credit.</li>
                <li><strong>Residential Electric Rate Assistance Program.</strong> Bill discount for income-qualified households.</li>
                <li><strong>Electric vehicle rate.</strong> Lower overnight rate for EV charging.</li>
                <li><strong>No SGIP.</strong> Roseville Electric runs its own battery incentive landscape separately.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Glendale Water &amp; Power</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>GWP Net Metering.</strong> Retail-rate-equivalent export credit.</li>
                <li><strong>GWP Smart Home Rebate program.</strong> Rebates on EV chargers, heat-pump water heaters, and related electrification.</li>
                <li><strong>Low-income assistance programs.</strong> Multiple bill-discount options for qualifying households.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Claim Everything You Qualify For</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Federal 30% ITC</strong>, claim on IRS Form 5695 with your tax return. Keep contractor invoice and proof of payment.</li>
                <li><strong>SGIP (if applicable)</strong>. Your installer should file on your behalf. Confirm before signing. Lead time 60–120 days for reimbursement in some tiers.</li>
                <li><strong>Utility-specific incentives</strong>. Usually handled through utility Marketplace program or manufacturer rebate forms. Ask your installer for a list of all applicable utility programs and which they&apos;ll file.</li>
                <li><strong>CARE / FERA / LIRA / EAPR</strong> — apply directly through utility account online. These are ongoing bill discounts, not one-time rebates.</li>
                <li><strong>TECH Clean California</strong> (heat pump water heater/HVAC), apply through participating contractor; the rebate is deducted from your install cost.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link></li>
                <li><Link href="/blog/low-income-solar-california" className="text-primary underline">Low-Income Solar Programs in California</Link></li>
                <li><Link href="/blog/solar-tax-credit-expired-2026-options" className="text-primary underline">Federal Solar Tax Credit 2026 Options</Link></li>
                <li><Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></li>
                <li><Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className="text-primary underline">PG&amp;E vs SCE vs SDG&amp;E Rates Compared</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
