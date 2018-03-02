'use strict';
module.exports = (sequelize, DataTypes) => {
  var deck = sequelize.define('deck', {
    name: DataTypes.STRING,
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER,
    posted: DataTypes.BOOLEAN,
    cards: DataTypes.ARRAY(DataTypes.STRING),
    userId: DataTypes.INTEGER
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
  };
  return deck;
};
