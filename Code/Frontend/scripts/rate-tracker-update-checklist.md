# California Utility Rate Tracker — Monthly Update Checklist

Source: verbatim from `01_Project_Documents/drafts/CA_UTILITY_RATE_TRACKER_DRAFT_2026-09-17.md`,
"Update procedure (for the agent running the monthly refresh)" section, carried
over unchanged so the next update is reproducible. Applies to the live page at
`/california-utility-rate-tracker`
(`src/app/california-utility-rate-tracker/page.tsx`).

1. **Check for a new CPUC Public Advocates Office report.** Go to
   [publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses](https://www.publicadvocates.cpuc.ca.gov/press-room/reports-and-analyses)
   and look for a report titled "Q_ 20__ Electric Rates Report" newer than the
   one currently cited on this page. If found, download the PDF and read the
   "Residential average rates have significantly increased" slide/table (this
   is the anchor slide with the headline ¢/kWh figures for PG&E, SCE, SDG&E)
   — do **not** rely on an AI web-summary tool alone for this table; open the
   PDF page image directly and read the printed numbers, since automated
   extraction has been observed to mis-read adjacent forecast/actual labels on
   the RAR trend charts in this report series.
2. **Record, for each utility:** the current average rate, the "as of" date
   stated in the report's "About" slide, the most recent advice-letter
   rate-change percentage and effective date (usually 2–3 slides from the end
   of the deck, titled "[Utility] Q_ 20__ Changes to Revenue Requirement"), and
   the 3-/5-/10-year change table.
3. **Update the 12-month history table** by adding the new quarter's snapshot
   row and dropping the oldest row if more than 5 rows are present (keep a
   rolling ~15-month window so a true 12-month change can always be
   calculated).
4. **Recompute the 12-month change** by comparing the new snapshot to the
   snapshot from ~12 months prior in the history table; show the two source
   dates and values used, exactly as done in this draft, so the calculation
   stays auditable and is never confused with a CPUC-published figure.
5. **Re-check the IGFC/Base Services Charge status** — confirm no new decision
   has changed the $6 / $12 / $24.15 tier amounts (check for CPUC decisions
   superseding D.24-05-028 at [docs.cpuc.ca.gov](https://docs.cpuc.ca.gov),
   searching "income graduated fixed charge").
6. **Re-check SMUD and LADWP** on their own schedules (SMUD:
   [smud.org/Rate-Information](https://www.smud.org/Rate-Information); LADWP:
   contact LADWP Customer Service or check for a current board-approved rate
   ordinance, since public PDFs found in this pass were stale as of
   2009/2016).
7. **Record the fetch date** for every cell that changed, in the format "DD
   Mon YYYY," and update the page's visible "Data last verified: [date]" line
   (rendered as the "Cite this page" box and the per-table "Fetched" cells on
   the live page).
8. **Never carry forward a number from training data or memory.** If a source
   cannot be reached or a figure cannot be confirmed against the primary
   document, write `TODO: verify — <what and where>` in the working draft, and
   on the live page render that cell as "Not sourced" or "Not yet published"
   text — never a number.
9. **Leave the referral/CTA component untouched** — this page's owner does not
   edit that component; flag any needed CTA changes to the owning workstream
   instead. On the live page this is the single `IntentCTA` /
   `variant="bill"` placement below the content.

## Also update on the live page

- `datasetJsonLd.dateModified` and the page's `lastUpdated` / `lastUpdatedDisplay`
  / `dataVerifiedDisplay` constants in
  `src/app/california-utility-rate-tracker/page.tsx`.
- `lastModified` for the `/california-utility-rate-tracker` entry in
  `src/app/sitemap.ts`.
