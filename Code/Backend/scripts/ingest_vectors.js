const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const OpenAI = require('openai');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Fix for pdf-parse import
const pdf = require('pdf-parse');

// Config
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !OPENAI_API_KEY) {
    console.error('Missing environment variables!');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const KNOWLEDGE_BASE_DIR = path.resolve(__dirname, '../../Knowledge_base');
console.log('📂 Knowledge Base Dir:', KNOWLEDGE_BASE_DIR);
// PDFs to ingest
const PDF_FILES = [
    "Selling_Solar_PPAs__A_Knowledge_Base.pdf",
    "Solar_AI_Voice_Agent__Technical__Sales_Specification.pdf",
    "Solar_Appointment_Booking_Bots__Conversion_Metrics_Best_Practices__Common_Objections_(California_2.pdf"
];

// Helper: Split text into chunks
function chunkText(text, maxLength = 1000, overlap = 100) {
    const chunks = [];
    let start = 0;

    // Normalize clean text
    const cleanText = text.replace(/\s+/g, ' ').trim();

    while (start < cleanText.length) {
        let end = start + maxLength;

        // Try to break at a period or newline for better context
        if (end < cleanText.length) {
            const lastPeriod = cleanText.lastIndexOf('.', end);
            if (lastPeriod > start + maxLength * 0.5) {
                end = lastPeriod + 1;
            }
        }

        const chunk = cleanText.substring(start, end);
        if (chunk.length > 50) { // skip tiny chunks
            chunks.push(chunk);
        }

        start = end - overlap;
    }
    return chunks;
}

// Main Ingestion
async function ingest() {
    console.log('🚀 Starting Knowledge Base Ingestion...');

    // 1. Setup Database (Run SQL directly via helper if possible, or assume user ran it)
    // Supabase JS doesn't support raw DDL easily, so we assume the User ran the SQL or we can try via RPC 'exec_sql' if enabled.
    // For now we assume table exists.

    // Clear old documents? 
    // await supabase.from('documents').delete().neq('id', 0); // Risky if we have other docs

    for (const filename of PDF_FILES) {
        const filePath = path.join(KNOWLEDGE_BASE_DIR, filename);
        if (!fs.existsSync(filePath)) {
            console.error(`❌ File not found: ${filename}`);
            continue;
        }

        console.log(`\n📄 Processing: ${filename}`);
        const dataBuffer = fs.readFileSync(filePath);

        try {
            const data = await pdf(dataBuffer);
            const text = data.text;
            console.log(`   Length: ${text.length} chars`);

            const chunks = chunkText(text);
            console.log(`   Chunks: ${chunks.length}`);

            let savedCount = 0;

            // Batch process chunks
            for (let i = 0; i < chunks.length; i++) {
                const chunk = chunks[i];

                // Generate Embedding
                const embeddingResponse = await openai.embeddings.create({
                    model: "text-embedding-3-small",
                    input: chunk,
                });
                const embedding = embeddingResponse.data[0].embedding;

                // Save to Supabase
                const { error } = await supabase.from('documents').insert({
                    content: chunk,
                    metadata: { filename: filename, chunk_index: i },
                    embedding: embedding
                });

                if (error) {
                    console.error(`   ❌ Error saving chunk ${i}:`, error.message);
                } else {
                    savedCount++;
                    process.stdout.write('.');
                }
            }
            console.log(`\n   ✅ Saved ${savedCount}/${chunks.length} chunks`);

        } catch (error) {
            console.error(`   ❌ Failed to parse/embed ${filename}:`, error.message);
        }
    }
    console.log('\n✨ Ingestion Complete!');
}

ingest();
