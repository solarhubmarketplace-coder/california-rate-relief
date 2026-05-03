import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ChevronRight } from 'lucide-react';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header as CRRHeader } from '@/components/landing/Header';
import { Footer as CRRFooter } from '@/components/landing/Footer';
import { GLP1TrustPage } from '@/components/glp1/GLP1TrustPage';

// =============================================================================
// HOST-AWARE /about PAGE
// =============================================================================
// Each domain renders its own About content with its own layout. The page
// detects the request host and switches the layout + copy accordingly.
// =============================================================================

type Domain = 'crr' | 'grh' | 'shg' | 'ahb' | 'glp1';

async function getDomain(): Promise<Domain> {
  const hdrs = await headers();
  const host = (hdrs.get('host') || '').toLowerCase();
  if (host.includes('greenreviewshub')) return 'grh';
  if (host.includes('securehomegear')) return 'shg';
  if (host.includes('athomebiohacking')) return 'ahb';
  if (host.includes('glp1comparehub')) return 'glp1';
  return 'crr';
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const meta: Record<Domain, { title: string; description: string; canonical: string }> = {
    crr: {
      title: 'About California Rate Relief Program',
      description:
        'How California Rate Relief works, who we are, and how we connect homeowners with vetted California solar installers.',
      canonical: 'https://ratereliefca.com/about',
    },
    grh: {
      title: 'About Green Reviews Hub',
      description:
        'Independent buying guides for portable power stations, e-bikes, mini splits, smart thermostats, heat pumps, and other green-energy gear. How we research and stay honest.',
      canonical: 'https://greenreviewshub.com/about',
    },
    shg: {
      title: 'About SecureHomeGear — How We Review Home Security Products',
      description:
        'Independent reviews of home security cameras, video doorbells, and smart locks. Who we are, how we test, and how we stay honest.',
      canonical: 'https://securehomegear.com/about',
    },
    ahb: {
      title: 'About At Home Biohacking',
      description:
        'Research-backed reviews of home biohacking products. How we cite peer-reviewed studies and stay independent.',
      canonical: 'https://athomebiohacking.com/about',
    },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://glp1comparehub.com/about' },
  };
  const m = meta[domain];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
  };
}

export default async function AboutPage() {
  const domain = await getDomain();
  if (domain === 'shg') return <ShgAbout />;
  if (domain === 'ahb') return <AhbAbout />;
  if (domain === 'grh') return <GrhAbout />;
  return <CrrAbout />;
}

// -----------------------------------------------------------------------------
// CRR
// -----------------------------------------------------------------------------
function CrrAbout() {
  return (
    <PublicLayout>
      <CRRHeader />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm text-muted-foreground flex items-center gap-2'>
              <Link href='/' className='hover:text-primary'>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground'>About</span>
            </nav>
            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>About California Rate Relief</h1>
              <p className='text-lg text-muted-foreground'>An honest broker for California homeowners deciding whether solar is worth it, and which installer to trust.</p>
            </header>
            <div className='prose prose-slate max-w-none space-y-6 text-foreground/80'>
              <h2 className='text-2xl font-bold text-foreground'>What We Do</h2>
              <p>California Rate Relief helps California homeowners cut their electric bills by connecting them to vetted local solar installers. Each homeowner who fills out our 60-second quote form gets matched with up to three installers who actively serve their city, so they can compare pricing, warranty, and equipment side by side.</p>
              <p>We also publish editorial content on California solar economics: NEM 3.0, utility rate plans, installer reviews, panel and battery product reviews, and city-specific solar guides. Everything we publish is grounded in CPUC filings, utility tariffs, and the contractors&apos; own license records.</p>
              <h2 className='text-2xl font-bold text-foreground'>How We Make Money</h2>
              <p>We earn a referral fee when a homeowner who uses our quote form signs a contract with one of the installers in our network. We do not earn money from displaying ads, selling personal data, or charging homeowners. The 3-quote service is free to the homeowner.</p>
              <p>Our installer rankings, comparison pages, and individual reviews are editorial, not pay-to-play. The installers we cover were selected based on California Contractors State License Board (CSLB) status, BBB reputation, customer review data, and verified service area — not on referral economics.</p>
              <h2 className='text-2xl font-bold text-foreground'>How We Stay Honest</h2>
              <ol className='list-decimal pl-6 space-y-2'>
                <li><strong>CSLB-verified installers only.</strong> Every installer we route quotes to has an active California C-46 (Solar) or C-10 (Electrical) license that we verified at <a href='https://www.cslb.ca.gov' target='_blank' rel='noopener noreferrer' className='text-primary underline'>cslb.ca.gov</a>.</li>
                <li><strong>Editorial independence.</strong> No installer pays for placement. We publish honest trade-offs even on installers we partner with.</li>
                <li><strong>NEM 3.0 realism.</strong> We don&apos;t pitch &ldquo;pay nothing, save everything&rdquo; messaging. NEM 3.0 changed the math; we publish what the math actually says.</li>
                <li><strong>Corrections.</strong> If we get a fact wrong, we fix it and note the correction on the page. Email corrections through our <Link href='/contact' className='text-primary underline'>contact page</Link>.</li>
              </ol>
              <h2 className='text-2xl font-bold text-foreground'>Who We Are</h2>
              <p>California Rate Relief is operated by a small team that has been working in California residential solar since the NEM 2.0 era. We watched the rules change with NEM 3.0, watched some installers walk away from California while others doubled down, and watched a lot of homeowners get locked into 25-year PPA contracts they didn&apos;t fully understand. This site is our attempt to make sure the next round of homeowners has better information.</p>
              <h2 className='text-2xl font-bold text-foreground'>Contact</h2>
              <p>Questions, corrections, partnership inquiries: see our <Link href='/contact' className='text-primary underline'>contact page</Link>. Affiliate details on our <Link href='/affiliate-disclosure' className='text-primary underline'>affiliate disclosure page</Link>.</p>
            </div>
          </article>
        </div>
      </main>
      <CRRFooter />
    </PublicLayout>
  );
}

// -----------------------------------------------------------------------------
// GRH
// -----------------------------------------------------------------------------
function GrhAbout() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-6 text-sm flex items-center gap-2' style={{ color: '#71717a' }}>
              <Link href='/reviews' style={{ color: '#d4d4d8' }}>Reviews</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>About</span>
            </nav>
            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>About Green Reviews Hub</h1>
              <p className='text-lg' style={{ color: '#d4d4d8' }}>Independent buying guides for green-energy and home electrification gear, with zero tolerance for marketing spin.</p>
            </header>
            <div className='space-y-8 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>What We Cover</h2>
                <p>Green Reviews Hub publishes buying guides and product reviews across green-energy and home-electrification categories: portable power stations, solar generators, e-bikes, mini split air conditioners, electric lawn mowers and outdoor power equipment, smart thermostats, induction cooktops, heat pump water heaters, and whole-house standby generators. Every review is editorial, not sponsored.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>How We Research</h2>
                <ol className='list-decimal pl-6 space-y-2'>
                  <li><strong style={{ color: '#f5f5f5' }}>Spec verification.</strong> We pull product details from the manufacturer&apos;s current website and cross-check against recent authoritative sources.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Customer review aggregation.</strong> We cross-reference review data from BBB, Trustpilot, retailer aggregate reviews, Reddit, and specialized review sites.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Real-world fit.</strong> Each review ends with a clear statement on who the product fits and who should look elsewhere.</li>
                </ol>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Editorial Independence</h2>
                <p>Brands don&apos;t preview, influence, or veto our reviews. We don&apos;t accept payment for positive coverage. Affiliate commission rates are disclosed and never drive our recommendations.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f5f5f5' }}>Contact</h2>
                <p>See our <Link href='/contact' className='underline' style={{ color: '#10b981' }}>contact page</Link> or our <Link href='/affiliate-disclosure' className='underline' style={{ color: '#10b981' }}>affiliate disclosure</Link>.</p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}

// -----------------------------------------------------------------------------
// SHG (existing content, restored)
// -----------------------------------------------------------------------------
function ShgAbout() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>About</span>
            </nav>
            <header className='mb-12'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>About SecureHomeGear</h1>
              <p className='text-xl leading-relaxed' style={{ color: '#d4d4d8' }}>Independent, research-backed reviews of home security cameras, video doorbells, and smart locks, with zero tolerance for marketing spin.</p>
            </header>
            <div className='space-y-10 leading-relaxed'>
              <section>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>Who We Are</h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>SecureHomeGear is an independent publication covering residential home security products: security cameras, video doorbells, smart locks, alarm systems, and related smart-home tech. We&apos;re a small US-based team that got into this space because we were tired of home security reviews that read like press releases.</p>
                <p style={{ color: '#d4d4d8' }}>The home security industry is crowded, confusing, and deliberately opaque. Brands push subscription plans as if they&apos;re required. Product pages hide real pricing behind &ldquo;starting at&rdquo; claims. Feature comparisons conflate hardware capability with what&apos;s actually unlocked on the free tier. We&apos;re trying to fix that, one honest review at a time.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>How We Test and Review</h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>Every review goes through the same process:</p>
                <ol className='space-y-3 pl-6 list-decimal' style={{ color: '#d4d4d8' }}>
                  <li><strong style={{ color: '#f5f5f5' }}>Spec verification.</strong> We pull product details from the manufacturer&apos;s current website and cross-check against recent authoritative sources.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Subscription reality check.</strong> We map out exactly what&apos;s free, what&apos;s paywalled, and what the monthly cost is.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Independent review aggregation.</strong> We cross-reference customer review data from BBB, Trustpilot, retailer reviews, Reddit r/homesecurity, and specialized review sites.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Corporate and financial check.</strong> A 25-year warranty is only as good as the company behind it. We note ownership, recent restructuring, and major lawsuits.</li>
                  <li><strong style={{ color: '#f5f5f5' }}>Honest use-case fit.</strong> Every product review ends with a clear statement on who the product fits and who should look elsewhere.</li>
                </ol>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>Our Editorial Policy</h2>
                <p style={{ color: '#d4d4d8' }}>Brands don&apos;t preview, influence, or veto our reviews. We don&apos;t accept payment for positive coverage. Affiliate commission rates are disclosed and never drive our recommendations. Corrections are logged on the page when we get something wrong.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-4' style={{ color: '#f5f5f5' }}>Contact</h2>
                <p style={{ color: '#d4d4d8' }}>Questions or corrections: see our <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>contact page</Link>. Affiliate details on the <Link href='/affiliate-disclosure' className='underline' style={{ color: '#f59e0b' }}>affiliate disclosure page</Link>.</p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}

  if (d === 'glp1') {
    return (
      <GLP1TrustPage title='About GLP1CompareHub'>
        <CommonContent name={cfg.name} domain={d} />
      </GLP1TrustPage>
    );
  }

// -----------------------------------------------------------------------------
// AHB
// -----------------------------------------------------------------------------
function AhbAbout() {
  return (
    <AHBLayout>
      <AHBHeader />
      <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#6ee7b7' }}>
              <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f0fdf4' }}>About</span>
            </nav>
            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f0fdf4' }}>About At Home Biohacking</h1>
              <p className='text-xl' style={{ color: '#a7f3d0' }}>Research-backed reviews of at-home biohacking and wellness products, with peer-reviewed citations on every major claim.</p>
            </header>
            <div className='space-y-8 leading-relaxed' style={{ color: '#a7f3d0' }}>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>What We Do</h2>
                <p>At Home Biohacking covers cold plunges, infrared saunas, PEMF mats, red light therapy, vibration plates, and adjacent biohacking gear. Every benefit claim links to a peer-reviewed study or systematic review on PubMed, so readers can verify the evidence directly.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>How We Cite Research</h2>
                <p>For each product category and benefit claim, we cite the original randomized trials and meta-analyses, link to PMID or PMC IDs on PubMed, and label evidence strength honestly. Where the data is preliminary, we say so. Where claims circulate online without research support, we flag them.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>Editorial Independence</h2>
                <p>No brand pays for placement or coverage. Our product rankings are based on evidence quality, real customer review data, and product performance, not commission rates.</p>
              </section>
              <section>
                <h2 className='text-2xl font-bold mb-3' style={{ color: '#f0fdf4' }}>Contact</h2>
                <p>Questions or corrections: see our <Link href='/contact' className='underline' style={{ color: '#34d399' }}>contact page</Link> or <Link href='/affiliate-disclosure' className='underline' style={{ color: '#34d399' }}>affiliate disclosure</Link>.</p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <AHBFooter />
    </AHBLayout>
  );
}
