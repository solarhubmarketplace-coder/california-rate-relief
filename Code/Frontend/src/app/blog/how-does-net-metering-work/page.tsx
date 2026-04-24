import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';

export const metadata: Metadata = {
  title: 'How Does Net Metering Work? Plain-English Guide (2026)',
  description: "A plain-English explanation of net metering, how it works, how the credits are calculated, the difference between NEM 1.0/2.0/3.0 and net billing, and what's next.",
  alternates: { canonical: '/blog/how-does-net-metering-work' },
  openGraph: { title: 'How Does Net Metering Work?', description: 'Plain-English net metering guide for 2026.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/how-does-net-metering-work' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'How Does Net Metering Work?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function HowDoesNetMeteringWork() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">How Does Net Metering Work?</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar Basics</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">How Does Net Metering Work? (And Why It&apos;s Not the Same as Net Billing)</h1>
              <p className="text-lg text-muted-foreground">Net metering is the billing arrangement that makes residential solar economics work. Here&apos;s how it actually works, step by step.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Concept</h2>
              <p>Solar panels don&apos;t produce electricity on a nice, matching-your-usage schedule. They produce most of their output in the middle of the day, when most households use the least. Net metering is the accounting rule that lets you export excess daytime solar to the grid and get credited for it — then pull from the grid at night and apply those credits.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">How the Meter Actually Works</h2>
              <p>A bi-directional meter measures electricity flowing in both directions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Inflow</strong> — electricity you draw from the utility (billed).</li>
                <li><strong>Outflow</strong> — excess solar you send back to the grid (credited).</li>
              </ul>
              <p>At the end of each billing period, the utility calculates the net: if you sent more than you consumed, you get a credit carried to the next period. If you consumed more than you sent, you pay the difference.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Net Metering vs Net Billing</h2>
              <p>These sound identical but differ significantly:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Net metering</strong> (NEM 1.0 and 2.0) — exports are credited at the full <em>retail</em> rate you pay for imports. A 1-kWh export earns you a 40¢ credit because you pay 40¢ to import.</li>
                <li><strong>Net billing</strong> (NEM 3.0) — exports are credited at a lower <em>avoided cost</em> rate, often 5–8¢/kWh. A 1-kWh export earns 5–8¢; a 1-kWh import still costs 40¢. Imbalance favors self-consumption.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">California&apos;s NEM Generations</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Version</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Effective</th>
                      <th className="text-center py-3 px-3 font-bold text-foreground">Export Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">NEM 1.0</td><td className="text-center">2007–2016</td><td className="text-center">Full retail rate</td></tr>
                    <tr className="border-b border-border"><td className="py-3 pr-4 font-medium">NEM 2.0</td><td className="text-center">2016–2023</td><td className="text-center">Full retail minus ~2–3¢ non-bypassable fees</td></tr>
                    <tr><td className="py-3 pr-4 font-medium">NEM 3.0 / NBT</td><td className="text-center">April 2023–</td><td className="text-center">Avoided cost (~5–8¢/kWh)</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Homeowners who interconnected under NEM 1.0 or 2.0 were grandfathered into those programs for 20 years from their interconnection date. All new California residential solar after April 14, 2023 operates under NEM 3.0.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Municipal Utilities Run Their Own Rules</h2>
              <p>NEM 3.0 applies only to the three investor-owned utilities (PG&amp;E, SCE, SDG&amp;E). Municipal utilities — LADWP, SMUD, Roseville Electric, Glendale Water &amp; Power, Imperial Irrigation District, Modesto Irrigation District — each run their own net-metering programs, often more favorable than NEM 3.0.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The True-Up Statement</h2>
              <p>Unlike most electric bills, net-metered solar customers get a monthly &ldquo;informational&rdquo; bill and one annual <strong>True-Up</strong> statement that reconciles 12 months of credits and charges. If your credits exceed your charges, you typically receive a small payout (often at a discount to retail — the &ldquo;NSC&rdquo; rate). If your charges exceed your credits, you owe the difference.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-is-nem-3-california" className="text-primary underline">What Is NEM 3.0?</Link></li>
                <li><Link href="/blog/net-billing-vs-net-metering-california" className="text-primary underline">Net Billing vs Net Metering</Link></li>
                <li><Link href="/blog/nem-2-vs-nem-3-california" className="text-primary underline">NEM 2.0 vs NEM 3.0</Link></li>
                <li><Link href="/blog/nem-3-california-still-worth-it" className="text-primary underline">Is Solar Still Worth It Under NEM 3.0?</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
