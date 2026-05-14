import type { Metadata } from 'next';
import Link from 'next/link';
import { GLP1Layout } from '@/components/glp1/GLP1Layout';
import { GLP1Header } from '@/components/glp1/GLP1Header';
import { GLP1Footer } from '@/components/glp1/GLP1Footer';
import { GLP1ComparisonTable } from '@/components/glp1/GLP1ComparisonTable';
import { RelatedGuides } from '@/components/glp1/RelatedGuides';
import { primaryProviders, getProviderBySlug } from '@/lib/glp1-providers';
import { buildAffiliateUrl } from '@/lib/affiliate-links';
import { ArrowRight, AlertCircle, CircleCheck, Calendar, Award, ShieldCheck, Sparkles, DollarSign, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'System Labs Review May 2026: $179 GLP-1, $79 NAD+, $89 B-12 — Cheapest Longevity Stack | GLP1CompareHub',
  description:
    'Independent System Labs (systemlabs.com) review verified May 2026. Lowest GLP-1 entry price in our active stack at $179/mo. NAD+ injection $79 first month, B-12 $89/mo, oral sermorelin $79 first month. The full longevity stack from a single LegitScript-accredited provider.',
  alternates: { canonical: 'https://glp1comparehub.com/providers/system-labs' },
  openGraph: {
    title: 'System Labs Review — $179 GLP-1 + Full Longevity Stack',
    description:
      'Lowest GLP-1 entry price in our active stack. Plus the only verified provider covering NAD+, B-12, and sermorelin (oral + injectable) in one platform.',
    url: 'https://glp1comparehub.com/providers/system-labs',
    siteName: 'GLP1CompareHub',
    type: 'article',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'MedicalBusiness',
    name: 'System Labs',
    url: 'https://systemlabs.com',
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: '4.5',
    bestRating: '5',
  },
  author: { '@type': 'Person', name: 'Chad Simpson', url: 'https://glp1comparehub.com/author/chad-simpson' },
  publisher: { '@type': 'Organization', name: 'GLP1CompareHub', url: 'https://glp1comparehub.com' },
  datePublished: '2026-05-05',
  dateModified: '2026-05-05',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is System Labs legit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. System Labs (systemlabs.com) is a US-based telehealth platform offering compounded GLP-1, NAD+, B-12, and sermorelin from licensed prescribers and lab-tested certified compounding pharmacies. As of May 2026, System Labs is approved on the Katalys affiliate network with $100 default CPA across 4 cross-vertical payout tiers (Anti-aging, B-12, GLP-1, NAD+). Lower CPA than dedicated GLP-1 brands but offers the broadest adjacent-peptide menu in our active stack.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does System Labs cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'System Labs prices: Compounded GLP-1/GIP at $179/mo (lowest verified entry in our active stack), NAD+ injection at $149/mo with $79 first month, B-12 (MIC+B12) at $89/mo, oral compounded sermorelin at $159/mo with $79 first month, injectable sermorelin at $219/mo with $109 first month. Each program is priced separately — there is no bundled discount, but you can run multiple programs under a single intake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is System Labs cheaper than other compounded GLP-1 providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two reasons. (1) System Labs has lower marketing investment in conversion design — the $100 default CPA on the Katalys network is roughly half of dedicated GLP-1 brands like Embody ($400) or Eden Health ($300). Lower acquisition cost lets them charge less per customer. (2) The longevity-focused multi-vertical model creates cross-sell revenue from NAD+, B-12, and sermorelin that subsidizes the GLP-1 entry price. Patients running a 3-program stack at System Labs are unusually profitable customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the System Labs longevity stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The "longevity stack" is the combination of GLP-1 ($179/mo) + NAD+ injection ($79 first month, $149 ongoing) + B-12 ($89/mo) + sermorelin ($79 first month for oral). Patients run all four programs under a single intake, with one provider review for the package. This is the combo biohacker pattern — GLP-1 for weight loss, NAD+ for cellular energy, B-12 for metabolic support, sermorelin for growth hormone optimization. No published clinical trial has tested this stack as a combination therapy. See our NAD+ IV therapy guide for the deeper read.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is System Labs FDA-approved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. System Labs offers compounded medications produced by 503A pharmacies under FDA exemptions. Compounded GLP-1, NAD+, B-12 (MIC+B12), and sermorelin are NOT FDA-approved drugs. The April 1, 2026 FDA enforcement shift restricted 503A pharmacies to true patient-specific compounding. As of May 5, 2026, System Labs continues operating under valid 503A exemptions. Verify provider status before purchase.',
      },
    },
  ],
};

export default function SystemLabsReviewPage() {
  const provider = getProviderBySlug('system-labs');
  const compoundedProviders = primaryProviders()
    .filter((p) => p.medicationType?.includes('Compounded') && p.status === 'Active' && p.slug !== 'system-labs')
    .slice(0, 5);

  const systemLabsAffiliate = buildAffiliateUrl('glp1-system-labs', 'providers-system-labs-review');

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
        {/* Header */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <nav className='text-xs mb-3' aria-label='Breadcrumb'>
              <Link href='/' style={{ color: '#6B7B82' }}>Home</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <Link href='/providers' style={{ color: '#6B7B82' }}>Providers</Link>
              <span style={{ color: '#6B7B82' }}> / </span>
              <span style={{ color: '#0E2A3A' }}>System Labs Review</span>
            </nav>
            <div className='flex flex-wrap items-baseline gap-3 mb-4'>
              <h1
                className='text-3xl md:text-5xl font-bold leading-[1.1]'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                <span style={{ color: '#D4A33A' }}>System Labs</span> Review 2026
              </h1>
              <span className='text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-flex items-center gap-1' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
                <Award className='h-3 w-3' />
                Best Value
              </span>
            </div>
            <p className='text-lg md:text-xl mb-3' style={{ color: '#3D5560' }}>
              Lowest GLP-1 entry price in our active May 2026 stack ($179/mo). The only verified provider covering NAD+, B-12, and sermorelin (oral + injectable) in one platform — the full longevity stack at systemlabs.com.
            </p>
            <div className='flex items-center gap-3 text-xs' style={{ color: '#6B7B82' }}>
              <span className='flex items-center gap-1'>
                <Calendar className='h-3 w-3' /> Updated May 5, 2026
              </span>
              <span>·</span>
              <span>By <Link href='/author/chad-simpson' className='underline'>Chad Simpson</Link></span>
              <span>·</span>
              <span>Verified provider · systemlabs.com</span>
            </div>
          </div>
        </section>

        {/* Quick stats card */}
        <section className='py-10 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
              <StatCard label='GLP-1' value='$179/mo' highlight />
              <StatCard label='NAD+ Injection' value='$79 first' highlight />
              <StatCard label='B-12 / MIC' value='$89/mo' />
              <StatCard label='Sermorelin (Oral)' value='$79 first' />
              <StatCard label='Rating' value='4.5 / 5' />
            </div>
            <p className='text-xs italic mt-4 text-center' style={{ color: '#6B7B82' }}>
              The only verified provider in our active May 2026 stack offering all 4 programs (GLP-1, NAD+, B-12, sermorelin)
              under a single intake. First-month discounts on the adjacent-peptide tier across the board.
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F0EBE0' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              TL;DR — Who System Labs Is For
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #7CA982' }}>
                <div className='text-xs font-bold uppercase tracking-widest mb-2' style={{ color: '#7CA982' }}>
                  Pick System Labs if…
                </div>
                <ul className='text-sm space-y-2' style={{ color: '#3D5560' }}>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want the absolute lowest sustained GLP-1 entry price ($179/mo)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You&rsquo;re a biohacker stacking GLP-1 with NAD+, B-12, or sermorelin
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You want one provider for multiple programs (single intake, single dashboard)
                  </li>
                  <li className='flex items-start gap-2'>
                    <CircleCheck className='h-4 w-4 mt-0.5 flex-shrink-0' style={{ color: '#7CA982' }} />
                    You like first-month discounts on add-on programs ($79 NAD+, $79 oral sermorelin)
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
                    You want needle-free GLP-1 (Direct Meds sublingual or Embody gum)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want flat refill pricing across dose escalation (Embody $299/mo flat)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    Strong brand recognition matters (Eden Health, MEDVi, SkinnyRx have larger followings)
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='inline-block w-1 h-1 rounded-full mt-2 flex-shrink-0' style={{ backgroundColor: '#B14739' }} />
                    You want bundled all-inclusive 3-month pricing (Gala Health $179-199 includes everything)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* The longevity stack — System Labs USP */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <Sparkles className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The Longevity Stack — System Labs&rsquo; Unique Position
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              System Labs is the only verified provider in our active May 2026 stack offering compounded GLP-1
              alongside NAD+, B-12 (MIC+B12), and sermorelin (both oral and injectable formats) under a single
              telehealth platform. For biohackers running a longevity stack — GLP-1 for weight loss + NAD+ for
              cellular energy + B-12 for metabolic support + sermorelin for growth hormone optimization — running
              all four through one provider eliminates the friction of multiple intakes, multiple shipments, and
              multiple billing cycles.
            </p>

            <div className='space-y-3 mb-5'>
              <ProgramRow
                program='Compounded GLP-1/GIP'
                price='$179/mo'
                firstMonth='—'
                role='Foundation — weight loss + appetite suppression'
              />
              <ProgramRow
                program='NAD+ Injection (Subcutaneous)'
                price='$149/mo'
                firstMonth='$79 first month'
                role='Energy support — cellular metabolism, mitochondrial function'
              />
              <ProgramRow
                program='B-12 / MIC+B12 Injection'
                price='$89/mo'
                firstMonth='—'
                role='Metabolic support — energy, nutrient repletion'
              />
              <ProgramRow
                program='Sermorelin (Oral compounded)'
                price='$159/mo'
                firstMonth='$79 first month'
                role='Growth hormone secretion support — sleep, recovery, body composition'
              />
              <ProgramRow
                program='Sermorelin (Injectable)'
                price='$219/mo'
                firstMonth='$109 first month'
                role='Higher-bioavailability growth hormone option'
              />
            </div>

            <div className='p-5 rounded-2xl' style={{ backgroundColor: '#F4EBD0', border: '1px solid #D4A33A' }}>
              <div className='text-sm font-bold mb-2' style={{ color: '#7A6020' }}>
                Total stack cost (GLP-1 + NAD+ + B-12 + oral sermorelin)
              </div>
              <div className='text-base mb-2' style={{ color: '#3D5560' }}>
                <strong>First month:</strong> $179 + $79 + $89 + $79 = <strong style={{ color: '#D4A33A' }}>$426</strong>
              </div>
              <div className='text-base' style={{ color: '#3D5560' }}>
                <strong>Ongoing monthly:</strong> $179 + $149 + $89 + $159 = <strong style={{ color: '#D4A33A' }}>$576/mo</strong>
              </div>
              <p className='text-xs mt-3' style={{ color: '#6B7B82' }}>
                Stack any subset. Many patients start with just GLP-1 ($179/mo) and add NAD+ in month 2 once they
                see how their body responds. No long-term commitments on any program.
              </p>
            </div>
          </div>
        </section>

        {/* The math: cheapest GLP-1 entry */}
        <section className='py-10 md:py-14' style={{ backgroundColor: '#F8F4ED' }}>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5 flex items-center gap-3'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              <DollarSign className='h-6 w-6' style={{ color: '#D4A33A' }} />
              The $179 GLP-1 Math — How System Labs Wins on Price
            </h2>
            <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
              The cheapest GLP-1 entry in our verified active stack:
            </p>
            <div className='overflow-x-auto rounded-2xl mb-5' style={{ border: '1px solid #E5DDC8' }}>
              <table className='w-full text-sm'>
                <thead>
                  <tr style={{ backgroundColor: '#F0EBE0' }}>
                    <th className='text-left px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Provider</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#0E2A3A' }}>Sustained Monthly Price</th>
                    <th className='text-center px-5 py-3 text-xs font-bold uppercase tracking-wider' style={{ color: '#6B7B82' }}>Commitment</th>
                  </tr>
                </thead>
                <tbody>
                  <PriceRow provider='System Labs' price='$179/mo' commitment='None — cancel anytime' winner />
                  <PriceRow provider='Gala Health' price='$179-$199/mo' commitment='3-month bundled' />
                  <PriceRow provider='Care Bare Rx' price='From $199/mo' commitment='None' />
                  <PriceRow provider='Eden Health' price='$229-$249/mo (after $149 intro)' commitment='None' />
                  <PriceRow provider='Direct Meds (sublingual)' price='$224.10/mo' commitment='None' />
                  <PriceRow provider='Embody' price='$299/mo flat (after $149 first)' commitment='None' />
                </tbody>
              </table>
            </div>
            <p className='text-xs italic' style={{ color: '#6B7B82' }}>
              All pricing Gronk-verified May 5, 2026. System Labs leads on sustained monthly price with no commitment
              required. For first-month-only price comparison, Embody&rsquo;s Spring Forward $200-off promo lands at
              $149 — but that&rsquo;s a promo, not the sustained rate.
            </p>
          </div>
        </section>

        {/* Why the lower CPA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-4xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-5'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Honest Read: Why System Labs Has Lower Marketing Investment
            </h2>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              System Labs&rsquo; Katalys CPA is $100 default — meaningfully lower than Embody ($400), Gala ($349),
              Eden ($300), or Care Bare ($300). The translation: System Labs invests less in customer acquisition,
              partly because the multi-vertical model creates strong cross-sell revenue from NAD+ and sermorelin
              that subsidizes the GLP-1 entry. Lower CPA means lower per-customer marketing budget.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What this means for buyers:</strong> The website conversion design and onboarding flow may be
              less polished than higher-CPA competitors. The brand is less recognized than Eden Health or MEDVi.
              The realized affiliate EPC and conversion rate were not yet available on the Katalys dashboard as of
              May 5, 2026 — meaning fewer affiliate-driven conversions had run through the platform vs Embody (which
              had $4.60 EPC and 1.31% CR by then).
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>What this doesn&rsquo;t mean:</strong> System Labs is not lower-quality. The pricing differential
              reflects business model (multi-vertical longevity vs single-vertical GLP-1), not product quality.
              The pharmacy is lab-tested and certified. The provider review is real. The medication ships cold-chain.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              <strong>The honest call:</strong> If your priority is lowest entry price, System Labs wins. If your
              priority is most-polished onboarding experience and biggest brand, Eden Health or Embody win. Both
              choices are defensible.
            </p>
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
              System Labs sources peptides and therapies from certified compounding pharmacies that conduct lab-testing
              on batches. Post-April 1, 2026, when the FDA ended enforcement discretion for routine 503A telehealth-scale
              compounding of GLP-1, System Labs continues operating under valid 503A patient-specific exemptions.
            </p>
            <p className='text-base mb-4 leading-relaxed' style={{ color: '#3D5560' }}>
              The April 30 FDA proposal targeting 503B outsourcing facilities does not directly affect System Labs&rsquo;
              503A pharmacy supply chain. However, the broader compounded peptide landscape (NAD+, sermorelin) is
              less FDA-scrutinized than GLP-1 and operates under different exemption frameworks. Both NAD+ and
              sermorelin have ongoing FDA review activity tied to longevity-clinic marketing claims.
            </p>
            <div className='space-y-3 mt-5'>
              <ComplianceRow title='Lab-tested peptides from certified compounding pharmacies' />
              <ComplianceRow title='Licensed prescribers with multi-state coverage' />
              <ComplianceRow title='Cold-chain shipping for injectable products' />
              <ComplianceRow title='No long-term commitments on any program' />
              <ComplianceRow title='Operating under valid 503A patient-specific compounding (post-April 2026)' />
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
                Best Value · Cheapest GLP-1 Entry
              </div>
              <h3
                className='text-2xl md:text-3xl font-bold mb-3'
                style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
              >
                Start System Labs at $179/mo
              </h3>
              <p className='text-base mb-5 leading-relaxed' style={{ color: '#3D5560' }}>
                Lowest sustained GLP-1 monthly price in our verified May 2026 stack. Add NAD+ at $79 first month,
                B-12 at $89/mo, or oral sermorelin at $79 first month for a complete longevity stack — all under
                a single intake. No long-term commitments.
              </p>
              <div className='flex flex-wrap gap-3'>
                <a
                  href={systemLabsAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-md text-white'
                  style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 100%)' }}
                >
                  Get Started with System Labs <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/nad-iv-therapy'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all'
                  style={{ color: '#D4A33A', border: '1.5px solid #D4A33A' }}
                >
                  See NAD+ Therapy Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Compare to other providers */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-7xl mx-auto px-4 md:px-6'>
            <h2
              className='text-2xl md:text-3xl font-bold mb-2 text-center'
              style={{ color: '#0E2A3A', fontFamily: '"Playfair Display", "Georgia", serif' }}
            >
              Compare System Labs to Other Verified Providers
            </h2>
            <p className='text-sm mb-6 text-center' style={{ color: '#6B7B82' }}>
              Five other Katalys-active programs. Pricing verified May 5, 2026.
            </p>
            <GLP1ComparisonTable
              providers={compoundedProviders}
              source='providers-system-labs-review'
              heading='Other Verified Compounded GLP-1 Programs'
            />
          </div>
        </section>

        <RelatedGuides currentPath="/providers/system-labs" />

        {/* Final CTA */}
        <section className='py-10 md:py-14 bg-white'>
          <div className='max-w-3xl mx-auto px-4 md:px-6'>
            <div
              className='rounded-3xl p-7 md:p-10 text-center text-white'
              style={{ background: 'linear-gradient(135deg, #D4A33A 0%, #C99230 50%, #B88A2A 100%)' }}
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3' style={{ fontFamily: '"Playfair Display", "Georgia", serif' }}>
                Build your longevity stack at the lowest entry price.
              </h2>
              <p className='text-sm md:text-base mb-6 opacity-95'>
                $179/mo GLP-1 + add NAD+, B-12, or sermorelin under a single intake. Cancel anytime.
              </p>
              <div className='flex flex-wrap justify-center gap-3'>
                <a
                  href={systemLabsAffiliate}
                  target='_blank'
                  rel='sponsored nofollow noopener noreferrer'
                  className='inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-full font-bold transition-all hover:-translate-y-0.5 shadow-lg'
                  style={{ color: '#D4A33A' }}
                >
                  Start System Labs <ArrowRight className='h-4 w-4' />
                </a>
                <Link
                  href='/match'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Take the Quiz
                </Link>
                <Link
                  href='/cheapest-tirzepatide-online'
                  className='inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all'
                  style={{ color: 'white', border: '1.5px solid white' }}
                >
                  Compare Cheapest Options
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

function ProgramRow({ program, price, firstMonth, role }: { program: string; price: string; firstMonth: string; role: string }) {
  return (
    <div className='p-5 rounded-2xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <div className='flex flex-wrap items-baseline gap-3 mb-1'>
        <h3 className='font-bold' style={{ color: '#0E2A3A' }}>{program}</h3>
        <span className='text-base font-bold' style={{ color: '#D4A33A' }}>{price}</span>
        {firstMonth !== '—' && (
          <span className='text-sm' style={{ color: '#7CA982' }}>{firstMonth}</span>
        )}
      </div>
      <p className='text-sm leading-relaxed' style={{ color: '#3D5560' }}>{role}</p>
    </div>
  );
}

function PriceRow({ provider, price, commitment, winner = false }: { provider: string; price: string; commitment: string; winner?: boolean }) {
  return (
    <tr className='border-t bg-white' style={{ borderColor: '#E5DDC8' }}>
      <td className='px-5 py-3 font-semibold' style={{ color: '#0E2A3A' }}>
        {provider}
        {winner && (
          <span className='inline-block ml-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full' style={{ backgroundColor: '#F4EBD0', color: '#7A6020' }}>
            Winner
          </span>
        )}
      </td>
      <td className='px-5 py-3 text-center font-bold' style={{ color: winner ? '#D4A33A' : '#3D5560' }}>{price}</td>
      <td className='px-5 py-3 text-center text-sm' style={{ color: '#6B7B82' }}>{commitment}</td>
    </tr>
  );
}

function ComplianceRow({ title }: { title: string }) {
  return (
    <div className='flex items-center gap-3 p-3 rounded-xl bg-white' style={{ border: '1px solid #E5DDC8' }}>
      <CircleCheck className='h-5 w-5 flex-shrink-0' style={{ color: '#7CA982' }} />
      <span className='text-sm font-semibold' style={{ color: '#0E2A3A' }}>{title}</span>
    </div>
  );
}
