/**
 * Complete Supabase PostgreSQL Schema for SunSpeed Project (California Rate Relief Program)
 * Reconstructed from all service files and controller references
 *
 * Generated: 2026-04-07
 * This schema includes all tables, columns, indexes, and constraints
 * inferred from the codebase.
 */

-- ============================================
-- EXTENSIONS
-- ============================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "vector";

-- ============================================
-- CORE TABLES
-- ============================================

/**
 * LEADS TABLE - Stores lead information and qualification data
 * Lead Types: 'hot' (immediate call), 'cold' (email nurture)
 * Statuses: 'new', 'converted', 'declined', etc.
 */
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT,
  phone TEXT NOT NULL,
  email TEXT,
  address TEXT,
  source TEXT DEFAULT 'website', -- 'website', 'webhook', 'csv_import', etc.
  type TEXT DEFAULT 'cold', -- 'hot' or 'cold'
  status TEXT DEFAULT 'new', -- 'new', 'converted', 'declined', 'contacted', etc.

  -- Qualification data
  bill_amount TEXT, -- '$150-200', '$201-350', '$351-500', '$500+'
  utility_provider TEXT, -- 'PG&E', 'SCE', 'SDG&E', 'LADWP', 'MVU', 'Other'
  credit_score TEXT, -- 'above_650', 'below_650', 'unsure'

  -- Ad tracking / attribution
  gclid TEXT,
  fbclid TEXT,
  utm_source TEXT,
  utm_campaign TEXT,
  utm_content TEXT,

  -- Consent tracking
  consent_status TEXT DEFAULT 'pending', -- 'pending', 'opted_in', 'opted_out'
  consent_timestamp TIMESTAMPTZ,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_phone ON leads(phone);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_type ON leads(type);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);

/**
 * CALL_LOGS TABLE - Stores voice call history
 * Tracks all call attempts, durations, status, and AI summaries
 */
CREATE TABLE IF NOT EXISTS call_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  call_sid TEXT UNIQUE, -- Twilio Call SID
  status TEXT, -- 'initiated', 'ringing', 'answered', 'completed', 'failed', 'busy', 'no-answer'

  -- Timing
  initiated_at TIMESTAMPTZ,
  answered_at TIMESTAMPTZ,
  ended_at TIMESTAMPTZ,
  duration INTEGER, -- Call duration in seconds
  attempt_number INTEGER DEFAULT 1,

  -- Call content & AI analysis
  transcript JSONB, -- Array of {role, content, timestamp} objects
  ai_summary TEXT, -- Concise 2-3 sentence summary
  conversation_context JSONB, -- {customer_interests, objections_raised, objections_resolved, call_outcome, entities, qualification}

  -- Recording & cost tracking
  recording_url TEXT, -- URL to Supabase Storage bucket
  cost_breakdown JSONB, -- {total_cost, realtime_api, rag_searches, ai_analysis, summary_generation}

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_call_logs_lead_id ON call_logs(lead_id);
CREATE INDEX IF NOT EXISTS idx_call_logs_status ON call_logs(status);
CREATE INDEX IF NOT EXISTS idx_call_logs_created_at ON call_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_call_logs_call_sid ON call_logs(call_sid);

/**
 * APPOINTMENTS TABLE - Scheduled savings assessments
 * Tracks booked appointments and their status
 */
CREATE TABLE IF NOT EXISTS appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  scheduled_time TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'scheduled', -- 'scheduled', 'completed', 'cancelled', 'no-show'
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_appointments_lead_id ON appointments(lead_id);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON appointments(status);
CREATE INDEX IF NOT EXISTS idx_appointments_scheduled_time ON appointments(scheduled_time);

/**
 * COMMUNICATION_TASKS TABLE - Queue system for SMS/Email/Voice
 * Tracks all pending and executed communication tasks
 * Task Types: 'email', 'sms', 'voice'
 * Statuses: 'pending', 'processing', 'completed', 'failed'
 */
CREATE TABLE IF NOT EXISTS communication_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  task_type TEXT NOT NULL, -- 'email', 'sms', 'voice'
  status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
  scheduled_at TIMESTAMPTZ NOT NULL,
  executed_at TIMESTAMPTZ,

  -- Retry logic
  attempt_number INTEGER DEFAULT 1,
  max_attempts INTEGER DEFAULT 2,
  error_message TEXT,

  -- Flexible metadata for task-specific info
  metadata JSONB, -- {trackingToken, sequence_id, sequence_step, reminder_type, appointment_id, trigger}

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_communication_tasks_lead_id ON communication_tasks(lead_id);
CREATE INDEX IF NOT EXISTS idx_communication_tasks_task_type ON communication_tasks(task_type);
CREATE INDEX IF NOT EXISTS idx_communication_tasks_status ON communication_tasks(status);
CREATE INDEX IF NOT EXISTS idx_communication_tasks_scheduled_at ON communication_tasks(scheduled_at);

/**
 * EMAIL_LOGS TABLE - Email delivery tracking
 * Tracks all sent emails with status and delivery info
 */
CREATE TABLE IF NOT EXISTS email_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  template_id UUID, -- References email_templates(id)
  email_to TEXT NOT NULL,
  subject TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'sent', 'delivered', 'failed', 'bounced'
  resend_email_id TEXT, -- Resend API ID for tracking
  error_message TEXT,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_logs_lead_id ON email_logs(lead_id);
CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs(status);
CREATE INDEX IF NOT EXISTS idx_email_logs_created_at ON email_logs(created_at);

/**
 * SMS_LOGS TABLE - SMS delivery tracking
 * Tracks all sent SMS messages with Twilio status
 */
CREATE TABLE IF NOT EXISTS sms_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  sms_sid TEXT UNIQUE, -- Twilio message SID
  phone_to TEXT,
  content TEXT, -- Type of SMS: 'hot_lead_welcome', 'appointment_confirmation', 'appointment_reminder', 'missed_call_followup'
  status TEXT DEFAULT 'sent', -- 'sent', 'delivered', 'failed', 'undelivered'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_sms_logs_lead_id ON sms_logs(lead_id);
CREATE INDEX IF NOT EXISTS idx_sms_logs_status ON sms_logs(status);
CREATE INDEX IF NOT EXISTS idx_sms_logs_created_at ON sms_logs(created_at);

-- ============================================
-- EMAIL SEQUENCE TABLES
-- ============================================

/**
 * EMAIL_SEQUENCES TABLE - Multi-step drip campaigns
 * Defines email sequences for hot and cold leads
 */
CREATE TABLE IF NOT EXISTS email_sequences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  lead_type TEXT NOT NULL, -- 'hot' or 'cold'
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_sequences_lead_type ON email_sequences(lead_type);
CREATE INDEX IF NOT EXISTS idx_email_sequences_is_active ON email_sequences(is_active);

/**
 * EMAIL_SEQUENCE_STEPS TABLE - Individual steps within a sequence
 * Each step has a delay, subject, and HTML content
 */
CREATE TABLE IF NOT EXISTS email_sequence_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE CASCADE,
  step_order INTEGER NOT NULL, -- 1, 2, 3, etc.
  delay_days INTEGER DEFAULT 0, -- Days to wait before sending this step
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_sequence_steps_sequence_id ON email_sequence_steps(sequence_id);
CREATE INDEX IF NOT EXISTS idx_email_sequence_steps_step_order ON email_sequence_steps(step_order);

/**
 * LEAD_SEQUENCE_TRACKING TABLE - Tracks progress of leads through sequences
 * Links leads to their assigned sequences and current step
 */
CREATE TABLE IF NOT EXISTS lead_sequence_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE CASCADE,
  current_step INTEGER DEFAULT 1, -- Current step number
  last_sent_at TIMESTAMPTZ, -- When the last step was sent
  completed_at TIMESTAMPTZ, -- When sequence was completed
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  UNIQUE(lead_id, sequence_id)
);

CREATE INDEX IF NOT EXISTS idx_lead_sequence_tracking_lead_id ON lead_sequence_tracking(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_sequence_tracking_sequence_id ON lead_sequence_tracking(sequence_id);
CREATE INDEX IF NOT EXISTS idx_lead_sequence_tracking_completed_at ON lead_sequence_tracking(completed_at);

/**
 * EMAIL_TEMPLATES TABLE - Reusable email templates
 * Templates for hot and cold lead outreach
 */
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  content TEXT NOT NULL, -- HTML content
  html_content TEXT, -- Alternative column name (used interchangeably in code)
  lead_type TEXT NOT NULL, -- 'cold_outreach', 'follow_up', 'hot', 'cold'
  is_current BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_email_templates_lead_type ON email_templates(lead_type);
CREATE INDEX IF NOT EXISTS idx_email_templates_is_current ON email_templates(is_current);

-- ============================================
-- SETTINGS & CONFIGURATION
-- ============================================

/**
 * SETTINGS TABLE - System configuration
 * Key-value pairs for auto-dial, double-dial, voicemail, etc.
 */
CREATE TABLE IF NOT EXISTS settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL, -- 'auto_dial_new_leads', 'double_dial_strategy', 'leave_voicemail'
  value JSONB, -- Flexible JSON for complex settings
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_settings_key ON settings(key);

-- ============================================
-- KNOWLEDGE BASE / DOCUMENTS
-- ============================================

/**
 * DOCUMENTS TABLE - Vector embeddings for RAG system
 * Stores knowledge base documents (solar info, NEM 3.0, tax credits, etc.)
 */
CREATE TABLE IF NOT EXISTS documents (
  id BIGSERIAL PRIMARY KEY,
  content TEXT, -- The text chunk
  metadata JSONB, -- {filename, page_number, source, section}
  embedding VECTOR(1536) -- OpenAI embeddings (1536 dimensions)
);

CREATE INDEX IF NOT EXISTS idx_documents_embedding ON documents USING ivfflat (embedding vector_cosine_ops);

/**
 * Vector search function for knowledge base
 */
CREATE OR REPLACE FUNCTION match_documents (
  query_embedding VECTOR(1536),
  match_threshold FLOAT,
  match_count INT
)
RETURNS TABLE (
  id BIGINT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    documents.id,
    documents.content,
    documents.metadata,
    1 - (documents.embedding <=> query_embedding) AS similarity
  FROM documents
  WHERE 1 - (documents.embedding <=> query_embedding) > match_threshold
  ORDER BY documents.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- ============================================
-- INDEXES & CONSTRAINTS
-- ============================================

-- Add unique constraint on phone + status for better query performance
CREATE UNIQUE INDEX IF NOT EXISTS idx_leads_phone_active ON leads(phone)
WHERE status != 'declined';

-- Composite index for common query patterns
CREATE INDEX IF NOT EXISTS idx_communication_tasks_lead_status ON communication_tasks(lead_id, status);
CREATE INDEX IF NOT EXISTS idx_call_logs_lead_status ON call_logs(lead_id, status);

-- Full text search on lead names
CREATE INDEX IF NOT EXISTS idx_leads_name_tsvector ON leads
USING gin(to_tsvector('english', name));

-- Performance indexes for common filters
CREATE INDEX IF NOT EXISTS idx_email_logs_template_id ON email_logs(template_id);
CREATE INDEX IF NOT EXISTS idx_appointments_lead_status ON appointments(lead_id, status);

-- ============================================
-- VIEWS (Optional - for convenience)
-- ============================================

/**
 * VIEW: Active leads ready for contact
 */
CREATE OR REPLACE VIEW active_leads AS
SELECT
  l.id,
  l.name,
  l.phone,
  l.email,
  l.type,
  l.status,
  COUNT(cl.id) as call_count,
  MAX(cl.created_at) as last_call_at
FROM leads l
LEFT JOIN call_logs cl ON l.id = cl.lead_id
WHERE l.status = 'new' AND l.type = 'hot'
GROUP BY l.id;

/**
 * VIEW: Recent emails sent
 */
CREATE OR REPLACE VIEW recent_emails AS
SELECT
  el.id,
  el.lead_id,
  l.name,
  l.email,
  el.subject,
  el.status,
  el.created_at
FROM email_logs el
LEFT JOIN leads l ON el.lead_id = l.id
WHERE el.created_at > NOW() - INTERVAL '7 days'
ORDER BY el.created_at DESC;

/**
 * VIEW: Pending communication tasks
 */
CREATE OR REPLACE VIEW pending_tasks AS
SELECT
  ct.id,
  ct.lead_id,
  l.name,
  l.phone,
  ct.task_type,
  ct.scheduled_at,
  ct.attempt_number,
  ct.metadata
FROM communication_tasks ct
LEFT JOIN leads l ON ct.lead_id = l.id
WHERE ct.status = 'pending'
ORDER BY ct.scheduled_at ASC;

-- ============================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================

COMMENT ON TABLE leads IS 'Core lead table storing homeowner information and qualification data';
COMMENT ON COLUMN leads.type IS 'Hot leads receive immediate voice calls; cold leads receive email sequences';
COMMENT ON COLUMN leads.status IS 'Tracks lead lifecycle: new -> converted/declined/contacted';
COMMENT ON COLUMN leads.consent_status IS 'TCPA compliance: opted_in, opted_out, or pending';

COMMENT ON TABLE call_logs IS 'Complete call history with transcripts, summaries, and cost tracking';
COMMENT ON COLUMN call_logs.transcript IS 'Array of turn-by-turn conversation with AI';
COMMENT ON COLUMN call_logs.ai_summary IS 'GPT-generated 2-3 sentence outcome summary';
COMMENT ON COLUMN call_logs.conversation_context IS 'Structured analysis of customer interests, objections, and qualification progress';

COMMENT ON TABLE communication_tasks IS 'Queue system for all outbound communication (SMS, Email, Voice)';
COMMENT ON COLUMN communication_tasks.metadata IS 'Flexible JSONB for task-specific data (sequence_id, appointment_id, trigger reason, etc.)';

COMMENT ON TABLE email_sequences IS '8-touch, 90-day drip campaigns for hot/cold lead nurture';
COMMENT ON TABLE lead_sequence_tracking IS 'Tracks which step each lead is on in their assigned sequence';

COMMENT ON TABLE documents IS 'Vector-embedded knowledge base for RAG: net metering, NEM 3.0, tax credits, PPA terms';
COMMENT ON FUNCTION match_documents IS 'Vector similarity search for knowledge base retrieval';

-- ============================================
-- DATA INTEGRITY CONSTRAINTS
-- ============================================

-- Ensure valid phone numbers
ALTER TABLE leads
  ADD CONSTRAINT chk_phone_format
  CHECK (phone ~ '^\+?1?\d{10,}$' OR phone IS NULL);

-- Ensure valid email format (basic)
ALTER TABLE leads
  ADD CONSTRAINT chk_email_format
  CHECK (email ~ '^[^\s@]+@[^\s@]+\.[^\s@]+$' OR email IS NULL);

-- Ensure status values are valid
ALTER TABLE leads
  ADD CONSTRAINT chk_lead_status
  CHECK (status IN ('new', 'converted', 'declined', 'contacted', 'no-show'));

-- Ensure lead type is hot or cold
ALTER TABLE leads
  ADD CONSTRAINT chk_lead_type
  CHECK (type IN ('hot', 'cold'));

-- Ensure utility provider is valid
ALTER TABLE leads
  ADD CONSTRAINT chk_utility_provider
  CHECK (utility_provider IN ('PG&E', 'SCE', 'SDG&E', 'LADWP', 'MVU', 'Other', NULL));

-- Ensure credit score is valid
ALTER TABLE leads
  ADD CONSTRAINT chk_credit_score
  CHECK (credit_score IN ('above_650', 'below_650', 'unsure', NULL));

-- Ensure call status is valid
ALTER TABLE call_logs
  ADD CONSTRAINT chk_call_status
  CHECK (status IN ('initiated', 'ringing', 'answered', 'completed', 'failed', 'busy', 'no-answer', 'canceled', NULL));

-- Ensure appointment status is valid
ALTER TABLE appointments
  ADD CONSTRAINT chk_appointment_status
  CHECK (status IN ('scheduled', 'completed', 'cancelled', 'no-show'));

-- Ensure task type is valid
ALTER TABLE communication_tasks
  ADD CONSTRAINT chk_task_type
  CHECK (task_type IN ('email', 'sms', 'voice'));

-- Ensure task status is valid
ALTER TABLE communication_tasks
  ADD CONSTRAINT chk_task_status
  CHECK (status IN ('pending', 'processing', 'completed', 'failed'));

-- Ensure email status is valid
ALTER TABLE email_logs
  ADD CONSTRAINT chk_email_status
  CHECK (status IN ('pending', 'sent', 'delivered', 'failed', 'bounced'));

-- Ensure SMS status is valid
ALTER TABLE sms_logs
  ADD CONSTRAINT chk_sms_status
  CHECK (status IN ('sent', 'delivered', 'failed', 'undelivered'));

-- Ensure sequence lead_type is valid
ALTER TABLE email_sequences
  ADD CONSTRAINT chk_sequence_lead_type
  CHECK (lead_type IN ('hot', 'cold'));

-- Ensure consent status is valid
ALTER TABLE leads
  ADD CONSTRAINT chk_consent_status
  CHECK (consent_status IN ('pending', 'opted_in', 'opted_out', NULL));

-- ============================================
-- FOREIGN KEY CONSTRAINTS
-- ============================================

-- Explicit foreign key for email_templates in email_logs (implicit in INSERT statements)
ALTER TABLE email_logs
  ADD CONSTRAINT fk_email_logs_template_id
  FOREIGN KEY (template_id) REFERENCES email_templates(id) ON DELETE SET NULL;

-- ============================================
-- GRANT PERMISSIONS (If using Supabase Auth)
-- ============================================

-- Uncomment below if using Supabase row-level security (RLS)
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE call_logs ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE communication_tasks ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE sms_logs ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE email_sequences ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE email_templates ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- ============================================
-- SAMPLE DATA / INITIAL SETTINGS
-- ============================================

-- Insert default settings
INSERT INTO settings (key, value) VALUES
  ('auto_dial_new_leads', '{"enabled": true, "delay_seconds": 60}'::JSONB),
  ('double_dial_strategy', '{"enabled": false, "retry_after_seconds": 30}'::JSONB),
  ('leave_voicemail', '{"enabled": true}'::JSONB),
  ('quiet_hours_enabled', '{"enabled": true, "start_hour": 20, "end_hour": 9}'::JSONB)
ON CONFLICT (key) DO NOTHING;

-- ============================================
-- END OF SCHEMA
-- ============================================
