'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('faturas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      id_pessoa: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'pessoas', key:'id'}
      },
      valor_fatura: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      desconto_fatura: {
        type: Sequelize.FLOAT,
      },
      data_vencimento_fatura: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      descricao_fatura: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('faturas');
  }
};
