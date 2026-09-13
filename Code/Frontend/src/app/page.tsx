import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { HeroV2 } from '@/components/landing/HeroV2';
import { HowItWorksV2 } from '@/components/landing/HowItWorksV2';
import { SavingsCalculator } from '@/components/landing/SavingsCalculator';
import { FAQAccordion, FAQS } from '@/components/landing/FAQAccordion';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { QualificationWizard } from '@/components/landing/QualificationWizard';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { ServiceMarkets } from '@/components/landing/ServiceMarkets';

const BASE_URL = 'https://ratereliefca.com';

export const metadata: Metadata = {
  title: 'California Solar Project Review | California Rate Relief',
  description:
    'A private California referral service for residential and commercial solar project review. Share the property and utility basics with a matched provider.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'California Solar Project Review | California Rate Relief',
    description:
      'Share residential or commercial project basics for review by a matched California solar provider.',
    url: BASE_URL,
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

// =============================================================================
// CRR-SPECIFIC JSON-LD (scoped to homepage so it doesn't bleed onto GRH/SHG/AHB).
// =============================================================================
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

// Wrap QualificationWizard in Suspense for useSearchParams
function WizardWithSuspense() {
  return (
    <Suspense
      fallback={
        <section className='py-16 bg-muted/50'>
          <div className='container mx-auto px-4'>
            <div className='max-w-xl mx-auto bg-card rounded-2xl shadow-xl border border-border p-8'>
              <div className='animate-pulse space-y-4'>
                <div className='h-4 bg-muted rounded w-1/3'></div>
                <div className='h-8 bg-muted rounded'></div>
                <div className='grid grid-cols-2 gap-3'>
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className='h-20 bg-muted/50 rounded-xl'></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <QualificationWizard />
    </Suspense>
  );
}

export default function HomePage() {
  return (
    <PublicLayout>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* New full-bg hero with urgency badge + dual CTA */}
        <HeroV2 />

        {/* Existing qualification wizard (Tally-driven) — kept as the conversion form */}
        <div id='qualify' className='scroll-mt-24'>
          <WizardWithSuspense />
        </div>

        {/* New 3-card How-It-Works */}
        <HowItWorksV2 />

        <ServiceMarkets />

        {/* Testimonials removed 2026-08-24. The eight entries here were
            fabricated placeholders with Unsplash stock portraits, presented as
            "Verified Rate Relief Program participants" while the lead table
            shows zero completed installs. That is squarely within the FTC rule
            on fake consumer reviews and testimonials (16 CFR Part 465), and a
            disclaimer does not cure it. Restore this section only with real,
            documented, consented customer statements. */}

        {/* Interactive savings calculator */}
        <SavingsCalculator />

        {/* 12-question FAQ accordion */}
        <FAQAccordion />

        {/* Final CTA (background-image section) */}
        <FinalCTA />
      </main>
      <Footer />
      <div className='container mx-auto px-4 max-w-3xl'>
        <TrustedSources
          domain='crr'
          variant='compact'
          palette={{
            fg: 'hsl(var(--foreground))',
            muted: 'hsl(var(--foreground) / 0.85)',
            mutedFg: 'hsl(var(--muted-foreground))',
            accent: 'hsl(var(--primary))',
            cardBg: 'hsl(var(--card))',
            cardBorder: 'hsl(var(--border))',
          }}
        />
      </div>
    </PublicLayout>
  );
}
