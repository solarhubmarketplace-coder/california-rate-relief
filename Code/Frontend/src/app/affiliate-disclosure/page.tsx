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

const META = {
  crr: { name: 'California Rate Relief', canonical: 'https://ratereliefca.com/affiliate-disclosure' },
  grh: { name: 'Green Reviews Hub', canonical: 'https://greenreviewshub.com/affiliate-disclosure' },
  shg: { name: 'SecureHomeGear', canonical: 'https://securehomegear.com/affiliate-disclosure' },
  ahb: { name: 'At Home Biohacking', canonical: 'https://athomebiohacking.com/affiliate-disclosure' },
  glp1: { name: 'GLP1CompareHub', canonical: 'https://www.glp1comparehub.com/affiliate-disclosure' },
};

export async function generateMetadata(): Promise<Metadata> {
  const d = await getDomain();
  if (d === "crr") {
    return {
      title: "Referral Service Disclosure | California Rate Relief",
      description:
        "What California Rate Relief's solar referral form does, what it sends, and what a provider decides after review.",
      alternates: { canonical: META.crr.canonical },
    };
  }
  return {
    title: `Affiliate Disclosure — ${META[d].name}`,
    description: `How ${META[d].name} earns money, how affiliate relationships work, and why they do not influence our recommendations.`,
    alternates: { canonical: META[d].canonical },
  };
}

function CrrReferralDisclosure() {
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
              <span className="text-foreground">
                Referral service disclosure
              </span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
              Referral service disclosure
            </h1>
            <div className="text-foreground/80 leading-relaxed space-y-6 [&_h2]:!text-foreground [&_a]:!text-primary">
              <h2 className="text-2xl font-bold">A private referral service</h2>
              <p>
                California Rate Relief publishes solar information and accepts
                voluntary project inquiries for referral. This is a private
                service with a commercial referral purpose. It is not a utility,
                a government program or an assistance application.
              </p>

              <h2 className="text-2xl font-bold">What submitting means</h2>
              <p>
                Submitting sends the project and contact details entered in the
                form for a solar referral. The form&apos;s consent wording
                explains the requested follow-up. A provider decides whether it
                can serve the project and what it can offer.
              </p>
              <p>
                A submission is not a quote, financing approval or program
                eligibility decision. It does not guarantee three quotes or a
                particular provider.
              </p>

              <h2 className="text-2xl font-bold">Using the information</h2>
              <p>
                The guides, source links, calculators and checklists can be used
                without submitting an inquiry. Compare any offer against its own
                written terms and scope. A provider appearing in an article is
                not a promise that your inquiry will be sent to that provider.
              </p>

              <h2 className="text-2xl font-bold">
                Questions about the service
              </h2>
              <p>
                Use the{" "}
                <Link href="/contact" className="underline">
                  contact page
                </Link>{" "}
                for questions about the referral process or a statement on this
                site. For handling of submitted information, read the{" "}
                <Link href="/privacy" className="underline">
                  privacy policy
                </Link>{" "}
                and the consent shown on the{" "}
                <Link href="/#qualify" className="underline">
                  referral form
                </Link>
                . More information about the service is on the{" "}
                <Link href="/about" className="underline">
                  About page
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </main>
      <CRRFooter />
    </PublicLayout>
  );
}

function CommonContent({ name, domain }: { name: string; domain: Domain }) {
  const isInstaller = domain === 'crr';
  return (
    <>
      <h2 className='text-2xl font-bold mb-3'>How {name} Earns Money</h2>
      {isInstaller ? (
        <p>{name} earns a referral fee when a homeowner who uses our 3-quote form signs a contract with one of the California solar installers in our network. We do not earn money from displaying ads, selling personal data, or charging homeowners. The 3-quote service is free to the homeowner.</p>
      ) : (
        <p>{name} is a participant in affiliate programs from major retailers and direct-from-manufacturer affiliate programs. When you click an affiliate link on our site and complete a purchase, we may earn a referral commission at no extra cost to you.</p>
      )}

      <h2 className='text-2xl font-bold mt-8 mb-3'>What That Does NOT Mean</h2>
      <ul className='list-disc pl-6 space-y-2'>
        <li>Brands do not pay us for positive coverage.</li>
        <li>Brands do not preview, influence, or veto our editorial content.</li>
        <li>Affiliate commission rates do not affect product rankings or installer rankings.</li>
        <li>We do not accept &ldquo;sponsored&rdquo; reviews or pay-to-play editorial placements.</li>
      </ul>

      <h2 className='text-2xl font-bold mt-8 mb-3'>How Rankings Are Determined</h2>
      <p>Editorial rankings are based on verifiable factors: published specifications, independent customer review data (BBB, Trustpilot, retailer aggregate reviews, Reddit, specialized review sites), warranty terms, corporate stability and licensing, and real-world fit for specific use cases. {isInstaller && 'For California solar installers we also verify CSLB license status, bond, and worker comp.'}</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>FTC Compliance</h2>
      <p>This site complies with FTC 16 CFR Part 255 (Guides Concerning Endorsements and Testimonials in Advertising). All material connections — including affiliate relationships — are disclosed on every page that contains affiliate links. Disclosure is also restated in this page.</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>Programs We Participate In</h2>
      <p>Our affiliate participation includes networks such as Impact, AWIN, CJ Affiliate, ShareASale, Rakuten Advertising, and Amazon Associates, plus direct partnerships with select brands. Specific brand and program participation varies by product category and changes over time.</p>

      <h2 className='text-2xl font-bold mt-8 mb-3'>Questions</h2>
      <p>Email us through the <Link href='/contact' className='underline'>contact page</Link>. We respond to disclosure questions within one business day.</p>
    </>
  );
}

function Glp1AffiliateContent() {
  return (
    <>
      <h2>How GLP1CompareHub Can Earn Money</h2>
      <p>
        Some outbound provider links are affiliate links. If you click one and become a customer,
        GLP1CompareHub may earn a commission. The price-transparency table also contains direct,
        non-affiliate evidence links to the provider pages we checked.
      </p>

      <h2>What the Commission Cannot Buy</h2>
      <ul>
        <li>A better position in the public price dataset</li>
        <li>Removal of a pricing conflict, missing term, or other caveat</li>
        <li>A positive medical or editorial recommendation</li>
        <li>Advance review, approval, or veto power over our published copy</li>
      </ul>

      <h2>How the Current Dataset Is Ordered</h2>
      <p>
        Alphabetically. That is the whole rule. We do not use commission rates, payout data, or
        affiliate-network performance to order the records. Those internal economics are excluded
        from the public pricing dataset.
      </p>

      <h2>How We Mark Material Connections</h2>
      <p>
        Pages containing affiliate calls to action carry a plain-language disclosure before the
        relevant link. Sponsored outbound links are also marked in the page code. A source citation
        is not automatically an affiliate link.
      </p>

      <h2>Questions or Corrections</h2>
      <p>
        Use the <Link href='/contact'>contact page</Link>. Include the URL and the exact link or
        disclosure you believe is wrong.
      </p>
    </>
  );
}

export default async function AffiliateDisclosurePage() {
  const d = await getDomain();
  const cfg = META[d];

  if (d === 'shg') {
    return (
      <SHGLayout>
        <SHGHeader />
        <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#71717a' }}>
                <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f5f5f5' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#d4d4d8' }} className='leading-relaxed [&_h2]:text-foreground [&_h2]:!text-zinc-100 [&_a]:!text-amber-500'>
                <CommonContent name={cfg.name} domain={d} />
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
      <GLP1TrustPage title='Affiliate Disclosure'>
        <Glp1AffiliateContent />
      </GLP1TrustPage>
    );
  }

  if (d === 'ahb') {
    return (
      <AHBLayout>
        <AHBHeader />
        <main className='py-16' style={{ backgroundColor: '#0a1a14' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#6ee7b7' }}>
                <Link href='/' style={{ color: '#a7f3d0' }}>Home</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f0fdf4' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f0fdf4' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#a7f3d0' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#a7f3d0' }} className='leading-relaxed [&_h2]:!text-emerald-50 [&_a]:!text-emerald-400'>
                <CommonContent name={cfg.name} domain={d} />
              </div>
            </article>
          </div>
        </main>
        <AHBFooter />
      </AHBLayout>
    );
  }

  if (d === 'grh') {
    return (
      <ReviewLayout>
        <ReviewHeader />
        <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
          <div className='container mx-auto px-4'>
            <article className='max-w-3xl mx-auto'>
              <nav className='mb-8 text-sm flex items-center gap-2' style={{ color: '#71717a' }}>
                <Link href='/reviews' style={{ color: '#d4d4d8' }}>Reviews</Link>
                <ChevronRight className='h-3 w-3' />
                <span style={{ color: '#f5f5f5' }}>Affiliate Disclosure</span>
              </nav>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>Affiliate Disclosure</h1>
              <p className='text-lg mb-8' style={{ color: '#d4d4d8' }}>How {cfg.name} earns money and stays editorially independent.</p>
              <div style={{ color: '#d4d4d8' }} className='leading-relaxed [&_h2]:!text-zinc-100 [&_a]:!text-emerald-500'>
                <CommonContent name={cfg.name} domain={d} />
              </div>
            </article>
          </div>
        </main>
        <ReviewFooter />
      </ReviewLayout>
    );
  }

  return <CrrReferralDisclosure />;
}
