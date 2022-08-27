const Usuario = require('../models/Usuario');
module.exports = {
    async insert(user) {
        const UserDao = await Usuario.create(user)
        return UserDao
    },
    async existUser(nome) {
        const contador = await Usuario.count({where : {nome_usuario: nome}});
        return (contador != 0 ? false : true)
    },
    async findUser(nome) {
        const userDao = await Usuario.findOne({where : {nome_usuario: nome}});
        return userDao
    }
}