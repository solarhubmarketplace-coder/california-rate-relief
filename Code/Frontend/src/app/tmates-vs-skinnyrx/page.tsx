import type { Metadata } from 'next';
import { TMatesCompareTemplate, type CompetitorProfile } from '@/components/glp1/TMatesCompareTemplate';

export const metadata: Metadata = {
  title: 'TMates vs SkinnyRx 2026: Which Compounded GLP-1 Wins? | GLP1CompareHub',
  description:
    'TMates ($158-$297/mo flat dosing) vs SkinnyRx ($199-$299/mo, Trustpilot 4.8/5 across 5K+ reviews). Pricing, reputation, and who should pick which compounded GLP-1.',
  alternates: { canonical: 'https://glp1comparehub.com/tmates-vs-skinnyrx' },
  openGraph: {
    title: 'TMates vs SkinnyRx 2026: Compounded GLP-1 Head-to-Head',
    description:
      'TMates flat-dose pricing vs SkinnyRx top-rated reputation (4.8/5 Trustpilot, 5K+ reviews). Best-value comparison verified May 2026.',
    type: 'article',
    siteName: 'GLP1CompareHub',
    url: 'https://glp1comparehub.com/tmates-vs-skinnyrx',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'TMates vs SkinnyRx 2026: Compounded GLP-1 Head-to-Head',
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'GLP1CompareHub' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://glp1comparehub.com/tmates-vs-skinnyrx' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which has better consumer reviews — TMates or SkinnyRx?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkinnyRx wins decisively on reputation. SkinnyRx has 4.8/5 Trustpilot across 5,000+ reviews — one of the highest-rated GLP-1 telehealth providers in the industry. TMates sits at 3.2/5 on lower review volume with notable refund and billing complaints. For risk-averse buyers, SkinnyRx is the safer pick.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is TMates or SkinnyRx cheaper for compounded semaglutide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TMates wins on price for committed users. TMates is $158/mo on a 12-month plan; SkinnyRx is $199/mo standard or roughly $224/mo effective on a 6-month bundle. For users willing to commit annually, TMates saves about $40-$70/month.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SkinnyRx offer oral or sublingual options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SkinnyRx offers both injectable and oral/tablet formats for compounded semaglutide and tirzepatide. TMates focuses on injectable formats. For needle-averse users, SkinnyRx is more flexible.',
      },
    },
  ],
};

const competitor: CompetitorProfile = {
  name: 'SkinnyRx',
  slug: 'skinnyrx',
  pageSlug: 'skinnyrx',
  semaPrice: '$199/mo (bundles drop to ~$224 effective)',
  tirzPrice: '$299/mo (bundles drop to ~$232 effective)',
  pharmacyDisclosure: 'Multiple licensed U.S. 503A pharmacies (state-board compliant)',
  trustpilot: '4.8/5 across 5K+ reviews — top-tier reputation',
  cancelPolicy: 'Cancel anytime, no contract',
  positioning: 'Highest-Trustpilot reputation + injectable + oral/tablet options + bundle discounts',
  strengthsVsTmates: [
    'Trustpilot 4.8/5 across 5,000+ reviews — one of the strongest reputational signals in the entire GLP-1 telehealth category.',
    'Offers both injectable and oral/tablet semaglutide and tirzepatide formats; TMates is injectable-only.',
    'Multi-pharmacy 503A network gives more redundancy if one pharmacy has shipping or supply issues.',
    'Established track record with proven customer service quality reflected in review consistency.',
  ],
  weaknessesVsTmates: [
    'TMates 12-month plan ($158/mo) is meaningfully cheaper than SkinnyRx standard $199/mo for semaglutide.',
    'TMates flat-dose pricing applies across all dose tiers; SkinnyRx pricing is per-dose-tier on some plans.',
    'TMates tirzepatide $167/mo on 12-month plan undercuts SkinnyRx $299/mo standard substantially.',
    'TMates focused product line — purely compounded GLP-1, no upsell complexity.',
  ],
  verdictTmates:
    'You are budget-conscious and willing to commit to a 12-month plan ($158/mo semaglutide, $167/mo tirzepatide flat across all doses). The savings vs SkinnyRx are largest for tirzepatide users titrating up to higher doses where flat pricing produces the biggest gap.',
  verdictCompetitor:
    'You are a first-time GLP-1 user, you weight consumer reviews heavily, you want oral/tablet alternatives to injection, or you are risk-averse and want the strongest possible reputational signal. SkinnyRx 4.8/5 across 5,000+ reviews is the gold standard for GLP-1 telehealth credibility right now.',
  tmatesShortcoming:
    'SkinnyRx has 5,000+ Trustpilot reviews at 4.8/5 — TMates does not have anywhere close to this. For consumers making a first-time GLP-1 decision, the SkinnyRx reputation signal is one of the strongest in the entire industry. The price difference between TMates and SkinnyRx (about $40/month at standard pricing) may be worth paying for the reputational assurance, especially for needle-averse users who benefit from the oral options. Acknowledge that TMates flat-pricing innovation does not erase a 5K-review reputation gap.',
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
