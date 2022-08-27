const UserService = require('../services/UserService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
module.exports = {
    async insert(req, res) {
        const {userName, password, email} = req.body;

        if(!await UserService.existUser(userName)){ 
            return(res.json({
                "error" : 'usuario já existe'
            }))
        }

        const hash = await bcrypt.hash(password, 10);
        const UserDao = await UserService.insert({
            nome_usuario: userName,
            senha_usuario: hash,
            email_usuario: email
        });
        UserDao.senha_usuario = undefined;
        return (res.json({
            "user": UserDao,
            "token": gerarJWT({id : userDao.id})
        }))
    },
    async autenticar(req, res) {
        const {userName, password} = req.body;
        
        const userDao = await UserService.findUser(userName)
        
        
        if(!userDao || !await bcrypt.compare(password, userDao.senha_usuario)){ 
            return(res.json({
                "error" : 'usuario ou senha incorretos'
            }))
        }
        userDao.senha_usuario = undefined;

        return (res.json({
            "user": userDao,
            "token": gerarJWT({id : userDao.id})
        }))
    }
}
function gerarJWT(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}