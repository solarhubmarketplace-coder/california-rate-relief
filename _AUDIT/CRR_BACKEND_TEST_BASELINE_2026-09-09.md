# CRR backend test baseline — 2026-09-09

Verified against exact Git commit `8187896c3b3ad2e2bcaaa2e1467da6114fffb43f` by extracting `Code/Backend` with `git archive` into a new temporary directory and junctioning only the current `Code/Backend/node_modules`. No source files from the working tree were copied into the baseline.

Baseline command: `npx jest --runInBand --forceExit --json --outputFile=baseline-results.json`

- Baseline: 100 tests; 92 passed; 8 failed. Four of ten suites failed.
- Current comparison: the same four suites were rerun in the working tree; 44 tests in those suites, 36 passed and the same 8 failed.
- The earlier full working-tree run was 120/128 with these same failures. New release tests are separately green.

| File | Failing test |
|---|---|
| `lead.service.test.js` | LeadService > createLead - dedup check > throws 409 when phone already exists |
| `config.test.js` | Config > exports PORT with default 8000 |
| `context.service.test.js` | Context Service > generateContextualSystemMessage > includes qualification data from form |
| `scripts.test.js` | AI Scripts Configuration > Exports > exports AI_VOICE |
| `scripts.test.js` | AI Scripts Configuration > Exports > exports VOICEMAIL_DATA_ANOMALY |
| `scripts.test.js` | AI Scripts Configuration > Golden Path Qualification (M2 Issue #2) > contains FCC-compliant opener |
| `scripts.test.js` | AI Scripts Configuration > Iron Dome Objection Handling (M2 Issue #2) > handles 'too expensive' objection |
| `scripts.test.js` | AI Scripts Configuration > Iron Dome Objection Handling (M2 Issue #2) > handles lien/UCC concerns |

Conclusion: all eight full-suite failures reported during this release pre-exist at `8187896`; this release introduced none of them.
