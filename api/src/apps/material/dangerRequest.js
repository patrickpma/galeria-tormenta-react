const router = require('express').Router();

router.get('/v1/danger/', async function (req, res, next) {
    try {

        const rows = await req.db.Danger.findAll();

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/danger/:id', async function (req, res, next) {
    try {

        const rows = await req.db.Danger.findByPk(req.params.id);

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/danger/', async function (req, res, next) {
    const { name, description, effect ,action, success, damage } = req.body.data;
    try {
        let monster = {
            name: name,
            description: description,
            effect: effect,
            action: action,
            success: success,
            damage: damage,
            active: 1
        };
        await req.db.Danger.create(monster);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/danger/success/:id', async function (req, res, next) {
    const { success } = req.body;
    try {
        const row = await req.db.Danger.findByPk(req.params.id);
        row.success = row.success + success;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/danger/:id', async function (req, res, next) {
    const { name, description, effect ,action, success, damage } = req.body.data;
    try {
        const row = await req.db.Danger.findByPk(req.params.id);
        row.name = name;
        row.description = description;
        row.effect = effect;
        row.action = action;
        row.success = success;
        row.damage = damage;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/danger/:id', async function (req, res, next) {
    try {
        const row = await req.db.Danger.findByPk(req.params.id);
        row.active = 0;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;