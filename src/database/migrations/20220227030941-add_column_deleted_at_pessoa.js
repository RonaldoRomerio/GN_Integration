'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'pessoas',
      'deleted_at',
      {
        type: Sequelize.DATE
      }
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'pessoas',
      'deleted_at'
    )
  }
};
