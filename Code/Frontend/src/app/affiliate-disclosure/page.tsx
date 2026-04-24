import type { Metadata } from 'next';
import Link from 'next/link';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — SecureHomeGear',
  description:
    'How SecureHomeGear earns money, how affiliate relationships work, and why they do not influence our product recommendations.',
  alternates: { canonical: 'https://securehomegear.com/affiliate-disclosure' },
};

export default function AffiliateDisclosureSHG() {
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
              <span style={{ color: '#f5f5f5' }}>Affiliate Disclosure</span>
            </nav>

            <header className='mb-10'>
              <h1
                className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight'
                style={{ color: '#f5f5f5' }}
              >
                Affiliate Disclosure
              </h1>
              <p
                className='text-xl leading-relaxed'
                style={{ color: '#d4d4d8' }}
              >
                Full transparency on how SecureHomeGear earns money and why
                that never changes what we recommend.
              </p>
            </header>

            <div className='space-y-8 leading-relaxed' style={{ color: '#d4d4d8' }}>
              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  How We Make Money
                </h2>
                <p className='mb-4'>
                  SecureHomeGear is a participant in several affiliate programs.
                  When you click a product link on our site and make a purchase
                  within the retailer&apos;s cookie window, we may earn a
                  commission from the retailer at no additional cost to you.
                </p>
                <p>
                  We participate in programs including (but not limited to):
                  Amazon Associates, AWIN, CJ Affiliate, Impact.com,
                  FlexOffers, ShareASale, and several direct manufacturer
                  programs. Commission rates vary by retailer and product,
                  typically ranging from 1% (Amazon electronics) to 30% (some
                  direct brand programs like Canary).
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  FTC Compliance
                </h2>
                <p>
                  In accordance with FTC 16 CFR § 255 (Guides Concerning the Use
                  of Endorsements and Testimonials in Advertising), we disclose
                  that SecureHomeGear may receive affiliate commissions when
                  readers purchase products through links on our site. This
                  disclosure applies to every page on this website.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  How Commission Affects Our Recommendations
                </h2>
                <p className='mb-4'>
                  Short version: it doesn&apos;t. We rank products by what
                  actually fits the buyer&apos;s use case — not by commission
                  rate.
                </p>
                <p className='mb-4'>
                  Amazon-only brands (Ring, Blink, Google Nest) pay us 1-3% on
                  sales. Direct programs from Canary and Eufy can pay us 10-30%.
                  If recommendations were driven by commission, we&apos;d only
                  ever recommend Canary. We don&apos;t — we recommend Ring when
                  Ring genuinely fits the use case, and we recommend Canary
                  when Canary genuinely fits.
                </p>
                <p>
                  The incentive alignment works like this: honest reviews build
                  trust, trust builds audience, audience compounds over years.
                  Short-term &quot;recommend whatever pays most&quot; would
                  torch that. The math doesn&apos;t work.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  How to Identify Affiliate Links
                </h2>
                <p className='mb-4'>
                  Every &quot;buy&quot; or &quot;check price&quot; link on our
                  product review pages is an affiliate link. Internal links to
                  other pages on SecureHomeGear are not affiliate links.
                  Manufacturer logo or informational links within article body
                  text are labeled clearly.
                </p>
                <p>
                  We don&apos;t use hidden affiliate redirects, cookie stuffing,
                  or any deceptive tracking. Clicks hit the retailer&apos;s
                  standard affiliate tracking system — same as clicking from
                  any other publisher.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Product Samples and Review Units
                </h2>
                <p>
                  We welcome product samples for review consideration. Receipt
                  of a sample does not guarantee coverage, positive or
                  otherwise. We do not accept payment for reviews, guaranteed
                  placement in rankings, or sponsored content disguised as
                  editorial. If that&apos;s the pitch, please don&apos;t send
                  it. Contact us at{' '}
                  <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>
                    our contact page
                  </Link>{' '}
                  with legitimate review inquiries.
                </p>
              </section>

              <section>
                <h2
                  className='text-2xl font-bold mb-4'
                  style={{ color: '#f5f5f5' }}
                >
                  Questions
                </h2>
                <p>
                  If anything about this disclosure is unclear, or if you
                  spotted a link that wasn&apos;t properly disclosed, please{' '}
                  <Link href='/contact' className='underline' style={{ color: '#f59e0b' }}>
                    contact us
                  </Link>{' '}
                  and we&apos;ll fix it promptly.
                </p>
              </section>

              <p className='text-sm' style={{ color: '#71717a' }}>
                Last updated: April 2026
              </p>
            </div>
          </article>
        </div>
      </main>
      <SHGFooter />
    </SHGLayout>
  );
}
