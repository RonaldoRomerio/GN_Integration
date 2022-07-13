const DateTime = require('tedious/lib/data-types/datetime');
const Pessoa = require('../models/Pessoa');
const PessoaService = require('../services/PessoaService');

module.exports = {
    async insert(req, res) {
        const {nome, cpf, rg, email,
                telefone, endereco} = req.body;
        const pessoaDao = await PessoaService.insert({
            nome_pessoa: nome,
            cpf_pessoa: cpf,
            rg_pessoa: rg,
            email_pessoa: email,
            telefone_pessoa: telefone,
            endereco_cep_pessoa: endereco.cep,
            endereco_rua_pessoa: endereco.rua,
            endereco_numero_pessoa: endereco.numero,
            endereco_bairro_pessoa: endereco.bairro,
            endereco_cidade_pessoa: endereco.cidade,
            endereco_estado_pessoa: endereco.estado,
            endereco_complemento_pessoa: endereco.complemento,
        })
        return (res.json({
            "pessoa": pessoaDao
        }))
    },
    async update(req, res) {
        const {id, nome, cpf, rg, email,
                telefone, endereco} = req.body;

        const pessoaDao = await PessoaService.update({
            id: id,
            nome_pessoa: nome,
            cpf_pessoa: cpf,
            rg_pessoa: rg,
            email_pessoa: email,
            telefone_pessoa: telefone,
            endereco_cep_pessoa: endereco.cep,
            endereco_rua_pessoa: endereco.rua,
            endereco_numero_pessoa: endereco.numero,
            endereco_bairro_pessoa: endereco.bairro,
            endereco_cidade_pessoa: endereco.cidade,
            endereco_estado_pessoa: endereco.estado,
            endereco_complemento_pessoa: endereco.complemento,
        });

        return (res.json({
            "pessoa": pessoaDao
        }))
    },
    async selectAll(req, res) {
        
        const lstPessoas = await PessoaService.selectAll()

        return (res.json({
            "pessoas": lstPessoas
        }))
    },
    async selectOne(req, res) {
        
        const {id} = req.params;

        const pessoaDao = await PessoaService.selectOne(id);
        return (res.json({
            "pessoa": pessoaDao
        }))
    },
    async deleted(req, res) {
        
        const {id} = req.params;

        await PessoaService.deleted(id);

        return (res.json({
            "idPessoa": id
        }))
    }
}