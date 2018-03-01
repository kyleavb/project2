'use strict';
module.exports = (sequelize, DataTypes) => {
  var users_decks = sequelize.define('users_decks', {
    userId: DataTypes.INTEGER,
    deckId: DataTypes.INTEGER
  }, {});
  users_decks.associate = function(models) {
    // associations can be defined here
  };
  return users_decks;
};