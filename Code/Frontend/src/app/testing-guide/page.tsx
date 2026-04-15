"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Copy,
  Check,
  Phone,
  Users,
  Mail,
  Calendar,
  Settings,
  Shield,
  Database,
  Zap,
  FileText,
  BarChart3,
  Globe,
  MessageSquare,
  Link as LinkIcon,
  BookOpen,
  List,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface TestCase {
  id: string;
  title: string;
  method: string;
  endpoint: string;
  steps: string[];
  expectedResults: string[];
  notes?: string[];
  icon: React.ReactNode;
}

interface TestSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  tests: TestCase[];
}

function TestingGuideContent() {
  const [completedTests, setCompletedTests] = useState<Set<string>>(new Set());
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "password") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 2000);
    }
  };

  const toggleTest = (id: string) => {
    setCompletedTests((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const testSections: TestSection[] = [
    {
      id: "lead-management",
      title: "Lead Management",
      icon: <Users className="h-5 w-5" />,
      tests: [
        {
          id: "create-hot-lead",
          title: "Create Hot Lead ✅ VERIFIED",
          method: "POST",
          endpoint: "/api/leads",
          icon: <Users className="h-4 w-4" />,
          steps: [
            "Send POST request to /api/leads",
            "Body: {name: 'John Doe', phone: '+12025551234', email: 'john@example.com', source: 'google_ads', type: 'hot'}",
            "Or use curl: curl -X POST http://localhost:3000/api/leads -H 'Content-Type: application/json' -d '{\"name\":\"Test Hot\",\"phone\":\"+12025551234\",\"email\":\"hot@test.com\",\"type\":\"hot\"}'",
            "Check response and database",
          ],
          expectedResults: [
            "Lead created with type='hot'",
            "3 communication tasks created: email, sms, voice",
            "Lead status='new'",
            "Lead appears in GET /api/leads response",
          ],
          notes: [
            "Hot leads trigger immediate communication tasks",
            "Tasks scheduled based on quiet hours and business rules",
            "Verify: SELECT * FROM communication_tasks WHERE lead_id = '<lead_id>'; (Should show 3 tasks)",
          ],
        },
        {
          id: "create-cold-lead",
          title: "Create Cold Lead ✅ VERIFIED",
          method: "POST",
          endpoint: "/api/leads",
          icon: <Users className="h-4 w-4" />,
          steps: [
            "Create a test CSV: name,phone,email,source",
            "POST to /api/leads/bulk OR use frontend upload",
            "Or send POST request to /api/leads",
            "Body: {name: 'Jane Smith', phone: '+12025551235', email: 'jane@example.com', source: 'csv', type: 'cold'}",
            "Check response and database",
          ],
          expectedResults: [
            "Lead created with type='cold'",
            "1 communication task created: email only",
            "NO SMS or voice tasks (cold leads only get email)",
            "Lead status='new'",
          ],
          notes: [
            "Cold leads receive nurture email only",
            "Can be upgraded to hot via email click tracking",
            "Verify: SELECT * FROM leads WHERE email = 'cold@test.com'; SELECT * FROM communication_tasks WHERE lead_id = '<lead_id>';",
          ],
        },
        {
          id: "bulk-import-leads",
          title: "Bulk Import Leads (CSV) ✅ VERIFIED",
          method: "POST",
          endpoint: "/api/leads/bulk",
          icon: <FileText className="h-4 w-4" />,
          steps: [
            "Prepare CSV file with columns: name, phone, email, source",
            "Example CSV: name,phone,email,source\\nTest Cold,+12025551234,cold@test.com,csv",
            "Send POST request to /api/leads/bulk",
            "Body: {leads: [{name, phone, email, source}, ...]}",
            "Check response and database",
          ],
          expectedResults: [
            "All leads imported successfully",
            "Duplicate detection works (by phone number)",
            "All leads created with type='cold' by default",
            "Email tasks created for each lead",
            "Response includes count of imported leads",
          ],
          notes: [
            "Bulk imports default to cold leads",
            "Duplicates are detected and skipped",
            "Can be upgraded to hot individually later",
          ],
        },
        {
          id: "get-all-leads",
          title: "Get All Leads",
          method: "GET",
          endpoint: "/api/leads",
          icon: <List className="h-4 w-4" />,
          steps: [
            "Send GET request to /api/leads",
            "Check response structure",
            "Verify filtering and sorting",
          ],
          expectedResults: [
            "Returns array of all leads",
            "Each lead includes: id, name, phone, email, status, source, type, created_at",
            "Leads sorted by created_at DESC (newest first)",
            "Can filter by status, source, type",
          ],
        },
        {
          id: "upgrade-lead-to-hot",
          title: "Upgrade Lead to Hot",
          method: "PUT",
          endpoint: "/api/leads/:leadId/hot",
          icon: <Zap className="h-4 w-4" />,
          steps: [
            "Create a cold lead first",
            "Send PUT request to /api/leads/:leadId/hot",
            "Check lead type and tasks",
          ],
          expectedResults: [
            "Lead type changed from 'cold' to 'hot'",
            "New communication tasks created: email, sms, voice",
            "Lead status may update to 'new'",
            "Old email task remains completed",
          ],
          notes: [
            "Used when cold lead shows interest",
            "Triggers full communication workflow",
          ],
        },
        {
          id: "update-lead-consent",
          title: "Update Lead Consent",
          method: "PUT",
          endpoint: "/api/leads/:leadId/consent",
          icon: <Shield className="h-4 w-4" />,
          steps: [
            "Send PUT request to /api/leads/:leadId/consent",
            "Body: {consent: true/false, consentType: 'sms'|'email'|'voice'}",
            "Check lead record",
          ],
          expectedResults: [
            "Lead consent field updated",
            "Consent timestamp recorded",
            "Affects future communication tasks",
          ],
        },
        {
          id: "lead-conversion-click",
          title: "Lead Conversion Click (Email Tracking)",
          method: "GET",
          endpoint: "/api/leads/convert/:leadId",
          icon: <LinkIcon className="h-4 w-4" />,
          steps: [
            "Send cold lead email",
            "Click tracking link in email",
            "Verify lead conversion",
          ],
          expectedResults: [
            "Lead type upgraded to 'hot'",
            "Redirects to confirmation page",
            "New communication tasks created",
            "Conversion tracked in database",
          ],
          notes: [
            "Public route - no authentication required",
            "Used in email nurture campaigns",
          ],
        },
      ],
    },
    {
      id: "voice-ai-calling",
      title: "Voice & AI Calling",
      icon: <Phone className="h-5 w-5" />,
      tests: [
        {
          id: "trigger-ai-call",
          title: "Trigger AI Call",
          method: "POST",
          endpoint: "/api/voice/call",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Create a hot lead with phone number",
            "Send POST request to /api/voice/call",
            "Body: {leadId: 'uuid'}",
            "Or use curl: curl -X POST http://localhost:3000/api/test/call -H 'Content-Type: application/json' -d '{\"phoneNumber\":\"+1YOUR_REAL_PHONE\"}'",
            "Answer phone call",
            "Have conversation with AI",
          ],
          expectedResults: [
            "Twilio initiates call to lead's phone",
            "AI greets immediately (no 'Hold on a minute' delay)",
            "AI uses disarming opener: 'Hello?' + pause, then 'Hi [Name], this is Sarah with the California Rate Relief Program, calling on a recorded line.'",
            "AI follows 'Golden Path' qualification script",
            "AI conversation flows naturally",
            "AI can book appointments using bookAppointment tool",
            "AI can search knowledge base using search_knowledge_base tool",
            "Call transcript saved to database",
            "Call recording URL saved after call ends",
          ],
          notes: [
            "Requires QUEUE_VOICE_ENABLED=true",
            "Requires PUBLIC_URL set (for WebSocket)",
            "Uses OpenAI Realtime API for AI conversation",
            "AI has access to calendar for booking",
            "Server Logs to Check: [Voice] Initiating call, [OPENAI] Sending session.update, [STATE] Lead ID set to: ...",
          ],
        },
        {
          id: "call-1-feature-verification",
          title: "Call 1: Feature Verification (AI, RAG, Booking Constraints)",
          method: "MANUAL",
          endpoint: "Phone Call",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Dial the number",
            "Step 1: Say 'Hello?' - AI should greet with FCC-compliant opener",
            "Step 2: Say 'No, I'm free. I wanted to ask, do you guys offer any PPA programs?' - AI should search knowledge base",
            "Step 3: Say 'Okay cool. Can I book an appointment for this Saturday at 10 AM?' - AI should reject weekend",
            "Step 4: Say 'Okay, what about next Monday at 8 PM?' - AI should reject after 5 PM",
            "Step 5: Say 'Alright, let's do next Monday at 10 AM then.' - AI should book successfully",
          ],
          expectedResults: [
            "AI greets with proper opener",
            "AI searches knowledge base and explains PPA briefly",
            "AI rejects weekend booking: 'I'd love to, but unfortunately we don't schedule appointments on weekends. How about Monday?'",
            "AI rejects after-hours: 'I can't do that time. We only have openings between 9 AM and 5 PM. Does earlier work?'",
            "AI books successfully: 'Perfect. I have you down for Monday at 10 AM.'",
            "Logs show: Appointment created + Google Calendar event created",
          ],
          notes: [
            "Post-Call Check: SELECT * FROM appointments ORDER BY created_at DESC LIMIT 1;",
            "Check Google Calendar: Verify event exists",
            "Watch backend terminal for [AppointmentService] and [Tool] logs",
          ],
        },
        {
          id: "call-2-live-transfer",
          title: "Call 2: Live Transfer Verification",
          method: "MANUAL",
          endpoint: "Phone Call",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Dial the number",
            "Step 1: Say 'Hello?' - AI should greet (contextual if repeat caller)",
            "Step 2: Say 'Look, I'm frustrated. I just want to speak to a real human person right now.' - Trigger transfer",
            "Wait for transfer",
          ],
          expectedResults: [
            "AI responds: 'I understand. Let me get a manager on the line for you right away. Please hold.'",
            "Hear hold music",
            "Call diverts to LIVE_TRANSFER_NUMBER (Default: 951-972-1902)",
            "Logs show: transferCall tool triggered",
          ],
          notes: [
            "Transfer number configured in .env or defaults to 951-972-1902",
            "Verifies transferCall tool trigger",
          ],
        },
        {
          id: "twiml-endpoint",
          title: "Twilio TwiML Endpoint",
          method: "GET/POST",
          endpoint: "/api/voice/twiml",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Twilio calls this endpoint when call connects",
            "Check TwiML response",
          ],
          expectedResults: [
            "Returns TwiML XML",
            "Connects call to WebSocket stream",
            "Streams audio to OpenAI Realtime API",
          ],
          notes: [
            "Called automatically by Twilio",
            "No manual testing needed",
          ],
        },
        {
          id: "voicemail-handler",
          title: "Voicemail Handler",
          method: "POST",
          endpoint: "/api/voice/voicemail",
          icon: <MessageSquare className="h-4 w-4" />,
          steps: [
            "Call goes to voicemail",
            "Twilio sends POST to /api/voice/voicemail",
            "Check call status and follow-up",
          ],
          expectedResults: [
            "Call status updated to 'voicemail'",
            "SMS follow-up sent using SMS_MISSED_CALL_FOLLOWUP template",
            "Call log created with voicemail status",
          ],
        },
        {
          id: "call-status-update",
          title: "Call Status Update",
          method: "POST",
          endpoint: "/api/voice/status/:leadId",
          icon: <BarChart3 className="h-4 w-4" />,
          steps: [
            "Twilio sends status updates during call",
            "Check call log updates",
          ],
          expectedResults: [
            "Call status updated in real-time",
            "Statuses: 'ringing', 'in-progress', 'completed', 'failed'",
            "Call duration tracked",
          ],
        },
        {
          id: "recording-callback",
          title: "Recording Callback",
          method: "POST",
          endpoint: "/api/voice/recording-callback/:leadId",
          icon: <FileText className="h-4 w-4" />,
          steps: [
            "Call completes",
            "Twilio uploads recording",
            "Sends callback with recording URL",
          ],
          expectedResults: [
            "Recording URL saved to call log",
            "Recording accessible for playback",
            "Call log updated with recording_url field",
          ],
        },
      ],
    },
    {
      id: "appointment-booking",
      title: "Appointment Booking",
      icon: <Calendar className="h-5 w-5" />,
      tests: [
        {
          id: "book-appointment",
          title: "Book Appointment",
          method: "POST",
          endpoint: "/api/appointments",
          icon: <Calendar className="h-4 w-4" />,
          steps: [
            "AI calls bookAppointment tool during conversation",
            "User must EXPLICITLY confirm appointment time",
            "AI validates confirmation before booking",
            "Or send POST request manually",
            "Body: {leadId, scheduledTime, notes}",
            "Check appointment and calendar",
          ],
          expectedResults: [
            "Appointment created in database",
            "Google Calendar event created (if connected)",
            "Lead status updated to 'converted' (prevents double dial)",
            "SMS confirmation sent using SMS_APPOINTMENT_CONFIRMATION",
            "Email confirmation sent",
            "Appointment reminders scheduled (24h, 1h)",
            "AI does NOT book if user says 'no', 'can't', 'doesn't work'",
            "AI only books when user says 'yes', 'sounds good', 'that works'",
          ],
          notes: [
            "Requires Google Calendar integration",
            "Business hours enforced (9 AM - 5 PM EST)",
            "Weekends blocked (Saturday/Sunday)",
            "CRITICAL FIX: AI validates explicit confirmation before booking",
            "CRITICAL FIX: Lead status=&apos;converted&apos; prevents zombie callbacks",
          ],
        },
        {
          id: "get-appointments",
          title: "Get All Appointments",
          method: "GET",
          endpoint: "/api/appointments",
          icon: <Calendar className="h-4 w-4" />,
          steps: [
            "Send GET request to /api/appointments",
            "Check response structure",
          ],
          expectedResults: [
            "Returns array of appointments",
            "Each appointment includes: id, leadId, scheduledTime, status, notes",
            "Can filter by status: scheduled, confirmed, cancelled",
            "Can filter by date range",
          ],
        },
        {
          id: "appointment-reminders",
          title: "Appointment Reminders (Automated) ✅ VERIFIED",
          method: "AUTO",
          endpoint: "Scheduler",
          icon: <Mail className="h-4 w-4" />,
          steps: [
            "Insert a test appointment: INSERT INTO appointments (lead_id, scheduled_time, status) VALUES ('<lead_id>', NOW() + INTERVAL '24 hours', 'scheduled');",
            "Wait for scheduler (30 seconds)",
            "Check communication tasks",
          ],
          expectedResults: [
            "24-hour reminder task created",
            "1-hour reminder task created",
            "Reminders use SMS_APPOINTMENT_REMINDER_24H and SMS_APPOINTMENT_REMINDER_1H",
            "Email reminders also sent (uses EMAIL_APPOINTMENT_REMINDER_24H_*)",
            "Log: [Scheduler] Scheduled 24h reminder for appointment",
          ],
          notes: [
            "Automated by scheduler service",
            "Runs every 30 seconds",
            "Checks appointments 24h and 1h before scheduled time",
          ],
        },
      ],
    },
    {
      id: "tracking-analytics",
      title: "Tracking & Analytics",
      icon: <Globe className="h-5 w-5" />,
      tests: [
        {
          id: "utm-parameter-tracking",
          title: "UTM Parameter Tracking",
          method: "POST",
          endpoint: "/api/leads (with query params)",
          icon: <Globe className="h-4 w-4" />,
          steps: [
            "Navigate to landing page with UTM params: ?utm_source=google&utm_campaign=summer2024&utm_content=ad1",
            "Fill out qualification form",
            "Submit form (creates lead)",
            "Check lead record",
          ],
          expectedResults: [
            "Lead created with utm_source='google'",
            "Lead created with utm_campaign='summer2024'",
            "Lead created with utm_content='ad1'",
            "All UTM parameters saved to lead record",
            "Parameters visible in lead detail view",
          ],
          notes: [
            "Captured from URL query parameters",
            "Stored in lead tracking_data field",
            "Used for campaign attribution",
          ],
        },
        {
          id: "gclid-tracking",
          title: "Google Click ID (gclid) Tracking",
          method: "POST",
          endpoint: "/api/leads (with gclid param)",
          icon: <Globe className="h-4 w-4" />,
          steps: [
            "Navigate to landing page with gclid: ?gclid=test123456",
            "Complete qualification form",
            "Submit form",
            "Check lead record",
          ],
          expectedResults: [
            "Lead created with gclid='test123456'",
            "gclid saved to lead tracking_data",
            "Used for Google Ads conversion tracking",
          ],
          notes: [
            "Google Ads click tracking parameter",
            "Enables conversion tracking in Google Ads",
          ],
        },
        {
          id: "fbclid-tracking",
          title: "Facebook Click ID (fbclid) Tracking",
          method: "POST",
          endpoint: "/api/leads (with fbclid param)",
          icon: <Globe className="h-4 w-4" />,
          steps: [
            "Navigate to landing page with fbclid: ?fbclid=test789012",
            "Complete qualification form",
            "Submit form",
            "Check lead record",
          ],
          expectedResults: [
            "Lead created with fbclid='test789012'",
            "fbclid saved to lead tracking_data",
            "Used for Facebook Ads conversion tracking",
          ],
          notes: [
            "Facebook Ads click tracking parameter",
            "Enables conversion tracking in Facebook Ads",
          ],
        },
        {
          id: "email-click-tracking",
          title: "Email Click Tracking",
          method: "GET",
          endpoint: "/api/tracking/:token",
          icon: <LinkIcon className="h-4 w-4" />,
          steps: [
            "Send email with tracking link",
            "Click link in email",
            "Check tracking log",
          ],
          expectedResults: [
            "Click tracked in email_logs",
            "Redirects to destination URL",
            "Click timestamp recorded",
            "Used for lead conversion tracking",
          ],
          notes: [
            "Public route - no authentication",
            "Token-based tracking for privacy",
          ],
        },
      ],
    },
    {
      id: "communication-queue",
      title: "Communication Queue & Scheduler",
      icon: <MessageSquare className="h-5 w-5" />,
      tests: [
        {
          id: "sms-queue-hot-lead",
          title: "SMS Queue - Hot Lead Welcome ✅ VERIFIED",
          method: "AUTO",
          endpoint: "Scheduler",
          icon: <MessageSquare className="h-4 w-4" />,
          steps: [
            "Create hot lead (Test 2)",
            "Wait for scheduler (30 seconds)",
            "Check SMS logs",
          ],
          expectedResults: [
            "SMS sent using SMS_HOT_LEAD_WELCOME template",
            "SMS logged in sms_logs table",
            "Task status updated to 'completed'",
            "SMS received on lead's phone",
            "Log: [QueueService] Sent hot lead welcome SMS",
          ],
          notes: [
            "Requires QUEUE_SMS_ENABLED=true",
            "Scheduled based on quiet hours",
            "Runs every 30 seconds",
            "Verify: SELECT * FROM sms_logs WHERE lead_id = '<lead_id>';",
          ],
        },
        {
          id: "email-queue-cold-lead",
          title: "Email Queue - Cold Lead Nurture ✅ VERIFIED",
          method: "AUTO",
          endpoint: "Scheduler",
          icon: <Mail className="h-4 w-4" />,
          steps: [
            "Create cold lead (Test 1)",
            "Wait for scheduler (30 seconds)",
            "Click the link in the email (simulates conversion)",
            "Check email logs",
          ],
          expectedResults: [
            "Email sent using EMAIL_COLD_LEAD_HTML template",
            "Email logged in email_logs table",
            "Email contains tracking link",
            "Lead status updates to 'hot' (if configured)",
            "New task queue generated (Email, SMS, Voice)",
            "Task status updated to 'completed'",
          ],
          notes: [
            "Requires Google OAuth connected",
            "Uses Gmail API to send",
            "Email includes conversion tracking link",
            "Verify: SELECT * FROM email_logs WHERE lead_id = '<lead_id>'; SELECT type FROM leads WHERE id = '<lead_id>';",
          ],
        },
        {
          id: "double-dial-logic",
          title: "Double Dial Logic ✅ VERIFIED",
          method: "AUTO",
          endpoint: "Scheduler",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Create hot lead",
            "First call fails (no answer)",
            "Wait for scheduler",
            "Check for second call attempt",
          ],
          expectedResults: [
            "Second call attempt scheduled",
            "Redial happens after configured delay",
            "If both fail, SMS sent using SMS_MISSED_CALL_FOLLOWUP",
            "Call attempts logged",
            "Double dial cancelled if appointment already booked",
            "Double dial cancelled if lead status is 'converted'",
          ],
          notes: [
            "Controlled by settings.doubleDialEnabled",
            "Delay configurable in settings",
            "CRITICAL FIX: System now checks for existing appointments before double dial",
            "CRITICAL FIX: System checks lead status=&apos;converted&apos; before retry",
          ],
        },
        {
          id: "90-day-reengagement",
          title: "90-Day Re-engagement ✅ VERIFIED",
          method: "AUTO",
          endpoint: "Scheduler",
          icon: <Phone className="h-4 w-4" />,
          steps: [
            "Insert an old declined lead: INSERT INTO leads (name, phone, status, type, created_at) VALUES ('Old Lead', '+12025551234', 'declined', 'hot', NOW() - INTERVAL '91 days');",
            "Wait for scheduler (30 seconds)",
            "Check communication tasks",
          ],
          expectedResults: [
            "ONE Voice task created with trigger='followup_90_day'",
            "ONE SMS task created with trigger='followup_90_day'",
            "Log: [Scheduler] Found 1 leads eligible for 90-day re-engagement",
            "AI uses different greeting (AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY)",
            "Tasks scheduled for immediate execution",
            "If call is made: Server logs show '📆 90-day follow-up call detected - using re-engagement prompt'",
          ],
          notes: [
            "Only for declined leads older than 90 days",
            "Uses re-engagement script",
            "Runs automatically via scheduler",
            "Note: If you see double voice tasks, check your global Double Dial settings",
            "Verify: SELECT * FROM communication_tasks WHERE metadata->>'trigger' = 'followup_90_day' ORDER BY created_at DESC;",
          ],
        },
      ],
    },
    {
      id: "booking-confirmation",
      title: "Booking & Confirmation",
      icon: <BookOpen className="h-5 w-5" />,
      tests: [
        {
          id: "confirm-interest",
          title: "Confirm Interest (Public Booking)",
          method: "POST",
          endpoint: "/api/booking/confirm",
          icon: <BookOpen className="h-4 w-4" />,
          steps: [
            "Send POST request to /api/booking/confirm?lead_id=xxx",
            "Check lead status",
          ],
          expectedResults: [
            "Lead upgraded to hot",
            "Lead status updated to 'new'",
            "Communication tasks created",
            "Returns success response",
          ],
          notes: [
            "Public route - no authentication required",
            "Used for public booking confirmations",
          ],
        },
      ],
    },
    {
      id: "settings-management",
      title: "Settings Management",
      icon: <Settings className="h-5 w-5" />,
      tests: [
        {
          id: "get-settings",
          title: "Get Settings",
          method: "GET",
          endpoint: "/api/settings",
          icon: <Settings className="h-4 w-4" />,
          steps: [
            "Send GET request to /api/settings",
            "Check response",
          ],
          expectedResults: [
            "Returns all system settings",
            "Includes: doubleDialEnabled, quietHours, businessHours, etc.",
            "Settings persisted in database",
          ],
        },
        {
          id: "update-settings",
          title: "Update Settings",
          method: "PATCH",
          endpoint: "/api/settings",
          icon: <Settings className="h-4 w-4" />,
          steps: [
            "Send PATCH request to /api/settings",
            "Body: {doubleDialEnabled: true, quietHours: {...}}",
            "Verify settings saved",
          ],
          expectedResults: [
            "Settings updated successfully",
            "Changes persist after server restart",
            "Settings affect scheduler behavior",
          ],
        },
      ],
    },
  ];

  const allTests = testSections.flatMap((section) => section.tests);
  const totalTests = allTests.length;
  const completedCount = allTests.filter((test) =>
    completedTests.has(test.id)
  ).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            CRM Testing Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive testing guide for all API endpoints and integrations
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Link href="/">
              <Button variant="outline" size="sm">
                Back to App
              </Button>
            </Link>
            <Badge variant="secondary" className="text-sm">
              {completedCount} / {totalTests} tests completed
            </Badge>
          </div>
        </div>

        {/* Test Account Credentials */}
        <Card className="mb-8 p-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-foreground mb-2">Test Account</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Email:
                  </span>
                  <code className="text-sm bg-card px-2 py-1 rounded">
                    admin@ratereliefca.com
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() => copyToClipboard("admin@ratereliefca.com", "email")}
                  >
                    {copiedEmail ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Password:
                  </span>
                  <code className="text-sm bg-card px-2 py-1 rounded">
                    TestPassword123!
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={() =>
                      copyToClipboard("TestPassword123!", "password")
                    }
                  >
                    {copiedPassword ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Prerequisites */}
        <Card className="mb-8 p-6 bg-status-info/10 border-status-info/20">
          <h3 className="font-bold text-foreground mb-3">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
            <li>Backend server running: <code className="bg-card px-1 rounded">pnpm dev</code></li>
            <li>Environment variables set in <code className="bg-card px-1 rounded">.env</code>:
              <ul className="list-disc list-inside ml-6 mt-1 space-y-0.5">
                <li><code className="bg-card px-1 rounded">TWILIO_ACCOUNT_SID</code>, <code className="bg-card px-1 rounded">TWILIO_AUTH_TOKEN</code>, <code className="bg-card px-1 rounded">TWILIO_PHONE_NUMBER</code></li>
                <li><code className="bg-card px-1 rounded">RESEND_API_KEY</code>, <code className="bg-card px-1 rounded">EMAIL_FROM</code></li>
                <li><code className="bg-card px-1 rounded">OPENAI_API_KEY</code></li>
                <li><code className="bg-card px-1 rounded">PUBLIC_URL</code> (your ngrok or public URL)</li>
                <li><code className="bg-card px-1 rounded">QUEUE_SMS_ENABLED=true</code> (set to <code className="bg-card px-1 rounded">false</code> to disable ALL SMS)</li>
                <li><code className="bg-card px-1 rounded">QUEUE_VOICE_ENABLED=true</code> (set to <code className="bg-card px-1 rounded">false</code> to disable ALL calls)</li>
              </ul>
            </li>
            <li>Supabase database accessible</li>
            <li>Google OAuth connected (for email/calendar)</li>
          </ul>
        </Card>

        {/* Template Usage Summary */}
        <Card className="mb-8 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-bold text-foreground mb-3">Template Usage Summary</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Template</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Service</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Method/Location</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">AI_SYSTEM_PROMPT_INITIAL_CALL</code></td>
                  <td className="py-2 px-3">socket.service.js</td>
                  <td className="py-2 px-3">Line 33 (imported)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">AI_SYSTEM_PROMPT_FOLLOWUP_90_DAY</code></td>
                  <td className="py-2 px-3">socket.service.js</td>
                  <td className="py-2 px-3">Line 1040 (90-day trigger)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">SMS_HOT_LEAD_WELCOME</code></td>
                  <td className="py-2 px-3">sms.service.js</td>
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">sendHotLeadWelcome()</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">SMS_APPOINTMENT_CONFIRMATION</code></td>
                  <td className="py-2 px-3">sms.service.js</td>
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">sendAppointmentConfirmation()</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">SMS_MISSED_CALL_FOLLOWUP</code></td>
                  <td className="py-2 px-3">sms.service.js</td>
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">sendMissedCallFollowup()</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">SMS_APPOINTMENT_REMINDER_24H/1H</code></td>
                  <td className="py-2 px-3">queue.service.js</td>
                  <td className="py-2 px-3">Line 429 (automated_reminder)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">SMS_FOLLOWUP_90_DAY</code></td>
                  <td className="py-2 px-3">queue.service.js</td>
                  <td className="py-2 px-3">Line 445 (followup_90_day)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">EMAIL_COLD_LEAD_SUBJECT/HTML</code></td>
                  <td className="py-2 px-3">email.service.js</td>
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">sendColdLeadEmail()</code></td>
                </tr>
                <tr>
                  <td className="py-2 px-3"><code className="bg-card px-1 rounded">EMAIL_APPOINTMENT_REMINDER_*</code></td>
                  <td className="py-2 px-3">queue.service.js</td>
                  <td className="py-2 px-3">Line 333 (automated_reminder)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Power User: Hacking Time */}
        <Card className="mb-8 p-6 bg-status-warning/10 border-status-warning/20">
          <div className="flex items-start gap-3 mb-3">
            <Zap className="h-5 w-5 text-status-warning mt-0.5" />
            <h3 className="font-bold text-foreground">⚡ Power User: Hacking Time (Skip the Wait)</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            If Quiet Hours moved your call to tomorrow, or you want to trigger a redial/90-day task immediately:
          </p>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-1">1. Force specific task to run NOW:</p>
              <code className="block bg-card p-2 rounded text-xs mt-1">
                UPDATE communication_tasks SET scheduled_at = NOW() WHERE lead_id = &apos;&lt;lead_id&gt;&apos; AND status = &apos;pending&apos;;
              </code>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">2. Force 90-Day Scheduler to pick up a lead:</p>
              <code className="block bg-card p-2 rounded text-xs mt-1">
                UPDATE leads SET created_at = NOW() - INTERVAL &apos;91 days&apos;, status = &apos;declined&apos; WHERE id = &apos;&lt;lead_id&gt;&apos;;
              </code>
              <p className="text-xs text-muted-foreground mt-1 italic">After running this, wait 30s for the scheduler to run.</p>
            </div>
          </div>
        </Card>

        {/* Test Sections */}
        <div className="space-y-8">
          {testSections.map((section) => (
            <div key={section.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
              </div>

              {section.tests.map((test) => (
                <Card
                  key={test.id}
                  className="p-6 border-l-4 border-l-primary"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Checkbox
                      checked={completedTests.has(test.id)}
                      onCheckedChange={() => toggleTest(test.id)}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 bg-muted rounded">
                          {test.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                          {test.title}
                        </h3>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Method
                          </span>
                          <Badge
                            variant={
                              test.method === "GET"
                                ? "default"
                                : test.method === "POST"
                                  ? "secondary"
                                  : test.method === "AUTO"
                                    ? "outline"
                                    : "outline"
                            }
                            className="ml-2"
                          >
                            {test.method}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Endpoint
                          </span>
                          <code className="ml-2 text-sm bg-muted px-2 py-1 rounded">
                            {test.endpoint}
                          </code>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Steps:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                          {test.steps.map((step, idx) => (
                            <li key={idx}>{step}</li>
                          ))}
                        </ol>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">
                          Expected Results:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {test.expectedResults.map((result, idx) => (
                            <li key={idx}>{result}</li>
                          ))}
                        </ul>
                      </div>

                      {test.notes && test.notes.length > 0 && (
                        <div className="bg-status-warning/10 border border-status-warning/20 rounded-lg p-3">
                          <h4 className="text-xs font-semibold text-status-warning mb-1 uppercase">
                            Notes:
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-xs text-foreground/80">
                            {test.notes.map((note, idx) => (
                              <li key={idx}>{note}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <Card className="mt-8 p-6 bg-status-error/10 border-status-error/20">
          <h3 className="font-bold text-foreground mb-3">Troubleshooting</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Issue</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Check</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">No SMS sending</td>
                  <td className="py-2 px-3">Verify <code className="bg-card px-1 rounded">QUEUE_SMS_ENABLED=true</code> in <code className="bg-card px-1 rounded">.env</code></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">No calls</td>
                  <td className="py-2 px-3">Verify <code className="bg-card px-1 rounded">QUEUE_VOICE_ENABLED=true</code> and <code className="bg-card px-1 rounded">PUBLIC_URL</code> is accessible</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">90-day leads not found</td>
                  <td className="py-2 px-3">Ensure lead <code className="bg-card px-1 rounded">status=&apos;declined&apos;</code> and <code className="bg-card px-1 rounded">created_at</code> &gt; 90 days ago</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">AI audio not heard</td>
                  <td className="py-2 px-3">Check WebSocket connection in logs, verify <code className="bg-card px-1 rounded">PUBLIC_URL</code> is HTTPS</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Scheduler not running</td>
                  <td className="py-2 px-3">Check for <code className="bg-card px-1 rounded">[Scheduler] Running...</code> in logs every 30 sec</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Status & Roadmap */}
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <h3 className="font-bold text-foreground mb-3">🏁 Status & Roadmap</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Feature</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Status</th>
                  <th className="text-left py-2 px-3 font-semibold text-foreground">Notes</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Cold Lead Import</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">CSV upload + Email sending verified</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Cold → Hot Conversion</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">Email tracking link works</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Hot Lead Creation</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">Creates Email/SMS/Voice tasks</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">SMS Queue</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">Hot lead welcome SMS works</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">90-Day Re-engagement</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">Creates correct tasks with correct scripts</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Double Dial Logic</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">Redials happen correctly on failure, cancelled if appointment booked</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 px-3">Appointment Reminders</td>
                  <td className="py-2 px-3"><Badge variant="default">✅ VERIFIED</Badge></td>
                  <td className="py-2 px-3">24h/1h reminders verified via manual test</td>
                </tr>
                <tr>
                  <td className="py-2 px-3">Voice AI Audio</td>
                  <td className="py-2 px-3"><Badge variant="outline">⚠️ TO TEST</Badge></td>
                  <td className="py-2 px-3">Verify AI can hear/speak clearly</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Commands */}
        <Card className="mt-8 p-6 bg-muted/50 border-border">
          <h3 className="font-bold text-foreground mb-3">Quick Commands</h3>
          <div className="space-y-2 text-sm">
            <div>
              <code className="block bg-card p-2 rounded text-xs">
                # Test scripts.js loads<br />
                node -e &quot;console.log(require(&apos;./src/config/scripts&apos;))&quot;
              </code>
            </div>
            <div>
              <code className="block bg-card p-2 rounded text-xs">
                # Check lead tasks<br />
                curl http://localhost:3000/api/leads/&lt;id&gt;/tasks
              </code>
            </div>
            <div>
              <code className="block bg-card p-2 rounded text-xs">
                # Manual scheduler trigger (if endpoint exists)<br />
                curl -X POST http://localhost:3000/api/admin/run-scheduler
              </code>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            CRM Testing Guide • Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="mt-2">
            For detailed documentation, see:{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">
              sun-speed-docs/agent-docs/guides/TESTING_GUIDE.md
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestingGuidePage() {
  return <TestingGuideContent />;
}
