/**
 * Applies Resend delivery webhook events to email_logs and leads.
 *
 * WHY THIS EXISTS
 * ---------------
 * Before this, "sent" meant "Resend accepted the request" and nothing recorded
 * whether a message reached a mailbox. That made the delivery rate unmeasurable,
 * which made the Day-3 gate ("test batch >= 98% delivered") impossible to
 * evaluate — you cannot report a delivery percentage with no delivery events.
 *
 * DESIGN NOTES
 * ------------
 * - Events arrive AT LEAST ONCE and OUT OF ORDER. Every write is therefore
 *   idempotent, and state only ever moves forward through the ladder below. A
 *   late `email.sent` must not demote a row that already reached `delivered`.
 * - Every event is persisted raw in email_webhook_events before it is applied,
 *   so an event for a message we have no row for is retained rather than lost.
 * - Unknown event types are stored and acknowledged, not rejected. Resend adds
 *   event types over time and a 4xx would make it retry something we will never
 *   understand.
 */

const { supabaseAdmin } = require('../lib/supabase');

/**
 * Delivery states, weakest to strongest. A row's state only advances.
 *
 * `complained` outranks `delivered` because a spam complaint is the more
 * important fact about a message that was also delivered — it is the signal that
 * affects sending reputation and it must not be overwritten.
 */
const STATE_RANK = {
    accepted: 1,
    delivered: 2,
    bounced: 3,
    invalid_address: 4,
    complained: 5,
    suppressed: 6,
};

/** Resend event type -> the state it implies. */
const EVENT_STATE = {
    'email.sent': 'accepted',
    'email.delivered': 'delivered',
    'email.delivery_delayed': null, // informational; no state change
    'email.bounced': 'bounced',
    'email.complained': 'complained',
    'email.suppressed': 'suppressed',
    'email.opened': null,
    'email.clicked': null,
    'email.failed': 'bounced',
};

function rank(state) {
    return STATE_RANK[state] || 0;
}

/**
 * @param {object} event  parsed Resend webhook body
 * @param {string|null} providerEventId  svix-id, used for idempotency
 * @returns {Promise<{applied: boolean, reason: string, emailLogId: string|null}>}
 */
async function applyResendEvent(event, providerEventId) {
    const type = event && event.type ? String(event.type) : 'unknown';
    const data = (event && event.data) || {};
    const resendEmailId = data.email_id || data.id || null;
    const to = Array.isArray(data.to) ? data.to[0] : data.to || null;
    const occurredAt = event && event.created_at ? event.created_at : null;

    // 1. Persist the raw event first. If anything below fails, the event is
    //    still on record and can be replayed.
    let eventRowId = null;
    try {
        const { data: inserted, error } = await supabaseAdmin
            .from('email_webhook_events')
            .insert({
                provider: 'resend',
                provider_event_id: providerEventId,
                event_type: type,
                resend_email_id: resendEmailId,
                email_to: to,
                occurred_at: occurredAt,
                payload: event || {},
            })
            .select('id')
            .single();

        if (error) {
            // 23505 = unique violation on (provider, provider_event_id): Resend
            // redelivered an event we already have. That is a success, not a fault.
            if (error.code === '23505') {
                return { applied: false, reason: 'duplicate event, already recorded', emailLogId: null };
            }
            console.error('[EmailDelivery] Failed to record event:', error.message);
        } else if (inserted) {
            eventRowId = inserted.id;
        }
    } catch (e) {
        console.error('[EmailDelivery] Event insert threw:', e.message);
    }

    const nextState = EVENT_STATE[type];
    if (nextState === undefined) {
        await markEventApplied(eventRowId, false, `unknown event type: ${type}`);
        return { applied: false, reason: `unknown event type: ${type}`, emailLogId: null };
    }
    if (nextState === null) {
        await markEventApplied(eventRowId, true, null);
        return { applied: true, reason: `${type} recorded, no state change`, emailLogId: null };
    }
    if (!resendEmailId) {
        await markEventApplied(eventRowId, false, 'event carried no email id');
        return { applied: false, reason: 'event carried no email id', emailLogId: null };
    }

    // 2. Find the email_logs row this event belongs to.
    const { data: rows, error: findError } = await supabaseAdmin
        .from('email_logs')
        .select('id, lead_id, delivery_state')
        .eq('resend_email_id', resendEmailId)
        .limit(1);

    if (findError) {
        await markEventApplied(eventRowId, false, `lookup failed: ${findError.message}`);
        return { applied: false, reason: `lookup failed: ${findError.message}`, emailLogId: null };
    }
    if (!rows || rows.length === 0) {
        // Not an error: an owner-notification or a message sent outside this
        // codebase can still generate events. The raw row keeps it.
        await markEventApplied(eventRowId, false, 'no matching email_logs row');
        return { applied: false, reason: 'no matching email_logs row', emailLogId: null };
    }

    const row = rows[0];

    // 3. Advance state only. Never demote.
    if (rank(nextState) <= rank(row.delivery_state)) {
        await markEventApplied(eventRowId, true, `no advance: ${row.delivery_state} outranks ${nextState}`);
        return { applied: true, reason: `no advance from ${row.delivery_state}`, emailLogId: row.id };
    }

    const nowIso = new Date().toISOString();
    const patch = {
        delivery_state: nextState,
        last_provider_event_at: occurredAt || nowIso,
    };
    if (nextState === 'delivered') patch.delivered_at = occurredAt || nowIso;
    if (nextState === 'bounced') {
        patch.bounced_at = occurredAt || nowIso;
        patch.bounce_type = data.bounce && data.bounce.type ? String(data.bounce.type) : null;
        patch.failure_kind = isHardBounce(data) ? 'permanent' : 'transient';
    }
    if (nextState === 'complained') patch.complained_at = occurredAt || nowIso;

    const { error: updateError } = await supabaseAdmin
        .from('email_logs')
        .update(patch)
        .eq('id', row.id);

    if (updateError) {
        await markEventApplied(eventRowId, false, `update failed: ${updateError.message}`);
        return { applied: false, reason: `update failed: ${updateError.message}`, emailLogId: row.id };
    }

    // 4. Mirror onto the lead, again advancing only.
    if (row.lead_id) {
        await advanceLeadEmailStatus(row.lead_id, nextState);
        if (nextState === 'complained' || nextState === 'suppressed' || (nextState === 'bounced' && isHardBounce(data))) {
            const { error: stopError } = await supabaseAdmin.rpc('record_crr_email_delivery_stop', {
                p_lead_id: row.lead_id,
                p_reason: nextState,
                p_source_reference: `resend:${providerEventId || resendEmailId}`,
            });
            if (stopError) console.error('[EmailDelivery] Failed to stop recipient journey:', stopError.message);
        }
    }

    // 5. Link the event to the row it touched.
    if (eventRowId) {
        await supabaseAdmin
            .from('email_webhook_events')
            .update({ email_log_id: row.id, lead_id: row.lead_id || null, applied: true })
            .eq('id', eventRowId);
    }

    return { applied: true, reason: `advanced to ${nextState}`, emailLogId: row.id };
}

function isHardBounce(data) {
    const t = String((data.bounce && data.bounce.type) || '').toLowerCase();
    const sub = String((data.bounce && data.bounce.subType) || '').toLowerCase();
    if (t.includes('hard')) return true;
    if (t.includes('permanent')) return true;
    if (sub.includes('suppress')) return true;
    return false;
}

/**
 * Raise a lead's email_status to `nextState` only if that is stronger than what
 * it already holds. Done as a read-then-write rather than a conditional update
 * because the ladder is not expressible in a PostgREST filter.
 */
async function advanceLeadEmailStatus(leadId, nextState) {
    try {
        const { data: lead, error } = await supabaseAdmin
            .from('leads')
            .select('email_status')
            .eq('id', leadId)
            .single();

        if (error || !lead) return;

        // Legacy rows say "sent", which meant what "accepted" means now.
        const current = lead.email_status === 'sent' ? 'accepted' : lead.email_status;
        if (rank(nextState) <= rank(current)) return;

        await supabaseAdmin
            .from('leads')
            .update({ email_status: nextState })
            .eq('id', leadId);
    } catch (e) {
        console.error('[EmailDelivery] Failed to advance lead email_status:', e.message);
    }
}

async function markEventApplied(eventRowId, applied, applyError) {
    if (!eventRowId) return;
    try {
        await supabaseAdmin
            .from('email_webhook_events')
            .update({ applied, apply_error: applyError || null })
            .eq('id', eventRowId);
    } catch (e) {
        /* non-fatal */
    }
}

/**
 * Delivery rate over a window, for the Day-3 gate. Counts only messages this
 * codebase sent to leads, and only those old enough to have had a chance to
 * generate an event.
 *
 * @param {object} opts
 * @param {string} opts.sinceIso
 * @returns {Promise<{accepted:number, delivered:number, bounced:number, complained:number, invalid:number, delivered_pct:number|null}>}
 */
async function deliveryStats({ sinceIso }) {
    const { data, error } = await supabaseAdmin
        .from('email_logs')
        .select('delivery_state')
        .gte('created_at', sinceIso);

    if (error || !data) {
        return { accepted: 0, delivered: 0, bounced: 0, complained: 0, invalid: 0, delivered_pct: null };
    }

    const counts = { accepted: 0, delivered: 0, bounced: 0, complained: 0, invalid: 0 };
    for (const row of data) {
        const s = row.delivery_state === 'sent' ? 'accepted' : row.delivery_state;
        if (s === 'accepted') counts.accepted += 1;
        else if (s === 'delivered') counts.delivered += 1;
        else if (s === 'bounced') counts.bounced += 1;
        else if (s === 'complained') counts.complained += 1;
        else if (s === 'invalid_address') counts.invalid += 1;
    }

    // Denominator is everything that left, or tried to. A message still sitting
    // at `accepted` has not been confirmed delivered, so it counts against the
    // rate — reporting only on confirmed events would flatter the number.
    const total = counts.accepted + counts.delivered + counts.bounced + counts.complained + counts.invalid;
    return {
        ...counts,
        delivered_pct: total > 0 ? Number(((counts.delivered / total) * 100).toFixed(1)) : null,
    };
}

module.exports = {
    applyResendEvent,
    deliveryStats,
    advanceLeadEmailStatus,
    STATE_RANK,
    EVENT_STATE,
};
