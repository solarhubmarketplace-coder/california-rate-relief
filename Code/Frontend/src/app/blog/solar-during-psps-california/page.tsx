import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Solar During a PSPS in California: Will My Panels Work? (And What You Actually Need)',
  description: "Does solar work during a PG&E PSPS outage? The honest answer — why grid-tied solar shuts off, how batteries change the story, and what you actually need for 24–36 hour blackout survival.",
  alternates: { canonical: '/blog/solar-during-psps-california' },
  openGraph: { title: 'Solar During PSPS California', description: 'The honest answer on solar during PSPS outages.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/solar-during-psps-california' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Solar During PSPS California', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SolarDuringPSPSCA() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Solar During PSPS</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Backup &amp; Outages · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Solar During a PSPS in California: The Honest Answer</h1>
              <p className="text-lg text-muted-foreground">If you have grid-tied solar and PG&amp;E cuts power during a Public Safety Power Shutoff, your panels will <em>not</em> keep your lights on. Here&apos;s why — and what it takes to actually keep the lights on.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Short Answer</h2>
              <p>Standard grid-tied solar <strong>shuts off automatically</strong> when the grid loses power. This is required by UL 1741 safety standards — the inverter must detect grid outage and disconnect within 2 seconds to prevent backfeeding dead lines and electrocuting utility workers.</p>
              <p>During a PSPS, your solar panels literally cannot power your home unless you have one of the following:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>A battery system with grid-forming (off-grid-capable) inverter (Tesla Powerwall, Enphase IQ Battery, FranklinWH, Generac PWRcell, SolarEdge Energy Hub + battery).</li>
                <li>A dedicated transfer switch / generator setup.</li>
                <li>A hybrid solar inverter with Secure Power Supply (SPS) daytime-only outlets.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What Actually Works During a PSPS</h2>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Option 1: Solar + Battery (Most Common Solution)</h3>
              <p>A solar battery system with grid-forming inverter creates a micro-grid when the utility grid is down. Solar recharges the battery during the day; the battery powers your home through the night. With 13.5 kWh of battery and conservative load management, most California households can survive a 24-36 hour PSPS outage indefinitely (until the grid comes back) while keeping fridge, internet, lights, and medical equipment running.</p>
              <p>Coverage of AC depends on battery size. A single 13.5 kWh Powerwall runs a modest home without AC; two Powerwalls or a FranklinWH aPower 2 (15 kWh) can run a home with limited AC use.</p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Option 2: Gas / Propane Generator</h3>
              <p>A whole-home standby generator (Generac, Kohler, Briggs &amp; Stratton) kicks in automatically when the grid drops. More outage capacity per dollar than a battery, but:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Natural gas supply can be cut during wildfire events (PG&amp;E has done this).</li>
                <li>Louder, noisier, more maintenance, more space.</li>
                <li>Several California cities ban new gas generators under electrification reach codes (Berkeley, Oakland, Palo Alto).</li>
                <li>Generators run during PSPS whether you need them or not, burning fuel you may need for vehicles.</li>
              </ul>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Option 3: Portable Power Stations + Solar Panels</h3>
              <p>EcoFlow Delta Pro, Jackery 3000 Pro, Bluetti AC500 — large portable batteries that can be paired with portable solar panels. Much cheaper than installed battery systems ($3,000–$6,000 for a robust setup) but require manual plugging of appliances and cannot power hard-wired loads.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">SGIP Equity Resiliency Program</h2>
              <p>California&apos;s SGIP Equity Resiliency tier specifically subsidizes batteries for homes in HFTD Tier 2 / Tier 3 zones — the same areas PG&amp;E targets for PSPS shutoffs. Eligible households can receive up to 100% battery-cost coverage. Check your address against the <a href="https://ia.cpuc.ca.gov/firemap/" target="_blank" rel="noopener noreferrer" className="text-primary underline">CPUC Fire-Threat Map</a>. If you&apos;re in Tier 2 or 3 and have been subject to multiple PSPS events, you likely qualify.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Battery Sizing for PSPS Survival</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bare minimum (essential loads 24 hours):</strong> 5–10 kWh battery + solar recharge. Covers fridge, lights, internet, phone charging, medical equipment.</li>
                <li><strong>Typical whole-home (no AC):</strong> 13–15 kWh battery + solar. One Powerwall or FranklinWH unit.</li>
                <li><strong>Whole-home with AC:</strong> 26–30 kWh battery + larger solar array. Two Powerwalls or stacked FranklinWH.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Real PSPS Math</h2>
              <p>The average PSPS event lasts 2–4 days. A well-sized solar + battery system can survive this indefinitely if the home stays on essentials (no pool pump, limited AC, lights and fridge and internet only). Most California homeowners in PSPS-prone territory find that once they experience one extended outage without backup power, the battery investment becomes obvious.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link></li>
                <li><Link href="/blog/do-solar-panels-work-during-power-outage-california" className="text-primary underline">Do Solar Panels Work During Power Outages?</Link></li>
                <li><Link href="/blog/tesla-powerwall-installers-california" className="text-primary underline">Tesla Powerwall Installers California</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
