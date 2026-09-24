/**
 * Per-page topical links for the data-driven /battery/<slug> guides.
 *
 * The JSON article bodies are plain text, so a guide cannot link inside its
 * prose. This table gives each guide a short, hand-picked "next question" list
 * (sibling battery guides first, then the NEM, incentive and cost pages where
 * the reader's next question usually lives), rendered under the article by
 * src/app/battery/[slug]/page.tsx. Anchors are descriptive and vary by page,
 * per the topical-authority link rules (SEO/24 §5.5). Every href is a live
 * route or a page added on this branch.
 *
 * A slug with no entry here gets only the shared <HubSpokeLinks/> block.
 */

export interface BatteryTopicLinks {
  heading: string;
  intro?: string;
  links: { href: string; label: string }[];
}

export const BATTERY_TOPIC_LINKS: Record<string, BatteryTopicLinks> = {
  'pge-permanent-battery-storage-rebate': {
    heading: 'Before you count on the $7,500',
    intro: 'The rebate is one piece of the cost. These pages cover the rest of the decision.',
    links: [
      { href: '/battery/pge-solar-battery-rebate', label: 'Every PG&E battery incentive, side by side' },
      { href: '/battery/sgip-battery-rebate-california', label: 'Where each SGIP budget stands this month' },
      { href: '/battery/home-battery-cost-california', label: 'What an installed home battery costs' },
      { href: '/battery/battery-backup-vs-generator-california', label: 'Battery or generator for wildfire-season outages' },
      { href: '/blog/solar-during-psps-california', label: 'What solar does during a PSPS shutoff' },
      { href: '/blog/pge-time-of-use-rates-2026', label: 'PG&E time-of-use plans the rebate requires' },
    ],
  },
  'pge-solar-battery-rebate': {
    heading: 'Next questions for a PG&E customer',
    links: [
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'The $7,500 outage rebate, condition by condition' },
      { href: '/battery/tesla-powerwall-3-cost-california', label: 'Which rebates apply to a Powerwall in California' },
      { href: '/battery/sgip-battery-rebate-california', label: 'SGIP budget status by utility' },
      { href: '/blog/nem-3-export-rates-california', label: 'What PG&E pays for exported solar, hour by hour' },
      { href: '/battery/battery-payback-nem-3-california', label: 'Whether storage pays back under net billing' },
      { href: '/blog/california-solar-tax-credit-2026', label: 'California solar and battery incentives overview' },
      { href: '/blog/nem-pge', label: 'Reading the NEM lines on a PG&E bill' },
    ],
  },
  'solar-battery-company': {
    heading: 'Check the company, then the equipment',
    links: [
      { href: '/blog/tesla-powerwall-installers-california', label: 'How Powerwall installer certification works' },
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'The three most-quoted batteries compared on specs' },
      { href: '/battery/add-powerwall-to-existing-solar', label: 'Adding storage to solar you already own' },
      { href: '/solar-problems/solar-contract-red-flags-california', label: 'Contract terms to question before signing' },
      { href: '/solar-problems/solar-door-to-door-sales-california', label: 'Your rights with door-to-door solar sellers' },
      { href: '/best-solar-companies-california', label: 'Compare solar companies across California' },
    ],
  },
  'battery-storage-capacity-california': {
    heading: 'What the grid numbers mean at home',
    links: [
      { href: '/blog/solar-duck-curve-california', label: 'What the batteries are flattening: the duck curve' },
      { href: '/blog/nem-3-export-rates-california', label: 'Why evening solar exports are worth more' },
      { href: '/battery/battery-payback-nem-3-california', label: 'Home battery payback under NEM 3.0' },
      { href: '/battery/how-many-batteries-do-i-need-california', label: 'Sizing a home battery in kWh' },
      { href: '/battery/solar-and-storage-association-california', label: 'Who speaks for the storage industry in Sacramento' },
      { href: '/blog/california-energy-commission', label: 'What the California Energy Commission does' },
    ],
  },
  'add-powerwall-to-existing-solar': {
    heading: 'Related retrofit questions',
    links: [
      { href: '/blog/adding-solar-panels-existing-system-california', label: 'Adding panels instead of (or with) storage' },
      { href: '/blog/when-does-nem-2-expire', label: 'How long a NEM 2.0 account keeps its terms' },
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Powerwall 3 against Enphase and FranklinWH' },
      { href: '/battery/tesla-powerwall-3-cost-california', label: 'What drives a Powerwall 3 quote' },
      { href: '/blog/tesla-powerwall-installers-california', label: 'Finding a Tesla-certified installer' },
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'PG&E’s $7,500 rebate for outage-hit customers' },
    ],
  },
  'solar-and-storage-association-california': {
    heading: 'The rules the association argued over',
    links: [
      { href: '/blog/net-billing-vs-net-metering-california', label: 'What the CPUC’s NEM 3.0 decision adopted' },
      { href: '/blog/nem-3-lawsuit', label: 'The court challenge to net billing, start to finish' },
      { href: '/battery/solar-battery-company', label: 'How to vet a battery installer yourself' },
      { href: '/battery/battery-storage-capacity-california', label: 'California’s battery fleet in megawatts' },
      { href: '/blog/california-public-utilities-commission', label: 'How the CPUC shapes your electric bill' },
    ],
  },
  'powerwall-vs-enphase-vs-franklinwh': {
    heading: 'After you pick a battery',
    links: [
      { href: '/battery/add-powerwall-to-existing-solar', label: 'Retrofitting a Powerwall onto older solar' },
      { href: '/battery/solar-battery-company', label: 'Choosing who installs it' },
      { href: '/battery/how-many-batteries-do-i-need-california', label: 'How many units the house needs' },
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'PG&E’s outage rebate and its VPP enrollment rule' },
      { href: '/blog/nem-3-export-rates-california', label: 'Export credit values that set battery savings' },
    ],
  },
  'battery-backup-vs-generator-california': {
    heading: 'Outage planning, continued',
    links: [
      { href: '/blog/do-solar-panels-work-during-power-outage-california', label: 'Why grid-tied solar shuts off in an outage' },
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'PG&E’s rebate for homes with repeated wildfire outages' },
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Backup output of three popular batteries' },
      { href: '/battery/how-many-batteries-do-i-need-california', label: 'Storage needed for a multi-day shutoff' },
      { href: '/blog/solar-battery-backup-california', label: 'Solar battery backup cost and savings' },
    ],
  },
  'battery-payback-nem-3-california': {
    heading: 'Inputs to the payback math',
    links: [
      { href: '/blog/nem-3-export-rates-california', label: 'The hourly export values behind the math' },
      { href: '/blog/nem-3-california-still-worth-it', label: 'Whether solar still pencils out under NEM 3.0' },
      { href: '/battery/home-battery-cost-california', label: 'Installed battery cost, line by line' },
      { href: '/battery/pge-solar-battery-rebate', label: 'Rebates a PG&E customer can still claim' },
    ],
  },
  'how-many-batteries-do-i-need-california': {
    heading: 'Once you know the size',
    links: [
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Units, stacking limits and output by brand' },
      { href: '/battery/home-battery-cost-california', label: 'What that much storage costs installed' },
      { href: '/battery/battery-backup-vs-generator-california', label: 'When a generator covers the gap instead' },
      { href: '/blog/nem-3-export-rates-california', label: 'Sizing storage around evening export values' },
    ],
  },
  'sgip-battery-rebate-california': {
    heading: 'Other incentives to check',
    intro: 'SGIP is one piece of the decision. These pages cover the rest of the battery math.',
    links: [
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'PG&E’s separate $7,500 outage rebate' },
      { href: '/battery/pge-solar-battery-rebate', label: 'All PG&E battery programs in one table' },
      { href: '/battery/tesla-powerwall-3-cost-california', label: 'Powerwall rebates by utility and community energy program' },
      { href: '/blog/solar-battery-backup-california', label: 'What a backup battery runs, costs and saves' },
      { href: '/blog/sce-solar-billing-plan', label: 'The SCE Solar Billing Plan that SGIP requires' },
      { href: '/battery/home-battery-cost-california', label: 'What a home battery costs before any incentive' },
      { href: '/blog/california-solar-tax-credit-2026', label: 'Statewide solar incentive overview' },
      { href: '/battery/solar-battery-company', label: 'Checking an SGIP developer before you sign' },
    ],
  },
  'tesla-powerwall-alternatives': {
    heading: 'Comparing the options',
    links: [
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Spec-sheet comparison of three batteries' },
      { href: '/battery/add-powerwall-to-existing-solar', label: 'Which batteries retrofit onto existing solar' },
      { href: '/battery/solar-battery-company', label: 'What to ask any battery installer' },
    ],
  },
};
