const op = require('sequelize').Op;
const router = require('express').Router();
const authorize = require('../../_middleware/authorize');

router.get('/v1/groups/', authorize('admin.group.manager'), async function (req, res, next) {
    try {
        const rows = await req.db.group.findAll({
            raw: true,
            where: { name: { [op.like]: `%${req.query.name || ''}%` } }
        });

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/groups/:id', authorize('admin.group.manager'), async function (req, res, next) {
    try {
        const row = await req.db.group.findByPk(req.params.id, { raw: true });
        res.status(200).send({ success: true, data: row });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/groups/', authorize('admin.group.manager'), async function (req, res, next) {
    const { name, claims } = req.body;
    try {
        const row = await req.db.group.findOne({ where: { name: name } });

        if (row === null) {
            req.db.group.create({
                name: name,
                claims: claims
            });

            res.status(200).json({ success: true });
        } else {
            res.status(500).json({ success: false, message: 'Já existe um grupo com este nome cadastrado!' });
        }

    } catch (error) {
        next(error);
    }
});

router.put('/v1/groups/:id', authorize('admin.group.manager'), async function (req, res, next) {
    try {
        const { name, claims } = req.body;
        let row = await req.db.group.findByPk(req.params.id);

        if (row === null)
            throw new Error('Usuário não encontrado!');

        row.name = name;
        row.claims = claims;
        row.save();

        res.status(200).json({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/groups/:id', authorize('admin.group.manager'), async function (req, res, next) {
    try {
        await req.db.group.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

module.exports = router;