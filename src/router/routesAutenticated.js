const express = require('express');
const authMiddleware = require('../middlewares/Auth')

const PessoaController = require('../controllers/pessoaController')
const FaturaController = require('../controllers/FaturaController')
const routes = express.Router();
routes.use(authMiddleware);

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

//Rotas de usuários
routes.post('/usuario', userController.insert)
module.exports = routes;