const express = require('express');
const router = express.Router();
const emailSequenceController = require('../controllers/email-sequence.controller');

router.get('/', emailSequenceController.getSequences);
router.get('/:id', emailSequenceController.getSequenceById);
router.post('/', emailSequenceController.createSequence);
router.put('/:id', emailSequenceController.updateSequence);
router.delete('/:id', emailSequenceController.deleteSequence);
router.post('/:id/activate', emailSequenceController.activateSequence);

module.exports = router;
