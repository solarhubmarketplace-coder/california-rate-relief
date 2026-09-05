-- Migration: Add page-level attribution to leads
-- Purpose: Record WHICH page produced each lead, so per-city and per-layer
--          performance can be measured instead of estimated.
-- Date: 2026-09-05
--
-- Why this is needed:
--   The leads table already stores channel attribution (gclid, fbclid, utm_*),
--   but nothing about the page a lead came from. deriveLeadSource() collapses
--   everything organic to 'organic_google', so a Bakersfield lead and a Temecula
--   lead are indistinguishable. Google Search Console shows the /solar-companies/
--   layer earning 90,600 impressions in 90 days (41% of the whole site) while the
--   159 city pages produce only 9% of clicks -- but with no landing-page column
--   there is no way to tell which of those pages ever produced revenue.
--
--   Safe to run repeatedly. Adds nullable columns only; no data is modified and
--   no constraints are enforced on existing rows.

-- The full path the visitor first landed on, e.g. '/solar-savings/bakersfield'.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS landing_page TEXT;

-- Parsed city slug from the landing page, e.g. 'bakersfield'. Denormalised on
-- purpose so per-city rollups are a plain GROUP BY rather than a path parse.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS landing_city_slug VARCHAR(100);

-- Which template produced the lead: 'solar-savings', 'solar-companies',
-- 'commercial-solar', 'blog', 'home', 'other'. Lets us compare layer economics
-- directly against the Search Console layer report.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS landing_page_type VARCHAR(40);

-- The page the wizard was actually submitted from, when it differs from the
-- landing page (today every city page links to /#qualify, so these differ; once
-- the wizard is embedded on city pages they will usually match).
ALTER TABLE leads ADD COLUMN IF NOT EXISTS submitted_from TEXT;

-- External referrer host, e.g. 'www.google.com'. Kept separate from `source`
-- because deriveLeadSource() flattens same-site referrers to 'direct'.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS referrer TEXT;

-- Completing the UTM set already present (utm_source/campaign/content).
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(100);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS utm_term VARCHAR(255);

-- GA4 client id, so a lead row can be joined back to its GA4 session.
ALTER TABLE leads ADD COLUMN IF NOT EXISTS ga_client_id VARCHAR(100);

-- Indexes sized for the two questions this migration exists to answer:
--   "how many leads did each city page produce?" and
--   "how do the page types compare?"
-- Partial so they stay small while most historical rows are NULL.
CREATE INDEX IF NOT EXISTS idx_leads_landing_city_slug
  ON leads (landing_city_slug)
  WHERE landing_city_slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_leads_landing_page_type_created
  ON leads (landing_page_type, created_at DESC)
  WHERE landing_page_type IS NOT NULL;

-- Convenience view: per-city lead counts, newest activity first. Join this
-- against the Search Console per-page export to get clicks -> leads -> close
-- rate per city, which is what should drive the build order.
CREATE OR REPLACE VIEW lead_counts_by_city AS
SELECT
  landing_city_slug            AS city_slug,
  landing_page_type            AS page_type,
  COUNT(*)                     AS leads,
  COUNT(*) FILTER (WHERE type = 'hot')  AS hot_leads,
  MIN(created_at)              AS first_lead_at,
  MAX(created_at)              AS last_lead_at
FROM leads
WHERE landing_city_slug IS NOT NULL
GROUP BY landing_city_slug, landing_page_type;
