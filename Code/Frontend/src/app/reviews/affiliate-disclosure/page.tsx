import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | GreenReviewsHub',
  description:
    'GreenReviewsHub affiliate disclosure, how we earn, what it means for our reviews, and our commitment to editorial independence.',
  alternates: {
    canonical: '/reviews/affiliate-disclosure',
  },
};

export default function AffiliateDisclosurePage() {
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
              <span className='text-foreground font-medium'>Affiliate Disclosure</span>
            </nav>

            <h1 className='text-4xl font-extrabold text-foreground mb-6 tracking-tight'>
              Affiliate Disclosure
            </h1>

            <p className='text-sm text-muted-foreground mb-8'>
              Last updated: April 22, 2026
            </p>

            <div className='prose prose-invert max-w-none text-foreground/80 leading-relaxed space-y-6'>
              <p>
                In accordance with Federal Trade Commission (FTC) guidelines concerning
                endorsements and testimonials in advertising, and the FTC&apos;s 16 CFR Part 255,
                this notice discloses that GreenReviewsHub (&quot;we,&quot; &quot;our,&quot; or
                &quot;this site&quot;) has a financial or material connection to products
                referenced on this site.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>How We Earn</h2>
              <p>
                GreenReviewsHub is a participant in various affiliate marketing programs, which
                means we may receive commissions on qualifying purchases made through links on
                this website. When you click on an affiliate link and subsequently purchase a
                product, we may receive a percentage of the sale — at no additional cost to you.
              </p>
              <p>
                Programs we currently participate in or have applied to include, but are not
                limited to:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Amazon Services LLC Associates Program (when active)</li>
                <li>ShareASale (Bluetti, EcoFlow, Jackery, MrCool, Renogy, Greenworks, and others)</li>
                <li>Impact.com (Rad Power Bikes, Aventon, Lectric, ChargePoint, Wallbox, and others)</li>
                <li>CJ Affiliate (Goal Zero, EGO Power+, Honeywell, Pioneer, Generac, and others)</li>
                <li>AvantLink (e-bike brands including Rad Power and Aventon)</li>
                <li>AWIN (EGO Power+, Bluetti, and others)</li>
                <li>FlexOffers (aggregated brand programs)</li>
                <li>Direct brand affiliate programs (MrCool Contractor Club, Heybike, and others)</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-8'>What This Doesn&apos;t Mean</h2>
              <p>
                Our affiliate relationships do not affect the editorial integrity of our reviews.
                Specifically:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  Manufacturers do not pay us to publish a positive review, include a product in
                  a ranking, or feature them on our site.
                </li>
                <li>
                  Rankings and recommendations are based on our assessment of product quality,
                  value, and fit for the target buyer — not commission rates.
                </li>
                <li>
                  We may recommend products where we have no affiliate relationship at all, when
                  those products are the right fit.
                </li>
                <li>
                  We will clearly label reviews where we received a product sample for testing.
                  Receiving a sample does not change our rating.
                </li>
                <li>
                  When a product we previously recommended changes (gets recalled, has its
                  warranty reduced, or is materially altered), we update the review to reflect
                  current facts.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Amazon-Specific Disclosure</h2>
              <p>
                When the Amazon Associates program is active on GreenReviewsHub, as an Amazon
                Associate we earn from qualifying purchases. Amazon, the Amazon logo, AmazonSupply,
                and the AmazonSupply logo are trademarks of Amazon.com, Inc. or its affiliates.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Prices and Availability</h2>
              <p>
                Prices, availability, and product details shown on GreenReviewsHub are subject to
                change without notice. We make reasonable efforts to keep data current, but
                prices shown on this site may not match prices at checkout on the retailer&apos;s
                site. Always confirm the final price, warranty, and terms on the retailer&apos;s
                page before completing your purchase.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Your Rights</h2>
              <p>
                You are never required to use our affiliate links. If you prefer not to, you can
                navigate directly to the manufacturer or retailer website and make your purchase
                without us receiving compensation. Your experience with the product is not
                affected by whether you use our links.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Questions?</h2>
              <p>
                If you have questions about this disclosure or our editorial practices, email us
                at{' '}
                <a
                  href='mailto:hello@greenreviewshub.com'
                  className='text-primary hover:underline'
                >
                  hello@greenreviewshub.com
                </a>
                . Read more about{' '}
                <Link href='/reviews/about' className='text-primary hover:underline'>
                  how we test
                </Link>{' '}
                and our editorial standards.
              </p>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
