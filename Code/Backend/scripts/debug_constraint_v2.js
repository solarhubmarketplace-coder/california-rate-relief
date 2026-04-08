
const { supabaseAdmin } = require('../src/lib/supabase');

async function checkConstraint() {
    console.log('Checking constraint definition via insertion...');

    const attempts = ['cold', 'hot', 'cold_outreach', 'follow_up'];

    for (const val of attempts) {
        console.log(`Trying to insert lead_type: '${val}'`);
        const { data, error } = await supabaseAdmin.from('email_templates').insert([{
            name: 'Constraint Test ' + val,
            subject: 'Test',
            html_content: 'Test',
            lead_type: val
        }]).select();

        if (error) {
            console.log(`❌ FAILED '${val}': ${error.message}`);
        } else {
            console.log(`✅ SUCCESS '${val}' is accepted.`);
            // Clean up
            await supabaseAdmin.from('email_templates').delete().eq('id', data[0].id);
        }
    }
}

checkConstraint();
