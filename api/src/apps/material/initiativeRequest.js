const router = require('express').Router();


router.get('/v1/initiative/', async function (req, res, next) {
    try {

        const rows = await req.db.Initiative.findAll();

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/initiative/:id', async function (req, res, next) {
    try {

        const rows = await req.db.Initiative.findByPk(req.params.id);

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.post('/v1/initiative/', async function (req, res, next) {
    const { name, value } = req.body.data;
    try {
        let monster = {
            name: name,
            value: value
        };
        await req.db.Initiative.create(monster);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/initiative/:id', async function (req, res, next) {
    try {
        await req.db.Initiative.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/initiative/', async function (req, res, next) {
    try {
        const rows = await req.db.Initiative.findAll();

        for (let index = 0; index < rows.length; index++) {
            const element = rows[index];
            await req.db.Initiative.destroy({ where: { id: element.id } });
        }

        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
module.exports = router;