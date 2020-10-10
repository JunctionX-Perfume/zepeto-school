var express = require('express');
var router = express.Router();

router.post('/', async (req, res, next) => {
  res
    .cookie('user', '')
    .json({ message: '로그아웃 되었습니다.', logoutSuccess: true });
});

module.exports = router;
