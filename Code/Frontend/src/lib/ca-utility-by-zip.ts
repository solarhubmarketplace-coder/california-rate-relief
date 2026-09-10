/**
 * California ZIP -> electric service territory: a SEED table, not an authority.
 *
 * READ THIS BEFORE TRUSTING A RESULT
 * ---------------------------------------------------------------------------
 * 1. This is a hand-built seed set. It is NOT authoritative and it is NOT
 *    complete. Most California ZIPs are absent, and an absent ZIP returns null
 *    on purpose - a null here means "we do not know", never "no utility".
 * 2. ZIP boundaries and electric service territories do not align. USPS ZIPs
 *    are mail-delivery routes; service territories follow distribution assets
 *    and city or district boundaries. One ZIP can be split between two
 *    utilities, and a utility can serve part of a ZIP whose postal city name
 *    belongs to a different utility. Every value below is the DOMINANT utility
 *    for that ZIP, never a guarantee for a specific service address.
 * 3. Entries were built from each utility's own published service-area
 *    description plus city boundaries, not from a ZIP-level dataset. Where a
 *    territory is known to be split - Moreno Valley, Palm Desert, Rancho
 *    Cucamonga, Victorville and others - the ZIP is listed in AMBIGUOUS_ZIPS
 *    and deliberately returns null rather than a guess.
 * 4. Community Choice Aggregator membership changes as cities join and leave,
 *    so `cca` is populated only where membership is well established and is
 *    null everywhere else, including inside territories that do have a CCA.
 *    A null cca means "not seeded", not "no CCA".
 *
 * TODO(replace-with-authoritative-source): replace this table with the
 * California Energy Commission's "Electric Load Serving Entities (IOU & POU)"
 * GIS layer, published by the CEC Cartography Unit through the California State
 * Geoportal. That layer carries real service-territory polygons, so an address
 * can be point-in-polygon tested instead of ZIP-approximated. Until then treat
 * every value here as a hint to verify, and keep the homeowner's own answer as
 * the field of record.
 */

export interface UtilityTerritory {
  /** Dominant electric utility for the ZIP, e.g. 'PG&E', 'SCE', 'LADWP'. */
  utility: string;
  /** Community Choice Aggregator, when well established. Null when not seeded. */
  cca: string | null;
  /** County, when the seed entry is city-scoped. Null for range-derived hits. */
  county: string | null;
}

/** Lowest and highest ZIP codes assigned to California. */
export const CA_ZIP_MIN = 90001;
export const CA_ZIP_MAX = 96162;

/** True only for a 5-digit string inside California's ZIP range. */
export function isCaliforniaZip(zip: string): boolean {
  if (typeof zip !== 'string' || !/^\d{5}$/.test(zip)) return false;
  const numeric = Number(zip);
  return numeric >= CA_ZIP_MIN && numeric <= CA_ZIP_MAX;
}

// ---------------------------------------------------------------------------
// Known holes. Checked BEFORE any territory rule so that a coarse range can
// never answer for an area we know is split or served by a utility this table
// has not mapped. Every ZIP here returns null.
// ---------------------------------------------------------------------------
const AMBIGUOUS_ZIPS = new Set<string>([
  // Moreno Valley Utility serves part of the city; SCE serves the rest.
  '92551', '92552', '92553', '92555', '92556', '92557',
  // Municipal or other utilities this table does not map.
  '92324',            // Colton Electric Utility
  '92220',            // Banning Electric Utility
  '92363',            // Needles Public Utility Authority
  '91702',            // Azusa Light & Water
  '90058',            // Vernon Public Utilities
  '93436', '93438',   // City of Lompoc electric
  '95448',            // Healdsburg Electric
  '95482',            // Ukiah Electric Utility
  '95917',            // Biggs Municipal Utilities
  '95948',            // Gridley Electric
  '96019',            // Shasta Lake Electric
  '96160', '96161',   // Truckee Donner PUD
  '94565',            // Pittsburg - Island Energy serves part
  '91340', '91341',   // City of San Fernando, an SCE enclave inside LADWP territory
  '92314', '92315', '92333', '92352', '92386', // Bear Valley Electric Service
  '92536', '92539', '92561',                   // Anza Electric Cooperative
  // Coachella Valley: split between Imperial Irrigation District and SCE.
  '92210', '92211', '92253', '92260', '92270', '92276',
  // Victorville Municipal Utility serves part of the city; SCE serves the rest.
  '92392', '92393', '92394', '92395',
  // Rancho Cucamonga Municipal Utility overlays part of the city.
  '91701', '91729', '91730', '91737', '91739',
  // ZIPs straddling a municipal boundary.
  '90023',            // Los Angeles / Commerce / Vernon
  '90048',            // Los Angeles / Beverly Hills / West Hollywood
  '90059',            // Watts and unincorporated Willowbrook
  '90292',            // Marina del Rey, unincorporated county, not LA city
  '91214',            // Glendale (Montrose) and unincorporated La Crescenta
  '92509',            // Jurupa Valley, abutting Riverside Public Utilities
  '94303',            // Palo Alto (municipal) and East Palo Alto (PG&E)
  '94305',            // Stanford campus distribution
  '94129',            // Presidio of San Francisco
]);

function zips(list: string, territory: UtilityTerritory): Array<[string, UtilityTerritory]> {
  return list.split(/\s+/).filter(Boolean).map(zip => [zip, territory] as [string, UtilityTerritory]);
}

const SEED_ZIPS = new Map<string, UtilityTerritory>([
  // -------------------------------------------------------------------------
  // Municipal and irrigation-district utilities, exact ZIPs.
  // -------------------------------------------------------------------------

  // Los Angeles Department of Water and Power - City of Los Angeles.
  ...zips(`
    90001 90002 90003 90004 90005 90006 90007 90008 90010 90011 90012 90013
    90014 90015 90016 90017 90018 90019 90020 90021 90024 90025 90026 90027
    90028 90029 90031 90032 90033 90034 90035 90036 90037 90038 90039 90041
    90042 90043 90044 90045 90046 90047 90049 90056 90057 90061 90062 90063
    90064 90065 90066 90067 90068 90071 90077 90089 90094 90095 90272 90291
    90293 90710 90731 90732 90744
    91040 91042 91303 91304 91306 91307 91311 91316 91324 91325 91326 91330
    91331 91335 91342 91343 91344 91345 91352 91356 91364 91367 91401 91402
    91403 91405 91406 91411 91423 91436 91601 91602 91604 91605 91606 91607
  `, { utility: 'LADWP', cca: null, county: 'Los Angeles' }),

  // Sacramento Municipal Utility District - Sacramento County and a sliver of Placer.
  ...zips(`
    95608 95610 95621 95624 95626 95628 95630 95632 95638 95641 95655 95660
    95662 95670 95673 95683 95690 95693 95742 95757 95758 95763
    95811 95814 95815 95816 95817 95818 95819 95820 95821 95822 95823 95824
    95825 95826 95827 95828 95829 95830 95831 95832 95833 95834 95835 95836
    95837 95838 95841 95842 95843 95864
  `, { utility: 'SMUD', cca: null, county: 'Sacramento' }),

  // Anaheim Public Utilities - City of Anaheim.
  ...zips('92801 92802 92804 92805 92806 92807 92808',
    { utility: 'Anaheim Public Utilities', cca: null, county: 'Orange' }),

  // Riverside Public Utilities - City of Riverside.
  ...zips('92501 92503 92504 92505 92506 92507 92508',
    { utility: 'Riverside Public Utilities', cca: null, county: 'Riverside' }),

  // Pasadena Water and Power - City of Pasadena.
  ...zips('91101 91103 91104 91105 91106 91107',
    { utility: 'Pasadena Water and Power', cca: null, county: 'Los Angeles' }),

  // Glendale Water and Power - City of Glendale.
  ...zips('91201 91202 91203 91204 91205 91206 91207 91208',
    { utility: 'Glendale Water and Power', cca: null, county: 'Los Angeles' }),

  // Burbank Water and Power - City of Burbank.
  ...zips('91501 91502 91504 91505 91506',
    { utility: 'Burbank Water and Power', cca: null, county: 'Los Angeles' }),

  // Imperial Irrigation District - Imperial County.
  ...zips(`
    92222 92227 92231 92233 92243 92244 92249 92250 92251 92257 92259 92266
    92273 92275 92281 92283
  `, { utility: 'Imperial Irrigation District', cca: null, county: 'Imperial' }),
  // Imperial Irrigation District - eastern Coachella Valley (Indio, Coachella).
  ...zips('92201 92203 92236',
    { utility: 'Imperial Irrigation District', cca: null, county: 'Riverside' }),

  // Modesto Irrigation District - City of Modesto and adjacent district area.
  ...zips('95350 95351 95354 95355 95356 95357 95358',
    { utility: 'Modesto Irrigation District', cca: null, county: 'Stanislaus' }),

  // Turlock Irrigation District - Turlock and the surrounding district.
  ...zips('95307 95316 95326 95328 95380 95382',
    { utility: 'Turlock Irrigation District', cca: null, county: 'Stanislaus' }),

  // Roseville Electric - City of Roseville.
  ...zips('95661 95678 95747',
    { utility: 'Roseville Electric', cca: null, county: 'Placer' }),

  // Lodi Electric Utility - City of Lodi.
  ...zips('95240 95242',
    { utility: 'Lodi Electric Utility', cca: null, county: 'San Joaquin' }),

  // Alameda Municipal Power - City of Alameda.
  ...zips('94501 94502',
    { utility: 'Alameda Municipal Power', cca: null, county: 'Alameda' }),

  // City of Palo Alto Utilities - City of Palo Alto. 94303 is excluded above
  // because it also covers East Palo Alto, which PG&E serves.
  ...zips('94301 94304 94306',
    { utility: 'City of Palo Alto Utilities', cca: null, county: 'Santa Clara' }),

  // Redding Electric Utility - City of Redding.
  ...zips('96001 96002 96003',
    { utility: 'Redding Electric Utility', cca: null, county: 'Shasta' }),

  // Silicon Valley Power - City of Santa Clara. Not on the original seed list,
  // but without it these ZIPs would fall through and be reported as PG&E.
  ...zips('95050 95051 95054',
    { utility: 'Silicon Valley Power', cca: null, county: 'Santa Clara' }),

  // -------------------------------------------------------------------------
  // PG&E - northern and central California. City-scoped entries only.
  // -------------------------------------------------------------------------

  // CleanPowerSF - City and County of San Francisco.
  ...zips(`
    94102 94103 94104 94105 94107 94108 94109 94110 94111 94112 94114 94115
    94116 94117 94118 94121 94122 94123 94124 94127 94131 94132 94133 94134
    94158
  `, { utility: 'PG&E', cca: 'CleanPowerSF', county: 'San Francisco' }),

  // San Jose Clean Energy - City of San Jose.
  ...zips(`
    95110 95111 95112 95113 95116 95117 95118 95119 95120 95121 95122 95123
    95124 95125 95126 95127 95128 95129 95130 95131 95132 95133 95134 95135
    95136 95138 95139 95148
  `, { utility: 'PG&E', cca: 'San Jose Clean Energy', county: 'Santa Clara' }),

  // Ava Community Energy - Alameda County.
  ...zips(`
    94536 94538 94539 94541 94542 94544 94545 94550 94551 94555 94566 94577
    94578 94579 94586 94588 94601 94602 94603 94605 94606 94607 94608 94609
    94610 94611 94612 94618 94619 94621 94702 94703 94704 94705 94707 94708
    94709 94710
  `, { utility: 'PG&E', cca: 'Ava Community Energy', county: 'Alameda' }),

  // MCE - Marin County.
  ...zips('94901 94903 94904 94920 94925 94930 94939 94941 94945 94947 94949 94960 94965',
    { utility: 'PG&E', cca: 'MCE', county: 'Marin' }),
  // MCE - Napa County.
  ...zips('94558 94559 94574 94599',
    { utility: 'PG&E', cca: 'MCE', county: 'Napa' }),
  // MCE - member Contra Costa jurisdictions.
  ...zips(`
    94506 94509 94518 94519 94520 94521 94526 94531 94582 94583 94595 94596
    94597 94598 94801 94803 94804 94805 94806
  `, { utility: 'PG&E', cca: 'MCE', county: 'Contra Costa' }),
  // MCE - member Solano jurisdictions.
  ...zips('94533 94534 94589 94590 94591',
    { utility: 'PG&E', cca: 'MCE', county: 'Solano' }),

  // Peninsula Clean Energy - San Mateo County.
  ...zips(`
    94002 94010 94014 94015 94019 94025 94027 94030 94044 94061 94062 94063
    94065 94066 94070 94080 94401 94402 94403 94404
  `, { utility: 'PG&E', cca: 'Peninsula Clean Energy', county: 'San Mateo' }),

  // Silicon Valley Clean Energy - member Santa Clara County jurisdictions.
  ...zips(`
    94022 94024 94040 94041 94043 94085 94086 94087 94089 95008 95014 95020
    95030 95032 95035 95037 95070
  `, { utility: 'PG&E', cca: 'Silicon Valley Clean Energy', county: 'Santa Clara' }),

  // Sonoma Clean Power - Sonoma County.
  ...zips('94928 94931 94951 94952 94954 95401 95403 95404 95405 95407 95409 95492',
    { utility: 'PG&E', cca: 'Sonoma Clean Power', county: 'Sonoma' }),

  // Central Coast Community Energy.
  ...zips('93901 93905 93906 93907 93908 93940 93950 93955',
    { utility: 'PG&E', cca: 'Central Coast Community Energy', county: 'Monterey' }),
  ...zips('95003 95060 95062 95065 95073 95076',
    { utility: 'PG&E', cca: 'Central Coast Community Energy', county: 'Santa Cruz' }),
  ...zips('93401 93402 93405 93420 93422 93446 93449',
    { utility: 'PG&E', cca: 'Central Coast Community Energy', county: 'San Luis Obispo' }),
  ...zips('93454 93455 93458',
    { utility: 'PG&E', cca: 'Central Coast Community Energy', county: 'Santa Barbara' }),

  // Valley Clean Energy - Yolo County.
  ...zips('95616 95618 95695 95776',
    { utility: 'PG&E', cca: 'Valley Clean Energy', county: 'Yolo' }),

  // Redwood Coast Energy Authority - Humboldt County.
  ...zips('95501 95503 95521 95524 95540',
    { utility: 'PG&E', cca: 'Redwood Coast Energy Authority', county: 'Humboldt' }),

  // PG&E cities with no CCA seeded.
  ...zips(`
    93611 93612 93619 93656 93657 93662 93701 93702 93703 93704 93705 93706
    93710 93711 93720 93721 93722 93723 93725 93726 93727 93728
  `, { utility: 'PG&E', cca: null, county: 'Fresno' }),
  ...zips('93301 93304 93305 93306 93307 93308 93309 93311 93312 93313 93314',
    { utility: 'PG&E', cca: null, county: 'Kern' }),
  ...zips(`
    95202 95203 95204 95205 95206 95207 95209 95210 95212 95215 95219 95336
    95337 95376 95377 95391
  `, { utility: 'PG&E', cca: null, county: 'San Joaquin' }),
  ...zips('95926 95928 95965 95966 95969 95973',
    { utility: 'PG&E', cca: null, county: 'Butte' }),

  // -------------------------------------------------------------------------
  // SCE - most of southern California outside San Diego County and the
  // municipals. City-scoped entries only.
  // -------------------------------------------------------------------------

  // Clean Power Alliance - Ventura County. All ten cities plus the county are
  // members, which makes this the most stable CPA block to seed.
  ...zips(`
    91320 91360 91361 91362 93001 93003 93004 93010 93012 93015 93021 93023
    93030 93033 93035 93036 93041 93060 93063 93065
  `, { utility: 'SCE', cca: 'Clean Power Alliance', county: 'Ventura' }),

  // Clean Power Alliance - long-standing Los Angeles County member cities.
  ...zips(`
    90069 90210 90211 90212 90230 90232 90240 90241 90242 90254 90265 90266
    90277 90278 90274 90401 90402 90403 90404 90405 90601 90602 90603 90604
    90605 90606 90723 90716 91006 91007 91024 91030 91301 91302 91780 91801
    91803 90745 90746
  `, { utility: 'SCE', cca: 'Clean Power Alliance', county: 'Los Angeles' }),

  // Lancaster Choice Energy - City of Lancaster.
  ...zips('93534 93535 93536',
    { utility: 'SCE', cca: 'Lancaster Choice Energy', county: 'Los Angeles' }),

  // SCE, Los Angeles County, no CCA seeded.
  ...zips(`
    90220 90221 90222 90245 90247 90248 90249 90250 90260 90262 90270 90280
    90501 90502 90503 90504 90505 90638 90650 90703 90706 90712 90713 90715
    90802 90803 90804 90805 90806 90807 90808 90810 90813 90814 90815
    91010 91016 91108 91350 91351 91354 91355 91387 91390 91706 91722 91723
    91724 91731 91732 91733 91740 91741 91745 91746 91748 91754 91755 91765
    91766 91767 91768 91770 91775 91776 91789 91790 91791 91792
    90301 90302 90303 90304 90305 93550 93551 93552 93553 93591
  `, { utility: 'SCE', cca: null, county: 'Los Angeles' }),

  // Orange County Power Authority - member cities.
  ...zips(`
    90620 90621 92602 92603 92604 92606 92612 92614 92617 92618 92620 92831
    92832 92833 92835
  `, { utility: 'SCE', cca: 'Orange County Power Authority', county: 'Orange' }),

  // SCE, Orange County, no CCA seeded.
  ...zips(`
    90630 90631 92626 92627 92630 92646 92647 92648 92649 92651 92653 92655
    92660 92661 92662 92663 92683 92701 92703 92704 92705 92706 92707 92708
    92780 92782 92821 92823 92840 92841 92843 92844 92845 92865 92866 92867
    92868 92869 92870 92886 92887
  `, { utility: 'SCE', cca: null, county: 'Orange' }),

  // SCE, Riverside County.
  ...zips(`
    92223 92225 92230 92234 92262 92264 92320 92530 92532 92543 92544 92545
    92562 92563 92570 92571 92582 92583 92584 92585 92586 92587 92590 92591
    92592 92595 92596 92860 92879 92880 92881 92882 92883
  `, { utility: 'SCE', cca: null, county: 'Riverside' }),

  // SCE, San Bernardino County.
  ...zips(`
    91708 91709 91710 91761 91762 91764 91784 91786 92301 92307 92308 92311
    92313 92316 92318 92335 92336 92337 92344 92345 92346 92354 92359 92371
    92373 92374 92376 92377 92399 92401 92404 92405 92407 92408 92410 92411
  `, { utility: 'SCE', cca: null, county: 'San Bernardino' }),

  // SCE, Santa Barbara County south coast.
  ...zips('93013 93101 93103 93105 93108 93109 93110 93111 93117',
    { utility: 'SCE', cca: 'Central Coast Community Energy', county: 'Santa Barbara' }),

  // SCE, Tulare County and eastern Kern County.
  ...zips('93257 93274 93277 93291 93292',
    { utility: 'SCE', cca: null, county: 'Tulare' }),
  ...zips('93505 93555 93561',
    { utility: 'SCE', cca: null, county: 'Kern' }),

  // -------------------------------------------------------------------------
  // SDG&E. The exact entries below carry a CCA; the San Diego County ranges
  // further down catch the rest of the county with cca null.
  // -------------------------------------------------------------------------

  // San Diego Community Power.
  ...zips(`
    91910 91911 91913 91914 91915 91932 91941 91942 91950 92024 92101 92102
    92103 92104 92105 92106 92107 92108 92109 92110 92111 92113 92114 92115
    92116 92117 92119 92120 92121 92122 92123 92124 92126 92127 92128 92129
    92130 92131 92139 92154 92173
  `, { utility: 'SDG&E', cca: 'San Diego Community Power', county: 'San Diego' }),

  // Clean Energy Alliance.
  ...zips(`
    92008 92009 92010 92011 92014 92025 92026 92027 92029 92069 92075 92078
    92081 92083 92084
  `, { utility: 'SDG&E', cca: 'Clean Energy Alliance', county: 'San Diego' }),

  // SDG&E in southern Orange County.
  ...zips('92624 92629 92672 92673 92675',
    { utility: 'SDG&E', cca: null, county: 'Orange' }),
]);

/**
 * Coarse territory ranges, checked only after the exact table and the known
 * holes. San Diego County has no municipal electric utility, which makes it the
 * one band broad enough to state with confidence.
 */
const TERRITORY_RANGES: Array<{ min: number; max: number; territory: UtilityTerritory }> = [
  { min: 91901, max: 91999, territory: { utility: 'SDG&E', cca: null, county: 'San Diego' } },
  { min: 92003, max: 92199, territory: { utility: 'SDG&E', cca: null, county: 'San Diego' } },
];

/**
 * Best-known electric service territory for a California ZIP, or null.
 *
 * Returns null for a malformed ZIP, a ZIP outside California, a ZIP known to sit
 * in split or unmapped territory, and any ZIP simply absent from the seed set.
 * Callers must treat null as "unknown" and must never present a value from here
 * as the homeowner's confirmed utility.
 */
export function lookupUtilityByZip(zip: string): UtilityTerritory | null {
  if (typeof zip !== 'string') return null;
  const trimmed = zip.trim();
  if (!isCaliforniaZip(trimmed)) return null;
  if (AMBIGUOUS_ZIPS.has(trimmed)) return null;
  const exact = SEED_ZIPS.get(trimmed);
  if (exact) return { ...exact };
  const numeric = Number(trimmed);
  const range = TERRITORY_RANGES.find(entry => numeric >= entry.min && numeric <= entry.max);
  return range ? { ...range.territory } : null;
}

/** Count of exactly-seeded ZIPs, so coverage can be asserted in tests. */
export function seededZipCount(): number {
  return SEED_ZIPS.size;
}

/** Wizard utility ids mapped onto the labels this table returns. */
const SELECTION_TO_UTILITY: Record<string, string> = {
  sce: 'SCE',
  pge: 'PG&E',
  sdge: 'SDG&E',
  ladwp: 'LADWP',
  mvu: 'Moreno Valley Utility',
};

/**
 * Whether the visitor's own utility answer agrees with the ZIP-derived one.
 * Null when either side is unknown - 'other', an unmapped selection, or a ZIP
 * the seed table does not cover. A false here is a review signal, not proof
 * that the visitor is wrong: the seed table is the less reliable of the two.
 */
export function utilitySelectionMatchesDerived(
  selection: string | null | undefined,
  derivedUtility: string | null,
): boolean | null {
  if (!derivedUtility || !selection) return null;
  const expected = SELECTION_TO_UTILITY[selection.trim().toLowerCase()];
  return expected ? expected === derivedUtility : null;
}

/** The location and derivation keys recorded on every submission. */
export interface DerivedLocationFields {
  service_zip: string;
  city: string | null;
  derived_utility: string | null;
  derived_cca: string | null;
  derived_county: string | null;
  derived_from: 'zip-seed-table';
  derived_utility_matches_selection: boolean | null;
}

/**
 * Build the location keys for an intake payload.
 *
 * The ZIP is recorded exactly as the visitor typed it, even when it is
 * malformed, out of state, or absent from the seed table - a failed lookup must
 * never cost us the lead or the raw answer. `selectedUtility` is passed in only
 * to compute the match flag; this function never returns a `utility_provider`,
 * because the visitor's own selection stays the field of record.
 */
export function derivedLocationFields(
  zip: string,
  city: string,
  selectedUtility?: string | null,
): DerivedLocationFields {
  const trimmedZip = (zip || '').trim();
  const territory = lookupUtilityByZip(trimmedZip);
  const derivedUtility = territory?.utility ?? null;
  return {
    service_zip: trimmedZip,
    city: (city || '').trim() || null,
    derived_utility: derivedUtility,
    derived_cca: territory?.cca ?? null,
    derived_county: territory?.county ?? null,
    derived_from: 'zip-seed-table',
    derived_utility_matches_selection: utilitySelectionMatchesDerived(selectedUtility, derivedUtility),
  };
}
