import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, Droplet, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Direct Meds Review May 2026: $224.10 Sublingual Tirzepatide — Only Verified Needle-Free GLP-1 | GLP1CompareHub',
  description:
    'Independent Direct Meds (directmeds.com) review verified May 2026. The only verified provider with compounded sublingual tirzepatide ($224.10/mo) and sublingual semaglutide ($179.10/mo). LegitScript + HIPAA certified, 53,000+ customer base, broad adjacent peptide menu.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/directmeds' },
  openGraph: {
    title: 'Direct Meds Review — Sublingual Tirzepatide $224.10/mo',
    description:
      'Only verified provider with compounded sublingual GLP-1 in our active stack. Plus injectable + adjacent peptides (Sermorelin, NAD+, Epithalon).',
    url: 'https://glp1comparehub.com/providers/directmeds',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: { '@type': 'MedicalBusiness', name: 'Direct Meds', url: 'https://directmeds.com' },
  reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5' },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Direct Meds legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Direct Meds (directmeds.com) is LegitScript + HIPAA certified, with a 53,000+ customer base. As of May 2026 it is approved on the Katalys affiliate network with $280 default CPA. Operating under valid 503A patient-specific compounding post-April 2026 enforcement shift, sourcing from LegitScript-accredited compounding pharmacies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Direct Meds cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct Meds verified May 2026 pricing: Compounded sublingual semaglutide $179.10/mo, compounded sublingual tirzepatide $224.10/mo, compounded injectable semaglutide $297/mo, compounded injectable tirzepatide $399/mo. Adjacent peptides: Sermorelin $299.99/mo, NAD+, Epithalon, plus hair (Capilyn $89/mo) and hair-loss (Minoxalune $89/mo) products.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is sublingual tirzepatide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sublingual tirzepatide is a compounded liquid formulation administered under the tongue daily, where it absorbs through the sublingual mucosa into the bloodstream — bypassing the GI tract degradation that destroys oral peptides. Direct Meds is the only verified provider in our active May 2026 stack offering compounded sublingual tirzepatide. Bioavailability of sublingual peptides has not been independently characterized in published trials, so patients should expect possibly reduced efficacy compared to injectable tirzepatide. The format is real and unique among active providers; it is not FDA-approved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is sublingual tirzepatide as effective as injectable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No published clinical trial has compared compounded sublingual tirzepatide to branded injectable Zepbound or compounded injectable tirzepatide. The clinical efficacy data from SURMOUNT-1 (20.2% average weight loss at 72 weeks on 15mg injectable) does NOT automatically transfer to sublingual versions. Bioavailability is generally lower for peptides taken sublingually vs subcutaneously. Many patients on Direct Meds sublingual report subjective results, but the evidence is anecdotal. Set expectations of possibly reduced efficacy in exchange for needle-free administration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Direct Meds accept HSA/FSA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Direct Meds accepts HSA/FSA payment for eligible compounded medications. The platform is HIPAA-compliant and works with standard health spending accounts where the prescribed medication is HSA-eligible (most compounded GLP-1 prescriptions qualify when prescribed for an FDA-recognized weight or metabolic condition). Verify with your HSA/FSA administrator before purchase if eligibility is critical.',
      },
    },
  ],
};

export default function DirectMedsReviewPage() {
  const provider = getProviderBySlug('directmeds');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'directmeds')
    .slice(0, 5);

  const directmedsAffiliate = buildAffiliateUrl('glp1-directmeds', 'providers-directmeds-review');

  return (
    <GLP1Layout>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <GLP1Header />

      <div className='border-b' style={{ backgroundColor: '#F4EBD0', borderColor: '#E5DDC8' }}>
        <div className='max-w-7xl mx-auto px-4 md:px-6 py-2 text-xs text-center' style={{ color: '#7A6020' }}>
          <strong>Affiliate Disclosure:</strong> This page contains affiliate links.{' '}
          <Link href='/affiliate-disclosure' className='underline'>Full disclosure</Link>.
        </div>
      </div>

      <main>
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>Direct Meds Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>Direct Meds</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Sublingual / Needle-Free
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              The only verified provider in our active May 2026 stack with compounded sublingual GLP-1. $224.10/mo for sublingual tirzepatide drops, $179.10/mo for sublingual semaglutide. LegitScript + HIPAA certified, 53,000+ customers.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 6, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · directmeds.com</span>
            </div>
          </div>
        </section>

        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='Rating' value='4.5 / 5' />
              <StatCard label='Sublingual Sema' value='$179.10/mo' highlight />
              <StatCard label='Sublingual Tirz' value='$224.10/mo' highlight />
              <StatCard label='Injectable Tirz' value='$399/mo' />
              <StatCard label='Customers' value='53,000+' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              Direct Meds is the only verified provider with compounded sublingual GLP-1 in our active stack. Pricing
              Gronk-verified May 6, 2026. LegitScript + HIPAA certified.
            </p>
          </div>
        </section>

        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who Direct Meds Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick Direct Meds if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You have strong needle aversion but still want compounded GLP-1
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want LegitScript + HIPAA certification (compliance-conscious buyers)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re running a peptide stack (Sermorelin, NAD+, Epithalon)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    HSA/FSA payment matters for tax-advantaged spending
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
                    You want trial-validated efficacy (sublingual lacks bioavailability data vs injectable)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Lowest price matters most (System Labs $179/mo injectable wins on price)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want flat refill pricing (Direct Meds injectable tirz $399/mo is the highest in stack)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Branded GLP-1 (Wegovy/Zepbound) is required (Direct Meds is compounded only)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sublingual format deep dive */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Droplet className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Sublingual GLP-1 — The Direct Meds USP
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Sublingual administration means holding the medication under the tongue for 60-90 seconds, allowing
              absorption through the sublingual mucosa directly into the bloodstream. This bypasses both the needle
              (no injection) and the GI tract (no first-pass liver metabolism). Direct Meds is the only verified
              provider in our active May 2026 stack offering compounded GLP-1 in this format.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Why it exists:</strong> A meaningful subset of patients can&rsquo;t or won&rsquo;t use injectable
              GLP-1. Strong needle aversion, vasovagal response to injections, or simply lifestyle preference for daily
              oral dosing over weekly injection. Without a sublingual option, these patients either go without GLP-1
              entirely or pay much higher prices for branded oral semaglutide (Wegovy Pill at $149/mo, but a different
              molecule than tirzepatide).
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The honest read on bioavailability:</strong> No published clinical trial has measured how much
              sublingual tirzepatide actually reaches systemic circulation vs the injectable form. Sublingual
              bioavailability of peptides is generally lower than subcutaneous injection. The FDA-approved oral
              semaglutide (Rybelsus / Wegovy Pill) requires roughly 14-25mg orally to mimic 1-2mg injectable, suggesting
              ~5-10% bioavailability with permeation enhancers. Sublingual route may achieve different ratios — but
              Direct Meds&rsquo; specific compounded formulations have not been independently characterized.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Practical patient expectation:</strong> Plan for possibly reduced weight-loss efficacy compared
              to injectable. Some patients tolerate the daily-oral schedule meaningfully better than weekly injection
              and find the compliance + adherence benefit outweighs the bioavailability tradeoff. Others see weaker
              response and switch to injectable after a trial period. Worth testing if the alternative is "no treatment
              at all" due to needle aversion.
            </p>
            <p className='text-sm mt-4 italic' style={{ color: '#6B7B82' }}>
              See our <Link href='/oral-tirzepatide' className='underline' style={{ color: '#D4A33A' }}>full oral tirzepatide guide</Link>{' '}
              for the deeper read comparing sublingual drops, GLP-1 gum, and other needle-free formats.
            </p>
          </div>
        </section>

        {/* Pricing breakdown */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              Direct Meds Pricing (Verified May 2026)
            </h2>
            <div className='space-y-3'>
              <PricingProductRow
                product='Compounded Semaglutide (Sublingual Drops)'
                price='$179.10/mo'
                note='Cheapest sublingual GLP-1 in our active stack. Daily oral administration. Bioavailability uncharacterized vs injectable.'
                highlight
              />
              <PricingProductRow
                product='Compounded Tirzepatide (Sublingual Drops)'
                price='$224.10/mo'
                note='Cheapest needle-free tirzepatide in stack. Direct Meds is the only verified provider with this format.'
                highlight
              />
              <PricingProductRow
                product='Compounded Semaglutide (Injectable)'
                price='$297/mo'
                note='Standard subcutaneous injectable form. Higher bioavailability than sublingual.'
              />
              <PricingProductRow
                product='Compounded Tirzepatide (Injectable)'
                price='$399/mo'
                note='Highest tier — choose only if you specifically want both sublingual + injectable bundling. System Labs at $179/mo is much cheaper for injectable-only.'
              />
              <PricingProductRow
                product='Sermorelin (compounded)'
                price='$299.99/mo'
                note='Growth hormone secretagogue. Higher than System Labs ($79 first / $159 ongoing) but Direct Meds is more established for this peptide.'
              />
              <PricingProductRow
                product='NAD+ (compounded)'
                price='Verify at intake'
                note='Adjacent peptide for energy/longevity supplementation.'
              />
              <PricingProductRow
                product='Epithalon (compounded)'
                price='Verify at intake'
                note='Anti-aging peptide. Direct Meds is the only verified provider in our active stack offering Epithalon.'
              />
              <PricingProductRow
                product='Capilyn (Finasteride)'
                price='$89/mo'
                note='Hair loss treatment — adjacent vertical for cross-stack patients.'
              />
              <PricingProductRow
                product='Minoxalune (Minoxidil)'
                price='$89/mo'
                note='Hair regrowth treatment.'
              />
            </div>
          </div>
        </section>

        {/* Compliance + LegitScript */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <ShieldCheck className='h-6 w-6' style={{ color: '#7CA982' }} />
              LegitScript + HIPAA Certification (Strongest Compliance Posture in Active Stack)
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              Direct Meds carries the strongest publicly-disclosed compliance certifications in our active May 2026
              stack: <strong>LegitScript certified</strong> (independent verification of pharmacy practices),
              <strong> HIPAA compliant</strong> (patient data protection meeting federal healthcare privacy standards),
              and operating under valid 503A patient-specific compounding post-April 2026 enforcement.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>Why this matters in May 2026:</strong> The April 1 FDA enforcement shift restricting 503A
              pharmacies to true patient-specific compounding put pressure on every telehealth provider in the space.
              LegitScript-certified providers are vetted for ongoing pharmacy practice compliance — a real
              differentiator vs lower-tier compounded telehealth providers whose pharmacy sourcing isn&rsquo;t externally
              validated. For compliance-conscious buyers, Direct Meds is the safest pick in the active stack.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='LegitScript-certified pharmacy practices (independent verification)' />
              <ComplianceRow title='HIPAA-compliant patient data handling' />
              <ComplianceRow title='Operating under valid 503A patient-specific compounding (post-April 2026)' />
              <ComplianceRow title='HSA/FSA payment accepted for eligible compounded medications' />
              <ComplianceRow title='53,000+ customer base' />
              <ComplianceRow title='Next-business-day shipping on confirmed orders' />
            </div>
          </div>
        </section>

        {/* Direct Meds vs the field */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Direct Meds vs the Field
            </h2>
            <div className='space-y-4'>
              <CompetitorRow
                competitor='vs Embody (gum format $149 / $299)'
                winner='Both unique; tied on needle-free differentiation'
                analysis={`Embody and Direct Meds are the two providers in the active stack with needle-free compounded GLP-1 — Embody via gum (chewable buccal absorption), Direct Meds via sublingual drops (under-tongue absorption). Embody has higher realized EPC ($4.60 vs Direct Meds no Katalys EPC data yet). Direct Meds wins on LegitScript certification and broader peptide menu (Epithalon, Sermorelin, NAD+, hair products). Pick gum for daily chewing routine; pick sublingual for daily under-tongue dosing.`}
              />
              <CompetitorRow
                competitor='vs System Labs ($179 injectable)'
                winner='System Labs on price; Direct Meds on format'
                analysis={`System Labs wins decisively on price for injectable GLP-1 ($179 vs Direct Meds $297-$399). Direct Meds wins on sublingual availability and LegitScript certification. If price is the driver, System Labs. If sublingual format or compliance certifications matter, Direct Meds.`}
              />
              <CompetitorRow
                competitor='vs Eden Health (5-format NAD+)'
                winner='Eden on NAD+ breadth; Direct Meds on GLP-1 format'
                analysis={`Eden has the broadest NAD+ menu (5 formats: injection, nasal spray, face cream, patches, oral). Direct Meds has more focused adjacent peptide menu (Sermorelin, NAD+, Epithalon) but less variety per peptide. For a multi-format NAD+ stack, Eden. For sublingual GLP-1 + standard adjacent peptides, Direct Meds.`}
              />
              <CompetitorRow
                competitor='vs Care Bare Rx (multi-vertical $199+)'
                winner='Care Bare on weight + sexual health bundling; Direct Meds on peptide expertise'
                analysis={`Care Bare bundles weight + hair + sexual health under one provider. Direct Meds offers some hair products (Capilyn, Minoxalune) but doesn't market them as a primary cross-sell. Pick Care Bare for one-platform multi-vertical care; pick Direct Meds if peptides + GLP-1 sublingual are the primary needs.`}
              />
              <CompetitorRow
                competitor='vs Gala Health ($179-199 3-mo plan)'
                winner='Gala on bundled price; Direct Meds on flexibility + format'
                analysis={`Gala is cheaper IF you commit to 3 months. Direct Meds offers month-to-month and the unique sublingual format. If 3-month commitment is acceptable and you want lowest bundled price, Gala. If you want format choice (sublingual + injectable + peptides) without commitment, Direct Meds.`}
              />
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
                Best Sublingual / Needle-Free
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Get Sublingual Tirzepatide for $224.10/mo
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Daily under-tongue drops. No needles. LegitScript + HIPAA certified. 53,000+ customers.
                Plus injectable, sublingual semaglutide, sermorelin, NAD+, and adjacent hair-care products under
                one provider. HSA/FSA accepted.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={directmedsAffiliate}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with Direct Meds <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/oral-tirzepatide'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  See Oral Tirzepatide Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare Direct Meds to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 6, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-directmeds-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath='/providers/directmeds' />

        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Skip the needle. Get sublingual GLP-1 from a LegitScript-certified pharmacy.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $179.10/mo sublingual semaglutide. $224.10/mo sublingual tirzepatide. Daily under-tongue dosing.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={directmedsAffiliate}
                  target='_blank'
                  rel='noopener noreferrer sponsored'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start Direct Meds <ArrowRight className='h-4 w-4' />
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
                  Oral Tirzepatide Guide
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

function PricingProductRow({ product, price, note, highlight = false }: { product: string; price: string; note: string; highlight?: boolean }) {
  return (
    <div
      className='p-5 rounded-2xl bg-white'
      style={{ border: highlight ? '2px solid #D4A33A' : '1px solid #E5DDC8' }}
    >
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{product}</h3>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
        {highlight && (
          <span className='text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Direct Meds USP
          </span>
        )}
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{note}</p>
    </div>
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
