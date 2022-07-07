const express = require('express');
const {
  getAllEmailsController,
  postEmailController,
  getEmailFormController,
} = require('../controllers/email-controller');

const router = express.Router();

router.get('/', getAllEmailsController);
router.get('/post-email', getEmailFormController);
router.post('/save', postEmailController);

module.exports = router;
