import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { RelatedGuides } from "@/components/shared/RelatedGuides";
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

import { ArticleCTA } from '@/components/shared/ArticleCTA';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
const metaTitle = "Solar Pool Heating in California: Cost, Sizing and Payback";
const metaDescription =
  "What DOE says a solar pool heater costs, how big the collectors should be and how fast it pays back, plus how solar compares with heat pump and gas heaters.";
const DOE_SOLAR_POOL = "https://www.energy.gov/energysaver/solar-swimming-pool-heaters";
const DOE_HEAT_PUMP_POOL = "https://www.energy.gov/energysaver/heat-pump-swimming-pool-heaters";
const IRS_5695 = "https://www.irs.gov/instructions/i5695";
const CHECKED = "September 23, 2026";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/blog/solar-pool-heating-california' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/blog/solar-pool-heating-california',
    publishedTime: '2026-04-24T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

export default function SolarPoolHeatingCA() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Solar Pool Heating in California: Cost, Sizing and Payback"} url="https://ratereliefca.com/blog/solar-pool-heating-california" datePublished="2026-04-24" dateModified="2026-09-23" description={"Solar pool heating in California: DOE cost, sizing and payback figures, how the collectors work, when a heat pump fits, permits and the tax credit."} />
      <Header />
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
                Solar Pool Heating in California: Cost, Sizing and Payback
              </h1>
              <p className="text-lg text-muted-foreground">
                A solar pool heater&apos;s cost and payback depend on your pool, your roof and your local sun and fuel prices. This page gives the U.S. Department of Energy&apos;s figures for cost, collector size and payback, and when a heat-pump pool heater may fit better. Then get written bids for your own pool.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="p-4 rounded-lg border border-border bg-card text-sm">
                <strong>TL;DR:</strong> A solar pool heater extends your swim season into the cooler months; how far depends on the collector area, the pool cover and your location. Its price and payback against gas heating depend on the pool size and the bids you get, so compare written quotes. A heat-pump pool heater does not need sun, but DOE says it loses efficiency once outdoor air drops below about 50°F.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="California solar pool heating" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Solar Pool Heating Works</h2>
              <p>
                Solar pool panels are unglazed black polypropylene mats mounted on your roof. Your existing pool pump pushes water through the mats, the water heats up in the sun, and flows back into the pool. That&apos;s the whole system — no electrical generation, no inverter, no utility interconnection. The water itself is the heat-transfer medium.
              </p>
              <p>
                This is why solar pool heating is categorically different from solar electric (PV). You&apos;re not generating electricity you use elsewhere; you&apos;re capturing low-grade heat directly and dumping it into your pool. That makes it inexpensive, low-maintenance, and completely separate from your home&apos;s electricity system.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar Pool Heater Cost and Sizing: What DOE Says</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">U.S. Department of Energy figures for solar pool heating cost, payback and collector sizing</caption>
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Item</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">DOE figure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Cost to buy and install</td>
                      <td className="py-3 px-3">Usually $2,500 to $4,000</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Payback</td>
                      <td className="py-3 px-3">1 to 7 years, depending on local fuel costs and available sun</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Collector area</td>
                      <td className="py-3 px-3">50% to 100% of the pool&apos;s surface area</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Northern California pools</td>
                      <td className="py-3 px-3">Typically 60% to 70% of the pool&apos;s surface area</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Pool cover</td>
                      <td className="py-3 px-3">Usually lets you use less collector area, in any climate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Source: U.S. Department of Energy, Energy Saver, <a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar Swimming Pool Heaters</a> (checked {CHECKED}). DOE&apos;s cost figure is national and carries no date, so treat it as a starting point, not a 2026 California price.</p>
              <p>A bid&apos;s price also depends on roof access, whether an automated bypass valve is included, and whether a pool-pump upgrade is bundled in. Ask each bidder to list those items separately.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Much Swim Season It Adds</h2>
              <p>
                That depends on collector area, the pool cover, and how much sun and fog your roof gets. We did not find a primary source that gives added swim weeks by California region, so this page does not list them. Ask each bidder for a written estimate of pool temperature by month for your pool, with and without a cover.
              </p>
              <p>A cover matters either way. DOE says a pool cover usually lets you get by with less collector area, so price one into the project.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Solar vs Heat-Pump Pool Heater vs Gas</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <caption className="sr-only">How solar, heat-pump and gas pool heaters compare, per the U.S. Department of Energy</caption>
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Option</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">What DOE says</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Solar</td>
                      <td className="py-3 px-3">Usually $2,500 to $4,000 installed, with a 1 to 7 year payback; heats only when the sun is out</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Heat pump</td>
                      <td className="py-3 px-3">Costs more to buy than gas but typically much less to run; works efficiently while outdoor air stays above the 45°F to 50°F range; can last 10 or more years with proper maintenance</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Gas</td>
                      <td className="py-3 px-3">Costs less to buy than a heat pump but more to run; heat pumps typically outlast gas heaters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Sources: U.S. Department of Energy, Energy Saver, <a href={DOE_SOLAR_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Solar Swimming Pool Heaters</a> and <a href={DOE_HEAT_PUMP_POOL} target="_blank" rel="noopener noreferrer" className="text-primary underline">Heat Pump Swimming Pool Heaters</a> (both checked {CHECKED}).</p>
              <p>
                Before you price a gas heater, ask your city whether local building rules limit new gas equipment. If they do, a heat pump is the likely replacement and solar becomes a way to cut how often it runs.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Roof Requirements</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Facing south, or close to it.</strong> DOE says true south is best, and collectors can face up to 45° east or west of true south without a significant loss in performance.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Collector area of 50% to 100% of the pool&apos;s surface.</strong> That is DOE&apos;s range; it puts Northern California pools at 60% to 70%. A 15 × 30 foot pool (450 sq ft) would need about 225 to 450 sq ft of collector.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>Enough roof life left.</strong> If the roof will need replacing soon, do that first, or get the cost to remove and reinstall the collectors in writing.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-status-warning flex-shrink-0 mt-0.5" />
                  <div><strong>Tile roofs: ask how the collectors attach.</strong> Mounting differs from solar electric panels. The bid should say how the tile is handled and who warrants the roof penetrations.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Permits and HOAs</h2>
              <p>Solar thermal pool heating generally requires:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A plumbing permit (not an electrical permit, since there&apos;s no PV electricity).</li>
                <li>Sometimes a building permit for the roof attachment, depending on jurisdiction.</li>
                <li>HOA approval under the same Civil Code § 714 Solar Rights Act protections that apply to PV.</li>
              </ul>
              <p>Permit fees vary by city. Ask whether the bid includes the permits and who pulls them.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Does the Federal Tax Credit Apply?</h2>
              <p>
                No. The IRS instructions for Form 5695 say you can&apos;t claim the residential clean energy credit for expenditures made after December 31, 2025. Even before that, the same instructions covered solar water heating only for water used in your home, and excluded costs allocable to &ldquo;a swimming pool, hot tub, or any other energy storage medium that has a function other than the function of such storage&rdquo; (<a href={IRS_5695} target="_blank" rel="noopener noreferrer" className="text-primary underline">IRS, Instructions for Form 5695</a>, revised April 30, 2026, checked {CHECKED}). Work with a tax professional if you paid for any solar equipment in 2025 or earlier.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is My Roof Good for Solar?</Link></li>
                <li><Link href="/blog/solar-tax-credit-expired-2026-options" className="text-primary underline">Solar Tax Credit 2026 Options</Link></li>
                <li><Link href="/best-solar-companies-california" className="text-primary underline">Best Solar Companies in California</Link></li>
              </ul>
            </div>
          <ArticleCTA />
          <div className="mt-8">
            <SolarInquiry topic="California solar pool heating" />
          </div>
             <RelatedGuides
               heading="Where the pool load sits in a solar plan"
               links={[
                 { href: "/solar-problems/running-ac-with-solar-california", label: "What happens when a large load runs all day" },
                 { href: "/solar-problems/what-solar-doesnt-cover-california", label: "What a system does not cover" },
               ]}
             />

          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
