import type { Metadata } from 'next';
import { TMatesCompareTemplate, type CompetitorProfile } from '@/components/glp1/TMatesCompareTemplate';

export const metadata: Metadata = {
  title: 'TMates vs Strut Health 2026: Which Compounded GLP-1 Wins? | GLP1CompareHub',
  description:
    'TMates ($158-$297/mo flat dosing, injectable focus) vs Strut Health ($199/mo with in-house ACHC-accredited pharmacy + oral lozenge). Pricing, formats, and who should pick which.',
  alternates: { canonical: 'https://glp1comparehub.com/tmates-vs-strut-health' },
  openGraph: {
    title: 'TMates vs Strut Health 2026: Compounded GLP-1 Head-to-Head',
    description:
      'Injection-only flat pricing vs in-house pharmacy with oral lozenge format. Strut Health offers ACHC-accredited transparency; TMates wins on tirzepatide pricing. Verified May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tmates-vs-strut-health',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TMates vs Strut Health 2026: Compounded GLP-1 Head-to-Head',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'GLP1CompareHub' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/tmates-vs-strut-health' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does Strut Health have its own compounding pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Strut Health uses an in-house ACHC-accredited compounding pharmacy, which gives it more direct control over sourcing and quality than telehealth providers using third-party 503A partners. TMates uses unnamed external 503A pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Strut Health offer tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strut Health primarily offers compounded semaglutide (injectable and oral lozenge formats). Tirzepatide availability is limited or higher-priced. TMates offers compounded tirzepatide as a core product at $167/mo on its 12-month plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which is cheaper for compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strut Health is $199/mo flat for compounded semaglutide. TMates is $249/mo single-month or $158/mo on a 12-month plan. Strut beats TMates on month-to-month pricing but TMates beats Strut on annual commitment.',
      },
    },
  ],
};

const competitor: CompetitorProfile = {
  name: 'Strut Health',
  slug: 'strut-health',
  pageSlug: 'strut-health',
  semaPrice: '$199/mo (injectable or oral lozenge)',
  tirzPrice: '$199+/mo (limited availability, higher tier)',
  pharmacyDisclosure: 'In-house ACHC-accredited compounding pharmacy',
  trustpilot: '~3.5/5 (mixed reviews, BBB C- noted in some sources)',
  cancelPolicy: 'Cancel anytime, no membership fees',
  positioning: 'In-house pharmacy + oral lozenge format + unlimited doctor access',
  strengthsVsTmates: [
    'In-house ACHC-accredited compounding pharmacy — direct supply chain control vs TMates external 503A.',
    'Oral lozenge semaglutide format available for needle-averse users; TMates is injectable-only.',
    'Unlimited doctor access included; TMates uses async intake.',
    'Lower month-to-month pricing on semaglutide ($199 flat vs $249 TMates single-month).',
  ],
  weaknessesVsTmates: [
    'Strut tirzepatide availability is limited or premium-priced; TMates offers tirzepatide as a core product at $167/mo on annual plan.',
    'TMates 12-month plan ($158/mo) beats Strut Health $199/mo for users committing to a year.',
    'TMates has cleaner Trustpilot record on volume; Strut has mixed reviews and a noted BBB C- rating in some sources.',
    'TMates flat-dose pricing applies to all doses including high-tier; Strut Health does not match this.',
  ],
  verdictTmates:
    'You want compounded tirzepatide at a competitive flat rate ($167/mo on 12-month plan), you are an injectable user, and you want predictable flat pricing across all dose tiers as you titrate up.',
  verdictCompetitor:
    'You are needle-averse and want an oral lozenge alternative, you place high value on pharmacy transparency (Strut owns its ACHC-accredited compounding pharmacy in-house), you want unlimited doctor access included, or you prefer month-to-month flexibility without an annual commitment.',
  tmatesShortcoming:
    'Strut Health owning its own ACHC-accredited compounding pharmacy is a real safety advantage that TMates does not match — direct chain-of-custody control over compounding reduces variability risk and quality concerns. For consumers who have read about FDA scrutiny of 503A compounding in 2026, this matters. TMates uses external 503A partners and does not publicly name them.',
  competitorRedFlag:
    'Strut Health Trustpilot reviews are mixed and some sources list a BBB C- rating — verify current standing before signing up. Tirzepatide availability is limited; if tirzepatide is your goal, Strut may not be the right pick regardless of pharmacy transparency.',
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
