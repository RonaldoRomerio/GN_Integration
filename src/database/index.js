const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Pessoa = require('../models/Pessoa');
const Fatura = require('../models/Fatura');
const Usuario = require('../models/Usuario');

const connection = new Sequelize(dbConfig);

Pessoa.init(connection);
Fatura.init(connection);
Usuario.init(connection);

Fatura.associate(connection.models);
Pessoa.associate(connection.models);


module.exports = connection;