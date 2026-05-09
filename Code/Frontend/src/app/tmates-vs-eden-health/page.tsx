import type { Metadata } from 'next';
import { TMatesCompareTemplate, type CompetitorProfile } from '@/components/glp1/TMatesCompareTemplate';

export const metadata: Metadata = {
  title: 'TMates vs Eden Health 2026: Which Compounded GLP-1 Wins? | GLP1CompareHub',
  description:
    'TMates ($158-$297/mo flat dosing) vs Eden Health ($129-$229/mo with NABP/PCAB/ACHC-accredited 503A pharmacy). Pricing, pharmacy verification, branded access, and who should pick which.',
  alternates: { canonical: 'https://glp1comparehub.com/tmates-vs-eden-health' },
  openGraph: {
    title: 'TMates vs Eden Health 2026: Compounded GLP-1 Head-to-Head',
    description:
      "Budget vs accreditation. TMates wins flat-dose pricing; Eden wins pharmacy transparency, branded access, and consumer trust signals. Verified May 2026.",
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tmates-vs-eden-health',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TMates vs Eden Health 2026: Compounded GLP-1 Head-to-Head',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'GLP1CompareHub' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/tmates-vs-eden-health' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is TMates or Eden Health cheaper for compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health is cheaper on month one ($129-$149 intro vs $249 single-month TMates) and remains cheaper at standard ongoing pricing ($209-$229/mo Eden vs $249/mo TMates standard). However, on a 12-month TMates plan, the price drops to $158/mo flat across all doses — at that point TMates becomes cheaper for users titrating up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has the better-verified 503A pharmacy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health partners with NABP/PCAB/ACHC-accredited 503A pharmacies and discloses third-party batch testing. TMates uses unnamed registered U.S. 503A pharmacies and does not publicly disclose Valisure, NABP, or PCAB accreditation. For consumers prioritizing pharmacy verification, Eden Health has the clear edge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does either offer branded Wegovy or Zepbound?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eden Health offers branded GLP-1 access (Wegovy, Zepbound, Ozempic, Mounjaro) with insurance concierge and cash-pay options around $1,399/mo. TMates focuses primarily on compounded with limited branded availability.',
      },
    },
  ],
};

const competitor: CompetitorProfile = {
  name: 'Eden Health',
  slug: 'eden-health',
  pageSlug: 'eden-health',
  semaPrice: '$129–$149 intro / $209–$229 ongoing',
  tirzPrice: '$249 first / $329/mo ongoing',
  pharmacyDisclosure: 'NABP/PCAB/ACHC-accredited 503A + 3rd-party batch testing',
  trustpilot: '4.4+/5 (high volume, positive)',
  cancelPolicy: 'Cancel anytime, money-back elements',
  positioning: 'Tiered pricing + branded GLP-1 access + accredited pharmacy partners',
  strengthsVsTmates: [
    'Discloses NABP, PCAB, and ACHC accreditations for its 503A pharmacy partners — transparent third-party batch testing.',
    'Offers branded Wegovy, Zepbound, Ozempic, and Mounjaro via insurance concierge or ~$1,399 cash-pay.',
    'Stronger Trustpilot reputation (4.4+/5 across thousands of reviews) vs TMates 3.2/5 on lower volume.',
    'Same-day or synchronous video consultations available, not just async intake.',
    'Money-back guarantee elements present in some plans (verify on signup).',
  ],
  weaknessesVsTmates: [
    'TMates has flat pricing across all doses — Eden Health charges more as you titrate up to higher tiers.',
    'On a 12-month TMates plan ($158/mo semaglutide), TMates is dramatically cheaper than Eden Health ongoing.',
    'TMates has avoided the FDA marketing-warning wave of Feb-Mar 2026 that hit several major telehealth providers.',
    'TMates 12-month commitment beats Eden Health ongoing pricing for users who plan to titrate to higher doses.',
  ],
  verdictTmates:
    'You are budget-conscious, willing to commit to a 12-month plan ($158/mo flat for semaglutide, $167/mo for tirzepatide), and you want predictable pricing that does not increase as you titrate up to higher doses. Best for users who already know they want compounded GLP-1.',
  verdictCompetitor:
    'You are a first-time GLP-1 user who values pharmacy accreditation transparency, you want the option to step up to branded Wegovy or Zepbound later, you place weight on consumer trust signals (Trustpilot 4.4+/5), or you want money-back guarantees. Eden Health is the lower-risk choice for newcomers.',
  tmatesShortcoming:
    'TMates does not publicly disclose its 503A pharmacy partners or accreditation (no NABP/PCAB/ACHC publicly listed), has a lower Trustpilot score (3.2/5) on a smaller review volume, and has 9 BBB complaints about service and sales. For consumers who weight pharmacy transparency and consumer trust signals heavily, this is a real concern. The flat-dose pricing model is genuinely innovative but does not erase those gaps.',
  competitorRedFlag:
    'Eden Health pricing increases with dose tier — a user titrated to 15 mg tirzepatide will pay materially more than at 2.5 mg. Confirm exact pricing for your target dose at signup, not just intro-month pricing.',
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
