import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'String Inverter vs Microinverter: Which Is Right for Your Solar System?',
  description: "Head-to-head comparison of string inverter vs microinverter solar systems — cost, performance under shade, warranty, rapid shutdown, and repairability.",
  alternates: { canonical: '/blog/string-inverter-vs-microinverter' },
  openGraph: { title: 'String Inverter vs Microinverter', description: 'Technical and real-world comparison for California solar installs.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/string-inverter-vs-microinverter' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'String Inverter vs Microinverter', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function StringVsMicro() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">String Inverter vs Microinverter</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar Equipment</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">String Inverter vs Microinverter: Which Is Right for Your Solar System?</h1>
              <p className="text-lg text-muted-foreground">The single most consequential equipment choice in your solar install. Here&apos;s how each type works, what the real-world tradeoffs are, and when to pick which.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Core Difference</h2>
              <p>A <strong>string inverter</strong> is one large central inverter (typically garage-wall mounted) connected to a &ldquo;string&rdquo; of panels wired in series. All panels share one inverter.</p>
              <p><strong>Microinverters</strong> are small inverters attached to each individual panel on the roof. Every panel operates independently.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Comparison Table</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Factor</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">String Inverter</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Microinverter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Upfront cost</td><td className="text-center">Lower</td><td className="text-center">15–25% higher</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Performance with shade</td><td className="text-center">Poor (weakest panel drags string)</td><td className="text-center">Excellent (panels operate independently)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Per-panel monitoring</td><td className="text-center">No (optional adder)</td><td className="text-center">Built in</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Warranty</td><td className="text-center">10–12 years typical</td><td className="text-center">25 years typical (Enphase)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Rapid shutdown compliance</td><td className="text-center">Needs add-on optimizer</td><td className="text-center">Built-in</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Repair access</td><td className="text-center">Easy (garage wall)</td><td className="text-center">Hard (on roof)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Single point of failure</td><td className="text-center">Yes — whole system down</td><td className="text-center">No — one panel only</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">Expandability</td><td className="text-center">Limited by inverter capacity</td><td className="text-center">Easy — add panels one at a time</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Choose Microinverters</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your roof has any shading (trees, chimney, dormer, adjacent structures).</li>
                <li>Your roof has multiple orientations (some south-facing, some east or west).</li>
                <li>You plan to expand the system later.</li>
                <li>You want the longest warranty coverage (Enphase = 25 years standard).</li>
                <li>You want detailed per-panel monitoring to catch failures early.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Choose a String Inverter</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your roof is a single-orientation, unshaded plane.</li>
                <li>Budget is the primary constraint.</li>
                <li>You prefer equipment you can physically reach for service.</li>
                <li>You&apos;re pairing with a specific battery that integrates better via string (e.g., certain SolarEdge / Tesla configurations).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">California NEC Rapid Shutdown</h2>
              <p>California requires compliance with the National Electrical Code 690.12 (Rapid Shutdown), which mandates that firefighters can de-energize rooftop arrays for safety. Microinverters satisfy this requirement natively. String inverters need an add-on optimizer (SolarEdge, Tigo) to comply — which closes most of the cost gap vs microinverters.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Market Reality in California</h2>
              <p>Roughly 70–75% of new residential California installs in 2026 use microinverters or module-level power electronics (MLPE), typically Enphase. String-only installs are declining. For most homeowners the decision isn&apos;t &ldquo;string vs micro&rdquo; but rather &ldquo;Enphase microinverters vs SolarEdge string-plus-optimizers.&rdquo;</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-is-a-solar-inverter" className="text-primary underline">What Is a Solar Inverter?</Link></li>
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
