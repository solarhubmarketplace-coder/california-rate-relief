const express = require('express');
const staffController = require('../controllers/staff.controller');

const router = express.Router();
router.get('/growth-scorecard', staffController.growthScorecard);
router.post('/submissions/:id/receipt', staffController.recordReceipt);
router.get('/referrals', staffController.listReferrals);
router.post('/referrals', staffController.recordReferral);
router.patch('/referrals/:id', staffController.updateReferral);
router.get('/scorecard', staffController.getScorecard);
router.get('/email-funnel-scorecard', staffController.getEmailFunnelScorecard);
router.get('/submissions', staffController.listSubmissions);
router.patch('/submissions/:id/classification', staffController.classifySubmission);
router.get('/owner-notifications', staffController.listOwnerNotifications);
router.post('/owner-notifications/:id/reconcile', staffController.reconcileOwnerNotification);
router.get('/email-offer-tasks', staffController.listEmailOfferTasks);
router.patch('/email-offer-tasks/:id', staffController.updateEmailOfferTask);

module.exports = router;
