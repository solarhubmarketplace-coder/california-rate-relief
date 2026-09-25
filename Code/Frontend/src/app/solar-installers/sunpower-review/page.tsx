import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { VerifyInstallerBox, type InstallerLicense } from '@/components/shared/VerifyInstallerBox';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { CRR_AUTHOR_PERSON } from '@/lib/crr-author';

// License numbers tied to the company by a primary source; CSLB status checked September 24, 2026.
const SUNPOWER_LICENSES: InstallerLicense[] = [
  { number: '961988', holder: 'Complete Solar Inc dba SunPower', basis: 'the number reported for today’s SunPower on utility interconnection applications in California DG Stats (CPUC), data through May 31, 2026', status: 'current and active, with a pending disciplinary action (an accusation) noted on the record', checked: 'September 24, 2026' },
  { number: '890895', holder: 'SunPower Corporation Systems', basis: 'the number reported for the pre-2024 SunPower Corporation in the same DG Stats data', status: 'revoked', checked: 'September 24, 2026' }
];

export const metadata: Metadata = {
  title: "SunPower Reviews (2026): Complete Solaria Rebrand Review",
  description: "SunPower review after its 2024 Chapter 11 bankruptcy: Complete Solaria acquisition, Maxeon panel availability, and legacy warranty service.",
  alternates: { canonical: '/solar-installers/sunpower-review' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SunPower Review 2026: The Complete Solaria Rebrand, Explained',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: CRR_AUTHOR_PERSON,
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/sunpower-review' },
};

// No Review/Rating JSON-LD here: Google's review-snippet rules require
// ratings for a local business or organization to come directly from users,
// not from editors, and this site does not collect user ratings
// (developers.google.com/search/docs/appearance/structured-data/review-snippet,
// fetched 2026-09-23).

export default function SunPowerReview() {
  return (
    <PublicLayout breadcrumbLabel='SunPower Review'>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/solar-installers' className='hover:text-primary transition-colors'>Solar company reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>SunPower Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                SunPower Reviews (2026): The Complete Solaria Rebrand, Explained
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-22'>Updated April 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>10 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-2 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>Buyers who want the SunPower brand name and don&apos;t mind post-rebrand uncertainty</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You&apos;re a legacy pre-2024 SunPower customer with pending service issues</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                The SunPower name is one of the most recognizable in U.S. residential solar — but the SunPower you&apos;d hire today is not the same legal entity that existed two years ago. In August 2024, the original SunPower Corporation filed Chapter 11 bankruptcy. In early 2025, Complete Solaria acquired the key operating assets for approximately $45 million, then rebranded itself to SunPower in April 2025 and reclaimed the SPWR ticker on Nasdaq. Here&apos;s what that means for California buyers in 2026.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="SunPower review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What &quot;SunPower&quot; Actually Is Now</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Today&apos;s SunPower is a publicly traded company headquartered in Fremont, California, operating in more than 45 states. Q4 2025 revenue was approximately $88.5 million, with full-year 2025 revenue around $308.8 million. The company has publicly stated a growth target of roughly $1 billion in revenue by 2028, which implies an aggressive expansion pace.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The entity is in early-stage post-restructuring, which means the combination of recognizable brand equity and an early-days balance sheet. For a California buyer making a 25-year decision, that&apos;s a trade-off worth understanding before you sign.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SunPower does not manufacture its own panels. The legacy SunPower brand was historically associated with high-efficiency Maxeon panels — that manufacturing relationship was unwound through the 2024 bankruptcy, and today&apos;s SunPower sources Tier-1 panels from multiple suppliers. Inverter choices include Enphase microinverters among others, depending on market and project. Batteries are third-party, most commonly Tesla Powerwall or Enphase IQ.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installation uses a hybrid model of direct crews and a dealer network. This is similar structurally to Freedom Forever&apos;s pre-bankruptcy model and comes with similar trade-offs: faster geographic expansion, but more variability in install-crew quality compared to fully in-house operations.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pricing and Timeline (California)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This review does not have a verified California price for SunPower; compare its written cash price per watt with other quotes for the same system. Install-to-PTO timelines typically run 1 to 4 months depending on your utility&apos;s interconnection queue and whether the local crew is direct or dealer-installed.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>What Happens to Legacy SunPower Customers?</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                This is the most commonly asked question about today&apos;s SunPower. If you bought from the pre-2024 SunPower Corporation, your warranty obligations and service contracts were part of the bankruptcy and the asset sale. Today&apos;s SunPower has continued to service many — but not all — of the legacy obligations that transferred in the asset purchase. Legacy complaints around warranty responsiveness and service delays have continued to appear in consumer review channels through 2025 and into 2026.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If you&apos;re a legacy customer with pending warranty issues, the first step is to confirm in writing which entity is responsible for your specific contract. Separately, manufacturer warranties on your panels, inverter, and battery are from the equipment makers themselves (Maxeon, Enphase, etc.) and are not affected by the SunPower corporate restructuring.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reputation and Complaint History</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                BBB and Trustpilot profiles for SunPower carry a mix of legacy complaints (from before the bankruptcy) and newer complaints (from post-rebrand installs). Trustpilot ratings are mixed. The legacy complaint base is still meaningful — pre-2024 SunPower was subject to lawsuits covering deceptive practices and service failures, and some of that reputational residue carries into the new entity&apos;s online profile.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SunPower continues to offer 25-year performance and product warranties on new installs, consistent with industry standard. Legacy warranty obligations are being honored where they transferred as part of the asset sale. Because the entity is early-post-restructuring, long-duration warranties on new installs carry more balance-sheet risk than they would from a more established public installer.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When SunPower Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                SunPower is a reasonable option for buyers who specifically value the brand recognition, want competitive mid-market pricing, and are comfortable with a company still building its post-restructuring track record. The install-phase experience is typically fine; the variability shows up more in post-install service and long-tail warranty confidence.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s less compelling if warranty durability is your top concern, if you want a longer operating history on the current entity, or if you&apos;re specifically seeking a vertically integrated panel manufacturer — today&apos;s SunPower does not manufacture its own equipment.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is SunPower the same company it used to be?</h3>
                  <p className='text-foreground/80 leading-relaxed'>No. The original SunPower Corporation filed Chapter 11 in August 2024. Complete Solaria acquired the key operating assets and rebranded to SunPower in April 2025. The brand and the SPWR ticker continue, but the underlying legal entity is different.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Will my old SunPower warranty be honored?</h3>
                  <p className='text-foreground/80 leading-relaxed'>It depends on your specific contract and which entity it&apos;s with. Some legacy service obligations transferred to today&apos;s SunPower through the asset sale; others did not. Manufacturer warranties on your panels, inverter, and battery are from the equipment makers themselves and are unaffected.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Does the current SunPower still use Maxeon panels?</h3>
                  <p className='text-foreground/80 leading-relaxed'>The legacy SunPower&apos;s exclusive Maxeon relationship was unwound through the 2024 bankruptcy. Today&apos;s SunPower sources Tier-1 panels from multiple suppliers depending on market and project.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is SunPower going to go bankrupt again?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Nobody can predict that. Today&apos;s SunPower is publicly traded and files quarterly financial disclosures on SEC EDGAR — you can read them yourself for the most current picture of revenue, debt, and operating losses. For a 25-year decision, checking the most recent 10-Q before signing is a reasonable step.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Considering SunPower? Compare Written Quotes First.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer.</p>
              <div className='flex justify-center'>
                <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="SunPower review and quote comparison" />
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/tesla-solar-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Tesla Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/momentum-solar-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Momentum Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
              </div>
            </div>

            <div className='mt-10'>
              <Link href='/best-solar-companies-california' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Best Solar Companies in California</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <div className="container mx-auto px-4 max-w-3xl">
        <VerifyInstallerBox installerName="SunPower" licenses={SUNPOWER_LICENSES} />
      </div>
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
