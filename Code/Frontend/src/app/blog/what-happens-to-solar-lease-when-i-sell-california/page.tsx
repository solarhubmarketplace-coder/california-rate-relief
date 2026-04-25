import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';

export const metadata: Metadata = {
  title: 'What Happens to My Solar Lease or PPA When I Sell My House in California?',
  description: "Selling a home with a solar lease or PPA in California — transfer, buyout, UCC lien issues, buyer-lender friction, and how to plan ahead.",
  alternates: { canonical: '/blog/what-happens-to-solar-lease-when-i-sell-california' },
  openGraph: { title: 'Solar Lease + Home Sale in California', description: 'Transfer vs buyout, UCC lien issues, buyer-lender objections.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/what-happens-to-solar-lease-when-i-sell-california' },
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: 'What Happens to My Solar Lease When I Sell My House in California?', datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

export default function SolarLeaseHomeSaleCA() {
  return (
    <PublicLayout>
      <ArticleJsonLd variant="Article" domain="crr" headline={"What Happens to My Solar Lease or PPA When I Sell My House in California?"} url="https://ratereliefca.com/blog/what-happens-to-solar-lease-when-i-sell-california" datePublished="2026-04-24" dateModified="2026-04-24" description={"Selling a home with a solar lease or PPA in California — transfer, buyout, UCC lien issues, buyer-lender friction, and how to plan ahead."} />
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span><Link href="/blog" className="hover:text-primary">Blog</Link><span>/</span><span className="text-foreground">Solar Lease Home Sale</span>
            </nav>
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">Solar + Real Estate</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">What Happens to My Solar Lease or PPA When I Sell My House in California?</h1>
              <p className="text-lg text-muted-foreground">A 20-year solar contract can complicate a home sale in ways sales reps skip over. Here&apos;s how to handle it, with a buyer-friendly transfer, a buyout, or removal.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">The Three Options</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Transfer the contract to the buyer.</strong> Most common. The buyer assumes the remainder of the lease/PPA. Requires buyer credit qualification with the solar provider.</li>
                <li><strong>Buy out the contract at closing.</strong> You pay the remaining balance (discounted by the provider for early termination). Solar stays on the house, buyer owns it free and clear.</li>
                <li><strong>Remove the system before sale.</strong> Rarely done. Solar providers sometimes require it if the buyer won&apos;t qualify and you won&apos;t buy out. Expensive and damages roof.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Transfer: What to Expect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Buyer credit check.</strong> Most solar providers require the buyer to pass a credit qualification (typically FICO 650+). If the buyer fails, transfer is denied.</li>
                <li><strong>Transfer fee.</strong> $100–$500 depending on provider.</li>
                <li><strong>Timing.</strong> 30–60 days to process. Start early — don&apos;t leave this to closing week.</li>
                <li><strong>Escalator assumption.</strong> The buyer inherits your escalator terms. If you signed a 2.9% annual escalator, the buyer will see the same.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Buyout: When It Makes Sense</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The buyer won&apos;t qualify for the transfer.</li>
                <li>The buyer rejects the contract terms as unfavorable (escalator too high, remaining term too long).</li>
                <li>You have strong negotiation leverage (seller&apos;s market).</li>
                <li>The remaining contract value is reasonable relative to the system&apos;s residual value.</li>
              </ul>
              <p>Buyouts typically run $15,000–$45,000 depending on system size, contract age, and escalator. Calculate: (remaining years × annual payment) − provider discount.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The UCC Lien Issue</h2>
              <p>
                Many solar lease/PPA companies file a <strong>UCC-1 financing statement</strong> on your property, recording their security interest in the solar equipment. This is not a traditional mortgage lien, but it shows up in title searches and can spook buyers&apos; lenders.
              </p>
              <p>
                California&apos;s AB 942 (2024) formally addressed some of these transfer-friction issues but did not eliminate all of them. Provisions worth knowing:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solar providers must release UCC filings within 30 days of contract transfer or buyout.</li>
                <li>Providers must disclose transfer terms at contract signing, including credit qualification thresholds.</li>
                <li>Providers cannot require a buyer to re-sign a longer contract than the seller&apos;s remaining term.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Buyer Pushback: The Real Conversation</h2>
              <p>
                California buyers have become educated on the solar-lease gotcha. Expect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Some buyers will require you to buy out the lease before closing.</li>
                <li>Some lenders (particularly FHA / VA) require clear title before funding, which can block a UCC-burdened sale.</li>
                <li>A leased / PPA system can reduce your listing price by 3–8% vs an owned system, per anecdotal realtor reports from 2024–2026 California sales.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What to Do Now</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Pull your original contract and find the transfer/buyout clauses.</li>
                <li>Call your solar provider at listing time (not at closing) to initiate the transfer or request a buyout quote.</li>
                <li>Disclose the solar lease/PPA in your listing. Not disclosing invites lawsuits.</li>
                <li>Have your agent address the lease in the MLS listing, price analysis, and buyer offer negotiations — not at inspection.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/ab-942-california-solar" className="text-primary underline">AB 942 California Solar Lease Transfer Rights</Link></li>
                <li><Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">PPA vs Loan vs Lease vs Cash</Link></li>
                <li><Link href="/blog/rent-solar-panels-for-your-home-california" className="text-primary underline">Renting Solar Panels in California</Link></li>
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
