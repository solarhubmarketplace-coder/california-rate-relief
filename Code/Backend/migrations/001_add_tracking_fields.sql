-- Migration: Add tracking and form data fields to leads table
-- Purpose: Store ad attribution data (Google/Facebook) and additional form fields
-- Date: 2026-01-05

-- Add address field
ALTER TABLE leads ADD COLUMN IF NOT EXISTS address TEXT;

-- Add form data fields
ALTER TABLE leads ADD COLUMN IF NOT EXISTS bill_amount INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utility_provider VARCHAR(50);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS credit_score VARCHAR(20);

-- Add tracking parameters for ad attribution
ALTER TABLE leads ADD COLUMN IF NOT EXISTS gclid VARCHAR(255);      -- Google Click ID
ALTER TABLE leads ADD COLUMN IF NOT EXISTS fbclid VARCHAR(255);     -- Facebook Click ID
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_source VARCHAR(100);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(255);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_content VARCHAR(255);

-- Create indexes for tracking fields (useful for analytics queries)
CREATE INDEX IF NOT EXISTS idx_leads_gclid ON leads(gclid) WHERE gclid IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_fbclid ON leads(fbclid) WHERE fbclid IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_utm_source ON leads(utm_source) WHERE utm_source IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_utm_campaign ON leads(utm_campaign) WHERE utm_campaign IS NOT NULL;

-- Comment explaining the tracking fields
COMMENT ON COLUMN leads.gclid IS 'Google Click ID - Used to track Google Ads conversions';
COMMENT ON COLUMN leads.fbclid IS 'Facebook Click ID - Used to track Facebook Ads conversions';
COMMENT ON COLUMN leads.utm_source IS 'UTM Source parameter from URL';
COMMENT ON COLUMN leads.utm_campaign IS 'UTM Campaign parameter from URL';
COMMENT ON COLUMN leads.utm_content IS 'UTM Content parameter from URL';
