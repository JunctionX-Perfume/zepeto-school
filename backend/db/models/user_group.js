const Sequelize = require('sequelize');

module.exports = class UserGroup extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      { status: Sequelize.STRING },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'UserGroups',
        tableName: 'UserGroups',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
};
