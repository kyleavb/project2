'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    deckId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    models.post.belongsTo(models.deck)
    models.post.belongsTo(models.user)
  };
  return post;
};
