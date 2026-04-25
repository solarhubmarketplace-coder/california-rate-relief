import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight, Shield, CheckCircle, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About GreenReviewsHub | Editorial Standards & Testing Methodology',
  description:
    'How GreenReviewsHub researches, tests, and reviews green-energy products. Our editorial standards, affiliate disclosure, and commitment to honest, independent reviews.',
  alternates: {
    canonical: '/reviews/about',
  },
};

export default function AboutPage() {
  return (
    <ReviewLayout>
      <ReviewHeader />
      <main className='py-16' style={{ backgroundColor: '#0a0a0a' }}>
        <div className='container mx-auto px-4'>
          <article className='max-w-3xl mx-auto'>
            <nav className='mb-8 flex items-center gap-2 text-sm text-muted-foreground'>
              <Link href='/reviews' className='hover:text-primary transition-colors'>
                Reviews
              </Link>
              <ChevronRight className='h-3 w-3' />
              <span className='text-foreground font-medium'>About</span>
            </nav>

            <header className='mb-10'>
              <h1 className='text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight'>
                About GreenReviewsHub
              </h1>
              <p className='text-xl text-foreground/80 leading-relaxed'>
                Independent, hands-on reviews of green-energy products; so you can make informed
                buying decisions without wading through manufacturer marketing.
              </p>
            </header>

            {/* Mission */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Target className='h-6 w-6 text-primary' />
                Our Mission
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                GreenReviewsHub exists because buying green-energy products, portable power
                stations, e-bikes, mini splits, tankless water heaters, electric lawn equipment, is hard. Specs are inconsistent across brands. Marketing claims are rarely
                verified. And most review sites publish thin listicles written by people who
                have never actually used the products.
              </p>
              <p className='text-foreground/80 leading-relaxed'>
                We do the work differently. Every review on this site is built around real-world
                testing, manufacturer-verified specs, and honest commentary about who should
                actually buy each product. We care more about getting the recommendation right
                than driving clicks.
              </p>
            </section>

            {/* How We Test */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Zap className='h-6 w-6 text-primary' />
                How We Test
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Every product reviewed on GreenReviewsHub goes through a four-stage evaluation:
              </p>
              <ul className='space-y-3 text-foreground/80 mb-4'>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Stage 1, Specification verification.</strong>{' '}
                    We pull specs directly from the manufacturer&apos;s current product page,
                    cross-check against retailer listings, and verify claims like wattage, capacity,
                    and warranty terms through third-party sources. All numbers on our reviews are
                    traced back to primary sources — no guessing, no stale data.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Stage 2 — Real-world use.</strong>{' '}
                    Wherever possible, our reviewers spend time with the product under normal home
                    use conditions. actually running a refrigerator off a power station, riding an
                    e-bike for 50+ miles, installing a DIY mini split. Where we rely on aggregated
                    owner reviews instead of first-hand testing, we label it clearly.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Stage 3, Competitive comparison.</strong>{' '}
                    No product exists in isolation. Every review places the product against 2-5
                    direct competitors at the same price tier and use case, so you can understand
                    trade-offs rather than being sold a single option.
                  </span>
                </li>
                <li className='flex items-start gap-3'>
                  <CheckCircle className='h-5 w-5 text-primary mt-0.5 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Stage 4. Honest recommendation.</strong>{' '}
                    We call out when a product is the wrong fit. We tell you who should NOT buy
                    it. If we can&apos;t recommend something for a given use case, we say so. The
                    goal is the right product for the right buyer — not the sale we get
                    commission on.
                  </span>
                </li>
              </ul>
            </section>

            {/* Editorial Independence */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4 flex items-center gap-2'>
                <Shield className='h-6 w-6 text-primary' />
                Editorial Independence
              </h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                GreenReviewsHub is reader-supported. When you buy a product through a link on
                this site, we may earn an affiliate commission; at no extra cost to you.
                That revenue pays for our testing and writing.
              </p>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                We want to be direct about how this works and doesn&apos;t work:
              </p>
              <ul className='space-y-2 text-foreground/80 mb-4'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-400 mt-1 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Manufacturers do not pay us for
                    coverage.</strong> No pay-to-play, no sponsored rankings, no &quot;guaranteed
                    positive review&quot; deals.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-400 mt-1 shrink-0' />
                  <span>
                    <strong className='text-foreground'>We occasionally receive free or
                    discounted review samples.</strong> When this happens, we disclose it on the
                    specific review. Receiving a sample never changes our rating — if the product
                    is mediocre, we say so.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-400 mt-1 shrink-0' />
                  <span>
                    <strong className='text-foreground'>Our rankings are based on
                    value-for-money for the typical buyer</strong> — not commission rates. A
                    product that pays us 10% commission does not outrank a product that pays 3% if
                    the 3% product is the better buy.
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='h-4 w-4 text-green-400 mt-1 shrink-0' />
                  <span>
                    <strong className='text-foreground'>We update reviews when products
                    change.</strong> When a manufacturer releases a new model, changes pricing
                    materially, or a product gets recalled, we update the relevant review.
                  </span>
                </li>
              </ul>
              <p className='text-foreground/80 leading-relaxed'>
                See our{' '}
                <Link href='/reviews/affiliate-disclosure' className='text-primary hover:underline'>
                  full affiliate disclosure
                </Link>{' '}
                for the legally-required details.
              </p>
            </section>

            {/* Categories */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>What We Cover</h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Our reviews span six core green-energy product categories:
              </p>
              <div className='grid md:grid-cols-2 gap-3 text-sm'>
                <Link
                  href='/reviews/best-portable-power-stations'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Portable Power Stations</p>
                  <p className='text-muted-foreground'>
                    EcoFlow, Jackery, Bluetti, Anker SOLIX, Goal Zero
                  </p>
                </Link>
                <Link
                  href='/reviews/best-electric-bikes'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Electric Bikes &amp; Scooters</p>
                  <p className='text-muted-foreground'>
                    Rad Power, Aventon, Lectric, Trek, Velotric
                  </p>
                </Link>
                <Link
                  href='/reviews/best-electric-lawn-mower'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Electric Lawn Equipment</p>
                  <p className='text-muted-foreground'>EGO, Greenworks, Ryobi, DeWalt, Milwaukee</p>
                </Link>
                <Link
                  href='/reviews/best-mini-split-ac'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Smart Home &amp; HVAC</p>
                  <p className='text-muted-foreground'>
                    MrCool, Mitsubishi, Daikin, Nest, Ecobee
                  </p>
                </Link>
                <Link
                  href='/reviews/best-solar-generator'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Solar Products</p>
                  <p className='text-muted-foreground'>Renogy, BougeRV, solar generators, kits</p>
                </Link>
                <Link
                  href='/reviews/best-whole-house-generator'
                  className='p-4 border border-border rounded-xl hover:border-primary transition-colors'
                >
                  <p className='font-semibold text-foreground mb-1'>Generators &amp; EV</p>
                  <p className='text-muted-foreground'>Generac, Kohler, EV chargers</p>
                </Link>
              </div>
            </section>

            {/* Contact */}
            <section className='mb-12'>
              <h2 className='text-2xl font-bold text-foreground mb-4'>Get in Touch</h2>
              <p className='text-foreground/80 leading-relaxed mb-4'>
                Questions, feedback, or corrections? We read every message.
              </p>
              <div className='p-6 border border-border rounded-xl'>
                <p className='text-foreground/80 mb-3'>
                  <strong className='text-foreground'>General inquiries:</strong>{' '}
                  <a
                    href='mailto:hello@greenreviewshub.com'
                    className='text-primary hover:underline'
                  >
                    hello@greenreviewshub.com
                  </a>
                </p>
                <p className='text-foreground/80 mb-3'>
                  <strong className='text-foreground'>Corrections:</strong>{' '}
                  <a
                    href='mailto:corrections@greenreviewshub.com'
                    className='text-primary hover:underline'
                  >
                    corrections@greenreviewshub.com
                  </a>{' '}
                  — spot a factual error? Tell us and we&apos;ll fix it.
                </p>
                <p className='text-foreground/80'>
                  <strong className='text-foreground'>Partnerships &amp; press:</strong>{' '}
                  <a
                    href='mailto:partnerships@greenreviewshub.com'
                    className='text-primary hover:underline'
                  >
                    partnerships@greenreviewshub.com
                  </a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
