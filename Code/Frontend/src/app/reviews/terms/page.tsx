import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | GreenReviewsHub',
  description:
    'GreenReviewsHub terms of service — the rules for using this site, liability limits, and dispute resolution.',
  alternates: {
    canonical: '/reviews/terms',
  },
};

export default function TermsOfServicePage() {
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
              <span className='text-foreground font-medium'>Terms of Service</span>
            </nav>

            <h1 className='text-4xl font-extrabold text-foreground mb-6 tracking-tight'>
              Terms of Service
            </h1>

            <p className='text-sm text-muted-foreground mb-8'>Last updated: April 22, 2026</p>

            <div className='text-foreground/80 leading-relaxed space-y-6'>
              <p>
                Welcome to GreenReviewsHub. By accessing or using the greenreviewshub.com website
                (the &quot;Site&quot;), you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you do not agree, do not use the Site.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>1. Acceptance of Terms</h2>
              <p>
                Your use of the Site constitutes acceptance of these Terms and our{' '}
                <Link href='/reviews/privacy' className='text-primary hover:underline'>
                  Privacy Policy
                </Link>
                . We reserve the right to update these Terms at any time. Continued use after
                changes constitutes acceptance of the revised Terms.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>2. Use of the Site</h2>
              <p>
                The Site provides product reviews, comparisons, and buying guides for informational
                purposes. You may:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Read, share, and link to content on the Site for personal, non-commercial use</li>
                <li>Reference small excerpts with proper attribution</li>
                <li>Follow affiliate links to make purchases from third-party retailers</li>
              </ul>
              <p>You may not:</p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Scrape, copy, or republish substantial portions of our content without written permission</li>
                <li>Use the Site for illegal purposes or to violate any applicable laws</li>
                <li>Attempt to interfere with the Site&apos;s security or operation</li>
                <li>Misrepresent our reviews or recommendations</li>
                <li>Use automated systems to access the Site beyond what reasonable robots.txt allows</li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-8'>3. Content Disclaimers</h2>
              <p>
                <strong className='text-foreground'>Reviews are opinions.</strong> Product reviews
                on GreenReviewsHub reflect the opinions of our editorial team based on publicly
                available information, manufacturer specifications, and where applicable
                first-hand testing. They are not financial, medical, legal, or engineering advice.
              </p>
              <p>
                <strong className='text-foreground'>Specs and pricing change.</strong> Product
                specifications, prices, warranty terms, and availability shown on the Site may
                change without notice. Always verify current information on the manufacturer or
                retailer page before purchasing.
              </p>
              <p>
                <strong className='text-foreground'>No warranty.</strong> The Site and its content
                are provided &quot;as is&quot; without warranties of any kind, either express or
                implied, including but not limited to warranties of merchantability, fitness for
                a particular purpose, or non-infringement.
              </p>
              <p>
                <strong className='text-foreground'>Third-party products.</strong> We do not
                manufacture, sell, warranty, or service any products reviewed on this Site. Your
                purchase relationship is with the retailer or manufacturer, not with us.
                Warranty claims, returns, defects, and post-sale support are handled by them.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>
                4. Affiliate Relationships
              </h2>
              <p>
                The Site participates in various affiliate marketing programs. When you click an
                affiliate link and make a purchase, we may receive a commission at no additional
                cost to you. See our{' '}
                <Link
                  href='/reviews/affiliate-disclosure'
                  className='text-primary hover:underline'
                >
                  Affiliate Disclosure
                </Link>{' '}
                for details.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>
                5. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, GreenReviewsHub, its owners, employees,
                and contributors are not liable for any direct, indirect, incidental,
                consequential, special, or punitive damages arising from your use of the Site or
                reliance on information provided here, including:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Losses from a purchase decision based on content on the Site</li>
                <li>Errors or omissions in product specifications, pricing, or ratings</li>
                <li>Product defects, malfunctions, or incompatibilities</li>
                <li>Interruptions, bugs, or security incidents affecting the Site</li>
              </ul>
              <p>
                Our total liability for any claim arising from your use of the Site is limited to
                the greater of (a) $50 USD or (b) the amount you paid us directly in the 12 months
                preceding the claim (which, for readers of a free content site, is typically
                $0).
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>6. Intellectual Property</h2>
              <p>
                All original content on the Site — including text, graphics, logos, and layout —
                is owned by GreenReviewsHub and protected by United States and international
                copyright law. Product names, logos, and brand references are the property of
                their respective owners and used for identification purposes only.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>7. Third-Party Links</h2>
              <p>
                The Site contains links to third-party websites (manufacturers, retailers,
                affiliate partners). We are not responsible for the content, terms, or practices
                of those sites. Your use of third-party sites is at your own risk and governed by
                their terms.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>
                8. Governing Law and Disputes
              </h2>
              <p>
                These Terms are governed by the laws of the State of California, United States,
                without regard to conflict-of-laws principles. Any dispute arising from these
                Terms or your use of the Site shall be resolved in the state or federal courts
                located in California.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>9. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining
                provisions continue in full force and effect.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>10. Contact</h2>
              <p>
                Questions about these Terms? Email{' '}
                <a
                  href='mailto:hello@greenreviewshub.com'
                  className='text-primary hover:underline'
                >
                  hello@greenreviewshub.com
                </a>
                .
              </p>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
    </ReviewLayout>
  );
}
