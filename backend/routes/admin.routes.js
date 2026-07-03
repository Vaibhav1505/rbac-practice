const express= require('express');
const { verifyAccessToken } = require('../middlewares/auth.middleware');
const checkPermission = require('../middlewares/permission.middleware');
const { createUser } = require('../controllers/admin.controller');
const router= express.Router();

router.post('/createUser',verifyAccessToken,checkPermission('users'),createUser)

module.exports= router;