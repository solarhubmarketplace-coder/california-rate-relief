import type { Metadata } from 'next';
import Link from 'next/link';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { ChevronRight } from 'lucide-react';
import { AuthorBio } from '@/components/shared/AuthorBio';
import { LastReviewedStamp } from '@/components/shared/LastReviewedStamp';
import { TrustedSources } from '@/components/shared/TrustedSources';

export const metadata: Metadata = {
  title: 'Privacy Policy | GreenReviewsHub',
  description:
    'GreenReviewsHub privacy policy — what we collect, how we use it, your rights under GDPR and CCPA, and how to contact us.',
  alternates: {
    canonical: '/reviews/privacy',
  },
};

export default function PrivacyPolicyPage() {
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
              <span className='text-foreground font-medium'>Privacy Policy</span>
            </nav>

            <h1 className='text-4xl font-extrabold text-foreground mb-6 tracking-tight'>
              Privacy Policy
            </h1>

            
              <LastReviewedStamp date="2026-04-24" variant="reviewed" palette={{ fg: '#f5f5f5', muted: '#a1a1aa', border: 'hsl(150, 10%, 18%)', accent: '#22c55e' }} />
<p className='text-sm text-muted-foreground mb-8'>Last updated: April 22, 2026</p>

            <div className='text-foreground/80 leading-relaxed space-y-6'>
              <p>
                GreenReviewsHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the
                greenreviewshub.com website. This privacy policy explains what information we
                collect, how we use it, and your rights regarding your information.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Information We Collect</h2>
              <p>
                We collect information in two ways: information you provide to us, and
                information collected automatically when you visit the site.
              </p>
              <h3 className='text-xl font-semibold text-foreground mt-6'>
                Information you provide
              </h3>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Email address (only if you contact us or subscribe to a newsletter)</li>
                <li>Name and message content (if you email us)</li>
                <li>
                  We do not collect payment information on this site. All product purchases happen
                  on the retailer&apos;s site (Amazon, Bluetti, Rad Power, etc.), not here.
                </li>
              </ul>
              <h3 className='text-xl font-semibold text-foreground mt-6'>
                Information collected automatically
              </h3>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong className='text-foreground'>Analytics data:</strong> Anonymized usage
                  data collected via Vercel Analytics (page views, country, device type, referrer).
                  We do not track individuals across the web.
                </li>
                <li>
                  <strong className='text-foreground'>Cookies:</strong> We use a minimal set of
                  cookies for site functionality and aggregate analytics. We do not use
                  cross-site advertising trackers.
                </li>
                <li>
                  <strong className='text-foreground'>Affiliate tracking:</strong> When you click
                  an affiliate link, the destination retailer (e.g., Amazon, Bluetti, Rad Power)
                  may set a cookie to attribute your purchase to us for commission purposes.
                  This cookie is set by the retailer, not us, and governed by their privacy policy.
                </li>
                <li>
                  <strong className='text-foreground'>Server logs:</strong> Our hosting provider
                  (Vercel) retains standard server access logs including IP address and user
                  agent for security and operational purposes, typically for 30 days.
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-8'>How We Use Information</h2>
              <ul className='list-disc pl-6 space-y-2'>
                <li>To operate and improve the site</li>
                <li>To respond to your inquiries when you email us</li>
                <li>To track aggregate site usage and popular content</li>
                <li>
                  To receive affiliate commission attribution from retailers when you purchase
                  through our links
                </li>
                <li>To comply with legal obligations</li>
              </ul>
              <p>
                We do not sell your personal information to third parties. We do not use your
                information for advertising outside this site.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Third-Party Services</h2>
              <p>
                We use the following third-party services that may process visitor data:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>
                  <strong className='text-foreground'>Vercel</strong> (hosting + analytics), {' '}
                  <a
                    href='https://vercel.com/legal/privacy-policy'
                    className='text-primary hover:underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    privacy policy
                  </a>
                </li>
                <li>
                  <strong className='text-foreground'>Affiliate networks</strong> (ShareASale,
                  Impact.com, CJ Affiliate, AvantLink, AWIN, FlexOffers, Amazon Associates when
                  active). Each has its own privacy policy and tracking behavior governed by
                  their terms
                </li>
                <li>
                  <strong className='text-foreground'>Google Fonts</strong> (typography) — loaded
                  from Google&apos;s CDN
                </li>
              </ul>

              <h2 className='text-2xl font-bold text-foreground mt-8'>
                Your Rights (GDPR, CCPA, CPRA)
              </h2>
              <p>
                If you are a resident of the European Union (GDPR), California (CCPA/CPRA), or
                another jurisdiction with similar data-protection laws, you have the right to:
              </p>
              <ul className='list-disc pl-6 space-y-2'>
                <li>Request a copy of any personal information we have about you</li>
                <li>Request correction or deletion of your information</li>
                <li>Opt out of the sale of personal information (we do not sell)</li>
                <li>Lodge a complaint with your local data protection authority</li>
              </ul>
              <p>
                To exercise any of these rights, email us at{' '}
                <a
                  href='mailto:privacy@greenreviewshub.com'
                  className='text-primary hover:underline'
                >
                  privacy@greenreviewshub.com
                </a>
                . We will respond within 30 days.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Children&apos;s Privacy</h2>
              <p>
                GreenReviewsHub is not directed to children under 13. We do not knowingly collect
                information from children under 13. If you believe a child under 13 has provided
                us with personal information, contact us and we will delete it.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Data Retention</h2>
              <p>
                Email correspondence is retained for up to 3 years unless you request deletion.
                Server logs are retained for approximately 30 days. Analytics data is retained in
                aggregated, anonymized form indefinitely.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Material changes will be
                posted here with a revised &quot;Last updated&quot; date. Continued use of the
                site after changes constitutes acceptance of the revised policy.
              </p>

              <h2 className='text-2xl font-bold text-foreground mt-8'>Contact</h2>
              <p>
                Questions about this policy? Email{' '}
                <a
                  href='mailto:privacy@greenreviewshub.com'
                  className='text-primary hover:underline'
                >
                  privacy@greenreviewshub.com
                </a>{' '}
                or see our{' '}
                <Link href='/reviews/about' className='text-primary hover:underline'>
                  About page
                </Link>{' '}
                for general contact.
              </p>
            </div>
          </article>
        </div>
      </main>
      <ReviewFooter />
      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio domain="grh" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} />
      </div>

    <div className="container mx-auto px-4 max-w-3xl"><TrustedSources domain="grh" variant="compact" palette={{ fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' }} /></div>

    </ReviewLayout>
  );
}
