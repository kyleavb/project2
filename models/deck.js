'use strict';
module.exports = (sequelize, DataTypes) => {
  var deck = sequelize.define('deck', {
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    up: DataTypes.INTEGER,
    down: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    cards: DataTypes.STRING
  }, {});
  deck.associate = function(models) {
    // associations can be defined here
  };
  return deck;
};
