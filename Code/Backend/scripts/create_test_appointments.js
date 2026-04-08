
const { createClient } = require('@supabase/supabase-js');
const config = require('../src/config');

const supabaseUrl = config.SUPABASE_URL;
const supabaseServiceKey = config.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const LEAD_ID = '0c6e600e-2368-4e41-a6ff-e70a70450b4b';

async function createTestAppointments() {
    console.log(`Creating appointments for lead: ${LEAD_ID}`);

    const now = new Date();

    // 1. 24 Hour Reminder (Tomorrow exactly)
    const time24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    // Add a small buffer (e.g. 1 minute ahead) to ensure scheduler picks it up if it runs immediately
    // Actually, scheduler usually looks for > X and < Y. 
    // Let's set it to exactly 24h.

    // 2. 1 Hour Reminder (1 hour from now)
    const time1h = new Date(now.getTime() + 1 * 60 * 60 * 1000);

    const appointments = [
        {
            lead_id: LEAD_ID,
            scheduled_time: time24h.toISOString(),
            status: 'scheduled'
        },
        {
            lead_id: LEAD_ID,
            scheduled_time: time1h.toISOString(),
            status: 'scheduled'
        }
    ];

    const { data, error } = await supabase
        .from('appointments')
        .insert(appointments)
        .select();

    if (error) {
        console.error('Error creating appointments:', error);
    } else {
        console.log('✅ Successfully created 2 appointments:');
        data.forEach(appt => {
            console.log(`- ID: ${appt.id} | Time: ${appt.scheduled_time}`);
        });
        console.log('\nWait for the scheduler to run (every 60s or 30s) to see tasks/reminders created.');
    }
}

createTestAppointments();
