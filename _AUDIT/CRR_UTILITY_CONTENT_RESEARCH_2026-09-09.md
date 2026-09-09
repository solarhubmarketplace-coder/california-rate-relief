# CRR utility content research and verification

Prepared September 9, 2026 Pacific. Scope: the two Week 1 refreshes and the new PG&E time-of-use guide. This is a source and editorial audit trail, not a traffic or lead forecast.

## Build-by-revenue gate

| Page | SERP type | Capturability | Evidence used for priority | Decision |
|---|---|---|---|---|
| `/blog/pge-vs-sce-vs-sdge-rates-compared` | Comparison / informational | Capturable; already on page one | GSC Aug. 10–Sep. 6: 24 clicks, 2,524 impressions, average position 6.5 | Refresh the existing URL; do not create a competing comparison |
| `/blog/why-is-my-pge-bill-so-high` | Informational / complaint | Capturable; already on page one | GSC Aug. 10–Sep. 6: 7 clicks, 1,439 impressions, average position 8.0 | Refresh the existing URL; preserve the question-led intent |
| `/blog/pge-time-of-use-rates-2026` | Informational utility guide | Capturable hypothesis based on a proven sibling shape | No dedicated route at local `origin/main` commit `8187896`; SDG&E TOU sibling had 16 clicks and 3,896 impressions | Build one distinct guide; no revenue or traffic forecast |

The CRM observation that PG&E represented 6 of 18 historical leads supports utility relevance. It does not identify the organic landing page or prove a PG&E TOU conversion rate.

## Structured research checklist and verified responses

### Rates comparison outline

1. Direct answer and current three-utility comparison
2. Difference between residential average rate, tariff price and sample bill
3. Utility-specific implications
4. CCA generation versus utility delivery
5. No-cost checks before a solar assessment

| Verification question | Verified response | Primary source |
|---|---|---|
| What were the June 2026 residential average rates? | SCE $0.337/kWh; PG&E $0.344/kWh; SDG&E $0.455/kWh. These averages exclude the California Climate Credit. | California Public Advocates Office, *Q2 2026 Electric Rates Report* (July 2026), p. 8 |
| What changed during 2026? | PG&E's March 1 update reduced its residential average about 3.7% from Jan. 1. SCE's June 1 update reduced its average about 0.1% from Jan. 1. SDG&E's June 1 update reduced its average about 2.0% from Apr. 1. | Same report, pp. 20–24 |
| Can one statewide average monthly bill be stated? | No. The state report gives sample bills by hot/cool climate zone and reported usage. It does not present one comparable statewide average bill for each utility. | Same report, pp. 12–15 |
| What changes for CCA customers? | The CCA supplies generation. The investor-owned utility continues delivery, metering, consolidated billing, maintenance and outage response. Joint rate comparisons are needed for total-cost comparisons. | CPUC California Electric Rate Comparison; PG&E Community Choice Aggregation |

### PG&E high-bill outline

1. Two-minute bill diagnostic
2. Seven bounded causes: usage, peak timing, Base Services Charge, baseline/season, CCA billing, credits/billing period, solar statement/True-Up
3. Ordered actions
4. When a private solar referral is relevant

| Verification question | Verified response | Primary source |
|---|---|---|
| Is the Base Services Charge simply a new $24 addition? | No. PG&E says the March 2026 change separated service costs from per-kWh prices and lowered the corresponding kWh prices. Most customers pay around $24 monthly; CARE and FERA customers generally pay around $6 and $12. Totals vary with billing days and usage. | PG&E Base Services Charge |
| What does PG&E say appears on a bill? | Usage history, baseline allowance/credit where applicable, delivery and generation components, PCIA where applicable, taxes/fees and account adjustments. | PG&E Understand Your Bill |
| How should a CCA bill be read? | CCA generation and PG&E delivery are different components on a consolidated bill; PCIA may also appear. | PG&E Community Choice Aggregation |
| Can a generic solar True-Up amount be promised? | No. The prior page's `$100–$400` expectation was removed. PG&E's sample NEM statement establishes the structure, not a universal amount. | PG&E March 2026 NEM sample statement |

### New PG&E TOU guide outline

1. Direct E-TOU-C versus E-TOU-D answer
2. Effective March 1, 2026 bundled-rate table
3. Baseline-credit distinction
4. Usage patterns that may fit each plan
5. Base Services Charge
6. EV/electrification alternatives
7. CCA limitation
8. Personalized comparison workflow
9. Solar/battery implications without a savings promise

| Verification question | Verified response | Primary source |
|---|---|---|
| What are the E-TOU-C peak hours? | 4–9 p.m. every day. Summer is June 1–Sep. 30; winter is Oct. 1–May 31. | PG&E Time-of-Use Rate Plans; Advice Letter 7846-E |
| What are the E-TOU-D peak hours? | 5–8 p.m. on non-holiday weekdays. | Same sources |
| What were the March 1 bundled rates? | E-TOU-C summer 52.240¢ peak / 39.940¢ off-peak; winter 39.757¢ / 36.757¢ before its 8.140¢ baseline credit. E-TOU-D summer 47.708¢ / 34.212¢; winter 38.747¢ / 34.886¢; no baseline credit. | PG&E Advice Letter 7846-E, schedules E-TOU-C and E-TOU-D, effective Mar. 1, 2026 |
| What were the Base Services Charge tiers in that filing? | 19.713¢, 39.688¢ and 79.343¢ per customer per day for income tiers 1–3. | Same advice letter |
| Are the bundled table prices valid for a CCA customer's total bill? | No. CCA generation replaces bundled utility generation and the customer needs the matching joint rate comparison. | PG&E Community Choice Aggregation |
| Are EV2-A or E-ELEC always cheaper? | Not established. The page directs qualifying customers to PG&E's personalized comparison and avoids a universal recommendation. | PG&E EV rate calculator; PG&E rate-plan finder |

## Primary source index

- California Public Advocates Office, Q2 report: https://www.publicadvocates.cpuc.ca.gov/-/media/cal-advocates-website/files/press-room/reports-and-analyses/260727-public-advocates-office-q2-2026-electric-rates-report.pdf
- CPUC rate and CCA comparison: https://www.cpuc.ca.gov/RateComparison
- PG&E Advice Letter 7846-E, effective March 1, 2026: https://www.pge.com/tariffs/assets/pdf/adviceletter/ELEC_7846-E.pdf
- PG&E current and historic electric rates: https://www.pge.com/tariffs/en/rate-information/electric-rates.html
- PG&E time-of-use plans: https://www.pge.com/en/account/rate-plans/time-of-use-rate-plans.html
- PG&E Base Services Charge: https://www.pge.com/en/account/billing-and-assistance/base-services-charge.html
- PG&E bill glossary: https://www.pge.com/en/account/billing-and-assistance/understand-your-bill.html
- PG&E CCA explanation: https://www.pge.com/en/account/alternate-energy-providers/community-choice-aggregation.html
- PG&E EV rate calculator: https://ev.pge.com/rates/
- PG&E March 2026 NEM sample statement: https://www.pge.com/assets/pge/docs/account/billing-and-assistance/nem-monthly-transition-bill-base-services-charge.pdf

## Content SEO and conversion review

| Check | Result |
|---|---|
| Intent | Existing comparison and high-bill URLs keep their original question-led promise. The new page answers a separate plan-comparison intent. |
| Depth | Each page leads with a direct answer, then explains measure definitions, usage/season fit, CCA limits and an ordered action path. |
| Cluster | The three pages cross-link. The comparison also links the existing SDG&E TOU guide; high-bill links the existing fixed-charge and battery guides. |
| E-E-A-T | Visible Chad Simpson byline, exact update date, one Article entity, page-adjacent primary sources and explicit effective periods. |
| CRO | The eligibility CTA remains in place. Its page-specific framing now identifies California Rate Relief as a private referral service and places no universal savings claim in the CTA. |
| Qualification | Assistance and rate-plan checks precede solar. Solar assessment is framed for property owners with persistent electricity costs and site/contract fit. |

## Removed unsupported claims

- Universal average monthly bills of `$270`, `$250` and `$325`.
- A universal `$24.15` charge across all three utilities.
- Forecasts that all three utilities would continue a stated path through 2028.
- Generic `10–15%`, `10–30%`, `40–60% higher by year 5`, and PPA savings tables.
- A generic `$100–$400` solar True-Up expectation.
- A `7–10 year` solar-plus-battery payback and `5–8×` self-consumption claim.
- Claims that changing utilities is a realistic household bill remedy.

## Registry handoff

- Route: `/blog/pge-time-of-use-rates-2026`
- Title: `PG&E Time-of-Use Rates: 2026 Plan Guide`
- Description: `Compare PG&E E-TOU-C and E-TOU-D peak hours, March 2026 prices, baseline credits and fit. See which usage patterns can lower your electricity bill.`
- Published/modified: `2026-09-09`
- Category: `Utility Rates`
