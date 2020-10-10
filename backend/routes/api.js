var express = require('express');
var router = express.Router();

const registerRouter = require('./api/register.js');
const loginRouter = require('./api/login.js');
const logoutRouter = require('./api/logout.js');
const authCheck = require('../middleware/auth.js');
const testRouter = require('./api/test.js');

router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/test', authCheck, testRouter);

module.exports = router;
