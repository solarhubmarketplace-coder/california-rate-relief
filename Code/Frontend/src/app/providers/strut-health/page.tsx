import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, CircleCheck, Calendar, Award, ShieldCheck, Zap, DollarSign, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strut Health Review May 2026: $99 Oral Semaglutide, No-Video Telehealth, 7.12% Conversion | GLP1CompareHub',
  description:
    'Independent Strut Health review verified May 2026. The lowest verified oral GLP-1 entry price in our Katalys stack ($99/mo sema, $199/mo tirz), 7.12% conversion rate (2nd highest), and the only no-video async physician model.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/strut-health' },
  openGraph: {
    title: 'Strut Health Review — $99 Oral Semaglutide, No-Video Telehealth, 7.12% CR',
    description:
      'LegitScript + HIPAA certified, no-video async model with ≤1 business day physician review. Multi-vertical: GLP-1 + hair + skin + sexual health. Available in 49 US states.',
    url: 'https://glp1comparehub.com/providers/strut-health',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'MedicalBusiness',
    name: 'Strut Health',
    url: 'https://struthealth.com',
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.6', bestRating: '5' },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-13',
  dateModified: '2026-05-13',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Strut Health legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Strut Health (struthealth.com) is LegitScript-accredited and HIPAA-compliant — two of the most rigorous third-party telehealth certifications. As of May 2026, Strut is approved on the Katalys affiliate network with realized conversion rate 7.12% — the second-highest in our verified active stack behind TMates. US-licensed physicians review patient cases in 1 business day or less. Compounded medications are sourced through US board-certified compounding pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Strut Health cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strut Health oral compounded semaglutide starts at $99/mo on auto-refill — the lowest verified GLP-1 entry-tier price in our active Katalys stack. Oral compounded tirzepatide starts at $199/mo on auto-refill. Both prices save approximately 20% versus one-time orders. Strut focuses on oral GLP-1 only — there is no injectable semaglutide or tirzepatide on the public catalog as of May 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a video consultation for Strut Health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Strut Health uses an async no-video model — patients submit a written medical questionnaire and a US-licensed physician reviews it in 1 business day or less. There is no scheduled video visit. This is uncommon in the GLP-1 telehealth space; most competitors require at least an initial video consultation. The no-video model is faster for patients but means you cannot have a real-time clinical conversation before your prescription is reviewed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Strut Health offer injectable GLP-1?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Strut Health\'s public catalog as of May 2026 lists oral compounded semaglutide and oral compounded tirzepatide only — no injectable formats. Patients who specifically want injectable compounded GLP-1 should look at TMates (injectable + oral), Embody, Eden Health, or System Labs, all of which carry injectable in our verified stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is compounded GLP-1 from Strut Health FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Compounded semaglutide and compounded tirzepatide are NOT FDA-approved drugs. They are produced by state-licensed 503A compounding pharmacies under specific FDA exemptions and are not therapeutically equivalent to brand-name Wegovy, Zepbound, Ozempic, or Mounjaro. Compounded formulations are not reviewed by the FDA for safety, efficacy, or quality. Strut Health\'s LegitScript accreditation reflects compliance with telehealth and pharmacy operational standards but does not constitute FDA endorsement of compounded formulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What states does Strut Health serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Strut Health serves patients in 49 US states. Alaska (AK) is excluded due to state-specific telehealth restrictions. All other US states and DC are within service area as of May 2026.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I cancel Strut Health anytime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Strut Health uses a monthly subscription model that can be paused or canceled at any time through the patient portal. Free follow-up care is included for active subscribers, and 2-day discreet shipping is included on every refill. There is no long-term commitment required.',
      },
    },
  ],
};

export default function StrutHealthReviewPage() {
  const provider = getProviderBySlug('strut-health');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'strut-health')
    .slice(0, 5);

  const strutAffiliate = buildAffiliateUrl('glp1-strut-health', 'providers-strut-health-review');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links. We may earn a commission — at no extra cost to you.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Strut Health Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Strut Health</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Oral Entry
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The lowest verified oral GLP-1 entry-tier price in our active Katalys stack ($99/mo oral semaglutide, $199/mo
              oral tirzepatide) — and the only no-video async physician model. 7.12% conversion rate is second-highest
              in the stack. LegitScript + HIPAA certified, 2-day discreet shipping, 49 US states.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 13, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · struthealth.com</span>
            </div>
          </div>
        </section>

        {/* Quick stats card */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.6 / 5' />
              <StatCard label='Conversion Rate' value='7.12%' highlight />
              <StatCard label='Oral Sema' value='From $99/mo' highlight />
              <StatCard label='Oral Tirz' value='From $199/mo' />
              <StatCard label='Format' value='Oral only' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              Conversion rate is the realized Katalys partner-dashboard metric — 2nd highest in our active stack behind TMates (6.43%) only
              when measured by EPC, but Strut leads on CR. LegitScript + HIPAA certified. Updated May 13, 2026.
            </p>
          </div>
        </section>

        {/* FDA banner */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Compounded GLP-1 — FDA context
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                <strong>Compounded semaglutide and tirzepatide are NOT FDA-approved drugs.</strong> They are produced
                by state-licensed 503A compounding pharmacies under specific FDA exemptions and are not therapeutically
                equivalent to brand-name Wegovy, Zepbound, Ozempic, or Mounjaro. Compounded formulations are not reviewed
                by the FDA for safety, efficacy, or quality. Strut Health&rsquo;s LegitScript accreditation reflects
                compliance with telehealth and pharmacy operational standards but is not FDA endorsement. See our{' '}
                <Link href='/compounded-tirzepatide' className='underline' style={{ color: '#B14739' }}>full compounded GLP-1 guide</Link>{' '}
                for the post-April 2026 regulatory landscape.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Strut Health Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Strut Health if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want the lowest possible entry price on oral GLP-1 ($99/mo sema is the floor of our verified stack)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You prefer no-video async telehealth — written physician review in ≤1 business day, no scheduled call
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You value third-party compliance signal (LegitScript + HIPAA — two of the most rigorous certifications in telehealth)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re a multi-condition patient combining GLP-1 with hair loss, skin care, or sexual health under one provider
                  </li>
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#B14739' }}>
                  Pick someone else if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want injectable GLP-1 (Strut is oral-only — try TMates, Embody, or Eden Health)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You live in Alaska (AK is excluded from Strut&rsquo;s service area)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want branded Wegovy or Zepbound (Strut is compounded-only)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want a real-time video consultation with your prescriber before starting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* No-video model deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Zap className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The No-Video Async Telehealth Model
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Most GLP-1 telehealth providers require a scheduled video consultation before the first prescription is
              written. Strut Health uses an async model: patients fill out a detailed written medical questionnaire,
              upload required medical history, and a US-licensed physician reviews the case in 1 business day or less.
              No video call is scheduled. The physician either approves the prescription or sends written follow-up
              questions through the patient portal.
            </p>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What this means in practice:</strong>
            </p>
            <div className='space-y-3 mb-5'>
              <ProcessRow
                step='1. Written intake'
                detail="Patient completes a comprehensive medical questionnaire covering history, current medications, contraindications, and weight-loss goals — typically 10-15 minutes."
              />
              <ProcessRow
                step='2. Physician review'
                detail='US board-certified physician reviews the intake within 1 business day. If clinically appropriate, an Rx is written; if more information is needed, written follow-up questions are sent through the portal.'
              />
              <ProcessRow
                step='3. Pharmacy fulfillment'
                detail='Approved prescriptions route to a US board-certified compounding pharmacy. Medication ships 2-day discreet packaging at no additional cost.'
              />
              <ProcessRow
                step='4. Ongoing care'
                detail='Free follow-up care is included for active subscribers. Patients can message their prescriber through the portal for dose adjustments, side-effect questions, or refill timing.'
              />
            </div>
            <div className='p-5 rounded-2xl mb-5' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <p className='text-sm leading-relaxed' style={{ color: '#7A6020' }}>
                <strong>Tradeoff to know:</strong> The no-video model is faster and cheaper to deliver — which is part
                of why Strut&rsquo;s pricing is the lowest in the stack. The flip side: you cannot have a real-time
                clinical conversation with the prescriber before the prescription is written. If you have complex medical
                history or specific dose-titration concerns, a provider with synchronous video (Eden Health, Embody)
                may be a better fit despite the higher cost.
              </p>
            </div>
          </div>
        </section>

        {/* Oral GLP-1 deep dive */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Strut Pricing — The Lowest Oral GLP-1 Entry in the Stack
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              Strut Health&rsquo;s $99/mo auto-refill price on oral compounded semaglutide is the lowest verified GLP-1
              entry-tier price in our active Katalys stack as of May 2026. The auto-refill discount is roughly 21% versus
              one-time orders. Tirzepatide is $199/mo on auto-refill (17% savings).
            </p>
            <div className='overflow-x-auto rounded-2xl mb-5' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Product</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Strut (auto-refill)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Cheapest Verified Alt.</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Strut Saves</th>
                  </tr>
                </thead>
                <tbody>
                  <CompareRow product='Oral semaglutide' strut='From $99/mo' alt='TMates $158/mo (12-mo)' diff='Strut $59/mo cheaper' positive />
                  <CompareRow product='Oral tirzepatide' strut='From $199/mo' alt='Direct Meds sublingual $224.10' diff='Strut $25.10/mo cheaper' positive />
                  <CompareRow product='Hair loss (finasteride)' strut='See struthealth.com' alt='Care Bare Rx ($199+ bundle)' diff='Verify on site' />
                  <CompareRow product='Sexual health (ED)' strut='See struthealth.com' alt='Care Bare Rx bundle' diff='Verify on site' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic' style={{ color: '#6B7B82' }}>
              Pricing live-crawled from struthealth.com May 6, 2026. Oral GLP-1 has lower bioavailability than injectable
              — bioavailability data for compounded oral semaglutide is uncharacterized and varies by formulation. The
              $99/mo entry price reflects the no-video delivery model and oral format, not equivalent therapeutic efficacy
              to injectable semaglutide. See our <Link href='/oral-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>oral tirzepatide guide</Link> for
              the full evidence read on oral vs injectable bioavailability.
            </p>
          </div>
        </section>

        {/* Strut vs the field */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Strut Health vs the Field — Where It Wins and Loses
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs TMates ($158-$249 sema, $167-$297 tirz)'
                winner='Strut on cheapest oral entry; TMates on injectable + multi-vertical'
                analysis="TMates ranks #1 on EPC ($16.09 vs Strut's lower realized EPC) but Strut beats TMates on conversion rate (7.12% vs 6.43%) and on entry price ($99 vs $158 for sema, $199 vs $167 for tirz at 12-month). The big differentiator: TMates carries injectable AND oral; Strut is oral only. Pick Strut for cheapest oral entry + no-video; pick TMates for injectable options + multi-vertical depth."
              />
              <CompetitorRow
                competitor='vs Eden Health ($149 first / $229-$249 flat)'
                winner='Strut on price + no-video; Eden on injectable + branded fallback'
                analysis="Eden is $229-$249/mo ongoing across all dose tiers vs Strut's $99/mo oral semaglutide — Strut is materially cheaper for patients comfortable with oral. But Eden carries injectable AND branded Wegovy/Zepbound, and uses synchronous video consultation. Pick Strut for cheapest oral + no-video; pick Eden for established brand + branded fallback + dose-tier predictability on injectable."
              />
              <CompetitorRow
                competitor='vs Embody ($149 first / $299 flat)'
                winner='Strut on sustained price; Embody on first-month entry + injectable + gum format'
                analysis="Embody's Spring Forward promo lands at $149 first month and $299 flat ongoing — Embody is the only provider with a GLP-1 gum format. Strut is oral-only (tablets / drops) and cheaper sustained ($99/mo vs $299/mo). Pick Strut for sustained cheapest oral; pick Embody for the unique GLP-1 gum delivery + injectable options."
              />
              <CompetitorRow
                competitor='vs Direct Meds (sublingual $224.10)'
                winner='Strut on price; Direct Meds on sublingual format + injectable optionality'
                analysis="Direct Meds is the only provider with compounded SUBLINGUAL GLP-1 ($224.10) — the strongest needle-free option for patients who specifically want under-the-tongue delivery rather than oral tablets. Strut is oral tablets/drops at $99/mo entry. Direct Meds also carries injectable. Pick Strut for cheapest oral; pick Direct Meds for sublingual format specifically."
              />
              <CompetitorRow
                competitor='vs System Labs ($179/mo)'
                winner='Strut on oral entry; System Labs on injectable + sustained price'
                analysis="System Labs is $179/mo flat for injectable compounded GLP-1. Strut is $99/mo oral. For injectable, System Labs wins on cheapest sustained. For oral, Strut wins on entry price. Strut also has LegitScript + HIPAA certifications; System Labs is less established in compliance signaling. Pick Strut for cheapest oral entry; pick System Labs for cheapest injectable."
              />
            </div>
          </div>
        </section>

        {/* Compliance + pharmacy */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <ShieldCheck className='h-6 w-6' style={{ color: '#7CA982' }} />
              Compliance + Pharmacy Sourcing (May 2026)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Strut Health is one of the few GLP-1 telehealth providers in our active stack carrying both{' '}
              <strong>LegitScript accreditation</strong> AND <strong>HIPAA compliance certification</strong>. LegitScript
              is the most rigorous third-party telehealth credential — it audits prescribing practices, advertising claims,
              and pharmacy fulfillment chain. HIPAA compliance is mandatory for any provider handling US patient health data;
              the explicit certification is a stronger signal than self-attestation.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Compounded medications source through US board-certified compounding pharmacies. Post-April 1 2026 FDA
              enforcement shift, Strut continues operating under valid 503A patient-specific compounding exemptions. As
              a compounded-only provider, Strut shares the regulatory continuity risk facing the broader compounded GLP-1
              space if the April 30 503B exclusion proposal finalizes after the June 29 comment period — patients planning
              long-term GLP-1 therapy should weigh that risk relative to dual-supply providers (Eden Health).
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='LegitScript-accredited telehealth platform' />
              <ComplianceRow title='HIPAA-compliant — explicit certification (not self-attestation)' />
              <ComplianceRow title='US board-certified compounding pharmacy partner' />
              <ComplianceRow title='US-licensed physician reviews every case in 1 business day or less' />
              <ComplianceRow title='2-day discreet shipping, plain packaging — included on every refill' />
              <ComplianceRow title='Free follow-up care included for active subscribers' />
              <ComplianceRow title='Service area: 49 US states (Alaska excluded)' />
            </div>
          </div>
        </section>

        {/* Pros and cons */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Pros and Cons (Honest Read)
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#7CA982' }}>Pros</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.pros?.map((pro, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #B14739' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-3' style={{ color: '#B14739' }}>Cons</div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  {provider?.cons?.map((con, i) => (
                    <li key={i} className='flex items-start gap-2'>
                      <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                Best Oral GLP-1 Entry · No-Video Telehealth · LegitScript + HIPAA
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start Strut Health From $99/Month Oral Semaglutide
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                $99/mo oral semaglutide, $199/mo oral tirzepatide on auto-refill. No video visit — written physician
                review in 1 business day or less. LegitScript + HIPAA certified. 2-day discreet shipping included.
                Cancel anytime.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={strutAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Strut Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/best-compounded-semaglutide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  See Top Compounded Sema Programs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compare table */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Strut Health to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-strut-health-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/strut-health' />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Lowest oral GLP-1 entry. No video required.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $99/mo oral semaglutide. $199/mo oral tirzepatide. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={strutAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Strut Health <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/oral-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Oral vs Injectable Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <GLP1Footer />
    </GLP1Layout>
  );
}

function StatCard({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className='p-4 rounded-2xl text-center'
      style={{
        backgroundColor: highlight ? '#F4EBD0' : '#F8F4ED',
        border: highlight ? '1px solid #D4A33A' : '1px solid #E5DDC8',
      }}
    >
      <div className='text-xs font-bold uppercase tracking-widest mb-1' style={{ color: '#6B7B82' }}>{label}</div>
      <div className='text-xl md:text-2xl font-bold' style={{ color: highlight ? '#D4A33A' : '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {value}
      </div>
    </div>
  );
}

function ProcessRow({ step, detail }: { step: string; detail: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <h3 className='font-bold mb-1' style={{ color: '#0E2A3A' }}>{step}</h3>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function CompareRow({ product, strut, alt, diff, positive = false }: { product: string; strut: string; alt: string; diff: string; positive?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{product}</td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: '#D4A33A' }}>{strut}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{alt}</td>
      <td className='px-5 py-3 text-right text-sm font-semibold' style={{ color: positive ? '#7CA982' : '#6B7B82' }}>
        {diff}
      </td>
    </tr>
  );
}

function CompetitorRow({ competitor, winner, analysis }: { competitor: string; winner: string; analysis: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{competitor}</h3>
        <span className='text-xs font-semibold' style={{ color: '#D4A33A' }}>→ {winner}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{analysis}</p>
    </div>
  );
}

function ComplianceRow({ title }: { title: string }) {
  return (
    <div className='flex items-center gap-3 p-3 rounded-xl' style={{ backgroundColor: '#F0EBE0' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0' style={{ color: '#7CA982' }} />
      <span className='text-sm font-semibold' style={{ color: '#0E2A3A' }}>{title}</span>
    </div>
  );
}
