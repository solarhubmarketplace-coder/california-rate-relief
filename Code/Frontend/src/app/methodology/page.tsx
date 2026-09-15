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
  /**
   * Optional SERP overrides. The generic formula below builds the title from
   * `brand` + `category`, which runs past 60 characters whenever `category` is
   * a long phrase. A domain that sets these gets them verbatim; one that does
   * not keeps the formula exactly as before.
   */
  metaTitle?: string;
  metaDescription?: string;
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
    metaTitle: 'How We Evaluate California Solar Installers',
    metaDescription:
      'How California Rate Relief evaluates solar installers and energy programs: data sources, disqualifying criteria, freshness cadence and conflict disclosures.',
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
      'GreenReviewsHub is a research-driven review publication covering portable power stations, e-bikes, mini splits, smart thermostats, generators, heat pump water heaters, and other green-energy gear. Our reviews are built from manufacturer specifications, independent lab testing (Project Farm, Consumer Reports, and comparable outlets), aggregated owner reports across retailers and owner forums, warranty terms, and safety-certification registries — cross-checked against each other to surface where real-world performance diverges from the spec sheet. This page documents what goes into a review.',
    whatWeEvaluate: [
      { title: 'Spec accuracy vs. real-world performance', body: 'Manufacturer-claimed capacity vs. tested capacity (when independent lab data exists). Run-time at 50% load vs. full load. Cold-weather and high-load derating.' },
      { title: 'Build quality signals', body: 'Owner-reported defect rate from aggregated reviews (not raw star count). Warranty length vs. typical failure window. Repairability and parts availability.' },
      { title: 'Total cost of ownership', body: 'Sticker price plus expected battery cycles, replacement part costs, install costs, and any subscription requirements.' },
      { title: 'Use-case fit', body: 'Which buyer is this for? Apartment dweller without panel access, RV owner, off-grid cabin, whole-home backup. We refuse to recommend a product as "best overall" without specifying for whom.' },
      { title: 'Safety and certifications', body: 'UL, ETL, FCC, CARB, BIFMA, and other applicable certifications. Battery chemistry (LFP vs NMC) for fire-risk profile.' },
    ],
    dataSources: [
      'Side-by-side specification analysis across every product in a category — capacity, output, efficiency, run-time, noise ratings, charge speed, and warranty',
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
      'GreenReviewsHub earns affiliate commissions when readers buy through our links. We do not accept payment for placement, sponsored reviews, or rankings. Our recommendations are editorial: a product\'s ranking reflects our research — specifications, independent lab data, owner reports, and warranty terms — never a commercial relationship. A product that pays a higher commission does not outrank a better-value product that pays less. Where we have an affiliate partnership with a manufacturer or retailer, that relationship is disclosed and does not influence placement.',
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
    canonical: 'https://www.glp1comparehub.com/methodology',
    category: 'GLP-1 telehealth provider pricing and program terms',
    intro:
      'GLP1CompareHub publishes source-linked price and program information for five providers in the current evidence set. We record the source URL, capture date (2026-08-31), advertised price, stated inclusions, and caveats. This is not clinical or medical review.',
    whatWeEvaluate: [
      { title: 'Source-linked pricing', body: 'We record the advertised price, inclusions, and caveats shown on the source page. Unknown terms remain unknown.' },
      { title: 'Program terms', body: 'We report only what the cited provider source states about inclusions, fees, and cancellation terms.' },
    ],
    dataSources: [
      'Provider pages cited on each entry, captured 2026-08-31',
    ],
    disqualifiers: [
      'No provider-owned public source for the amount',
      'An amount that cannot be separated from unsupported medical marketing',
      'Affiliate-network economics offered as proof of a consumer price',
      'A price or inclusion we cannot describe without guessing',
    ],
    freshness: 'Current capture date: 2026-08-31. Records are ordered alphabetically and are re-captured when a correction or material source change is identified. Material corrections are dated on the affected page.',
    conflictsBlurb:
      'GLP1CompareHub may earn affiliate commissions when readers use links. We do not accept payment for placement, sponsored reviews, or pay-to-play editorial. We do not rank providers by commissions, clinical efficacy, Trustpilot, Reddit, or CPA data. Content is informational and not medical advice; Chad is not a medical professional.',
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

  // GLP-1: title/description trimmed to fit SERP length limits (<=60 / <=155
  // chars). The generic `Our Methodology — How {brand} Evaluates {category}`
  // formula below runs well past both limits for this domain's long category
  // string. No credentialed clinical reviewer exists to name on this page —
  // the body text is unchanged; only the metadata is shortened here.
  if (domain === 'glp1') {
    return {
      title: 'Our Methodology | GLP1CompareHub',
      description:
        'How we source, verify, and date-stamp GLP-1 telehealth pricing and program terms cited on this site.',
      alternates: { canonical: cfg.canonical },
    };
  }

  return {
    title:
      cfg.metaTitle ?? `Our Methodology — How ${cfg.brand} Evaluates ${cfg.category}`,
    description:
      cfg.metaDescription ??
      `How ${cfg.brand} researches and evaluates ${cfg.category}. Data sources, disqualifying criteria, freshness cadence, conflict-of-interest disclosures.`,
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
    <GLP1TrustPage title='Editorial Methodology' subtitle='How we capture, label, and correct public GLP-1 telehealth pricing.'>
      <h2>The Current Scope</h2>
      <p>Our current evidence set covers five provider-owned public pages captured on August 31,
      2026. This is a price-transparency project. It is not a clinical review, a provider-quality
      score, or a recommendation about medication.</p>

      <h2>What Every Published Record Needs</h2>
      <ul>
        <li><strong>Provider-owned source URL.</strong> The reader can inspect the page we checked.</li>
        <li><strong>Capture date.</strong> A current price and a historical observation are not the same thing.</li>
        <li><strong>Advertised amount and billing unit.</strong> We preserve &ldquo;from,&rdquo; &ldquo;first month,&rdquo; auto-refill, and promotional language.</li>
        <li><strong>Stated inclusions.</strong> Medication, clinician review, shipping, membership, or support appears only when the cited page says it is included.</li>
        <li><strong>Caveat.</strong> Conflicting copy, an undisclosed recurring total, or a checkout-only term is stated plainly.</li>
      </ul>

      <h2>Order and Scoring</h2>
      <p>Providers are ordered alphabetically. There is no hidden score. Commission rates,
      affiliate conversion data, Trustpilot stars, Reddit sentiment, and medical-effectiveness
      claims do not determine placement.</p>

      <h2>What We Exclude</h2>
      <ul>
        <li>A price with no provider-owned public source</li>
        <li>Affiliate-network economics presented as consumer evidence</li>
        <li>Clinical-effectiveness, dosing, safety, or treatment-suitability rankings</li>
        <li>A fee, policy, credential, or inclusion we would have to infer</li>
      </ul>

      <h2>Corrections and Freshness</h2>
      <p>The dataset states its capture date. If a provider or reader identifies a material source
      change, we re-check the page and date the correction on the affected record. We do not change
      every sitemap date just to make old content look fresh.</p>

      <h2>Conflicts of Interest</h2>
      <p>GLP1CompareHub may earn an affiliate commission from some links. Providers cannot buy
      placement, remove a caveat, or approve our copy. Direct evidence links and affiliate calls to
      action are treated as separate things. Chad Simpson is not a medical professional, and this
      site does not provide medical advice.</p>
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
