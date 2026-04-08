-- Email Templates Table
CREATE TABLE IF NOT EXISTS email_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  subject TEXT NOT NULL,
  content TEXT NOT NULL, -- HTML content
  lead_type TEXT NOT NULL CHECK (lead_type IN ('cold_outreach', 'follow_up')),
  is_current BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for lead_type to quickly find current template
CREATE INDEX IF NOT EXISTS idx_email_templates_lead_type ON email_templates(lead_type);

-- Email Logs Table (if not already exists)
CREATE TABLE IF NOT EXISTS email_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id),
  template_id UUID REFERENCES email_templates(id),
  email_to TEXT NOT NULL,
  subject TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- sent, failed, pending
  sales_rep_id UUID, -- Optional, if linked to a user
  sent_at TIMESTAMPTZ,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for stats
CREATE INDEX IF NOT EXISTS idx_email_logs_status ON email_logs(status);
