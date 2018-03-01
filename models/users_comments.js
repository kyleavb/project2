'use strict';
module.exports = (sequelize, DataTypes) => {
  var users_comments = sequelize.define('users_comments', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  users_comments.associate = function(models) {
    // associations can be defined here
  };
  return users_comments;
};