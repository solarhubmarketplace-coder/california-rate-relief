
const { supabaseAdmin } = require('../src/lib/supabase');

async function checkConstraint() {
    console.log('Checking constraint definition...');

    // Explicit list to test
    const attempts = ['cold', 'hot', 'warm', 'appointment', 'followup', 'follow_up', 'Cold Outreach'];

    for (const val of attempts) {
        const { error: err } = await supabaseAdmin.from('email_templates').insert([{
            name: 'Test Constraint ' + val,
            subject: 'Test',
            html_content: '<b>Test</b>',
            lead_type: val
        }]);

        if (!err) {
            console.log(`SUCCESS! lead_type '${val}' is accepted.`);
            await supabaseAdmin.from('email_templates').delete().eq('lead_type', val).eq('name', 'Test Constraint ' + val);
        } else {
            // console.log(`Failed ${val}: ${err.message}`);
        }
    }
}

checkConstraint();
