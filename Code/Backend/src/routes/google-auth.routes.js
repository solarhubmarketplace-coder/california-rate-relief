const express = require('express');
const router = express.Router();
const googleAuthController = require('../controllers/google-auth.controller');

// GET /api/auth/google - Start OAuth flow
router.get('/google', googleAuthController.initiateAuth);

// GET /api/auth/google/callback - Handle OAuth callback
router.get('/google/callback', googleAuthController.handleCallback);

// GET /api/auth/google/status - Check if Google is connected
router.get('/google/status', googleAuthController.getStatus);

// DELETE /api/auth/google/disconnect - Remove Google connection
router.delete('/google/disconnect', googleAuthController.disconnect);

module.exports = router;
