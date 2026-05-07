import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { ShieldCheck, BookOpen, BarChart2, Scale, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Author — Chad Simpson | GLP1CompareHub',
  description:
    'Chad Simpson is the founder of GLP1CompareHub, an independent affiliate publisher that compares GLP-1 telehealth programs using verified pricing data, affiliate network performance metrics, and citations to peer-reviewed clinical research.',
  alternates: { canonical: 'https://glp1comparehub.com/author/chad-simpson' },
  robots: { index: true, follow: true },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Chad Simpson',
  url: 'https://glp1comparehub.com/author/chad-simpson',
  jobTitle: 'Founder, Independent Affiliate Publisher',
  worksFor: {
    '@type': 'Organization',
    name: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com',
  },
  description:
    'Founder of GLP1CompareHub. Independent affiliate publisher specializing in GLP-1 telehealth program comparison using verified pricing data, affiliate network performance metrics, and peer-reviewed clinical citations.',
  knowsAbout: [
    'GLP-1 telehealth programs',
    'Compounded semaglutide',
    'Compounded tirzepatide',
    'Affiliate marketing analytics',
    'Telehealth program pricing research',
    'FDA compounding regulations',
    'FTC affiliate disclosure compliance',
  ],
};

export default function AuthorChadSimpsonPage() {
  return (
    <GLP1Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <GLP1Header />

      <section className="py-12 md:py-16" style={{ backgroundColor: '#F0EBE0' }}>
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <nav className="text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" style={{ color: '#6B7B82' }}>Home</Link>
            <span style={{ color: '#6B7B82' }}> / </span>
            <span style={{ color: '#0E2A3A' }}>About the Author</span>
          </nav>
          <div className="flex items-start gap-5 mb-6">
            <div
              className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-2xl font-bold"
              style={{ backgroundColor: '#0E2A3A', color: '#D4A33A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              aria-label="Chad Simpson"
            >
              CS
            </div>
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Chad Simpson
              </h1>
              <p className="text-base mb-2" style={{ color: '#3D5560' }}>
                Founder, GLP1CompareHub &middot; Independent Affiliate Publisher
              </p>
              <p className="text-sm" style={{ color: '#6B7B82' }}>
                Temecula, CA &middot; Solar Hub Marketplace LLC
              </p>
            </div>
          </div>
          <div
            className="rounded-2xl p-5 flex items-start gap-3"
            style={{ backgroundColor: '#FFF8E1', border: '1px solid #D4A33A' }}
          >
            <ShieldCheck className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#B8860B' }} />
            <div className="text-sm" style={{ color: '#7A4F00' }}>
              <strong>Important:</strong> I am not a licensed physician, pharmacist, or healthcare provider.
              GLP1CompareHub is an <strong>independent affiliate publisher</strong>. Content on this site is
              for informational and educational purposes only &mdash; it is not medical advice. See the full{' '}
              <Link href="/medical-disclaimer" className="underline">medical disclaimer</Link>.
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-10">

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Who I Am
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#3D5560' }}>
                I&apos;m Chad Simpson, founder of GLP1CompareHub and Solar Hub Marketplace LLC, based in Temecula, California.
                I&apos;m a non-medical affiliate publisher who builds comparison sites in regulated consumer categories &mdash;
                GLP-1 telehealth is the current focus because pricing information available to patients is often incomplete,
                misleading, or outdated.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
                I am <strong>not</strong> a doctor. I am <strong>not</strong> a pharmacist. I have no financial relationship
                with any telehealth company I review beyond the affiliate commissions disclosed on every page.
                I built this site to answer a question patients actually ask: &ldquo;Which program is cheapest at my dose,
                month to month, after the first-month promo?&rdquo; Most comparison content does not answer that honestly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                What I Actually Do to Research These Programs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExpertiseCard
                  icon={<BarChart2 className="h-5 w-5" style={{ color: '#D4A33A' }} />}
                  title="Affiliate network data"
                  body="I am an active publisher on Katalys and Everflow. I have real dashboard access to EPC, conversion rates, and CPA tiers for every program I list. These are verified numbers from the partner dashboards, not estimates."
                />
                <ExpertiseCard
                  icon={<BookOpen className="h-5 w-5" style={{ color: '#D4A33A' }} />}
                  title="Live pricing verification"
                  body="Before every update I use Grok (real-time web access) to pull current pricing from each provider site. Verification dates are disclosed on every price callout. I do not use AI training data for pricing."
                />
                <ExpertiseCard
                  icon={<Scale className="h-5 w-5" style={{ color: '#D4A33A' }} />}
                  title="FDA / FTC regulatory monitoring"
                  body="I follow FDA compounding enforcement updates closely: March 2026 warning letters, the April 1 enforcement shift, the April 30 503B exclusion proposal. I update content when the regulatory picture changes and link to primary sources."
                />
                <ExpertiseCard
                  icon={<ShieldCheck className="h-5 w-5" style={{ color: '#D4A33A' }} />}
                  title="Independent ranking methodology"
                  body="I rank providers by patient fit, not by CPA payout. The methodology page explains every factor. A provider with a higher CPA will not rank above one with better pricing and conversion data."
                />
              </div>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                What I&apos;m Not Qualified to Tell You
              </h2>
              <ul className="space-y-2 text-sm" style={{ color: '#3D5560' }}>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0" style={{ color: '#B14739' }}>&#x2715;</span>
                  Whether a GLP-1 medication is medically appropriate for your individual health history
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0" style={{ color: '#B14739' }}>&#x2715;</span>
                  Whether compounded vs. branded is the right clinical choice for you
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0" style={{ color: '#B14739' }}>&#x2715;</span>
                  How these medications interact with your other prescriptions or health conditions
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold shrink-0" style={{ color: '#B14739' }}>&#x2715;</span>
                  What dose is right for you &mdash; that is between you and a licensed prescriber
                </li>
              </ul>
              <p className="text-sm mt-4" style={{ color: '#6B7B82' }}>
                For those questions, consult a licensed physician who knows your medical history.
                See <Link href="/medical-disclaimer" className="underline">our full medical disclaimer</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Affiliate Relationships &mdash; The Full Picture
              </h2>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#3D5560' }}>
                GLP1CompareHub earns commissions when readers sign up with providers through our affiliate links.
                Those commissions do not change what readers pay &mdash; the price is the same whether you arrive
                through our link or navigate directly to a provider.
              </p>
              <p className="text-base leading-relaxed mb-3" style={{ color: '#3D5560' }}>
                I have active affiliate relationships with providers through Katalys and Everflow. I disclose the
                network, CPA tier, and EPC for every program in the{' '}
                <Link href="/affiliate-disclosure" className="underline">affiliate disclosure</Link> and{' '}
                <Link href="/methodology" className="underline">methodology pages</Link>.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#3D5560' }}>
                I do <strong>not</strong> accept sponsored placement or paid reviews. A provider cannot pay me to
                rank them higher. The ranking reflects the data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Editorial Standards
              </h2>
              <ul className="space-y-3 text-base" style={{ color: '#3D5560' }}>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} />
                  <span>Every price is verified against live provider websites. Verification dates are disclosed on every page.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} />
                  <span>EPC and conversion rate data comes from live affiliate dashboard screenshots, not estimates.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} />
                  <span>FDA and FTC regulatory claims are linked to primary sources (FDA.gov, FTC.gov) &mdash; not secondary summaries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} />
                  <span>When a provider&apos;s status changes (program paused, pricing updated, new FDA guidance), I update or remove content. I re-verify all active programs monthly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0" style={{ color: '#0E6E5A' }} />
                  <span>Compounded GLP-1 is described as compounded, not as a clinically proven equivalent to FDA-approved branded medications.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl p-6" style={{ backgroundColor: '#F0EBE0', border: '1px solid #E5DDC8' }}>
              <h2 className="text-xl font-bold mb-3" style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Corrections and Contact
              </h2>
              <p className="text-sm mb-3" style={{ color: '#3D5560' }}>
                If you find an inaccuracy in pricing, a provider whose status has changed, or a regulatory claim that
                needs an update, use the contact link on the methodology page and I will investigate within 30 days.
              </p>
              <p className="text-sm mb-4" style={{ color: '#3D5560' }}>
                I do not accept guest posts, link insertion requests, or paid placements.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/methodology" className="inline-flex items-center gap-1.5 text-sm font-semibold underline" style={{ color: '#D4A33A' }}>
                  Editorial Methodology <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <Link href="/affiliate-disclosure" className="inline-flex items-center gap-1.5 text-sm font-semibold underline" style={{ color: '#D4A33A' }}>
                  Full Affiliate Disclosure <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <Link href="/medical-disclaimer" className="inline-flex items-center gap-1.5 text-sm font-semibold underline" style={{ color: '#D4A33A' }}>
                  Medical Disclaimer <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function ExpertiseCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="p-5 rounded-2xl" style={{ backgroundColor: '#F8F4ED', border: '1px solid #E5DDC8' }}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="font-bold text-sm" style={{ color: '#0E2A3A' }}>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#3D5560' }}>{body}</p>
    </div>
  );
}
