const { createClient } = require('@supabase/supabase-js');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function test() {
    console.log("Testing match_documents RPC...");
    const dummyEmbedding = Array(1536).fill(0.01);

    const { data, error } = await supabase.rpc('match_documents', {
        query_embedding: dummyEmbedding,
        match_threshold: 0,
        match_count: 1
    });

    if (error) {
        console.error("❌ RPC Failed:", error.message);
        console.log("⚠️  You MUST run the setup_vector.sql script in your Supabase SQL Editor to create the function.");
    } else {
        console.log("✅ RPC Success! Found", data.length, "docs");
    }
}

test();
