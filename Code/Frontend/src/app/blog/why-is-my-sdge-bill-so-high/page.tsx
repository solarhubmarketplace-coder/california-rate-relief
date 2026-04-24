import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Why Is My SDG&E Bill So High? (San Diego Has the Highest Rates in America)',
  description: "Why your San Diego Gas & Electric bill is so high — 45.7¢/kWh rates, the 4–9 PM peak window, the $24 fixed charge, and what to do.",
  alternates: { canonical: '/blog/why-is-my-sdge-bill-so-high' },
  openGraph: { title: 'Why Is My SDG&E Bill So High?', description: 'San Diego Gas & Electric billing explainer and fixes.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/why-is-my-sdge-bill-so-high' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Why Is My SDG&E Bill So High?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function WhyIsMySDGEBillSoHigh() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Why Is My SDG&amp;E Bill So High?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">SDG&amp;E · San Diego</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Why Is My SDG&amp;E Bill So High?</h1>
              <p className="text-lg text-muted-foreground">SDG&amp;E residential rates average 45.7¢/kWh in 2026 — the highest utility rate in the United States. You&apos;re not imagining it. Here&apos;s what you can actually do.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Short Answer</h2>
              <p>Your SDG&amp;E bill is high because SDG&amp;E rates are, simply, the highest in America. The average San Diego household pays $250–$350/month for electricity — double what a Sacramento household on SMUD pays for the same usage.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">1. SDG&amp;E Rates Are Genuinely the Highest</h2>
              <p>45.7¢/kWh average. Peak TOU rates 60–80¢. This is not your imagination. Wildfire infrastructure recovery, long transmission distances, and CPUC-approved rate cases continue to push rates up.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2. The $24 Base Services Charge</h2>
              <p>Applied to every residential customer regardless of usage. Unavoidable under CPUC rules.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">3. You Might Be on the Wrong TOU Plan</h2>
              <p>SDG&amp;E offers TOU-DR1, TOU-DR2, EV-TOU-5, and several others. Running the rate comparison in My Account and switching can save 15–25% for households that can shift usage. EV households often benefit from EV-TOU-5&apos;s super-off-peak midnight–6 AM rate.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">4. Summer AC Plus Coast-Inland Climate</h2>
              <p>San Diego County spans micro-climates. Coastal zones (La Jolla, Encinitas, Carlsbad) use less AC. Inland East County (Ramona, Alpine, Escondido) and back-country (Valley Center, Julian) run AC aggressively. If you&apos;re in an inland SDG&amp;E community, summer AC is the #1 bill driver.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">5. Your Neighbor&apos;s Solar Is Making Yours Look Worse</h2>
              <p>San Diego is the highest solar-penetration market in the US. Non-solar households now bear a disproportionate share of grid costs because solar households generate much of their own electricity. This is a real dynamic the CPUC acknowledges in its Rate Design proceedings.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to Actually Do</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Run the rate comparison in SDG&amp;E My Account, switch if there&apos;s a better-fit plan.</li>
                <li>Apply for CARE or FERA if income-qualified.</li>
                <li>Medical Baseline if you use medical equipment.</li>
                <li>Solar + battery makes exceptional sense at SDG&amp;E rates. With 45.7¢ retail and 5–8¢ export, self-consumption via battery is dramatically more valuable than exporting. Cash-purchase payback for a well-designed system in SDG&amp;E territory is 5–7 years. See <Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link>.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/sdge-rate-increase-2026" className="text-primary underline">SDG&amp;E Rate Increase 2026</Link></li>
                <li><Link href="/solar-savings/san-diego" className="text-primary underline">Solar Savings in San Diego</Link></li>
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
