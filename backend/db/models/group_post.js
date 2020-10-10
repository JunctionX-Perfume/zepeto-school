const Sequelize = require('sequelize');

module.exports = class GroupPost extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      { status: Sequelize.STRING },
      {
        sequelize,
        underscored: false,
        modelName: 'GroupPosts',
        tableName: 'GroupPosts',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }
};
