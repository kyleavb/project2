'use strict';
module.exports = (sequelize, DataTypes) => {
  var users_posts = sequelize.define('users_posts', {
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  users_posts.associate = function(models) {
    // associations can be defined here
  };
  return users_posts;
};