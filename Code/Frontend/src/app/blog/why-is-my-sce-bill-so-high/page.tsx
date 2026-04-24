import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Why Is My SCE Bill So High? The Real Reasons (and What to Do About Them)',
  description: "Why your Southern California Edison bill jumped; TOU plan mismatches, the 4–9 PM peak window, the $24 fixed charge, hidden loads, and what to do.",
  alternates: { canonical: '/blog/why-is-my-sce-bill-so-high' },
  openGraph: { title: 'Why Is My SCE Bill So High?', description: 'Real reasons your SCE bill jumped and what to do.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/why-is-my-sce-bill-so-high' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Why Is My SCE Bill So High?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhyIsMySCEBillSoHigh() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Why Is My SCE Bill So High?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">SCE · Billing</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Why Is My SCE Bill So High? The Real Reasons</h1>
              <p className="text-lg text-muted-foreground">Southern California Edison rates average 34.5¢/kWh in 2026, with peak TOU rates hitting 58–74¢. If your bill jumped, here are the usual suspects.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. The 4–9 PM Peak Window</h2>
              <p>SCE&apos;s default TOU plan charges 58–74¢/kWh during 4–9 PM on summer weekdays — more than double the average rate. If you run AC hard during that window, cook dinner with an electric range, or charge your EV before 9 PM, you&apos;re paying premium pricing on high-usage hours.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. The $24 Base Services Charge</h2>
              <p>All SCE residential customers now pay $24/month regardless of usage. Low-use households took the biggest proportional hit.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. You&apos;re on the Wrong Rate Plan</h2>
              <p>SCE offers TOU-D-4-9PM (the default), TOU-D-PRIME (EV-friendly), and a tiered non-TOU plan. Many households save 15–25% simply by switching plans. Log in to SCE My Account and run the rate comparison.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Summer AC Runaway</h2>
              <p>Inland Empire and Central Valley SCE customers often see 2–4× summer bills. Shift cooling before 4 PM (pre-cool), raise thermostat setpoint during peak window, use ceiling fans, close west-facing shades. A programmable or smart thermostat pays for itself in one summer.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. EV or Pool Pump Timing</h2>
              <p>Charging an EV or running a pool pump during 4–9 PM costs triple vs after 9 PM or before noon. Schedule both to run 10 PM–6 AM.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Medical Equipment / New Load</h2>
              <p>A new window AC, hot tub, or medical equipment can add $30–$200/month. Medical-equipment households qualify for the Medical Baseline allowance.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to Do</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Switch rate plans in SCE My Account after running the comparison tool.</li>
                <li>Apply for CARE (30–35% discount) or FERA (18% discount) if income-qualified.</li>
                <li>Shift high-use devices to off-peak hours.</li>
                <li>Consider solar + battery. At 34.5¢ retail and 5–8¢ NEM 3.0 export rate, self-consumption is dramatically more valuable — a battery captures the arbitrage. See <Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link>.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/sce-rate-increase-2026" className="text-primary underline">SCE Rate Increase 2026</Link></li>
                <li><Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className="text-primary underline">PG&amp;E vs SCE vs SDG&amp;E Rates Compared</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
