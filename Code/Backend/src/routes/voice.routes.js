const express = require('express');
const router = express.Router();
const voiceController = require('../controllers/voice.controller');

router.post('/call', voiceController.triggerCall);

// Twilio may call TwiML endpoints via GET or POST - support both
router.get('/twiml', voiceController.getTwiml);
router.post('/twiml', voiceController.getTwiml);

router.post('/voicemail', voiceController.handleVoicemail); // Voicemail fallback
router.post('/status/:leadId', voiceController.handleStatus);
router.post('/recording-callback/:leadId', voiceController.handleRecordingCallback); // NEW: Twilio recording upload

module.exports = router;
