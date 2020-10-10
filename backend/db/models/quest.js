const Sequelize = require('sequelize');

module.exports = class Quest extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.STRING(256),
          allowNull: false,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        status: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: false,
        modelName: 'Quest',
        tableName: 'quest',
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Quest.belongsTo(db.Group, { foreignKey: 'gid', targeteKey: 'id' });
    db.Quest.belongsTo(db.User, {
      foreignKey: 'uid',
      targetKey: 'id',
    });
  }
};
