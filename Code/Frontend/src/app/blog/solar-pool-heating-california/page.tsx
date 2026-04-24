import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Pool Heating in California: Cost, ROI, and How It Compares to Heat Pumps (2026)',
  description:
    'Solar pool heating cost in California, how panels work, when they beat heat-pump pool heaters, permits, and realistic swim-season extension. No fluff — real 2026 numbers.',
  alternates: { canonical: '/blog/solar-pool-heating-california' },
  openGraph: {
    title: 'Solar Pool Heating California: 2026 Guide',
    description: 'Solar pool heater cost, ROI, and alternatives — everything California pool owners should know.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-pool-heating-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar Pool Heating in California: Cost, ROI, and How It Compares to Heat Pumps',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-pool-heating-california' },
};

export default function SolarPoolHeatingCA() {
  return (
    <PublicLayout>
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
              <span className="text-foreground">Solar Pool Heating California</span>
            </nav>

            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Pool Heating · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Pool Heating in California: Cost, ROI, and How It Compares
              </h1>
              <p className="text-lg text-muted-foreground">
                Solar pool heaters are a different animal than solar electric panels. Here&apos;s what they cost in California, how many swim weeks they actually add, and when a heat-pump pool heater is a smarter choice.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="p-4 rounded-lg border border-border bg-card text-sm">
                <strong>TL;DR:</strong> A solar pool heater in California costs $3,000–$7,000 installed and extends your swim season by 2–4 months (typically May through October instead of June through September). Payback vs gas heating is 2–3 years. Heat-pump pool heaters cost more upfront ($4,500–$9,000) but work year-round and perform better with cloud cover — worth comparing if you want a true 12-month pool.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Solar Pool Heating Works</h2>
              <p>
                Solar pool panels are unglazed black polypropylene mats mounted on your roof. Your existing pool pump pushes water through the mats, the water heats up in the sun, and flows back into the pool. That&apos;s the whole system — no electrical generation, no inverter, no utility interconnection. The water itself is the heat-transfer medium.
              </p>
              <p>
                This is why solar pool heating is categorically different from solar electric (PV). You&apos;re not generating electricity you use elsewhere — you&apos;re capturing low-grade heat directly and dumping it into your pool. That makes it inexpensive, low-maintenance, and completely separate from your home&apos;s electricity system.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar Pool Heater Cost in California (2026)</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Pool size</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Panel area needed</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Installed cost (CA)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Small (up to 15&apos; × 30&apos;)</td>
                      <td className="text-center py-3 px-3">~50% of pool surface area</td>
                      <td className="text-center py-3 px-3">$3,000–$4,500</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Medium (16&apos; × 32&apos; to 18&apos; × 36&apos;)</td>
                      <td className="text-center py-3 px-3">~60–75% of pool surface area</td>
                      <td className="text-center py-3 px-3">$4,000–$5,500</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Large (20&apos; × 40&apos;+)</td>
                      <td className="text-center py-3 px-3">~75–100% of pool surface area</td>
                      <td className="text-center py-3 px-3">$5,500–$7,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Pricing range depends on roof access difficulty, whether an automated bypass valve is installed, and whether you&apos;re bundling with a pool-pump upgrade.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Swim-Season Extension (Realistic)</h2>
              <p>In California climates, solar pool heating typically adds:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Coastal Southern California</strong> (San Diego, LA, OC): April/May through October/November — about 4 extra weeks of swim season.</li>
                <li><strong>Inland SoCal</strong> (Temecula, Riverside, Palm Springs): March through November — 6–8 extra weeks.</li>
                <li><strong>Central Valley</strong> (Fresno, Sacramento): late April through September — about 4–6 extra weeks.</li>
                <li><strong>Bay Area</strong>: June through September — about 3 extra weeks in most years (marine-layer-limited).</li>
                <li><strong>Coastal NorCal</strong> (Monterey, Santa Cruz): marginal — fog often overwhelms solar gain, 1–2 weeks of added warmth at best.</li>
              </ul>
              <p>A pool cover on top of solar heating doubles the effective gain by reducing evaporative loss overnight. Every serious solar pool heater installation should include a solar cover in the budget.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar vs Heat-Pump Pool Heater vs Gas</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Option</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Install cost</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Operating cost</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Season coverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Solar thermal</td>
                      <td className="text-center py-3 px-3">$3,000–$7,500</td>
                      <td className="text-center py-3 px-3">~$0 (pump electricity only)</td>
                      <td className="text-center py-3 px-3">Extended summer</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Heat pump</td>
                      <td className="text-center py-3 px-3">$4,500–$9,000</td>
                      <td className="text-center py-3 px-3">$100–$300/mo in use</td>
                      <td className="text-center py-3 px-3">Year-round above 50°F air</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Natural gas</td>
                      <td className="text-center py-3 px-3">$2,500–$5,000</td>
                      <td className="text-center py-3 px-3">$200–$600+/mo in use</td>
                      <td className="text-center py-3 px-3">Year-round on demand</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Many California cities have adopted all-electric reach codes that prohibit new natural gas pool heaters (Berkeley, Oakland, Palo Alto, Santa Monica, and others). If you&apos;re in one of those jurisdictions, heat pump is the de facto replacement and solar thermal is often a complement rather than an alternative.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Roof Requirements</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>South, southwest, or west-facing.</strong> East faces lose afternoon sun. North faces don&apos;t generate enough heat in California.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Roof area roughly equal to 50–75% of pool surface area.</strong> A 15 × 30 pool needs roughly 225–340 sq ft of panel area.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Minimum 10 years of remaining roof life.</strong> You don&apos;t want to pull panels to replace a roof in 3 years.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div><strong>No tile-roof premium here.</strong> Unlike PV, solar thermal panels don&apos;t require tile removal under the mats — they mount on brackets over the tile. Tile homes are actually cheaper to install on than PV.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Permits and HOAs</h2>
              <p>Solar thermal pool heating generally requires:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A plumbing permit (not an electrical permit, since there&apos;s no PV electricity).</li>
                <li>Sometimes a building permit for the roof attachment, depending on jurisdiction.</li>
                <li>HOA approval under the same Civil Code § 714 Solar Rights Act protections that apply to PV.</li>
              </ul>
              <p>Permits typically total $200–$600. Most installers include permit handling in their turnkey price.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Does the Federal Tax Credit Apply?</h2>
              <p>
                The 30% Residential Clean Energy Credit (IRC § 25D) applies to solar water heating — which includes pool heating only under specific conditions: the pool must be <em>primary indoor-use</em> heating, not a purely recreational outdoor pool. For most residential backyard pools in California, the answer is <strong>no</strong>, the ITC does not apply. Work with a tax professional to verify for your specific setup.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is My Roof Good for Solar?</Link></li>
                <li><Link href="/blog/solar-tax-credit-expired-2026-options" className="text-primary underline">Solar Tax Credit 2026 Options</Link></li>
                <li><Link href="/best-solar-companies-california" className="text-primary underline">Best Solar Companies in California</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
