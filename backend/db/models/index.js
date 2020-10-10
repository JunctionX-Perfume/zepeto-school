'use strict';

const User = require('./user');
const Group = require('./group');
const UserGroup = require('./user_group');
const Quest = require('./quest');
const Post = require('./post');
const GroupPost = require('./group_post');
const Comment = require('./comment');

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;

db.User = User;
db.Group = Group;
db.UserGroup = UserGroup;
db.Quest = Quest;
db.Post = Post;
db.GroupPost = GroupPost;
db.Comment = Comment;

User.init(sequelize);
Group.init(sequelize);
UserGroup.init(sequelize);
Quest.init(sequelize);
Post.init(sequelize);
GroupPost.init(sequelize);
Comment.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }

  db[modelName].sync();
});

module.exports = db;
