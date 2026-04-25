import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';

export const metadata: Metadata = {
  title: 'Google Nest Cameras Review 2026: Honest Take',
  description: "Google Nest is premium security with tight Google Home integration — but heavy Nest Aware subscription dependence. Honest 2026 review and the subscription-free alternatives.",
  alternates: { canonical: 'https://securehomegear.com/cameras/google-nest' },
  openGraph: { title: 'Google Nest Cameras Review 2026', description: 'Honest 2026 review of Google Nest security cameras.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Google Nest Cameras Review 2026: Honest Take',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/google-nest' },
};

export default function GoogleNestHub() {
  return (
    <SHGLayout>
      <SHGHeader />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: '#71717a' }}>
              <Link href='/' style={{ color: '#d4d4d8' }}>Home</Link><ChevronRight className='h-3 w-3' />
              <Link href='/cameras' style={{ color: '#d4d4d8' }}>Cameras</Link><ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>Google Nest</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Brand Hub</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Google Nest Cameras Review 2026: Honest Take</h1>
            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: '#1f2940', accent: '#f59e0b' }} />
</header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Google Nest occupies the premium tier of consumer home security — excellent hardware, polished app experience, and native integration with Google Home / Google Assistant that nothing else matches. The trade-offs are real: Nest Aware subscription is effectively required for core features, and you&apos;re entrusting residential surveillance footage to Alphabet&apos;s data ecosystem. Here&apos;s the honest 2026 review and the alternatives to consider before buying.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Who Google Nest Is</h2>
              <p>
                Google Nest is the residential security and smart-home division of Alphabet / Google. Originally founded as an independent company (Nest Labs, 2010), it was acquired by Google in 2014 and has been progressively integrated into the broader Google product ecosystem. The Nest security lineup spans indoor and outdoor cameras, video doorbells (wired and battery), Nest Cam with Floodlight, plus smart thermostats, smoke detectors, and related smart-home devices under the same brand.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Strengths</h2>
              <div className='space-y-3'>
                <div className='flex items-start gap-2'><CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} /><p><strong style={{ color: '#f5f5f5' }}>Premium build quality.</strong> Nest hardware consistently feels and performs like a premium product. Cameras are well-designed, durable, and attractive enough to put on visible parts of your home.</p></div>
                <div className='flex items-start gap-2'><CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} /><p><strong style={{ color: '#f5f5f5' }}>Deep Google Home integration.</strong> If you&apos;re already using Google Home speakers, Chromecast, Nest thermostats, or other Google smart-home devices, Nest cameras slot in natively. Voice control, routines, scene triggers — all work smoothly.</p></div>
                <div className='flex items-start gap-2'><CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} /><p><strong style={{ color: '#f5f5f5' }}>Strong AI detection (with subscription).</strong> Nest Aware unlocks person detection, familiar face recognition, and other smart features that feel genuinely useful — when you&apos;re willing to pay.</p></div>
                <div className='flex items-start gap-2'><CheckCircle2 className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#22c55e' }} /><p><strong style={{ color: '#f5f5f5' }}>Company stability.</strong> Google isn&apos;t going bankrupt. Your hardware will be supported for years.</p></div>
              </div>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Watch-outs</h2>
              <div className='space-y-3'>
                <div className='flex items-start gap-2'><AlertTriangle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#f59e0b' }} /><p><strong style={{ color: '#f5f5f5' }}>Nest Aware subscription is required for core features.</strong> Event recording, extended video history, smart detection categories (person/package/vehicle) all require Nest Aware. Plans typically run $6-$15/month depending on tier. Over 10 years that&apos;s $720-$1,800.</p></div>
                <div className='flex items-start gap-2'><AlertTriangle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#f59e0b' }} /><p><strong style={{ color: '#f5f5f5' }}>Privacy: Google is in the data business.</strong> Residential security footage stored on Google&apos;s cloud is subject to the same data-handling and legal-request environment as your Gmail, Google Search history, and YouTube watch data. For privacy-conscious buyers, that&apos;s a real concern.</p></div>
                <div className='flex items-start gap-2'><AlertTriangle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#f59e0b' }} /><p><strong style={{ color: '#f5f5f5' }}>Ecosystem lock-in.</strong> Nest works best with Google Home. If you&apos;re using Amazon Alexa or Apple HomeKit, integration is weaker — you&apos;d be fighting the ecosystem tax.</p></div>
                <div className='flex items-start gap-2'><AlertTriangle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#f59e0b' }} /><p><strong style={{ color: '#f5f5f5' }}>Premium pricing.</strong> Nest cameras are not cheap. You can get similar or better hardware from Eufy at lower cost, minus the Google ecosystem polish.</p></div>
              </div>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When Nest Makes Sense</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>You&apos;re already deep in the Google Home ecosystem</li>
                <li>Premium build quality and app polish matter most</li>
                <li>You&apos;re comfortable with Google owning your camera data</li>
                <li>You&apos;re comfortable paying Nest Aware ongoing</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>When to Skip Nest</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Subscription cost is a dealbreaker — see <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Eufy</Link></li>
                <li>You want independent premium AI without Google — see <Link href='/cameras/canary' className='underline' style={{ color: '#f59e0b' }}>Canary</Link></li>
                <li>You&apos;re in the Amazon/Alexa or Apple HomeKit ecosystems</li>
                <li>Privacy / data residency matters for your household</li>
              </ul>

              <p className='mt-6'>
                Full alternatives comparison: see our <Link href='/alternatives/google-nest' className='underline' style={{ color: '#f59e0b' }}>Google Nest alternatives guide</Link>.
              </p>
            </div>

            <div className='mt-10'><Link href='/cameras' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#f59e0b' }}><ArrowLeft className='h-4 w-4' />Back to Camera Reviews</Link></div>
          </article>
        </div>
      </main>
      <SHGFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="shg" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', cardBg: '#0f1729', cardBorder: '#1f2940' }} />
      </div>

    </SHGLayout>
  );
}
