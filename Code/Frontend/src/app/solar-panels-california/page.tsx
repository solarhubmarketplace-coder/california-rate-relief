import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import SavingsCalculator from '@/components/SavingsCalculator';
import { ArrowRight, Zap, DollarSign, Shield } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'Solar Panels in California: 2026 Statewide Guide to Cost, Incentives, and Installers',
  description:
    'Everything California homeowners need for solar in 2026 — statewide costs by utility, NEM 3.0 payback, rebates, top installers, and a realistic no-hype savings calculator.',
  alternates: { canonical: '/solar-panels-california' },
  openGraph: {
    title: 'Solar Panels in California (2026): Statewide Guide',
    description: '2026 cost, incentives, NEM 3.0, and installer rankings for California homeowners.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/solar-panels-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar Panels in California: 2026 Statewide Guide',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-panels-california' },
};

export default function SolarPanelsCAStatewide() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Statewide California · 2026</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Panels in California: The 2026 Statewide Guide
              </h1>
              <p className="text-lg text-muted-foreground">
                Every year California residents search for a straight answer on solar — how much it costs, whether NEM 3.0 ruined the math, which installers are reputable, and what to do when the federal tax credit changes. This is that answer for 2026.
              </p>
            </header>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Zap className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">38.6¢</div>
                <div className="text-xs text-muted-foreground">Avg CA rate/kWh (2026)</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">$2.80–$4.50</div>
                <div className="text-xs text-muted-foreground">Per-watt installed range</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <Shield className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">30%</div>
                <div className="text-xs text-muted-foreground">Federal ITC (through 2032)</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-4 text-center">
                <DollarSign className="h-5 w-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">6–10 yr</div>
                <div className="text-xs text-muted-foreground">Typical payback range</div>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Short Answer for 2026</h2>
              <p>
                California residential solar in 2026 still makes financial sense in PG&amp;E, SCE, and SDG&amp;E territory, where residential rates average 38.6¢/kWh — among the highest in the US. The math is harder in municipal-utility territories (SMUD, LADWP, Roseville, Glendale) where rates run 15–22¢/kWh. The 30% federal Residential Clean Energy Credit remains in force through 2032. NEM 3.0 reduced the value of exported solar significantly, which means your payback depends much more on self-consumption than it did under NEM 2.0.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Solar Costs in California (2026 Numbers)</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">System size</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Avg cost (cash)</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">After 30% ITC</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Typical home</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">5 kW</td>
                      <td className="text-center py-3 px-3">$15,000–$20,000</td>
                      <td className="text-center py-3 px-3">$10,500–$14,000</td>
                      <td className="text-center py-3 px-3">1,200–1,500 sq ft</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">8 kW</td>
                      <td className="text-center py-3 px-3">$22,000–$32,000</td>
                      <td className="text-center py-3 px-3">$15,400–$22,400</td>
                      <td className="text-center py-3 px-3">1,800–2,200 sq ft</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">10 kW</td>
                      <td className="text-center py-3 px-3">$28,000–$40,000</td>
                      <td className="text-center py-3 px-3">$19,600–$28,000</td>
                      <td className="text-center py-3 px-3">2,200–2,800 sq ft</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">12 kW</td>
                      <td className="text-center py-3 px-3">$34,000–$48,000</td>
                      <td className="text-center py-3 px-3">$23,800–$33,600</td>
                      <td className="text-center py-3 px-3">2,800–3,500 sq ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">NEM 3.0 in Plain English</h2>
              <p>
                California&apos;s Net Billing Tariff (NEM 3.0) took effect April 2023. Under NEM 3.0, exported solar energy is credited at roughly 5–8¢/kWh — about 75% less than the old NEM 2.0 retail-rate structure. This changes the economics but does not kill them:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Self-consumption is now king.</strong> Every kWh your solar produces that you use immediately saves you the full 40¢+/kWh retail rate. 5–8× more valuable than exporting.</li>
                <li><strong>Batteries change the math.</strong> Pairing solar with a battery (eligible for the federal ITC plus California&apos;s SGIP rebate) lets you time-shift solar into peak-rate hours, recovering most of what NEM 2.0 used to pay for exports.</li>
                <li><strong>Payback has stretched, not disappeared.</strong> Cash-purchase payback in PG&amp;E territory moved from roughly 5–7 years under NEM 2.0 to 7–10 years under NEM 3.0.</li>
              </ul>
              <p>Read: <Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">California Incentives That Still Matter in 2026</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Federal Residential Clean Energy Credit (ITC), 30% through 2032.</strong> Applies to solar, battery storage, and solar water heating.</li>
                <li><strong>Self-Generation Incentive Program (SGIP).</strong> California-specific rebate for battery storage. Equity Resiliency tier provides up to full-cost coverage for qualifying low-income and fire-prone-area households.</li>
                <li><strong>DAC-SASH and SASH.</strong> Low-income solar programs administered by GRID Alternatives.</li>
                <li><strong>Property Tax Exclusion.</strong> California does not reassess property value upward after solar installation.</li>
                <li><strong>Municipal utility incentives.</strong> SMUD, LADWP, Glendale Water &amp; Power, Roseville Electric, and others offer territory-specific solar and battery rebates separate from CPUC programs.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Pay for Solar in California</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Option</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Upfront</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Total cost over 25 years</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Best for</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Cash</td>
                      <td className="text-center py-3 px-3">$22K–$40K</td>
                      <td className="text-center py-3 px-3">Lowest</td>
                      <td className="text-center py-3 px-3">Sufficient liquid capital + tax liability</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Solar loan</td>
                      <td className="text-center py-3 px-3">$0</td>
                      <td className="text-center py-3 px-3">Medium</td>
                      <td className="text-center py-3 px-3">Credit score 680+, ownership benefits</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">PPA</td>
                      <td className="text-center py-3 px-3">$0</td>
                      <td className="text-center py-3 px-3">Highest</td>
                      <td className="text-center py-3 px-3">No upfront capital, no tax appetite</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Lease</td>
                      <td className="text-center py-3 px-3">$0</td>
                      <td className="text-center py-3 px-3">High</td>
                      <td className="text-center py-3 px-3">Predictable payment, no ownership</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Deep dive: <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">PPA vs Loan vs Lease vs Cash in California</Link>
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Regional Cost Differences in California</h2>
              <p>
                California is not a monolithic market. System cost and payback differ meaningfully by region:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-savings/bay-area" className="text-primary underline">Bay Area</Link> — PG&amp;E territory, 41¢/kWh rates, 5.4 peak-sun hours, tile-roof premium common.</li>
                <li><Link href="/solar-savings/orange-county" className="text-primary underline">Orange County</Link> — SCE, 34.5¢/kWh, 5.6 peak-sun hours, strong HOA communities.</li>
                <li><Link href="/solar-savings/san-diego-county" className="text-primary underline">San Diego County</Link>. SDG&amp;E, 45.7¢/kWh (nation&apos;s highest), 5.7 peak-sun hours.</li>
                <li><Link href="/solar-savings/inland-empire" className="text-primary underline">Inland Empire</Link>, SCE (mostly), strong sun exposure, mostly single-family newer housing.</li>
                <li><Link href="/solar-savings/central-valley" className="text-primary underline">Central Valley</Link> — PG&amp;E with SMUD pockets, mix of utility territories, hottest summers.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Top California Solar Installers (2026)</h2>
              <p>
                We maintain full reviews of 9 major California solar installers plus a ranked hub:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/best-solar-companies-california" className="text-primary underline">Best Solar Companies in California. Ranked Hub</Link></li>
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Sunrun Review</Link></li>
                <li><Link href="/solar-installers/sunpower-review" className="text-primary underline">SunPower Review</Link></li>
                <li><Link href="/solar-installers/tesla-solar-review" className="text-primary underline">Tesla Solar Review</Link></li>
                <li><Link href="/solar-installers/sunnova-review" className="text-primary underline">Sunnova Review</Link></li>
                <li><Link href="/solar-installers/trinity-solar-review" className="text-primary underline">Trinity Solar Review</Link></li>
                <li><Link href="/solar-installers/momentum-solar-review" className="text-primary underline">Momentum Solar Review</Link></li>
                <li><Link href="/solar-installers/semper-solaris-review" className="text-primary underline">Semper Solaris Review</Link></li>
                <li><Link href="/solar-installers/solar-optimum-review" className="text-primary underline">Solar Optimum Review</Link></li>
                <li><Link href="/solar-installers/freedom-forever-review" className="text-primary underline">Freedom Forever Review</Link></li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Estimate Your Own Numbers</h2>
              <p>
                Enter your typical electric bill below. We calculate system size, 25-year savings under cash / loan / PPA, and route you to up to 3 verified installer quotes.
              </p>
            </div>

            <div className="my-8">
              <SavingsCalculator />
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-is-nem-3-california" className="text-primary underline">What Is NEM 3.0?</Link></li>
                <li><Link href="/blog/solar-tax-credit-expired-2026-options" className="text-primary underline">Solar Tax Credit 2026 Options</Link></li>
                <li><Link href="/blog/are-solar-panels-worth-it-california" className="text-primary underline">Are Solar Panels Worth It in California?</Link></li>
                <li><Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className="text-primary underline">How Big a System Do I Need?</Link></li>
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
