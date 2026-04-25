// =============================================================================
// AUTHORITATIVE SOURCES — curated outbound link library
// =============================================================================
// Centralized list of authoritative outbound links per domain. Used by the
// <TrustedSources/> component on /methodology pages, the <References/> block
// on review/article pages, and inline citations in body copy.
//
// Why this exists:
//  - Outbound links to authoritative sources (.gov, .edu, established
//    research bodies, standards orgs) are a strong 2026 E-E-A-T signal.
//  - Centralizing keeps all citations in one place — easy to refresh and
//    maintain link freshness.
//  - Each entry has category + description so we can render contextual
//    citation blocks without rewriting the link text per page.
//
// Link policy:
//  - All links use rel="noopener" + target="_blank" via the renderer.
//  - We DO NOT mark these as nofollow. They're editorial citations, not
//    affiliate links — search engines should follow them and recognize
//    the trust signal.
// =============================================================================

export type SourceCategory =
  | 'government'
  | 'standards'
  | 'research'
  | 'consumer-protection'
  | 'industry'
  | 'privacy'
  | 'safety';

export interface AuthoritativeSource {
  name: string;
  url: string;
  category: SourceCategory;
  description: string;
  // If true, this is a primary canonical source (top-tier authority).
  // Used to prioritize ordering in compact "Top sources" displays.
  primary?: boolean;
}

// -----------------------------------------------------------------------------
// CRR — California solar / energy programs
// -----------------------------------------------------------------------------
export const CRR_SOURCES: AuthoritativeSource[] = [
  {
    name: 'California Contractors State License Board (CSLB)',
    url: 'https://www.cslb.ca.gov/',
    category: 'government',
    description:
      'Public license records for every contractor in California. Used to verify C-46 solar license status, bond filings, disciplinary actions.',
    primary: true,
  },
  {
    name: 'CSLB License Lookup',
    url: 'https://www.cslb.ca.gov/onlineservices/checklicenseii/checklicense.aspx',
    category: 'government',
    description:
      'Direct license search; confirms active status, bond, classification, and any disciplinary actions on file.',
    primary: true,
  },
  {
    name: 'California Public Utilities Commission (CPUC)',
    url: 'https://www.cpuc.ca.gov/',
    category: 'government',
    description:
      'NEM 3 / Net Billing Tariff documents, IOU rate filings, solar interconnection rules.',
    primary: true,
  },
  {
    name: 'CPUC Net Billing Tariff (NEM 3)',
    url: 'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering',
    category: 'government',
    description: 'Authoritative source for NEM 3 / NBT compensation rules and updates.',
    primary: true,
  },
  {
    name: 'California Energy Commission',
    url: 'https://www.energy.ca.gov/',
    category: 'government',
    description:
      'CEC oversees solar mandate compliance, Title 24 building energy code, low-income solar programs.',
  },
  {
    name: 'DSIRE — Database of State Incentives',
    url: 'https://www.dsireusa.org/',
    category: 'government',
    description:
      'Comprehensive database of federal, state, and utility incentives for renewable energy. Maintained by NC Clean Energy Technology Center.',
    primary: true,
  },
  {
    name: 'IRS — Residential Clean Energy Credit (Form 5695)',
    url: 'https://www.irs.gov/credits-deductions/residential-clean-energy-credit',
    category: 'government',
    description:
      'Authoritative IRS guidance on the 30% federal solar tax credit (residential clean energy credit).',
    primary: true,
  },
  {
    name: 'NREL — National Renewable Energy Laboratory',
    url: 'https://www.nrel.gov/',
    category: 'research',
    description:
      'US Department of Energy lab. Source of solar resource maps, panel efficiency data, and benchmark solar cost reports.',
    primary: true,
  },
  {
    name: 'DOE Solar Energy Technologies Office',
    url: 'https://www.energy.gov/eere/solar/solar-energy-technologies-office',
    category: 'government',
    description:
      'Federal solar program office; publishes Sunshot reports, soft-cost benchmarks, and policy analyses.',
  },
  {
    name: 'Better Business Bureau — California',
    url: 'https://www.bbb.org/',
    category: 'consumer-protection',
    description: 'Consumer complaint files; we read complaint volume relative to install count, not raw count.',
  },
  {
    name: 'NABCEP — North American Board of Certified Energy Practitioners',
    url: 'https://www.nabcep.org/',
    category: 'industry',
    description:
      'Independent solar professional certification body. NABCEP-certified installers carry industry-standard credentials.',
  },
  {
    name: 'Tech Clean California',
    url: 'https://www.techcleanca.com/',
    category: 'government',
    description: 'CPUC-administered program for heat pump and electrification incentives in California.',
  },
  {
    name: 'Self-Generation Incentive Program (SGIP)',
    url: 'https://www.selfgenca.com/',
    category: 'government',
    description: 'California battery storage incentive program; especially relevant for low-income and high-fire-risk customers.',
  },
];

// -----------------------------------------------------------------------------
// GRH — Green-energy gear & home electrification
// -----------------------------------------------------------------------------
export const GRH_SOURCES: AuthoritativeSource[] = [
  {
    name: 'Energy Star',
    url: 'https://www.energystar.gov/',
    category: 'government',
    description:
      'EPA-administered program; certified product lookups for heat pumps, water heaters, smart thermostats, AC units, and more.',
    primary: true,
  },
  {
    name: 'Energy Star Product Finder',
    url: 'https://www.energystar.gov/productfinder',
    category: 'government',
    description: 'Direct certified-product database for verifying performance claims.',
    primary: true,
  },
  {
    name: 'AHRI — Air-Conditioning, Heating, and Refrigeration Institute',
    url: 'https://www.ahrinet.org/',
    category: 'standards',
    description:
      'Industry standards body; AHRI certification numbers verify rated performance for HVAC equipment, heat pumps, and water heaters.',
    primary: true,
  },
  {
    name: 'AHRI Directory Search',
    url: 'https://www.ahridirectory.org/',
    category: 'standards',
    description: 'Look up AHRI certification numbers to verify rated capacity, SEER2/HSPF2, and matched-system performance.',
  },
  {
    name: 'DOE Home Energy Score',
    url: 'https://www.energy.gov/eere/buildings/home-energy-score',
    category: 'government',
    description: 'DOE-backed home energy assessment standard.',
  },
  {
    name: 'DOE Energy Saver',
    url: 'https://www.energy.gov/energysaver/energy-saver',
    category: 'government',
    description: 'Federal consumer guidance on home energy use, electrification, and efficiency upgrades.',
  },
  {
    name: 'UL Standards',
    url: 'https://www.ul.com/',
    category: 'safety',
    description:
      'Underwriters Laboratories. UL listing on power stations, batteries, and electrical equipment indicates safety testing.',
    primary: true,
  },
  {
    name: 'CPSC — Consumer Product Safety Commission',
    url: 'https://www.cpsc.gov/',
    category: 'safety',
    description: 'Federal recalls and safety advisories for consumer electronics, batteries, and power equipment.',
    primary: true,
  },
  {
    name: 'CPSC Recall Search',
    url: 'https://www.cpsc.gov/Recalls',
    category: 'safety',
    description: 'Look up active recalls by brand or product category.',
  },
  {
    name: 'IECC — International Energy Conservation Code',
    url: 'https://codes.iccsafe.org/codes/iecc',
    category: 'standards',
    description: 'Reference building energy code; relevant for whole-home electrification context.',
  },
  {
    name: 'CARB — California Air Resources Board',
    url: 'https://ww2.arb.ca.gov/',
    category: 'government',
    description: 'CARB certification for portable generators and small-engine equipment sold in California.',
  },
];

// -----------------------------------------------------------------------------
// SHG — Home security / privacy
// -----------------------------------------------------------------------------
export const SHG_SOURCES: AuthoritativeSource[] = [
  {
    name: 'NIST Cybersecurity Framework',
    url: 'https://www.nist.gov/cyberframework',
    category: 'government',
    description: 'National Institute of Standards and Technology cybersecurity guidance — including IoT device security.',
    primary: true,
  },
  {
    name: 'NIST IoT Device Cybersecurity Capability Core Baseline',
    url: 'https://csrc.nist.gov/publications/detail/nistir/8259/final',
    category: 'government',
    description: 'Federal baseline for IoT device security capabilities. Useful framework for evaluating cameras and smart locks.',
  },
  {
    name: 'CVE — Common Vulnerabilities and Exposures',
    url: 'https://www.cve.org/',
    category: 'government',
    description: 'MITRE-maintained database of disclosed security vulnerabilities. We check brands for active CVEs before recommending.',
    primary: true,
  },
  {
    name: 'NVD — National Vulnerability Database',
    url: 'https://nvd.nist.gov/',
    category: 'government',
    description: 'NIST companion to CVE with severity scoring; primary source for verifying patch status.',
    primary: true,
  },
  {
    name: 'EFF — Electronic Frontier Foundation',
    url: 'https://www.eff.org/',
    category: 'privacy',
    description: 'Privacy advocacy organization; reporting on surveillance tech, warrant policies, and consumer rights.',
    primary: true,
  },
  {
    name: 'Mozilla — *Privacy Not Included',
    url: 'https://foundation.mozilla.org/en/privacynotincluded/',
    category: 'privacy',
    description: 'Mozilla-curated privacy reviews of consumer connected products including security cameras.',
    primary: true,
  },
  {
    name: 'FTC — IoT and Connected Device Guidance',
    url: 'https://www.ftc.gov/business-guidance/privacy-security/internet-things',
    category: 'consumer-protection',
    description: 'Federal Trade Commission guidance on IoT privacy and security obligations.',
  },
  {
    name: 'FCC — Cyber Trust Mark',
    url: 'https://www.fcc.gov/CyberTrustMark',
    category: 'government',
    description: 'FCC voluntary cybersecurity labeling program for connected consumer devices.',
  },
  {
    name: 'CSA — Connectivity Standards Alliance (Matter)',
    url: 'https://csa-iot.org/',
    category: 'standards',
    description: 'Matter and Zigbee specification body; reference for smart-home interoperability claims.',
  },
  {
    name: 'CISA — Cybersecurity & Infrastructure Security Agency',
    url: 'https://www.cisa.gov/',
    category: 'government',
    description: 'Federal cybersecurity agency; consumer guidance and known-exploited-vulnerability advisories.',
  },
];

// -----------------------------------------------------------------------------
// AHB — At-home biohacking / wellness research
// -----------------------------------------------------------------------------
export const AHB_SOURCES: AuthoritativeSource[] = [
  {
    name: 'PubMed (NLM)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
    category: 'research',
    description:
      'National Library of Medicine biomedical literature database. Every health claim on this site links to a PMID-indexed study.',
    primary: true,
  },
  {
    name: 'PMC — PubMed Central',
    url: 'https://pmc.ncbi.nlm.nih.gov/',
    category: 'research',
    description: 'Open-access full-text companion to PubMed. We link to PMC articles when full text is available.',
    primary: true,
  },
  {
    name: 'Cochrane Library',
    url: 'https://www.cochranelibrary.com/',
    category: 'research',
    description: 'Systematic reviews and meta-analyses. Highest evidence tier when available for a research question.',
    primary: true,
  },
  {
    name: 'ClinicalTrials.gov',
    url: 'https://clinicaltrials.gov/',
    category: 'research',
    description: 'NIH registry of clinical trials. Used to verify trial methodology, registration, and outcome reporting.',
    primary: true,
  },
  {
    name: 'NIH — National Institutes of Health',
    url: 'https://www.nih.gov/',
    category: 'government',
    description: 'Federal medical research agency. Reference for grant-funded studies and NIH consensus statements.',
    primary: true,
  },
  {
    name: 'FDA — Food and Drug Administration',
    url: 'https://www.fda.gov/',
    category: 'government',
    description: 'Federal regulator for drugs, devices, and food. Reference for FDA clearance status of wellness devices.',
    primary: true,
  },
  {
    name: 'FDA MAUDE Database',
    url: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfmaude/search.cfm',
    category: 'safety',
    description: 'FDA Manufacturer and User Facility Device Experience database. Source for adverse-event reports on cleared medical devices.',
    primary: true,
  },
  {
    name: 'WHO — World Health Organization',
    url: 'https://www.who.int/',
    category: 'government',
    description: 'International public-health body; reference for global health-claim context.',
  },
  {
    name: 'NIST CIE — Lighting Standards',
    url: 'https://www.nist.gov/programs-projects/light-source-and-display-color-rendering',
    category: 'standards',
    description: 'NIST measurement standards for light sources; reference for red-light therapy device specs (irradiance, wavelength).',
  },
  {
    name: 'IEC 60601 — Medical Electrical Equipment',
    url: 'https://www.iec.ch/',
    category: 'standards',
    description: 'International Electrotechnical Commission medical device safety standards.',
  },
];

// -----------------------------------------------------------------------------
// Resolver — by domain string
// -----------------------------------------------------------------------------
export function getSourcesForDomain(domain: 'crr' | 'grh' | 'shg' | 'ahb'): AuthoritativeSource[] {
  if (domain === 'grh') return GRH_SOURCES;
  if (domain === 'shg') return SHG_SOURCES;
  if (domain === 'ahb') return AHB_SOURCES;
  return CRR_SOURCES;
}

// Group sources by category for tidy rendering
export function groupByCategory(
  sources: AuthoritativeSource[]
): Record<SourceCategory, AuthoritativeSource[]> {
  const grouped: Partial<Record<SourceCategory, AuthoritativeSource[]>> = {};
  for (const s of sources) {
    if (!grouped[s.category]) grouped[s.category] = [];
    grouped[s.category]!.push(s);
  }
  // Return with a stable category order
  const order: SourceCategory[] = [
    'government',
    'research',
    'standards',
    'safety',
    'privacy',
    'consumer-protection',
    'industry',
  ];
  const result = {} as Record<SourceCategory, AuthoritativeSource[]>;
  for (const cat of order) {
    if (grouped[cat]) result[cat] = grouped[cat]!;
  }
  return result;
}

export const CATEGORY_LABEL: Record<SourceCategory, string> = {
  government: 'Government & regulatory',
  research: 'Research & literature',
  standards: 'Standards bodies',
  safety: 'Safety & recalls',
  privacy: 'Privacy advocacy',
  'consumer-protection': 'Consumer protection',
  industry: 'Industry certification',
};
