import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { MedicalDisclaimerBanner } from '@/components/glp1/MedicalDisclaimerBanner';
import { StickyMobileCTA } from '@/components/glp1/StickyMobileCTA';
import { EditorialReviewBox } from '@/components/glp1/EditorialReviewBox';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders } from '@/lib/glp1-providers';
import { buildAffiliateUrl, buildGlp1AffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Zap, Sparkles, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'NAD+ IV Therapy 2026: Cost, At-Home Alternatives & the GLP-1 Stack',
  description:
    'NAD+ IV therapy: $150–$1,000+/drip at-clinic vs $79/mo at-home injection alternative. GLP-1 + NAD+ longevity stack explained. Verified pricing and at-home options — May 2026.',
  alternates: { canonical: 'https://glp1comparehub.com/nad-iv-therapy' },
  openGraph: {
    title: 'NAD+ IV Therapy — Cost, At-Home Alternatives, and the GLP-1 Stack',
    description:
      'IV NAD+ runs $150–$1,000+ per drip. At-home injection alternatives start at $79 first month. Plus the GLP-1 + NAD+ longevity stack — verified May 2026.',
    url: 'https://glp1comparehub.com/nad-iv-therapy',
    siteName: 'GLP1CompareHub',
    type: 'article',
    images: [{ url: 'https://glp1comparehub.com/img/glp1/og-nad-iv-therapy.jpg', width: 1168, height: 784, alt: 'NAD+ IV Therapy — telehealth provider comparison' }],
  },
  twitter: { card: 'summary_large_image' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'NAD+ IV Therapy 2026: Cost, At-Home Alternatives, and the GLP-1 Stack',
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  mainEntityOfPage: 'https://glp1comparehub.com/nad-iv-therapy',
  about: ['NAD+', 'NAD IV therapy', 'NAD+ injection', 'GLP-1 longevity stack'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does NAD+ IV therapy cost in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NAD+ IV therapy in 2026 typically runs $150–$1,000+ per drip session, depending on dose, location, and clinic. Common ranges: standard 250–500mg infusions at medspas $300–$600 per session; high-dose 750–1,000mg infusions at longevity clinics $750–$1,200+ per session. Most protocols recommend a loading phase (4–10 sessions over 2–4 weeks) then monthly maintenance — total program cost often $2,000–$5,000+. At-home injection alternatives start at $79 first month / $149/mo ongoing through telehealth providers like System Labs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is at-home NAD+ injection as effective as IV therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Subcutaneous NAD+ injection delivers a smaller bolus dose more frequently (typically 100–200mg 1–3x weekly) compared to large IV infusions (250–1,000mg per session). Bioavailability is high for both routes since both bypass GI degradation. The clinical evidence for either route\'s long-term benefit is preliminary — most NAD+ research has been on supplementation precursors (NMN, NR) rather than direct NAD+ administration. Many patients find the at-home injection regimen more sustainable and cost-effective than recurring clinic IV visits.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are people stacking NAD+ with GLP-1 medications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GLP-1 medications can produce fatigue and reduced energy as patients eat less and metabolic state shifts. NAD+ supplementation is theorized to support mitochondrial function and cellular energy, potentially mitigating GLP-1-related fatigue and supporting muscle preservation during weight loss. The stacking pattern is anecdotal — no published clinical trial has tested NAD+ + GLP-1 combination therapy. Patients pursuing the stack typically use it for biohacker-style optimization rather than evidence-based protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is NAD+ IV therapy FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. NAD+ in IV form is not an FDA-approved drug for any specific indication. It is administered through compounding pharmacies and IV therapy clinics under wellness/longevity framings. The FDA has not approved NAD+ for the energy, anti-aging, or longevity claims commonly used in marketing. Always work with a licensed prescriber and use accredited 503A compounding pharmacies for any NAD+ product.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to get NAD+ in May 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At-home subcutaneous NAD+ injection is the cheapest verified route in May 2026. System Labs offers NAD+ injection at $79 first month / $149/mo ongoing — significantly cheaper than IV therapy programs ($150–$1,000+ per session × multiple sessions = $2,000–$5,000+ total). Eden Health offers an unusually broad NAD+ menu (5 formats: injection, nasal spray, face cream, patches, oral) — pricing varies by format.',
      },
    },
  ],
};

export default function NadIvTherapyPage() {
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active')
    .slice(0, 6);

  const systemLabsUrl = buildAffiliateUrl('glp1-system-labs', 'nad-iv-therapy');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />
      <MedicalDisclaimerBanner />
      <StickyMobileCTA href={buildGlp1AffiliateUrl('eden-health', 'nad-iv-therapy')} brandName="Eden Health" pricePitch="NAD+ injection from $79 first month — no IV required" />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
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
              <span style={{ color: '#0E2A3A' }}>NAD+ IV Therapy</span>
            </nav>
            <h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-[1.1]'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <span style={{ color: '#D4A33A' }}>NAD+</span> IV Therapy 2026 — Cost, At-Home Options & the GLP-1 Stack
            </h1>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              IV NAD+ runs $150–$1,000+ per session. At-home injection alternatives start at $79 first month. Plus why
              patients are stacking NAD+ with GLP-1 medications for energy and longevity.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
            </div>
          </div>
        </section>

        {/* Top medical disclaimer */}
        <section className='py-6' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-5' style={{ backgroundColor: '#FEE2E2', border: '1px solid #B14739' }}>
              <div className='flex items-start gap-3 mb-2'>
                <AlertCircle className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color: '#B14739' }} />
                <div className='text-sm font-bold' style={{ color: '#B14739' }}>
                  Important: NAD+ is NOT FDA-approved for any indication
                </div>
              </div>
              <div className='text-sm ml-8' style={{ color: '#3D5560' }}>
                NAD+ in IV, injectable, oral, nasal, and topical forms is not an FDA-approved drug. It is administered
                through compounding pharmacies and wellness clinics under longevity/energy framings. The FDA has not
                approved NAD+ for anti-aging, energy, or weight-loss claims. Clinical evidence for long-term benefit
                is preliminary — most NAD+ research has focused on precursors (NMN, NR) rather than direct administration.
                Always work with a licensed prescriber and verify your product source is a LegitScript or NABP-accredited
                503A pharmacy.
              </div>
            </div>
          </div>
        </section>

        {/* TL;DR verdict */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='rounded-2xl p-6 md:p-8' style={{ backgroundColor: '#F0EBE0', border: '2px solid #D4A33A' }}>
              <div className='flex items-start gap-3 mb-5'>
                <Trophy className='h-6 w-6 flex-shrink-0' style={{ color: '#D4A33A' }} />
                <h2
                  className='text-2xl md:text-3xl font-bold'
                  style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
                >
                  TL;DR — IV vs At-Home Injection vs Oral
                </h2>
              </div>
              <div className='grid md:grid-cols-3 gap-5'>
                <VerdictCol
                  rank='Most aggressive dose'
                  winner='IV Therapy'
                  price='$150–$1,000+/session'
                  detail='Highest-dose protocol (250–1,000mg per drip). Recurring clinic visits required. Strong proponent base, weak clinical evidence.'
                />
                <VerdictCol
                  rank='Best cost + convenience'
                  winner='At-Home Injection'
                  price='$79 first / $149/mo'
                  detail='Subcutaneous NAD+ injection at System Labs. Self-administered 1–3x weekly. Same bioavailability bypass as IV at fraction of cost.'
                />
                <VerdictCol
                  rank='Lowest commitment'
                  winner='Oral / Nasal'
                  price='Varies'
                  detail='Eden Health offers 5 NAD+ formats including nasal spray and oral. Lower bioavailability than injection but easiest entry point.'
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is NAD+ */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              What Is NAD+ and Why the Hype?
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>NAD+</strong> (nicotinamide adenine dinucleotide) is a coenzyme found in every cell of the body.
              It plays a central role in cellular energy metabolism, DNA repair, and the activity of enzymes called sirtuins
              that regulate aspects of cellular aging. NAD+ levels naturally decline with age — by some estimates 50% lower
              at age 50 vs age 20.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              The hypothesis driving NAD+ supplementation: if low NAD+ contributes to age-related decline, then restoring
              NAD+ levels might mitigate fatigue, improve metabolic function, and potentially slow aspects of cellular aging.
              The mainstream research evidence focuses on NAD+ <em>precursors</em> (NMN, NR) which the body converts to
              NAD+ — not on direct NAD+ administration. Direct NAD+ via IV, injection, or other routes is the longevity-clinic
              approach that has gained significant traction in 2024–2026.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Honest read on the evidence:</strong> No large randomized trials have demonstrated that direct NAD+
              administration extends healthspan or improves age-related outcomes in humans. The strongest signal in the
              clinical literature is for NMN supplementation, where small trials have shown modest changes in NAD+ blood
              levels and some metabolic markers. Patients pursuing IV or injection NAD+ are typically optimizers, biohackers,
              or longevity-focused — they accept the preliminary evidence in exchange for the potential upside.
            </p>
          </div>
        </section>

        {/* IV NAD+ pricing */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              NAD+ IV Therapy — Typical Pricing (May 2026)
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              IV NAD+ pricing varies dramatically by clinic type, dose, and metro area. Here&rsquo;s the typical 2026 range:
            </p>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F8F4ED' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Clinic Type</th>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Typical Dose</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Per Session</th>
                    <th className='text-right px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Loading Protocol Total</th>
                  </tr>
                </thead>
                <tbody>
                  <ClinicRow type='IV bar / Mobile drip' dose='250mg' price='$150–$300' total='4 sessions: $600–$1,200' />
                  <ClinicRow type='Medspa / Wellness clinic' dose='500mg' price='$350–$600' total='6 sessions: $2,100–$3,600' />
                  <ClinicRow type='Longevity clinic' dose='750–1,000mg' price='$750–$1,200' total='8–10 sessions: $6,000–$12,000' />
                  <ClinicRow type='High-end concierge' dose='1,000mg+ multi-day' price='$1,500–$3,000' total='Custom: $10,000–$30,000' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic mt-3' style={{ color: '#6B7B82' }}>
              IV therapy infusion times typically run 60–240 minutes per session. Most clinics also charge separately
              for the initial consultation ($150–$400), follow-up visits, and add-on cocktail ingredients (glutathione,
              vitamins, etc.). Total program cost almost always exceeds the per-session price quoted in marketing.
            </p>
          </div>
        </section>

        {/* At-home alternatives */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Zap className='h-6 w-6' style={{ color: '#D4A33A' }} />
              At-Home Alternatives — 90% Cheaper, Same Bioavailability Bypass
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              The reason IV therapy gets prescribed is that it bypasses gastrointestinal degradation, delivering NAD+
              directly to the bloodstream. <strong>Subcutaneous injection achieves the same GI bypass</strong> — and at home,
              for a fraction of the cost. Here&rsquo;s the verified May 2026 pricing across formats:
            </p>

            <div className='space-y-3 mb-5'>
              <FormatRow
                format='Subcutaneous Injection'
                provider='System Labs'
                price='$79 first month / $149/mo'
                description='Self-administered 1–3x weekly. Bypasses GI like IV. Best cost-to-bioavailability ratio of any NAD+ format. System Labs is the lowest-priced verified provider in our active stack.'
                highlight
              />
              <FormatRow
                format='Subcutaneous Injection'
                provider='Eden Health'
                price='Varies by format'
                description='Eden Health offers an unusually broad NAD+ menu — 5 different formats (injection, nasal spray, face cream, patches, oral). The injection is most comparable to IV bioavailability.'
              />
              <FormatRow
                format='Nasal Spray'
                provider='Eden Health'
                price='Verify pricing at intake'
                description='Buccal/nasal absorption — moderate bioavailability. Lower commitment than injection. Eden Health is the only verified provider with a NAD+ nasal spray format.'
              />
              <FormatRow
                format='Oral capsules / lozenges'
                provider='Eden Health, supplement brands'
                price='$30–$80/mo'
                description='Lowest cost but also lowest bioavailability — much of oral NAD+ is degraded before absorption. Direct oral NAD+ is generally considered less effective than NMN/NR precursors taken orally.'
              />
              <FormatRow
                format='Face cream / topical'
                provider='Eden Health'
                price='Verify pricing at intake'
                description='Topical use targets local skin tissue. Not a systemic delivery mechanism — different use case from energy/longevity supplementation.'
              />
            </div>

            <a
              href={systemLabsUrl}
              target='_blank'
              rel='sponsored nofollow noopener noreferrer'
              className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
            >
              Get NAD+ Injection at System Labs ($79 first month) <ArrowRight className='h-4 w-4' />
            </a>
          </div>
        </section>

        {/* The GLP-1 + NAD+ stack */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              The GLP-1 + NAD+ Longevity Stack
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              A growing biohacker pattern in 2025–2026: stacking GLP-1 weight-loss medications with NAD+ supplementation.
              The hypothesis is that GLP-1 medications, while highly effective for weight loss, can produce fatigue and
              reduced energy as caloric intake drops. NAD+ supplementation is theorized to support mitochondrial function
              and counteract the energy dip during the weight-loss phase.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What the evidence shows:</strong> No published clinical trial has tested GLP-1 + NAD+ combination
              therapy. The stack is anecdotal — patient communities report subjective improvements in energy, mood, and
              workout capacity during GLP-1 protocols when NAD+ is added. Strong placebo effect is plausible.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical stack (verified May 2026 pricing):</strong>
            </p>
            <div className='space-y-3 mb-5'>
              <StackRow
                position='Foundation'
                program='Compounded GLP-1 (semaglutide or tirzepatide)'
                cost='$179–$399/mo'
                provider='System Labs ($179, lowest), Embody ($149/$299), Eden ($149/$229–249)'
              />
              <StackRow
                position='Energy support'
                program='NAD+ Injection (subcutaneous)'
                cost='$79 first month / $149/mo'
                provider='System Labs'
              />
              <StackRow
                position='Optional add-on'
                program='B-12 / MIC injection'
                cost='$89/mo'
                provider='System Labs'
              />
              <StackRow
                position='Optional add-on'
                program='Oral or injectable Sermorelin (growth hormone support)'
                cost='$79 first month (oral) / $109 first month (injectable)'
                provider='System Labs, Eden, Direct Meds'
              />
            </div>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Total stack cost for the foundation + NAD+ + B-12:</strong> ~$347/mo through System Labs (single
              provider, single intake). This is meaningfully cheaper than running these programs through different
              providers. <strong>System Labs is the only verified provider in our active stack covering all four programs.</strong>
            </p>
            <p className='text-sm italic' style={{ color: '#6B7B82' }}>
              Stack any peptide protocol with prescriber supervision. We do not provide medical advice — work with a
              licensed clinician to determine what is appropriate for you.
            </p>
          </div>
        </section>

        {/* IV vs injection comparison */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              IV vs At-Home Injection — Side-by-Side
            </h2>
            <div className='overflow-x-auto rounded-2xl' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F0EBE0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Factor</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>IV Therapy (Clinic)</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>At-Home Injection</th>
                  </tr>
                </thead>
                <tbody>
                  <CompareRow factor='Per-session / per-month cost' iv='$150–$1,000+ per session' inj='$79 first month / $149/mo' />
                  <CompareRow factor='Total 6-month cost' iv='$2,000–$12,000+' inj='~$830 (System Labs)' />
                  <CompareRow factor='Bioavailability' iv='~100% (IV bypass)' inj='~100% (sub-cutaneous bypass)' />
                  <CompareRow factor='Dose per administration' iv='250–1,000mg per drip' inj='100–200mg per injection' />
                  <CompareRow factor='Frequency' iv='4–10 sessions over weeks' inj='1–3x weekly self-administered' />
                  <CompareRow factor='Convenience' iv='1–4 hour clinic visit per session' inj='30 seconds at home' />
                  <CompareRow factor='Travel required' iv='Yes (clinic visit)' inj='No' />
                  <CompareRow factor='Prescriber consult needed' iv='Yes' inj='Yes (telehealth)' />
                  <CompareRow factor='Adjacent peptide stacking' iv='Available at clinic (separate cost)' inj='Same provider (System Labs / Eden) bundles GLP-1, B-12, sermorelin' />
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Decision framework */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Which Path Fits You?
            </h2>
            <div className='space-y-3'>
              <DecisionRow
                ifClause='You want highest-dose NAD+ and don&rsquo;t mind clinic visits or cost'
                pick='IV Therapy at a longevity clinic'
                color='#7CA982'
              />
              <DecisionRow
                ifClause='You want the cost-effective alternative with same bioavailability bypass'
                pick='At-home subcutaneous injection at System Labs ($79 first month)'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You&rsquo;re building a complete GLP-1 + NAD+ + B-12 + sermorelin stack'
                pick='System Labs (one provider, all 4 programs, lowest aggregate cost)'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want format variety (nasal spray, oral, face cream)'
                pick='Eden Health (5 NAD+ formats — most variety in the verified stack)'
                color='#D4A33A'
              />
              <DecisionRow
                ifClause='You want lowest possible commitment to test NAD+'
                pick='Oral NAD+ supplement (lowest bioavailability but lowest entry cost)'
                color='#6B7B82'
              />
            </div>
          </div>
        </section>

        {/* Featured CTA */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='p-7 md:p-10 rounded-3xl' style={{ backgroundColor: '#F4EBD0', border: '2px solid #D4A33A' }}>
              <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7A6020' }}>
                Featured: Cheapest verified NAD+ in May 2026
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                System Labs — NAD+ Injection
              </h3>
              <div className='text-3xl font-bold mb-3' style={{ color: '#D4A33A' }}>$79 first month / $149/mo</div>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Subcutaneous NAD+ injection from a LegitScript-accredited 503A pharmacy. Same GI bypass as IV therapy
                at a fraction of the cost. Add GLP-1 ($179/mo), B-12 ($89/mo), or oral sermorelin ($79 first month)
                under a single intake — System Labs is the only verified provider covering the full longevity stack.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={systemLabsUrl}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with System Labs <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/providers/system-labs'
                  className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  Read Full Review
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedGuides currentPath="/nad-iv-therapy" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Stack GLP-1 with NAD+ in 60 seconds.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                Our quiz routes you to the right provider for your full longevity stack — GLP-1, NAD+, B-12, sermorelin — under a single intake when possible.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Take the Quiz <ArrowRight className='h-4 w-4' />
                </Link>
                <Link
                  href='/best-compounded-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Top Compounded GLP-1
                </Link>
                <Link
                  href='/providers/system-labs'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  System Labs Review
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <EditorialReviewBox lastReviewed="2026-05-06" lastVerified="2026-05-06" />
      <GLP1Footer />
    </GLP1Layout>
  );
}

function VerdictCol({ rank, winner, price, detail }: { rank: string; winner: string; price: string; detail: string }) {
  return (
    <div className='text-center'>
      <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#6B7B82' }}>
        {rank}
      </div>
      <div className='text-xl font-bold mb-1' style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}>
        {winner}
      </div>
      <div className='text-2xl font-bold mb-2' style={{ color: '#D4A33A' }}>{price}</div>
      <p className='text-xs leading-relaxed' style={{ color: '#3D5560' }}>{detail}</p>
    </div>
  );
}

function ClinicRow({ type, dose, price, total }: { type: string; dose: string; price: string; total: string }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{type}</td>
      <td className='px-5 py-3 text-sm' style={{ color: '#3D5560' }}>{dose}</td>
      <td className='px-5 py-3 text-right font-bold' style={{ color: '#D4A33A' }}>{price}</td>
      <td className='px-5 py-3 text-right text-sm' style={{ color: '#3D5560' }}>{total}</td>
    </tr>
  );
}

function FormatRow({ format, provider, price, description, highlight = false }: { format: string; provider: string; price: string; description: string; highlight?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: highlight ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-2'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{format}</h3>
        <span className='text-sm' style={{ color: '#6B7B82' }}>via {provider}</span>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{description}</p>
    </div>
  );
}

function StackRow({ position, program, cost, provider }: { position: string; program: string; cost: string; provider: string }) {
  return (
    <div className='flex items-start gap-4 p-4 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='text-xs font-bold uppercase tracking-widest pt-1' style={{ color: '#7A6020', minWidth: '80px' }}>
        {position}
      </div>
      <div className='flex-1'>
        <div className='font-semibold mb-1' style={{ color: '#0E2A3A' }}>{program}</div>
        <div className='text-sm' style={{ color: '#3D5560' }}>{cost} · {provider}</div>
      </div>
    </div>
  );
}

function CompareRow({ factor, iv, inj }: { factor: string; iv: string; inj: string }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>{factor}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{iv}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#3D5560' }}>{inj}</td>
    </tr>
  );
}

function DecisionRow({ ifClause, pick, color }: { ifClause: string; pick: string; color: string }) {
  return (
    <div className='flex items-start gap-4 p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0 mt-0.5' style={{ color }} />
      <div>
        <div className='text-sm mb-1' style={{ color: '#6B7B82' }}>If…</div>
        <div className='text-base font-semibold mb-1' style={{ color: '#0E2A3A' }}>{ifClause}</div>
        <div className='text-sm' style={{ color: '#3D5560' }}>
          → <strong style={{ color }}>{pick}</strong>
        </div>
      </div>
    </div>
  );
}
