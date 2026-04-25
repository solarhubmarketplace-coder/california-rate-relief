import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Sunrun vs Tesla Solar: Which Is Better for California Homes in 2026?',
  description: "Sunrun vs Tesla Solar, pricing, equipment (Tesla Solar Roof vs conventional), battery integration, service model, and California customer experience compared.",
  alternates: { canonical: '/solar-installers/sunrun-vs-tesla-solar' },
  openGraph: { title: 'Sunrun vs Tesla Solar (2026)', description: 'Head-to-head comparison.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/solar-installers/sunrun-vs-tesla-solar' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Sunrun vs Tesla Solar', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SunrunVsTeslaSolar() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/best-solar-companies-california" className="hover:text-primary">Solar Companies CA</Link><span>/</span><span className="text-foreground">Sunrun vs Tesla Solar</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Installer Comparison</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Sunrun vs Tesla Solar: Which Is Better for California Homes?</h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<p className="text-lg text-muted-foreground">Sunrun is the biggest residential solar installer in America. Tesla Solar is the only installer that builds its own panels, inverters, batteries, and app. Here&apos;s the real comparison.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">At a Glance</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Factor</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Sunrun</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Tesla Solar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Pricing (cash purchase)</td><td className="text-center">Mid-tier</td><td className="text-center">Lowest in CA</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Finance options</td><td className="text-center">Lease / PPA / cash</td><td className="text-center">Cash / loan only</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Equipment</td><td className="text-center">Multiple panel &amp; inverter brands</td><td className="text-center">Tesla-only ecosystem</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Battery</td><td className="text-center">Tesla Powerwall, Enphase</td><td className="text-center">Tesla Powerwall (only)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Install time</td><td className="text-center">6–12 weeks</td><td className="text-center">8–20+ weeks (notoriously variable)</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Customer service</td><td className="text-center">Mixed, improving</td><td className="text-center">Thin post-install support</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">Best for</td><td className="text-center">PPA/lease households</td><td className="text-center">Cash buyers who want Powerwall</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Tesla Solar Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Lowest cash-purchase pricing in the California market.</strong> Tesla Solar routinely quotes $2.50–$3.00/W installed. Well below the $3.50–$4.50/W California average. This alone moves a lot of cash buyers to Tesla.</li>
                <li><strong>Native Powerwall integration.</strong> One app (Tesla app) controls solar, battery, EV charging, and home energy. No other installer offers this level of integration.</li>
                <li><strong>Tesla Solar Roof option.</strong> If you&apos;re replacing your roof anyway, the integrated shingle-style solar roof is more aesthetically seamless than any panel-based system.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Sunrun Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>PPA and lease options.</strong> Tesla doesn&apos;t offer $0-down PPA/lease. If you don&apos;t have the cash or tax appetite to claim the ITC, Sunrun is the alternative.</li>
                <li><strong>Installation timelines.</strong> Sunrun typically completes installs in 6–12 weeks. Tesla Solar installs have been criticized for dragging to 4–6 months due to limited installation capacity.</li>
                <li><strong>Post-install service.</strong> Sunrun has a nationwide service organization; Tesla Solar support has been notoriously thin and phone-unresponsive.</li>
                <li><strong>Equipment flexibility.</strong> Sunrun can spec whichever panel/inverter combo fits your roof and needs. Tesla installs only Tesla-made components (panels from third-party contract manufacturers, Tesla-branded inverter, Tesla Powerwall).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Tesla Solar Caveats</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No subsystem choices.</strong> You get Tesla&apos;s 400W panels, Tesla Solar Inverter, and Tesla Powerwall. If a part fails in year 11, you&apos;re dependent on Tesla&apos;s parts supply.</li>
                <li><strong>Solar Roof pricing is much higher than panels.</strong> Tesla Solar Roof runs $18–$25/sq ft of roof, versus $4–$6/sq ft for conventional panels. Only makes sense on a full roof replacement.</li>
                <li><strong>Sales process is transactional.</strong> Tesla is notorious for minimal human contact pre-install; if you need hand-holding through the buying process, Sunrun is much more responsive.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>For California homeowners: <strong>Tesla Solar</strong> wins on pure cost and Powerwall integration if you&apos;re a cash buyer who doesn&apos;t mind minimal support. <strong>Sunrun</strong> wins if you want a PPA/lease, faster installation, or more hand-holding through the process. Both use Powerwall, so the battery experience ends up similar either way.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link></li>
                <li><Link href="/solar-installers/tesla-solar-review" className="text-primary underline">Full Tesla Solar Review</Link></li>
                <li><Link href="/solar-installers/sunnova-vs-sunrun" className="text-primary underline">Sunnova vs Sunrun</Link></li>
                <li><Link href="/blog/tesla-powerwall-installers-california" className="text-primary underline">Tesla Powerwall Installers in California</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
