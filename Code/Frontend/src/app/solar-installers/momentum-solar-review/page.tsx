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
    'Momentum Solar Review 2026: In-House Crews, But What About the Complaints?',
  description:
    'Honest 2026 review of Momentum Solar for California homeowners. In-house installation, Qcells/REC panels, Enphase microinverters — but Trustpilot 1.6/5 and a $30M TCPA settlement in 2025.',
  alternates: {
    canonical: '/solar-installers/momentum-solar-review',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Momentum Solar Review 2026: In-House Crews, But What About the Complaints?',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'California Rate Relief Program',
    url: 'https://ratereliefca.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ratereliefca.com/img/logo.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://ratereliefca.com/solar-installers/momentum-solar-review',
  },
};

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'LocalBusiness',
    name: 'Momentum Solar',
  },
  reviewRating: { '@type': 'Rating', ratingValue: '2.8', bestRating: '5' },
  author: { '@type': 'Organization', name: 'California Rate Relief Program' },
  reviewBody:
    'Momentum Solar installs with in-house crews and Tier-1 equipment, but customer reputation is mixed — Trustpilot 1.6/5, 642 BBB complaints in 3 years, and a $30M TCPA class-action settlement in 2025.',
};

export default function MomentumSolarReview() {
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
              <span className='text-foreground font-medium'>Momentum Solar Review</span>
            </nav>

            <header className='mb-10'>
              <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>Solar Installer Review</span>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mt-4 mb-4 tracking-tight leading-tight'>
                Momentum Solar Review 2026: In-House Crews, But What About the Complaints?
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
                <p className='text-3xl font-extrabold text-foreground mt-1'>2.8 <span className='text-lg text-muted-foreground'>/ 5</span></p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Best for</p>
                <p className='text-sm text-foreground font-medium mt-1'>Homeowners who want Enphase-only microinverter systems installed by in-house crews</p>
              </div>
              <div>
                <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Think twice if</p>
                <p className='text-sm text-foreground font-medium mt-1'>You&apos;ve heard negative service stories in your network</p>
              </div>
            </div>

            <div className='prose prose-slate max-w-none'>
              <p className='text-lg text-foreground/80 leading-relaxed mb-6'>
                Momentum Solar is a private mid-sized residential solar installer founded in 2009, headquartered in New Jersey with approximately 1,300 employees and operations in 11 states including California. On paper, Momentum has several things going for it: in-house installation crews (instead of a subcontractor network), Tier-1 panels, Enphase microinverters exclusively, and a 25-year workmanship warranty. In practice, the customer reputation is mixed — and the $30 million TCPA class-action settlement from 2025 is the kind of thing California buyers deserve to know about before signing.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Equipment and Installation</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Momentum installs Tier-1 panels — typically Qcells, LG, REC, Trina, or Longi depending on availability. Inverters are Enphase microinverters only, which is a genuine quality point: microinverters handle partial shading and panel-level optimization better than string inverters, and Enphase has one of the strongest warranty and reliability records in the industry. Batteries are Enphase IQ units where storage is included.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Installation is primarily handled by in-house W-2 crews rather than subcontractors. That&apos;s a real differentiator versus Sunrun or Freedom Forever&apos;s dealer-network models. Consistent crew quality is easier to achieve when the company employs the installers directly, and Momentum has built a reputation for relatively smooth install-day experiences.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Pricing and Timeline (California)</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Momentum&apos;s California cash pricing runs roughly $2.79 to $3.00 per watt, competitive with the mid-market. Install-to-PTO timelines are relatively fast — around 1 to 2 months for physical installation and 2 to 3 months for full Permission to Operate, depending on utility interconnection queues. Financing is all third-party partners (Momentum does not own its own financing product).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>The Reputation Problem</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Here&apos;s where the story gets complicated. Momentum holds a BBB A+ rating, but the same BBB profile lists 642 complaints closed over the prior three years. Trustpilot is notably low at 1.6 out of 5, and SolarReviews sits at 2.78 out of 5. For a company with ~1,300 employees and 11-state operations, that&apos;s meaningful volume.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                The recurring complaint themes are: aggressive sales tactics (cold-calling, door-to-door, follow-up pressure), post-install service delays, billing issues (especially on financed systems), and occasional roof damage during installation. The installation itself is typically handled well — the complaints tend to cluster around the sales process before and the service experience after.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                In 2025, Momentum Solar settled a $30 million class action under the Telephone Consumer Protection Act related to unsolicited marketing calls. That&apos;s a specific, verifiable fact that speaks to the sales-side complaint pattern. If you hear from Momentum and you didn&apos;t ask them to contact you, that&apos;s the pattern the settlement was about.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Warranty</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Momentum offers a 25-year equipment warranty paired with a 25-year workmanship warranty, which is a genuine strength on paper. As with any installer warranty, the value depends on the company still being around to honor it in year 18 or year 22. Momentum is private, so you don&apos;t have the quarterly financial transparency you get with a publicly traded installer. That&apos;s not a red flag by itself, but it is a data point.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>When Momentum Makes Sense</h2>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                Momentum is a reasonable option for California buyers who specifically want an Enphase microinverter system installed by in-house crews at mid-market pricing. The install experience is typically solid and the equipment choices are sound.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-6'>
                It&apos;s less compelling if aggressive sales contact has already been a negative signal for you, if you specifically value the financial transparency of a publicly traded installer, or if the post-install service pattern in the complaint data is a concern for a 25-year decision.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-10 mb-4'>Frequently Asked Questions</h2>
              <div className='space-y-6 mb-6'>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Is Momentum Solar a good company?</h3>
                  <p className='text-foreground/80 leading-relaxed'>It&apos;s a mixed picture. The install process and equipment are solid (in-house crews, Enphase microinverters, Tier-1 panels). The sales and post-install service have a higher-than-average complaint rate, and the company settled a $30 million TCPA class action in 2025. Get at least two competing quotes before deciding.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>Does Momentum Solar use subcontractors?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Installations are primarily handled by in-house W-2 crews, not a subcontractor network. That&apos;s one of the company&apos;s stronger differentiators versus larger national installers.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What panels does Momentum Solar install?</h3>
                  <p className='text-foreground/80 leading-relaxed'>Tier-1 brands — typically Qcells, LG, REC, Trina, or Longi depending on availability. Inverters are Enphase microinverters exclusively, and batteries are Enphase IQ when storage is included.</p>
                </div>
                <div>
                  <h3 className='text-lg font-bold text-foreground mb-2'>What was the Momentum Solar $30M settlement about?</h3>
                  <p className='text-foreground/80 leading-relaxed'>The 2025 settlement resolved a class-action lawsuit under the Telephone Consumer Protection Act (TCPA) alleging unsolicited marketing calls to consumers. The company settled for approximately $30 million.</p>
                </div>
              </div>
            </div>

            <div className='mt-12 bg-primary/5 rounded-2xl border border-primary/20 p-8'>
              <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 tracking-tight text-center'>Considering Momentum? Get 2 Comparison Quotes First.</h3>
              <p className='text-muted-foreground mb-6 max-w-lg mx-auto text-center leading-relaxed'>California Rate Relief works with multiple top-rated California solar installers. Fill out one 60-second form and we&apos;ll bring you quotes from up to three installers — including Momentum — so you can compare pricing, equipment, and warranty terms side by side before you sign.</p>
              <div className='flex justify-center'>
                <Link href='/#qualify' className='inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'>Get My 3 Quotes<ArrowRight className='h-4 w-4' /></Link>
              </div>
              <p className='text-xs text-muted-foreground text-center mt-4'>Free. No obligation. No impact on your credit score.</p>
            </div>

            <div className='mt-10 pt-8 border-t border-border'>
              <h3 className='text-lg font-bold text-foreground mb-4'>More California Installer Reviews</h3>
              <div className='grid sm:grid-cols-2 gap-3'>
                <Link href='/solar-installers/sunrun-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Sunrun Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/tesla-solar-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>Tesla Solar Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
                <Link href='/solar-installers/sunpower-review' className='p-4 border border-border rounded-lg hover:border-primary transition-colors'><div className='flex items-center justify-between'><span className='font-medium text-foreground'>SunPower Review</span><ArrowRight className='h-4 w-4 text-muted-foreground' /></div></Link>
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
        <AuthorBio domain="crr" palette={{ fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' }} />
      </div>

    </PublicLayout>
  );
}
