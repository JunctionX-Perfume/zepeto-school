const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: Sequelize.STRING(256),
          allowNull: false,
          unique: 'column',
        },
        password: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        hash: {
          type: Sequelize.STRING(15),
          allowNull: false,
        },
        pose: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        msg: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'users',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.User.belongsToMany(db.Group, {
      through: 'UserGroups',
    });
    db.User.hasMany(db.Post, { foreignKey: 'writerId', sourceKey: 'id' });
    db.User.hasMany(db.Comment, { foreignKey: 'uid', sourceKey: 'id' });
  }
};
