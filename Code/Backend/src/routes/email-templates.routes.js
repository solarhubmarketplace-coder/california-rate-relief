const express = require('express');
const router = express.Router();
const emailTemplatesController = require('../controllers/email-templates.controller');

router.get('/', emailTemplatesController.getTemplates);
router.post('/', emailTemplatesController.createTemplate);
router.put('/:id', emailTemplatesController.updateTemplate);
router.delete('/:id', emailTemplatesController.deleteTemplate);
router.post('/:id/set-current', emailTemplatesController.setCurrentTemplate);

module.exports = router;
