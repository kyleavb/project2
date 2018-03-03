'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('decks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      upvote: {
        type: Sequelize.INTEGER
      },
      downvote: {
        type: Sequelize.INTEGER
      },
      posted: {
        type: Sequelize.BOOLEAN
      },
      cards: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('decks');
  }
  
};
