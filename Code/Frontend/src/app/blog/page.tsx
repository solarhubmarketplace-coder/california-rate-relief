import type { Metadata } from 'next';
import Link from 'next/link';
import { PublicLayout } from '@/components/layout/PublicLayout';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SolarInquiry } from '@/components/growth/SolarInquiry';
import { HeroQuickCheck } from '@/components/growth/HeroQuickCheck';
import { TOPIC_HUBS, hubForPath, topicHub, type TopicHubId } from '@/data/topic-hubs';

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
//
// Every live post is listed (topic map Block 5 §5.11 rule 1). The page groups
// the posts by topic hub (data/topic-hubs.ts, hubForPath), so a new post lands
// under its hub's heading once it is a spoke there, and under "More guides"
// until then; the order within a group is the order of this array.
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
  // 2026-09-24 integration — Tier 2 and Tier 3 posts, 
  {
    slug: '10-kw-solar-system-cost',
    title: '10 kW Solar System Cost in California: What 2025 Data Shows',
    excerpt:
      'At the 2025 California average for home systems of 10 kW or more ($4.26/W), 10 kW is about $42,600 before incentives. By utility, installer and size.',
    date: '2026-09-23',
    category: 'Solar Savings',
  },
  {
    slug: 'average-sdge-bill-2-bedroom-apartment',
    title: 'Average SDG&E Bill for a 2-Bedroom Apartment (2026)',
    excerpt:
      'No official average exists, so we priced apartment usage on SDG&E\'s August 2026 rates: about $225 to $331 a month for 470 to 663 kWh, before taxes.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'does-pool-pump-use-a-lot-of-electricity',
    title: 'Does a Pool Pump Use a Lot of Electricity? (California)',
    excerpt:
      'A pool pump can be a home’s second-largest electric load. What each kilowatt costs a month on PG&E, SCE, SDG&E, SMUD and LADWP rates, and how to cut it.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'electricity-peak-hours-california',
    title: 'Electricity Peak Hours in California by Utility (2026)',
    excerpt:
      'Peak hours are 4–9 p.m. on the main PG&E, SCE and SDG&E plans. SMUD peaks 5–8 p.m. weekdays; LADWP 1–5 p.m. See off-peak hours and the cheapest times.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'electricity-rates-by-zip-code',
    title: 'Electricity Rates by ZIP Code in California (2026)',
    excerpt:
      'California rates follow your utility, CCA and plan, not your ZIP. Find who serves your address and compare 2026 prices for PG&E, SCE, SDG&E, SMUD, LADWP.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'flat-roof-solar-panels',
    title: 'Flat Roof Solar Panels in California: Mounts and Permits',
    excerpt:
      'Solar panels on a flat or low-slope California roof: ballasted vs attached racks, tilt, weight, the membrane, permits and when to re-roof first.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'help-with-pge-bill',
    title: 'Help Paying Your PG&E Bill: 2026 Assistance Programs',
    excerpt:
      'Behind on PG&E? REACH pays up to $800 after a shutoff notice, LIHEAP up to $1,000 and AMP forgives up to $8,000. Who qualifies, and what to do first.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'how-much-does-it-cost-to-turn-on-electricity',
    title: 'How Much Does It Cost to Turn On Electricity in California?',
    excerpt:
      'Starting electric service in California: no home deposit at PG&E, SCE or SDG&E, a $19 LADWP turn-on fee, SMUD deposit rules and first-bill charges.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'how-to-lower-pge-bill',
    title: 'How to Lower Your PG&E Bill: Plans, Hours and Discounts',
    excerpt:
      'Lower a PG&E bill by moving use out of 4–9 p.m., picking the right plan, staying near baseline and claiming CARE, FERA or Medical Baseline. 2026 prices.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'how-to-read-pge-bill',
    title: 'How to Read Your PG&E Bill: Every Page and Charge',
    excerpt:
      'A PG&E bill has five parts: account summary, service notes, electric, gas and a breakdown. What each line means, how to check the math, and solar bills.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'how-to-read-sdge-bill',
    title: 'How to Read Your SDG&E Bill, With or Without Solar',
    excerpt:
      'Read an SDG&E bill line by line: the charges breakdown, usage by time period, the Base Services Charge, solar and NEM statements, and codes on a net meter.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'ladwp-net-metering',
    title: 'LADWP Net Metering: Does NEM 3.0 Apply in Los Angeles?',
    excerpt:
      'NEM 3.0 does not apply to LADWP. How LADWP net metering credits your solar, what happens to leftover credit, who qualifies, leases, and interconnection.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'ladwp-solar-program',
    title: 'LADWP Solar Programs 2026: Rooftops, Shared Solar, Rebates',
    excerpt:
      'LADWP lists no rebate on solar you buy. What it offers: Solar Rooftops ($360 to $900 a year), Shared Solar for apartments, SGIP and a feed-in tariff.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'lease-roof-for-solar-panels',
    title: 'Leasing Your Roof for Solar in California: How It Works',
    excerpt:
      'Can you lease your roof for solar panels in California? Who pays homeowners for roof space, what LADWP pays, business roof deals and contract terms to check.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'pge-ev-rates',
    title: 'PG&E EV Rates 2026: EV2-A, EV-B and E-ELEC Prices',
    excerpt:
      'PG&E’s EV2-A off-peak rate is 22.558¢/kWh from midnight to 3 p.m. Compare EV2-A, the separately metered EV-B and E-ELEC, with 2024–2026 price history.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'pge-rate-schedules',
    title: 'PG&E Rate Schedules 2026: Every Residential Tariff',
    excerpt:
      'Every PG&E residential rate schedule with its March 1, 2026 prices: E-1, E-TOU-C, E-TOU-D, E-ELEC, EV2-A, EV-B and multifamily plans, plus tariff PDFs.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'pge-solar-billing-plan',
    title: 'PG&E Solar Billing Plan: How NEM 3.0 Billing Works (2026)',
    excerpt:
      'PG&E’s Solar Billing Plan is its name for NEM 3.0. Who is on it, the E-ELEC rate, how hourly export credits are priced, the bonus, and how the True-Up works.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'pge-solar-program',
    title: 'PG&E Solar Programs in 2026: What Is Open and What Is Not',
    excerpt:
      'PG&E does not pay for rooftop panels. Its solar programs: Solar Billing Plan, Green Saver (full), Solar Choice (on hold), DAC-SASH, SOMAH and SGIP.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'sce-solar-billing-plan',
    title: 'SCE Solar Billing Plan: NEM 3.0 Rates and How SCE Pays',
    excerpt:
      'How SCE’s Solar Billing Plan (NEM 3.0) works: TOU-D-PRIME prices, export credit rates by year and hour, the bonus, how to read the bill and the True-Up.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'sdge-and-solar',
    title: 'SDG&E and Solar: Solar Billing Plan, EV-TOU-5 and Credits',
    excerpt:
      'New SDG&E solar goes on the Solar Billing Plan and EV-TOU-5 rate. See 2026 import prices, what exports earn by hour, and what stays on the monthly bill.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'sdge-net-metering',
    title: 'SDG&E Net Metering: NEM 2.0 vs Solar Billing Plan (2026)',
    excerpt:
      'SDG&E NEM 2.0 vs the Solar Billing Plan (NEM 3.0): who is on each, the EV-TOU-5 rate, how export credits work, why there is no bonus, and the true-up.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'smud-peak-hours',
    title: 'SMUD Peak Hours 2026: Summer and Time-of-Day Rates',
    excerpt:
      'SMUD peak hours are 5–8 p.m. on weekdays. Summer adds mid-peak noon–midnight from June 1 to Sept. 30. See 2026 prices, holidays and when summer ends.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'smud-solar-program',
    title: 'SMUD Solar Program 2026: Export Rate, Rebates, SolarShares',
    excerpt:
      'SMUD has no solar panel rebate. It pays 9.6¢/kWh for exports, cut its battery incentive to $300/kWh on Sept. 23, 2026, and runs SolarShares.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'solar-discount',
    title: 'Solar Discount Programs in California: 20% Off, No Panels',
    excerpt:
      'California’s solar discount programs cut an income-qualified bill 20% with no panels on your roof. Who runs yours: PG&E, SCE, your CCA or your city.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'solar-duck-curve-california',
    title: 'California Solar Duck Curve: What It Is and Why It Matters',
    excerpt:
      'The duck curve is California’s midday dip in net demand as solar floods the grid, then the steep evening ramp. Curtailment, batteries and your bill.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
  {
    slug: 'solar-leasing-company',
    title: 'Solar Leasing Companies in California: How to Compare Them',
    excerpt:
      'A solar leasing company owns the panels and bills you monthly for 20 to 25 years. How few Californians lease now, why tax law changed it, what to check.',
    date: '2026-09-23',
    category: 'Solar Financing',
  },
  {
    slug: 'solar-panels-over-canals-california',
    title: 'California Solar Panels Over Canals: Projects and Results',
    excerpt:
      'Is California covering its canals with solar panels? What Project Nexus built, the Delta-Mendota floating solar test, the research estimates and the limits.',
    date: '2026-09-23',
    category: 'Roof Suitability',
  },
  {
    slug: 'solar-ppa-companies',
    title: 'Solar PPA Companies in California: How to Compare Offers',
    excerpt:
      'A PPA company owns the system and sells you its power per kWh for 20 to 25 years. PPAs were 42% of new California home solar in 2025. What to compare.',
    date: '2026-09-23',
    category: 'Solar Financing',
  },
  {
    slug: 'solar-rate',
    title: 'Solar Rates in California: The Tariff and Rate Plan (2026)',
    excerpt:
      'California solar homes pay two rates: a required plan for grid power (E-ELEC, TOU-D-PRIME or EV-TOU-5) and hourly export credits. 2026 figures by utility.',
    date: '2026-09-23',
    category: 'California Solar Policy',
  },
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
  // claude/t2-structure-20260923 — posts that were live but missing from this
  // index (topic map Block 5 §1.2 and §5.11: /blog must list every post).
  // Title, excerpt and date are each post's own meta title, meta description
  // and last-modified date as its page file states them on 2026-09-23.
  {
    slug: 'california-solar-tax-credit-2026',
    title: 'California Solar Tax Credit and Incentives (2026 Guide)',
    excerpt:
      'No state solar tax credit, and the 30% federal credit ended for systems installed after 2025. What California still offers: SGIP, DAC-SASH, CARE and more.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'solar-rebates-by-california-utility',
    title: 'Solar Rebates and Incentives by California Utility (2026)',
    excerpt:
      'Solar and battery incentives by utility: PG&E, SCE, SDG&E, SMUD, LADWP and Roseville. What each pays in 2026, what is closed, and what ended.',
    date: '2026-09-23',
    category: 'California Solar Incentives',
  },
  {
    slug: 'free-solar-panels-california',
    title: 'Are Free Solar Panels Real in California? The CPUC Answer',
    excerpt:
      'The CPUC says solar is “rarely free.” The 4 things a free-solar ad can mean, the no-cost state program for income-qualified homeowners, and SOMAH.',
    date: '2026-09-23',
    category: 'California Solar Programs',
  },
  {
    slug: 'solar-battery-backup-california',
    title: 'Solar Battery Backup in California: Cost, Savings, Rebates',
    excerpt:
      'A solar battery runs key circuits in an outage and stores midday solar for evening use. California cost benchmarks, NEM 3.0 savings and 2026 rebates.',
    date: '2026-09-23',
    category: 'Battery Storage',
  },
  {
    slug: 'sdge-rate-increase-2026',
    title: 'SDG&E Rate Increase 2026: History, Chart and What Changed',
    excerpt:
      'SDG&E rates rose about 11.4% on January 1, 2026, then fell 2.0% in June. See every change since 2024, TOU-DR1 prices and why San Diego pays the most.',
    date: '2026-09-23',
    category: 'Utility Rates',
  },
  {
    slug: 'why-is-my-sce-bill-so-high',
    title: 'Why Is My Edison Bill So High? SCE Bill Checklist (2026)',
    excerpt:
      'An SCE bill runs high for five reasons: more days, more kWh, summer 4–9 p.m. prices, the Base Services Charge or a missing credit. Check each in order.',
    date: '2026-09-23',
    category: 'Utility Bills',
  },
  {
    slug: 'how-to-lower-electric-bill-california',
    title: 'How to Lower Your Electric Bill in California: 6 Steps',
    excerpt:
      'The four things that actually change a California electric bill: rate plan, baseline, fixed charges, and usage — plus CARE, FERA, and the Climate Credit.',
    date: '2026-09-22',
    category: 'Utility Bills',
  },
  {
    slug: 'solar-ppa-explained-california',
    title: 'Solar PPA Explained: How California’s $0-Down Solar Works',
    excerpt:
      'How a California solar PPA works: the $/kWh rate, escalator, term, and what CPUC’s consumer guide requires providers to disclose before you sign.',
    date: '2026-09-22',
    readTime: '8 min read',
    category: 'Solar Financing',
  },
  {
    slug: 'what-happens-if-stop-paying-solar-lease-california',
    title: 'What Happens If You Stop Paying a Solar Lease?',
    excerpt:
      'What Sunrun, Tesla and other providers say about default, UCC-1 filings and repossession — plus your transfer and buyout options in California.',
    date: '2026-09-22',
    category: 'Solar Financing',
  },
  {
    slug: 'adding-solar-panels-existing-system-california',
    title: 'Adding Solar Panels to an Existing System in California',
    excerpt:
      'Adding solar capacity to an existing California system is a design, compatibility and approval decision. Start with the records and serving utility process.',
    date: '2026-09-20',
    category: 'Solar Decision',
  },
  {
    slug: 'solar-installation-timeline-california',
    title: 'Solar Installation Timeline in California: 6 Stages to PTO',
    excerpt:
      'Map a California solar project from quote to permission to operate: each approval, inspection and handoff, and who owns it. No statewide week count fits all.',
    date: '2026-09-20',
    category: 'Getting Started',
  },
  {
    slug: 'why-is-my-sdge-bill-so-high',
    title: 'Why Is My SDG&E Bill So High? A Bill-First Checklist',
    excerpt:
      'Compare billing days, daily kWh, rate plan, delivery and the generation line on your SDG&E bill before deciding whether a project belongs in the conversation.',
    date: '2026-09-20',
    category: 'Utility Bills',
  },
  {
    slug: 'why-is-my-pge-bill-so-high',
    title: 'Why Is My PG&E Bill So High? 7 Causes to Check (2026)',
    excerpt:
      'Check kWh per day, billing days, TOU peak use and PG&E’s Base Services Charge (about $24 a month for most customers, per PG&E). 7 causes, in order.',
    date: '2026-09-18',
    readTime: '8 min read',
    category: 'Utility Bills',
  },
  {
    slug: 'pge-rate-increase-2026',
    title: 'PG&E Rate Changes 2026: How to Check Your California Bill',
    excerpt:
      'PG&E split some costs into a Base Services Charge in March 2026, around $24 a month for most customers. Check your own rate plan and usage, not an average.',
    date: '2026-09-12',
    category: 'Utility Rates',
  },
  {
    slug: 'is-community-solar-worth-it',
    title: 'Is Community Solar Worth It? Compare Credit vs Cost',
    excerpt:
      'Community solar can work for renters or homes without a usable roof. It depends on the subscription charge, bill credit, fees and contract terms.',
    date: '2026-09-12',
    category: 'Solar Decision',
  },
  {
    slug: 'what-happens-to-solar-lease-when-i-sell-california',
    title: 'Selling a CA Home With Solar Lease or PPA: Buyout Guide',
    excerpt:
      'Selling a home with a solar lease or PPA? See how transfer, buyout and end-of-term options work before you list.',
    date: '2026-09-11',
    category: 'Solar Financing',
  },
  {
    slug: 'why-is-my-ladwp-bill-so-high',
    title: 'Why Is My LADWP Bill So High? Rates & Fees Explained',
    excerpt:
      'See what makes an LADWP bill jump: water and sanitation charges, an old balance, daily usage and your rate plan.',
    date: '2026-09-11',
    category: 'Utility Bills',
  },
  {
    slug: 'sdge-time-of-use-rates-2026',
    title: 'SDG&E Peak Hours & TOU-DR1 Rates (2026): 5 Plans Compared',
    excerpt:
      'SDG&E peak is 4-9 p.m. every day, weekends included. Off-peak windows plus summer and winter cents per kWh for TOU-DR1, TOU-DR2, TOU-DR-P, EV-TOU-5 and DR.',
    date: '2026-09-10',
    category: 'Utility Rates',
  },
  {
    slug: 'how-does-net-metering-work',
    title: 'How Does Net Metering Work? Plain-English Guide (2026)',
    excerpt:
      'Net metering explained in plain English: how export credits are calculated and the difference between NEM 1.0, 2.0, 3.0 and net billing.',
    date: '2026-04-24',
    category: 'California Solar Policy',
  },
  {
    slug: 'solar-during-psps-california',
    title: 'Solar During a PSPS in California: Will My Panels Work?',
    excerpt:
      'Does solar work during a PG&E PSPS outage? Why grid-tied solar shuts off, how batteries change that, and what you need to survive a blackout.',
    date: '2026-04-24',
    category: 'Solar + Outages',
  },
  {
    slug: 'what-is-a-solar-inverter',
    title: 'What Is a Solar Inverter? Types, Brands, and Lifespans',
    excerpt:
      'A plain-English explanation of solar inverters: the main types, how long they last, which brands are reliable, and warranty realities.',
    date: '2026-04-24',
    category: 'Solar Basics',
  },
  {
    slug: 'string-inverter-vs-microinverter',
    title: 'String Inverter vs Microinverter: Which Is Right for You?',
    excerpt:
      'Head-to-head comparison of string inverter vs microinverter solar systems. Cost, performance under shade, warranty, rapid shutdown, and repairability.',
    date: '2026-04-24',
    category: 'Solar Basics',
  },
  {
    slug: 'california-energy-commission',
    title: 'What the California Energy Commission Means for Your Bill',
    excerpt:
      'The CEC sets building energy standards, mandates solar on new homes, and shapes battery rules. How it affects homeowners in 2026.',
    date: '2026-04-16',
    readTime: '8 min read',
    category: 'California Solar Policy',
  },
  {
    slug: 'solar-panel-inspection-california',
    title: 'Solar Panel Inspection in California: $150 to $350',
    excerpt:
      'A solar inspection is not required by California law but typically costs $150 to $350. What a visual check, electrical test, and performance review each cover.',
    date: '2026-04-16',
    readTime: '6 min read',
    category: 'Solar Longevity',
  },
];
/**
 * Group headings on /blog, one per topic hub, in the order of the home page's
 * five groups (cost and paying; companies and reviews; bills, rates and NEM;
 * batteries and your home; commercial). A hub missing here is shown after these
 * under its label from topic-hubs.ts.
 */
const GROUP_HEADINGS: [TopicHubId, string][] = [
  ['cost_value', 'Solar cost and value'],
  ['city_cost', 'Solar cost by city'],
  ['financing', 'Leases, PPAs and financing'],
  ['incentives', 'Tax credits, rebates and incentives'],
  ['installers', 'Choosing a solar company'],
  ['city_installers', 'Solar companies by city'],
  ['installer_reviews', 'Company and panel reviews'],
  ['rules_permits', 'Rules, permits and consumer protection'],
  ['utility_rates', 'Utility rates and time-of-use plans'],
  ['city_bills', 'Electric rates by city'],
  ['electric_bills', 'Electric bills'],
  ['nem', 'NEM 3.0 and net billing'],
  ['news', 'News and policy updates'],
  ['other_options', 'Community solar and other options'],
  ['battery', 'Home batteries and backup'],
  ['roof_structures', 'Roofs and solar'],
  ['maintenance', 'Maintenance and repair'],
  ['commercial', 'Commercial solar'],
];

interface PostGroup {
  /** In-page anchor for the topic list at the top. */
  id: string;
  heading: string;
  /** The hub's own page when it is not one of the posts listed under it. */
  overview: { href: string; label: string } | null;
  posts: BlogPost[];
}

function groupPosts(posts: BlogPost[]): PostGroup[] {
  const byHub = new Map<TopicHubId, BlogPost[]>();
  const rest: BlogPost[] = [];
  for (const post of posts) {
    const hub = hubForPath(`/blog/${post.slug}`);
    if (!hub) {
      rest.push(post);
      continue;
    }
    const list = byHub.get(hub) ?? [];
    list.push(post);
    byHub.set(hub, list);
  }
  const order: [TopicHubId, string][] = [
    ...GROUP_HEADINGS,
    ...TOPIC_HUBS.filter((h) => !GROUP_HEADINGS.some(([id]) => id === h.hub)).map(
      (h): [TopicHubId, string] => [h.hub, h.label],
    ),
  ];
  const groups: PostGroup[] = [];
  for (const [id, heading] of order) {
    const list = byHub.get(id);
    const hub = topicHub(id);
    if (!list || !hub) continue;
    // The hub's own post leads its group; otherwise the hub page is linked
    // above the list as the overview.
    const lead = list.filter((p) => `/blog/${p.slug}` === hub.hubPage);
    const others = list.filter((p) => `/blog/${p.slug}` !== hub.hubPage);
    groups.push({
      id: `topic-${id.replace(/_/g, '-')}`,
      heading,
      overview:
        hub.hubPage && lead.length === 0
          ? { href: hub.hubPage, label: hub.hubPageLabel ?? hub.label }
          : null,
      posts: [...lead, ...others],
    });
  }
  if (rest.length > 0) {
    groups.push({ id: 'more-guides', heading: 'More guides', overview: null, posts: rest });
  }
  return groups;
}

/** The posts as /blog shows them: grouped by topic hub, "More guides" last. */
const postGroups = groupPosts(blogPosts);

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
 * Every name, URL and count below is read from postGroups, the grouped list
 * rendered on the page, in the same order, so the schema cannot drift from
 * what a reader sees. The list items
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
      numberOfItems: postGroups.reduce((n, g) => n + g.posts.length, 0),
      itemListElement: postGroups.flatMap((g) => g.posts).map((post, i) => ({
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

            {/* Topic list: jump links to each group below. */}
            <nav aria-label='Guide topics' className='mb-12 rounded-xl border border-border bg-card p-6'>
              <h2 className='mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground'>
                Guides by topic
              </h2>
              <ul className='grid gap-x-6 gap-y-2 sm:grid-cols-2'>
                {postGroups.map((group) => (
                  <li key={group.id}>
                    <a href={`#${group.id}`} className='text-primary hover:underline'>
                      {group.heading}
                    </a>{' '}
                    <span className='text-sm text-muted-foreground'>({group.posts.length})</span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Blog Posts, one section per topic hub (Block 5 §5.11). */}
            <div className='space-y-16'>
              {postGroups.map((group) => (
                <section key={group.id} id={group.id} className='scroll-mt-24' aria-labelledby={`${group.id}-heading`}>
                  <h2
                    id={`${group.id}-heading`}
                    className='text-2xl md:text-3xl font-extrabold text-foreground tracking-tight mb-3'
                  >
                    {group.heading}
                  </h2>
                  {group.overview && (
                    <p className='text-foreground/70 mb-6'>
                      Overview:{' '}
                      <Link href={group.overview.href} className='text-primary font-semibold hover:underline'>
                        {group.overview.label}
                      </Link>
                    </p>
                  )}
                  <div className='space-y-8'>
                    {group.posts.map((post) => (
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
                          <h3 className='text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors tracking-tight'>
                            {post.title}
                          </h3>
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
                </section>
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
