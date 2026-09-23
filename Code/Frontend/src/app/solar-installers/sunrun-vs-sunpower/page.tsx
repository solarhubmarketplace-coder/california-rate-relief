import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from "@/components/growth/HeroQuickCheck";
import type { Metadata } from 'next';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

const metaTitle = "Sunrun vs SunPower (2026): After SunPower's Bankruptcy";
const metaDescription =
  "SunPower filed Chapter 11 in 2024; Complete Solaria now runs the brand. Sunrun vs SunPower on warranty, ownership, CSLB license and pre-2024 systems.";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: '/solar-installers/sunrun-vs-sunpower' },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: 'https://ratereliefca.com/solar-installers/sunrun-vs-sunpower',
    publishedTime: '2026-04-24T00:00:00Z',
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};
const articleSchema = { '@context': 'https://schema.org', '@type': 'Article', headline: "Sunrun vs. SunPower: How They Compare After SunPower's 2024 Bankruptcy", datePublished: '2026-04-24', author: { '@type': 'Organization', name: 'California Rate Relief Program' }, publisher: { '@type': 'Organization', name: 'California Rate Relief Program' } };

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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight">Sunrun vs. SunPower: How They Compare After SunPower&apos;s 2024 Bankruptcy</h1>

              <LastReviewedStamp date="2026-09-22" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<p className="text-lg text-muted-foreground">SunPower filed for Chapter 11 bankruptcy in 2024; Complete Solaria acquired the business and now runs it under the SunPower brand for California customers. That ownership change is the main thing to know before comparing the two companies on price, equipment and service. Here&apos;s how Sunrun and SunPower actually stack up now.</p>
            </header>
            <div className="prose prose-slate max-w-none">
              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className="not-prose my-8">
                <HeroQuickCheck topic="Sunrun vs SunPower comparison" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Differences</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>SunPower = premium panels.</strong> Industry-leading 22%+ efficiency and up to 25 years of manufacturer warranty coverage on premium panels and microinverters (<a href="https://us.sunpower.com/warranty-and-resources" target="_blank" rel="noopener external" className="text-primary underline">SunPower Inc., warranty and resources</a>, checked 2026-09-22). Best-in-class panels if you care about maximum watts per square foot.</li>
                <li><strong>Sunrun = broader panel options</strong>, mid-tier pricing, PPA/lease availability. No premium panel line.</li>
                <li><strong>Post-bankruptcy SunPower</strong> (now under Complete Solaria) has reaffirmed warranty continuity for existing customers but remains smaller and less financially stable than pre-bankruptcy.</li>
                <li><strong>Sunrun</strong> is publicly traded, profitable, and the largest residential solar company in the US with no comparable financial risk.</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Side by Side: Ownership, Warranty, Service and Licenses (Sourced Today)</h2>
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-3 pr-4 font-bold text-foreground">Factor</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">Sunrun</th>
                      <th className="text-left py-3 px-3 font-bold text-foreground">SunPower (Complete Solaria)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">Ownership models offered</td>
                      <td className="py-3 px-3">Lease (Sunrun owns the system), PPA (Sunrun owns), loan (homeowner owns), cash purchase (homeowner owns).</td>
                      <td className="py-3 px-3">Cash purchase (homeowner owns), loan (homeowner owns, $0-down for qualified buyers), lease and PPA (both through a third-party financing provider, not SunPower Inc. itself — that provider owns, installs, maintains and insures the system). Availability varies by state.</td>
                    </tr>
                    <tr className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">Warranty on a new install</td>
                      <td className="py-3 px-3">The Sunrun Guarantee: at least 90% of estimated lifetime production (Sunrun pays the shortfall), free replacement parts and labor for 25 years, a watertight roof warranty, and a guarantee the battery keeps your lights on in an outage. Applies to Subscription and Protection Plus plans — not stated to apply automatically to a cash or loan purchase. Not available in Florida; Illinois terms vary.</td>
                      <td className="py-3 px-3">10-year workmanship warranty, two years of free inspections and support, a production guarantee (remediation triggers if output falls below 50% for 3 consecutive months or below 85% for 18 consecutive months), and up to 25 years of manufacturer coverage on premium panels and microinverters.</td>
                    </tr>
                    <tr className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">If you already owned the old company&apos;s system</td>
                      <td className="py-3 px-3">Not applicable — Sunrun hasn&apos;t changed corporate identity.</td>
                      <td className="py-3 px-3">If your system was installed under the original SunPower Corporation on or before September 30, 2024, SunPower Inc. states the 2024 acquisition &ldquo;did not include taking any interest&rdquo; in that system, lease or PPA — contact your lender/financier, or SunStrong Management at (833) 514-1858. Systems installed after that date keep the warranty given at signing, serviced by SunPower Inc.</td>
                    </tr>
                    <tr className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">Service/transfer when you sell the home</td>
                      <td className="py-3 px-3">A lease or PPA doesn&apos;t end at sale — it transfers through a 4-step process: exchange buyer/escrow details, confirm the closing date, e-sign the transfer agreement (buyer completes a soft credit check that doesn&apos;t affect their score), then the transfer finalizes at close and the seller gets a final invoice. Any UCC-1/NOIEPC notice on title is temporarily removed during transfer at no cost. If the buyer won&apos;t assume the agreement, the seller can prepay the balance into the sale price instead. A cash-purchased system conveys with the home like any other fixture.</td>
                      <td className="py-3 px-3">Not published for a current SunPower Inc. lease or PPA on the pages checked. For a pre-9/30/2024 SunPower Corp. system, see the row above instead.</td>
                    </tr>
                    <tr className="border-b border-border align-top">
                      <td className="py-3 pr-4 font-medium">Who installs the system</td>
                      <td className="py-3 px-3">Not stated on the pages checked — see the full Sunrun review.</td>
                      <td className="py-3 px-3">Not stated on the pages checked — see the full SunPower review.</td>
                    </tr>
                    <tr className="align-top">
                      <td className="py-3 pr-4 font-medium">CSLB license number(s), as published</td>
                      <td className="py-3 px-3">#750184 and #969975 (no classification given). Status not independently verified — check directly at CSLB before signing.</td>
                      <td className="py-3 px-3">#961988, held by &ldquo;Complete Solar, Inc. DBA SunPower,&rdquo; classifications C-10 (Electrical) and C-46 (Solar). Status not independently verified — check directly at CSLB before signing.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground">Sources: <a href="https://www.sunrun.com/go-solar-center/solar-faq/whats-a-solar-lease-or-ppa" target="_blank" rel="noopener external" className="text-primary underline">Sunrun, financing FAQ</a>, <a href="https://www.sunrun.com/why-sunrun/your-guarantee" target="_blank" rel="noopener external" className="text-primary underline">Sunrun, your guarantee</a>, <a href="https://www.sunrun.com/go-solar-center/solar-faq/what-happens-if-i-move" target="_blank" rel="noopener external" className="text-primary underline">Sunrun, moving FAQ</a>, <a href="https://www.sunrun.com/state-contractor-license-information" target="_blank" rel="noopener external" className="text-primary underline">Sunrun, state license information</a>, <a href="https://us.sunpower.com/warranty-and-resources" target="_blank" rel="noopener external" className="text-primary underline">SunPower Inc., warranty and resources</a>, <a href="https://us.sunpower.com/solar-financing-and-payment-options" target="_blank" rel="noopener external" className="text-primary underline">SunPower Inc., financing and payment options</a>, and <a href="https://us.sunpower.com/licenses" target="_blank" rel="noopener external" className="text-primary underline">SunPower Inc., licenses</a> (all checked 2026-09-22).</p>
              <p>Verify whichever CSLB number you&apos;re given directly before signing — see our <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className="text-primary underline">full contractor-verification walkthrough</Link>. For how lease, PPA, loan and cash purchase actually differ in practice, beyond these two companies, see <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className="text-primary underline">Solar Lease vs. PPA vs. Loan vs. Cash in California</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">When to Choose SunPower (Complete Solaria)</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You&apos;re a cash buyer who wants the highest-efficiency panels.</li>
                <li>Your roof has limited area and you need to maximize kW-per-square-foot.</li>
                <li>You value SunPower&apos;s up to 25-year manufacturer warranty coverage on premium panels and microinverters.</li>
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
              <p>Complete Solaria has publicly committed to honoring existing SunPower customer warranties. SunPower Inc.&apos;s current site doesn&apos;t reference Maxeon branding, and the manufacturer warranty it markets today is up to 25 years — not the 40-year Maxeon-branded figure previously stated here (<a href="https://us.sunpower.com/warranty-and-resources" target="_blank" rel="noopener external" className="text-primary underline">SunPower Inc., warranty and resources</a>, checked 2026-09-22). That said:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Panel warranty: up to 25 years of manufacturer coverage on premium panels and microinverters, per SunPower Inc.&apos;s current warranty page.</li>
                <li>Workmanship warranty: Complete Solaria as assumed obligations — newer operation, less track record.</li>
                <li>Production guarantee (if included in your contract): verify specifically with your representative.</li>
              </ul>
              <p>For new 2026 installs, ask your SunPower rep for explicit documentation of each warranty component and which entity is responsible.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Who Each Tends to Fit</h2>
              <p>Neither company is a better fit for every California homeowner — what changes the answer is which of these applies to your situation:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>If $0-down lease or PPA financing is the deciding factor</strong>, that changes what you&apos;re actually comparing: Sunrun offers lease and PPA directly, and owns the system under either. SunPower&apos;s lease/PPA runs through a separate third-party financing provider, not SunPower Inc. itself, and availability varies by state.</li>
                <li><strong>If you&apos;re weighing what happens to your contract when you sell</strong>, Sunrun publishes a specific transfer process for its lease/PPA customers (above). SunPower Inc. doesn&apos;t publish an equivalent process for a post-2024 lease/PPA on the pages checked this session — ask directly before signing if that matters to you.</li>
                <li><strong>If you already own a pre-9/30/2024 SunPower Corporation system</strong>, your warranty situation is materially different from either company&apos;s new-install terms — see the table above and contact SunStrong Management or your financier directly.</li>
                <li><strong>If you want a single guarantee document that covers production, repairs, roof and battery together</strong>, that&apos;s how Sunrun structures its Subscription/Protection Plus guarantee. SunPower Inc.&apos;s new-install coverage is split across a workmanship warranty, a 2-year support window, a production-shortfall formula and separate manufacturer warranties.</li>
              </ul>
              <p>This isn&apos;t a ranking — read the full reviews for service history and complaint patterns before deciding: <Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link> · <Link href="/solar-installers/sunpower-review" className="text-primary underline">Full SunPower Review</Link>.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bottom Line</h2>
              <p>For most California homeowners: <strong>Sunrun</strong> is the lower-risk pick in 2026, especially for PPA or lease buyers. <strong>SunPower (Complete Solaria)</strong> still makes sense for cash buyers who specifically want its premium-panel efficiency and warranty coverage — but verify warranty terms carefully at contract signing.</p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Related Reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><Link href="/solar-installers/sunrun-review" className="text-primary underline">Full Sunrun Review</Link></li>
                <li><Link href="/solar-installers/sunpower-review" className="text-primary underline">Full SunPower Review</Link></li>
                <li><Link href="/solar-installers/sunnova-vs-sunrun" className="text-primary underline">Sunnova vs Sunrun</Link></li>
              </ul>
            <div className="mt-8">
              <SolarInquiry topic="Sunrun vs SunPower comparison" />
            </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
