import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: 'AB 942 California: Solar Lease Transfer Rights Explained (2026)',
  description: "What California AB 942 actually did for solar homeowners; lease/PPA transfer rules, UCC lien relief, disclosure requirements, and practical impact when you sell.",
  alternates: { canonical: '/blog/ab-942-california-solar' },
  openGraph: { title: 'AB 942 California Solar', description: 'Solar lease transfer rights under California AB 942.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/ab-942-california-solar' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'AB 942 California Solar', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function AB942CASolar() {
  return (
    <PublicLayout>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">AB 942 California Solar</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">California Solar Law</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">AB 942: California&apos;s Solar Lease Transfer Rights Law, Explained</h1>
              <p className="text-lg text-muted-foreground">AB 942 tackled one of the biggest real-world pain points in residential solar, what happens to a 20–25 year lease or PPA when the homeowner sells. Here&apos;s what the law actually did.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Problem AB 942 Addressed</h2>
              <p>Homeowners with solar leases or PPAs had been reporting consistent friction when selling:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Buyers balking at inheriting long-term contracts with escalating payments.</li>
                <li>UCC-1 liens filed by solar providers complicating title clearance.</li>
                <li>Buyers&apos; mortgage lenders refusing to fund until the lien was released.</li>
                <li>Transfer-approval delays stretching close dates by weeks.</li>
                <li>Ambiguous disclosure of transfer requirements at contract signing.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What AB 942 Actually Does</h2>
              <p>Key provisions codified in Civil Code § 1689.12 and related sections:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Mandatory transfer-terms disclosure at contract signing.</strong> Solar providers must clearly disclose the buyer credit qualification thresholds, transfer fees, and any terms that can block transfer.</li>
                <li><strong>UCC release within 30 days.</strong> Providers must release UCC-1 financing statements within 30 days of a contract transfer or buyout, eliminating the title-friction problem.</li>
                <li><strong>No extended-term requirement.</strong> Providers cannot require a buyer to sign a contract with a longer remaining term than the seller had.</li>
                <li><strong>Good-faith transfer processing.</strong> Providers must process transfer applications within defined timelines; persistent delays can be reported to the California Department of Consumer Affairs.</li>
                <li><strong>Consumer-friendly language.</strong> Contracts must disclose in plain language that the contract may survive a home sale and that the buyer will need to qualify.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What AB 942 Did NOT Do</h2>
              <p>The law did not eliminate friction entirely:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Buyer credit qualification is still required. A bad-credit buyer can still be denied.</li>
                <li>Escalator terms are still inherited, buyers still get your 2.9% annual payment increase.</li>
                <li>Buyers can still negotiate a lease buyout at closing as a condition of purchase.</li>
                <li>Transfer fees still apply (typically $100–$500).</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Impact for 2026 Sellers</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Your provider has a 30-day clock on UCC release. Reference this if they stall.</li>
                <li>Pre-qualify your buyer with the solar provider before accepting an offer.</li>
                <li>If the provider delays transfer processing, file a complaint with the California Department of Consumer Affairs, AB 942 gives regulators enforcement authority.</li>
                <li>If your contract predates AB 942 (signed before January 2025), provisions still apply to post-effective-date transfers.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Practical Impact for 2026 Buyers</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request full disclosure of the existing solar contract before offer.</li>
                <li>Verify the UCC release is processing in your escrow timeline.</li>
                <li>Negotiate contract transfer or buyout as part of your offer — don&apos;t leave it to inspection.</li>
                <li>If you don&apos;t want to assume the contract, you can legitimately make the seller&apos;s lease buyout a condition of your offer.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-happens-to-solar-lease-when-i-sell-california" className="text-primary underline">What Happens to My Solar Lease When I Sell My House?</Link></li>
                <li><Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">PPA vs Loan vs Lease vs Cash</Link></li>
                <li><Link href="/blog/hoa-solar-rights-california" className="text-primary underline">HOA Solar Rights in California</Link></li>
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
