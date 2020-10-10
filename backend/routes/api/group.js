var express = require('express');
var router = express.Router();

const { Group, UserGroup } = require('../../db/models');
const authCheck = require('../../middleware/auth');

router.post('/create', authCheck, async (req, res, next) => {
  try {
    const groupCheck = await Group.findOne({ where: { name: req.body.name } });
    console.log('**************');
    console.log(groupCheck);
    if (groupCheck)
      return res.status(400).json({ err: '이미 생성된 그룹입니다' });

    await Group.create({
      name: req.body.name,
    });

    const group = await Group.findOne({ where: { name: req.body.name } });
    console.log(group);
    console.log(req.user.id, group.id);
    await UserGroup.create({ UserId: req.user.id, GroupId: group.id });

    return res.status(200).json({ message: '그룹생성이 완료되었습니다.' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err: err.message });
  }
});

module.exports = router;
