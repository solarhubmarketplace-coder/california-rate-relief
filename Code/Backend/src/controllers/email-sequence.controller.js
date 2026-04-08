const emailSequenceService = require('../services/email-sequence.service');

/**
 * Get all email sequences
 * GET /api/email-sequences
 */
const getSequences = async (req, res, next) => {
    try {
        const sequences = await emailSequenceService.getSequences();
        return res.apiResponse(200, 'Sequences retrieved successfully', sequences);
    } catch (error) {
        next(error);
    }
};

/**
 * Get a single sequence by ID
 * GET /api/email-sequences/:id
 */
const getSequenceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const sequence = await emailSequenceService.getSequenceById(id);
        
        if (!sequence) {
            return res.apiResponse(404, 'Sequence not found');
        }
        
        return res.apiResponse(200, 'Sequence retrieved successfully', sequence);
    } catch (error) {
        next(error);
    }
};

/**
 * Create a new email sequence
 * POST /api/email-sequences
 * Body: { name, description, lead_type, steps: [{ step_order, delay_days, subject, html_content }] }
 */
const createSequence = async (req, res, next) => {
    try {
        const { name, description, lead_type, steps } = req.body;

        if (!name || !lead_type) {
            return res.apiResponse(400, 'Name and lead_type are required');
        }

        if (!steps || !Array.isArray(steps) || steps.length === 0) {
            return res.apiResponse(400, 'At least one step is required');
        }

        // Validate steps
        for (let i = 0; i < steps.length; i++) {
            const step = steps[i];
            if (!step.subject || !step.html_content) {
                return res.apiResponse(400, `Step ${i + 1} is missing subject or html_content`);
            }
            if (step.step_order !== i + 1) {
                return res.apiResponse(400, `Step order must be sequential starting from 1`);
            }
        }

        const sequence = await emailSequenceService.createSequence({
            name,
            description,
            lead_type,
            steps,
        });

        return res.apiResponse(201, 'Sequence created successfully', sequence);
    } catch (error) {
        next(error);
    }
};

/**
 * Update an email sequence
 * PUT /api/email-sequences/:id
 */
const updateSequence = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const sequence = await emailSequenceService.updateSequence(id, updates);
        return res.apiResponse(200, 'Sequence updated successfully', sequence);
    } catch (error) {
        next(error);
    }
};

/**
 * Delete an email sequence
 * DELETE /api/email-sequences/:id
 */
const deleteSequence = async (req, res, next) => {
    try {
        const { id } = req.params;
        await emailSequenceService.deleteSequence(id);
        return res.apiResponse(200, 'Sequence deleted successfully');
    } catch (error) {
        next(error);
    }
};

/**
 * Set sequence as active for its lead type
 * POST /api/email-sequences/:id/activate
 */
const activateSequence = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        // Get sequence to find lead_type
        const sequence = await emailSequenceService.getSequenceById(id);
        if (!sequence) {
            return res.apiResponse(404, 'Sequence not found');
        }

        // Deactivate all other sequences of this type
        const { supabaseAdmin } = require('../lib/supabase');
        await supabaseAdmin
            .from('email_sequences')
            .update({ is_active: false })
            .eq('lead_type', sequence.lead_type)
            .neq('id', id);

        // Activate this sequence
        const updated = await emailSequenceService.updateSequence(id, { is_active: true });
        return res.apiResponse(200, 'Sequence activated successfully', updated);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getSequences,
    getSequenceById,
    createSequence,
    updateSequence,
    deleteSequence,
    activateSequence,
};
