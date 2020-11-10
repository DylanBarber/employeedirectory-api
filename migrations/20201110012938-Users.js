'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const {DataTypes} = Sequelize

    return queryInterface.createTable('Users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING(),
        unique: true
      },
      firstName: {
        type: DataTypes.STRING(),
      },
      lastName: {
        type: DataTypes.STRING(),
      },
      active: {
        type: DataTypes.BOOLEAN(),
      },
      password: DataTypes.STRING(),
      deletedAt: DataTypes.DATE()
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
