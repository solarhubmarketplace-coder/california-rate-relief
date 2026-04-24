import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Panel Cleaning in California: Cost, DIY Risks, and When It Actually Helps (2026)',
  description:
    'How much solar panel cleaning costs in California, when production loss justifies it, DIY vs pro, warranty traps, and the seasonal windows that matter most in wildfire country.',
  alternates: { canonical: '/blog/solar-panel-cleaning-california' },
  openGraph: {
    title: 'Solar Panel Cleaning California: 2026 Guide',
    description: 'Cost, frequency, DIY risks, and when solar panel cleaning actually pays off in California.',
    type: 'article',
    publishedTime: '2026-04-24T00:00:00Z',
    url: 'https://ratereliefca.com/blog/solar-panel-cleaning-california',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Solar Panel Cleaning in California: Cost, DIY Risks, and When It Actually Helps',
  datePublished: '2026-04-24',
  dateModified: '2026-04-24',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/blog/solar-panel-cleaning-california' },
};

export default function SolarPanelCleaningCA() {
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
              <span className="text-foreground">Solar Panel Cleaning California</span>
            </nav>

            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Maintenance · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">
                Solar Panel Cleaning in California: Cost, DIY Risks, and When It Actually Helps
              </h1>
              <p className="text-lg text-muted-foreground">
                California&apos;s wildfire smoke, dry summers, and agricultural dust make panel cleaning a bigger deal here than in most of the country. Here&apos;s when it&apos;s worth paying for — and when pressure-washing your roof voids your warranty.
              </p>
            </header>

            <div className="prose prose-slate max-w-none">
              <p className="p-4 rounded-lg border border-border bg-card text-sm">
                <strong>TL;DR:</strong> Professional solar panel cleaning in California runs $150–$450 per residential system, once or twice a year. Clean panels after wildfire smoke events, post-Santa Ana winds, or when production drops more than 10% below the prior year&apos;s same-month benchmark. Do NOT pressure-wash — it voids most manufacturer warranties. DIY with a soft brush and deionized water is fine if the roof is safely accessible; otherwise pay a professional.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Much Does Dirt Actually Cost You?</h2>
              <p>
                Studies of residential PV in the Southwest US generally find <strong>2–7% production loss</strong> from soiling in typical conditions, spiking to 10–25% after heavy wildfire ash, dust storms, or prolonged drought. California&apos;s Central Valley agricultural corridor and the fire-prone Sierra foothills see the higher end of that range.
              </p>
              <p>
                For a 10 kW system producing roughly 14,000–16,000 kWh/year in California, a 5% soiling loss equals about 750 kWh. At PG&amp;E&apos;s average residential rate of 41¢/kWh, that&apos;s roughly $300/year — enough to justify one professional cleaning. At SMUD&apos;s 17¢/kWh, the same loss is $125/year, which changes the math.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Professional Cleaning Cost in California</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">System size</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Cost per cleaning</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Cost per panel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Small (4–6 kW, ~10–14 panels)</td>
                      <td className="text-center py-3 px-3">$150–$225</td>
                      <td className="text-center py-3 px-3">$12–$18</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4 font-medium">Medium (7–10 kW, ~16–24 panels)</td>
                      <td className="text-center py-3 px-3">$225–$350</td>
                      <td className="text-center py-3 px-3">$10–$15</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-medium">Large (12–18 kW, 28–44 panels)</td>
                      <td className="text-center py-3 px-3">$350–$500</td>
                      <td className="text-center py-3 px-3">$9–$13</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>Cost climbs for two-story homes, steep roofs, tile-roof access difficulty, or if the cleaner needs to deploy a boom lift. Confirm before booking.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Schedule Cleaning (California-Specific)</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>After wildfire smoke events.</strong> A thin layer of ash cuts production dramatically. Don&apos;t wait — book cleaning within 2–3 weeks of visible ash fall.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>End of summer / start of fall.</strong> Clean once before the first winter rains, especially in the Central Valley where summer dust accumulates.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>After Santa Ana winds.</strong> Southern California&apos;s fall dust-laden winds deposit significant grit that rain alone doesn&apos;t fully remove.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div><strong>When production drops 10%+ below the prior year&apos;s same month.</strong> Check your monitoring app (Enphase Enlighten, SolarEdge, Tesla, etc.) against the year-over-year baseline.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Winter rain often does the job for free.</strong> In coastal California, the first 2–3 heavy rains typically restore production to within 2–3% of clean. Central Valley and inland Southern California do not reliably get enough winter rain for this.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">DIY Risks (And What Kills Your Warranty)</h2>
              <p>
                Doing it yourself can save $200+ — but several common mistakes void your panel manufacturer warranty.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Pressure washing is a warranty killer.</strong> High-pressure water damages panel seals and can delaminate glass/EVA. Every major Tier-1 manufacturer (Qcells, Silfab, REC, Canadian Solar, Panasonic/Maxeon, Longi, Jinko) explicitly disallows pressure washing in the warranty.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Hot water on hot panels can crack glass.</strong> Thermal shock is real. Clean early morning or on overcast days when panels are near ambient temp.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Abrasive pads scratch anti-reflective coatings.</strong> Only use soft microfiber, sheep&apos;s wool mops, or telescoping soft-bristle brushes designed for PV.</div>
                </li>
                <li className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div><strong>Household detergents streak.</strong> Use deionized water alone, or a dilute dish-soap solution followed by clean-water rinse. Hard tap-water minerals leave spots that reduce light transmission.</div>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Real Question: Is Cleaning Worth It for Your System?</h2>
              <p>This depends on three variables:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Your utility rate.</strong> PG&amp;E (~41¢/kWh) makes cleaning easily worthwhile. SMUD or Roseville Electric (~17¢) may not justify pro cleaning annually.</li>
                <li><strong>Your local soiling rate.</strong> Central Valley and SoCal desert communities accumulate dust fast. Bay Area and North Coast coastal homes don&apos;t.</li>
                <li><strong>Roof accessibility.</strong> Single-story ranch homes with low-slope roofs = DIY is safe. Two-story homes with steep tile = pay a professional.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Finding a Reputable Solar Cleaning Company</h2>
              <p>
                California doesn&apos;t require a specific contractor license for solar cleaning (unlike installation, which requires C-46 or C-10 through the Contractors State License Board). That means anyone can hang a shingle. Ask three questions before booking:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Do you carry liability insurance (and can you show a certificate of insurance)?</li>
                <li>Do you use deionized water and soft-bristle brushes — never pressure washing?</li>
                <li>Do you provide before/after monitoring-app comparison to confirm production lift?</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-1">How often should I clean my solar panels in California?</h3>
                  <p className="text-foreground/80">Once per year is enough in most California climates. Twice per year is warranted in Central Valley, fire-prone Sierra foothills, and agricultural corridors. Post-wildfire or post-Santa Ana event: clean promptly regardless of the schedule.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Does my warranty cover cleaning?</h3>
                  <p className="text-foreground/80">No. Panel manufacturer warranties cover defects and degradation, not routine cleaning. Workmanship warranties from your installer also do not cover cleaning. It&apos;s a homeowner responsibility.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Do robotic cleaners work?</h3>
                  <p className="text-foreground/80">Yes, and they&apos;re a growing category for commercial systems. For residential 10–20 panel systems, the $500–$1,200 price tag for a consumer robotic cleaner (Solabot, iSolarCleaner) only pencils out in high-rate territories with heavy soiling. A $250/year pro cleaning is usually cheaper over a 10-year horizon.</p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Should I wait for rain instead?</h3>
                  <p className="text-foreground/80">Rain removes roughly 70% of soiling on flat panels and less on steeper tilts. In coastal California with reliable winter rains, waiting often works. In Central Valley or inland Southern California with drier winters, rain alone is insufficient.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-happens-to-solar-panels-after-25-years" className="text-primary underline">What Happens to Solar Panels After 25 Years?</Link></li>
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is My Roof Good for Solar in California?</Link></li>
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
