const Fatura = require('../models/Fatura');
const APIGerencianet = require('../API/GerencianetApi');

module.exports = {
    async insert(fatura) {
        let faturaReturn = null;
        const faturaDAO = await Fatura.create(fatura);
        faturaReturn = this.selectOne(faturaDAO.id)
        return faturaReturn
    },
    async selectAll() {
        const lstFaturas = await Fatura.findAll({
            include: {association : 'fatura_pessoa'},
            where:{deleted_at : null}
        });
        return lstFaturas    
    },
    async selectOne(id) {
        const faturaDao = await Fatura.findByPk(id,{
            include: {association : 'fatura_pessoa'}
        });
        return faturaDao;
    },
    async deleted(id) {

        const FaturaDao = await Fatura.findByPk(id);

        FaturaDao.deleted_at = Date.now();

        FaturaDao.save();

        return id;
    }
}