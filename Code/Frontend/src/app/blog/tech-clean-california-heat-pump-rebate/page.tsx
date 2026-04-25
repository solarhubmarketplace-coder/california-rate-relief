import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'TECH Clean California: Heat Pump Rebate Program Guide (2026)',
  description: "TECH Clean California rebates for heat pump water heaters and HVAC. Eligibility, amounts, how to apply, contractor directory, and how it stacks with solar.",
  alternates: { canonical: '/blog/tech-clean-california-heat-pump-rebate' },
  openGraph: { title: 'TECH Clean California Heat Pump Rebate', description: 'The 2026 TECH Clean California heat pump rebate explained.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/tech-clean-california-heat-pump-rebate' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'TECH Clean California Heat Pump Rebate', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function TECHCleanCAGuide() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">TECH Clean California</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Electrification Rebate · California</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">TECH Clean California: Heat Pump Rebate Program (2026)</h1>
              <p className="text-lg text-muted-foreground">TECH Clean California is the state&apos;s main incentive program for replacing gas heating with electric heat pumps. Rebates stack with federal tax credits and solar — here&apos;s how it all fits together.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Is TECH Clean California?</h2>
              <p>TECH Clean California is a $200M+ statewide initiative administered by the CPUC and implemented through participating contractors. It pays rebates for replacing natural-gas water heaters and HVAC systems with electric heat-pump equivalents, on a point-of-sale basis.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">2026 Rebate Amounts</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Equipment</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Standard rebate</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Enhanced rebate (LMI / DAC)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Heat pump water heater</td><td className="text-center">$1,000–$2,000</td><td className="text-center">$2,500–$4,500</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">Heat pump HVAC (full replacement)</td><td className="text-center">$3,000–$4,000</td><td className="text-center">$6,000–$8,000</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">Panel upgrade (if triggered)</td><td className="text-center">$0–$1,500 add-on</td><td className="text-center">$2,000+ add-on</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Rebate amounts have varied over program phases. Confirm current levels with your contractor.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Stacking with Federal Tax Credits</h2>
              <p>The federal Inflation Reduction Act (IRA) provides:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Energy Efficient Home Improvement Credit (25C).</strong> Up to $2,000/year for heat pump water heater + HVAC.</li>
                <li><strong>High-Efficiency Electric Home Rebate (HEEHRA).</strong> Income-qualified point-of-sale rebates — being administered by the California Energy Commission throughout 2026.</li>
              </ul>
              <p>TECH + 25C + HEEHRA can stack. For a middle-income household replacing a gas HVAC with a heat pump: $3,500 TECH + $2,000 federal 25C = $5,500 in combined incentives on a $12,000 install.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How TECH Clean California Pairs with Solar</h2>
              <p>Heat pumps run on electricity. Pairing with solar turns the operating cost question from &ldquo;how much will this new electric load cost me&rdquo; into &ldquo;how much more solar do I need to size?&rdquo; Rough numbers for California:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Heat pump water heater adds ~1,500–2,500 kWh/year.</li>
                <li>Heat pump HVAC adds ~3,000–6,000 kWh/year (bigger homes, more usage).</li>
                <li>Total electrification (both) = ~4,500–8,500 kWh/year added.</li>
                <li>A 3–5 kW solar additions covers the new load in most California climates.</li>
              </ul>
              <p>If you&apos;re planning solar anyway, factor future electrification into your solar sizing now — it&apos;s cheaper to over-size by 3 kW upfront than to add panels in 3 years.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Residential single-family and multi-family homes.</li>
                <li>Customers of PG&amp;E, SCE, SDG&amp;E, SoCalGas, SMUD, LADWP, and most other California utilities.</li>
                <li>New and existing construction.</li>
                <li>Must use a TECH-participating contractor.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How to Apply</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Find a participating contractor through the <a href="https://www.techcleanca.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">TECH Clean California directory</a>.</li>
                <li>Get a quote that includes the TECH rebate application.</li>
                <li>The contractor files the application; you see the rebate deducted from your install invoice.</li>
                <li>Keep all receipts for your federal 25C credit tax filing.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/solar-rebates-by-california-utility" className="text-primary underline">Solar Rebates by California Utility</Link></li>
                <li><Link href="/blog/solar-panels-for-ev-charging-california" className="text-primary underline">Solar Panels for EV Charging in California</Link></li>
                <li><Link href="/blog/how-big-of-a-solar-system-do-i-need-california" className="text-primary underline">How Big of a Solar System Do I Need?</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    </PublicLayout>
  );
}
