const express = require('express');
const { getLeads, createLead, updateLead, deleteLead } = require('../controllers/lead.controller');
const { verifyAccessToken } = require('../middlewares/auth.middleware');
const checkPermission = require('../middlewares/permission.middleware');
const router = express.Router();

router.get('/', verifyAccessToken, checkPermission('leads'), getLeads);
router.post('/create', verifyAccessToken, checkPermission('leads'), createLead)
router.post('/update', updateLead);
router.delete('/delete', deleteLead);

module.exports = router;