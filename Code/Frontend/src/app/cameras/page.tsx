import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';

export const metadata: Metadata = {
  title: 'Home Security Camera Reviews — SecureHomeGear',
  description:
    "Independent reviews of home security cameras — doorbell cams, outdoor cams, indoor cams, POE systems, and no-subscription alternatives.",
  alternates: { canonical: 'https://securehomegear.com/cameras' },
  openGraph: {
    title: 'Home Security Camera Reviews — SecureHomeGear',
    description: 'Independent reviews of home security cameras.',
    type: 'website',
    url: 'https://securehomegear.com/cameras',
  },
};

const brandReviews = [
  { slug: 'canary', name: 'Canary', tag: 'Premium AI, Independent' },
  { slug: 'eufy', name: 'Eufy', tag: 'Best No-Subscription Brand' },
  { slug: 'reolink', name: 'Reolink', tag: 'POE + NVR Workhorse' },
  { slug: 'arlo-camera', name: 'Arlo', tag: 'Premium Ecosystem' },
  { slug: 'google-nest', name: 'Google Nest', tag: 'Google Ecosystem' },
  { slug: 'wyze', name: 'Wyze', tag: 'Budget With Real Features' },
  { slug: 'tp-link-tapo', name: 'TP-Link Tapo', tag: 'Networking-Giant Budget' },
  { slug: 'lorex', name: 'Lorex', tag: 'Commercial-Grade' },
  { slug: 'blink-camera-system', name: 'Blink', tag: 'Amazon Budget Tier' },
];

const doorbellPages = [
  { slug: 'doorbell-camera', title: 'Doorbell Camera Complete Guide' },
  { slug: 'video-doorbell-without-subscription', title: 'Video Doorbells Without Subscription' },
  { slug: 'eufy-doorbell', title: 'Eufy Video Doorbell' },
  { slug: 'nest-doorbell', title: 'Google Nest Doorbell' },
  { slug: 'arlo-doorbell', title: 'Arlo Video Doorbell' },
  { slug: 'blink-doorbell', title: 'Blink Video Doorbell' },
  { slug: 'wyze-doorbell', title: 'Wyze Video Doorbell' },
  { slug: 'doorbell-transformer', title: 'Doorbell Transformer Guide' },
];

const buyingGuides = [
  { slug: 'security-cameras', title: 'Security Cameras: Complete Guide' },
  { slug: 'best-outdoor-security-cameras-without-subscription', title: 'Best Outdoor Without Subscription' },
  { slug: 'best-no-subscription-security-camera-system', title: 'Best No-Subscription System' },
  { slug: 'no-subscription-security-camera', title: 'No-Subscription Cameras Overview' },
  { slug: 'wireless-outdoor-security-cameras', title: 'Wireless Outdoor Cameras' },
  { slug: 'wireless-outdoor-camera', title: 'Single Wireless Outdoor Camera Picks' },
  { slug: 'battery-powered-security-camera', title: 'Battery Powered Security Cameras' },
  { slug: 'cellular-security-camera', title: 'Cellular (4G/LTE) Security Cameras' },
  { slug: 'poe-camera', title: 'POE Cameras Explained' },
  { slug: 'best-wired-security-camera-system', title: 'Best Wired Security Systems' },
  { slug: 'business-security-cameras', title: 'Business Security Cameras' },
  { slug: 'commercial-security-cameras', title: 'Commercial Security Cameras' },
];

const subscriptionPages = [
  { slug: 'ring-protect-plan', title: 'Ring Protect Plan Explained' },
  { slug: 'arlo-subscription', title: 'Arlo Secure Breakdown' },
  { slug: 'nest-aware', title: 'Nest Aware Explained' },
  { slug: 'blink-subscription-plan', title: 'Blink Subscription Plan' },
];

const systemPages = [
  { slug: 'ring-security-system', title: 'Ring Security System' },
  { slug: 'canary-camera', title: 'Canary Camera Lineup' },
  { slug: 'eufy-homebase', title: 'Eufy HomeBase Guide' },
  { slug: 'eufy-s340', title: 'Eufy S340 Review' },
  { slug: 'blink-sync-module', title: 'Blink Sync Module Guide' },
  { slug: 'arlo-base-station', title: 'Arlo Base Station Guide' },
  { slug: 'arlo-indoor-camera', title: 'Arlo Indoor Camera Review' },
  { slug: 'arlo-floodlight-camera', title: 'Arlo Floodlight Camera Review' },
];

const comparisons = [
  { slug: 'eufy-vs-ring', title: 'Eufy vs Ring' },
  { slug: 'canary-vs-ring', title: 'Canary vs Ring' },
  { slug: 'eufy-vs-arlo', title: 'Eufy vs Arlo' },
  { slug: 'arlo-vs-ring', title: 'Arlo vs Ring' },
  { slug: 'ring-vs-blink', title: 'Ring vs Blink' },
  { slug: 'reolink-vs-eufy', title: 'Reolink vs Eufy' },
  { slug: 'wyze-vs-ring', title: 'Wyze vs Ring' },
];

const alternatives = [
  { slug: 'ring', title: 'Ring Alternatives' },
  { slug: 'blink', title: 'Blink Alternatives' },
  { slug: 'google-nest', title: 'Google Nest Alternatives' },
  { slug: 'arlo', title: 'Arlo Alternatives' },
  { slug: 'wyze', title: 'Wyze Alternatives' },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='mt-10'>
      <h2 className='text-2xl font-bold mb-4 tracking-tight' style={{ color: '#f5f5f5' }}>{title}</h2>
      {children}
    </section>
  );
}

export default function CamerasHub() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-4xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link>
              <span>/</span>
              <span style={{ color: '#f5f5f5' }}>Cameras</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Security Camera Reviews</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Home Security Camera Reviews</h1>
              <p className='text-xl leading-relaxed max-w-3xl' style={{ color: '#d4d4d8' }}>
                Independent, research-backed reviews of home security cameras across every category — doorbells, outdoor, indoor, wired POE systems, and the no-subscription alternatives that the big brands don&apos;t want you to see.
              </p>
            </header>

            <div className='mb-10 rounded-xl overflow-hidden border' style={{ borderColor: '#1e293b' }}>
              <img src='https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=1200&q=80&auto=format&fit=crop' alt='Home security camera system overview' className='w-full h-72 object-cover' loading='lazy' />
            </div>

            <Section title='Brand Reviews'>
              <div className='grid md:grid-cols-2 gap-3'>
                {brandReviews.map((b) => (
                  <Link key={b.slug} href={`/cameras/${b.slug}`} className='p-4 rounded-xl border transition-colors hover:border-amber-500' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                    <div className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#f59e0b' }}>{b.name}</div>
                    <div className='text-sm' style={{ color: '#d4d4d8' }}>{b.tag}</div>
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Buying Guides'>
              <div className='grid md:grid-cols-2 gap-2'>
                {buyingGuides.map((p) => (
                  <Link key={p.slug} href={`/cameras/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Doorbells'>
              <div className='grid md:grid-cols-2 gap-2'>
                {doorbellPages.map((p) => (
                  <Link key={p.slug} href={`/cameras/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Head-to-Head Comparisons'>
              <div className='grid md:grid-cols-2 gap-2'>
                {comparisons.map((p) => (
                  <Link key={p.slug} href={`/compare/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Subscription Plans Explained'>
              <div className='grid md:grid-cols-2 gap-2'>
                {subscriptionPages.map((p) => (
                  <Link key={p.slug} href={`/cameras/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Product & System Reviews'>
              <div className='grid md:grid-cols-2 gap-2'>
                {systemPages.map((p) => (
                  <Link key={p.slug} href={`/cameras/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='Alternatives Guides'>
              <div className='grid md:grid-cols-2 gap-2'>
                {alternatives.map((p) => (
                  <Link key={p.slug} href={`/alternatives/${p.slug}`} className='p-3 rounded-lg border transition-colors hover:border-amber-500 text-sm' style={{ backgroundColor: '#111827', borderColor: '#1e293b', color: '#d4d4d8' }}>
                    {p.title}
                  </Link>
                ))}
              </div>
            </Section>

            <Section title='How We Review Security Cameras'>
              <div className='p-6 rounded-xl border space-y-4' style={{ backgroundColor: '#111827', borderColor: '#1e293b' }}>
                <p style={{ color: '#d4d4d8' }}>
                  <strong style={{ color: '#f5f5f5' }}>Spec verification first.</strong> Every review starts with cross-referencing the manufacturer&apos;s current product datasheet, pricing page, and subscription terms. We publish what the spec sheet actually says — not marketing copy.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  <strong style={{ color: '#f5f5f5' }}>Subscription reality check.</strong> We tell you what&apos;s actually free vs. paywalled. Ring&apos;s most basic features — event history, notifications, person detection — require Ring Protect. Eufy&apos;s local storage does the same things for free. We spell it out.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  <strong style={{ color: '#f5f5f5' }}>Aggregated independent reviews.</strong> We cross-reference customer review data from BBB, Trustpilot, Reddit r/homesecurity, and retailer aggregate reviews. Recurring complaint themes get called out.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  <strong style={{ color: '#f5f5f5' }}>Affiliate transparency.</strong> We flag every affiliate link. Some brands pay higher commissions than others. That never changes what we recommend — it&apos;s disclosed in our <Link href='/affiliate-disclosure' className='underline' style={{ color: '#f59e0b' }}>affiliate disclosure</Link>.
                </p>
              </div>
            </Section>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
