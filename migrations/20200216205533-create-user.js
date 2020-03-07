'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.STRING,
        defaultValue:'user'
      },
      phone: {
        type: Sequelize.STRING,
        allowNull:true
      },
      activated: {
        type: Sequelize.TINYINT,
        defaultValue:0
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull:true
      },
      account_type: {
        type: Sequelize.STRING,
        allowNull:true,
        defaultValue:'standard'
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
    return queryInterface.dropTable('Users');
  }
};
