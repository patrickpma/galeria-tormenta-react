
const router = require('express').Router();

router.get('/v1/hero/', async function (req, res, next) {
    try {

        const rows = await req.db.Hero.findAll();

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/hero_and_monster/', async function (req, res, next) {
    try {

        const { Op } = require('sequelize');

        const heros = await req.db.Hero.findAll();
        const monsters = await req.db.Monster.findAll({
            where: {
                discarted: 0, available_initiative: 1
            }
        });

        res.status(200).send({ success: true, data: { heros, monsters } });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/item/', async function (req, res, next) {
    try {
        const rows = await req.db.Item.findAll();
        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/request/:id', async function (req, res, next) {
    let msg = "";
    try {
        const row = await requestService.findById(req.params.id, req.user, req.db);

        row.materials = row.materials ? JSON.parse(row.materials) : [];
        if (row.approver_id) {
            let approver = await req.db.user.findByPk(row.approver_id, { raw: true });
            row.approval_name = approver.name;
        }
        if (row.watchman_id) {
            let watchman = await req.db.user.findByPk(row.watchman_id, { raw: true });
            row.watchman_name = watchman.name;
        }
        res.status(200).send({ success: true, data: row });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/hero/:id', async function (req, res, next) {
    try {
        const row = await req.db.Hero.findByPk(req.params.id);
        row.props = req.body.data.data;
        row.vantagens = req.body.data.vantagens;
        row.desvantagens = req.body.data.desvantagens;
        row.pericias = req.body.data.pericias;
        row.armas = req.body.data.armas;
        row.magias = req.body.data.magias;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/hero/life/:id', async function (req, res, next) {
    const { life } = req.body;
    try {
        const row = await req.db.Hero.findByPk(req.params.id);
        let x = JSON.parse(row.props);
        x.atualPV = x.atualPV + life;
        row.props = JSON.stringify(x);
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/hero/mana/:id', async function (req, res, next) {
    const { mana } = req.body;
    try {
        const row = await req.db.Hero.findByPk(req.params.id);
        let x = JSON.parse(row.props);
        x.atualPM = x.atualPM + mana;
        row.props = JSON.stringify(x);
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/item/:id', async function (req, res, next) {
    try {
        const row = await req.db.Item.findByPk(req.params.id);
        if (row.quantity === 1) {
            await req.db.Item.destroy({ where: { id: req.params.id } });
        }
        else {
            row.quantity -= 1;
            row.save();
        }
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/item/', async function (req, res, next) {
    const { name, description, quantity } = req.body.data;
    try {
        let item = {
            name: name,
            description: description,
            used: 0,
            quantity: quantity
        };
        await req.db.Item.create(item);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});


module.exports = router;