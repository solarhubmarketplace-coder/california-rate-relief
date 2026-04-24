import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Solar Panels on a Tile Roof in California: Cost, Process, and the Hidden Premium',
  description: "Installing solar on a tile roof in California — the tile removal/replacement premium, moisture concerns, underlayment upgrades, and which installers are best.",
  alternates: { canonical: '/blog/solar-panels-tile-roof-california' },
  openGraph: { title: 'Solar on Tile Roof California', description: 'The tile roof premium, process, and installer considerations.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/solar-panels-tile-roof-california' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Solar Panels on Tile Roof California', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SolarTileRoofCA() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Solar on Tile Roof California</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar + Roof</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Solar Panels on a Tile Roof in California: What to Expect</h1>
              <p className="text-lg text-muted-foreground">Tile roofs are the norm in California — Mediterranean clay and concrete tiles cover most SoCal neighborhoods and plenty of the Bay Area. Installing solar on tile is straightforward but carries a $1,500–$3,500 premium over comp-shingle. Here&apos;s why.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Tile Roof Premium</h2>
              <p>Installing solar on a tile roof typically costs $1,500–$3,500 more than an equivalent install on composite shingle. The premium reflects:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Tile removal and replacement.</strong> Each mounting point requires a tile to be lifted or removed, a flashing bracket installed, and the tile reseated over the hardware.</li>
                <li><strong>Specialized tile hooks.</strong> Proprietary hooks (Quick Mount PV, Tile Trac, IronRidge Flashkit) replace the lag-bolt approach used for shingle.</li>
                <li><strong>Additional labor time.</strong> Tile installs take 20–40% longer than shingle.</li>
                <li><strong>Breakage and replacement.</strong> 2–5% of tiles break during installation. Installers include matching replacement tiles in the cost.</li>
                <li><strong>Underlayment inspection.</strong> The 30-year tar-paper underlayment beneath your tiles must be in good shape. If it&apos;s degraded, replacement during install is strongly recommended — and can add $3,000–$8,000.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Three Tile Types, Three Different Install Approaches</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>S-tile / Spanish clay.</strong> The most common California tile. Curved, terracotta-colored, moderately fragile. Standard install approach works.</li>
                <li><strong>Flat concrete.</strong> Popular in newer 1990s–2010s homes. More forgiving during install, fewer breakages.</li>
                <li><strong>Flat clay.</strong> Expensive, old-growth material. Highest breakage risk. Use an installer with specific flat-clay experience.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Underlayment Question</h2>
              <p>Tile roofs over 20–25 years old often have degrading tar-paper underlayment. The tile protects the roof surface, but water vapor and attic humidity slowly compromise the underlayment over decades. If you&apos;re installing solar and your roof is 20+ years old, this is the right moment to replace the underlayment beneath the solar footprint:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Costs $3,000–$8,000 for replacement under the array.</li>
                <li>Extends roof life 25+ more years.</li>
                <li>Avoids having to pull and reinstall solar in 5–10 years for roof repair.</li>
              </ul>
              <p>This is non-negotiable for many reputable California installers.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Tile Roofs + NEC Rapid Shutdown</h2>
              <p>California requires rapid-shutdown compliance under NEC 690.12. With tile roofs, microinverter systems (Enphase) are often a better fit than string-with-optimizer systems because the components are more distributed across the roof and require fewer long wire runs.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Installer Selection</h2>
              <p>Ask every installer you quote:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>&ldquo;How many tile-roof installs have you completed in the past 12 months?&rdquo; (Look for 20+.)</li>
                <li>&ldquo;What tile hooks do you use?&rdquo; (Quick Mount PV and IronRidge are industry-leading.)</li>
                <li>&ldquo;What&apos;s your policy if a tile breaks?&rdquo; (They should supply and install matching replacements at no charge.)</li>
                <li>&ldquo;Will you recommend underlayment replacement if my roof is 20+ years old?&rdquo; (Honest installers say yes; bad ones say &ldquo;we&apos;ll just work around it.&rdquo;)</li>
                <li>&ldquo;How do you test for leaks after install?&rdquo; (Hose test or thermal imaging is the answer you want.)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/is-my-roof-good-for-solar-california" className="text-primary underline">Is My Roof Good for Solar?</Link></li>
                <li><Link href="/blog/solar-carport-california-guide" className="text-primary underline">Solar Carport California Guide</Link></li>
                <li><Link href="/blog/free-roof-replacement-with-solar-panels-california" className="text-primary underline">Roof Replacement with Solar Panels</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
