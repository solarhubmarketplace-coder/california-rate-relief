# AGENTS.md

This repository serves ratereliefca.com (California Rate Relief) and four sibling sites through host routing (`Code/Frontend/src/middleware.ts`), plus the Express API at api.ratereliefca.com (`Code/Backend`).

Before changing anything, read the working folder on Chad's machine, `D:\5_Solar_Business\Web_Projects\` (the only one): `00_START_HERE.md`, then `01_STATE\SITE_BLUEPRINT.md`, `01_STATE\CURRENT_STATE.md`, `01_STATE\RULES.md` and `01_STATE\CODE_MAP.md`. They win where they differ from this repo. Code notes (code map, page patterns, quality gates, backend) are in `CLAUDE.md` here.

Rules that apply in the code:
- Nothing is pushed or deployed without Chad's explicit word. A push to `main` deploys (Railway for ratereliefca.com and api.ratereliefca.com, Vercel for the sibling sites).
- Don't change forms, tracking, consent text, intake contracts, `robots.ts` or `middleware.ts` without a job that names them.
- Never commit credentials. `Code/Backend/.env` holds live keys.
- Copy: never "our installers", "our partner", "we install" or "free"; no savings guarantees; every number from a primary source.
- Run the quality gates in `CLAUDE.md` before delivery.
