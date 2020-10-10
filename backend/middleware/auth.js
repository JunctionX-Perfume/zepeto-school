const jwt = require('jsonwebtoken');
const { User } = require('../db/models');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  let token = req.cookies.user;
  if (!token) next();

  jwt.verify(token, process.env.secret, async (err, decoded) => {
    if (err) {
      return res.status(500).json({ err: 'fail to decode' });
    }

    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user)
      return res.status(404).json({
        isAuth: false,
        err: 'token에 해당하는 사용자가 없습니다.',
      });

    req.token = token;
    req.user = user;
    console.log(user);
    next();
  });
};

module.exports = authMiddleware;
