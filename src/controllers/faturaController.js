const Fatura = require('../models/Fatura');
const APIGerencianet = require('../API/GerencianetApi');
const FaturaService = require('../services/FaturaService')

module.exports = {
    async insert(req, res) {
        const {idPessoa, valor, desconto, vencimento, descricao} = req.body;
        let vencimentoFormatado = validarData(vencimento);
        const faturaDAO = await FaturaService.insert({
            id_pessoa: idPessoa,
            valor_fatura: valor,
            desconto_fatura: desconto,
            data_vencimento_fatura: vencimentoFormatado,
            descricao_fatura: descricao
        })
        return (res.json({
            "fatura": faturaDAO
        }))
    },
    async selectAll(req, res) {
        const lstFaturas = await FaturaService.selectAll()

        return (res.json({
            "faturas": lstFaturas
        }))
    },
    async selectOne(req, res) {
        const {id} = req.params;

        const faturaDao = await FaturaService.selectOne(id);
        return (res.json({
            "fatura": faturaDao
        }))
    },
    async deleted(req, res) {
        const {id} = req.params;

        const FaturaDao = await FaturaService.deleted(id);

        return (res.json({
            "idFatura":id
        }))
    }
}
function validarData(data){
    let dataCompleta = data.split('/');
    return new Date(dataCompleta[2], dataCompleta[1], dataCompleta[0])
}