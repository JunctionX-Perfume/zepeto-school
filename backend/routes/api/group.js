var express = require('express');
var router = express.Router();

const { Group, UserGroup, User } = require('../../db/models');

router.post('/create', async (req, res, next) => {
  try {
    const groupCheck = await Group.findOne({ where: { name: req.body.name } });

    if (groupCheck)
      return res.status(400).json({ err: '이미 생성된 그룹입니다' });

    await Group.create({
      name: req.body.name,
    });

    const group = await Group.findOne({ where: { name: req.body.name } });

    await UserGroup.create({ UserId: req.user.id, GroupId: group.id });

    return res.status(200).json({ message: '그룹생성이 완료되었습니다.' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
});

module.exports = router;
