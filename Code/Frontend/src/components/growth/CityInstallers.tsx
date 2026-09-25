import {
  CSLB_CHECK_URL,
  CSLB_CHECKED_DISPLAY,
  DGSTATS_CHECKED_DISPLAY,
  DGSTATS_CITATION,
  DGSTATS_URL,
  MIN_ROW_SYSTEMS,
  fmtCount,
  fmtShare,
  joinNames,
  trendSummary,
  trendYears,
  type CompaniesDg,
  type DgInstallerRow,
} from "@/data/dgstats/companies";

// =============================================================================
// The installer table and local numbers for /solar-companies/<city>
// (2026-09-24, Block 3.3). Every figure comes from the CPUC's DG Stats
// interconnection records through src/data/dgstats/companies.ts. The table is
// a count of systems per installer of record, sorted by count: it is not a
// ranking, and the copy says so next to it.
// =============================================================================

const REGION_THE = /^(Bay Area|Coachella Valley|High Desert|Inland Empire)$/;

/** "the Bay Area", "Temecula". */
export function placePhrase(place: string): string {
  return REGION_THE.test(place) ? `the ${place}` : place;
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Where the table's systems are, as a noun phrase. */
function areaPhrase(dg: CompaniesDg): string {
  if (dg.kind === "pocket") return `${joinNames(dg.ious)}-served addresses listed as ${dg.place}`;
  if (dg.kind === "county") return `${dg.county} County`;
  return placePhrase(dg.place);
}

/** The same place with its preposition: "in Temecula", "at SCE-served addresses...". */
function areaIn(dg: CompaniesDg): string {
  return `${dg.kind === "pocket" ? "at" : "in"} ${areaPhrase(dg)}`;
}

/** "Los Angeles'" rather than "Los Angeles's", as the site's copy writes it. */
function possessive(name: string): string {
  return name.endsWith("s") ? `${name}'` : `${name}'s`;
}

function leaders(rows: DgInstallerRow[]): string {
  const [a, b, c] = rows;
  if (!a) return "";
  if (!b) return `${a.name} (${fmtCount(a.n2025)})`;
  if (!c) return `${a.name} (${fmtCount(a.n2025)}) and ${b.name} (${fmtCount(b.n2025)})`;
  return `${a.name} (${fmtCount(a.n2025)}), ${b.name} (${fmtCount(b.n2025)}) and ${c.name} (${fmtCount(c.n2025)})`;
}

const NOT_IN_DATA =
  "is not in the state's solar interconnection data, which covers PG&E, SCE and SDG&E customers only";

/**
 * The page's opening answer: how many systems, and who installed the most,
 * in 40-70 words. Used as the DecisionPage intro.
 */
export function installerAnswer(dg: CompaniesDg): string {
  const n = fmtCount(dg.scope.systems2025);
  const led = leaders(dg.rows);
  const close = "It is a count from public records, not a ranking or endorsement: check each license and get at least three quotes.";
  if (dg.kind === "pocket") {
    return `${possessive(dg.place)} main electric utility, ${dg.municipal!.name}, ${NOT_IN_DATA}. On the ${joinNames(dg.ious)}-served addresses listed as ${dg.place}, utility records show ${n} home solar systems connected in 2025${led ? `, led by ${led}` : ""}. ${close}`;
  }
  if (dg.kind === "county") {
    const cityN = dg.cityScope?.systems2025 ?? 0;
    const why = dg.municipal
      ? `${possessive(dg.place)} main electric utility, ${dg.municipal.name}, ${NOT_IN_DATA}${cityN > 0 ? `, and lists ${cityN === 1 ? "one system" : `${cityN} systems`} at ${dg.place} addresses in 2025` : ""}.`
      : `Utility records list only ${cityN} home solar systems connected in ${dg.place} in 2025, too few to show who installs there.`;
    return `${why} The table below covers ${dg.county} County instead: ${n} systems in 2025${led ? `, led by ${led}` : ""}. ${close}`;
  }
  const [a, b, c] = dg.rows;
  const lead = a
    ? ` ${a.name} was the installer of record on ${fmtCount(a.n2025)} of them${b ? `, followed by ${b.name} (${fmtCount(b.n2025)})${c ? ` and ${c.name} (${fmtCount(c.n2025)})` : ""}` : ""}.`
    : "";
  return `Utility records show ${n} home solar systems connected in ${placePhrase(dg.place)} in 2025.${lead} The table lists each company's CSLB license number. ${close}`;
}

/** Heading for the table section. */
export function installerHeading(dg: CompaniesDg): string {
  if (dg.kind === "pocket") {
    return `Installers who connected the most home solar systems on ${joinNames(dg.ious)}-served ${dg.place} addresses in 2025`;
  }
  return `Installers who connected the most home solar systems in ${areaPhrase(dg)} in 2025`;
}

function titleCase(upper: string): string {
  return upper.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
}

export function CityInstallerTable({ dg }: { dg: CompaniesDg }) {
  const scopeNote =
    dg.kind === "region"
      ? dg.regionCounties?.length
        ? `The counts cover ${joinNames(dg.ious)} customers across ${joinNames(dg.regionCounties.map(titleCase))} ${dg.regionCounties.length > 1 ? "counties" : "County"}; customers of city-owned utilities are not in the data.`
        : `The counts cover the ${joinNames(dg.ious)} customers the records list under ${joinNames(dg.regionCities!.map(titleCase))}; customers of other utilities are not in the data.`
      : dg.kind === "county"
        ? `The data set covers PG&E, SCE and SDG&E customers only, so in ${dg.county} County it counts the areas ${joinNames(dg.ious)} ${dg.ious.length > 1 ? "serve" : "serves"}.`
        : dg.kind === "pocket"
          ? `These are ${joinNames(dg.ious)} customers whose service address the utility lists under ${dg.place}; ${dg.municipal!.name} customers are not in the data.${dg.municipal!.share ? ` The CEC's utility map puts ${dg.municipal!.name} on ${dg.municipal!.share}.` : ""}`
          : null;
  return (
    <section id="installers">
      <h2>{installerHeading(dg)}</h2>
      {dg.rows.length === 0 ? (
        <p>
          {`No installer was named on ${MIN_ROW_SYSTEMS} or more of the ${fmtCount(dg.scope.systems2025)} home solar systems connected ${areaIn(dg)} in 2025, so there is no list to show.`}
        </p>
      ) : null}
      {dg.rows.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Home solar systems per installer {areaIn(dg)}, from utility interconnection records
            </caption>
            <thead className="bg-muted">
              <tr>
                <th className="p-3">Installer (name as reported)</th>
                <th className="p-3 text-right">Systems in 2025</th>
                <th className="p-3 text-right">Jan 2024 to May 2026</th>
                <th className="p-3">CSLB license</th>
              </tr>
            </thead>
            <tbody>
              {dg.rows.map((row) => (
                <tr className="border-t" key={`${row.name}-${row.cslb}`}>
                  <th scope="row" className="p-3 align-top font-medium">
                    {row.name}
                  </th>
                  <td className="p-3 text-right align-top tabular-nums">{fmtCount(row.n2025)}</td>
                  <td className="p-3 text-right align-top tabular-nums">{fmtCount(row.n2024to2026)}</td>
                  <td className="p-3 align-top tabular-nums">
                    {row.cslb ? (
                      <>
                        {row.cslb}{" "}
                        <a
                          href={CSLB_CHECK_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          aria-label={`Check CSLB license ${row.cslb} (${row.name})`}
                        >
                          check
                        </a>
                      </>
                    ) : (
                      "Not reported"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <p className="mt-4">
        Counts from utility records, not a ranking or endorsement. Check each
        license&apos;s status and complaint history on the{" "}
        <a href={CSLB_CHECK_URL} target="_blank" rel="noopener noreferrer" className="underline">
          CSLB&apos;s Check a License page
        </a>{" "}
        (checked {CSLB_CHECKED_DISPLAY}).{scopeNote ? ` ${scopeNote}` : ""}
      </p>
      <p className="mt-3 text-sm text-muted-foreground">
        Source:{" "}
        <a href={DGSTATS_URL} target="_blank" rel="noopener noreferrer" className="underline">
          {DGSTATS_CITATION}
        </a>{" "}
        (checked {DGSTATS_CHECKED_DISPLAY}).
      </p>
    </section>
  );
}

function trendSentence(dg: CompaniesDg): string {
  const { peakYear, peak, changePct } = trendSummary(dg.scope);
  if (peakYear === "2025") return "2025 was the busiest year since 2021.";
  if (changePct === null) return "";
  return `The busiest year since 2021 was ${peakYear}, with ${fmtCount(peak)} (2025: ${changePct > 0 ? "+" : ""}${changePct}%).`;
}

/** Share of the area's 2025 systems the three largest installers were named on. */
function topShare(dg: CompaniesDg): string | null {
  const top = dg.scope.installers.slice(0, 3).reduce((sum, row) => sum + row.n2025, 0);
  return dg.scope.systems2025 > 0 && top > 0 ? fmtShare(top / dg.scope.systems2025) : null;
}

/** " Another 387 were approved from January through May 2026." */
function ytd2026(dg: CompaniesDg): string {
  const n = dg.scope.systemsByYear["2026"] ?? 0;
  return n > 0 ? ` Another ${fmtCount(n)} were approved from January through May 2026.` : "";
}

/** The area's own 2025 numbers, then a five-year count table. */
export function CityInstallerNumbers({
  dg,
  countyScope,
}: {
  dg: CompaniesDg;
  /** County numbers to compare a city with, when the page is a city page. */
  countyScope?: { thirdPartyOwnedShare2025: number | null; storageAttachShare2025: number | null; medianSizeKwDc2025: number | null } | null;
}) {
  const s = dg.scope;
  const tpo = fmtShare(s.thirdPartyOwnedShare2025);
  const owned = s.thirdPartyOwnedShare2025 === null ? null : fmtShare(1 - s.thirdPartyOwnedShare2025);
  const battery = fmtShare(s.storageAttachShare2025);
  const heading =
    dg.kind === "county"
      ? `Home solar in ${dg.county} County by the numbers`
      : dg.kind === "pocket"
        ? `Home solar on ${joinNames(dg.ious)}-served ${dg.place} addresses by the numbers`
        : `Home solar in ${placePhrase(dg.place)} by the numbers`;
  const cTpo = countyScope ? fmtShare(countyScope.thirdPartyOwnedShare2025) : null;
  const cBattery = countyScope ? fmtShare(countyScope.storageAttachShare2025) : null;
  return (
    <section id="local-numbers">
      <h2>{heading}</h2>
      <p>
        {`${capitalize(joinNames(dg.ious))} approved ${fmtCount(s.systems2025)} home solar systems ${areaIn(dg)} in 2025, from ${fmtCount(s.installerCount2025)} installers${topShare(dg) ? `; the top three were named on ${topShare(dg)} of them` : ""}. ${trendSentence(dg)}${ytd2026(dg)}`}
      </p>
      {tpo && owned ? (
        <p className="mt-3">
          {`2025 mix: ${tpo} leased or on a power purchase agreement, ${owned} owned by the household${battery ? `; ${battery} with a battery` : ""}${s.medianSizeKwDc2025 ? `; median size ${s.medianSizeKwDc2025} kW DC` : ""}.${cTpo && cBattery && dg.county ? ` ${dg.county} County: ${cTpo} leased or PPA, ${cBattery} with a battery${countyScope?.medianSizeKwDc2025 ? `, median ${countyScope.medianSizeKwDc2025} kW` : ""}.` : ""}`}
        </p>
      ) : null}
      <div className="mt-4 overflow-x-auto rounded-xl border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Home solar systems connected per year {areaIn(dg)}, 2021 to 2025</caption>
          <thead className="bg-muted">
            <tr>
              <th className="p-3">Year</th>
              {trendYears(s).map((y) => (
                <th key={y.year} className="p-3 text-right">
                  {y.year}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <th scope="row" className="p-3">
                Systems connected
              </th>
              {trendYears(s).map((y) => (
                <td key={y.year} className="p-3 text-right tabular-nums">
                  {fmtCount(y.n)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
