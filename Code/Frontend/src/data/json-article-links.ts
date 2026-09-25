/**
 * Hand-picked "next question" links for data-driven article pages whose JSON
 * body cannot carry inline links. Rendered by components/growth/JsonArticleLinks.
 * Keys are full paths. Every href is a live route. Added 2026-09-23 for the
 * topical-authority wave (cross-owner link requests in the agents' manifests).
 */
export interface JsonArticleRelated {
  heading: string;
  intro?: string;
  links: { href: string; label: string }[];
}

export const JSON_ARTICLE_RELATED: Record<string, JsonArticleRelated> = {
  '/solar-installers/how-to-verify-a-solar-contractor-california': {
    heading: 'After the license check',
    links: [
      { href: '/solar-installers/licensed-solar-installer', label: 'Pull the list of licensed solar contractors in your county' },
      { href: '/solar-installers/worst-solar-companies-california', label: 'Check a company against the bankruptcy record' },
      { href: '/blog/solar-license-california', label: 'Which license classes cover solar work' },
      { href: '/solar-problems/solar-contract-red-flags-california', label: 'Red flags to look for in the contract itself' },
    ],
  },
  '/solar-installers/solar-installer-bankruptcy-california': {
    heading: 'If your installer is in trouble',
    links: [
      { href: '/solar-installers/worst-solar-companies-california', label: 'Which solar companies are in bankruptcy court' },
      { href: '/solar-installers/freedom-forever-bankruptcy-what-to-do', label: 'Freedom Forever customers: what to do now' },
      { href: '/solar-problems/attorney-to-sue-solar-company-california', label: 'When to bring in a lawyer for a solar dispute' },
    ],
  },
  '/solar-problems/solar-company-took-my-money-california': {
    heading: 'If the complaint route does not resolve it',
    links: [
      { href: '/solar-problems/attorney-to-sue-solar-company-california', label: 'Finding an attorney for a solar dispute' },
      { href: '/solar-problems/solar-lawsuit-california', label: 'Solar lawsuits and settlements in California' },
      { href: '/solar-installers/how-to-verify-a-solar-contractor-california', label: 'Checking the contractor’s license and bond' },
    ],
  },
  '/solar-problems/solar-contract-red-flags-california': {
    heading: 'Before and after you sign',
    links: [
      { href: '/solar-installers/licensed-solar-installer', label: 'Confirm the installer on the contract is licensed' },
      { href: '/blog/can-you-cancel-solar-panel-contract-before-installation-california', label: 'Cancelling a solar contract before installation' },
      { href: '/solar-problems/solar-lawsuit-california', label: 'What solar lawsuits in California have been about' },
    ],
  },
  // Tier 2 (claude/t2-installers-20260923): "solar dealers near me" lands here.
  '/solar-problems/solar-dealer-fees-explained': {
    heading: 'Finding and checking the company behind the loan',
    links: [
      { href: '/best-solar-companies-california', label: 'Find licensed solar installers near you and check their record' },
      { href: '/blog/solar-system-quotes-california', label: 'Get three solar quotes you can compare line by line' },
      { href: '/blog/solar-broker', label: 'What a solar broker can and cannot do' },
      { href: '/blog/ppa-loan-vs-solar-lease-vs-cash-california', label: 'Cash, loan, lease or PPA: the terms side by side' },
    ],
  },
  // Tier 2 (reviews lane): the rebate and Powerwall 2 vs 3 sections on this
  // page name these pages in prose; the JSON body cannot link them inline.
  '/battery/tesla-powerwall-3-cost-california': {
    heading: 'Rebates, installation and alternatives',
    links: [
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'Who qualifies for PG&E’s $7,500 battery rebate' },
      { href: '/battery/sgip-battery-rebate-california', label: 'SGIP battery budgets and waitlists, by administrator' },
      { href: '/blog/solar-rebates-by-california-utility', label: 'Solar and battery incentives by California utility' },
      { href: '/battery/add-powerwall-to-existing-solar', label: 'Adding a Powerwall to solar you already have' },
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Powerwall 3 against Enphase and FranklinWH' },
      { href: '/solar-installers/tesla-solar-review', label: 'Tesla Solar review: panels, inverter and service' },
    ],
  },
  '/solar-problems/do-i-still-get-a-utility-bill-with-solar': {
    heading: 'Read your own post-solar bill',
    links: [
      { href: '/blog/how-to-read-pge-bill', label: 'How to read a PG&E bill and solar statement' },
      { href: '/blog/how-to-read-sdge-bill', label: 'How to read an SDG&E bill with solar' },
      { href: '/blog/solar-rate', label: 'The rate plan solar homes pay at each utility' },
      { href: '/blog/average-utility-bill-california', label: 'The average California utility bill' },
    ],
  },
  // Tier 3 (claude/t3-misc-20260923): pages in the misc lane. The Powerwall
  // link on the rebate page is the t2-reviews link request.
  '/battery/pge-permanent-battery-storage-rebate': {
    heading: 'Put the rebate against a real price',
    links: [
      { href: '/battery/tesla-powerwall-3-cost-california', label: 'What a Powerwall 3 costs after the rebate' },
      { href: '/battery/how-many-batteries-do-i-need-california', label: 'How many batteries your home actually needs' },
      { href: '/battery/pge-solar-battery-rebate', label: 'Every PG&E battery incentive in one table' },
      { href: '/battery/sgip-battery-rebate-california', label: 'SGIP budgets and waitlists by administrator' },
    ],
  },
  '/battery/how-many-batteries-do-i-need-california': {
    heading: 'After you know the size',
    links: [
      { href: '/blog/solar-battery-backup-california', label: 'Home battery backup in California: cost, savings and rebates' },
      { href: '/battery/powerwall-vs-enphase-vs-franklinwh', label: 'Powerwall 3, Enphase 5P and FranklinWH specs side by side' },
      { href: '/battery/add-powerwall-to-existing-solar', label: 'Adding a battery to solar you already own' },
      { href: '/battery/pge-permanent-battery-storage-rebate', label: 'PG&E’s $7,500 rebate for outage-hit accounts' },
      { href: '/battery/battery-payback-nem-3-california', label: 'Whether a battery pays back under NEM 3.0' },
    ],
  },
  '/solar-installers/sunrun-lease-vs-ppa': {
    heading: 'Getting out, buying out or adding on',
    links: [
      { href: '/solar-installers/sunrun-buyout-cost', label: 'How a Sunrun buyout price is calculated' },
      { href: '/blog/what-happens-to-solar-lease-when-i-sell-california', label: 'Selling a home with a Sunrun lease or PPA' },
      { href: '/solar-installers/pge-and-sunrun', label: 'PG&E and Sunrun battery programs' },
      { href: '/blog/can-you-cancel-solar-panel-contract-before-installation-california#after-installation', label: 'How to get out of a solar contract in California' },
    ],
  },
};
