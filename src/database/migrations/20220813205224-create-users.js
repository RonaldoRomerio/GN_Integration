'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senha_usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
