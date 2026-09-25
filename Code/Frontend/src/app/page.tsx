import { Suspense } from 'react';
import type { Metadata } from 'next';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { HeroV2 } from '@/components/landing/HeroV2';
import { HowItWorksV2 } from '@/components/landing/HowItWorksV2';
import { SavingsCalculator } from '@/components/landing/SavingsCalculator';
import { FAQAccordion, FAQS } from '@/components/landing/FAQAccordion';
import { QualificationWizard } from '@/components/landing/QualificationWizard';
import { HomeGuides } from '@/components/landing/HomeGuides';
import { Footer } from '@/components/landing/Footer';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { WhyTrust } from '@/components/trust/WhyTrust';
import { ReferralDisclosure } from '@/components/shared/ReferralDisclosure';

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
      {/* Google Places for the wizard's address suggestions is loaded by the
          wizard itself, on the first focus of its address field (plan item
          4.2, 2026-09-24). Loading it here cost every home-page visit 386 KB
          of Maps JS before first paint settled. */}
      <Header />
      <main>
        {/* Hero: light surface, ink text, one brand-color button (design pass 2) */}
        <HeroV2 />

        {/* Existing qualification wizard (Tally-driven) — kept as the conversion form */}
        <div id='qualify' className='scroll-mt-24'>
          {/* The wizard's step titles are h3s, and this is the first section
              after the hero h1. A visually hidden h2 keeps the outline
              h1 > h2 > h3 (Lighthouse heading-order) without changing the look
              or touching the wizard. The hero's quick check (HeroQuickCheck,
              2026-09-23) scrolls here and opens the wizard past the answers
              it already has. */}
          <h2 className='sr-only'>Request a residential review</h2>
          <WizardWithSuspense />
          <div className='bg-muted px-4 pb-12'>
            <ReferralDisclosure className='mx-auto max-w-2xl text-center' />
          </div>
        </div>

        {/* Publisher content: surfaces the site's own guides so the homepage
            reads as an independent information source, not only a lead form. */}
        <HomeGuides />

        {/* New 3-card How-It-Works */}
        <HowItWorksV2 />

        {/* ServiceMarkets ("Solar decision guides by state") removed from the
            CRR homepage 2026-09-22 (redesign D.5) — page.tsx renders only on
            the ratereliefca.com host (every other host's "/" is rewritten to
            its own home route in middleware.ts), so this is CRR-only and safe
            to drop here. The component was deleted 2026-09-24: it linked the
            out-of-state guides, which now 301 to California pages (plan 6.1). */}

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

        {/* How the site works and how it is paid (22b: the "why trust" block
            the big publishers carry). Replaces the photo-background FinalCTA
            section: the page already asks once, in the wizard above, and the
            neutral-publisher design keeps one calm ask per page. */}
        <WhyTrust />

        {/* Primary sources list — was rendered after <Footer />; moved inside
            main so it sits above the footer. */}
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
      </main>
      <Footer />
    </PublicLayout>
  );
}
