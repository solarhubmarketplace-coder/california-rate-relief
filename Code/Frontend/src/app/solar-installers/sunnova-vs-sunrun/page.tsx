import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Sunnova vs Sunrun: Head-to-Head Solar Installer Comparison (2026)',
  description: "Sunnova vs Sunrun; how they compare on pricing, contracts, warranties, service model, California footprint, and real-world customer experience.",
  alternates: { canonical: '/solar-installers/sunnova-vs-sunrun' },
  openGraph: { title: 'Sunnova vs Sunrun (2026)', description: 'Head-to-head comparison.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/solar-installers/sunnova-vs-sunrun' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Sunnova vs Sunrun', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SunnovaVsSunrun() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/best-solar-companies-california" className="hover:text-primary">Solar Companies CA</Link><span>/</span><span className="text-foreground">Sunnova vs Sunrun</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Installer Comparison</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Sunnova vs Sunrun: Which Solar Installer Wins in California?</h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<p className="text-lg text-muted-foreground">The two biggest names in residential solar-as-a-service. Similar pricing, similar contracts — but meaningful differences in service model, equipment, and warranty structure.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">At a Glance</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Factor</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Sunnova</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Sunrun</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Service model</td><td className="text-center">Dealer network</td><td className="text-center">Direct + dealer</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Primary finance offering</td><td className="text-center">Lease, PPA, loan</td><td className="text-center">Lease, PPA, cash</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">California footprint</td><td className="text-center">Statewide via dealers</td><td className="text-center">Statewide direct + dealers</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Warranty wrap</td><td className="text-center">25 yr Sunnova Protect</td><td className="text-center">25 yr BrightSave Monthly wrap</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Contract length</td><td className="text-center">20–25 years</td><td className="text-center">20–25 years</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Escalator typical</td><td className="text-center">0–2.9% annual</td><td className="text-center">0–2.9% annual</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">Battery integration</td><td className="text-center">Tesla Powerwall, Enphase, SunVault</td><td className="text-center">Tesla Powerwall, Brightbox</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Sunnova Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Warranty wraparound is more comprehensive.</strong> Sunnova Protect rolls panel, inverter, workmanship, roof, and production-guarantee coverage into one contact. If something fails, you call one number.</li>
                <li><strong>More equipment flexibility.</strong> Sunnova&apos;s dealer network uses several panel/inverter combos, so your dealer can often spec what fits your roof best.</li>
                <li><strong>Stronger loan option.</strong> Sunnova&apos;s Easy Own financing tends to quote competitively vs Sunrun&apos;s loan partners.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Sunrun Wins</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Scale and direct-install crews.</strong> In the biggest California markets (Bay Area, LA, San Diego), Sunrun often uses its own W-2 installers instead of subcontracting. That tends to mean more consistent quality and faster response for warranty issues.</li>
                <li><strong>Brightbox battery experience.</strong> Sunrun has been pairing Tesla Powerwall with solar at scale longer than any competitor in California.</li>
                <li><strong>Stronger post-NEM 3.0 design discipline.</strong> Sunrun&apos;s in-house design team has been sizing systems for NEM 3.0 self-consumption more conservatively than many dealer-network competitors.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Where Both Deserve Caution</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Long contract transfers at home sale.</strong> Both companies&apos; 20–25 year contracts can complicate a home sale. Verify transfer terms <em>before</em> signing, not at closing.</li>
                <li><strong>Sales pressure at the dealer level.</strong> Dealer-network models (both companies use them) create variance in sales practices. Get the final contract in writing and walk away from any rep demanding same-day signature.</li>
                <li><strong>NEM 3.0 savings projections.</strong> Any rep quoting &ldquo;90% savings&rdquo; under NEM 3.0 without a battery is optimistic. Without storage, self-consumption drives 40–60% savings for most households.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>For California homeowners: <strong>Sunrun</strong> tends to be the stronger pick in major metros (Bay Area, LA, San Diego) where it operates with its own in-house crews. <strong>Sunnova</strong> can be a better fit in smaller markets where its dealer network sends you a local California-only installer whose reputation you can verify. In both cases, ask for the specific installer by name and verify their CSLB license before signing.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-installers/sunnova-review" className="text-primary underline">Full Sunnova Review</Link></li>
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link></li>
                <li><Link href="/solar-installers/sunrun-vs-sunpower" className="text-primary underline">Sunrun vs SunPower</Link></li>
                <li><Link href="/solar-installers/sunrun-vs-tesla-solar" className="text-primary underline">Sunrun vs Tesla Solar</Link></li>
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
