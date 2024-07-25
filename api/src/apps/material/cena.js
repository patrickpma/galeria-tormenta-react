const router = require('express').Router();

router.get('/v1/cena/', async function (req, res, next) {
    try {

        const rows = await req.db.Cena.findAll();

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/adventure/:id', async function (req, res, next) {
    try {

        const rows = await req.db.Cena.findByPk(req.params.id);

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/cena/', async function (req, res, next) {
    const { nome, titulo, descricao,notas } = req.body.data;
    try {
        let cena = {
            nome: nome,
            titulo: titulo,
            descricao: descricao,
            notas: notas
        };
        await req.db.Cena.create(cena);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});


router.put('/v1/cena/:id', async function (req, res, next) {
    const { nome, titulo, descricao, notas } = req.body.data;
    try {
        const row = await req.db.Cena.findByPk(req.params.id);
        row.nome = nome;
        row.titulo = titulo;
        row.descricao = descricao;
        row.notas = notas;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/cena/:id', async function (req, res, next) {
    try {
        await req.db.Cena.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;