const Fatura = require('../models/Fatura');
const APIGerencianet = require('../API/GerencianetApi');

module.exports = {
    async insert(fatura) {
        const faturaDAO = await Fatura.create(fatura);
        return faturaDAO
    },
    async selectAll() {
        const lstFaturas = await Fatura.findAll({
            include: {association : 'fatura_pessoa'},
            where:{deleted_at : null}
        });
        return lstFaturas    
    },
    async selectOne() {
        const {id} = req.params;

        const faturaDao = await Fatura.findByPk(id);
        return faturaDao;
    },
    async deleted(id) {

        const FaturaDao = await Fatura.findByPk(id);

        FaturaDao.deleted_at = Date.now();

        FaturaDao.save();

        return id;
    }
}