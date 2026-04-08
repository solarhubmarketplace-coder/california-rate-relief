# California Rate Relief — Solar CRM Project

## What This Project Is

An AI-powered solar appointment booking and CRM system that operates as a **neutral, third-party qualification site** called the **"California Rate Relief Program."** It automates the entire lead lifecycle — from initial contact through appointment scheduling — using AI voice agents, automated email sequences, and SMS campaigns.

**The system runs across subsites and never mentions any specific installer, manufacturer, or financing company.** It helps California homeowners check if they qualify for net metering, confirms their info, and books them into a savings assessment. The actual installer/program details are only introduced after booking.

## Project Identity & Positioning (CRITICAL)

- **Public-facing name:** "California Rate Relief Program"
- **AI voice agent name:** Sarah
- **Positioning:** Neutral third-party qualification service — NOT a solar company
- **NEVER mention:** Any installer, manufacturer, or financing company by name (no Axia, QCells, EnFin, SunPower, etc.)
- **NEVER say:** "our installers," "our partner," "we install," or anything implying we are a solar company
- **How the program is described (only if the lead asks):** "We put solar panels on your roof at no cost out of pocket. Instead of paying [Utility] a different amount every month and never knowing what your bill's gonna be, you'd pay a fixed monthly payment that's usually 30 to 50% less than what you're paying now. All year round, for as long as you live there."
- **All framing goes through:** The utility and net metering — not any company
- **Target:** California homeowners (PG&E, SCE, SDG&E territories)
- **Product:** PPA (Power Purchase Agreement) under NEM 3.0
- **Goal of every call:** Confirm lead info → qualify → book a 15-30 min virtual savings assessment

## AI Voice Bot Approach

The bot is NOT pitching. It already has the lead's info from their website inquiry (name, utility provider, address, monthly bill, credit score). The call is:

1. **Opener:** "Hello?" + pause → "Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line. I'm following up on your inquiry — I see you're with [Utility] and your bills have been around $[amount]. Those rates have been climbing, right?"
2. **Confirm:** Bill amount → homeowner status → credit score → roof sun exposure
3. **Book:** "You qualify. What time works for a 15-30 minute savings assessment?"
4. **Only explain the program if they ask.** Don't volunteer a pitch.

**Voice:** OpenAI Realtime API, "coral" voice (warm female), natural pauses (200-500ms)

## Key Decisions Already Made (April 2026)

- Voice changed from "shimmer" to "coral" (warm female)
- "Hello?" + pause disarming opener implemented (replaces old "Hi, this is Sarah calling on a recorded line..." opener)
- All branding removed — no Sun Speed, no Axia, no QCells, no EnFin anywhere in production code
- Lead qualification data (utility, bill, address, credit) now injected into AI prompt on EVERY call including first contact (was previously only on return calls — bug fixed in context.service.js and socket.service.js)
- Default timezone changed from America/New_York to America/Los_Angeles
- All SMS, email, and voicemail templates updated to "California Rate Relief Program" neutral framing
- Email color scheme changed from orange to blue (institutional/neutral feel)
- Confirm-and-book approach: no unsolicited pitching, program explanation only when asked

## Still TODO

- **Follow-up sequences:** Build 8-touch, 90-day SMS+email cadence for leads who don't book (D0, D1, D3, D7, D14, D30, D60, D90) per playbook
- **Cold email campaign:** 50k non-opted-in lead system with warm-up, domain rotation, CAN-SPAM compliance
- **Show-up system:** Add 2h reminder, personalized savings teaser in confirmation, pre-call education content
- **ElevenLabs TTS:** A/B test after 50-100 calls (playbook recommends)
- **Utility-specific savings data:** Bake PG&E/SCE/SDG&E year-1 savings ranges deeper into knowledge base
- **Frontend updates:** Landing page still references old branding in some components — needs neutral pass

## Project Structure

```
SunSpeed_Project/
├── Code/
│   ├── Backend/          # Node.js + Express API (port 8000)
│   └── Frontend/         # Next.js + React + TypeScript (port 3000)
└── Docs/                 # Business docs, specs, lead data, roadmap
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.x
- **Database**: Supabase (PostgreSQL)
- **Real-time**: WebSocket (ws)
- **AI**: OpenAI Realtime API (voice), OpenAI text models (analysis), vector embeddings (knowledge base)
- **Voice**: Twilio SDK
- **Email**: Resend
- **Phone Parsing**: libphonenumber-js

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 18 + shadcn/ui + Radix UI + Tailwind CSS
- **State**: React Context + TanStack React Query
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Calendar**: FullCalendar

## Backend Architecture

Entry point: `Code/Backend/src/app.js`

### Key Directories
- `src/controllers/` — 14 controllers handling API requests
- `src/services/` — 20+ services containing business logic
- `src/routes/` — 14 route files, all prefixed `/api/`
- `src/tools/definitions.js` — AI voice agent tool definitions
- `src/lib/` — Supabase client wrappers
- `src/middleware/` — Error handling
- `src/config/` — Configuration, templates, AI prompts
- `src/config/scripts.js` — **SINGLE SOURCE OF TRUTH** for all AI prompts, SMS templates, email templates
- `migrations/` — SQL schema migrations

### Core Services
| Service | File | Purpose |
|---------|------|---------|
| Lead | `services/lead.service.js` | Lead CRUD, bulk import, dedup, auto-sequencing |
| Voice | `services/voice.service.js` | Twilio calls, OpenAI Realtime integration |
| Socket | `services/socket.service.js` | WebSocket streaming, AI tool execution, live calls |
| Email | `services/email.service.js` | Resend integration, email sending/logging |
| SMS | `services/sms.service.js` | Twilio SMS, local number matching |
| Appointment | `services/appointment.service.js` | Scheduling, Google Calendar, timezone handling |
| Queue | `services/queue.service.js` | Task queue with quiet hours, retries |
| Scheduler | `services/scheduler.service.js` | Auto-dial, email sequence progression, reminders |
| Email Sequence | `services/email-sequence.service.js` | Multi-step campaign management |
| Context | `services/context.service.js` | Call history, lead data injection, in-memory caching |
| AI Analysis | `services/ai-analysis.service.js` | Call summarization, quality scoring |
| Knowledge Base | `services/knowledge-base.service.js` | Vector search for solar info |
| Phone Matcher | `services/phone-matcher.service.js` | Geographic Twilio number selection |

### API Routes
| Route | Purpose |
|-------|---------|
| `/api/leads` | Lead CRUD, bulk import, upgrades |
| `/api/voice` | Voice call initiation, transfer |
| `/api/appointments` | Appointment management |
| `/api/email-sequences` | Email campaign CRUD |
| `/api/email-templates` | Template management |
| `/api/email-logs` | Email history |
| `/api/sms-logs` | SMS history |
| `/api/settings` | System configuration |
| `/api/auth` | Google OAuth flow |
| `/api/users` | User management |
| `/api/track` | Link click tracking |
| `/api/webhook` | External event handling |
| `/api/booking` | Public booking confirmation |
| `ws://[server]/streams` | Real-time call streaming |

### AI Voice Agent Tools
The AI voice agent (OpenAI Realtime) can call these functions during a live call:
1. `checkAvailability` — Query available appointment slots
2. `bookAppointment` — Schedule confirmed appointments (only after explicit "yes")
3. `search_knowledge_base` — Query solar knowledge base (net metering, PPA, NEM 3.0, tax credits)
4. `transferCall` — Route to human agent

## Frontend Architecture

Entry point: `Code/Frontend/src/app/page.tsx`

### Page Routes (App Router)
| Route | Purpose |
|-------|---------|
| `/` | Public landing page with qualification wizard |
| `/login` | Authentication |
| `/dashboard` | Main dashboard with stats, charts, activity feed |
| `/dashboard/leads` | Lead management table |
| `/dashboard/calls` | Call history and transcripts |
| `/dashboard/appointments` | Calendar view and appointment management |
| `/dashboard/book` | Manual booking interface |
| `/dashboard/email-templates` | Email template editor |
| `/dashboard/email-logs` | Email campaign history |
| `/dashboard/sms-logs` | SMS message history |
| `/dashboard/settings` | System settings |
| `/dashboard/users` | User management |
| `/dashboard/testing` | Development testing interface |

### Key Frontend Components
- `components/landing/` — Public-facing: Hero, QualificationWizard, ValueProps
- `components/dashboard/` — StatCard, ActivityFeed, CallTrendsChart, LiveCallsWidget
- `components/leads/` — LeadTable, LeadDetailDrawer, AddLeadModal, BulkImportModal
- `components/calls/` — CallLogTable
- `components/ui/` — 50+ shadcn/ui primitives
- `components/layout/` — DashboardLayout, PublicLayout
- `components/calendar/` — FullCalendar integration
- `components/voice/` — Voice call interface

### Qualification Wizard Fields Collected
- Full Name, Phone, Email, Home Address (Google Places autocomplete)
- Utility Provider (SCE, PG&E, SDG&E, MVU, LADWP, Other)
- Monthly Bill Amount ($150-200, $201-350, $351-500, $500+)
- Homeowner Status (disqualifies renters)
- Credit Score (Above 650 / Below 650 / Unsure)
- Ad tracking: gclid, fbclid, utm_source, utm_campaign, utm_content

## Database Schema (Supabase/PostgreSQL)

### Core Tables
- `leads` — id, name, phone, email, address, source, type (hot/cold), status, bill_amount, utility_provider, credit_score, qualification_data, ad tracking fields
- `call_logs` — id, lead_id, duration, status, ai_summary, transcript, recording_url, cost_breakdown
- `appointments` — id, lead_id, start_time, end_time, status, notes
- `communication_tasks` — id, lead_id, type (sms/voice/email), status, scheduled_at, attempt_number
- `email_sequences` — id, name, description, lead_type (hot/cold), is_active
- `email_sequence_steps` — id, sequence_id, step_order, delay_days, subject, html_content
- `lead_sequence_tracking` — id, lead_id, sequence_id, current_step, last_sent_at
- `email_logs` — id, lead_id, template_id, email_to, status, subject
- `sms_logs` — id, lead_id, phone_to, body, status

## Key Business Logic

### Lead Flow
1. Lead created (single or bulk import) → auto-deduped by phone
2. Classified as `hot` (immediate call) or `cold` (email nurture)
3. Hot leads → queued for AI voice call + welcome SMS
4. Cold leads → assigned email sequence for drip campaign
5. AI voice call → confirms info → books savings assessment or schedules follow-up

### Queue System
- Configurable delays: SMS (30s), Voice (60s), Email (60s)
- Quiet hours: 8 PM - 9 AM local time (DST-aware)
- Weekend handling: auto-shifts to Monday 9 AM
- Retry logic: configurable max attempts (default 2)
- Business timezone: America/Los_Angeles

### Phone Number Matching
- Twilio numbers matched to lead area codes for local presence
- Numbers configured in `config/twilio-numbers.json`
- All phones normalized to E.164 format (+1XXXXXXXXXX)

## External Service Dependencies
| Service | Purpose | Config Key |
|---------|---------|------------|
| Supabase | Database + Auth | SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY |
| OpenAI | Voice AI + Analysis + Knowledge Base | OPENAI_API_KEY, OPENAI_VECTOR_STORE_ID |
| Twilio | Voice calls + SMS | TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN |
| Resend | Email delivery | RESEND_API_KEY |
| Google | Calendar + OAuth | GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET |

## Development Commands

```bash
# Backend
cd Code/Backend
npm install
npm run dev          # Development with nodemon (port 8000)
npm start            # Production mode

# Frontend
cd Code/Frontend
npm install
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm start            # Production server
```

## CORS / Deployment
- Allowed origins: localhost:3000, localhost:3001, localhost:8000, sun-crm.aiovix.com, ratereliefca.com
- Twilio webhooks require public URL (ngrok for local dev)

## Coding Conventions
- Backend: CommonJS modules (`require`/`module.exports`), Express middleware pattern
- Frontend: TypeScript, ES modules, functional components with hooks
- API responses: Standardized `{ status, message, data, error }` format
- Error handling: Global middleware catches and formats errors
- File naming: kebab-case for files, PascalCase for React components
- **All AI prompts, SMS templates, email templates live in `src/config/scripts.js`** — edit ONLY that file for copy changes

## Important Notes
- The `.env` file in Backend contains live API keys — never commit it
- The `config/twilio-numbers.json` maps area codes to Twilio phone numbers
- Voice calls use WebSocket streaming at the `/streams` endpoint
- The scheduler runs on a 10-second interval checking for pending tasks
- All timezone handling is DST-aware using America/Los_Angeles
- Lead data (utility, bill, address, credit) is injected into the AI prompt on EVERY call including first contact
- The bot does NOT pitch unless asked — it confirms info and books
