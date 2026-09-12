#!/usr/bin/env node

// Live production acceptance probe for the six supported markets. Every row is
// marked test at ingestion and uses a fictional 555-01xx phone number.

const { randomUUID } = require('node:crypto');

const endpoint = process.env.CRR_INTAKE_URL || 'https://api.ratereliefca.com/api/intake';
const stamp = new Date().toISOString().replace(/[-:.TZ]/g, '').slice(0, 14);
const markets = [
  { state: 'CA', zip: '92591', utility: 'SCE', path: '/california/solar/' },
  { state: 'NJ', zip: '07102', utility: 'PSE&G', path: '/new-jersey/' },
  { state: 'DE', zip: '19801', utility: 'Delmarva Power', path: '/delaware/' },
  { state: 'MD', zip: '21201', utility: 'BGE', path: '/maryland/' },
  { state: 'VA', zip: '23219', utility: 'Dominion Energy', path: '/virginia/' },
  { state: 'DC', zip: '20001', utility: 'Pepco', path: '/washington-dc/' },
];
const devices = [
  { name: 'mobile', ua: 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' },
  { name: 'desktop', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/128.0 Safari/537.36' },
];

async function main() {
  const evidence = [];
  let phoneSuffix = 101;
  for (const market of markets) {
    for (const device of devices) {
      const submissionId = randomUUID();
      const body = {
        submission_id: submissionId,
        segment: 'residential',
        contact: {
          name: `[TEST] S4 ${market.state} ${device.name} ${stamp}`,
          phone: `+1202555${String(phoneSuffix++).padStart(4, '0')}`,
        },
        qualification_data: {
          homeowner: true,
          utility_provider: market.utility,
          service_zip: market.zip,
          service_market: market.state,
          territory_resolution: 'visitor_selected_zip_validated',
          bill_amount: 250,
          credit_score: 'unsure',
          inquiry_topic: 'six_market_acceptance',
        },
        attribution: {
          source: 'acceptance_test',
          acquisition_source: 'acceptance_test',
          acquisition_medium: 'test',
          utm_source: 'crr_acceptance',
          utm_medium: 'test',
          utm_campaign: `s4_${stamp}`,
          utm_content: device.name,
          landing_page: market.path,
          submitted_from: market.path,
          captured_at: new Date().toISOString(),
        },
        consent: { status: 'pending' },
        test: true,
      };
      const started = Date.now();
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'user-agent': device.ua },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (response.status !== 201 || result?.data?.submission_id !== submissionId || !result?.data?.lead_id) {
        throw new Error(`${market.state}/${device.name} failed: HTTP ${response.status} ${JSON.stringify(result)}`);
      }
      evidence.push({
        state: market.state,
        zip: market.zip,
        utility: market.utility,
        device: device.name,
        submission_id: submissionId,
        lead_id: result.data.lead_id,
        http_status: response.status,
        stored: result.data.storage_status === 'stored',
        duplicate: result.data.duplicate,
        elapsed_ms: Date.now() - started,
      });
    }
  }
  process.stdout.write(JSON.stringify({ run: `s4_${stamp}`, endpoint, tests: evidence }, null, 2));
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exit(1);
});
