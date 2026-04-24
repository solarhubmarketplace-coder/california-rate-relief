import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'SDG&E Rate Increase 2026: Why San Diego Has the Highest Rates in America',
  description: "SDG&E's 2026 rate changes explained. Why San Diego County rates hit 45.7¢/kWh, what drove the hike, the $24 Base Services Charge, and what customers can do.",
  alternates: { canonical: '/blog/sdge-rate-increase-2026' },
  openGraph: { title: 'SDG&E Rate Increase 2026', description: 'Plain-English SDG&E 2026 rate breakdown.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/sdge-rate-increase-2026' },
};

const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'SDG&E Rate Increase 2026', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SDGERateIncrease2026() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span>
              <span className="text-foreground">SDG&amp;E Rate Increase 2026</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Utility Rates · San Diego</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">SDG&amp;E Rate Increase 2026: Why San Diego Pays the Highest Rates in America</h1>
              <p className="text-lg text-muted-foreground">SDG&amp;E residential rates average 45.7¢/kWh in 2026 — the highest utility rate in the United States. Here&apos;s why, and what San Diego County customers can do about it.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The 2026 Numbers</h2>
              <p>Average residential SDG&amp;E rate in 2026: approximately 45.7¢/kWh. Peak time-of-use rates: 60–80¢/kWh during summer late-afternoon windows. On top of that, the $24/month Base Services Charge (effective March 2026) applies regardless of usage.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Why SDG&amp;E Rates Are the Nation&apos;s Highest</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Wildfire infrastructure recovery.</strong> The 2007 Witch Fire settlement and ongoing HFTD undergrounding continue to drive rate-base recovery.</li>
                <li><strong>Long transmission distances.</strong> San Diego County imports most of its electricity from Imperial County and points north, spread across long transmission corridors.</li>
                <li><strong>Limited generation diversity.</strong> Closure of the San Onofre Nuclear Generating Station (SONGS) removed a large baseload source.</li>
                <li><strong>High wildfire liability insurance premiums.</strong> Baked into rate-base.</li>
                <li><strong>CPUC-approved rate cases.</strong> SDG&amp;E files a General Rate Case every 4 years; the most recent approved multi-year increases through 2028.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What San Diego Customers Can Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Switch to the right TOU plan.</strong> SDG&amp;E offers EV-TOU-5 and other plans that can dramatically reduce costs for households that can shift usage to super-off-peak hours.</li>
                <li><strong>CARE &amp; FERA.</strong> Income-qualified discounts (30–35% and 18% respectively).</li>
                <li><strong>Medical Baseline allowance.</strong> Extra low-tier electricity for medical-equipment households.</li>
                <li><strong>Solar + battery is particularly attractive.</strong> At 45.7¢/kWh retail and 5–8¢/kWh NEM 3.0 export credit, self-consumed solar is 6–8× more valuable than exported solar. A battery tips the payback math meaningfully positive. See <Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link>.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/why-is-my-sdge-bill-so-high" className="text-primary underline">Why Is My SDG&amp;E Bill So High?</Link></li>
                <li><Link href="/blog/pge-vs-sce-vs-sdge-rates-compared" className="text-primary underline">PG&amp;E vs SCE vs SDG&amp;E Rates Compared</Link></li>
                <li><Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></li>
                <li><Link href="/solar-savings/san-diego" className="text-primary underline">Solar Savings in San Diego</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
