// 2026-09-23 topical-authority upgrade (claude/ta-installers-20260923).
// This is the statewide hub for choosing a solar company in California: how to
// find, compare and verify an installer, plus the directory of every live
// /solar-companies/<city> page grouped by region. It replaces the shared
// GrowthGuide 'companies' body (Guides.tsx is left untouched for other owners).
//
// SOURCES: every rule, dollar figure and date below was fetched from its
// primary source on 2026-09-23 (CSLB, CPUC, DFPI). Installer marketing pages
// and lead-generation sites are not used as sources. The page does not rank
// installers and names no company as a partner.
//
// Tier 2 (claude/t2-installers-20260923): the page now also owns the head
// terms "solar energy companies", "solar installers", "solar panel companies",
// "top solar companies" and "solar power suppliers". Added: the state tools
// that list installers by ZIP code (CPUC DGStats, CSLB), what separates a good
// bid, the company-record check, what "accredited" and "certified" mean
// (NABCEP, BBB, CSLB), solar-roof licensing (C-39 vs C-46), a short C&I
// section that hands off to /commercial-solar, and a SolarCity FAQ (SEC 8-K).
// The "accredited solar installers" and "solar city california" rows fold in
// here instead of getting their own URLs. All fetched 2026-09-23.
//
// Tier 3 (claude/t3-misc-20260923): 26 small rows were assigned to this hub as
// FAQ entries. The ones a homeowner actually asks are answered in five FAQ
// entries (what installation involves, who designs the system, the CPUC
// consumer guide, the fees that come with solar, and what warranties to ask
// about, which is the "garantia solar" query). Rows about other subjects went
// to the page that owns them (duck curve, cancellation, net billing, ground
// mounts, the PG&E calculator, buy vs lease); brand names of small installers,
// outdoor-lighting products and "solar w" were skipped. The Tier 2 link requests
// from the city-pages lane add a "Counties and regions" group to the directory
// and a sentence linking each region page. Sources fetched 2026-09-23: CPUC
// (consumer guide page and "questions to ask"), PG&E (solar bill), SCE (CARE and
// FERA).
import type { Metadata } from 'next';
import Link from 'next/link';
import { CRR_SOCIAL_CARD, crrTwitter } from '@/lib/crr-social';
import { DecisionPage, QuoteChecklist, type Source } from '@/components/growth/DecisionPage';
import { HubSpokeLinks } from '@/components/growth/HubSpokeLinks';
import type { FaqJsonLdItem } from '@/components/shared/FaqJsonLd';
import { hasCompaniesCityPage } from '@/lib/canonical-redirects';
import { getAllCitySlugs, getCityBySlug, UTILITY_DATA } from '@/data/cities-data';
import { growthCities } from '@/data/growth-cities';

const PATH = '/best-solar-companies-california';
const UPDATED = '2026-09-23';
const metaTitle = 'Solar Installers in California: Compare and Verify (2026)';
// Counted from the same data the region list below renders (every city with a
// live /solar-companies page), so the description cannot drift from the body
// again: it said 66 while the page listed 140 (plan 7.3).
const COMPANY_CITY_COUNT = [...new Set([...getAllCitySlugs(), ...Object.keys(growthCities)])].filter((slug) =>
  hasCompaniesCityPage(slug),
).length;
const metaDescription =
  `Find solar companies in ${COMPANY_CITY_COUNT} California cities, check a license with the CSLB, and compare quotes on the same basis. Unranked, sourced to state agencies.`;

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: PATH },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    type: 'article',
    url: `https://ratereliefca.com${PATH}`,
    modifiedTime: `${UPDATED}T00:00:00Z`,
    images: [CRR_SOCIAL_CARD],
  },
  twitter: crrTwitter(metaTitle, metaDescription),
};

const CSLB_CHECK = 'https://www.cslb.ca.gov/OnlineServices/CheckLicenseII/CheckLicense.aspx';
const CSLB_C46 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C46';
const CSLB_C10 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C10';
const CSLB_BROKER = 'https://www.cslb.ca.gov/Media_Room/Industry_Bulletins/2020/January_9.aspx';
const CSLB_CONTRACTS = 'https://www.cslb.ca.gov/Resources/IndustryBulletins/2020/20-22_solar_contracts.pdf';
const CSLB_SOLAR_REQ = 'https://www2.cslb.ca.gov/Consumers/Solar_Requirements.aspx';
const CSLB_HIS =
  'https://www.cslb.ca.gov/Contractors/Applicants/Home_Improvement_Registration/Before_Applying_For_HIS.aspx';
const CSLB_EXPERIENCE =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/experience_for_exam.aspx';
const CSLB_ISSUING =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/Issuing_My_License.aspx';
const CSLB_APPLY =
  'https://www.cslb.ca.gov/contractors/applicants/contractors_license/exam_application/applying_for_license.aspx';
const CSLB_DATA = 'https://cslb.ca.gov/onlineservices/dataportal/ListByClassification';
const CSLB_OWNER =
  'https://www.cslb.ca.gov/consumers/building_officials/owner_builder_overview.aspx';
const CPUC_GUIDE =
  'https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/customer-generation/california-solar-consumer-protection-guide';
const CPUC_NEM = 'https://www.cpuc.ca.gov/NEM/';
const DFPI_PACE = 'https://dfpi.ca.gov/consumers/housing/pace/';
const CPUC_DGSTATS = 'https://www.californiadgstats.ca.gov/find_installer/';
const CSLB_C39 =
  'https://www.cslb.ca.gov/about_us/library/licensing_classifications/Licensing_Classifications_Detail.aspx?Class=C39';
const NABCEP_CERTS = 'https://www.nabcep.org/certifications/nabcep-board-certifications/';
const NABCEP_RECERT = 'https://www.nabcep.org/recertification-renewal/';
const NABCEP_ACCREDITED = 'https://www.nabcep.org/accredited/';
const CPUC_SOLARGUIDE_QUESTIONS = 'https://www.cpuc.ca.gov/solarguide/';
const PGE_SOLAR_BILL =
  'https://www.pge.com/en/account/billing-and-assistance/understand-your-bill/solar-bill.html';
const SCE_CARE_FERA = 'https://www.sce.com/save-money/income-qualified-programs/care-fera';
const BBB_STANDARDS = 'https://www.bbb.org/bbb-accreditation-standards';
const CFPB_SOLAR =
  'https://www.consumerfinance.gov/data-research/research-reports/issue-spotlight-solar-financing/';
const SEC_SOLARCITY_8K =
  'https://www.sec.gov/Archives/edgar/data/1408356/000119312516773728/d275338d8k.htm';
const TESLA_SOLARCITY_ACCOUNT = 'https://www.tesla.com/support/using-your-account';

const sources: Source[] = [
  { label: 'CSLB: Check a License (license, business, personnel and HIS search)', url: CSLB_CHECK },
  { label: 'CSLB: C-46 Solar Contractor classification', url: CSLB_C46 },
  { label: 'CSLB: C-10 Electrical Contractor classification', url: CSLB_C10 },
  {
    label: 'CSLB industry bulletin: restrictions on lead generation and solar broker services (2020)',
    url: CSLB_BROKER,
  },
  { label: 'CSLB industry bulletin #20-22: solar contract requirements (November 17, 2020)', url: CSLB_CONTRACTS },
  { label: 'CSLB: solar energy system disclosure document requirements (B&P Code §7169)', url: CSLB_SOLAR_REQ },
  { label: 'CSLB: Home Improvement Salesperson registration', url: CSLB_HIS },
  { label: 'CSLB: qualifying experience for the contractor examination', url: CSLB_EXPERIENCE },
  { label: 'CSLB: applying for the contractor examination (application fee)', url: CSLB_APPLY },
  { label: 'CSLB: issuing a license (bond, fees, workers’ compensation)', url: CSLB_ISSUING },
  { label: 'CSLB Public Data Portal: list of licensees by classification', url: CSLB_DATA },
  { label: 'CSLB: owner-builder overview (B&P Code §7044)', url: CSLB_OWNER },
  { label: 'CPUC: California Solar Consumer Protection Guide (version 4, 2025)', url: CPUC_GUIDE },
  { label: 'CPUC: net energy metering and the Net Billing Tariff', url: CPUC_NEM },
  { label: 'California DFPI: PACE financing', url: DFPI_PACE },
  { label: 'CPUC California DG Statistics: Find an Installer (projects by ZIP code, city or county)', url: CPUC_DGSTATS },
  { label: 'CSLB: C-39 Roofing Contractor classification', url: CSLB_C39 },
  { label: 'NABCEP: board certifications', url: NABCEP_CERTS },
  { label: 'NABCEP: recertification and renewal', url: NABCEP_RECERT },
  { label: 'NABCEP: company accreditation and accredited companies list', url: NABCEP_ACCREDITED },
  { label: 'Better Business Bureau: BBB accreditation standards', url: BBB_STANDARDS },
  { label: 'CFPB: Issue Spotlight, Solar Financing (August 7, 2024)', url: CFPB_SOLAR },
  { label: 'SEC: SolarCity Corporation Form 8-K on completion of the Tesla merger (November 21, 2016)', url: SEC_SOLARCITY_8K },
  { label: 'Tesla support: account access for former SolarCity customers', url: TESLA_SOLARCITY_ACCOUNT },
  { label: 'CPUC: Solar consumer guide hub and questions to ask a solar provider', url: CPUC_SOLARGUIDE_QUESTIONS },
  { label: 'PG&E: how solar customers are billed (Base Services Charge)', url: PGE_SOLAR_BILL },
  { label: 'SCE: CARE and FERA (discounts and Base Services Charge)', url: SCE_CARE_FERA },
];

// ---------------------------------------------------------------------------
// City directory. Every live /solar-companies/<city> page, grouped by region.
// Slugs are listed literally so the internal-link checker can resolve them;
// hasCompaniesCityPage() drops any city whose page is later redirected, and any
// live city not placed in a region below still renders under "More cities".
// ---------------------------------------------------------------------------
type CityRef = [slug: string, name: string];
const REGIONS: { heading: string; cities: CityRef[] }[] = [
  {
    // Tier 3: region and county pages (t2-citycos link requests). Listed first
    // so they no longer fall into "More California cities".
    heading: 'Counties and regions',
    cities: [
      ['bay-area', 'Bay Area'],
      ['san-mateo-county', 'San Mateo County'],
      ['orange-county', 'Orange County'],
      ['riverside-county', 'Riverside County'],
      ['high-desert', 'High Desert'],
      ['kern-county', 'Kern County'],
      // Integration (int-contentb, 2026-09-24): the two t3-citycos region pages.
      ['coachella-valley', 'Coachella Valley'],
      ['ventura-county', 'Ventura County'],
    ],
  },
  {
    heading: 'Los Angeles County',
    cities: [
      ['los-angeles', 'Los Angeles'],
      ['long-beach', 'Long Beach'],
      ['pasadena', 'Pasadena'],
      ['glendale', 'Glendale'],
      ['santa-clarita', 'Santa Clarita'],
      ['lakewood', 'Lakewood'],
    ],
  },
  {
    heading: 'Orange County',
    cities: [
      ['anaheim', 'Anaheim'],
      ['irvine', 'Irvine'],
      ['santa-ana', 'Santa Ana'],
      ['huntington-beach', 'Huntington Beach'],
      ['westminster', 'Westminster'],
      ['san-clemente', 'San Clemente'],
    ],
  },
  {
    heading: 'Inland Empire: Riverside County',
    cities: [
      ['riverside', 'Riverside'],
      ['moreno-valley', 'Moreno Valley'],
      ['temecula', 'Temecula'],
      ['murrieta', 'Murrieta'],
      ['menifee', 'Menifee'],
      ['lake-elsinore', 'Lake Elsinore'],
      ['wildomar', 'Wildomar'],
      ['hemet', 'Hemet'],
      ['san-jacinto', 'San Jacinto'],
      ['perris', 'Perris'],
      ['palm-springs', 'Palm Springs'],
      ['palm-desert', 'Palm Desert'],
    ],
  },
  {
    heading: 'Inland Empire: San Bernardino County',
    cities: [
      ['san-bernardino', 'San Bernardino'],
      ['fontana', 'Fontana'],
      ['rancho-cucamonga', 'Rancho Cucamonga'],
      ['redlands', 'Redlands'],
      ['victorville', 'Victorville'],
    ],
  },
  {
    heading: 'San Diego County',
    cities: [
      ['escondido', 'Escondido'],
      ['el-cajon', 'El Cajon'],
      ['fallbrook', 'Fallbrook'],
    ],
  },
  {
    heading: 'Ventura County',
    cities: [
      ['thousand-oaks', 'Thousand Oaks'],
      ['simi-valley', 'Simi Valley'],
      ['camarillo', 'Camarillo'],
      ['ventura', 'Ventura'],
    ],
  },
  {
    heading: 'San Francisco Bay Area',
    cities: [
      ['san-francisco', 'San Francisco'],
      ['oakland', 'Oakland'],
      ['san-jose', 'San Jose'],
      ['fremont', 'Fremont'],
      ['hayward', 'Hayward'],
      ['pleasanton', 'Pleasanton'],
      ['livermore', 'Livermore'],
      ['richmond', 'Richmond'],
      ['san-mateo', 'San Mateo'],
      ['half-moon-bay', 'Half Moon Bay'],
      ['sunnyvale', 'Sunnyvale'],
      ['mountain-view', 'Mountain View'],
    ],
  },
  {
    heading: 'North Bay',
    cities: [
      ['santa-rosa', 'Santa Rosa'],
      ['petaluma', 'Petaluma'],
      ['sonoma', 'Sonoma'],
    ],
  },
  {
    heading: 'Sacramento Valley and Sierra foothills',
    cities: [
      ['sacramento', 'Sacramento'],
      ['roseville', 'Roseville'],
      ['rocklin', 'Rocklin'],
      ['grass-valley', 'Grass Valley'],
      ['chico', 'Chico'],
    ],
  },
  {
    heading: 'San Joaquin Valley',
    cities: [
      ['fresno', 'Fresno'],
      ['bakersfield', 'Bakersfield'],
      ['stockton', 'Stockton'],
      ['modesto', 'Modesto'],
      ['merced', 'Merced'],
      ['visalia', 'Visalia'],
      ['lodi', 'Lodi'],
    ],
  },
  {
    heading: 'Central Coast',
    cities: [
      ['santa-cruz', 'Santa Cruz'],
      ['san-luis-obispo', 'San Luis Obispo'],
      ['santa-barbara', 'Santa Barbara'],
    ],
  },
];

/** The electric utility the site's own city data records for a city, if settled. */
function utilityLabel(slug: string): string | null {
  const city = getCityBySlug(slug);
  if (city) {
    if (city.utilityConfirmationRequired) {
      return city.utilityDisplayName ? city.utilityDisplayName.replace(/^Check the bill:\s*/, '') : null;
    }
    return UTILITY_DATA[city.utilityCode]?.shortName ?? null;
  }
  const g = growthCities[slug];
  return g ? UTILITY_DATA[g.utility]?.shortName ?? null : null;
}

function liveRegions() {
  const placed = new Set(REGIONS.flatMap((r) => r.cities.map(([s]) => s)));
  const regions = REGIONS.map((r) => ({
    ...r,
    cities: r.cities.filter(([slug]) => hasCompaniesCityPage(slug)),
  })).filter((r) => r.cities.length > 0);
  const extra: CityRef[] = [...new Set([...getAllCitySlugs(), ...Object.keys(growthCities)])]
    .filter((slug) => !placed.has(slug) && hasCompaniesCityPage(slug))
    .map((slug) => [slug, getCityBySlug(slug)?.name ?? growthCities[slug]?.name ?? slug]);
  if (extra.length > 0) {
    regions.push({ heading: 'More California cities', cities: extra });
  }
  return regions;
}

// ---------------------------------------------------------------------------
// Company reviews and comparisons on this site. Alphabetical, unranked.
// ---------------------------------------------------------------------------
const REVIEWS: { href: string; name: string; note: string }[] = [
  { href: '/solar-installers/ameco-solar-review', name: 'Ameco Solar', note: 'Los Angeles-area solar and roofing company' },
  { href: '/solar-installers/baker-electric-solar-review', name: 'Baker Electric / Baker Home Energy', note: 'two San Diego entities with separate license numbers' },
  { href: '/solar-installers/elevation-solar-review', name: 'Elevation Solar', note: 'what the contract says' },
  { href: '/solar-installers/empire-solar-review', name: 'Empire Solar', note: 'which entity you would actually hire' },
  { href: '/solar-installers/freedom-forever-review', name: 'Freedom Forever', note: 'licenses, financing and its 2026 bankruptcy filing' },
  { href: '/solar-installers/la-solar-group-review', name: 'LA Solar Group', note: 'in-house panels and a court-record check' },
  { href: '/solar-installers/momentum-solar-review', name: 'Momentum Solar', note: 'whether it serves California' },
  { href: '/solar-installers/new-day-solar-review', name: 'New Day Solar', note: 'Murrieta-based installer' },
  { href: '/solar-installers/option-one-solar-review', name: 'Option One Solar', note: 'Apple Valley installer and its warranty terms' },
  { href: '/solar-installers/palmetto-solar-review', name: 'Palmetto', note: 'LightReach financing and the court record' },
  { href: '/solar-installers/powur-solar-review', name: 'Powur', note: 'a sales-network model and its complaint record' },
  { href: '/solar-installers/semper-solaris-review', name: 'Semper Solaris', note: 'California solar, roofing and HVAC company' },
  { href: '/solar-installers/solar-optimum-review', name: 'Solar Optimum', note: 'lawsuits, ratings and warranty' },
  { href: '/solar-installers/sullivan-solar-power-review', name: 'Sullivan Solar Power', note: 'a defunct San Diego installer and what owners can do' },
  { href: '/solar-installers/sunergy-solar-review', name: 'Sunergy Solar', note: 'ownership focus and reported delays' },
  { href: '/solar-installers/sunlux-solar-review', name: 'Sunlux Solar', note: 'warranty terms and the CSLB check' },
  { href: '/solar-installers/sunnova-review', name: 'Sunnova', note: 'whether it is still in business' },
  { href: '/solar-installers/sunpower-review', name: 'SunPower', note: 'the Complete Solaria rebrand' },
  { href: '/solar-installers/sunrun-review', name: 'Sunrun', note: 'leases, PPAs and company status' },
  { href: '/solar-installers/tesla-solar-review', name: 'Tesla Solar', note: 'panels, Powerwall and service' },
  // GS-MERGES 2026-09-24 (plan 6.2): Trinity Solar removed from this California
  // comparison list: no California service area on its own site and no
  // residential system under its name in the CPUC data since 2016.
];
const COMPARISONS: { href: string; label: string }[] = [
  { href: '/solar-installers/sunrun-vs-sunpower', label: 'Sunrun vs SunPower' },
  { href: '/solar-installers/sunrun-vs-tesla-solar', label: 'Sunrun vs Tesla Solar' },
  { href: '/solar-installers/sunnova-vs-sunrun', label: 'Sunnova vs Sunrun' },
  { href: '/solar-installers/enphase-vs-solaredge', label: 'Enphase vs SolarEdge inverters' },
  { href: '/solar-installers/sunrun-lease-vs-ppa', label: 'Sunrun lease vs PPA' },
  { href: '/solar-installers/sunrun-buyout-cost', label: 'How a Sunrun buyout is calculated' },
];

const faqs: FaqJsonLdItem[] = [
  {
    question: 'What is the best solar company in California?',
    answer:
      'There is no single best solar company for every California home, and this site does not publish a ranking. The best company for you is a licensed contractor that will install on your roof, under your utility’s current rules, at a price you can compare line by line with other bids. The CPUC’s consumer guide tells homeowners to get bids from at least three qualified solar providers, compare them and ask questions.',
  },
  {
    question: 'Who regulates solar companies in California?',
    answer:
      'Several agencies share the job. The Contractors State License Board licenses the contractors who install solar, registers home improvement salespeople and takes complaints. The CPUC sets the net billing rules for PG&E, SCE and SDG&E customers and publishes the solar consumer protection guide. The Department of Financial Protection and Innovation has licensed PACE program administrators since 2019. Your city or county building department issues the permit and inspects the work.',
  },
  {
    question: 'How many solar companies are there in California?',
    answer:
      'The CSLB does not publish a single count on its license-lookup pages. Its Public Data Portal lets anyone download the current list of licensees in a classification, such as C-46 Solar or C-10 Electrical, as a spreadsheet, and the CSLB notes that the list is current only on the day it is downloaded. Both classifications can install photovoltaic systems, so a count of C-46 licenses alone undercounts who can do the work.',
  },
  {
    question: 'How do I compare solar installation companies?',
    answer:
      'Ask each company to quote the same system size, equipment and roof layout, with the cash price, the solar, battery, roof and electrical work listed separately, and the remaining utility bill modeled on the same usage history and tariff. Then check each company’s license and the salesperson’s registration at the CSLB, and read the solar disclosure document that must sit on the front page of the contract.',
  },
  {
    question: 'Can I install my own solar panels in California?',
    answer:
      'California law has an owner-builder exemption (Business and Professions Code section 7044) for owners who do the work themselves or with their own employees on a structure not intended for sale. The CSLB lists conditions, such as living in the home for the 12 months before the work is completed. You still need the local building permit and inspection, and the utility has to approve the interconnection before the system can operate.',
  },
  {
    question: 'How do I become a licensed solar installer in California?',
    answer:
      'To qualify for the CSLB exam you need at least four years of journey-level experience in the classification, and up to three of those years can be credited from technical training, apprenticeship or education. The application fee is $450. Before the license issues you need a $25,000 contractor bond, workers’ compensation coverage or a valid exemption, and an initial license fee of $200 for a sole owner or $350 for other entities.',
  },
  {
    question: 'Do you need a license to sell solar in California?',
    answer:
      'Yes, in most cases. The CSLB says anyone who solicits, sells, negotiates or executes home improvement contracts for a licensed contractor must register as a Home Improvement Salesperson, and that selling home improvement goods and services without registering is a misdemeanor. A lead generator that only refers homeowners and sets appointments does not need to register, but it may not quote prices or negotiate contracts.',
  },
  {
    question: 'Where can I see which solar companies work in my ZIP code?',
    answer:
      'The CPUC’s California DG Statistics site has a Find an Installer search. Enter a ZIP code, city or county and it lists solar and storage projects interconnected in the last 24 months in PG&E, SCE and SDG&E territory, with each project’s cost per watt. The costs are self-reported by applicants and not verified. Customers of city-run utilities such as LADWP or SMUD are not covered.',
  },
  {
    question: 'Are there accredited solar installers in California?',
    answer:
      'No accreditation is required. What California requires is a CSLB contractor license in a class that covers solar, usually C-46, C-10 or B. Individual installers can hold a voluntary NABCEP board certification, which the CPUC’s consumer guide calls a good sign. NABCEP also accredits companies, but its accredited-company list on September 23, 2026 named companies in seven states and none in California.',
  },
  {
    question: 'What happened to SolarCity?',
    answer:
      'Tesla bought it. SolarCity’s SEC filing states that on November 21, 2016 it became a wholly owned subsidiary of Tesla. Tesla’s support pages tell former SolarCity customers to sign in with a Tesla Account, which lease and PPA customers use to pay their bills. For service, cost and warranty on a system sold today, read the Tesla Solar review. If you meant California City, the Kern County town, see its solar cost guide.',
  },
  {
    question: 'What does getting solar installed in California involve?',
    answer:
      'Six steps, in order: compare at least three bids; sign a contract, which has to carry the solar disclosure document on its front page and gives you at least three business days to cancel (five if you are 65 or older); a site visit and final design; a building permit from your city or county; installation and inspection; and written approval from your electricity provider to turn the system on. The CPUC suggests asking each company when it will start and finish and roughly how long the utility’s approval will take after installation.',
  },
  {
    question: 'Who designs a home solar system in California?',
    answer:
      'The contractor you sign with is responsible for the design, whether its own staff or an outside design firm draws the plans, and its license is on the contract. The design becomes the plan set your city or county reviews for the permit and the drawings the utility reviews before it approves the connection. Ask for the plan set and the production estimate it is based on, and check that the panel count and inverter match the contract.',
  },
  {
    question: 'What is the California Solar Consumer Protection Guide?',
    answer:
      'A CPUC document that explains your rights and the questions to ask before you sign; version 4 was published in 2025. Solar providers applying to interconnect residential customers of PG&E, SCE, SDG&E, Bear Valley Electric Service, PacifiCorp and Liberty must collect the customer’s initials and signature on it, and the CPUC says customers must be given time to read it before signing.',
  },
  {
    question: 'What fees come with going solar in California?',
    answer:
      'Beyond the system price, expect four kinds. Financing can carry a dealer fee built into the loan price. Permit fees and any utility interconnection charge should appear as their own lines in the bid. And the monthly utility bill does not go away: PG&E’s Base Services Charge, about $24 a month for most customers from March 2026, cannot be offset by solar generation credits, and SCE lists about $6 a month for CARE customers and about $12 for FERA. Ask every bidder to show these lines separately.',
  },
  {
    question: 'What warranties should a solar system in California come with? (¿Qué garantía debe tener?)',
    answer:
      'Ask about three, as the CPUC’s questions for solar providers do: warranties on the panels and inverters, including how long they last and whom you contact for a replacement; a warranty on the labor and construction; and, for a lease or PPA, any minimum energy guarantee and how you are compensated if the system produces less than the contract promises. Also ask whether an insurance policy comes with the system or whether you need to add it to your homeowner’s policy. Get every warranty in writing, with the name of the company that stands behind it.',
  },
  {
    question: 'Is California Rate Relief a solar company?',
    answer:
      'No. California Rate Relief is a referral service. We are not a licensed contractor. The company that designs, sells and installs your system is the one whose license belongs on the contract, and that license is the one to check.',
  },
];

const h2 = 'text-2xl font-bold text-foreground';
const link = 'text-primary underline underline-offset-2';

export default function BestSolarCompaniesCalifornia() {
  const regions = liveRegions();
  const cityCount = regions.reduce((n, r) => n + r.cities.length, 0);
  return (
    <DecisionPage
      title="Solar companies in California: how to find, compare and verify an installer"
      breadcrumbLabel="Solar companies in California"
      intro="There is no single best solar company in California. The right one is a licensed contractor that will do the work on your roof, under your utility’s current billing rules, at a price you can compare line by line with at least two other bids. Find companies through your city guide below, check each license with the state, then put the quotes side by side."
      path={PATH}
      sources={sources}
      sourceCheckedDate={UPDATED}
      contentModifiedDate={UPDATED}
      topic="Choosing a solar company in California"
      comparisonHref="/solar-installers"
      comparisonLabel="Company reviews"
      authorSchema="person"
      keyStats={[
        {
          label: 'Licenses that cover solar work',
          value: 'C-46 or C-10',
          note: 'CSLB’s C-46 Solar and C-10 Electrical classifications both name photovoltaic work.',
          source: { publisher: 'CSLB', date: UPDATED, url: CSLB_C46 },
        },
        {
          label: 'Contractor bond',
          value: '$25,000',
          note: 'Required before the CSLB issues a license.',
          source: { publisher: 'CSLB', date: UPDATED, url: CSLB_ISSUING },
        },
        {
          label: 'Largest legal down payment',
          value: '$1,000 or 10%',
          note: 'Whichever is less, on a home improvement contract.',
          source: { publisher: 'CSLB', date: UPDATED, url: CSLB_CONTRACTS },
        },
        {
          label: 'Right to cancel',
          value: '3 business days',
          note: 'Five business days if you are 65 or older.',
          source: { publisher: 'CPUC', date: UPDATED, url: CPUC_GUIDE },
        },
      ]}
      faqs={faqs}
    >
      <section id="city-directory">
        <h2 className={h2}>Find solar companies near you: {cityCount} California city guides</h2>
        <p>
          A search for &ldquo;solar installers near me&rdquo; is really a question about your
          utility, your permit office and the companies that work in your area. Each city guide
          below covers those local details: which utility or community choice aggregator bills
          the account, what the local permit process asks for, and what to check in a quote
          there. Pick the closest city. If yours is not listed, start with the nearest one in the
          same county, then confirm your own utility and permit office.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          The utility named next to each city is the one that city&rsquo;s guide records. Some
          cities are split between utilities, so check the provider printed on your own bill.
        </p>
        <div className="mt-6 space-y-6">
          {regions.map((region) => (
            <div key={region.heading}>
              <h3 className="text-lg font-semibold text-foreground">{region.heading}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {region.cities.map(([slug, name]) => {
                  const utility = utilityLabel(slug);
                  return (
                    <li key={slug}>
                      <Link href={`/solar-companies/${slug}`} className={link}>
                        {name}
                      </Link>
                      {utility && <span className="text-sm text-muted-foreground"> · {utility}</span>}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6">
          Searching by county or region instead of a city? Start with{' '}
          <Link href="/solar-companies/orange-county" className={link}>
            Orange County solar companies by city
          </Link>
          ,{' '}
          <Link href="/solar-companies/bay-area" className={link}>
            Bay Area solar companies
          </Link>
          ,{' '}
          <Link href="/solar-companies/san-mateo-county" className={link}>
            San Mateo County solar companies
          </Link>
          ,{' '}
          <Link href="/solar-companies/riverside-county" className={link}>
            Riverside County, where the utility changes by city
          </Link>
          ,{' '}
          <Link href="/solar-companies/high-desert" className={link}>
            High Desert solar companies
          </Link>
          ,{' '}
          <Link href="/solar-companies/kern-county" className={link}>
            Kern County: PG&amp;E and SCE areas
          </Link>
          ,{' '}
          <Link href="/solar-companies/coachella-valley" className={link}>
            Coachella Valley solar companies: SCE or IID by city
          </Link>{' '}
          or{' '}
          <Link href="/solar-companies/ventura-county" className={link}>
            Ventura County solar companies and permit offices
          </Link>
          .
        </p>
        <p className="mt-3">
          Want the price side first? The{' '}
          <Link href="/solar-cost" className={link}>
            solar cost guides by city
          </Link>{' '}
          cover what goes into a quote in 57 cities, and the{' '}
          <Link href="/solar-panels-california" className={link}>
            statewide guide to solar panels in California
          </Link>{' '}
          covers cost, sizing and the current billing rules.
        </p>
      </section>

      <section id="near-me">
        <h2 className={h2}>Solar installers near me: three state tools that list who works in your area</h2>
        <p>
          Search &ldquo;solar companies near me&rdquo; and Google usually leads with a map of
          nearby businesses. The map gives you names, not whether a company holds the right
          license or has finished jobs on your street. The CPUC&rsquo;s consumer guide points
          homeowners to better starting lists, and each one takes a few minutes.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li>
            <strong>Recent projects by ZIP code.</strong> The CPUC&rsquo;s California DG Statistics
            site has a{' '}
            <a href={CPUC_DGSTATS} className={link} target="_blank" rel="noopener noreferrer">
              Find an Installer
            </a>{' '}
            search. Type a ZIP code, city or county and it returns solar and storage projects
            interconnected in the last 24 months, with a cost per watt for each. Read the fine
            print: it covers only PG&amp;E, SCE and SDG&amp;E territory, the costs are
            &ldquo;self-reported by applicants&rdquo; with no further verification, and cost per
            watt is figured on the system&rsquo;s AC capacity, while most quotes price the
            panels&rsquo; DC rating (CPUC DGStats, checked September 23, 2026). Use it to see
            which companies are active near you, not as a price you are owed.
          </li>
          <li>
            <strong>Licensed contractors by city.</strong> The CPUC guide tells homeowners to use
            the CSLB&rsquo;s contractor search, enter their city and pick one of three license
            classifications: C-46 Solar, C-10 Electrical or B General Building (CPUC, checked
            September 23, 2026). The CSLB&rsquo;s{' '}
            <Link href="/solar-installers/licensed-solar-installer" className={link}>
              county-by-county contractor list
            </Link>{' '}
            does the same as a spreadsheet.
          </li>
          <li>
            <strong>Neighbors with a year of bills.</strong> The same guide suggests asking
            friends and neighbors who had solar installed at least a year ago whether they would
            use the company again, and why. A year covers a full cycle of summer surplus and
            winter shortfall, which is when estimates meet reality.
          </li>
        </ol>
        <p className="mt-3">
          Take two or three names from any of these, run each through the license check below,
          and ask each for a quote built on the same checklist. Star ratings on a map can suggest
          questions to ask; they do not replace the contract or a current license lookup.
        </p>
      </section>

      <section id="how-to-choose">
        <h2 className={h2}>How to choose a solar company in California</h2>
        <p>
          The CPUC&rsquo;s consumer guide gives the short version: get bids from at least three
          qualified solar providers, compare them and ask questions (CPUC, Solar Consumer
          Protection Guide, version 4, checked September 23, 2026). The steps below turn that
          into a routine you can run on any company, including ones this site has never
          reviewed.
        </p>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li>
            <strong>Start from your bill, not the sales pitch.</strong> Note your utility, your
            rate plan and twelve months of usage. PG&amp;E, SCE and SDG&amp;E customers who
            applied to interconnect on or after April 15, 2023 take service on the Net Billing
            Tariff, which credits exported power at values from the CPUC&rsquo;s Avoided Cost
            Calculator, usually lower than what you pay to import (CPUC, checked September 23,
            2026). City-run utilities such as LADWP and SMUD set their own rules. A quote built
            on the wrong tariff is a wrong quote.
          </li>
          <li>
            <strong>Collect three written bids.</strong> Ask every bidder for the same things:
            system size in kilowatts, panel and inverter models, a roof layout, monthly
            production after shading, the cash price, and the remaining utility bill. The
            checklist further down lists every line to request, and the guide to{' '}
            <Link href="/blog/solar-system-quotes-california" className={link}>
              getting and comparing solar quotes
            </Link>{' '}
            covers where to ask and what each quote must come with.
          </li>
          <li>
            <strong>Find out who will actually do the work.</strong> The company that knocks on
            your door, runs an online ad or calls you may be a sales organization, a lead
            generator or a financier. Ask for the legal name and license number of the company
            that will install the system and the one that will service it.
          </li>
          <li>
            <strong>Verify the license and the salesperson.</strong> Look both up at the CSLB
            before a second meeting. The next section shows how.
          </li>
          <li>
            <strong>Read the contract&rsquo;s front page.</strong> California requires a solar
            energy system disclosure document on the front or cover page of every residential
            solar contract, showing the total cost and payments including financing, how to
            complain and your cancellation rights, written in the language used in the sales
            presentation (CSLB, checked September 23, 2026).
          </li>
          <li>
            <strong>Choose how to pay last.</strong> Compare the cash price first, then the
            loan, lease or PPA built on the same system. Our{' '}
            <Link href="/blog/ppa-loan-vs-solar-lease-vs-cash-california" className={link}>
              comparison of cash, loan, lease and PPA terms
            </Link>{' '}
            shows what changes with each.
          </li>
        </ol>
      </section>

      <section id="good-bid">
        <h2 className={h2}>What separates a good solar bid from a weak one</h2>
        <p>
          Not the price by itself. The CPUC&rsquo;s guide says the cheapest bid is not
          necessarily the best option, and that &ldquo;a very low bid may indicate that a solar
          provider is trying to cut corners&rdquo; (CPUC, checked September 23, 2026). The
          differences that matter show up in how the bid was built.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Signs of a stronger and a weaker residential solar bid</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Part of the bid</th>
                <th className="p-3">A stronger bid</th>
                <th className="p-3">A weaker bid</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">System size</th>
                <td className="p-3 align-top">
                  Built from your last 12 months of use. The CPUC notes systems are typically
                  sized to around 80&ndash;85% of the previous year&rsquo;s use; on net billing,
                  going above your history takes a signed attestation that your use will grow,
                  with a ceiling of 150%.
                </td>
                <td className="p-3 align-top">Sized to &ldquo;cover your whole bill&rdquo; with no usage history attached.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Savings estimate</th>
                <td className="p-3 align-top">
                  Matches the standardized bill savings estimate on the state&rsquo;s Supporting
                  Information form and shows the rate increase it assumes. The CPUC caps that
                  assumption at 10% a year.
                </td>
                <td className="p-3 align-top">A verbal promise, or a projection whose rate assumption nobody will explain.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Price</th>
                <td className="p-3 align-top">A cash price, with solar, battery, roof and electrical work listed separately.</td>
                <td className="p-3 align-top">Only a monthly payment.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Who does the work</th>
                <td className="p-3 align-top">
                  Names the installing company and its license number, and any subcontractor
                  with its own.
                </td>
                <td className="p-3 align-top">Vague about whether the seller installs, or who it would hire.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Payment schedule</th>
                <td className="p-3 align-top">
                  A down payment no larger than $1,000 or 10% of the price, whichever is less,
                  and later payments that never run ahead of work done or materials delivered.
                </td>
                <td className="p-3 align-top">Large payments due before anything reaches your roof.</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Schedule</th>
                <td className="p-3 align-top">An approximate start date and an estimated completion date written into the contract.</td>
                <td className="p-3 align-top">&ldquo;As soon as we can get a crew out.&rdquo;</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Warranties and service</th>
                <td className="p-3 align-top">
                  Separate terms for panels, inverters and labor, with the name of whoever
                  honors each one.
                </td>
                <td className="p-3 align-top">A single &ldquo;full warranty&rdquo; line.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Sizing, savings-estimate and subcontractor points: CPUC Solar Consumer Protection Guide,
          version 4. Payment and schedule rules: CSLB industry bulletin #20-22 (November 17,
          2020). Both checked September 23, 2026.
        </p>
        <p className="mt-3">
          One more test from the CPUC guide: ask each finalist for three customer references
          whose systems have been running for at least a year, then ask those owners who showed
          up when something needed fixing.
        </p>
      </section>

      <section id="verify-license">
        <h2 className={h2}>How to verify a solar installer&rsquo;s license</h2>
        <p>
          The CSLB&rsquo;s{' '}
          <a href={CSLB_CHECK} className={link} target="_blank" rel="noopener noreferrer">
            Check a License
          </a>{' '}
          tool searches five ways: by contractor license number, business name, the name of a
          person on the license, a Home Improvement Salesperson (HIS) registration number, or a
          salesperson&rsquo;s name. HIS numbers end in the letters &ldquo;SP.&rdquo; The database
          is offline from 8 p.m. Sunday to 6 a.m. Monday for maintenance (CSLB, checked
          September 23, 2026).
        </p>
        <p className="mt-3">What to look for on the record:</p>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>
            <strong>The right classification.</strong> The CSLB defines a C-46 Solar contractor
            as one who &ldquo;installs, modifies, maintains, and repairs thermal and photovoltaic
            solar energy systems.&rdquo; A C-10 Electrical contractor&rsquo;s scope also names
            &ldquo;solar photovoltaic cells.&rdquo; Either can be appropriate for rooftop solar.
          </li>
          <li>
            <strong>An active status and a bond.</strong> A license does not issue without a
            $25,000 contractor bond and proof of workers&rsquo; compensation coverage or a valid
            exemption (CSLB, checked September 23, 2026).
          </li>
          <li>
            <strong>A matching name.</strong> The business name on the license must match the
            name on your contract. A similar name is not the same license.
          </li>
          <li>
            <strong>The salesperson, too.</strong> Anyone who solicits, sells, negotiates or
            executes home improvement contracts for a licensed contractor must register with
            the CSLB as a Home Improvement Salesperson (CSLB, checked September 23, 2026).
          </li>
        </ul>
        <p className="mt-3">
          The full walkthrough, including the bond&rsquo;s limits and the cancellation statutes,
          is in our guide on{' '}
          <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
            verifying a California solar contractor before you sign
          </Link>
          . If you only want to know what a licensed installer is and how to find one, start
          with{' '}
          <Link href="/solar-installers/licensed-solar-installer" className={link}>
            finding a licensed solar installer
          </Link>
          .
        </p>
      </section>

      <section id="track-record">
        <h2 className={h2}>Checking a solar company&rsquo;s track record</h2>
        <p>
          A license check tells you a company may do the work. A record check tells you how it
          has done it. The CPUC&rsquo;s guide suggests finding out how long a company has been in
          business and how many systems it has installed, and reading reviews on more than one
          site, &ldquo;since some websites may not be neutral&rdquo; (CPUC, checked September 23,
          2026). Four places to look:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>The CSLB record itself.</strong> The CSLB describes its lookup as a way to
            verify license information &ldquo;including complaint disclosure,&rdquo; so read past
            the word &ldquo;active&rdquo; (CSLB, checked September 23, 2026).
          </li>
          <li>
            <strong>Court and bankruptcy filings.</strong> Several residential solar companies
            have filed for bankruptcy in recent years. Our page on{' '}
            <Link href="/solar-installers/worst-solar-companies-california" className={link}>
              solar companies in bankruptcy court and on the CSLB record
            </Link>{' '}
            lists the federal cases and how to search for one yourself.
          </li>
          <li>
            <strong>Better Business Bureau complaints, not the badge.</strong> Read the
            complaints and how the company answered them. BBB accreditation is a program the
            business pays for: the BBB states that it &ldquo;charges a fee for BBB
            Accreditation&rdquo; (BBB, checked September 23, 2026).
          </li>
          <li>
            <strong>Recent local jobs.</strong> The DGStats installer search above shows whether
            a company has interconnected projects near you in the last two years.
          </li>
        </ul>
        <p className="mt-3">
          The bond, the complaint process and the cancellation statutes are covered step by step
          in{' '}
          <Link href="/solar-installers/how-to-verify-a-solar-contractor-california" className={link}>
            the full contractor verification guide
          </Link>
          .
        </p>
      </section>

      <section id="accredited">
        <h2 className={h2}>Accredited, certified or licensed: what each label means</h2>
        <p>
          Only one of these labels is required by law in California, and it is the license. The
          others are voluntary, which does not make them worthless. It means you have to know
          what each one measured.
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Solar installer licenses, certifications and accreditations compared</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Label</th>
                <th className="p-3">Who grants it</th>
                <th className="p-3">What it tells you</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Contractor license (C-46, C-10 or B)</th>
                <td className="p-3 align-top">Contractors State License Board</td>
                <td className="p-3 align-top">
                  Required to install solar on a home. The CPUC guide says the license must be in
                  one of these three classifications and that doing business without one is
                  illegal.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">NABCEP board certification</th>
                <td className="p-3 align-top">North American Board of Certified Energy Practitioners</td>
                <td className="p-3 align-top">
                  A credential held by a person, not a company, earned by showing training and
                  experience and passing an exam. It lasts three years, and renewing it takes 30
                  hours of continuing education. The CPUC calls NABCEP certification &ldquo;a
                  high standard in the industry.&rdquo;
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">NABCEP company accreditation</th>
                <td className="p-3 align-top">NABCEP</td>
                <td className="p-3 align-top">
                  A company program with staffing and policy benchmarks and at least three
                  randomly selected inspections of finished installations. NABCEP&rsquo;s list,
                  checked September 23, 2026, named accredited companies in seven states and none
                  in California.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">BBB accreditation</th>
                <td className="p-3 align-top">Better Business Bureau</td>
                <td className="p-3 align-top">
                  The business agrees to eight conduct standards, such as advertising honestly
                  and honoring promises, and pays BBB a fee. It is not a license or a technical
                  credential.
                </td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Equipment maker installer programs</th>
                <td className="p-3 align-top">Panel, inverter and battery manufacturers</td>
                <td className="p-3 align-top">
                  Rules differ by maker. Ask what the program required and whether it changes the
                  warranty you would get.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          So when a company calls itself an &ldquo;accredited solar installer&rdquo; in
          California, ask which of these it means and who holds it. If the answer is NABCEP,
          get the certified person&rsquo;s name and whether that person will design or install
          your system; NABCEP publishes a directory of board-certified professionals. The CPUC
          guide treats a company that employs NABCEP-certified installers as &ldquo;a good
          sign.&rdquo; None of these labels replaces the license lookup (CPUC, NABCEP and BBB,
          checked September 23, 2026).
        </p>
      </section>

      <section id="who-you-are-dealing-with">
        <h2 className={h2}>Installer, broker or lead generator: who are you dealing with?</h2>
        <p>
          Many companies that advertise as &ldquo;solar providers&rdquo; or &ldquo;solar
          services&rdquo; do not install anything. The CSLB drew the line in a 2020 industry
          bulletin. Lead generators and solar brokers may &ldquo;serve as a referral source for
          licensed contractors, provide contractor contact information to prospective
          customers, and set up appointments.&rdquo; They may not quote or offer a system, and
          they may not solicit, negotiate or sell contracts without the proper license or
          registration. The bulletin also states that installing a solar energy product is a
          &ldquo;home improvement,&rdquo; which only a licensed contractor can do (CSLB, checked
          September 23, 2026).
        </p>
        <p className="mt-3">
          You will also meet &ldquo;solar dealers&rdquo; and &ldquo;solar power suppliers.&rdquo;
          In solar lending, the dealer is the company that sells the system and arranges the
          loan, whether or not its own crew puts it on the roof. The CFPB found that solar
          salespeople, installers and lenders often have agreements with each other, so sales,
          installation and financing can blend into one conversation (CFPB, Issue Spotlight:
          Solar Financing, August 7, 2024). Two questions from the CPUC&rsquo;s list sort this out
          quickly: is the salesperson your employee, and will you subcontract the installation to
          another company? For what the arrangement can add to a loan, see{' '}
          <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
            how solar dealer fees work
          </Link>
          .
        </p>
        <p className="mt-3">
          This site sits on the referral side of that line. California Rate Relief is a referral
          service. We are not a licensed contractor. How we are paid is on{' '}
          <Link href="/how-we-make-money" className={link}>
            how we make money
          </Link>
          . For what a solar broker does and when using one makes sense, see{' '}
          <Link href="/blog/solar-broker" className={link}>
            what a solar broker is in California
          </Link>
          .
        </p>
      </section>

      <section id="who-regulates">
        <h2 className={h2}>Who regulates solar companies in California?</h2>
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Which California agency oversees which part of a home solar project</caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Agency</th>
                <th className="p-3">What it covers</th>
                <th className="p-3">When to contact it</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Contractors State License Board (CSLB)</th>
                <td className="p-3 align-top">Contractor licenses, bonds, salesperson registration, contract rules</td>
                <td className="p-3 align-top">Before you sign, and for complaints about the work or the sale</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">California Public Utilities Commission (CPUC)</th>
                <td className="p-3 align-top">Net billing rules for PG&amp;E, SCE and SDG&amp;E; the solar consumer protection guide</td>
                <td className="p-3 align-top">Questions about export credits, interconnection or your utility bill</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">Department of Financial Protection and Innovation (DFPI)</th>
                <td className="p-3 align-top">PACE program administrators, licensed and regulated since 2019</td>
                <td className="p-3 align-top">If the system is financed through your property tax bill</td>
              </tr>
              <tr className="border-t">
                <th scope="row" className="p-3 align-top">City or county building department</th>
                <td className="p-3 align-top">Permits and inspections</td>
                <td className="p-3 align-top">To confirm a permit was pulled and the work passed inspection</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          PACE deserves a warning of its own. DFPI notes that the payments are added to your
          annual property tax bill and that PACE contracts &ldquo;are signed financing agreements
          that are difficult to void&rdquo; (DFPI, checked September 23, 2026). For the red flags
          in a solar contract itself, read{' '}
          <Link href="/solar-problems/solar-contract-red-flags-california" className={link}>
            the solar contract terms to question before signing
          </Link>
          .
        </p>
      </section>

      <section id="national-vs-local">
        <h2 className={h2}>National solar companies or a local installer?</h2>
        <p>
          Size tells you less than it seems. A national brand may sell mostly leases and power
          purchase agreements, and some work through local dealers, so the crew on your roof
          and the company that answers a service call may be different businesses. A small local
          installer may do everything in-house but carry less financing choice. Neither is
          automatically better. What matters is written in the contract: who installs, who
          services, what the warranty covers for your payment type, and what happens if the
          company stops operating.
        </p>
        <p className="mt-3">
          That last point is not hypothetical: solar installers do go out of business, and the
          contract decides what you are left holding. Our guide to{' '}
          <Link href="/solar-installers/solar-installer-bankruptcy-california" className={link}>
            what survives when a solar installer goes bankrupt
          </Link>{' '}
          explains which warranties and contracts continue, and{' '}
          <Link href="/solar-installers/worst-solar-companies-california" className={link}>
            checking a company&rsquo;s court and license record
          </Link>{' '}
          lists the residential solar bankruptcies on the federal docket.
        </p>
      </section>

      <section id="top-rated">
        <h2 className={h2}>Top-rated solar companies: how to read the lists and reviews</h2>
        <p>
          Lists of the &ldquo;top,&rdquo; &ldquo;best&rdquo; or &ldquo;top rated&rdquo; solar
          companies measure different things, and none of them measures your roof. Before you
          lean on one, ask three questions about it:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <strong>What was counted?</strong> Installation volume rewards the biggest sellers,
            star averages reward whoever collects the most reviews, and editorial picks reflect
            whatever the editor weighted. A company can top one list and miss another.
          </li>
          <li>
            <strong>Who paid for it?</strong> Some publishers earn money from the companies they
            list. Ask. This site is one of those businesses: California Rate Relief is
            compensated by a solar provider when a homeowner we refer signs an agreement, which is
            why the reviews here are alphabetical and unranked.
          </li>
          <li>
            <strong>Where and when?</strong> A national ranking says little about the crew that
            serves your county this year. The DGStats search above is the closest thing to a
            neutral local view, because it comes from utility interconnection records rather than
            marketing.
          </li>
        </ul>
        <p className="mt-3">
          For reviews, the CPUC&rsquo;s advice is to check several sites and look for a
          consistent picture. Read the one- and two-star reviews from the last year and the
          company&rsquo;s replies: slow service visits, roof leaks at mounting points and billing
          surprises are the complaints that tell you what owning the system with that company
          would be like.
        </p>
      </section>

      <section id="solar-roof">
        <h2 className={h2}>Solar roofing companies: who can do the roof and the panels?</h2>
        <p>
          A new roof and a solar system are two trades in California&rsquo;s license system. The
          CSLB&rsquo;s C-39 Roofing classification covers products that &ldquo;seal, waterproof
          and weatherproof structures&rdquo; and does not mention solar. The C-46 Solar
          classification lets its holder do other building trades only &ldquo;when required to
          install a thermal or photovoltaic solar energy system&rdquo; (CSLB, checked September
          23, 2026). A general building contractor holding a B license can coordinate both
          through licensed subcontractors. So when one company sells you &ldquo;roof plus
          solar,&rdquo; ask which license covers each part of the job and look up both.
        </p>
        <p className="mt-3">
          Order matters too. The CPUC&rsquo;s guide says that if you plan to replace your roof
          soon, you should do it before the solar goes on, and it suggests asking who will do the
          roof work, what their license number is, what roof warranty comes with it, and roughly
          what it would cost to remove and reinstall the panels for a future roof job (CPUC,
          checked September 23, 2026). Our guides to{' '}
          <Link href="/blog/is-my-roof-good-for-solar-california" className={link}>
            whether your roof is ready for solar
          </Link>{' '}
          and{' '}
          <Link href="/blog/free-roof-replacement-with-solar-panels-california" className={link}>
            &ldquo;free roof replacement&rdquo; solar offers
          </Link>{' '}
          cover the rest.
        </p>
      </section>

      <section id="company-reviews">
        <h2 className={h2}>Solar company reviews and comparisons on this site</h2>
        <p>
          These reviews check what each company publishes about itself against public records:
          license numbers at the CSLB, court filings and the company&rsquo;s own contract terms.
          The list is alphabetical and unranked. Inclusion does not mean a referral agreement
          exists with any of them. The full index is on the{' '}
          <Link href="/solar-installers" className={link}>
            California solar company reviews page
          </Link>
          .
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {REVIEWS.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className={link}>
                {r.name} review
              </Link>
              <span className="text-sm text-muted-foreground">: {r.note}</span>
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-lg font-semibold text-foreground">Head-to-head comparisons</h3>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {COMPARISONS.map((c) => (
            <li key={c.href}>
              <Link href={c.href} className={link}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Shopping for equipment rather than an installer? The{' '}
          <Link href="/panel-reviews" className={link}>
            solar panel brand reviews
          </Link>{' '}
          cover the modules themselves, and the{' '}
          <Link href="/battery" className={link}>
            home battery guide
          </Link>{' '}
          covers storage sizing and incentives.
        </p>
        <p className="mt-3">
          Looking for SolarCity? It is part of Tesla. SolarCity&rsquo;s own SEC filing records
          that it became a wholly owned subsidiary of Tesla on November 21, 2016, and
          Tesla&rsquo;s support pages move former MySolarCity customers to a Tesla Account (SEC;
          Tesla, checked September 23, 2026). The{' '}
          <Link href="/solar-installers/tesla-solar-review" className={link}>
            Tesla Solar review
          </Link>{' '}
          covers what that company sells and services today. If you were searching for solar in
          California City, the Kern County town, the{' '}
          <Link href="/solar-cost/california-city" className={link}>
            California City solar cost guide
          </Link>{' '}
          covers its utility and permit office.
        </p>
      </section>

      <section id="commercial">
        <h2 className={h2}>Commercial and industrial (C&amp;I) solar companies</h2>
        <p>
          &ldquo;C&amp;I&rdquo; is industry shorthand for commercial and industrial customers:
          offices, warehouses, farms, schools and other businesses. Those projects are bought
          differently from a home system. Many run through an engineering, procurement and
          construction (EPC) firm, or a developer that may own the system and sell you the power.
          The license classes are the same (C-46, C-10 or B), but the home-sale rules on this
          page, such as salesperson registration and the solar disclosure document required on a
          residential solar contract, are written for homes (CSLB, checked September 23, 2026).
        </p>
        <p className="mt-3">
          For a business project, start with{' '}
          <Link href="/commercial-solar/companies-california" className={link}>
            commercial solar companies and EPCs in California
          </Link>
          , then{' '}
          <Link href="/commercial-solar/solar-developers" className={link}>
            how a solar developer differs from an installer
          </Link>{' '}
          and{' '}
          <Link href="/commercial-solar/cost-per-watt-california" className={link}>
            what commercial systems cost per watt
          </Link>
          .
        </p>
      </section>

      <QuoteChecklist />

      <section id="own-install">
        <h2 className={h2}>Can you install solar yourself in California?</h2>
        <p>
          The law allows it in limited cases. The owner-builder exemption in Business and
          Professions Code section 7044 covers owners who do the work themselves, or through
          their own employees paid wages, on a structure not intended for sale. For a principal
          residence the CSLB lists three conditions: the work is done before any sale, you lived
          in the home for the 12 months before the work is completed, and you have used the
          exemption on no more than two structures in any three-year period (CSLB, checked
          September 23, 2026). The CSLB also warns homeowners to be wary of unlicensed
          &ldquo;consultants&rdquo; who suggest owner-builder status as a way to save money. You
          still need the building permit and inspection, and your utility must approve the
          interconnection before the system is switched on.
        </p>
      </section>

      <section id="become-installer">
        <h2 className={h2}>How to become a solar contractor or start a solar company</h2>
        <p>
          The license comes first. To sit for a CSLB exam you need at least four years of
          journey-level experience in the classification, and up to
          three of those years can be credited from technical training, apprenticeship or
          education; at least one year must be practical experience (CSLB, checked September 23,
          2026). The application processing fee is $450. Once you pass, the license issues after
          you file a $25,000 contractor bond, show workers&rsquo; compensation coverage or an
          exemption, and pay an initial license fee of $200 for a sole owner or $350 for other
          business types (CSLB, checked September 23, 2026). Anyone selling for you needs an HIS
          registration. The details are in our guide to the{' '}
          <Link href="/blog/solar-license-california" className={link}>
            California solar contractor license
          </Link>
          .
        </p>
      </section>

      <section id="next-questions">
        <h2 className={h2}>The questions that come after choosing a company</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            What the system should cost:{' '}
            <Link href="/solar-panels-california" className={link}>
              solar panel cost and sizing in California
            </Link>
            , or run a quote through the{' '}
            <Link href="/tools/solar-panel-calculator" className={link}>
              bill and quote calculator
            </Link>
            .
          </li>
          <li>
            How the export credit works under current rules:{' '}
            <Link href="/blog/nem-2-vs-nem-3-california" className={link}>
              NEM 2.0 versus the Net Billing Tariff
            </Link>
            .
          </li>
          <li>
            Which incentives still apply in 2026:{' '}
            <Link href="/blog/california-solar-tax-credit-2026" className={link}>
              California solar incentives and the federal credit
            </Link>
            .
          </li>
          <li>
            How long the process takes:{' '}
            <Link href="/blog/solar-installation-timeline-california" className={link}>
              the solar installation timeline from contract to switch-on
            </Link>
            .
          </li>
          <li>
            Sales tactics to walk away from:{' '}
            <Link href="/solar-problems/solar-door-to-door-sales-california" className={link}>
              door-to-door solar sales
            </Link>{' '}
            and{' '}
            <Link href="/solar-problems/solar-dealer-fees-explained" className={link}>
              dealer fees hidden in financing
            </Link>
            .
          </li>
          <li>
            The official tools behind all of this, in one list:{' '}
            <Link href="/blog/solar-resources" className={link}>
              California solar resources
            </Link>
            .
          </li>
          <li>
            How to collect bids that line up:{' '}
            <Link href="/blog/solar-system-quotes-california" className={link}>
              getting three comparable solar quotes
            </Link>
            .
          </li>
        </ul>
      </section>

      <HubSpokeLinks hub="installers" currentPath={PATH} />
    </DecisionPage>
  );
}
