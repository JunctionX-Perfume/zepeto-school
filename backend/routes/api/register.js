var express = require('express');
var router = express.Router();

const { User } = require('../../db/models');

router.post('/', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user)
      return res.status(400).json({ message: '이미 존재하는 아이디입니다.' });

    await User.create({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      hash: req.body.hash,
      pose: 'PHOTOBOOTH_ONE_1',
      msg: 'Hello, ZEPETO!',
    });

    return res.status(200).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
});

module.exports = router;
