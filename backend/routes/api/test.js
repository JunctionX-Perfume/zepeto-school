var express = require('express');
var router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.user) return res.json({ message: 'status: logout' });
    return res.json({ message: 'status: login', user: req.user.name });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
});

module.exports = router;
