import type { Metadata } from 'next';
import { TMatesCompareTemplate, type CompetitorProfile } from '@/components/glp1/TMatesCompareTemplate';

export const metadata: Metadata = {
  title: 'TMates vs MEDVi 2026: Which Compounded GLP-1 Wins? | GLP1CompareHub',
  description:
    'TMates ($158-$297/mo flat dosing) vs MEDVi ($179-$499/mo, FDA misbranding warning Feb 2026). Pricing, regulatory standing, and who should pick which.',
  alternates: { canonical: 'https://glp1comparehub.com/tmates-vs-medvi' },
  openGraph: {
    title: 'TMates vs MEDVi 2026: Compounded GLP-1 Head-to-Head',
    description:
      'TMates flat-dose pricing vs MEDVi tiered pricing + 13K+ Trustpilot reviews. MEDVi received an FDA marketing warning in Feb 2026 — what that means for buyers. Verified May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tmates-vs-medvi',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TMates vs MEDVi 2026: Compounded GLP-1 Head-to-Head',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'GLP1CompareHub' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/tmates-vs-medvi' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TMates or MEDVi cheaper for compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For ongoing pricing, TMates is cheaper. MEDVi runs $179 first month then $299/mo ongoing. TMates runs $249 single-month or $158/mo on a 12-month plan. After the MEDVi intro month, TMates beats MEDVi by roughly $140/month on the annual plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did MEDVi receive an FDA warning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MEDVi was one of 30+ telehealth firms that received FDA warning letters in early 2026 for marketing language that implied compounded products were FDA-approved or equivalent to branded GLP-1. The warning addressed misbranding, not the underlying medications. MEDVi has continued operating and updated its marketing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has more flexible dosing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates uses flat pricing across all doses. MEDVi uses tiered pricing where higher doses cost more (up to $499/mo for higher tirzepatide doses). For users titrating up, TMates produces meaningful savings.',
      },
    },
  ],
};

const competitor: CompetitorProfile = {
  name: 'MEDVi',
  slug: 'medvi',
  pageSlug: 'medvi',
  semaPrice: '$179 first / $299/mo ongoing',
  tirzPrice: '$279–$499/mo (dose-dependent)',
  pharmacyDisclosure: 'Licensed U.S. partners; received FDA misbranding warning Feb 2026',
  trustpilot: '4.4/5 across 13K+ reviews (efficacy/billing complaints noted)',
  cancelPolicy: 'Cancel anytime, no contract',
  positioning: 'Tiered pricing + 1:1 coaching included + heavy marketing presence',
  strengthsVsTmates: [
    'Larger Trustpilot review volume (13K+ reviews at 4.4/5) signaling operational maturity.',
    '1:1 health coaching included in plans — TMates is medication-only.',
    'Stronger educational content and onboarding flow for first-time users.',
    'First-month intro pricing ($179) lets you evaluate before committing.',
  ],
  weaknessesVsTmates: [
    'TMates has avoided the FDA misbranding-warning wave that hit MEDVi in Feb 2026 — cleaner regulatory record.',
    'TMates flat-dose pricing avoids upcharge surprises; MEDVi tirzepatide can run $499/mo at higher doses.',
    'TMates 12-month plan is dramatically cheaper than MEDVi ongoing ($158 vs $299 monthly for semaglutide).',
    'TMates does not bundle coaching into pricing — leaner model for users who do not need or want coaching.',
  ],
  verdictTmates:
    'You want predictable flat pricing as you titrate up to higher doses, you are willing to commit to a 12-month plan for the lowest monthly rate, you do not need bundled coaching, and you weight regulatory cleanliness — TMates has not received any FDA warning letters.',
  verdictCompetitor:
    'You value the larger Trustpilot review base as a signal of operational maturity, you want bundled 1:1 coaching, or you prefer to evaluate the program for one month at intro pricing before committing further. MEDVi has stronger marketing and onboarding despite the FDA warning.',
  tmatesShortcoming:
    'MEDVi has 13,000+ Trustpilot reviews vs TMates lower review volume. The MEDVi reviews are mixed — many positive on coaching and ease of use, others negative on oral medication efficacy and billing — but the sheer volume gives MEDVi an operational maturity signal that TMates has not yet matched. TMates is a newer entrant and should be evaluated as such.',
  competitorRedFlag:
    'February 2026 FDA Warning Letter: MEDVi was among 30+ telehealth firms cited by the FDA for marketing language that implied compounded GLP-1 products were FDA-approved. The warning addressed misbranding, not the underlying medications, but it is a real signal of regulatory friction. MEDVi has updated its marketing to comply.',
  cluster: 'compare',
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TMatesCompareTemplate competitor={competitor} />
    </>
  );
}
