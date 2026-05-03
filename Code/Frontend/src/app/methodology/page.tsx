import type { Metadata } from 'next';
import Link from 'next/link';
import { headers } from 'next/headers';
import { ChevronRight, CheckCircle2, AlertCircle, Microscope, Search, BookOpen, RefreshCw } from 'lucide-react';
import { TrustedSources } from '@/components/shared/TrustedSources';
import { SHGLayout } from '@/components/shg/SHGLayout';
import { SHGHeader } from '@/components/shg/SHGHeader';
import { SHGFooter } from '@/components/shg/SHGFooter';
import { AHBLayout } from '@/components/ahb/AHBLayout';
import { AHBHeader } from '@/components/ahb/AHBHeader';
import { AHBFooter } from '@/components/ahb/AHBFooter';
import { ReviewLayout } from '@/components/reviews/ReviewLayout';
import { ReviewHeader } from '@/components/reviews/ReviewHeader';
import { ReviewFooter } from '@/components/reviews/ReviewFooter';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header as CRRHeader } from '@/components/landing/Header';
import { Footer as CRRFooter } from '@/components/landing/Footer';
import { GLP1TrustPage } from '@/components/glp1/GLP1TrustPage';

// =============================================================================
// HOST-AWARE /methodology PAGE
// =============================================================================
// Each domain gets its own methodology — what we evaluate, how we evaluate it,
// what disqualifies a product/installer, freshness cadence. Critical 2026
// E-E-A-T trust signal.
// =============================================================================

type Domain = 'crr' | 'grh' | 'shg' | 'ahb' | 'glp1';

interface DomainConfig {
  brand: string;
  canonical: string;
  category: string;
  intro: string;
  whatWeEvaluate: { title: string; body: string }[];
  dataSources: string[];
  disqualifiers: string[];
  freshness: string;
  conflictsBlurb: string;
}

const CONFIGS: Record<Domain, DomainConfig> = {
  crr: {
    brand: 'California Rate Relief',
    canonical: 'https://ratereliefca.com/methodology',
    category: 'California solar installers and energy programs',
    intro:
      'California Rate Relief evaluates solar installers, financing options, and rate programs available to California homeowners. We are a research-led publication; we read CSLB licensing records, BBB complaint files, court records, financing contracts, and homeowner reports, then write what we find. This page documents how we do that.',
    whatWeEvaluate: [
      { title: 'License & insurance status', body: 'CSLB C-46 license active and in good standing; bond filed; workers-comp on file; appropriate liability coverage for the installer\'s service area.' },
      { title: 'Complaint patterns', body: 'BBB complaint volume relative to install count, not raw count. CSLB disciplinary actions. Small-claims court filings. Pattern-of-conduct, not a single bad install.' },
      { title: 'Financing transparency', body: 'Whether the company quotes cash price, loan price, and lease/PPA price clearly; whether dealer fees are disclosed; whether escalator clauses are explained.' },
      { title: 'Installation quality signals', body: 'Permitting compliance, inspection pass rate, equipment vendor relationships, employee vs subcontractor crews, monitoring quality.' },
      { title: 'Customer service post-install', body: 'Warranty claims handling, monitoring response, the "what happens when it breaks in year 12" question.' },
    ],
    dataSources: [
      'California Contractors State License Board (CSLB) public records',
      'Better Business Bureau (BBB) complaint files',
      'California Department of Insurance bond and license registry',
      'Court of California Superior Court records (small claims and civil)',
      'Solar Reviews aggregated homeowner ratings',
      'EnergySage installer ratings (when available)',
      'Public NEM 3 enrollment data from CPUC',
      'Direct interviews with homeowners (when arranged)',
    ],
    disqualifiers: [
      'Inactive or suspended CSLB license',
      'Pattern of unresolved complaints exceeding 1.5% of install count',
      'Bankruptcy filing or shutdown announcement (we publish a defunct-cautionary page rather than a normal review)',
      'Documented bait-and-switch financing or dealer-fee non-disclosure',
      'Refusal to provide written contracts before deposit',
    ],
    freshness:
      'Installer reviews are reviewed at least every 90 days, sooner if a CSLB action, BBB pattern shift, or major news event occurs. Each review carries a "Last reviewed" date stamp visible to readers.',
    conflictsBlurb:
      'California Rate Relief earns lead-referral fees when readers connect with installers via our forms. We do not accept payment for placement; ratings reflect our research, not commercial relationships. Any installer who pays us a referral fee is disclosed explicitly on their review page.',
  },
  grh: {
    brand: 'GreenReviewsHub',
    canonical: 'https://greenreviewshub.com/methodology',
    category: 'green-energy gear and home electrification products',
    intro:
      'GreenReviewsHub is a hands-on review publication covering portable power stations, e-bikes, mini splits, smart thermostats, generators, heat pump water heaters, and other green-energy gear. Chad personally tests each top-pick product — over 500 hours of real-world testing across the catalog as of April 2026 — in his own home, on his own grid, in real California conditions. Hands-on testing is the primary input; manufacturer specs, third-party lab data, and aggregated owner reports are used to verify, contextualize, and stress-test what we observed. This page documents what goes into a review.',
    whatWeEvaluate: [
      { title: 'Spec accuracy vs. real-world performance', body: 'Manufacturer-claimed capacity vs. tested capacity (when independent lab data exists). Run-time at 50% load vs. full load. Cold-weather and high-load derating.' },
      { title: 'Build quality signals', body: 'Owner-reported defect rate from aggregated reviews (not raw star count). Warranty length vs. typical failure window. Repairability and parts availability.' },
      { title: 'Total cost of ownership', body: 'Sticker price plus expected battery cycles, replacement part costs, install costs, and any subscription requirements.' },
      { title: 'Use-case fit', body: 'Which buyer is this for? Apartment dweller without panel access, RV owner, off-grid cabin, whole-home backup. We refuse to recommend a product as "best overall" without specifying for whom.' },
      { title: 'Safety and certifications', body: 'UL, ETL, FCC, CARB, BIFMA, and other applicable certifications. Battery chemistry (LFP vs NMC) for fire-risk profile.' },
    ],
    dataSources: [
      'Hands-on testing in our own home and yard (500+ hours across the catalog as of April 2026) — capacity under real load, noise, app reliability, charge speed, durability week-over-week',
      'Manufacturer published specifications (verified against the latest spec sheet, not marketing pages)',
      'Aggregated owner reviews (Amazon, REI, Home Depot, manufacturer site, owner forums)',
      'Independent lab tests (Project Farm, Consumer Reports, DPL Labs when accessible)',
      'YouTube long-form review channels with measured testing (not unboxing)',
      'Reddit owner subreddits for failure-mode patterns',
      'Warranty terms and customer service response time reports',
      'Direct manufacturer product manager Q&A when arranged',
    ],
    disqualifiers: [
      'Pattern of warranty-claim refusals across multiple owner reports',
      'Documented spec misrepresentation (capacity, output, cycle life)',
      'Discontinued product with no parts pipeline',
      'Manufacturer with active recall or safety advisory',
      'Subscription-required core functionality without disclosure at point of sale',
    ],
    freshness:
      'Round-up pages are reviewed every 60 days; single-product reviews every 90 days. Pricing and availability are spot-checked monthly. Each review carries a "Last reviewed" date stamp.',
    conflictsBlurb:
      'GreenReviewsHub earns affiliate commissions when readers buy through our links. We do not accept payment for placement, sponsored reviews, or rankings. Every product listed as a top pick has been hands-on tested in our own home or yard. When a comparison sub-pick or alternative is included without hands-on testing — typically because the unit was unavailable in our region or a requested review sample was not fulfilled — it is flagged explicitly on the page and excluded from any "Best Overall" or "Editor\'s Pick" slot.',
  },
  shg: {
    brand: 'SecureHomeGear',
    canonical: 'https://securehomegear.com/methodology',
    category: 'home security cameras, video doorbells, smart locks, and alarms',
    intro:
      'SecureHomeGear evaluates home security gear with a focus on privacy posture, real-world reliability, and the long-term ownership experience after the box is opened. We are a research-led publication; we read security advisories, encryption documentation, owner failure reports, and warrant-policy disclosures, then write what we find.',
    whatWeEvaluate: [
      { title: 'Privacy posture', body: 'End-to-end encryption (true E2E vs. "encrypted in transit"). Data retention policy. Warrant and subpoena policy. Local-only storage option. Whether audio/video is processed on-device or in the cloud.' },
      { title: 'Reliability', body: 'False-positive rate from owner reports. Latency from motion to notification. App crash rate. Cloud-service uptime (when verifiable).' },
      { title: 'App and software quality', body: 'iOS and Android update cadence. HomeKit, Alexa, Google Home, Matter integration accuracy. Sensible default settings.' },
      { title: 'Hardware durability', body: 'IP rating (water and dust ingress). Operating temperature range. Owner-reported failure rate at 1, 2, and 3 years.' },
      { title: 'Total cost', body: 'Subscription cost for cloud storage, AI features, professional monitoring. Whether core features are paywalled.' },
    ],
    dataSources: [
      'Manufacturer security disclosures and bug-bounty pages',
      'CVE database for documented vulnerabilities',
      'Owner reviews aggregated across Amazon, Best Buy, manufacturer site, and Reddit',
      'Independent lab tests (Tom\'s Guide, RTINGS, CNET when methodology is sound)',
      'Privacy-focused reporting (EFF, Mozilla Privacy Not Included)',
      'Public warrant transparency reports',
      'HomeKit / Matter community reports for integration quality',
    ],
    disqualifiers: [
      'Documented unencrypted storage of video on cloud servers',
      'Manufacturer refusing to publish a warrant policy',
      'Active CVE older than 90 days without a patch',
      'Pattern of owner-reported total-failure reports outside warranty',
      'Required subscription for core safety features (e.g. motion alerts) without clear point-of-sale disclosure',
    ],
    freshness:
      'Camera and brand reviews are reviewed every 90 days, sooner if a CVE or major firmware change occurs. Each review carries a "Last reviewed" date stamp.',
    conflictsBlurb:
      'SecureHomeGear earns affiliate commissions when readers buy through our links. We do not accept payment for placement, sponsored reviews, or rankings. Where we are direct partners with a manufacturer\'s affiliate program (e.g., Eufy via Impact.com), the relationship is disclosed on the brand-hub page.',
  },
  ahb: {
    brand: 'At Home Biohacking',
    canonical: 'https://athomebiohacking.com/methodology',
    category: 'at-home biohacking and wellness devices (red light therapy, cold plunge, infrared sauna, PEMF, vibration plates)',
    intro:
      'At Home Biohacking covers wellness devices that consumers buy and use at home. The category is YMYL-adjacent: the wrong recommendation can affect physical and financial wellbeing. We are a research-led publication anchored in peer-reviewed studies. This page documents the evidence hierarchy we use, what claims we will and will not make, and how we keep content current.',
    whatWeEvaluate: [
      { title: 'Evidence quality', body: 'Randomized controlled trials beat observational studies, which beat case reports, which beat anecdotes. We name the evidence tier when stating any health-relevant claim and link to the PMID or DOI.' },
      { title: 'Effect size and clinical relevance', body: 'A statistically significant 2% improvement is not the same as a clinically meaningful 30% improvement. We state effect sizes when known and call out when they are small.' },
      { title: 'Device specifications relative to studies', body: 'A red light panel that uses 660nm + 850nm at the irradiance levels used in published trials is more defensible than one that does not. We do not assume one device works because another in the category did.' },
      { title: 'Safety profile', body: 'Contraindications, interactions, populations who should not use the device (pregnancy, pacemakers, photosensitivity drugs, etc.).' },
      { title: 'Build quality and warranty', body: 'Same as our consumer-product peers: defect rate, warranty length, parts pipeline.' },
    ],
    dataSources: [
      'PubMed (peer-reviewed publications) — every health claim is backed by a PMID or DOI',
      'Cochrane reviews and systematic meta-analyses when available',
      'ClinicalTrials.gov for trial methodology',
      'Manufacturer specifications (verified against device manuals)',
      'Owner reviews for build-quality and warranty signals (not for efficacy)',
      'Adverse-event registries (FDA MedWatch, MAUDE database) for safety signals',
    ],
    disqualifiers: [
      'Unsupported medical claims (cures, treats, prevents disease) on the manufacturer page',
      'Device specs that do not match any device used in supportive published research',
      'Documented pattern of safety-relevant defects or recalls',
      'Refusal to honor warranty or hidden subscription gating safety features',
    ],
    freshness:
      'Health-claim pages are medically reviewed every 180 days against current PubMed indexing. Product reviews are refreshed every 90 days. Each page carries a "Last medically reviewed" date stamp where applicable.',
    conflictsBlurb:
      'At Home Biohacking earns affiliate commissions when readers buy through our links. We do not accept payment for placement, sponsored reviews, or rankings. We do not sell supplements, courses, or coaching, so we have no incentive to overstate device benefits. Content is for informational purposes and is not medical advice — readers with conditions should consult their physician before adopting any device.',
  },
  glp1: {
    brand: 'GLP1CompareHub',
    canonical: 'https://glp1comparehub.com/methodology',
    category: 'GLP-1 telehealth providers (semaglutide, tirzepatide, Wegovy, Zepbound, compounded options) and adjunctive peptide programs',
    intro:
      'GLP1CompareHub evaluates GLP-1 telehealth and compounding-pharmacy providers. The category is high-stakes YMYL: medication choice, dose protocol, and provider quality directly affect health outcomes. Every claim about efficacy or side effects is sourced to peer-reviewed clinical trials (NEJM, JAMA, Lancet) or to the FDA prescribing information. Pricing is verified directly from each provider every month.',
    whatWeEvaluate: [
      { title: 'Pricing transparency', body: 'Verified monthly directly from each provider. We flag hidden fees, lab costs, and cancellation policies. No commission-based reordering.' },
      { title: 'Quality certifications', body: 'Valisure, LegitScript, NABP, and state pharmacy board credentials weighted heavily. 503A vs 503B compounding compliance is documented per-provider.' },
      { title: 'Customer experience', body: 'Trustpilot ratings, BBB scores, Reddit cohort sentiment, and any verified clinical complaints filed.' },
      { title: 'Medication options', body: 'Variety of GLP-1 formulations (compounded sema/tirz, branded Wegovy/Zepbound, microdosing programs, sublingual alternatives), dose flexibility, and stacking options.' },
      { title: 'Provider qualifications', body: 'Board certification of prescribing physicians, state coverage, and consultation depth.' },
    ],
    dataSources: [
      'NEJM, JAMA, Lancet trial publications (STEP-1, SURMOUNT-1, SURMOUNT-5)',
      'FDA prescribing information for branded GLP-1 (Wegovy, Zepbound, Mounjaro, Ozempic)',
      'Provider websites (verified monthly for pricing, medications, terms)',
      'Trustpilot, BBB, Reddit (r/Semaglutide, r/Tirzepatide, r/Mounjaro)',
      'OfferVault and affiliate-network databases for verified CPA data',
      'FDA MedWatch and 503A/503B compounding-pharmacy registries',
    ],
    disqualifiers: [
      'Provider operating without verified state-pharmacy-board licensure',
      'Documented unsafe compounding practices or active FDA warning letter',
      'Misrepresentation of branded vs compounded medications at point of sale',
      'Refusal to provide written prescribing-physician credentials',
      'Pricing displayed on site materially different from actual checkout total',
    ],
    freshness:
      'Provider pricing reviewed monthly. Provider rankings refreshed quarterly. Medical claims reviewed every 180 days against PubMed indexing. Each page carries a "Last verified" and "Last reviewed" date stamp.',
    conflictsBlurb:
      'GLP1CompareHub earns affiliate commissions when readers sign up through our links — at no extra cost to you. We do not accept payment for placement in rankings, sponsored reviews, or pay-to-play editorial. Rankings are determined by the published methodology weights (25% medication options, 25% pricing, 20% quality certifications, 15% customer support, 15% plan flexibility). Content is for informational purposes and is not medical advice — always consult a licensed prescriber before starting, stopping, or modifying any GLP-1 medication.',
  },
};

async function getDomain(): Promise<Domain> {
  const hdrs = await headers();
  const host = (hdrs.get('host') || '').toLowerCase();
  if (host.includes('greenreviewshub')) return 'grh';
  if (host.includes('securehomegear')) return 'shg';
  if (host.includes('athomebiohacking')) return 'ahb';
  if (host.includes('glp1comparehub')) return 'glp1';
  return 'crr';
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const cfg = CONFIGS[domain];
  return {
    title: `Our Methodology — How ${cfg.brand} Evaluates ${cfg.category}`,
    description: `How ${cfg.brand} researches and evaluates ${cfg.category}. Data sources, disqualifying criteria, freshness cadence, conflict-of-interest disclosures.`,
    alternates: { canonical: cfg.canonical },
  };
}

interface Palette { fg: string; muted: string; mutedFg: string; accent: string; accentSoft: string; bg: string; cardBg: string; cardBorder: string; }

function MethodologyBody({ cfg, palette, domain }: { cfg: DomainConfig; palette: Palette; domain: 'crr' | 'grh' | 'shg' | 'ahb' }) {
  return (
    <div className='space-y-12 leading-relaxed' style={{ color: palette.muted }}>
      <p className='text-lg'>{cfg.intro}</p>

      <section>
        <div className='flex items-center gap-3 mb-4'>
          <Microscope className='h-6 w-6' style={{ color: palette.accent }} />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>What we evaluate</h2>
        </div>
        <div className='grid gap-4 mt-4'>
          {cfg.whatWeEvaluate.map((item, i) => (
            <div key={i} className='rounded-xl border p-5' style={{ borderColor: palette.cardBorder, backgroundColor: palette.cardBg }}>
              <h3 className='text-lg font-bold mb-2' style={{ color: palette.fg }}>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className='flex items-center gap-3 mb-4'>
          <Search className='h-6 w-6' style={{ color: palette.accent }} />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>Data sources we use</h2>
        </div>
        <ul className='space-y-2 list-disc pl-6'>
          {cfg.dataSources.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section>
        <div className='flex items-center gap-3 mb-4'>
          <AlertCircle className='h-6 w-6' style={{ color: '#ef4444' }} />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>What disqualifies a recommendation</h2>
        </div>
        <p className='mb-4'>If any of the following are true, we will either decline to recommend the product, downgrade its rating, or publish a cautionary page rather than a normal review:</p>
        <ul className='space-y-2 list-disc pl-6'>
          {cfg.disqualifiers.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </section>

      <section>
        <div className='flex items-center gap-3 mb-4'>
          <RefreshCw className='h-6 w-6' style={{ color: palette.accent }} />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>How often we refresh content</h2>
        </div>
        <p>{cfg.freshness}</p>
      </section>

      <section>
        <div className='flex items-center gap-3 mb-4'>
          <BookOpen className='h-6 w-6' style={{ color: palette.accent }} />
          <h2 className='text-2xl md:text-3xl font-bold' style={{ color: palette.fg }}>Conflicts of interest</h2>
        </div>
        <p>{cfg.conflictsBlurb}</p>
      </section>

      <TrustedSources domain={domain} palette={{ fg: palette.fg, muted: palette.muted, mutedFg: palette.mutedFg, accent: palette.accent, cardBg: palette.cardBg, cardBorder: palette.cardBorder }} />

      <section>
        <div className='rounded-xl p-5' style={{ backgroundColor: palette.accentSoft, borderColor: palette.accent, borderWidth: '1px', borderStyle: 'solid' }}>
          <div className='flex items-start gap-3'>
            <CheckCircle2 className='h-5 w-5 mt-0.5 flex-shrink-0' style={{ color: palette.accent }} />
            <div>
              <p className='font-semibold mb-1' style={{ color: palette.fg }}>Found an error?</p>
              <p className='text-sm'>
                If anything on {cfg.brand} is wrong, please <Link href='/contact' className='underline font-semibold' style={{ color: palette.accent }}>let us know</Link>. We correct factual errors promptly and stamp the page with an updated review date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PageShell({ palette, children }: { palette: Palette; children: React.ReactNode }) {
  return (
    <main className='py-16' style={{ backgroundColor: palette.bg }}>
      <div className='container mx-auto px-4'>
        <article className='max-w-3xl mx-auto'>
          <nav className='mb-8 text-sm flex items-center gap-2 flex-wrap' style={{ color: palette.mutedFg }}>
            <Link href='/' style={{ color: palette.muted }}>Home</Link>
            <ChevronRight className='h-3 w-3' />
            <span style={{ color: palette.fg }}>Our Methodology</span>
          </nav>
          <header className='mb-10'>
            <h1 className='text-4xl md:text-5xl font-extrabold mb-4 tracking-tight' style={{ color: palette.fg }}>Our Methodology</h1>
            <p className='text-lg' style={{ color: palette.muted }}>
              How we research, what data we use, what disqualifies a recommendation, and how often we refresh content.
            </p>
          </header>
          {children}
        </article>
      </div>
    </main>
  );
}

function ShgMethodology() {
  const cfg = CONFIGS.shg;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#f59e0b', accentSoft: 'rgba(245, 158, 11, 0.1)', bg: '#0a0f1c', cardBg: '#0f1729', cardBorder: '#1f2940' };
  return (
    <SHGLayout>
      <SHGHeader />
      <PageShell palette={palette}><MethodologyBody cfg={cfg} palette={palette} domain="shg" /></PageShell>
      <SHGFooter />
    </SHGLayout>
  );
}

function GrhMethodology() {
  const cfg = CONFIGS.grh;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#22c55e', accentSoft: 'rgba(34, 197, 94, 0.1)', bg: 'hsl(150, 20%, 5%)', cardBg: 'hsl(150, 15%, 9%)', cardBorder: 'hsl(150, 10%, 18%)' };
  return (
    <ReviewLayout>
      <ReviewHeader />
      <PageShell palette={palette}><MethodologyBody cfg={cfg} palette={palette} domain="grh" /></PageShell>
      <ReviewFooter />
    </ReviewLayout>
  );
}

function AhbMethodology() {
  const cfg = CONFIGS.ahb;
  const palette: Palette = { fg: '#f5f5f5', muted: '#d4d4d8', mutedFg: '#71717a', accent: '#ec4899', accentSoft: 'rgba(236, 72, 153, 0.1)', bg: '#0c0a18', cardBg: '#15102a', cardBorder: '#251a44' };
  return (
    <AHBLayout>
      <AHBHeader />
      <PageShell palette={palette}><MethodologyBody cfg={cfg} palette={palette} domain="ahb" /></PageShell>
      <AHBFooter />
    </AHBLayout>
  );
}

function CrrMethodology() {
  const cfg = CONFIGS.crr;
  const palette: Palette = { fg: 'hsl(var(--foreground))', muted: 'hsl(var(--foreground) / 0.85)', mutedFg: 'hsl(var(--muted-foreground))', accent: 'hsl(var(--primary))', accentSoft: 'hsl(var(--primary) / 0.1)', bg: 'hsl(var(--background))', cardBg: 'hsl(var(--card))', cardBorder: 'hsl(var(--border))' };
  return (
    <PublicLayout>
      <CRRHeader />
      <PageShell palette={palette}><MethodologyBody cfg={cfg} palette={palette} domain="crr" /></PageShell>
      <CRRFooter />
    </PublicLayout>
  );
}

function Glp1Methodology() {
  return (
    <GLP1TrustPage title='Editorial Methodology' subtitle='How we evaluate, rank, and refresh GLP-1 telehealth provider data.'>
      <h2>What We Evaluate</h2>
      <ul>
        <li><strong>Pricing transparency (25%)</strong> — Verified monthly from each provider&rsquo;s site. Hidden fees, lab costs, and cancellation policies are flagged.</li>
        <li><strong>Medication options (25%)</strong> — Variety of formulations (compounded sema/tirz, branded GLP-1, microdosing, sublingual), dose flexibility.</li>
        <li><strong>Quality certifications (20%)</strong> — Valisure, LegitScript, NABP, state pharmacy board credentials. 503A vs 503B compliance documented.</li>
        <li><strong>Customer support (15%)</strong> — Trustpilot ratings, BBB scores, Reddit cohort sentiment.</li>
        <li><strong>Plan flexibility (15%)</strong> — Cancellation, dose adjustments, monthly vs multi-month plans.</li>
      </ul>

      <h2>Data Sources</h2>
      <ul>
        <li>NEJM, JAMA, Lancet trial publications (STEP-1, SURMOUNT-1, SURMOUNT-5)</li>
        <li>FDA prescribing information for branded GLP-1</li>
        <li>Provider websites (verified monthly for pricing, medications, terms)</li>
        <li>Trustpilot, BBB, Reddit (r/Semaglutide, r/Tirzepatide, r/Mounjaro)</li>
        <li>OfferVault and affiliate-network databases for verified CPA data</li>
        <li>FDA MedWatch and 503A/503B compounding-pharmacy registries</li>
      </ul>

      <h2>Disqualifiers</h2>
      <ul>
        <li>Provider operating without verified state-pharmacy-board licensure</li>
        <li>Documented unsafe compounding practices or active FDA warning letter</li>
        <li>Misrepresentation of branded vs compounded medications at point of sale</li>
        <li>Refusal to provide written prescribing-physician credentials</li>
        <li>Pricing displayed on site materially different from actual checkout total</li>
      </ul>

      <h2>Freshness</h2>
      <p>Provider pricing reviewed monthly. Provider rankings refreshed quarterly. Medical claims
      reviewed every 180 days against PubMed indexing. Each page carries a &ldquo;Last verified&rdquo;
      and &ldquo;Last reviewed&rdquo; date stamp.</p>

      <h2>Conflicts of Interest</h2>
      <p>GLP1CompareHub earns affiliate commissions when readers sign up through our links —
      at no extra cost to you. We do not accept payment for placement, sponsored reviews, or
      pay-to-play editorial. Rankings are determined by the published methodology weights
      above. Content is for informational purposes and is not medical advice.</p>
    </GLP1TrustPage>
  );
}

export default async function MethodologyPage() {
  const domain = await getDomain();
  if (domain === 'glp1') return <Glp1Methodology />;
  if (domain === 'shg') return <ShgMethodology />;
  if (domain === 'grh') return <GrhMethodology />;
  if (domain === 'ahb') return <AhbMethodology />;
  return <CrrMethodology />;
}
