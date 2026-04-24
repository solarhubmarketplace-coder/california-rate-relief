import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SecureHomeGear — How We Review Home Security Products',
  description:
    "Independent reviews of home security cameras, video doorbells, and smart locks. Here is who we are, how we test, and how we stay honest about the products we recommend.",
  alternates: { canonical: 'https://securehomegear.com/about' },
};

export default function AboutSHG() {
  return (
    <SHGLayout>
      <SHGHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0f1c' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav
              className='mb-8 text-sm flex items-center gap-2 flex-wrap'
              style={{ color: '#71717a' }}
            >
              <Link href='/' style={{ color: '#d4d4d8' }}>
                Home
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span style={{ color: '#f5f5f5' }}>About</span>
            </nav>

            <header className='mb-12'>
              <h1
                className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                About SecureHomeGear
              </h1>
              <p
                className='text-xl leading-relaxed'
                style={{ color: '#d4d4d8' }}
              >
                Independent, research-backed reviews of home security cameras,
                video doorbells, and smart locks — with zero tolerance for
                marketing spin.
              </p>
            </header>

            <div className='space-y-10 leading-relaxed'>
              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Who We Are
                </h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>
                  SecureHomeGear is an independent publication covering
                  residential home security products — security cameras, video
                  doorbells, smart locks, alarm systems, and related smart-home
                  tech. We&apos;re a small US-based team that got into this
                  space because we were tired of home security reviews that
                  read like press releases.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  The home security industry is crowded, confusing, and
                  deliberately opaque. Brands push subscription plans as if
                  they&apos;re required. Product pages hide real pricing behind
                  &quot;starting at&quot; claims. Feature comparisons conflate
                  hardware capability with what&apos;s actually unlocked on the
                  free tier. We&apos;re trying to fix that — one honest review
                  at a time.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  How We Test and Review
                </h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>
                  Every review goes through the same process:
                </p>
                <ol className='space-y-3 pl-6 list-decimal' style={{ color: '#d4d4d8' }}>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>Spec verification.</strong>{' '}
                    We pull product details from the manufacturer&apos;s current
                    website and cross-check against recent authoritative
                    sources. Claims we can&apos;t verify get flagged or omitted.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>
                      Subscription reality check.
                    </strong>{' '}
                    We map out exactly what&apos;s free, what&apos;s paywalled,
                    and what the monthly cost is. No hiding the subscription
                    requirement in small print.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>
                      Independent review aggregation.
                    </strong>{' '}
                    We cross-reference customer review data from BBB,
                    Trustpilot, retailer aggregate reviews, Reddit r/homesecurity,
                    and specialized home-security review sites. Recurring
                    complaint themes get called out.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>
                      Corporate and financial check.
                    </strong>{' '}
                    A 25-year warranty is only as good as the company behind it.
                    We note whether the brand is public or private, parent
                    company ownership, and any recent restructuring or major
                    lawsuits.
                  </li>
                  <li>
                    <strong style={{ color: '#f5f5f5' }}>
                      Honest use-case fit.
                    </strong>{' '}
                    Every product review ends with a clear statement on who
                    the product actually fits and who should look elsewhere.
                  </li>
                </ol>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Our Editorial Policy
                </h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>
                  Brands don&apos;t get to preview, influence, or veto our
                  reviews. We don&apos;t accept payment for positive coverage.
                  Affiliate commission rates are disclosed and never drive our
                  recommendations — we rank products by what actually fits the
                  use case, not by who pays us more.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  If we make a factual error, we correct it and log the
                  correction on the page. Email corrections at any time.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Our Stance on Subscriptions
                </h2>
                <p className='mb-4' style={{ color: '#d4d4d8' }}>
                  Home security subscriptions have gotten out of hand. What
                  used to be one-time purchases with lifetime usage now comes
                  with $5-$20/month fees just to access the footage your own
                  camera captured on your own home.
                </p>
                <p style={{ color: '#d4d4d8' }}>
                  We aren&apos;t anti-subscription — professional 24/7 monitoring
                  is genuinely valuable, and cloud storage costs money.
                  We&apos;re anti-paywall-on-basic-features. If event history,
                  notifications, and person detection are locked behind a
                  monthly fee on a camera you paid $250 for, that&apos;s a
                  problem worth talking about. We&apos;ll always call out
                  brands that paywall basics and highlight alternatives that
                  don&apos;t.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Contact
                </h2>
                <p style={{ color: '#d4d4d8' }}>
                  Questions, corrections, partnership inquiries — see our{' '}
                  <Link
                    href='/contact'
                    className='underline'
                    style={{ color: '#f59e0b' }}
                  >
                    contact page
                  </Link>
                  . Affiliate disclosure details are on our{' '}
                  <Link
                    href='/affiliate-disclosure'
                    className='underline'
                    style={{ color: '#f59e0b' }}
                  >
                    affiliate disclosure page
                  </Link>
                  .
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
