'use strict';
module.exports = (sequelize, DataTypes) => {
  var deck = sequelize.define('deck', {
    name: DataTypes.STRING,
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER,
    cards: DataTypes.ARRAY(DataTypes.STRING),
    cardName: DataTypes.ARRAY(DataTypes.STRING),
    cardUrl: DataTypes.ARRAY(DataTypes.STRING),
    posted: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
    models.deck.hasMany(models.post);
  };
  return deck;
};
