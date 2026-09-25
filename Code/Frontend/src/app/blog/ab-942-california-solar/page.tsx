import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { BreadcrumbTrail } from '@/components/shared/BreadcrumbTrail';
import { defaultCrumbs } from '@/lib/breadcrumbs';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';
import { ArticleJsonLd } from '@/components/shared/ArticleJsonLd';
import { SolarInquiry } from "@/components/growth/SolarInquiry";
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import { Byline } from '@/components/trust/Byline';
import { HubUpLink } from '@/components/growth/HubUpLink';
import { CRR_SOCIAL_CARD } from '@/lib/crr-social';

export const metadata: Metadata = {
  title: "AB 942 California: Solar Lease Transfer Rights (2026)",
  description: "What AB 942 did for California solar homeowners: lease/PPA transfer rules, UCC lien relief, and disclosure requirements when you sell.",
  alternates: { canonical: '/blog/ab-942-california-solar' },
  openGraph: { title: 'AB 942 California Solar', description: 'Solar lease transfer rights under California AB 942.', type: 'article', publishedTime: '2026-04-24T00:00:00Z', url: 'https://ratereliefca.com/blog/ab-942-california-solar', images: [CRR_SOCIAL_CARD] },
};

// Breadcrumb: Home / <topic hub> / this post (Block 5 section 5.6). One list
// feeds both the visible trail and the BreadcrumbList schema.
const CRUMBS = defaultCrumbs('/blog/ab-942-california-solar');
const CRUMB_LABEL = 'AB 942 California Solar';

export default function AB942CASolar() {
  return (
    <PublicLayout breadcrumbLabel={CRUMB_LABEL} breadcrumbParents={CRUMBS}>
      <ArticleJsonLd variant="Article" domain="crr" headline={"AB 942 California: Solar Lease Transfer Rights Explained (2026)"} url="https://ratereliefca.com/blog/ab-942-california-solar" datePublished="2026-04-24" dateModified="2026-04-24" description={"What California AB 942 actually did for solar homeowners; lease/PPA transfer rules, UCC lien relief, disclosure requirements, and practical impact when you sell."} />
      <Header />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <BreadcrumbTrail crumbs={CRUMBS} current={CRUMB_LABEL} className='mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground' />
            <header className="mb-10">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide">California Solar Law</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">AB 942: California&apos;s Solar Lease Transfer Rights Law, Explained</h1>
              <Byline updated="2026-04-24" />
              <p className="text-lg text-muted-foreground">AB 942 tackled one of the biggest real-world pain points in residential solar, what happens to a 20–25 year lease or PPA when the homeowner sells. Here&apos;s what the law actually did.</p>
              <HubUpLink path="/blog/ab-942-california-solar" />
            </header>
            <div className="prose prose-slate max-w-none">
              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="AB 942 and solar on a home sale" />
              </div>

              {/* 2026-09-24 correction (plan item 5.4): the earlier body described AB 942
                  as an enacted lease-transfer law codified at Civil Code § 1689.12. The
                  bill text and history on leginfo.legislature.ca.gov say otherwise, and
                  § 1689.12 is a home-solicitation provision unrelated to solar. */}
              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">AB 942 is not law</h2>
              <p>AB 942 (Calderon), introduced February 19, 2025, is not law. Its history on the Legislature&apos;s site shows no action after August 29, 2025, when the Senate Appropriations Committee sent it to the Senate Rules Committee, and no chaptered version (<a href="https://leginfo.legislature.ca.gov/faces/billHistoryClient.xhtml?bill_id=202520260AB942" className="text-primary underline" target="_blank" rel="noopener noreferrer">California Legislative Information, AB 942 history</a>, checked September 24, 2026).</p>
              <p>An earlier version of this page said AB 942 set lease-transfer rules, a 30-day lien-release deadline and new disclosures, codified at Civil Code § 1689.12. That was wrong. Section 1689.12 is part of the home-solicitation contract rules and does not mention solar.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What the bill proposed</h2>
              <p>The version the Assembly passed on June 3, 2025 dealt with net metering on a home sale. From January 1, 2026, a buyer of a home with a solar or other renewable generation system, served by a large utility such as PG&amp;E, SCE or SDG&amp;E, would have had to take the then-current tariff instead of the seller&apos;s, without the export adder, and pay all nonbypassable charges (<a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB942" className="text-primary underline" target="_blank" rel="noopener noreferrer">AB 942 bill text and digest</a>, checked September 24, 2026).</p>
              <p>On July 17, 2025, the Senate amended the bill and removed all of that. The remaining text deals only with the California Climate Credit: it would stop paying the credit to residential customers who are not enrolled in CARE or FERA and whose electricity bills for the previous year were less than $300.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">What decides a lease or PPA transfer today</h2>
              <p>Your contract does. The transfer terms, any credit check for the buyer, fees and the buyout price are in the lease or PPA you signed, so read that before you list the home. For the tariff, the CPUC says customers on NEM 2.0 may stay on it for 20 years from the date they interconnected (<a href="https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/net-energy-metering-and-net-billing" className="text-primary underline" target="_blank" rel="noopener noreferrer">CPUC, Net Energy Metering and Net Billing</a>, checked September 24, 2026). Ask your utility in writing which tariff the system will be on after the sale.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">If you are selling</h2>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Get the provider&apos;s written transfer requirements and a buyout quote before you list.</li>
                <li>Pre-qualify your buyer with the provider before you accept an offer.</li>
                <li>Give buyers the full contract early, including the payment schedule and any escalator.</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">If you are buying</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ask for the full solar contract before you make an offer.</li>
                <li>Ask the escrow or title officer whether a financing statement is recorded for the system and how it will be handled at closing.</li>
                <li>If you do not want to take over the contract, make a seller buyout a condition of your offer.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/blog/what-happens-to-solar-lease-when-i-sell-california" className="text-primary underline">What Happens to My Solar Lease When I Sell My House?</Link></li>
                <li><Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">PPA vs Loan vs Lease vs Cash</Link></li>
                <li><Link href="/blog/hoa-solar-rights-california" className="text-primary underline">HOA Solar Rights in California</Link></li>
              </ul>
            </div>
          {/* The closing ask is the inquiry form itself (2026-09-23); the link-only
              box it replaced sent this form-less page to the home page. */}
          <SolarInquiry topic="AB 942 and solar on a home sale" />
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="general" /></div>
    </PublicLayout>
  );
}
