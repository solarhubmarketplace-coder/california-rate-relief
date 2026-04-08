require('dotenv').config();
const { supabaseAdmin } = require('../src/lib/supabase');

const runTest = async () => {
    console.log("Testing SMS Logging...");

    // 1. Get a valid lead ID
    const { data: leads, error: leadError } = await supabaseAdmin
        .from('leads')
        .select('id')
        .eq('status', 'declined')
        .limit(1);

    if (leadError || !leads || leads.length === 0) {
        console.error("Failed to get a lead for testing:", leadError);
        return;
    }

    const leadId = leads[0].id;
    console.log(`Using Lead ID: ${leadId}`);

    // 2. Try to insert a log with type 'missed_call_followup'
    console.log("Attempting insert with type 'missed_call_followup'...");

    const payload = {
        lead_id: leadId,
        sms_sid: 'SM_TEST_' + Date.now(),
        status: 'sent',
        content: 'Test SMS Content [Type: missed_call_followup]',
        created_at: new Date().toISOString()
    };

    const { data, error } = await supabaseAdmin
        .from('sms_logs')
        .insert(payload)
        .select();

    if (error) {
        console.error("❌ INSERT FAILED!");
        console.error("Error Details:", JSON.stringify(error, null, 2));
    } else {
        console.log("✅ INSERT SUCCESS!");
        console.log("Inserted Record:", data);
    }
};

runTest();
