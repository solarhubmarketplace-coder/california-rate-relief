import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { RelatedInstallers } from '@/components/shared/RelatedInstallers';

export const metadata: Metadata = {
  title: "Silfab Solar Panels Review 2026: US-Made Tier-1",
  description: "Silfab, founded 2010, builds panels in Washington State and Canada. Tier-1 specs, 25-year warranty, and who the IRA domestic-content bonus actually pays.",
  alternates: { canonical: '/panel-reviews/silfab-solar-panels-review' },
  openGraph: { title: 'Silfab Solar Panels Review 2026: The US-Manufactured Tier-1 Choice', description: 'Silfab Solar panel review for California homeowners.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Silfab Solar Panels Review 2026',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/panel-reviews/silfab-solar-panels-review' },
};

export default function SilfabSolarReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/panel-reviews' className='hover:text-primary transition-colors'>Panel Reviews</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Silfab Solar</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Panel Brand Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>Silfab Solar Panels Review 2026: The US-Manufactured Tier-1 Choice</h1>
              <div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-23'>April 23, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>6 min read</span></div>
              </div>
            </header>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Silfab Solar is a tier-1 residential panel manufacturer with a major differentiator: it manufactures panels in the United States and Canada, and US-made modules can count toward the domestic-content bonus on the commercial federal credit. For California homeowners who want US-made panels, Silfab is one of the options to ask about. Here&apos;s an honest review.
              </p>

              {/* Bill-first step after the intro; it opens the inquiry form below at step 2. */}
              <div className='not-prose my-8'>
                <HeroQuickCheck topic="Silfab Solar panels review and quote comparison" />
              </div>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Company</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Silfab Solar is a private North American company headquartered in Mississauga, Ontario, Canada, with US manufacturing facilities in Washington State. Founded in 2010, Silfab focuses exclusively on the North American residential and light commercial market rather than competing with Chinese manufacturers on utility-scale commodity panels. The company has consistently been recognized as a tier-1 manufacturer and its panels are common on premium residential installs across the US.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                As a private company, Silfab doesn&apos;t file public quarterly reports. But the continuous US manufacturing presence and 15-year operating history provide reasonable warranty durability confidence.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Panel Series</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Silfab&apos;s residential lineup includes the <strong>Cascade</strong>, <strong>Prime</strong>, and <strong>Elite</strong> series. Prime and Elite are the premium options with higher efficiency and stronger warranty specs. Wattage and efficiency vary by series; the datasheet for the quoted model gives both.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Silfab offers a standard 25-year product defect warranty + 25-year power/performance warranty. The premium series (Prime, Elite) typically guarantee higher year-25 output than the baseline Cascade — specific percentages vary by product spec sheet. Silfab also describes an <strong>enhanced labor warranty</strong> available through some installers, covering the labor cost of replacement beyond the panel itself; ask whether the installer quoting you offers it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Who Uses Silfab in California</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If an installer such as{' '}<Link href='/solar-installers/semper-solaris-review' className='text-primary hover:underline'>Semper Solaris</Link>{' '}offers Silfab, ask it in writing whether the Silfab labor coverage applies to your system and how it combines with the installer&apos;s own workmanship warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Other California installers also use Silfab, particularly those targeting customers who want US-made panels.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The IRA Domestic-Content Advantage</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The IRS domestic-content bonus requires the project to be built with set percentages of US-made steel, iron and manufactured products; it adds 10 percentage points for a project under 1 MW or one meeting prevailing-wage and apprenticeship rules, and 2 points otherwise. US-made Silfab modules can count toward the manufactured-products share, but the panel alone does not qualify a project. Read who benefits carefully: this bonus sits on the <em>commercial</em> credit under IRC § 48E, so a qualifying project can reach 40% rather than 30%. A homeowner buying a system in 2026 claims none of it — the residential credit under IRC § 25D ended for expenditures made after December 31, 2025. The party that benefits is a business buyer, or the third-party owner on a lease or PPA.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Verify with your installer whether your specific install qualifies for the domestic-content bonus — it depends on more than just the panel (inverters, racking, and other components factor in). But Silfab panels give you a strong start on that pathway.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Silfab Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want US-made panels</strong> for the domestic-content ITC bonus or for supply-chain considerations.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You want enhanced labor coverage</strong> and the installer quoting you offers Silfab&apos;s labor warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                <strong>You don&apos;t need the cheapest panel.</strong> Compare the per-watt price of a Silfab quote with an otherwise identical quote using another tier-1 brand.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Silfab May Not Be The Best Fit</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                If your installer doesn&apos;t stock Silfab or have a partnership in place, you may not get the enhanced labor warranty — in which case you could get similar panel spec from{' '}<Link href='/panel-reviews/rec-solar-panels-review' className='text-primary hover:underline'>REC</Link>{' '}or{' '}<Link href='/panel-reviews/canadian-solar-panels-review' className='text-primary hover:underline'>Canadian Solar</Link>{' '}; if price is the dominant factor, ask each installer for the same system with a different panel brand and compare.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Are Silfab panels good?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Yes. Tier-1 manufacturer with US manufacturing and 25-year product and power warranties.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Where are Silfab panels made?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Silfab operates manufacturing facilities in Washington State (US) and Mississauga, Ontario (Canada). US-made modules can count toward the domestic-content bonus on the commercial federal credit; the whole project has to meet the IRS thresholds.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>Does Silfab have an enhanced warranty?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Standard is 25-year product + 25-year power. Silfab describes enhanced labor coverage through some installers, meaning the labor to replace a defective panel is also covered, not just the panel itself. Ask your installer whether your install qualifies.</p>

              <h3 className='text-lg font-bold text-foreground mt-6 mb-2'>How does Silfab compare to Qcells?</h3>
              <p className='text-foreground/80 leading-relaxed mb-4'>Both are US-manufactured tier-1 panels. Qcells has US manufacturing in Georgia. Silfab has US manufacturing in Washington State. Spec-wise similar; warranty structure and installer relationships are the more meaningful differentiator.</p>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8 text-center'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight'>Ask for US-Made Silfab Panels in a Written Quote</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto'>California Rate Relief is a private referral service. If you want a provider to review your project, send your details through the form on this page. A provider decides whether it can serve your address and what it can offer. California Rate Relief is compensated by a solar provider when a homeowner we refer signs an agreement.</p>
              <Link href='#solar-inquiry' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Request a solar review<ArrowRight className='h-4 w-4' /></Link>
            </div>

            <div className='mt-8'>
              <SolarInquiry topic="Silfab Solar panels review and quote comparison" />
            </div>

            <div className='mt-10'><Link href='/panel-reviews' className='inline-flex items-center gap-2 text-primary font-medium text-sm hover:underline'><ArrowLeft className='h-4 w-4' />Back to Panel Reviews</Link></div>
          </article>
        </div>
      </main>
      <Footer />
    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="crr" variant="compact" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} /></div>
    <div className="container mx-auto px-4 max-w-3xl"><RelatedInstallers picks="premium" /></div>
    </PublicLayout>
  );
}
