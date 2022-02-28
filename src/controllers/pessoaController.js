const DateTime = require('tedious/lib/data-types/datetime');
const Pessoa = require('../models/Pessoa');

module.exports = {
    async insert(req, res) {
        const {nome, cpf, rg, email,
                telefone, endereco} = req.body
        const pessoaDao = await Pessoa.create({
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
            "status_code":200,
            "data": pessoaDao
        }))
    },
    async update(req, res) {
        const {id, nome, cpf, rg, email,
                telefone, endereco} = req.body;

        const pessoaDao = await Pessoa.findByPk(id);

        pessoaDao.set({
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
        })
        pessoaDao.save()

        return (res.json({
            "status_code":200,
            "data": pessoaDao
        }))
    },
    async selectAll(req, res) {
        
        const lstpessoas = await Pessoa.findAll({
            where:{deleted_at : null}
        });

        return (res.json({
            "status_code":200,
            "data": lstpessoas
        }))
    },
    async selectOne(req, res) {
        
        const {id} = req.params;

        const pessoaDao = await Pessoa.findByPk(id);

        return (res.json({
            "status_code":200,
            "data": pessoaDao
        }))
    },
    async deleted(req, res) {
        
        const {id} = req.params;

        const pessoaDao = await Pessoa.findByPk(id);

        pessoaDao.deleted_at = Date.now();

        pessoaDao.save();

        return (res.json({
            "status_code":200,
            "data":{
                id : id
            }
        }))
    }
}