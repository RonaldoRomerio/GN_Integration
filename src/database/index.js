const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const pessoa = require('../models/Pessoa');

const connection = new Sequelize(dbConfig);

pessoa.init(connection);

module.exports = connection;