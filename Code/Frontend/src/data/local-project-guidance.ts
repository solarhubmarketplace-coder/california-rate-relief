export interface LocalGuidanceSource {
  label: string;
  url: string;
  verifiedAt: string;
  /** The exact fact used here, including the source's practical limit. */
  scope: string;
}

export interface LocalGuidanceLink {
  href: string;
  label: string;
}

export interface LocalGuidanceCheck {
  title: string;
  body: string;
}

export interface LocalProjectGuidanceEntry {
  city: string;
  actionIds: readonly string[];
  intro: string;
  quoteQuestions: readonly [string, string, string];
  localChecks: readonly LocalGuidanceCheck[];
  related: readonly LocalGuidanceLink[];
  sources: readonly LocalGuidanceSource[];
}

const verified20260920 = '2026-09-20';
const verified20260918 = '2026-09-18';

const temeculaPermit: LocalGuidanceSource = {
  label: 'City of Temecula — Photovoltaic Systems',
  url: 'https://www.temeculaca.gov/304/Photovoltaic-Systems',
  verifiedAt: verified20260920,
  scope:
    'Eligible projects use SolarAPP+ and the City portal. The City lists a fire inspection before the building inspection and a garage ESS condition tied to residential fire sprinklers. Eligibility and battery location remain project-specific.',
};

const murrietaPermit: LocalGuidanceSource = {
  label: 'City of Murrieta — Self-Issuing Permits & SolarAPP+',
  url: 'https://www.murrietaca.gov/1368/Self--Issuing-Permits-Solar-App',
  verifiedAt: verified20260920,
  scope:
    'Eligible residential roof-mounted projects use SolarAPP+ and the City portal. Zero-lot-line properties do not use that automated route, and a solar-related service-panel upgrade requires a separate permit.',
};

const sanDiegoPermit: LocalGuidanceSource = {
  label: 'City of San Diego — Information Bulletin 301, Solar PV Systems',
  url: 'https://www.sandiego.gov/development-services/forms-publications/information-bulletins/301',
  verifiedAt: verified20260920,
  scope:
    'The May 2026 bulletin separates electrical, combination and building-permit paths by project scope. Its defined self-issued path applies only when every stated property, system and scope limit is met.',
};

const escondidoPermit: LocalGuidanceSource = {
  label: 'City of Escondido — SolarAPP+',
  url: 'https://www.escondido.gov/1247/Solar-App-Plus',
  verifiedAt: verified20260920,
  scope:
    'Licensed contractors can use SolarAPP+ for eligible residential rooftop work. Other PV installations and owner-builder projects follow the regular permit route described by the City.',
};

const sdcpBill: LocalGuidanceSource = {
  label: 'San Diego Community Power — Understanding Your Bill',
  url: 'https://sdcommunitypower.org/understanding-your-bill/',
  verifiedAt: verified20260920,
  scope:
    'For an enrolled SDCP account, SDCP supplies generation while SDG&E continues delivery and consolidated billing. The page does not establish enrollment or a rate plan for a particular address.',
};

const ceaBill: LocalGuidanceSource = {
  label: 'Clean Energy Alliance — Understanding Your Bill with CEA',
  url: 'https://thecleanenergyalliance.org/understanding-your-bill-with-cea/',
  verifiedAt: verified20260920,
  scope:
    'CEA names Carlsbad, Escondido and Oceanside among its member cities and explains its generation role alongside SDG&E delivery and billing. City membership does not prove an account is enrolled.',
};

const chulaVistaPermit: LocalGuidanceSource = {
  label: 'City of Chula Vista — Residential Solar Energy',
  url: 'https://www.chulavistaca.gov/departments/development-services/build-green/residential-solar-energy',
  verifiedAt: verified20260918,
  scope:
    'The City publishes an online Citizen Access process with SolarAPP+ as the expedited route and a traditional review route. The correct route and inspections still depend on the submitted project.',
};

const sdgeInterconnection: LocalGuidanceSource = {
  label: 'SDG&E — Applying for Solar/Battery/Other Interconnection Authorizations',
  url: 'https://www.sdge.com/solar/solar-and-battery-installation-center',
  verifiedAt: verified20260920,
  scope:
    'SDG&E says the customer or contractor submits the interconnection application in DIIS. After the Authority Having Jurisdiction inspection release, SDG&E conducts any required inspection or final review before sending permission to operate; the source does not promise approval or timing for a specific project.',
};

const palmSpringsPermit: LocalGuidanceSource = {
  label: 'City of Palm Springs — Permits',
  url: 'https://www.palmspringsca.gov/government/departments/building/permits',
  verifiedAt: verified20260918,
  scope:
    'The City directs applicants to Palm Springs Online to select the application for the project. The page does not name SolarAPP+ or establish a project-specific review or inspection schedule.',
};

const riversideCountyPermit: LocalGuidanceSource = {
  label: 'Riverside County TLMA — SolarAPP+',
  url: 'https://rctlma.org/solarapp',
  verifiedAt: verified20260918,
  scope:
    'Winchester is unincorporated, so the building-permit path is through Riverside County. The County page directs eligible projects through SolarAPP+ and then the County permit portal; eligibility remains scope-specific.',
};

const carlsbadPermit: LocalGuidanceSource = {
  label: 'City of Carlsbad — Residential solar permitting with SolarAPP+',
  url: 'https://www.carlsbadca.gov/departments/community-development/building/solarapp',
  verifiedAt: verified20260918,
  scope:
    'The City routes eligible licensed-contractor rooftop projects through SolarAPP+ and then its Customer Self Service portal. The page does not make that route universal for every solar, roof, panel or storage scope.',
};

const oceansidePermit: LocalGuidanceSource = {
  label: 'City of Oceanside — SolarAPP+',
  url: 'https://www.ci.oceanside.ca.us/government/development-services/building/solarapp',
  verifiedAt: verified20260918,
  scope:
    'The City routes eligible projects through SolarAPP+ and then eTRAKiT for the City permit. The page does not establish that every project qualifies for automated review.',
};

export const LOCAL_PROJECT_GUIDANCE = {
  temecula: {
    city: 'Temecula',
    actionIds: ['CA02'],
    intro:
      'A Temecula bid is incomplete until it says whether roof work, battery placement and both City inspections are included.',
    quoteQuestions: [
      'Did every bidder use the same 12 months of electricity use and the same roof and shade assumptions?',
      'Are roof work, battery location and main-panel work identified and priced separately?',
      'Who files the permit, schedules the fire and building inspections, handles corrections and completes the utility application?',
    ],
    localChecks: [
      {
        title: 'Confirm the permit path',
        body: 'SolarAPP+ is for eligible projects. Ask the contractor to name the route for this design instead of treating automated review as guaranteed.',
      },
      {
        title: 'Resolve roof and battery scope before signing',
        body: 'Temecula lists the fire inspection before the building inspection. Its page also says an ESS cannot be installed in a garage unless the home has residential fire sprinklers, so the proposed location belongs in the written scope.',
      },
    ],
    related: [
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check the roof before solar' },
      { href: '/blog/free-roof-replacement-with-solar-panels-california', label: 'Separate roof work from the solar offer' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
    ],
    sources: [temeculaPermit],
  },
  murrieta: {
    city: 'Murrieta',
    actionIds: ['CA08'],
    intro:
      'Murrieta separates some work that can look like one line in a proposal. Make the array, battery and service-panel scope visible before comparing totals.',
    quoteQuestions: [
      'Is this a new array, a battery added to an existing system, or both, and is compatibility documented?',
      'Does the property and design qualify for SolarAPP+, or will it use another City review path?',
      'Is any service-panel upgrade separately priced, permitted and assigned to a licensed contractor?',
    ],
    localChecks: [
      {
        title: 'Zero-lot-line properties take another route',
        body: 'Murrieta excludes zero-lot-line properties from its SolarAPP+ route. Ask which City path applies before relying on an automated-review schedule.',
      },
      {
        title: 'Panel work is a separate permit item',
        body: 'The City says a solar-related service-panel upgrade requires a separate permit. A proposal that omits it is not the same scope as one that includes it.',
      },
      {
        title: 'A business property needs its own project brief',
        body: 'For a business property, use its own bill and load history, property and roof authority, and electrical and project scope. Keep that comparison separate from a home project.',
      },
    ],
    related: [
      { href: '/battery/home-battery-cost-california', label: 'Price battery scope separately' },
      { href: '/blog/do-solar-panels-work-during-power-outage-california', label: 'Decide which loads need backup' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
      { href: '/commercial-assessment', label: 'Start a commercial project assessment' },
    ],
    sources: [murrietaPermit],
  },
  'san-diego': {
    city: 'San Diego',
    actionIds: ['CA04'],
    intro:
      'Start with one written scope. In San Diego, adding storage, structural roof work or a different property type can change the permit path as well as the price.',
    quoteQuestions: [
      'Do the proposals show the same array, battery, roof, electrical and backup-circuit scope?',
      'Do cash and financed offers state the total obligation, equipment and assumptions separately?',
      'Who owns the City permit, inspection corrections, SDG&E interconnection and permission-to-operate steps?',
    ],
    localChecks: [
      {
        title: 'Match the permit to the actual project',
        body: 'San Diego Bulletin 301 separates electrical, combination and building-permit paths. The self-issued route has defined property and scope limits; it is not a blanket approval path.',
      },
      {
        title: 'Read both sides of the electric bill',
        body: 'An enrolled San Diego Community Power account can show SDCP generation while SDG&E continues delivery and consolidated billing. Use the provider lines on the actual bill when a proposal models remaining charges.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Compare cash, loan, lease and PPA terms' },
    ],
    sources: [sanDiegoPermit, sdcpBill],
  },
  escondido: {
    city: 'Escondido',
    actionIds: ['CA05'],
    intro:
      'The useful installer comparison is the one that keeps the design constant and makes the permit, roof and battery responsibilities explicit.',
    quoteQuestions: [
      'Did each bidder use the same bill history, roof planes, shade and monthly production assumptions?',
      'Which licensed contractor is responsible for plans, corrections, inspection and utility interconnection?',
      'Are battery, roof and main-panel work included, excluded or priced as separate options?',
    ],
    localChecks: [
      {
        title: 'SolarAPP+ is limited by applicant and project',
        body: 'Escondido makes SolarAPP+ available to licensed contractors for eligible residential rooftop projects. Owner-builders and other PV installations use the regular permit route.',
      },
      {
        title: 'Generation and delivery can appear separately',
        body: 'Clean Energy Alliance identifies Escondido as a member city, while SDG&E continues delivery and billing. Confirm the generation line on the account instead of inferring enrollment from the city name.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check roof condition and usable planes' },
      { href: '/battery/home-battery-cost-california', label: 'Separate battery scope from the array' },
    ],
    sources: [escondidoPermit, ceaBill],
  },
  'chula-vista': {
    city: 'Chula Vista',
    actionIds: ['CA11'],
    intro:
      'A permit service is one part of a solar project. The proposal should also assign design, corrections, inspection, interconnection and the physical work.',
    quoteQuestions: [
      'Which City route applies to this design: the expedited SolarAPP+ path or traditional review?',
      'Who handles plan submission, corrections, inspection and SDG&E interconnection through permission to operate?',
      'Does the written total include the array, roof work, electrical work, storage and every stated payment obligation?',
    ],
    localChecks: [
      {
        title: 'Name the complete local path',
        body: 'Chula Vista publishes expedited and traditional online routes. Ask the bidder to identify the applicable route and the inspection stages for the submitted design.',
      },
      {
        title: 'Do not confuse a permit task with a complete installation',
        body: 'Filing and permit charges do not cover equipment, construction, utility interconnection or warranty responsibility. Those items belong in the same written comparison.',
      },
      {
        title: 'City approval is separate from permission to operate',
        body: 'After the City inspection release, SDG&E still completes any required inspection or final review before it sends permission to operate. Put the owner of each handoff in the written scope.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/sdge-time-of-use-rates-2026', label: 'Check SDG&E time-of-use periods' },
    ],
    sources: [chulaVistaPermit, sdgeInterconnection],
  },
  'palm-springs': {
    city: 'Palm Springs',
    actionIds: ['CA27'],
    intro:
      'Compare the full obligation, not the advertised payment. Keep ownership terms, equipment and local project duties in separate columns.',
    quoteQuestions: [
      'Who owns the panels and battery, and who is responsible for maintenance, roof access and removal or transfer?',
      'What is the total cash price or payment schedule, and does a lease or PPA payment increase over time?',
      'Who selects the correct City application, handles inspection and completes utility interconnection?',
    ],
    localChecks: [
      {
        title: 'Use the project-specific City application',
        body: 'Palm Springs directs applicants to its online portal to select the application for the actual project. Its public permit page does not promise SolarAPP+ review or a project timeline.',
      },
      {
        title: 'Put ownership duties beside the price',
        body: 'A cash purchase, loan, lease and PPA assign payment, equipment ownership, transfer and end-of-term duties differently. Require those terms in writing before comparing monthly figures.',
      },
    ],
    related: [
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Compare ownership and payment structures' },
      { href: '/solar-problems/solar-escalator-clause-explained', label: 'Read an escalator clause' },
    ],
    sources: [palmSpringsPermit],
  },
  winchester: {
    city: 'Winchester',
    actionIds: ['CA10'],
    intro:
      'Winchester projects use Riverside County permitting. For storage, decide the backup job first and then compare equipment and compatibility.',
    quoteQuestions: [
      'Which loads must run during an outage, for how long, and does the design include the required backup equipment?',
      'Is the battery compatible with the existing or proposed inverter, service equipment and operating mode?',
      'Who handles the County permit, inspection, corrections and utility interconnection?',
    ],
    localChecks: [
      {
        title: 'The permit authority is Riverside County',
        body: 'Winchester is unincorporated. The applicable building-permit path is through Riverside County, so a proposal should not describe this as a Winchester city permit.',
      },
      {
        title: 'Backup and bill shifting are different designs',
        body: 'A battery sized around selected outage loads answers a different question from one used mainly to move energy between time periods. Put the operating goal and backed-up circuits in writing.',
      },
    ],
    related: [
      { href: '/blog/do-solar-panels-work-during-power-outage-california', label: 'Understand solar and batteries during an outage' },
      { href: '/battery/home-battery-cost-california', label: 'Compare battery scope and cost drivers' },
      { href: '/solar-savings/inland-empire', label: 'Inland Empire bill and project guide' },
    ],
    sources: [riversideCountyPermit],
  },
  carlsbad: {
    city: 'Carlsbad',
    actionIds: ['CA28'],
    intro:
      'Carlsbad has a defined two-step online route for eligible rooftop work. Make the bidder identify whether the proposed roof, panel and storage scope fits it.',
    quoteQuestions: [
      'Does the design qualify for the City SolarAPP+ route, and who uploads the approved package to Customer Self Service?',
      'Are roof, service-panel, storage and revision responsibilities included in the written total?',
      'Does the bill model use the account’s actual generation provider and SDG&E delivery charges?',
    ],
    localChecks: [
      {
        title: 'Two online steps do not mean every project is automated',
        body: 'Carlsbad routes eligible licensed-contractor rooftop projects through SolarAPP+ and then the City portal. Ask what happens if the design falls outside that scope or needs revisions.',
      },
      {
        title: 'Confirm the generation line',
        body: 'Clean Energy Alliance names Carlsbad as a member city, while SDG&E continues delivery and billing. The actual bill establishes whether the account is enrolled.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/blog/is-my-roof-good-for-solar-california', label: 'Check roof condition before bidding' },
    ],
    sources: [carlsbadPermit, ceaBill],
  },
  oceanside: {
    city: 'Oceanside',
    actionIds: ['CA28'],
    intro:
      'Oceanside uses SolarAPP+ and the City permit portal for eligible work. Compare who owns each handoff and what happens when the design changes.',
    quoteQuestions: [
      'Does the design qualify for SolarAPP+, and who moves the approved package into eTRAKiT?',
      'Who handles revisions, inspection, utility interconnection and permission to operate?',
      'Are array, battery, roof and electrical work shown as the same scope across every proposal?',
    ],
    localChecks: [
      {
        title: 'Track both permit steps',
        body: 'Oceanside directs eligible projects through SolarAPP+ and then eTRAKiT for the City permit. A bidder should identify the responsible party for both steps and for any corrections.',
      },
      {
        title: 'Use the account’s generation provider',
        body: 'Clean Energy Alliance names Oceanside as a member city, while SDG&E continues delivery and billing. City membership alone does not prove that a particular account is enrolled.',
      },
    ],
    related: [
      { href: '/solar-savings/san-diego-county', label: 'San Diego County project guide' },
      { href: '/battery/home-battery-cost-california', label: 'Separate storage from the array quote' },
    ],
    sources: [oceansidePermit, ceaBill],
  },
} as const satisfies Record<string, LocalProjectGuidanceEntry>;

export type SupportedLocalGuidanceSlug = keyof typeof LOCAL_PROJECT_GUIDANCE;

export function getLocalProjectGuidance(
  citySlug: string,
): LocalProjectGuidanceEntry | null {
  return (
    LOCAL_PROJECT_GUIDANCE[
      citySlug as SupportedLocalGuidanceSlug
    ] ?? null
  );
}
