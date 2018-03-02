'use strict';
module.exports = (sequelize, DataTypes) => {
  var favcard = sequelize.define('favcard', {
    cardId: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    cardName: DataTypes.STRING
  }, {});
  favcard.associate = function(models) {
    // associations can be defined here
  };
  return favcard;
};