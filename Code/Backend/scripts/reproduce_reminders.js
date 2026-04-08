
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const scheduler = require('../src/services/scheduler.service');

async function main() {
    console.log('[Test] Starting Reminder Scheduler Test...');
    try {
        await scheduler.scheduleReminders();
        console.log('[Test] Finished successfully.');
    } catch (error) {
        console.error('[Test] Error:', error);
    }
    process.exit(0);
}

main();
