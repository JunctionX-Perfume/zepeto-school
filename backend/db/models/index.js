'use strict';

const User = require('./user');
const Group = require('./group');
const UserGroup = require('./user_group');

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

User.init(sequelize);
Group.init(sequelize);
UserGroup.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }

  db[modelName].sync();
});

module.exports = db;
