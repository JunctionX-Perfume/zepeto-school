const Sequelize = require('sequelize');

module.exports = class Group extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          uniqe: true,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Group',
        tableName: 'groups',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Group.belongsToMany(db.User, { through: 'UserGroups' });
    db.Group.belongsToMany(db.Post, { through: 'GroupPosts' });
  }
};
