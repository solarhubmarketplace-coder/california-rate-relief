
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const { supabaseAdmin } = require('../src/lib/supabase');

const LEAD_ID = '718e9de8-1dba-4208-a8a6-c250eacd8ffc';

async function main() {
    console.log('[Test] Creating test appointment...');

    // We want to trigger the 1-hour reminder.
    // The reminder logic checks for appointments that are (Now + 1 hour).
    // Specifically: targetForQuery = addMinutes(now, 60);
    // And it looks for appointments within +/- 15 minutes of that target.
    // So if we schedule an appointment for Now + 60 minutes, it should fall right in the window.

    const now = new Date();
    const scheduledTime = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now

    console.log(`[Test] Current Time: ${now.toISOString()}`);
    console.log(`[Test] Scheduling Time: ${scheduledTime.toISOString()}`);

    try {
        const { data, error } = await supabaseAdmin
            .from('appointments')
            .insert({
                lead_id: LEAD_ID,
                scheduled_time: scheduledTime.toISOString(),
                status: 'scheduled'
            })
            .select()
            .single();

        if (error) {
            console.error('[Test] Error creating appointment:', error);
            process.exit(1);
        }

        console.log('[Test] Appointment created successfully:', data);
        console.log('[Test] Note: The scheduler should pick this up for a "1h" reminder either immediately or on the next run.');

    } catch (err) {
        console.error('[Test] Unexpected error:', err);
        process.exit(1);
    }
}

main();
