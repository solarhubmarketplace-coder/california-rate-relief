const express = require('express');
const router = express.Router();
const leadController = require('../controllers/lead.controller');

// Public route for email click
router.get('/convert/:leadId', leadController.handleLeadConversionClick);

router.post('/', leadController.ingestLead);
router.post('/bulk', leadController.ingestLeadsBulk);
router.get('/', leadController.getLeads);
router.put('/:leadId/hot', leadController.upgradeLeadToHot);
router.put('/:leadId/consent', leadController.updateConsent);
router.get('/', leadController.getLeads);

module.exports = router;
