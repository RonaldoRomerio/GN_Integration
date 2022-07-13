const Pessoa = require('../models/Pessoa');
module.exports = {
    async insert(pessoa) {
        const pessoaDao = await Pessoa.create(pessoa)
        return pessoaDao
    },
    async update(pessoa) {
        const pessoaDao = await Pessoa.findByPk(pessoa.id);

        pessoaDao.set(pessoa)
        pessoaDao.save()

        return pessoaDao
    },
    async selectAll() {
        const lstpessoas = await Pessoa.findAll({
            where:{deleted_at : null}
        });
        return lstpessoas;
    },
    async selectOne(id) {
        const pessoaDao = await Pessoa.findByPk(id);
        return pessoaDao
    },
    async deleted(id) {
        const pessoaDao = await Pessoa.findByPk(id);

        pessoaDao.deleted_at = Date.now();
        pessoaDao.save();

        return id
    }
}