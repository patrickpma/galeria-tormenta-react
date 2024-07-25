const router = require('express').Router();

router.get('/v1/aventura/', async function (req, res, next) {
    try {

        const rows = await req.db.Aventura.findAll({
            include: [{ model: req.db.Cena, as: 'cenas' }] 
          });

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/aventura/:id', async function (req, res, next) {
    try {

        const rows = await req.db.Aventura.findByPk(req.params.id,{
            include: [{ model: req.db.Cena, as: 'cenas' }] 
          });
        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/aventura/', async function (req, res, next) {
    const { nome, titulo } = req.body.data;
    try {
        let aventura = {
            nome: nome,
            titulo: titulo,
        };
        await req.db.Aventura.create(aventura);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});


router.put('/v1/aventura/:id', async function (req, res, next) {
    const { nome, titulo } = req.body.data;
    try {
        const row = await req.db.Aventura.findByPk(req.params.id);
        row.nome = nome;
        row.titulo = titulo;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/aventura/:id', async function (req, res, next) {
    try {
        await req.db.Aventura.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;