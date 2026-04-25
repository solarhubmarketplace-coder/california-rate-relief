import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'Why Is My PG&E Bill So High? The Real Reasons (and What to Do About Them)',
  description: "The 7 reasons your PG&E bill is unusually high — TOU rate plan mismatch, the $24 Base Services Charge, tier cliffs, leaks, solar-true-up, and more. What to do about each.",
  alternates: { canonical: '/blog/why-is-my-pge-bill-so-high' },
  openGraph: { title: 'Why Is My PG&E Bill So High?', description: 'Real reasons your PG&E bill jumped and what to do.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/why-is-my-pge-bill-so-high' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Why Is My PG&E Bill So High?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhyIsMyPGEBillSoHigh() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"Why Is My PG&E Bill So High? The Real Reasons (and What to Do About Them)"} url="https://ratereliefca.com/blog/why-is-my-pge-bill-so-high" datePublished="2026-04-24" dateModified="2026-04-24" description={"The 7 reasons your PG&E bill is unusually high — TOU rate plan mismatch, the $24 Base Services Charge, tier cliffs, leaks, solar-true-up, and more. What to do about each."} />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Why Is My PG&amp;E Bill So High?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">PG&amp;E · Billing</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Why Is My PG&amp;E Bill So High? The Real Reasons (and What to Do)</h1>
              <p className="text-lg text-muted-foreground">If your PG&amp;E bill suddenly jumped, one of these seven things is almost always the cause. Here&apos;s how to diagnose which, and fix it.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. The $24 Base Services Charge</h2>
              <p>Effective March 2026, every PG&amp;E residential customer pays $24/month regardless of usage. If you used to pay $50 and now pay $74, this fixed charge is most of the delta. It is unavoidable under current CPUC rules.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. You&apos;re on the Wrong Rate Plan</h2>
              <p>PG&amp;E automatically defaults most customers to a time-of-use (TOU) plan. If you run laundry, dishwasher, or pool pump during 4–9 PM peak hours, you pay premium rates, often double or triple off-peak. Log into your PG&amp;E account and use the rate-comparison tool to see which plan fits your actual usage. Switching is free.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. Summer Tier Cliffs</h2>
              <p>PG&amp;E baseline allowance roughly doubles your usage allowance from Tier 1 (lowest rate) to Tier 2 (higher rate). Summer AC use often pushes households past baseline into 55+¢/kWh territory. Cooling homes with ceiling fans, window shades, and a higher thermostat setpoint (78°F daytime, 72°F nighttime) can cut summer usage 15–30%.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. An Undetected Leak or New Device</h2>
              <p>Common culprits: pool pump running 8+ hours daily, old fridge or freezer, an electric water heater that&apos;s never been insulated, a hot tub. Many PG&amp;E customers discover their bill doubled after adding an EV or starting to work from home with a server-heavy home office. Use PG&amp;E&apos;s Home Energy Checkup in My Account to locate hidden loads.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Solar True-Up (If You Have Solar)</h2>
              <p>PG&amp;E&apos;s annual True-Up statement reconciles 12 months of net metering into a single big bill at the end of your solar cycle. Expect a ~$100–$400 settlement even for well-sized systems. If yours is much larger, your system may be under-producing (panels dirty, inverter fault) or your consumption may have increased (new EV, hot tub).</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">6. Wildfire / HFTD Cost Recovery</h2>
              <p>PG&amp;E&apos;s residential rate now averages 41¢/kWh — up from under 20¢ a decade ago — largely because of wildfire infrastructure recovery and legacy fire-liability payments. This cost is baked into the rate; the only way around it is to reduce kWh usage or switch to a different utility (move territories) or self-generate via solar + battery.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">7. Medical Equipment or New AC</h2>
              <p>Adding a new window AC, hot tub, pool, or medical equipment (home dialysis, oxygen concentrator) can add $30–$200+/month. Medical-equipment households qualify for the Medical Baseline allowance (extra low-tier electricity), which reduces the financial hit.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to Actually Do</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Log into PG&amp;E My Account and run the rate-comparison tool. Switch to the best-fit plan.</li>
                <li>Apply for CARE (30–35% discount) or FERA (18% discount) if income-qualified.</li>
                <li>If medical equipment, enroll in Medical Baseline.</li>
                <li>Check for hidden loads: old fridge, pool pump duration, hot tub, EV charging schedule.</li>
                <li>If the bill is persistent, model solar + battery. With PG&amp;E rates this high and NEM 3.0 making self-consumption 5–8× more valuable than exports, the combination pays back in 7–10 years for most PG&amp;E households. See <Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link>.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/california-24-dollar-fixed-charge-explained" className="text-primary underline">The $24 California Fixed Charge Explained</Link></li>
                <li><Link href="/blog/pge-rate-increase-2026" className="text-primary underline">PG&amp;E Rate Increase 2026</Link></li>
                <li><Link href="/blog/why-is-my-california-electric-bill-so-high" className="text-primary underline">Why Is My California Electric Bill So High? (Statewide)</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
