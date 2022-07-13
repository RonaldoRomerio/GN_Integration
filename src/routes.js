const express = require('express');
const PessoaController = require('./controllers/pessoaController')
const FaturaController = require('./controllers/FaturaController')

const routes = express.Router();

//rotas de pessoa
routes.get('/pessoa', PessoaController.selectAll)
routes.post('/pessoa', PessoaController.insert)
routes.put('/pessoa', PessoaController.update)
routes.get('/pessoa/:id', PessoaController.selectOne)
routes.patch('/pessoa/:id', PessoaController.deleted)

//Rotas de faturas
routes.get('/fatura', FaturaController.selectAll)
routes.post('/fatura', FaturaController.insert)
routes.get('/fatura/:id', FaturaController.selectOne)
routes.patch('/fatura/:id', FaturaController.deleted)
module.exports = routes;