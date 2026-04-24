import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Why Is My LADWP Bill So High? (Even Though LADWP Rates Are Below SCE)',
  description: "LADWP rates are the lowest in LA Metro — so why did your bill jump? Tier pricing, AC usage, LIRA discount eligibility, and what to do.",
  alternates: { canonical: '/blog/why-is-my-ladwp-bill-so-high' },
  openGraph: { title: 'Why Is My LADWP Bill So High?', description: 'What really drives LADWP residential bills up.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/why-is-my-ladwp-bill-so-high' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Why Is My LADWP Bill So High?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhyIsMyLADWPBillSoHigh() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Why Is My LADWP Bill So High?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">LADWP · Los Angeles</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Why Is My LADWP Bill So High?</h1>
              <p className="text-lg text-muted-foreground">LADWP rates run ~22¢/kWh, roughly 35–50% below SCE. So if your bill is spiking, it&apos;s almost always one of these.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Tier Cliffs</h2>
              <p>LADWP bills in tiers by zone. High-usage summer bills push households into Tier 2/3 where kWh pricing effectively doubles. Easy check: look at your bill&apos;s per-kWh breakout — if tier-3 usage is significant, that&apos;s the culprit.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. Summer AC</h2>
              <p>LA summers now regularly see 100°F+ inland (San Fernando Valley, East LA). If you&apos;re running central AC 10+ hours a day in July/August, doubled summer bills are normal. Pre-cool before 4 PM, raise thermostat setpoint to 78°F when home, use ceiling fans. A smart thermostat (Nest/Ecobee) typically pays back in one summer.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. Bi-Monthly Billing Surprise</h2>
              <p>LADWP bills every 60 days, not monthly. A &ldquo;high bill&rdquo; is actually two months of usage. Divide by 2 and compare to your mental monthly baseline.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. You Missed LIRA</h2>
              <p>LADWP&apos;s Low-Income Rate Assistance (LIRA) gives a 25% discount on electricity for income-qualified households. If your income qualifies and you&apos;re not enrolled, you&apos;re leaving hundreds of dollars/year on the table. Apply through LADWP My Account.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Water Is Part of Your LADWP Bill</h2>
              <p>LADWP bills combine water + electricity (for most customers). A &ldquo;high electric bill&rdquo; can actually be driven by water: irrigation leaks, a running toilet, or peak-season lawn watering can add $30–$100+/month. Check the water portion of your bill separately.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to Do</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Check LIRA and Senior Rate discount eligibility.</li>
                <li>Check your bill&apos;s water-vs-electricity split.</li>
                <li>Shift AC, laundry, dishwasher usage earlier in the day or later at night.</li>
                <li>For homes with pools or EVs, LADWP offers EV-specific rate plans worth exploring.</li>
                <li>Solar in LADWP territory doesn&apos;t have NEM 3.0 — LADWP runs its own net metering with more favorable export credit. That makes residential solar payback better in LADWP than in PG&amp;E/SCE/SDG&amp;E territory despite LADWP&apos;s lower retail rate.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/solar-rebates-by-california-utility" className="text-primary underline">Solar Rebates by California Utility</Link></li>
                <li><Link href="/blog/why-is-my-california-electric-bill-so-high" className="text-primary underline">Why Is My California Electric Bill So High? (Statewide)</Link></li>
                <li><Link href="/solar-savings/los-angeles" className="text-primary underline">Solar Savings in Los Angeles</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
