
const { supabaseAdmin } = require('../src/lib/supabase');

async function checkSchema() {
    console.log('Checking email_templates table structure...');

    // Attempt to insert test record
    console.log('Attempting to insert test record...');
    const { data: insertData, error: insertError } = await supabaseAdmin
        .from('email_templates')
        .insert([{
            name: 'Debug Template',
            subject: 'Debug',
            html_content: 'Debug content',
            lead_type: 'cold_outreach'
        }])
        .select();

    if (insertError) {
        console.error('Insert Error:', insertError);
    } else {
        console.log('Insert Success:', insertData);
        // Clean up
        if (insertData && insertData.length > 0) {
            await supabaseAdmin.from('email_templates').delete().eq('id', insertData[0].id);
        }
    }
}

checkSchema();
