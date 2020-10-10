const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        content: {
          type: Sequelize.BLOB('medium'),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Post',
        tableName: 'posts',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
      }
    );
  }

  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: 'writerId', targetKey: 'id' });
    db.Post.belongsToMany(db.Group, { through: 'GroupPosts' });
    db.Post.hasMany(db.Comment, { foreignKey: 'pid', sourceKey: 'id' });
  }
};
