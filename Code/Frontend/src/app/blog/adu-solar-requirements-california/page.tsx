import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'ADU Solar Requirements in California (2026): Title 24 Rules, Metering, and Cost',
  description: "Does your California ADU need solar? A plain-English guide to Title 24 solar requirements for ADUs, metering options, and when the requirement is waived.",
  alternates: { canonical: '/blog/adu-solar-requirements-california' },
  openGraph: { title: 'ADU Solar Requirements California', description: 'California Title 24 solar rules for ADUs.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/adu-solar-requirements-california' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'ADU Solar Requirements California', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function ADUSolarCA() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"ADU Solar Requirements in California (2026): Title 24 Rules, Metering, and Cost"} url="https://ratereliefca.com/blog/adu-solar-requirements-california" datePublished="2026-04-24" dateModified="2026-04-24" description={"Does your California ADU need solar? A plain-English guide to Title 24 solar requirements for ADUs, metering options, and when the requirement is waived."} />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">ADU Solar Requirements</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">ADU · Title 24</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">ADU Solar Requirements in California (2026)</h1>
              <p className="text-lg text-muted-foreground">Does your new California ADU need solar? The answer depends on ADU type, size, and whether it&apos;s detached. Here&apos;s the current Title 24 rule in plain English.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Short Answer</h2>
              <p><strong>Detached ADUs</strong> built as new construction generally require solar under California Title 24 Part 6 (Building Energy Efficiency Standards). <strong>Attached ADUs</strong> and ADU conversions of existing space have different requirements and often don&apos;t trigger the solar mandate.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When Solar IS Required</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Detached newly constructed ADU of any size in PG&amp;E, SCE, or SDG&amp;E territory.</li>
                <li>Major renovations classified as new construction (typically 75%+ substantial alteration).</li>
                <li>The minimum system size is calculated by Title 24&apos;s formula based on conditioned floor area.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When Solar is NOT Required</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Attached ADUs built within or onto an existing home (the existing home&apos;s solar system, if any, is deemed sufficient).</li>
                <li>ADU conversions of existing space (garage conversion, basement conversion, interior conversion).</li>
                <li>ADUs with severely shaded roof footprints (Title 24 has a shading exemption — the installer must document it).</li>
                <li>ADUs in municipal utility territories where local building code differs from state Title 24 (rare).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">System Size Requirement</h2>
              <p>Title 24 uses a formula based on conditioned floor area. Typical detached ADU results:</p>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">ADU size</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Typical Title 24 PV requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">400 sq ft junior ADU</td><td className="text-center">1.0–1.5 kW</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">600 sq ft 1-bedroom</td><td className="text-center">1.5–2.0 kW</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">800 sq ft 1-bedroom</td><td className="text-center">2.0–2.5 kW</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">1,000+ sq ft 2-bedroom</td><td className="text-center">2.5–3.5 kW</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Metering: Attach to Main Home or Separate?</h2>
              <p>Two options:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Separate meter.</strong> ADU has its own utility account and NEM 3.0 interconnection. Cleaner for rental situations where tenant pays utilities. Higher setup cost.</li>
                <li><strong>Behind-the-meter (shared).</strong> ADU solar is part of the main home&apos;s meter. Simpler, no new utility account. Works when landlord covers utilities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Cost Impact on ADU Budget</h2>
              <p>A 2 kW ADU solar system typically adds $8,000–$12,000 to construction cost. This is usually rolled into the construction loan or home-equity line financing the ADU build. The 30% federal tax credit applies, netting to $5,600–$8,400 after tax credit.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Tips</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Have your ADU designer coordinate with the solar installer during permit drawings — not after.</li>
                <li>Size the main home&apos;s solar conservatively if you plan to add an ADU later; it can satisfy the ADU requirement.</li>
                <li>If your ADU site has a significantly shaded roof, pursue the Title 24 shading exemption during permit review.</li>
                <li>Under NEM 3.0, ADU solar pays off much faster with a battery — self-consumption matters.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className="text-primary underline">How Big a Solar System Do I Need?</Link></li>
                <li><Link href="/solar-panels-california" className="text-primary underline">Solar Panels in California Statewide Guide</Link></li>
                <li><Link href="/blog/solar-battery-backup-california" className="text-primary underline">Solar Battery Backup in California</Link></li>
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
