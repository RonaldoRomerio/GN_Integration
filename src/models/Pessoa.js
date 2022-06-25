const {Model, DataTypes} = require('sequelize')

class Pessoa extends Model {
    static init(connection){
        super.init({
            nome_pessoa: DataTypes.STRING,
            cpf_pessoa: DataTypes.STRING,
            rg_pessoa: DataTypes.STRING,
            email_pessoa: DataTypes.STRING,
            telefone_pessoa: DataTypes.STRING,
            endereco_cep_pessoa: DataTypes.STRING,
            endereco_rua_pessoa: DataTypes.STRING,
            endereco_numero_pessoa: DataTypes.INTEGER,
            endereco_bairro_pessoa: DataTypes.STRING,
            endereco_cidade_pessoa: DataTypes.STRING,
            endereco_estado_pessoa: DataTypes.STRING,
            endereco_complemento_pessoa: DataTypes.STRING,
            deleted_at: DataTypes.DATE,
        },{
            sequelize: connection
        })
    }

    static associate(models){
        this.hasMany(models.Fatura, {foreignKey: 'id_pessoa', as: 'pessoa_faturas'})
    }
}

module.exports = Pessoa;