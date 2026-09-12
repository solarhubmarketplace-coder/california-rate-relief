const { supabaseAdmin } = require('./supabase');

async function assertEmailOutreachAllowed(leadId, recipient) {
    const { data, error } = await supabaseAdmin.rpc('check_crr_email_outreach', {
        p_lead_id: leadId, p_email: recipient,
    });
    if (error) throw new Error('Email permission check unavailable');
    if (data?.allowed !== true) {
        const blocked = new Error(`Email outreach blocked: ${data?.reason || 'permission_unverified'}`);
        blocked.outreachBlocked = true;
        throw blocked;
    }
}

module.exports = { assertEmailOutreachAllowed };
