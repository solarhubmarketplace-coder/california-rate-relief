#!/usr/bin/env node
/**
 * ============================================================================
 * KNOWLEDGE BASE REBUILD SCRIPT
 * ============================================================================
 *
 * Reads the Knowledge Mine (mined training video indexes), extracts entries
 * tagged for knowledge-base destination, chunks them by topic, strips brand
 * names, generates embeddings, and upserts to Supabase `documents` table.
 *
 * Usage:
 *   node scripts/rebuild_knowledge_base.js              # Full rebuild (clears + re-inserts)
 *   node scripts/rebuild_knowledge_base.js --dry-run    # Parse & chunk only, no DB writes
 *   node scripts/rebuild_knowledge_base.js --append     # Add without clearing existing docs
 *
 * Requirements:
 *   - .env with SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, OPENAI_API_KEY
 *   - Docs/Knowledge_Mine/*.md files from the knowledge-mine skill
 *   - `documents` table + `match_documents` RPC in Supabase (see migrations/000_full_schema.sql)
 *
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// ─── Config ──────────────────────────────────────────────────────────────────

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !OPENAI_API_KEY) {
  console.error('❌ Missing env vars: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, or OPENAI_API_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const KNOWLEDGE_MINE_DIR = path.resolve(__dirname, '../../../Docs/Knowledge_Mine');
const DRY_RUN = process.argv.includes('--dry-run');
const APPEND = process.argv.includes('--append');

// ─── Brand name filter ──────────────────────────────────────────────────────
// Sarah is neutral — NEVER surface installer/manufacturer/financing brand names

const BRAND_PATTERNS = [
  /\bAxia\b/gi,
  /\bQCells?\b/gi,
  /\bQ[\s-]?Cells?\b/gi,
  /\bEnFin\b/gi,
  /\bSunPower\b/gi,
  /\bSun\s?Power\b/gi,
  /\bTesla\b/gi,
  /\bPowerwall\s?\d*/gi,
  /\bEnphase\b/gi,
  /\bIQ\s?\d+/gi,
  /\bSolEdge\b/gi,
  /\bSolarEdge\b/gi,
  /\bGoodLeap\b/gi,
  /\bSunrun\b/gi,
  /\bSunnova\b/gi,
  /\bSolarCity\b/gi,
  /\bPalmetto\b/gi,
  /\bMosaic\b/gi,
  /\bFranklin\s?(A2|Home\s?Power|battery)/gi,
  /\bVivint\b/gi,
  /\bSolstice\b/gi,
  /\bRise\s?Solar\b/gi,
  /\bAurora\s?(Solar|design|software)/gi,
  /\bPatrick\b/gi,
];

function stripBrands(text) {
  let cleaned = text;
  for (const pattern of BRAND_PATTERNS) {
    cleaned = cleaned.replace(pattern, '[BRAND]');
  }
  // Collapse multiple [BRAND] refs and clean up
  cleaned = cleaned.replace(/\[BRAND\](?:\s*\[BRAND\])*/g, '[a leading provider]');
  // Remove lines that are now mostly placeholder
  cleaned = cleaned.replace(/^.*\[a leading provider\].*\[a leading provider\].*$/gm, '');
  return cleaned.trim();
}

// ─── Markdown parser ────────────────────────────────────────────────────────
// Parses the per-video mined .md files into structured entries

function parseMinedFile(content, filename) {
  const entries = [];
  // Split on entry headers like "### #s1-001 — Title"
  const entryPattern = /^###\s+#(s\d+-\d+)\s+[—–-]\s+(.+)$/gm;
  const parts = content.split(entryPattern);

  // parts[0] is the preamble, then groups of [id, title, body]
  for (let i = 1; i < parts.length; i += 3) {
    const id = parts[i];
    const title = parts[i + 1];
    const body = parts[i + 2] || '';

    // Extract tags line
    const tagsMatch = body.match(/\*\*Tags:\*\*\s*(.+)/);
    const tags = tagsMatch ? tagsMatch[1].trim() : '';

    // Extract quote
    const quoteMatch = body.match(/>\s*"(.+?)"/s) || body.match(/>\s*(.+)/s);
    const quote = quoteMatch ? quoteMatch[1].trim() : '';

    // Extract context
    const contextMatch = body.match(/\*\*Context:\*\*\s*(.+)/);
    const context = contextMatch ? contextMatch[1].trim() : '';

    // Check if tagged for knowledge-base
    const isKB = tags.includes('knowledge-base');
    const isHighSignal = tags.includes('signal:high');

    // Extract topic tags
    const topicMatch = tags.match(/topic:([^\s|]+)/);
    const topic = topicMatch ? topicMatch[1].trim() : 'general';

    // Extract dest tags
    const destMatch = tags.match(/dest:([^\s|]+(?:,\s*[^\s|]+)*)/);
    const destinations = destMatch ? destMatch[1].split(',').map(d => d.trim()) : [];

    entries.push({
      id: `${filename}:${id}`,
      title,
      tags,
      topic,
      destinations,
      isKB,
      isHighSignal,
      context,
      quote,
      body: body.trim(),
      sourceFile: filename,
    });
  }

  return entries;
}

// ─── Cross-video cluster parser ─────────────────────────────────────────────

function parseCrossVideoClusters(content) {
  const chunks = [];
  // Split on cluster headers like "### CLUSTER: Title"
  const clusterPattern = /^###\s+CLUSTER:\s+(.+)$/gm;
  const parts = content.split(clusterPattern);

  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i];
    const body = parts[i + 1] || '';

    // Extract "Appears in" for source tracking
    const appearsMatch = body.match(/\*\*Appears in:\*\*\s*(.+)/);
    const sources = appearsMatch ? appearsMatch[1].trim() : '';

    // Extract pattern description
    const patternMatch = body.match(/\*\*Pattern:\*\*\s*([\s\S]*?)(?=\*\*Variations|$)/);
    const pattern = patternMatch ? patternMatch[1].trim() : '';

    // Extract representative quote
    const quoteMatch = body.match(/\*\*Representative quote:\*\*\s*\n>\s*([\s\S]*?)(?=\n---|\n###|$)/);
    const quote = quoteMatch ? quoteMatch[1].trim().replace(/^"|"$/g, '') : '';

    // Extract "Why it matters"
    const whyMatch = body.match(/\*\*Why it matters.*?:\*\*\s*([\s\S]*?)(?=\*\*Representative|$)/);
    const why = whyMatch ? whyMatch[1].trim() : '';

    // Build a rich chunk from the cluster
    let chunkContent = '';
    if (pattern) chunkContent += pattern + '\n\n';
    if (quote) chunkContent += `Key insight: "${quote}"\n\n`;
    if (why) chunkContent += why;

    if (chunkContent.length > 50) {
      chunks.push({
        id: `cross-video:${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50)}`,
        title: title.trim(),
        content: chunkContent.trim(),
        sources,
        topic: 'cross-video-cluster',
        isHighSignal: true,
        sourceFile: '_CROSS_VIDEO_CLUSTERS.md',
      });
    }
  }

  return chunks;
}

// ─── Topic grouping ─────────────────────────────────────────────────────────
// Groups related atomic entries into ~200-500 word chunks by topic

const TOPIC_MAP = {
  'net-metering': 'NEM 3.0 Policy and Net Metering',
  'net_metering': 'NEM 3.0 Policy and Net Metering',
  'nem': 'NEM 3.0 Policy and Net Metering',
  'bill-trajectory': 'Utility Rate Trajectory and Bill Projections',
  'bill-explanation': 'Utility Rate Trajectory and Bill Projections',
  'utility-psychology': 'Utility Rate Trajectory and Bill Projections',
  'utility-as-enemy': 'Utility Rate Trajectory and Bill Projections',
  'rate-escalation': 'Utility Rate Trajectory and Bill Projections',
  'ppa-value-prop': 'PPA Structure and Value Proposition',
  'ppa-structure': 'PPA Structure and Value Proposition',
  'ppa-escalation': 'PPA Structure and Value Proposition',
  'financing': 'Solar Financing Options',
  'financing-decision': 'Solar Financing Options',
  'cash-vs-financed': 'Solar Financing Options',
  'lender': 'Solar Financing Options',
  'tax-incentives': 'Federal Tax Credits and Incentives',
  'tax-credit': 'Federal Tax Credits and Incentives',
  'itc': 'Federal Tax Credits and Incentives',
  'depreciation': 'Federal Tax Credits and Incentives',
  'system-design': 'System Design and Sizing',
  'system-sizing': 'System Design and Sizing',
  'oversizing': 'System Design and Sizing',
  'battery': 'Battery Storage and Technology',
  'battery-tech': 'Battery Storage and Technology',
  'inverter': 'Battery Storage and Technology',
  'sales-positioning': 'Solar Value Positioning',
  'buy-vs-rent-psychology': 'Solar Value Positioning',
  'objection-response': 'Common Objections and Responses',
  'objection': 'Common Objections and Responses',
  'sticker-shock': 'Common Objections and Responses',
  'installation': 'Installation Process and Timeline',
  'installation-process': 'Installation Process and Timeline',
  'property-value': 'Property Value and Real Estate Impact',
  'roi': 'Return on Investment and Savings Math',
  'savings-math': 'Return on Investment and Savings Math',
  'competitive': 'Market Context',
  'market-selection': 'Market Context',
  'insurance': 'Insurance and Warranty',
  'warranty': 'Insurance and Warranty',
};

function normalizeTopicName(rawTopic) {
  // Try direct match
  if (TOPIC_MAP[rawTopic]) return TOPIC_MAP[rawTopic];
  // Try partial match
  for (const [key, val] of Object.entries(TOPIC_MAP)) {
    if (rawTopic.includes(key) || key.includes(rawTopic)) return val;
  }
  return 'General Solar Knowledge';
}

function groupEntriesByTopic(entries) {
  const groups = {};

  for (const entry of entries) {
    const topicName = normalizeTopicName(entry.topic);
    if (!groups[topicName]) groups[topicName] = [];
    groups[topicName].push(entry);
  }

  return groups;
}

// ─── Chunk builder ──────────────────────────────────────────────────────────
// Turns topic groups into 200-500 word chunks suitable for vector search

function buildChunksFromGroups(groups) {
  const chunks = [];

  for (const [topic, entries] of Object.entries(groups)) {
    // Sort by signal strength (high first), then by ID
    entries.sort((a, b) => {
      if (a.isHighSignal && !b.isHighSignal) return -1;
      if (!a.isHighSignal && b.isHighSignal) return 1;
      return a.id.localeCompare(b.id);
    });

    // Build chunk content from entries
    let currentChunk = '';
    let currentSources = [];
    let chunkIndex = 0;

    for (const entry of entries) {
      let entryText = '';
      if (entry.context) entryText += entry.context + ' ';
      if (entry.quote) entryText += `Key point: "${entry.quote}" `;

      // If adding this entry would exceed ~500 words, flush current chunk
      const wordCount = (currentChunk + entryText).split(/\s+/).length;
      if (wordCount > 500 && currentChunk.length > 100) {
        chunks.push({
          id: `kb-${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}-${chunkIndex}`,
          topic,
          content: currentChunk.trim(),
          sources: currentSources,
          signal: currentSources.some(s => s.includes(':high')) ? 'high' : 'medium',
        });
        currentChunk = '';
        currentSources = [];
        chunkIndex++;
      }

      currentChunk += entryText + '\n\n';
      currentSources.push(entry.id);
    }

    // Flush remaining
    if (currentChunk.trim().length > 50) {
      chunks.push({
        id: `kb-${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40)}-${chunkIndex}`,
        topic,
        content: currentChunk.trim(),
        sources: currentSources,
        signal: currentSources.some(s => s.includes(':high')) ? 'high' : 'medium',
      });
    }
  }

  return chunks;
}

// ─── Embedding helper ───────────────────────────────────────────────────────

async function embedText(text) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return {
    embedding: response.data[0].embedding,
    tokens: response.usage?.total_tokens || 0,
  };
}

// ─── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║       KNOWLEDGE BASE REBUILD — California Rate Relief    ║');
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  if (DRY_RUN) console.log('🏜️  DRY RUN — no database writes\n');
  if (APPEND) console.log('➕ APPEND mode — keeping existing documents\n');

  // ── Step 1: Read all mined files ──────────────────────────────────────────

  console.log(`📂 Reading Knowledge Mine: ${KNOWLEDGE_MINE_DIR}\n`);

  const files = fs.readdirSync(KNOWLEDGE_MINE_DIR)
    .filter(f => f.endsWith('.md') && f !== 'README.md');

  if (files.length === 0) {
    console.error('❌ No .md files found in Knowledge_Mine directory');
    process.exit(1);
  }

  console.log(`   Found ${files.length} files:`);
  files.forEach(f => console.log(`   • ${f}`));
  console.log();

  // ── Step 2: Parse entries from per-video files ────────────────────────────

  let allEntries = [];
  let crossVideoChunks = [];

  for (const file of files) {
    const filePath = path.join(KNOWLEDGE_MINE_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (file === '_CROSS_VIDEO_CLUSTERS.md') {
      crossVideoChunks = parseCrossVideoClusters(content);
      console.log(`   📊 ${file}: ${crossVideoChunks.length} cross-video clusters`);
    } else {
      const entries = parseMinedFile(content, file);
      const kbEntries = entries.filter(e => e.isKB || e.isHighSignal);
      allEntries.push(...kbEntries);
      console.log(`   📄 ${file}: ${entries.length} total entries, ${kbEntries.length} KB/high-signal`);
    }
  }

  console.log(`\n   ✅ Total KB-eligible entries: ${allEntries.length}`);
  console.log(`   ✅ Cross-video clusters: ${crossVideoChunks.length}\n`);

  // ── Step 3: Group entries by topic and build chunks ───────────────────────

  console.log('🔧 Grouping entries by topic and building chunks...\n');

  const groups = groupEntriesByTopic(allEntries);
  const topicChunks = buildChunksFromGroups(groups);

  // Combine with cross-video chunks (already pre-chunked)
  const allChunks = [
    ...topicChunks,
    ...crossVideoChunks.map(c => ({
      id: c.id,
      topic: c.title,
      content: c.content,
      sources: [c.sources],
      signal: 'high',
    })),
  ];

  console.log(`   Topic groups: ${Object.keys(groups).length}`);
  console.log(`   Topic-based chunks: ${topicChunks.length}`);
  console.log(`   Cross-video chunks: ${crossVideoChunks.length}`);
  console.log(`   ═══════════════════════`);
  console.log(`   Total chunks to embed: ${allChunks.length}\n`);

  // ── Step 4: Strip brand names ─────────────────────────────────────────────

  console.log('🧹 Stripping brand names from all chunks...\n');

  let brandsStripped = 0;
  for (const chunk of allChunks) {
    const before = chunk.content;
    chunk.content = stripBrands(chunk.content);
    if (before !== chunk.content) brandsStripped++;
  }

  // Also filter out chunks that became too short after stripping
  const validChunks = allChunks.filter(c => c.content.split(/\s+/).length >= 20);
  const dropped = allChunks.length - validChunks.length;

  console.log(`   Chunks with brands stripped: ${brandsStripped}`);
  console.log(`   Chunks dropped (too short after strip): ${dropped}`);
  console.log(`   Final chunks to embed: ${validChunks.length}\n`);

  // Print topic distribution
  const topicCounts = {};
  for (const c of validChunks) {
    topicCounts[c.topic] = (topicCounts[c.topic] || 0) + 1;
  }
  console.log('   📊 Topic distribution:');
  for (const [topic, count] of Object.entries(topicCounts).sort((a, b) => b[1] - a[1])) {
    console.log(`      ${count}x  ${topic}`);
  }
  console.log();

  if (DRY_RUN) {
    console.log('🏜️  DRY RUN complete. Sample chunks:\n');
    for (const chunk of validChunks.slice(0, 3)) {
      console.log(`   ── ${chunk.topic} (${chunk.id}) ──`);
      console.log(`   ${chunk.content.slice(0, 200)}...`);
      console.log(`   Words: ${chunk.content.split(/\s+/).length}`);
      console.log();
    }
    console.log(`Total chunks that would be embedded: ${validChunks.length}`);
    return;
  }

  // ── Step 5: Clear existing documents (unless --append) ────────────────────

  if (!APPEND) {
    console.log('🗑️  Clearing existing documents table...');
    const { error: deleteError } = await supabase
      .from('documents')
      .delete()
      .gte('id', 0);

    if (deleteError) {
      console.error('   ❌ Error clearing table:', deleteError.message);
      // Continue anyway — table might be empty
    } else {
      console.log('   ✅ Table cleared\n');
    }
  }

  // ── Step 6: Embed and upsert ──────────────────────────────────────────────

  console.log(`🧠 Embedding ${validChunks.length} chunks (text-embedding-3-small)...\n`);

  let totalTokens = 0;
  let savedCount = 0;
  let errorCount = 0;

  // Process in batches of 10 to respect rate limits
  const BATCH_SIZE = 10;

  for (let i = 0; i < validChunks.length; i += BATCH_SIZE) {
    const batch = validChunks.slice(i, i + BATCH_SIZE);

    // Embed all chunks in batch
    const embedPromises = batch.map(chunk => embedText(chunk.content));
    const embedResults = await Promise.all(embedPromises);

    // Insert all chunks in batch
    const rows = batch.map((chunk, idx) => ({
      content: chunk.content,
      metadata: {
        topic: chunk.topic,
        chunk_id: chunk.id,
        sources: Array.isArray(chunk.sources) ? chunk.sources : [chunk.sources],
        signal: chunk.signal || 'medium',
        source: 'knowledge-mine-rebuild',
        rebuilt_at: new Date().toISOString(),
      },
      embedding: embedResults[idx].embedding,
    }));

    totalTokens += embedResults.reduce((sum, r) => sum + r.tokens, 0);

    const { error: insertError } = await supabase
      .from('documents')
      .insert(rows);

    if (insertError) {
      console.error(`   ❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} error:`, insertError.message);
      errorCount += batch.length;
    } else {
      savedCount += batch.length;
      process.stdout.write(`   ✅ ${savedCount}/${validChunks.length} chunks embedded and saved\r`);
    }

    // Small delay between batches to be nice to the API
    if (i + BATCH_SIZE < validChunks.length) {
      await new Promise(r => setTimeout(r, 200));
    }
  }

  console.log(`\n`);

  // ── Step 7: Verify ────────────────────────────────────────────────────────

  console.log('🔍 Verifying...\n');

  const { data: countData } = await supabase
    .from('documents')
    .select('id', { count: 'exact', head: true });

  const { count } = await supabase
    .from('documents')
    .select('*', { count: 'exact', head: true });

  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║                   REBUILD COMPLETE                       ║');
  console.log('╠══════════════════════════════════════════════════════════╣');
  console.log(`║  Source files:        ${files.length.toString().padStart(4)}                                ║`);
  console.log(`║  KB-eligible entries: ${allEntries.length.toString().padStart(4)}                                ║`);
  console.log(`║  Cross-video clusters:${crossVideoChunks.length.toString().padStart(4)}                                ║`);
  console.log(`║  Chunks embedded:     ${savedCount.toString().padStart(4)}                                ║`);
  console.log(`║  Errors:              ${errorCount.toString().padStart(4)}                                ║`);
  console.log(`║  Embedding tokens:    ${totalTokens.toString().padStart(6)}                              ║`);
  console.log(`║  Documents in table:  ${(count || '?').toString().padStart(4)}                                ║`);
  console.log('╚══════════════════════════════════════════════════════════╝\n');

  if (errorCount > 0) {
    console.log('⚠️  Some chunks failed — re-run with --append to retry');
  }

  // Quick test search
  console.log('🧪 Quick test: searching for "NEM 3.0 net metering"...\n');
  try {
    const testEmbed = await embedText('NEM 3.0 net metering how does it work');
    const { data: testResults } = await supabase.rpc('match_documents', {
      query_embedding: testEmbed.embedding,
      match_threshold: 0.35,
      match_count: 3,
    });

    if (testResults && testResults.length > 0) {
      console.log(`   ✅ Found ${testResults.length} results:`);
      testResults.forEach((r, i) => {
        console.log(`   [${i + 1}] (similarity: ${r.similarity.toFixed(3)}) ${r.content.slice(0, 120)}...`);
      });
    } else {
      console.log('   ⚠️  No results — check embeddings and match_documents function');
    }
  } catch (err) {
    console.log('   ⚠️  Test search failed:', err.message);
  }

  console.log('\n✨ Done!');
}

main().catch(err => {
  console.error('💥 Fatal error:', err);
  process.exit(1);
});
