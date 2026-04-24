import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'Sunrun vs SunPower: Head-to-Head Solar Comparison After the SunPower Bankruptcy (2026)',
  description: "Sunrun vs SunPower (now Complete Solaria), what's changed post-bankruptcy, panel quality, pricing, warranty continuity, and which is the better buy in California.",
  alternates: { canonical: '/solar-installers/sunrun-vs-sunpower' },
  openGraph: { title: 'Sunrun vs SunPower (2026)', description: 'Head-to-head comparison.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/solar-installers/sunrun-vs-sunpower' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Sunrun vs SunPower', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SunrunVsSunPower() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/best-solar-companies-california" className="hover:text-primary">Solar Companies CA</Link><span>/</span><span className="text-foreground">Sunrun vs SunPower</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Installer Comparison</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Sunrun vs SunPower: Head-to-Head After the 2024 SunPower Bankruptcy</h1>
              <p className="text-lg text-muted-foreground">SunPower filed for Chapter 11 in 2024. Complete Solaria acquired the solar business and continues serving California customers under the SunPower brand. Here&apos;s how the two compare in 2026.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Differences</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SunPower = premium Maxeon panels.</strong> Industry-leading 22%+ efficiency and 40-year performance warranty. Best-in-class panels if you care about maximum watts per square foot.</li>
                <li><strong>Sunrun = broader panel options</strong>, mid-tier pricing, PPA/lease availability. No premium panel line.</li>
                <li><strong>Post-bankruptcy SunPower</strong> (now under Complete Solaria) has reaffirmed warranty continuity for existing customers but remains smaller and less financially stable than pre-bankruptcy.</li>
                <li><strong>Sunrun</strong> is publicly traded, profitable, and the largest residential solar company in the US with no comparable financial risk.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Choose SunPower (Complete Solaria)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You&apos;re a cash buyer who wants the highest-efficiency panels.</li>
                <li>Your roof has limited area and you need to maximize kW-per-square-foot.</li>
                <li>You value the industry-longest 40-year Maxeon panel warranty.</li>
                <li>Premium aesthetics matter (all-black panels, minimal visible hardware).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Choose Sunrun</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You want a $0-down PPA or lease (SunPower focuses on cash and loan).</li>
                <li>Warranty-honor-risk concern from the SunPower bankruptcy matters to you.</li>
                <li>You value a larger installer with nationwide service presence.</li>
                <li>Your roof has standard area. The SunPower efficiency premium doesn&apos;t pay off without a space constraint.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Warranty Question</h2>
              <p>Complete Solaria has publicly committed to honoring existing SunPower customer warranties, and Maxeon (the panel manufacturer, a separate publicly traded company) directly honors its panel warranties regardless of installer status. That said:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Panel warranty: Maxeon direct, stable.</li>
                <li>Workmanship warranty: Complete Solaria as assumed obligations — newer operation, less track record.</li>
                <li>Production guarantee (if included in your contract): verify specifically with your representative.</li>
              </ul>
              <p>For new 2026 installs, ask your SunPower rep for explicit documentation of each warranty component and which entity is responsible.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>For most California homeowners: <strong>Sunrun</strong> is the lower-risk pick in 2026, especially for PPA or lease buyers. <strong>SunPower (Complete Solaria)</strong> still makes sense for cash buyers who specifically want Maxeon&apos;s efficiency and warranty advantages — but verify warranty terms carefully at contract signing.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link></li>
                <li><Link href="/solar-installers/sunpower-review" className="text-primary underline">Full SunPower Review</Link></li>
                <li><Link href="/solar-installers/sunnova-vs-sunrun" className="text-primary underline">Sunnova vs Sunrun</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
