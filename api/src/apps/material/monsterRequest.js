const router = require('express').Router();

router.get('/v1/monster/', async function (req, res, next) {
    try {

        const rows = await req.db.Monster.findAll();

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/monster/', async function (req, res, next) {
    const { name, props, pv, pm } = req.body.data;
    try {
        let monster = {
            name: name,
            props: props,
            pv: pv,
            pm: pm,
            discarted: 0,
            available_initiative: 0
        };
        await req.db.Monster.create(monster);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/monster/mana/:id', async function (req, res, next) {
    const { mana } = req.body;
    try {
        const row = await req.db.Monster.findByPk(req.params.id);
        row.pm = row.pm + mana;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});


router.put('/v1/monster/life/:id', async function (req, res, next) {
    const { life } = req.body;
    try {
        const row = await req.db.Monster.findByPk(req.params.id);
        row.pv = row.pv + life;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.patch('/v1/monster/:id', async function (req, res, next) {
    const { life } = req.body;
    try {
        const row = await req.db.Monster.findByPk(req.params.id);
        row.available_initiative = (row.available_initiative === 0) ? 1 : 0;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/monster/:id', async function (req, res, next) {
    const { name, props, pv ,pm } = req.body.data;
    try {
        const row = await req.db.Monster.findByPk(req.params.id);
        row.name = name;
        row.props = props;
        row.pv = pv;
        row.pm = pm;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/monster/:id', async function (req, res, next) {
    try {
        const row = await req.db.Monster.findByPk(req.params.id);
        row.discarted = 1;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;