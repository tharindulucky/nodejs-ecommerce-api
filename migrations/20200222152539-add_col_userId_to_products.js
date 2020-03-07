'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Products',
        'userId',
        {
          type: Sequelize.INTEGER,
          allowNull:false,
          after: 'keywords'
        }

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Products',
        'userId'
    );
  }
};
