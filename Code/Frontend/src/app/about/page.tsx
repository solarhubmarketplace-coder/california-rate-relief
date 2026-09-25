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
import { SiteIdentityBlock } from '@/components/trust/SiteIdentityBlock';

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
      title: 'About California Rate Relief',
      description:
        'How California Rate Relief guides, comparison tools, and optional solar referral inquiries work.',
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
    glp1: {
      title: 'About GLP1CompareHub',
      description:
        'Source-linked price and program information for a small set of GLP-1 telehealth providers.',
      canonical: 'https://www.glp1comparehub.com/about',
    },
  };
  const m = meta[domain];
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: m.canonical },
  };
}

function Glp1About() {
  return (
    <GLP1TrustPage title='About GLP1CompareHub' subtitle='Source-linked price and program information for GLP-1 telehealth providers.'>
      <h2>What We Do</h2>
      <p>GLP1CompareHub is an independent publisher of source-linked price and program information.
      Our current evidence set covers five provider pages. We report what a provider publicly
      advertises, with a source URL, capture date, and clear caveats when a term is unknown.</p>

      <h2>How We Work</h2>
      <p>We record advertised prices and inclusions from provider pages at a stated capture date.
      We do not claim clinical review, medical expertise, or ongoing verification. Unknown terms
      remain unknown — see our <a href="/methodology">methodology</a>.</p>

      <h2>Editorial Independence</h2>
      <p>We do not accept payment for placement, sponsored reviews, or pay-to-play editorial.
      We do not publish clinical efficacy rankings. See our
      <a href="/affiliate-disclosure">affiliate disclosure</a> for details on how we earn money.</p>

      <h2>Not Medical Advice</h2>
      <p>This site provides educational information, not medical advice. GLP-1 medications
      require a prescription from a licensed healthcare provider. Always consult a qualified
      prescriber before starting, stopping, or modifying any medication. See our
      <a href="/disclaimer">medical disclaimer</a> for the full notice.</p>

      <h2>Contact</h2>
      <p>Editorial questions: <a href="mailto:editorial@glp1comparehub.com">editorial@glp1comparehub.com</a>.
      See our <a href="/contact">contact page</a> for corrections and other inquiries.</p>
    </GLP1TrustPage>
  );
}

export default async function AboutPage() {
  const domain = await getDomain();
  if (domain === 'glp1') return <Glp1About />;
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
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            <nav className="mb-6 text-sm text-muted-foreground flex items-center gap-2">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">About</span>
            </nav>
            <header className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
                About California Rate Relief
              </h1>
              <p className="text-lg text-muted-foreground">
                Compare the information before you commit. California Rate
                Relief publishes California solar, battery and utility guides,
                with tools you can use before deciding whether to request a
                solar referral.
              </p>
            </header>
            <div className="prose prose-slate max-w-none space-y-6 text-foreground/80">
              <h2 className="text-2xl font-bold text-foreground">
                What this service does
              </h2>
              <p>
                California Rate Relief is a private solar referral service. It
                does not install systems, provide financing, issue utility bills
                or decide eligibility for an assistance program.
              </p>
              <p>
                You can read the guides and use the calculators without sending
                contact details. If you want to discuss a project, you can
                submit an inquiry for referral to a solar provider.
              </p>

              <h2 className="text-2xl font-bold text-foreground">
                A referral is not a quote
              </h2>
              <p>
                The form sends your project and contact details for follow-up. A
                provider decides whether it can serve the project and what it
                can offer after its own review. Submitting does not guarantee a
                quote, a particular price or a number of competing offers.
              </p>

              <h2 className="text-2xl font-bold text-foreground">
                Use the evidence, then compare the offer
              </h2>
              <p>
                Check the source, the date and the assumptions behind a number.
                An average utility rate is not your rate plan. A monthly solar
                payment is not the full cost of a project.
              </p>
              <p>
                The comparison tools and checklists help you put written offers
                on the same basis. The provider&apos;s proposal should identify
                the equipment, project scope, payment terms and service
                responsibilities.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link
                    href="/california-utility-rate-tracker"
                    className="text-primary underline"
                  >
                    California utility rate tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/ppa-loan-vs-solar-lease-vs-cash-california"
                    className="text-primary underline"
                  >
                    Compare cash, loan, lease and PPA terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tools/solar-panel-calculator"
                    className="text-primary underline"
                  >
                    Bill and solar quote calculator
                  </Link>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground">
                How inquiries work
              </h2>
              <p>
                Read the{" "}
                <Link
                  href="/affiliate-disclosure"
                  className="text-primary underline"
                >
                  referral disclosure
                </Link>{" "}
                and the consent wording before submitting. Those explain the
                purpose of the inquiry and follow-up about the project. You can
                also read the{" "}
                <Link href="/privacy" className="text-primary underline">
                  privacy policy
                </Link>{" "}
                or{" "}
                <Link href="/#qualify" className="text-primary underline">
                  open the referral request
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-foreground">
                Corrections and questions
              </h2>
              <p>
                Found something that needs correcting? Send the page address and
                the specific claim through the{" "}
                <Link href="/contact" className="text-primary underline">
                  contact page
                </Link>
                .
              </p>
              <SiteIdentityBlock linkClassName="text-primary underline" />
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
