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
};
