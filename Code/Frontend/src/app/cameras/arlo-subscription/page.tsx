import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Arlo Subscription Explained: Arlo Secure, Tiers, and Alternatives',
  description: "Arlo Secure is the required subscription for most Arlo features. Here is what it costs, what it unlocks, and the subscription-free alternatives worth considering.",
  alternates: { canonical: 'https://securehomegear.com/cameras/arlo-subscription' },
  openGraph: { title: 'Arlo Subscription Explained: Arlo Secure, Tiers, and Alternatives', description: 'What Arlo Secure costs and what it actually unlocks.', type: 'article', publishedTime: '2026-04-23T00:00:00Z' },
};

const articleSchema = {
  '@context': 'https://schema.org', '@type': 'Article',
  headline: 'Arlo Subscription Explained: Arlo Secure, Tiers, and Alternatives',
  datePublished: '2026-04-23', dateModified: '2026-04-23',
  author: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  publisher: { '@type': 'Organization', name: 'SecureHomeGear', url: 'https://securehomegear.com' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://securehomegear.com/cameras/arlo-subscription' },
};

export default function ArloSubscription() {
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
              <span style={{ color: '#f5f5f5' }}>Arlo Subscription</span>
            </nav>

            <header className='mb-10'>
              <span className='inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4' style={{ backgroundColor: '#f59e0b22', color: '#f59e0b' }}>Subscription Analysis</span>
              <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight' style={{ color: '#f5f5f5' }}>Arlo Subscription Explained: Arlo Secure, Tiers, and Alternatives</h1>
            </header>

            <div className='space-y-6 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <p className='text-lg'>
                Arlo Secure is Arlo&apos;s subscription service. It&apos;s effectively required to unlock the features most buyers expect from a premium security camera — event history, smart detection categories (person, package, vehicle, animal), cloud recording, and integration with the Arlo Secure app&apos;s advanced functionality. Here&apos;s the plain breakdown of what it costs, what you get, and when it makes sense vs switching to a subscription-free alternative.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Arlo Secure Costs</h2>
              <p>
                Arlo Secure pricing varies by plan tier and occasionally changes with Arlo&apos;s product updates. As of 2026, the core plans include a per-camera Basic tier and a Plus / household tier covering unlimited Arlo devices. Pricing typically runs in the $3-$15/month range depending on tier, with annual plans offering modest discounts vs monthly. Check Arlo.com for current exact pricing before committing.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Arlo Secure Unlocks</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Cloud video recording.</strong> 30-day rolling event history (plan-dependent)</li>
                <li><strong style={{ color: '#f5f5f5' }}>Smart detection.</strong> Person, package, vehicle, and animal categorization for alerts</li>
                <li><strong style={{ color: '#f5f5f5' }}>Activity zones.</strong> Define where motion triggers recording vs not</li>
                <li><strong style={{ color: '#f5f5f5' }}>Video download and sharing.</strong> Save clips to your device or share via link</li>
                <li><strong style={{ color: '#f5f5f5' }}>Emergency response / monitoring options</strong> in higher tiers</li>
                <li><strong style={{ color: '#f5f5f5' }}>Product-specific features.</strong> Some Arlo hardware features are gated behind Secure (e.g., 4K cloud recording on Ultra cameras)</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>What Arlo Cameras Do Without Arlo Secure</h2>
              <ul className='space-y-2 list-disc pl-6'>
                <li>Live view from the Arlo app</li>
                <li>Motion-triggered alerts (without smart categorization)</li>
                <li>Two-way audio</li>
                <li>Some local-storage features on cameras that support microSD or local recording</li>
              </ul>
              <p className='mt-3'>
                For most Arlo owners, this minimal feature set isn&apos;t enough. The subscription ends up being a purchase-time afterthought that becomes a recurring expense for the life of the system.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Is Arlo Worth It With The Subscription?</h2>
              <p className='mb-3'>
                Genuinely, yes — for buyers who value the app polish, the premium build, and the integration with HomeKit / Alexa / Google Home across platforms, and who don&apos;t mind the ongoing cost. Arlo&apos;s subscription-inclusive package is a legitimately premium experience.
              </p>
              <p>
                The caveat is the subscription. Over 10 years at ~$100-$180/year, you&apos;ll pay roughly the price of another full camera system in recurring fees. For some buyers that&apos;s fine; for many it&apos;s a reason to look elsewhere.
              </p>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Subscription-Free Alternatives</h2>
              <p className='mb-3'>
                If you want Arlo-level polish without the subscription commitment:
              </p>
              <ul className='space-y-2 list-disc pl-6'>
                <li><strong style={{ color: '#f5f5f5' }}>Eufy</strong> — local storage on HomeBase, AI detection included, multiple doorbell and camera options. <Link href='/cameras/eufy' className='underline' style={{ color: '#f59e0b' }}>Full Eufy review</Link>.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Canary</strong> — premium AI brand, on-device detection. <Link href='/cameras/canary' className='underline' style={{ color: '#f59e0b' }}>Full Canary review</Link>.</li>
                <li><strong style={{ color: '#f5f5f5' }}>Reolink</strong> — best for multi-camera and POE setups. <Link href='/cameras/reolink' className='underline' style={{ color: '#f59e0b' }}>Full Reolink review</Link>.</li>
              </ul>

              <h2 className='text-2xl font-bold mt-10 mb-4' style={{ color: '#f5f5f5' }}>Arlo Secure vs Ring Protect vs Nest Aware</h2>
              <p>
                All three premium brands have similar subscription models. Arlo Secure and Nest Aware tend to be priced slightly above Ring Protect. Feature sets are broadly comparable. None of them are cheaper than going subscription-free with Eufy or Reolink. Full brand comparisons: <Link href='/cameras/arlo-camera' className='underline' style={{ color: '#f59e0b' }}>Arlo review</Link>, <Link href='/cameras/google-nest' className='underline' style={{ color: '#f59e0b' }}>Nest review</Link>, <Link href='/cameras/ring-protect-plan' className='underline' style={{ color: '#f59e0b' }}>Ring Protect breakdown</Link>.
              </p>
            </div>

            <div className='mt-10'><Link href='/cameras' className='inline-flex items-center gap-2 text-sm font-medium' style={{ color: '#f59e0b' }}><ArrowLeft className='h-4 w-4' />Back to Camera Reviews</Link></div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
