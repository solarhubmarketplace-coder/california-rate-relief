// scripts/verify-phase-1.js
const { supabaseAdmin } = require('../src/lib/supabase');
const schedulerService = require('../src/services/scheduler.service');
const leadService = require('../src/services/lead.service');

async function testPhase1() {
    console.log('🔍 Starting Phase 1 Verification...\n');

    try {
        // 1. Create COLD Lead
        console.log('1. Creating COLD Lead...');
        const coldLead = await leadService.createLead({
            name: 'Test Cold Lead',
            phone: '+15550000001',
            source: 'csv'
        });
        // Manually set type to cold (default)
        await supabaseAdmin.from('leads').update({ type: 'cold' }).eq('id', coldLead.id);
        console.log('   ✅ Created Cold Lead:', coldLead.id);

        // 2. Create HOT Lead
        console.log('\n2. Creating HOT Lead...');
        const hotLead = await leadService.createLead({
            name: 'Test Hot Lead',
            phone: '+15550000002',
            source: 'google_ads'
        });
        await supabaseAdmin.from('leads').update({ type: 'hot' }).eq('id', hotLead.id);
        console.log('   ✅ Created Hot Lead:', hotLead.id);

        // 3. Run Scheduler (Should only pick HOT lead)
        console.log('\n3. Running Scheduler (Auto-Dial Check)...');
        // Hack: We can't easily spy on console.log in this script, but we can check call logs after.
        await schedulerService.checkAutoDialNewLeads();

        // Wait a moment for async operations
        await new Promise(r => setTimeout(r, 2000));

        const { data: hotCall } = await supabaseAdmin.from('call_logs').select('*').eq('lead_id', hotLead.id).single();
        const { data: coldCall } = await supabaseAdmin.from('call_logs').select('*').eq('lead_id', coldLead.id).single();

        if (hotCall) console.log('   ✅ Hot Lead was dialed (Call Log found).');
        else console.error('   ❌ Hot Lead was NOT dialed!');

        if (!coldCall) console.log('   ✅ Cold Lead was NOT dialed (No Call Log).');
        else console.error('   ❌ Cold Lead WAS dialed! (CRITICAL FAILURE)');

        // 4. Test Upgrade Endpoint Logic
        console.log('\n4. Testing Cold -> Hot Upgrade...');
        const upgradedLead = await leadService.upgradeLeadToHot(coldLead.id);

        if (upgradedLead.type === 'hot' && upgradedLead.status === 'new') {
            console.log('   ✅ Lead upgraded to HOT and status reset to NEW.');
        } else {
            console.error('   ❌ Lead upgrade failed:', upgradedLead);
        }

        console.log('\n✅ Phase 1 Verification Complete.');
        process.exit(0);

    } catch (error) {
        console.error('\n❌ Verification Failed:', error);
        process.exit(1);
    }
}

testPhase1();
