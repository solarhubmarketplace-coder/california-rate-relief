import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';

export const metadata: Metadata = {
  title: 'Solar Savings Blog | California Rate Relief',
  description:
    'Understand California utility bills, time-of-use plans and solar options. Sourced guides for PG&E, SCE and SDG&E customers.',
  alternates: {
    canonical: '/blog',
  },
};

// Blog post data. Add new posts here.
//
// This array is the /blog index and the only listing of the section: a post that
// is not in it is linked from nowhere unless another post happens to mention it.
// scripts/assert-city-links.mjs fails when a published post has no inbound
// internal link at all, which is how the fourteen added on 2026-09-18 were found.
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** The post's own last-modified date. Never a date this file invents. */
  date: string;
  /** Only where the post itself publishes a reading time. */
  readTime?: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  // claude/ta-release-20260923 — topical-authority wave
  {
    slug: 'sce-nem-2',
    title: 'SCE NEM 2.0 vs Solar Billing Plan: Net Metering Rules',
    excerpt:
      'SCE NEM 2.0 lasts 20 years from your PTO date on TOU-D-4-9PM. How it differs from SCE’s Solar Billing Plan (NEM 3.0), what ends it early, and export rates.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'why-are-my-nem-charges-so-high',
    title: 'Why Are My NEM Charges So High? 7 Causes on a Solar Bill',
    excerpt:
      'High NEM charges usually mean more usage, less solar output, or imports at pricier hours than your exports. How to read the year-to-date figure and fix it.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'nem-3-lawsuit',
    title: 'NEM 3.0 Lawsuit: What the Courts Decided (2026 Update)',
    excerpt:
      'California’s appeals court upheld NEM 3.0 on remand in March 2026, after a 2025 Supreme Court ruling. The case timeline, and what could still change.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'nem-3-export-rates-california',
    title: 'NEM 3.0 Export Rates in California: 2026 Values by Hour',
    excerpt:
      'Under NEM 3.0, PG&E pays under 1¢/kWh for an April noon export but about $1.15 at 7 p.m. in August. 2026 export values by hour for PG&E, SCE and SDG&E.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'what-is-nem-true-up',
    title: 'What Is a NEM True-Up? How the Annual Solar Bill Works',
    excerpt:
      'A NEM true-up is the yearly bill that settles a solar account’s charges and credits. How it works on NEM 2.0 and NEM 3.0, and what happens to extra credit.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'when-does-nem-2-expire',
    title: 'When Does NEM 2.0 Expire? The 20-Year Clock Explained',
    excerpt:
      'NEM 2.0 expires 20 years after interconnection, so the first accounts end in the mid-2030s. What starts the clock, what ends it early and what comes next.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'nem-pge',
    title: 'What Does NEM Mean on a PG&E Bill? NEM Charges Explained',
    excerpt:
      'NEM on a PG&E bill means Net Energy Metering, the solar billing program. What NEM charges are, why you get two statements, and how the True-Up works.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'prepaid-lease-solar',
    title: 'Prepaid Solar Lease in California: What You Pay and Own',
    excerpt:
      'A prepaid solar lease swaps monthly payments for one upfront payment. The provider still owns the panels. Costs, sale, buyout and end-of-term checks.',
    date: '2026-09-23',
    category: 'Solar Financing',
  },
  {
    slug: 'no-upfront-cost-solar-panels',
    title: 'No Upfront Cost Solar Panels in California: Who Pays',
    excerpt:
      'No-upfront-cost solar is paid later: a loan, a lease or a per-kWh PPA. How the company gets paid, the pros and cons, and the total-cost test to run first.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'solar-payback-period-california',
    title: 'Solar Payback Period in California (2026): Work Out Yours',
    excerpt:
      'How to work out solar payback in California in 2026: price per watt, self-use versus export credits, fixed charges, the ended tax credit and batteries.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'pge-solar-calculator',
    title: 'PG&E Solar Calculator: How to Use It and Check a Quote',
    excerpt:
      'PG&E’s solar calculator sits in its Clean Energy Calculator and uses 12 months of your usage. What it estimates, what it can’t, and how to check a quote.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'solar-for-renters',
    title: 'Solar for Renters in California: What You Can Actually Do',
    excerpt:
      'Renters can’t sign a rooftop solar deal, but they can use CPUC 20% bill-discount programs, utility community solar, SOMAH and CARE or FERA. What fits whom.',
    date: '2026-09-23',
    category: 'Solar Financing',
  },
  {
    slug: 'replacement-solar-inverter-cost',
    title: 'Replacement Solar Inverter Cost in California: What Sets It',
    excerpt:
      'A replacement solar inverter’s cost depends on type, warranty, labor, permits and whether you add a battery. What to check first and how to read a quote.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'solar-panel-repair-cost',
    title: 'Solar Panel Repair Cost in California: What Drives It',
    excerpt:
      'What sets the cost of a solar repair in California: the part that failed, whether a warranty pays for labor, roof access and panel removal. Checklist inside.',
    date: '2026-09-23',
    category: 'Solar Longevity',
  },
  {
    slug: 'solar-panel-removal-reinstall-cost',
    title: 'Solar Panel Removal and Reinstall Cost in California',
    excerpt:
      'What sets the cost to remove and reinstall solar panels for a new roof in California, who may do the work, how leases handle it, and a quote checklist.',
    date: '2026-09-23',
    category: 'Solar Longevity',
  },
  {
    slug: 'ladwp-solar-rooftops-program',
    title: 'LADWP Solar Rooftops Program: Pay, Terms, Who Qualifies',
    excerpt:
      'LADWP rents your roof for a utility-owned solar system: $360 to $900 a year for up to 20 years. Eligibility, roof rules, selling your home and leaving early.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'roof-leak-after-solar-panel-install',
    title: 'Roof Leak After Solar Panel Install? What to Do in CA',
    excerpt:
      'A roof leak after solar goes in: protect the house, document it, give the installer written notice, and escalate to CSLB if it won’t fix its work.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'solar-panels-tile-roof-california',
    title: 'Solar Roof Tiles vs Panels on a Tile Roof in California',
    excerpt:
      'Clay or concrete tile mounts, what breaks tiles, setbacks and a future re-roof, and how solar roof tiles differ as a project. Get these in writing first.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'rooftop-solar-credits-ruling-california',
    title: 'California Rooftop Solar Credits Ruling: What It Means',
    excerpt:
      'California courts upheld the CPUC’s net billing (NEM 3.0) decision: the 2025 Supreme Court ruling, the 2026 appeal, and what it means for your solar credits.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'solar-broker',
    title: 'What a solar broker is, and what one can legally do in California',
    excerpt:
      'A solar broker can refer you to licensed installers and book appointments, but California rules bar quoting or selling the contract. Questions to ask one.',
    date: '2026-09-23',
    category: 'Getting Quotes',
  },
  {
    slug: 'solar-license-california',
    title: 'California solar license requirements: installing and selling solar',
    excerpt:
      'The CSLB license you need to install solar in California, the registration you need to sell it, and the experience, exam, bond and fees for each.',
    date: '2026-09-23',
    category: 'Getting Quotes',
  },
  {
    slug: 'what-percentage-of-california-power-is-solar',
    title: 'What percentage of California\'s power is solar?',
    excerpt:
      'Solar supplied 21.3% of California’s 2024 power mix and 23.4% of in-state generation, before counting rooftop systems. What the CEC numbers mean.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'inflation-reduction-act-solar-california',
    title: 'The Inflation Reduction Act and solar in California: what changed, and what is left',
    excerpt:
      'The IRA set a 30% home solar credit through 2032, but federal law ended it for installs completed after 2025. What California homeowners can still use.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'pros-and-cons-of-solar-panels-california',
    title: 'Pros and cons of solar panels in California in 2026',
    excerpt:
      'The real advantages and drawbacks of home solar in California in 2026: net billing, no federal credit, battery costs, property tax, contracts and roofs.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'solar-resources',
    title: 'California solar resources: the official tools, data and rules worth bookmarking',
    excerpt:
      'Free, official solar resources for California homeowners: sunlight and production data, license checks, net billing rules, incentives and market data.',
    date: '2026-09-23',
    category: 'Getting Quotes',
  },
  {
    slug: 'ladwp-rates',
    title: 'LADWP Rates 2026: Tier Prices, Peak Hours and Cost per kWh',
    excerpt:
      'LADWP electric rates for 2026: R-1A tier prices by season, R-1B peak hours, the Power Access Charge and how much rates rose from 2025.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'average-utility-bill-california',
    title: 'Average Utility Bill in California: Electric, Gas and More',
    excerpt:
      'California homes averaged $161 a month for electricity in 2024, per EIA, plus about $59 for natural gas. See the numbers by utility and why bills vary.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'average-kwh-per-day-california',
    title: 'Average kWh per Day in California: 16.5 kWh (2024 Data)',
    excerpt:
      'California homes averaged about 16.5 kWh a day in 2024, per EIA. See baseline allowances by utility and the cheapest hours to use power.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'pge-tier-rates',
    title: 'PG&E Tier Rates 2026: Tier 1 vs Tier 2 Prices on E-1',
    excerpt:
      'PG&E\'s tiered E-1 plan charges 32.561¢ per kWh in Tier 1 and 40.702¢ in Tier 2 from March 1, 2026. See baseline allowances, history and a sample bill.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'where-does-california-get-its-electricity',
    title: 'Where Does California Get Its Electricity? 2024 Power Mix',
    excerpt:
      'In 2024 California\'s power came 34% from natural gas, 21% from solar and 62% from clean sources, per the CEC. Imports, hydro, nuclear and daily use.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'average-pge-bill-for-1-bedroom-apartment',
    title: 'Average PG&E Bill for a 1-Bedroom Apartment (2026)',
    excerpt:
      'No official average exists, so we priced typical apartment usage on PG&E\'s 2026 rates: about $105 to $191 a month for 250–450 kWh, before taxes.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'electricity-rates-highest-in-us-california',
    title: 'California Electricity Rates: 2nd Highest in the U.S. (2026)',
    excerpt:
      'EIA: California\'s residential price was 34.74¢/kWh in June 2026, second only to Hawaii and nearly double the U.S. 18.34¢. State rankings and why.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'how-often-does-ladwp-bill',
    title: 'How Often Does LADWP Bill? Every Two Months, Explained',
    excerpt:
      'LADWP bills homes every two months and businesses monthly. See why the bill covers about 60 days, how tiers scale, and 2026 water prices per HCF.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'income-qualified-bill-discount-pge',
    title: 'PG&E Income-Qualified Bill Discount: CARE and FERA (2026)',
    excerpt:
      'PG&E\'s income-qualified discounts are CARE (35%+ off electricity) and FERA (18%). See 2026–27 income limits, the lower daily charge and how to apply.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'direct-access-electricity-california',
    title: 'California Direct Access Electricity: Lottery, Cap and Rules',
    excerpt:
      'Direct Access lets a business buy power from a competitive supplier, but it is capped and closed to homes. See the 2025 lottery results and how to enroll.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'why-is-my-smud-bill-so-high',
    title: 'Why Is My SMUD Bill So High? 2026 Rates and Summer Peaks',
    excerpt:
      'A SMUD bill jumps in summer because weekday prices from noon to midnight rise, 5–8 p.m. hits 37.65¢, and rates rose 3% in 2026. Check each cause.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'what-is-3rd-party-electric-on-pge-bill',
    title: 'What Is 3rd Party Electric on a PG&E Bill? CCA Charges',
    excerpt:
      '3rd party electric on a PG&E bill is your community choice provider\'s generation charge. PG&E still delivers and bills. See the PCIA and a real comparison.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'sce-rate-schedules',
    title: 'SCE Rate Schedules 2026: Every Residential Plan Explained',
    excerpt:
      'Every SCE residential rate schedule in one place: Schedule D, TOU-D 4-9PM, 5-8PM and PRIME, CARE, FERA and solar, with June 2026 prices and who qualifies.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'did-pge-rates-go-up',
    title: 'Did PG&E Rates Go Up? Every Rate Change, 2023 to 2026',
    excerpt:
      'PG&E rates fell twice in 2026, to 33.7¢ per kWh, after big increases in 2023 and January 2024. See each change by date, why, and what 2027 may bring.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'sce-settlement-bill',
    title: 'SCE Annual Settlement Bill: How to Read Your Solar True-Up',
    excerpt:
      'An SCE settlement bill is the yearly statement for NEM solar customers: the year\'s net energy charges come due, and extra credit pays about 1.8¢/kWh.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'selling-electricity-back-to-the-grid-price-per-kwh',
    title: 'Selling Electricity Back to the Grid: Price per kWh (2026)',
    excerpt:
      'California utilities pay 0¢ to over $1 per kWh for solar exports, depending on the tariff, hour and month. See 2026 values for PG&E, SCE, SMUD and LADWP.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'chargepoint-cost-per-kwh-california',
    title: 'ChargePoint Cost per kWh in California: Prices and Fees',
    excerpt:
      'ChargePoint prices are set by each station owner, plus a ChargePoint fee of $0.25–$0.99 a session. See California display rules and home-charging costs.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'ladwp-ev-charging-rates',
    title: 'LADWP EV Charging Rates 2026: Discount, Meter and Rebates',
    excerpt:
      'LADWP takes 2.5¢ per kWh off EV charging in the Base period if the charger has its own TOU meter. See 2026 prices, the $10 minimum and rebates.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  // claude/ca-green-20260918
  {
    slug: 'can-you-cancel-solar-panel-contract-before-installation-california',
    title: 'Can You Cancel a Solar Contract Before Installation in California?',
    excerpt:
      'California gives at least three business days to cancel a home-solicited solar contract, five if you are 65 or older. What the statutes say and how to do it.',
    date: '2026-09-17',
    readTime: '12 min read',
    category: 'California Solar Rights',
  },
  {
    slug: 'do-solar-panels-increase-property-taxes-california',
    title: 'Do Solar Panels Increase Property Taxes in California?',
    excerpt:
      'California law excludes a qualifying active solar energy system from new-construction reassessment. What that covers, what it does not, and when it ends.',
    date: '2026-09-17',
    readTime: '10 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'does-solar-increase-home-value-california',
    title: 'Does Solar Increase Home Value in California?',
    excerpt:
      'California excludes an active solar system from new-construction reassessment until the home sells. Here is what the statute and the sale research actually say.',
    date: '2026-09-17',
    readTime: '9 min read',
    category: 'Solar Decision',
  },
  {
    slug: 'sce-time-of-use-rates-2026',
    title: 'SCE Time-of-Use Rates: Peak Hours and Plan Choice',
    excerpt: 'Compare 4–9 PM, 5–8 PM and PRIME, then check the full bill and generation provider before choosing a plan.',
    date: '2026-09-10', readTime: '6 min read', category: 'Utility Rates',
  },
  {
    slug: 'pge-time-of-use-rates-2026',
    title: 'PG&E Time-of-Use Rates: 2026 Plan Guide',
    excerpt: 'Compare E-TOU-C and E-TOU-D peak hours, baseline credits and usage patterns before choosing a rate plan.',
    date: '2026-09-09',
    readTime: '8 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'sce-rate-increase-2026',
    title: 'SCE Rate Increase 2026: What Southern California Edison Customers Need to Know',
    excerpt:
      'Check the effective date and rate plan on your SCE bill. Separate changes in electricity use from changes in price.',
    date: '2026-04-14',
    readTime: '7 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'california-24-dollar-fixed-charge-explained',
    title: 'The New $24 Fixed Charge on Your California Electric Bill, Explained',
    excerpt:
      'PG&E, SCE, and SDG&E are all adding a new monthly fixed charge to your bill. Here\'s what it is, when it starts, and whether solar still saves you money.',
    date: '2026-04-14',
    readTime: '6 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'solar-tax-credit-expired-2026-options',
    title: 'Solar Tax Credit Ended: California Options in 2026',
    excerpt:
      'Check the expenditure deadline, separate public assistance from payment contracts, and compare a proposal without an unavailable homeowner credit.',
    date: '2026-09-10',
    readTime: '8 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'nem-3-california-still-worth-it',
    title: 'Is Solar Still Worth It Under NEM 3.0 in California? (2026 Guide)',
    excerpt:
      'NEM 3.0 credits exports at values usually below the retail rate. When solar can still work in 2026, and what a battery changes.',
    date: '2026-04-14',
    readTime: '9 min read',
    category: 'Solar Education',
  },
  {
    slug: 'pge-vs-sce-vs-sdge-rates-compared',
    title: 'PG&E vs. SCE vs. SDG&E: Which California Utility Customers Pay the Most in 2026?',
    excerpt:
      'Compare June 2026 residential average rates, sample bills, time-of-use plans and the steps to check your own electricity costs.',
    date: '2026-09-09',
    readTime: '10 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'prepaid-ppa-california-2026',
    title: 'Prepaid Solar PPA in California: How It Works, What It Costs, and Who It\'s Best For (2026)',
    excerpt:
      'Prepaid PPAs are surging after the residential tax credit expired. Learn how they work, what they cost vs. buying or leasing, and whether this option fits your situation.',
    date: '2026-04-14',
    readTime: '9 min read',
    category: 'Solar Savings',
  },
  {
    slug: 'ppa-loan-vs-solar-lease-vs-cash-california',
    title: 'PPA Loan vs Solar Lease vs Cash: 2026 California Comparison',
    excerpt:
      "California's four ways to pay for solar compared, cash, loan, lease, PPA, with the actual math for a typical $250/mo household.",
    date: '2026-04-23',
    readTime: '13 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'net-billing-vs-net-metering-california',
    title: 'Net Billing vs Net Metering: The California Solar Difference, Explained',
    excerpt:
      "Net metering and net billing sound similar but pay you very differently. Here's what California's NEM 3.0 Net Billing tariff changed.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'nem-3-california-timeline',
    title: 'NEM 3.0 California Timeline: Key Dates, Deadlines, and What Happens Next',
    excerpt:
      'A complete timeline of NEM 3.0 — the CPUC vote, the April 2023 go-live, grandfathering windows, AB 942, and what is ahead in 2026 and beyond.',
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'hoa-solar-rights-california',
    title: 'Can an HOA Ban Solar Panels in California? Your Solar Rights, Explained',
    excerpt:
      "California's Solar Rights Act prevents HOAs from unreasonably blocking rooftop solar. Here's what the law says and how to handle pushback.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'California Solar Rights',
  },
  {
    slug: 'low-income-solar-california',
    title: 'Low-Income Solar in California: Find the Right Application Path',
    excerpt:
      'Separate utility-bill discounts from solar applications. Check current DAC-SASH eligibility, property requirements and funding with the administrator.',
    date: '2026-09-10',
    readTime: '9 min read',
    category: 'California Solar Incentives',
  },
  {
    slug: 'free-roof-replacement-with-solar-panels-california',
    title: 'Free Roof Replacement With Solar Panels in California: Is It Real?',
    excerpt:
      "Some California solar programs include a roof replacement at no added cost. Here's how roof-included PPAs and solar financing actually work, what qualifies, and where the catches are.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'California Solar Financing',
  },
  {
    slug: 'nem-2-vs-nem-3-california',
    title: 'NEM 2.0 vs NEM 3.0 California: What Changed and What It Means For You',
    excerpt:
      "NEM 2.0 and NEM 3.0 are not the same. California's 2023 tariff change moved export credits to hourly avoided-cost values. Here is the side-by-side comparison.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'rent-solar-panels-for-your-home-california',
    title: 'Rent Solar Panels For Your Home: California 2026 Guide',
    excerpt:
      "Renting solar panels in California, how solar leases and PPAs actually work, typical monthly costs, who qualifies, and when renting beats owning.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'are-solar-panels-worth-it-california',
    title: 'Are Solar Panels Worth It in California? 2026 Honest Answer',
    excerpt:
      "For most California homeowners paying $200+ per month, solar is still worth it in 2026. but only with a battery and only if the math fits your situation.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'Solar Decision',
  },
  {
    slug: 'switch-to-solar-california',
    title: 'Switch to Solar in California: The 2026 Complete Guide',
    excerpt:
      "Everything California homeowners need to know about switching to solar in 2026 — the NEM 3.0 rules, financing options, what it costs, the 5-step process.",
    date: '2026-04-23',
    readTime: '10 min read',
    category: 'Getting Started',
  },
  {
    slug: 'solar-system-quotes-california',
    title: 'Solar System Quotes in California: How to Get 3 Real Quotes Fast',
    excerpt:
      "How to get legitimate California solar quotes without sales spam. What a real solar quote should include and what red flags to watch for.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Getting Quotes',
  },
  {
    slug: 'tesla-powerwall-installers-california',
    title: 'Tesla Powerwall Installers in California: 2026 Guide',
    excerpt:
      "Who can install a Tesla Powerwall in California, how Tesla's certified installer program works, and what drives the installed price.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Battery Storage',
  },
  {
    slug: 'solar-panels-for-ev-charging-california',
    title: 'Solar Panels for EV Charging in California: Size, Cost, and ROI',
    excerpt:
      "Sizing solar for an electric vehicle in California — how much extra capacity you need, what it adds to your system cost, and why EV + solar pays back faster than solar alone.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar + EV',
  },
  {
    slug: 'what-is-nem-3-california',
    title: 'What Is NEM 3.0 in California? Plain-English Explainer',
    excerpt:
      "NEM 3.0 (the Net Billing Tariff) replaced California net metering in April 2023. Here is what it actually is, how it works, and what it means.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'free-solar-for-seniors-california',
    title: 'Free Solar for Seniors in California: Check the Actual Program',
    excerpt:
      'Age alone does not establish eligibility. Check DAC-SASH, bill-discount programs and the terms of private solar offers; the older SASH program is closed.',
    date: '2026-09-10',
    readTime: '7 min read',
    category: 'California Solar Programs',
  },
  {
    slug: 'do-solar-panels-work-at-night-california',
    title: 'Do Solar Panels Work at Night? California Guide',
    excerpt:
      "Solar panels don't produce electricity at night. But a battery or the grid keeps your home running. Here is how it works in California.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Basics',
  },
  {
    slug: 'do-solar-panels-work-on-cloudy-days-california',
    title: 'Do Solar Panels Work on Cloudy Days? California Guide',
    excerpt:
      "Yes — solar panels work on cloudy days at 10-80% of peak output depending on cloud density. Here is what that means for California homes.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar Basics',
  },
  {
    slug: 'why-is-my-california-electric-bill-so-high',
    title: 'Why Is My California Electric Bill So High? PGE, SCE, SDGE Explained',
    excerpt:
      "California rates are among the highest in the country. Here is why PG&E, SCE, SDG&E, and LADWP bills keep climbing, and how to lower yours.",
    date: '2026-04-23',
    readTime: '9 min read',
    category: 'Utility Bills',
  },
  {
    slug: 'how-big-of-a-solar-system-do-i-need-california',
    title: 'How Big of a Solar System Do I Need in California? 2026 Sizing Guide',
    excerpt:
      "How to size a California solar system by monthly bill, kWh usage, and future loads (EV, AC, pool). Why NEM 3.0 changes optimal sizing.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'System Sizing',
  },
  {
    slug: 'can-solar-panels-power-a-whole-house-california',
    title: 'Can Solar Panels Power a Whole House in California?',
    excerpt:
      "Yes — a correctly sized solar + battery system runs a typical California home through the full day, evening, and most outages. Here is what it takes.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Capacity',
  },
  {
    slug: 'do-solar-panels-work-during-power-outage-california',
    title: 'Do Solar Panels Work During a Power Outage in California?',
    excerpt:
      "Grid-tied solar without a battery shuts off during an outage. for safety. Only solar + battery keeps your home powered. Here is how it works and what PSPS means.",
    date: '2026-04-23',
    readTime: '7 min read',
    category: 'Solar + Outages',
  },
  {
    slug: 'is-my-roof-good-for-solar-california',
    title: 'Is My Roof Good for Solar? California Checklist 2026',
    excerpt:
      "How to tell if your California roof is suitable for solar. orientation, age, shading, roof material, structural strength.",
    date: '2026-04-23',
    readTime: '8 min read',
    category: 'Roof Suitability',
  },
  {
    slug: 'what-happens-to-solar-panels-after-25-years',
    title: 'What Happens to Solar Panels After 25 Years? California Guide',
    excerpt:
      "Solar panels don't stop working at 25 years — they degrade gradually to ~80-87% of original output. Here is what California homeowners do when warranties expire.",
    date: '2026-04-23',
    readTime: '6 min read',
    category: 'Solar Longevity',
  },
  // claude/ca-financing-20260918 — Tier A financing-decision cluster
  {
    slug: 'is-it-better-to-buy-or-lease-solar-panels-california',
    title: 'Is It Better to Buy or Lease Solar Panels in California?',
    excerpt:
      'The federal residential credit no longer applies to expenditures made after 31 December 2025, and the statute dates the expenditure to completion of installation. What that changes about the comparison, and what it leaves alone.',
    date: '2026-09-18',
    readTime: '11 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'how-much-does-it-cost-to-lease-solar-panels-california',
    title: 'How Much Does It Cost to Lease Solar Panels in California?',
    excerpt:
      'No two lease quotes are built the same way. What determines the payment, which contract terms move it, and the disclosure document California requires to carry the total.',
    date: '2026-09-18',
    readTime: '10 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'zero-down-solar-california',
    title: 'What Does $0 Down Solar Mean in California?',
    excerpt:
      'A no-down-payment offer is a statement about the first payment, not the total. Where the cost actually sits in a loan, a lease and a PPA, and what California already caps.',
    date: '2026-09-18',
    readTime: '8 min read',
    category: 'Solar Financing',
  },
  // claude/audit-links-20260918 — fourteen posts that were published and then
  // linked from nowhere. The 2026-09-18 link audit found them with zero inbound
  // internal links anywhere on the site: they were in the sitemap, and that was
  // the whole of their discovery path, because this array is hand-maintained and
  // nobody added them to it. The excerpts below are written for this index and
  // deliberately carry no figure: every number on these subjects lives on the
  // post, beside its source. The date on each is that post's own last-modified
  // date, read from the post. readTime is only set where the post itself
  // publishes one, which is why it is optional in BlogPost above.
  {
    slug: 'solar-carport-california-guide',
    title: 'Solar Carports in California: Cost, Permits and Design',
    excerpt:
      'What a carport project includes beyond the panels \u2014 the structure, the foundations, the trenching \u2014 and the scope questions a quote has to answer before two quotes can be compared.',
    date: '2026-09-23',
    category: 'Getting Quotes',
  },
  {
    slug: 'best-time-to-install-solar-panels-california',
    title: 'Best Time to Install Solar Panels in California',
    excerpt:
      'There is no single best month. The right time is when the roof, the electricity use, the bids, the permit and the utility application are all ready.',
    date: '2026-09-12',
    category: 'Solar Decision',
  },
  {
    slug: 'commercial-solar-financing-california',
    title: 'Commercial Solar Financing in California',
    excerpt:
      'Purchase, loan, PPA, PACE and SBA paperwork compared for the same commercial project, so ownership and payment terms are chosen on documents rather than on a monthly figure.',
    date: '2026-09-11',
    category: 'Solar Financing',
  },
  {
    slug: 'solar-tax-credit-2026',
    title: 'Solar Tax Credit in 2026: Completion Dates and Records',
    excerpt:
      'A payment receipt is not the whole record. The installation timeline and the correct tax year decide what can be claimed, and a deposit settles neither.',
    date: '2026-09-10',
    category: 'California Solar Incentives',
  },
  {
    slug: 'ab-942-california-solar',
    title: 'AB 942: California Solar Lease Transfer Rights',
    excerpt:
      'What the law changed for a homeowner selling a house with a leased or financed solar system, and what has to be disclosed to the buyer.',
    date: '2026-04-24',
    category: 'California Solar Rights',
  },
  {
    slug: 'adu-solar-requirements-california',
    title: 'ADU Solar Requirements in California',
    excerpt:
      'When an accessory dwelling unit triggers the Energy Code solar requirement, when it does not, and how the unit ends up metered.',
    date: '2026-04-24',
    category: 'California Solar Policy',
  },
  {
    slug: 'what-is-demand-charge-california',
    title: 'What Is a Demand Charge, and Do California Homes Pay One?',
    excerpt:
      'What a demand charge bills you for rather than how much you used, which California customers pay one, and why a battery acts on it differently from solar.',
    date: '2026-04-24',
    category: 'Utility Rates',
  },
  {
    slug: 'tech-clean-california-heat-pump-rebate',
    title: 'TECH Clean California: Heat Pump Rebate Program',
    excerpt:
      'What the program covers, who administers it, and where a heat pump rebate sits alongside an electrification plan.',
    date: '2026-04-24',
    category: 'California Solar Programs',
  },
  {
    slug: 'solar-panel-cleaning-california',
    title: 'Solar Panel Cleaning in California: When It Actually Helps',
    excerpt:
      'When cleaning changes production and when it does not, what a pressure washer does to a panel warranty, and what to ask a cleaning service.',
    date: '2026-04-24',
    category: 'Solar Longevity',
  },
  {
    slug: 'solar-pool-heating-california',
    title: 'Solar Pool Heating in California: How It Compares',
    excerpt:
      'Solar pool heating is not photovoltaic solar. What it does to the swim season, what it cannot do, and how to compare it against a gas heater.',
    date: '2026-04-24',
    category: 'Solar Basics',
  },
  {
    slug: 'how-long-do-solar-panels-last',
    title: 'How Long Do Solar Panels Last?',
    excerpt:
      'What a degradation rate means in practice, what the manufacturer warranties actually cover, and how long the inverter is expected to last beside them.',
    date: '2026-04-16',
    readTime: '10 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'california-public-utilities-commission',
    title: 'What Is the CPUC, and How Does It Affect Your Bill?',
    excerpt:
      'What the commission decides, which utilities it regulates, and where to read the decisions that move a residential rate.',
    date: '2026-04-16',
    readTime: '9 min read',
    category: 'Utility Rates',
  },
  {
    slug: 'solar-panel-maintenance-cost',
    title: 'Solar Panel Maintenance Cost: What to Expect',
    excerpt:
      'What maintenance a rooftop system actually needs, which parts of it a warranty covers, and where the recurring costs land over the life of the system.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'solar-panel-bird-proofing',
    title: 'Solar Panel Bird Proofing: Methods and Costs',
    excerpt:
      'Why pigeons nest under panels, what critter guards and mesh do about it, and what to check before paying for the work.',
    date: '2026-04-16',
    readTime: '5 min read',
    category: 'Solar Longevity',
  },
  {
    slug: 'are-solar-panels-a-scam',
    title: 'Are Solar Panels a Scam? What California Buyers Should Know',
    excerpt:
      'Where the complaints actually come from \u2014 the sales call, the contract and the fees \u2014 and how to tell those apart from the equipment.',
    date: '2026-04-16',
    readTime: '7 min read',
    category: 'Solar Decision',
  },
];

/**
 * /blog is an index, not an article.
 *
 * The only prose unique to this route is the h1, the standfirst and the post
 * excerpts; the writing itself lives on the posts it links to, each of which
 * already emits its own Article node. Typing the index as an Article would
 * assert that this page IS that piece of writing — it is not — and would put a
 * second Article in play for the same subject. CollectionPage with an ItemList
 * says what the page actually does: it indexes these posts, and names them.
 *
 * Every name, URL and count below is read from the blogPosts array rendered on
 * the page, so the schema cannot drift from what a reader sees. The list items
 * are plain ListItems rather than nested BlogPosting nodes on purpose: each
 * post's own page is the right place to describe the post.
 */
function buildBlogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'California Energy Savings Blog',
    description:
      'Expert guides on lowering your electric bill, understanding utility rate changes, and making the most of solar energy in California.',
    url: 'https://ratereliefca.com/blog',
    isPartOf: {
      '@type': 'WebSite',
      name: 'California Rate Relief',
      url: 'https://ratereliefca.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://ratereliefca.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

export default function BlogPage() {
  return (
    <PublicLayout>
      <Header />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBlogIndexSchema()),
        }}
      />
      <main className='py-16 bg-background'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto'>
            {/* Page Header */}
            <div className='mb-12'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 tracking-tight'>
                California Energy Savings Blog
              </h1>
              <p className='text-lg text-muted-foreground max-w-2xl'>
                Expert guides on lowering your electric bill, understanding
                utility rate changes, and making the most of solar energy in
                California.
              </p>
            </div>

            {/* Bill-first step (2026-09-23); it opens the inquiry form at the
                end of the list at step 2. */}
            <HeroQuickCheck topic="California solar guides" className="mb-12" />

            {/* Blog Posts */}
            <div className='space-y-8'>
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className='bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group'
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <span className='text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wide'>
                      {post.category}
                    </span>
                    <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                      <Calendar className='h-3 w-3' />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    {post.readTime ? (
                      <div className='flex items-center gap-1 text-xs text-muted-foreground'>
                        <Clock className='h-3 w-3' />
                        <span>{post.readTime}</span>
                      </div>
                    ) : null}
                  </div>

                  <Link href={`/blog/${post.slug}`} className='block'>
                    <h2 className='text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight'>
                      {post.title}
                    </h2>
                  </Link>

                  <p className='text-foreground/70 leading-relaxed mb-4'>
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all'
                  >
                    Read Article
                    <ArrowRight className='h-4 w-4' />
                  </Link>
                </article>
              ))}
            </div>

            {/* The closing ask (2026-09-23): the inquiry form itself, in place of
                a link-only box that sent readers to the home page. */}
            <div className='mt-16'>
              <SolarInquiry topic="California solar guides" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </PublicLayout>
  );
}
