const { supabaseAdmin } = require('../lib/supabase');

class EmailSequenceService {
    /**
     * Get all email sequences
     * @returns {Array} Array of sequences with steps
     */
    async getSequences() {
        try {
            const { data: sequences, error } = await supabaseAdmin
                .from('email_sequences')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;

            // Fetch steps for each sequence
            const sequencesWithSteps = await Promise.all(
                sequences.map(async (seq) => {
                    const { data: steps } = await supabaseAdmin
                        .from('email_sequence_steps')
                        .select('*')
                        .eq('sequence_id', seq.id)
                        .order('step_order', { ascending: true });

                    return {
                        ...seq,
                        steps: steps || [],
                    };
                })
            );

            return sequencesWithSteps;
        } catch (error) {
            console.error('[EmailSequenceService] Failed to get sequences:', error.message);
            throw error;
        }
    }

    /**
     * Get a single sequence by ID with steps
     * @param {string} id - Sequence ID
     * @returns {Object} Sequence with steps
     */
    async getSequenceById(id) {
        try {
            const { data: sequence, error } = await supabaseAdmin
                .from('email_sequences')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw error;

            const { data: steps } = await supabaseAdmin
                .from('email_sequence_steps')
                .select('*')
                .eq('sequence_id', id)
                .order('step_order', { ascending: true });

            return {
                ...sequence,
                steps: steps || [],
            };
        } catch (error) {
            console.error('[EmailSequenceService] Failed to get sequence:', error.message);
            throw error;
        }
    }

    /**
     * Get active sequence for a lead type
     * @param {string} leadType - 'hot' or 'cold'
     * @returns {Object|null} Active sequence or null
     */
    async getActiveSequence(leadType) {
        try {
            const { data: sequences, error } = await supabaseAdmin
                .from('email_sequences')
                .select('*')
                .eq('lead_type', leadType)
                .eq('is_active', true)
                .order('created_at', { ascending: false })
                .limit(1);

            if (error) throw error;

            if (!sequences || sequences.length === 0) {
                return null;
            }

            const sequence = sequences[0];
            const { data: steps } = await supabaseAdmin
                .from('email_sequence_steps')
                .select('*')
                .eq('sequence_id', sequence.id)
                .order('step_order', { ascending: true });

            return {
                ...sequence,
                steps: steps || [],
            };
        } catch (error) {
            console.error('[EmailSequenceService] Failed to get active sequence:', error.message);
            return null;
        }
    }

    /**
     * Create a new email sequence
     * @param {Object} sequenceData - { name, description, lead_type, steps: [{ step_order, delay_days, subject, html_content }] }
     * @returns {Object} Created sequence
     */
    async createSequence(sequenceData) {
        try {
            const { steps, ...sequenceFields } = sequenceData;

            // Create sequence
            const { data: sequence, error: seqError } = await supabaseAdmin
                .from('email_sequences')
                .insert([sequenceFields])
                .select()
                .single();

            if (seqError) throw seqError;

            // Create steps if provided
            if (steps && steps.length > 0) {
                const stepsToInsert = steps.map((step) => ({
                    sequence_id: sequence.id,
                    step_order: step.step_order,
                    delay_days: step.delay_days || 0,
                    subject: step.subject,
                    html_content: step.html_content,
                }));

                const { error: stepsError } = await supabaseAdmin
                    .from('email_sequence_steps')
                    .insert(stepsToInsert);

                if (stepsError) throw stepsError;
            }

            // Return sequence with steps
            return this.getSequenceById(sequence.id);
        } catch (error) {
            console.error('[EmailSequenceService] Failed to create sequence:', error.message);
            throw error;
        }
    }

    /**
     * Update an email sequence
     * @param {string} id - Sequence ID
     * @param {Object} updates - Fields to update
     * @returns {Object} Updated sequence
     */
    async updateSequence(id, updates) {
        try {
            const { steps, ...sequenceFields } = updates;

            // Update sequence
            const { data: sequence, error: seqError } = await supabaseAdmin
                .from('email_sequences')
                .update({
                    ...sequenceFields,
                    updated_at: new Date().toISOString(),
                })
                .eq('id', id)
                .select()
                .single();

            if (seqError) throw seqError;

            // Update steps if provided
            if (steps !== undefined) {
                // Delete existing steps
                await supabaseAdmin
                    .from('email_sequence_steps')
                    .delete()
                    .eq('sequence_id', id);

                // Insert new steps
                if (steps.length > 0) {
                    const stepsToInsert = steps.map((step) => ({
                        sequence_id: id,
                        step_order: step.step_order,
                        delay_days: step.delay_days || 0,
                        subject: step.subject,
                        html_content: step.html_content,
                    }));

                    const { error: stepsError } = await supabaseAdmin
                        .from('email_sequence_steps')
                        .insert(stepsToInsert);

                    if (stepsError) throw stepsError;
                }
            }

            return this.getSequenceById(id);
        } catch (error) {
            console.error('[EmailSequenceService] Failed to update sequence:', error.message);
            throw error;
        }
    }

    /**
     * Delete an email sequence
     * @param {string} id - Sequence ID
     * @returns {boolean}
     */
    async deleteSequence(id) {
        try {
            // Steps will be deleted via CASCADE
            const { error } = await supabaseAdmin
                .from('email_sequences')
                .delete()
                .eq('id', id);

            if (error) throw error;
            return true;
        } catch (error) {
            console.error('[EmailSequenceService] Failed to delete sequence:', error.message);
            throw error;
        }
    }

    /**
     * Assign a sequence to a lead
     * @param {string} leadId - Lead ID
     * @param {string} sequenceId - Sequence ID
     * @returns {Object} Tracking record
     */
    async assignSequenceToLead(leadId, sequenceId) {
        try {
            const { data, error } = await supabaseAdmin
                .from('lead_sequence_tracking')
                .upsert({
                    lead_id: leadId,
                    sequence_id: sequenceId,
                    current_step: 1,
                    updated_at: new Date().toISOString(),
                }, {
                    onConflict: 'lead_id,sequence_id',
                })
                .select()
                .single();

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('[EmailSequenceService] Failed to assign sequence:', error.message);
            throw error;
        }
    }

    /**
     * Get next step for a lead in their sequence
     * @param {string} leadId - Lead ID
     * @returns {Object|null} Next step or null if sequence completed
     */
    async getNextStepForLead(leadId) {
        try {
            // Get lead's current sequence tracking
            const { data: trackingRows, error: trackError } = await supabaseAdmin
                .from('lead_sequence_tracking')
                .select('*, email_sequences(*), email_sequence_steps(*)')
                .eq('lead_id', leadId)
                .is('completed_at', null)
                .limit(1);

            if (trackError || !trackingRows || trackingRows.length === 0) {
                return null;
            }
            const tracking = trackingRows[0];

            // Get current step
            const { data: currentSteps } = await supabaseAdmin
                .from('email_sequence_steps')
                .select('*')
                .eq('sequence_id', tracking.sequence_id)
                .eq('step_order', tracking.current_step)
                .limit(1);

            const currentStep = currentSteps?.[0] || null;
            if (!currentStep) {
                // Sequence completed
                await supabaseAdmin
                    .from('lead_sequence_tracking')
                    .update({ completed_at: new Date().toISOString() })
                    .eq('id', tracking.id);
                return null;
            }

            // Get next step
            const { data: nextSteps } = await supabaseAdmin
                .from('email_sequence_steps')
                .select('*')
                .eq('sequence_id', tracking.sequence_id)
                .eq('step_order', tracking.current_step + 1)
                .limit(1);

            return {
                currentStep,
                nextStep: nextSteps?.[0] || null,
                tracking,
            };
        } catch (error) {
            console.error('[EmailSequenceService] Failed to get next step:', error.message);
            return null;
        }
    }

    /**
     * Advance lead to next step in sequence
     * @param {string} leadId - Lead ID
     * @returns {Object} Updated tracking
     */
    async advanceLeadToNextStep(leadId) {
        try {
            const { data: trackingRows, error } = await supabaseAdmin
                .from('lead_sequence_tracking')
                .select('*')
                .eq('lead_id', leadId)
                .is('completed_at', null)
                .limit(1);

            if (error || !trackingRows || trackingRows.length === 0) {
                throw new Error('No active sequence found for lead');
            }
            const tracking = trackingRows[0];

            // Check if there's a next step
            const { data: nextSteps } = await supabaseAdmin
                .from('email_sequence_steps')
                .select('*')
                .eq('sequence_id', tracking.sequence_id)
                .eq('step_order', tracking.current_step + 1)
                .limit(1);

            const nextStep = nextSteps?.[0] || null;
            if (!nextStep) {
                // Sequence completed
                const { data: updated } = await supabaseAdmin
                    .from('lead_sequence_tracking')
                    .update({
                        completed_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                    })
                    .eq('id', tracking.id)
                    .select()
                    .single();

                return updated;
            }

            // Advance to next step
            const { data: updated } = await supabaseAdmin
                .from('lead_sequence_tracking')
                .update({
                    current_step: tracking.current_step + 1,
                    last_sent_at: new Date().toISOString(),
                    updated_at: new Date().toISOString(),
                })
                .eq('id', tracking.id)
                .select()
                .single();

            return updated;
        } catch (error) {
            console.error('[EmailSequenceService] Failed to advance step:', error.message);
            throw error;
        }
    }
}

module.exports = new EmailSequenceService();
