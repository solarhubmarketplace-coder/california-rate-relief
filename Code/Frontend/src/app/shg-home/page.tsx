import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowRight, Camera, DoorOpen, Lock, Shield, Video, Wifi } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SecureHomeGear — Honest Home Security Reviews',
  description:
    "Independent, research-backed reviews of home security cameras, video doorbells, and smart locks. We help you find products that fit your home — with or without subscription lock-in.",
  alternates: { canonical: 'https://securehomegear.com/' },
  openGraph: {
    title: 'SecureHomeGear — Honest Home Security Reviews',
    description:
      'Independent, research-backed reviews of home security cameras, video doorbells, and smart locks.',
    type: 'website',
    url: 'https://securehomegear.com/',
    siteName: 'SecureHomeGear',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SecureHomeGear',
  url: 'https://securehomegear.com',
  description:
    'Independent, research-backed reviews of home security cameras, video doorbells, smart locks, and alarm systems.',
};

export default function SHGHomepage() {
  return (
    <SHGLayout>
      <SHGHeader />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero */}
      <section className='py-20 md:py-28' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <span
              className='inline-block text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6'
              style={{
                backgroundColor: '#f59e0b22',
                color: '#f59e0b',
                border: '1px solid #f59e0b55',
              }}
            >
              No Fluff. No Hype. Real Testing.
            </span>
            <h1
              className='text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight'
              style={{ color: '#f5f5f5' }}
            >
              Home Security Reviews That Actually Help You Choose
            </h1>
            <p
              className='text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl mx-auto'
              style={{ color: '#d4d4d8' }}
            >
              We cut through the marketing. Independent reviews of security
              cameras, video doorbells, and smart locks — including the
              no-subscription alternatives big brands don&apos;t want you to know
              about.
            </p>
            
            <div className='my-8 rounded-xl overflow-hidden border max-w-4xl mx-auto' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format&fit=crop' alt='Modern home with security cameras installed' className='w-full h-72 object-cover' loading='lazy' />
            </div>
<div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/cameras'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all'
                style={{ backgroundColor: '#f59e0b', color: '#0a0f1c' }}
              >
                Browse Camera Reviews
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                href='/alternatives/ring'
                className='inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-all'
                style={{
                  color: '#f5f5f5',
                  borderColor: '#1e293b',
                  backgroundColor: '#111827',
                }}
              >
                Ring Alternatives
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto'>
            <h2
              className='text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight'
              style={{ color: '#f5f5f5' }}
            >
              Find Reviews By Category
            </h2>
            <p
              className='text-lg text-center mb-12 max-w-2xl mx-auto'
              style={{ color: '#d4d4d8' }}
            >
              Every product we review, we test against real-world use — not
              marketing specs.
            </p>

            <div className='grid md:grid-cols-3 gap-5'>
              {[
                {
                  icon: Camera,
                  title: 'Security Cameras',
                  desc: 'Outdoor, indoor, wired, battery — every major brand, honestly ranked.',
                  href: '/cameras',
                },
                {
                  icon: DoorOpen,
                  title: 'Video Doorbells',
                  desc: 'Ring and Nest are not the only options. We cover subscription-free alternatives.',
                  href: '/cameras',
                },
                {
                  icon: Shield,
                  title: 'No-Subscription Picks',
                  desc: 'Cameras and doorbells that do not hold features hostage behind a monthly fee.',
                  href: '/alternatives/ring',
                },
                {
                  icon: Video,
                  title: 'POE & Wired Systems',
                  desc: 'Reolink, Lorex, commercial-grade NVR setups for serious coverage.',
                  href: '/cameras',
                },
                {
                  icon: Lock,
                  title: 'Smart Locks',
                  desc: 'Keyless entry, keypad, fingerprint — which ones actually hold up.',
                  href: '/cameras',
                },
                {
                  icon: Wifi,
                  title: 'Brand Comparisons',
                  desc: 'Eufy vs Ring. Arlo vs Nest. Canary vs everyone. Head-to-head tests.',
                  href: '/compare/eufy-vs-ring',
                },
              ].map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className='p-6 rounded-xl border transition-colors hover:border-amber-500'
                  style={{
                    backgroundColor: '#111827',
                    borderColor: '#1e293b',
                  }}
                >
                  <cat.icon
                    className='h-6 w-6 mb-3'
                    style={{ color: '#f59e0b' }}
                  />
                  <h3
                    className='font-bold text-lg mb-2'
                    style={{ color: '#f5f5f5' }}
                  >
                    {cat.title}
                  </h3>
                  <p className='text-sm leading-relaxed' style={{ color: '#d4d4d8' }}>
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value prop — what makes SHG different */}
      <section
        className='py-16 border-t'
        style={{ backgroundColor: '#0a0f1c', borderColor: '#1e293b' }}
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto'>
            <h2
              className='text-3xl md:text-4xl font-bold mb-8 tracking-tight text-center'
              style={{ color: '#f5f5f5' }}
            >
              What Makes SecureHomeGear Different
            </h2>

            <div className='space-y-6'>
              <div
                className='p-5 rounded-xl border'
                style={{
                  backgroundColor: '#111827',
                  borderColor: '#1e293b',
                }}
              >
                <h3
                  className='font-bold text-lg mb-2'
                  style={{ color: '#f59e0b' }}
                >
                  We cover the no-subscription alternatives
                </h3>
                <p style={{ color: '#d4d4d8' }}>
                  Ring, Blink, and Nest work hard to lock you into monthly
                  subscriptions for basic features. We cover the alternatives —
                  Eufy, Canary, Reolink, Lorex — that let you keep your footage
                  without a recurring bill.
                </p>
              </div>

              <div
                className='p-5 rounded-xl border'
                style={{
                  backgroundColor: '#111827',
                  borderColor: '#1e293b',
                }}
              >
                <h3
                  className='font-bold text-lg mb-2'
                  style={{ color: '#f59e0b' }}
                >
                  Every claim is cross-verified
                </h3>
                <p style={{ color: '#d4d4d8' }}>
                  We don&apos;t copy marketing copy. Product specs, pricing,
                  warranty terms, and subscription requirements are
                  cross-checked against manufacturer websites and independent
                  review sources before we publish.
                </p>
              </div>

              <div
                className='p-5 rounded-xl border'
                style={{
                  backgroundColor: '#111827',
                  borderColor: '#1e293b',
                }}
              >
                <h3
                  className='font-bold text-lg mb-2'
                  style={{ color: '#f59e0b' }}
                >
                  Affiliate disclosure, always
                </h3>
                <p style={{ color: '#d4d4d8' }}>
                  We earn affiliate commissions when you buy through our links.
                  That never changes what we recommend — we rank products by
                  what actually fits your use case, not by who pays us more.
                  Read our full{' '}
                  <Link
                    href='/affiliate-disclosure'
                    className='underline'
                    style={{ color: '#f59e0b' }}
                  >
                    affiliate disclosure
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SHGFooter />
    </SHGLayout>
  );
}
