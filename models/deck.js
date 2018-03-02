'use strict';
module.exports = (sequelize, DataTypes) => {
  var deck = sequelize.define('deck', {
    name: DataTypes.STRING,
    ownerid: DataTypes.INTEGER,
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER,
    card: DataTypes.STRING
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
  };
  return deck;
};