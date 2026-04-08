-- Migration: Add Email Sequences (Nurture Campaigns) Support
-- Purpose: Enable multi-step email sequences for leads
-- Date: 2026-01-24

-- Email Sequences Table (Campaigns)
CREATE TABLE IF NOT EXISTS email_sequences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  lead_type TEXT NOT NULL CHECK (lead_type IN ('hot', 'cold')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Email Sequence Steps Table (Individual emails in a sequence)
CREATE TABLE IF NOT EXISTS email_sequence_steps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE CASCADE,
  step_order INTEGER NOT NULL, -- 1, 2, 3, etc.
  delay_days INTEGER NOT NULL DEFAULT 0, -- Days after previous step (0 = immediate)
  subject TEXT NOT NULL,
  html_content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(sequence_id, step_order)
);

-- Lead Sequence Tracking Table (Tracks which step each lead is on)
CREATE TABLE IF NOT EXISTS lead_sequence_tracking (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lead_id UUID REFERENCES leads(id) ON DELETE CASCADE,
  sequence_id UUID REFERENCES email_sequences(id) ON DELETE CASCADE,
  current_step INTEGER DEFAULT 1, -- Which step they're on (1-indexed)
  last_sent_at TIMESTAMPTZ, -- When last email in sequence was sent
  completed_at TIMESTAMPTZ, -- When sequence completed (null if ongoing)
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(lead_id, sequence_id) -- One sequence per lead
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_email_sequences_lead_type ON email_sequences(lead_type);
CREATE INDEX IF NOT EXISTS idx_email_sequences_active ON email_sequences(is_active);
CREATE INDEX IF NOT EXISTS idx_sequence_steps_sequence ON email_sequence_steps(sequence_id);
CREATE INDEX IF NOT EXISTS idx_lead_sequence_lead ON lead_sequence_tracking(lead_id);
CREATE INDEX IF NOT EXISTS idx_lead_sequence_completed ON lead_sequence_tracking(completed_at) WHERE completed_at IS NULL;

-- Add sequence_id to email_logs for tracking
ALTER TABLE email_logs ADD COLUMN IF NOT EXISTS sequence_id UUID REFERENCES email_sequences(id);
ALTER TABLE email_logs ADD COLUMN IF NOT EXISTS sequence_step_id UUID REFERENCES email_sequence_steps(id);
