# CLAUDE.md: California Rate Relief codebase

**Read first.** The one working folder is on Chad's machine: `D:\5_Solar_Business\Web_Projects\`.
Before changing anything, read, in order:
1. `00_START_HERE.md`
2. `01_STATE\SITE_BLUEPRINT.md`
3. `01_STATE\CURRENT_STATE.md` (owns live status and "next work")
4. `01_STATE\RULES.md`
5. `01_STATE\CODE_MAP.md`

Business, SEO, content and writing rules live there. Where they differ from this file, they win.
This file covers only the code. Checked against branch `claude/ta-release-20260923` on 2026-09-24.

## What this repo is

- One Next.js 15 app (`Code/Frontend`) serves five sites. Host routing is in `Code/Frontend/src/middleware.ts`.
- One Node/Express API (`Code/Backend`) serves `api.ratereliefca.com`: lead intake, the staff CRM API, voice calls, SMS and email. Data is in Supabase (Postgres).
- The main site is California Rate Relief (ratereliefca.com), an independent California solar information and referral site. It is not a contractor and installs nothing.

| Site | Host | What the middleware does |
|---|---|---|
| California Rate Relief | ratereliefca.com (localhost and 127.0.0.1 are treated as this site) | `/reviews/*` 301s to greenreviewshub.com. Then the CRR redirect table (301). Sibling-site prefixes 404, except `/best-solar-companies-california` and `/tools/solar-panel-calculator`. |
| Green Reviews Hub | greenreviewshub.com | `/` 302s to `/reviews`. Serves `/reviews*` and the shared trust pages only. |
| Secure Home Gear | securehomegear.com | `/` rewrites to `/shg-home`. Serves `/cameras`, `/alternatives`, 7 `/compare/<a>-vs-<b>` pages and trust pages. |
| At Home Biohacking | athomebiohacking.com | `/` rewrites to `/ahb-home`. Serves `/cold-plunge`, `/infrared-sauna`, `/pemf`, `/red-light-therapy`, `/vibration-plate`, `/guides`, `/learn`, `/vs` and trust pages. |
| GLP1 Compare Hub | glp1comparehub.com | `/` rewrites to `/glp1-home`. Each route gets a redirect (308), 404 or noindex from `src/lib/glp1-seo-routes.ts`. |
| Any other host | | 404, except `/api`. |

- Shared trust pages are host-aware on every domain: `/about`, `/contact`, `/affiliate-disclosure`, `/privacy`, `/terms`, `/methodology`, `/author/*`.
- CRR cannot use these prefixes (the middleware 404s them): `/best*`, `/compare*`, `/tools*`, `/news*`, `/pricing*`, `/guides*`, `/learn*`, `/vs*`, `/research*`, `/providers*`, plus the other sibling-site prefixes listed in `middleware.ts`.

## Deploy

- A push to GitHub `main` (`solarhubmarketplace-coder/california-rate-relief`) deploys.
  - Railway: ratereliefca.com from `/Code/Frontend`; api.ratereliefca.com from `/Code/Backend`.
  - Vercel: the four sibling sites (`vercel.json` also runs a `/api/keep-alive` cron).
- Only Chad pushes. Nothing is pushed, deployed or published without his explicit word in the session.
- Never use `push_to_github.bat` at the repo root. It targets a different repo.

## Code map (`Code/Frontend/src`)

| Path | What |
|---|---|
| `middleware.ts` | Host routing for the five sites; serves the CRR redirect table |
| `app/` | All routes, CRR and sibling sites side by side |
| `app/sitemap.ts`, `app/robots.ts` | Host-aware sitemap and robots (`detectDomainKey`) |
| `app/blog/page.tsx` | Blog index, grouped by topic hub |
| `app/(main)/dashboard/*`, `app/(auth)/login` | Staff CRM screens (leads, calls, appointments, email, SMS, settings) |
| `data/cities-data.ts`, `growth-cities.ts`, `city-cost-data.ts` | City page data (three overlapping files) |
| `data/article-pages.{battery,commercial,installer,problems}.json` | JSON long-form articles; types in `article-types.ts` |
| `data/topic-hubs.ts` | `TOPIC_HUBS` and `PRIMARY_HUB` (hub/spoke links, breadcrumbs, blog grouping) |
| `data/json-article-links.ts` | "Next question" links for JSON articles (append only) |
| `data/utility-rate-tracker.ts`, `solar-cost-index.ts`, `rate-sources.ts` | Rate tracker and cost index data |
| `lib/canonical-redirects.ts` (+ `.test.ts`) | CRR 301 table (31 rows), `isRedirectedPath`, `savingsCityHref`, `companiesCityHref` |
| `lib/growth-routes.ts` | `GROWTH_ROUTES`, `PUBLIC_CRR_NO_SESSION_ROUTES` (skip the Supabase session check) |
| `lib/city-pages.ts`, `breadcrumbs.ts`, `cta-intent.ts` | City page helpers, breadcrumb trail, CTA routing |
| `components/growth/` | `DecisionPage`, `HubSpokeLinks`, `JsonArticleLinks`, `HeroQuickCheck`, guide shells, city page parts |
| `components/landing/` | Header, Footer, home sections, `QualificationWizard`, `CommercialAssessmentForm` |
| `components/shared/` | `ArticleRoute`, `ArticleRenderer`, schema and breadcrumb components |
| `app/crr-palette.css`, `app/globals.css`, `tailwind.config.ts` | Design tokens. Fonts: Plus Jakarta Sans + DM Serif Display via `next/font` in `app/layout.tsx`. |
| `../scripts/` | QC gates, link asserts, link-graph crawler, IndexNow |

Other redirects: `next.config.js` `redirects()` holds 2 rules (308, not host-scoped).

## Page patterns

- **Hand-written:** `app/<section>/<slug>/page.tsx`. Many blog posts wrap `components/growth/DecisionPage`; others use guide shells (`GuideShell`, `CostFinGuideShell`, `RateGuideParts`).
- **JSON articles:** an entry in `data/article-pages.*.json`, rendered by the section's `[slug]` route through `ArticleRoute`, and gated by `scripts/qc-gate.mjs`.
- **City pages:** dynamic `[city]` routes under `/solar-companies`, `/solar-cost` and `/solar-savings`, fed by the three city data files. `/solar-cost` sets `dynamicParams = false`.
- A new page also needs its sitemap entry, blog index entry, hub spoke and links. Steps: `SITE_BLUEPRINT.md` section 4.5.

## Hard rules

- Don't change forms, tracking, consent text or the intake contract without a job that names them. Files: `src/lib/intake.ts`, `intake-routing.ts`, `attribution.ts`, `submission-identity.ts`, `components/landing/QualificationWizard.tsx`, `CommercialAssessmentForm.tsx`, `components/GoogleAnalyticsClient.tsx`, and backend `intake.routes.js` / `intake.controller.js` / `intake.service.js`. Frontend, backend and the Supabase RPC `ingest_crr_submission` share one contract.
- Don't change `app/robots.ts` or `middleware.ts` without a job that names them.
- Never commit credentials. `.env` files are gitignored. `Code/Backend/.env` holds live keys.
- Never send a real lead, email or SMS, or write to Supabase, without Chad's word.
- Copy:
  - Never "our installers", "our partner", "we install", or "free". No savings guarantees.
  - Every number comes from a primary source.
  - The compliance sentence is exact and never paraphrased: "California Rate Relief is a referral service. We are not a licensed contractor."
  - Brand: "California Rate Relief". Whether to drop "Program" everywhere is an open decision; don't add it to site copy.

## Quality gates (run from `Code/Frontend`; in Claude's container run the heavy ones one at a time via `flock /tmp/crr-tsc.lock`)

```bash
NODE_OPTIONS=--max-old-space-size=4096 npx tsc --noEmit -p .
npm run -s test:growth
node --experimental-strip-types --test src/lib/canonical-redirects.test.ts src/lib/cta-intent.test.ts src/lib/intake-routing.test.ts src/lib/city-pages.test.ts src/data/solar-cost-index.test.ts
node --test src/components/landing/Header.test.mjs
node scripts/qc-gate.mjs
node scripts/qc-gate-tsx.mjs      # 0 new fails vs the base branch
npm run -s assert:citylinks
npm run -s assert:linkspine
npx next build                     # before delivery; about 10 minutes
```

- Offline builds need `NEXT_FONT_GOOGLE_MOCKED_RESPONSES` and placeholder `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` (see `CODE_MAP.md`).
- Backend tests: `cd Code/Backend && npm test` (jest).

## Backend (`Code/Backend`)

- Entry: `src/app.js` (Express 5, CommonJS). Port from `PORT`, default 8000. Settings in `src/config/index.js`.
- Public endpoints come before `requireStaff`: `/api/health`, `/api/intake`, Twilio voice/SMS callbacks (signature-checked), the Resend webhook, unsubscribe and tracking links. Everything after `requireStaff` is the private CRM API.
- WebSocket `/streams` carries live call audio (`services/socket.service.js`). `VOICE_PROVIDER` picks OpenAI Realtime (default) or Inworld.
- On start it runs `scheduler.service.js` (queued calls, SMS, email sequences, reminders) and `owner-notification.service.js`.
- `src/config/scripts.js` holds the voice-agent prompts ("Sarah") and the SMS and email fallback templates. Edit copy there. A few strings also sit in `voice.service.js` and `queue.service.js`. These backend scripts still use the name "California Rate Relief Program".
- Voice-agent tools: `src/tools/definitions.js` (`checkAvailability`, `bookAppointment`, `search_knowledge_base`, `transferCall`).
- Other services: `lead`, `intake`, `email`, `email-sequence`, `sms`, `appointment`, `calendar`, `queue`, `context`, `knowledge-base`, `phone-matcher` (numbers in `config/twilio-numbers.json`).
- Schema: `migrations/` and `supabase/migrations/`. Business timezone defaults to America/Los_Angeles.
- Operating status of calls, SMS, email and the CRM: `01_STATE\CURRENT_STATE.md` and `OPERATIONS_STATE.md` in the working folder.
