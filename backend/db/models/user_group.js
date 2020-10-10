const Sequelize = require('sequelize');

module.exports = class UserGroup extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      { status: Sequelize.STRING },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'UserGroup',
        tableName: 'usergroups',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  //   static associate(db) {
  //     db.Group.belongsToMany(db.User, {
  //       through: 'usergroups',
  //       otherKey: 'gid',
  //     });
  //   }
};
