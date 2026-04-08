/**
 * Cleanup Script: Mark leads with invalid phone numbers as declined
 * 
 * This script finds leads with invalid phone numbers (like 555-0101, 555-0102)
 * and marks them as declined to prevent infinite retry loops.
 * 
 * Usage:
 *   node scripts/cleanup-invalid-phones.js
 */

const { supabaseAdmin } = require('../src/lib/supabase');
const voiceService = require('../src/services/voice.service');

async function cleanupInvalidPhones() {
    console.log('🔍 Starting cleanup of invalid phone numbers...\n');

    try {
        // Get all leads
        const { data: leads, error } = await supabaseAdmin
            .from('leads')
            .select('id, name, phone, status');

        if (error) {
            console.error('❌ Error fetching leads:', error);
            process.exit(1);
        }

        if (!leads || leads.length === 0) {
            console.log('✅ No leads found');
            return;
        }

        console.log(`📊 Found ${leads.length} leads to check\n`);

        const invalidLeads = [];
        const validLeads = [];

        // Check each lead
        for (const lead of leads) {
            if (!lead.phone) {
                invalidLeads.push({ ...lead, reason: 'No phone number' });
                continue;
            }

            // Use the validation function from voice service
            if (!voiceService.isValidPhoneNumber(lead.phone)) {
                invalidLeads.push({ ...lead, reason: `Invalid format: ${lead.phone}` });
            } else {
                validLeads.push(lead);
            }
        }

        console.log(`✅ Valid leads: ${validLeads.length}`);
        console.log(`❌ Invalid leads: ${invalidLeads.length}\n`);

        if (invalidLeads.length === 0) {
            console.log('✨ No invalid phone numbers found!');
            return;
        }

        // Show invalid leads
        console.log('📋 Invalid Leads:');
        invalidLeads.forEach((lead, index) => {
            console.log(`  ${index + 1}. ${lead.name || 'Unknown'} - ${lead.phone} (${lead.reason})`);
        });
        console.log('');

        // Ask for confirmation (in production, you might want to add a --force flag)
        console.log('⚠️  This will mark all invalid leads as "declined" to prevent retry loops.');
        console.log('⚠️  You can manually update them later if needed.\n');

        // Mark invalid leads as declined
        const invalidIds = invalidLeads.map(l => l.id);
        
        const { error: updateError } = await supabaseAdmin
            .from('leads')
            .update({ status: 'declined' })
            .in('id', invalidIds);

        if (updateError) {
            console.error('❌ Error updating leads:', updateError);
            process.exit(1);
        }

        console.log(`✅ Successfully marked ${invalidLeads.length} leads as declined\n`);

        // Also cancel any pending tasks for these leads
        const { data: tasks, error: taskError } = await supabaseAdmin
            .from('communication_tasks')
            .select('id, task_type')
            .in('lead_id', invalidIds)
            .eq('status', 'pending');

        if (taskError) {
            console.error('⚠️  Error fetching tasks:', taskError);
        } else if (tasks && tasks.length > 0) {
            const { error: cancelError } = await supabaseAdmin
                .from('communication_tasks')
                .update({ 
                    status: 'failed',
                    error_message: 'Lead has invalid phone number'
                })
                .in('id', tasks.map(t => t.id));

            if (cancelError) {
                console.error('⚠️  Error canceling tasks:', cancelError);
            } else {
                console.log(`✅ Canceled ${tasks.length} pending tasks for invalid leads\n`);
            }
        }

        console.log('✨ Cleanup complete!');

    } catch (error) {
        console.error('❌ Unexpected error:', error);
        process.exit(1);
    }
}

// Run the cleanup
cleanupInvalidPhones()
    .then(() => {
        console.log('\n✅ Script completed successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\n❌ Script failed:', error);
        process.exit(1);
    });

