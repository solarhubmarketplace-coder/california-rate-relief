import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'What Is a Demand Charge? (And Do California Residential Customers Pay One?)',
  description: "Demand charges explained in plain English. What they are, why commercial and some California residential customers pay them, and how solar/battery eliminate them.",
  alternates: { canonical: '/blog/what-is-demand-charge-california' },
  openGraph: { title: 'What Is a Demand Charge?', description: 'Plain-English explanation of electric demand charges.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/what-is-demand-charge-california' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'What Is a Demand Charge? California Guide', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhatIsDemandChargeCA() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">What Is a Demand Charge?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Electricity Basics · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">What Is a Demand Charge? (And Do California Residential Customers Pay One?)</h1>
              <p className="text-lg text-muted-foreground">Demand charges are why a commercial electric bill can be double what the kWh total suggests. Here&apos;s what they are, who pays them, and how to reduce them.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Simple Definition</h2>
              <p>A <strong>demand charge</strong> bills you based on the <em>highest</em> electrical load (kW) you drew during the billing period; typically measured as a rolling 15-minute peak. It&apos;s separate from your per-kWh energy charge. You pay both: energy charges for how much total electricity you used, and demand charges for how big your biggest moment was.</p>
              <p>Analogy: energy charges are like paying for gallons of water used; demand charges are like paying extra because you opened every faucet in the house at once for 15 minutes.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Who Actually Pays Demand Charges?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Commercial customers</strong> — virtually every commercial rate schedule in California (PG&amp;E, SCE, SDG&amp;E, LADWP, SMUD) includes demand charges, typically $15–$30/kW of monthly peak demand.</li>
                <li><strong>Industrial customers</strong> — always, at higher per-kW rates.</li>
                <li><strong>Some residential customers</strong> — PG&amp;E, SCE, and SDG&amp;E have piloted or offered residential demand-charge rate plans, but they are opt-in and not the default. Most California residential customers do <strong>not</strong> pay demand charges directly.</li>
                <li><strong>EV high-power charging</strong> — commercial DCFC sites pay demand charges that often exceed the energy charges themselves.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why Utilities Bill This Way</h2>
              <p>The grid is sized to handle everyone&apos;s peak demand simultaneously. If every business runs AC, pumps, and lighting at 3 PM on a hot day, the utility needs enough capacity to handle that simultaneous load. Demand charges recover the cost of having grid capacity standing by for your biggest moment, regardless of whether you used much total energy.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How Solar and Battery Reduce Demand Charges</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Solar lowers energy charges but often doesn&apos;t eliminate demand charges.</strong> Your peak demand often happens on cloudy days or at dusk when solar isn&apos;t producing.</li>
                <li><strong>Batteries are specifically effective against demand charges.</strong> A battery can discharge during your peak-load window, clipping your billing peak even if solar isn&apos;t producing.</li>
                <li><strong>Smart energy management</strong> (Span panel, Generac Ecobee-style controls) that throttles loads automatically when approaching a demand threshold is an emerging category for commercial customers.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">If You Run a Business in California</h2>
              <p>Battery storage for demand-charge management has some of the strongest commercial ROI of any California energy investment. Paired with SGIP (the Self-Generation Incentive Program) and the federal 30% ITC, the payback period for a commercial battery sized to clip peak demand often runs 4–6 years.</p>
              <p>See our <Link href="/commercial-solar/sgip-battery-storage" className="text-primary underline">Commercial SGIP Battery Storage Guide</Link> for details.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/how-does-net-metering-work" className="text-primary underline">How Does Net Metering Work?</Link></li>
                <li><Link href="/blog/net-billing-vs-net-metering-california" className="text-primary underline">Net Billing vs Net Metering (California)</Link></li>
                <li><Link href="/commercial-solar" className="text-primary underline">Commercial Solar in California</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
