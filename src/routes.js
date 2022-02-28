const express = require('express');
const userController = require('./controllers/pessoaController')

const routes = express.Router();

routes.get('/pessoa', userController.selectAll)
routes.post('/pessoa', userController.insert)
routes.put('/pessoa', userController.update)
routes.get('/pessoa/:id', userController.selectOne)
routes.patch('/pessoa/:id', userController.deleted)

module.exports = routes;