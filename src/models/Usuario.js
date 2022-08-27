const {Model, DataTypes} = require('sequelize')

class Usuario extends Model {
    static init(connection){
        super.init({
            nome_usuario: DataTypes.STRING,
            senha_usuario: DataTypes.STRING,
            email_usuario: DataTypes.STRING,
            deleted_at: DataTypes.DATE,
        },{
            sequelize: connection
        })
    }
}

module.exports = Usuario;