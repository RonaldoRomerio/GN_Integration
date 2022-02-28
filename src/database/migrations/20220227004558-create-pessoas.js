'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('pessoas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rg_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_cep_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_rua_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_numero_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      endereco_bairro_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_cidade_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_estado_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      endereco_complemento_pessoa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('pessoas');
  }
};
