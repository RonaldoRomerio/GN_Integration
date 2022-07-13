const {Model, DataTypes} = require('sequelize')

class Fatura extends Model {
    static init(connection){
        super.init({
            valor_fatura: DataTypes.FLOAT,
            desconto_fatura: DataTypes.FLOAT,
            data_vencimento_fatura: DataTypes.DATEONLY,
            descricao_fatura: DataTypes.STRING,
            deleted_at: DataTypes.DATE
        },{
            sequelize: connection
        })
    }
    static associate(models){
        this.belongsTo(models.Pessoa, {foreignKey: 'id_pessoa', as: 'fatura_pessoa'})
    }
}

module.exports = Fatura;