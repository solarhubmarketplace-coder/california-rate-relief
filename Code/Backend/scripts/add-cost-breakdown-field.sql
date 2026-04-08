-- Add cost_breakdown field to call_logs table
-- Run this in your Supabase SQL Editor

ALTER TABLE call_logs 
ADD COLUMN IF NOT EXISTS cost_breakdown JSONB DEFAULT NULL;

-- Add comment for documentation
COMMENT ON COLUMN call_logs.cost_breakdown IS 'OpenAI API cost breakdown including realtime API, RAG searches, AI analysis, and summary generation';

-- Create index for faster querying by cost
CREATE INDEX IF NOT EXISTS idx_call_logs_cost ON call_logs ((cost_breakdown->>'total_cost'));
