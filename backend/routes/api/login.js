var express = require('express');
var router = express.Router();

const { User } = require('../../db/models');
const jwt = require('jsonwebtoken');
const secretObj = require('../../db/config/jwt.js');

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.query.email,
      },
    });

    if (user && user.password === req.query.password) {
      const token = jwt.sign({ email: req.query.email }, secretObj.secret, {
        expiresIn: '30m',
      });

      res.cookie('user', token, { httpOnly: true, maxAge: 30 * 60 * 1000 });
      return res.json({ user: user });
    }

    return res.json({ message: 'The user is not valid.' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
