import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowLeft, ArrowRight, Clock, Calendar } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title:
    'Semper Solaris Review 2026: Veteran-Owned California Solar, Honest Look',
  description:
    'Semper Solaris is a private, veteran-owned California solar + roofing + HVAC installer. In-house crews and strong local presence — but Trustpilot 1.6/5 and 173+ BBB complaints are real.',
  alternates: { canonical: '/solar-installers/semper-solaris-review' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Semper Solaris Review 2026: Veteran-Owned California Solar, Honest Look',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com' },
  publisher: { '@type': 'Organization', name: 'California Rate Relief Program', url: 'https://ratereliefca.com', logo: { '@type': 'ImageObject', url: 'https://ratereliefca.com/img/logo.svg' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://ratereliefca.com/solar-installers/semper-solaris-review' },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'LocalBusiness', name: 'Semper Solaris', address: { '@type': 'PostalAddress', addressLocality: 'El Cajon', addressRegion: 'CA', addressCountry: 'US' } },
  reviewRating: { '@type': 'Rating', ratingValue: '2.7', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody: 'Semper Solaris is a California-native veteran-owned installer with in-house crews and a solar + roofing + HVAC bundle. Trustpilot and BBB complaint data show meaningful post-install service issues that prospective buyers should weigh carefully.',
};

export default function SemperSolarisReview() {
  return (
    <PublicLayout>
      <Header />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm text-muted-foreground flex items-center gap-2 flex-wrap'>
              <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              <span>/</span>
              <Link href='/best-solar-companies-california' className='hover:text-primary transition-colors'>Best Solar Companies in California</Link>
              <span>/</span>
              <span className='text-foreground font-medium'>Semper Solaris Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Semper Solaris Review 2026: Veteran-Owned California Solar, Honest Look
              </h1>
              
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--muted-foreground))', border: 'hsl(var(--border))', accent: 'hsl(var(--primary))' }} />
<div className='flex items-center gap-4 text-sm text-muted-foreground'>
                <div className='flex items-center gap-1'><Calendar className='h-4 w-4' /><time dateTime='2026-04-22'>Updated April 22, 2026</time></div>
                <div className='flex items-center gap-1'><Clock className='h-4 w-4' /><span>9 min read</span></div>
              </div>
            </header>

            <div className='mb-10 rounded-xl border border-border bg-card p-6 grid sm:grid-cols-3 gap-6'>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Our take</p>
                <p className='text-3xl font-extrabold text-foreground mt-1'>2.7 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>CA homeowners who want a local installer handling solar + roofing together</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>Responsive post-install service is a high priority</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Semper Solaris is a private, veteran-owned solar, roofing, and HVAC installer headquartered in El Cajon, near San Diego. The company was founded in 2012 by ex-Marine Kelly Shawhan and has built a strong local brand around its California-native, California-focused positioning. On paper, the offer is attractive: in-house installation crews, NABCEP-certified technicians, and the ability to do a roof replacement, HVAC upgrade, and solar installation as a single coordinated project. In practice, the customer experience data tells a more mixed story — and any prospective California buyer should weigh both sides.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Company</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Semper Solaris employs between 201 and 500 people, with revenue estimates ranging roughly $85 million to $415 million depending on the source. The company is primarily focused on California — particularly San Diego, Los Angeles, the Inland Empire, and parts of the Central Valley — rather than national expansion. That&apos;s a deliberate strategy: a California-only installer can build deeper local knowledge of SCE, PG&amp;E, SDG&amp;E, and municipal utility interconnection processes than a 22-state national player can.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Semper Solaris does not manufacture its own panels. The company installs a range of Tier-1 options including Silfab, Solaria, Qcells, and Tesla panels depending on availability and project type. Inverters are primarily Enphase microinverters, with Tesla Powerwall and Enphase IQ as the standard battery options. On select panels — particularly Silfab — Semper offers enhanced labor coverage in addition to the manufacturer&apos;s equipment warranty.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installation is primarily handled by in-house W-2 crews rather than subcontractors, which is one of the company&apos;s meaningful differentiators versus national installers that lean heavily on dealer networks. California install timelines typically run 6 to 10 weeks for physical installation and 2 to 4 months for full Permission to Operate.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pricing</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Cash pricing in California runs roughly $2.80 to $3.20 per watt, competitive with the mid-market. Financing is all third-party partners — Semper does not own its own lease or PPA product. The bundled solar + roofing + HVAC option can be genuinely useful for homeowners who need multiple trades done at once, both for coordination and because roof penetrations get a single-contractor warranty rather than two contractors pointing fingers at each other if something leaks.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Reputation and Complaint Data</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Semper Solaris holds a Better Business Bureau A+ rating, but the BBB profile lists approximately 173 to 175 complaints closed in the prior three years. For a company of Semper&apos;s size, that&apos;s not as alarming as Sunrun&apos;s 4,045 or Freedom Forever&apos;s 1,359, but it is higher than Solar Optimum&apos;s 21 complaints over the same period, which is the most directly comparable California-focused installer in our data set.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The weaker data point is Trustpilot, which sits at 1.6 out of 5 based on 51 reviews. SolarReviews and Yelp are mixed to poor. No major class-action lawsuits were active in 2025 or into 2026. The recurring themes across complaints are slow technician response on post-install service calls, roof leak issues (a common industry issue but one Semper should be well-positioned to handle given their roofing division), billing surprises, and communication gaps during longer interconnection delays.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Honest read: the sales-and-install phase is generally fine, and the equipment and workmanship are solid. The friction shows up most in the months after install when something needs attention and the service queue is slow. That pattern is similar to many mid-sized installers — the economics of post-install service are tough for anyone operating outside the very largest players.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Semper offers a 25-year equipment warranty with enhanced labor coverage on select panels (notably Silfab). Workmanship and roof penetration warranties are Semper-backed. As with any private company, long-duration warranty confidence depends on the business still being around — Semper has been operating since 2012, which is a respectable run in residential solar.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Semper Solaris Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Semper is a reasonable choice for California homeowners who specifically want a local installer with California-only focus, who need solar and roofing done together (one contractor, one warranty on the roof penetrations), who value veteran-owned business support, or who are in Semper&apos;s core coverage areas (San Diego, Inland Empire, LA).
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s less compelling if fast post-install service responsiveness is a top priority, if you want the financial transparency of a public company&apos;s quarterly disclosures, or if you&apos;d rather work with a local installer with even stronger review data such as Solar Optimum in overlapping markets.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Semper Solaris still in business?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Yes. Semper Solaris continues to operate normally as a private California-based solar, roofing, and HVAC company. There are no active bankruptcy or major regulatory actions as of April 2026.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Does Semper Solaris use subcontractors?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Primarily no — Semper uses in-house W-2 crews for most installations. That&apos;s a meaningful differentiator versus large national installers that rely heavily on dealer or subcontractor networks.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What does Semper Solaris cost in California?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Cash pricing runs roughly $2.80 to $3.20 per watt, which is mid-market competitive. PPA and lease pricing depends on your specific utility and address. Compare against 2 to 3 other quotes for your exact project.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Can Semper do solar and roofing together?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Yes. The combined solar + roofing offer is one of Semper&apos;s core differentiators and is genuinely useful for homeowners who need a roof replacement as part of the project — a single contractor on the roof means a single warranty on any penetration-related issues.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Considering Semper Solaris? Compare With Two Others.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll bring you quotes from up to three installers — including Semper Solaris — so you can compare pricing, equipment, and warranty terms side by side.</p>
              <div className='flex justify-center'>
                <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/solar-optimum-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Solar Optimum Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/tesla-solar-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Tesla Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunpower-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>SunPower Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
