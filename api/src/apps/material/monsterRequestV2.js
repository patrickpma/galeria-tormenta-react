const pericia = require('../../database/models/pericia');

const router = require('express').Router();

router.get('/v2/monster/', async function (req, res, next) {
    try {

        const monsters = await req.db.MonsterV2.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['available_initiative', 'desc'], ['name', 'ASC']
            ]
        });

        res.status(200).send({ success: true, data: monsters });
    } catch (error) {
        next(error);
    }
});

router.get('/v2/monster/combat', async function (req, res, next) {
    try {
        let foo = [];
        const monsters = await req.db.MonsterV2.findAll({
            where: {
                discarted: 0, available_initiative: 1
            }
            , order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['available_initiative', 'desc'], ['name', 'ASC']
            ]
        });

        const init = await req.db.Initiative.findAll();

        for (let index = 0; index < monsters.length; index++) {
            const monster = monsters[index];
            if (init.some(p => p.name === monster.name))
                foo.push(monster);
        }

        res.status(200).send({ success: true, data: foo });
    } catch (error) {
        next(error);
    }
});

router.post('/v2/monster/', async function (req, res, next) {
    const { name, ataques, defesas, descricao, pericias, resistencias, iniciativa, habilidades_especiais, pv, pm, escala } = req.body.data;
    try {
        let monster = {
            name: name,
            ataques: ataques,
            defesas: defesas,
            descricao: descricao,
            resistencias: resistencias,
            iniciativa: iniciativa,
            pericias: pericias,
            habilidades_especiais: habilidades_especiais,
            pv: pv,
            pm: pm,
            escala: escala,
            discarted: 0,
            available_initiative: 0
        };
        await req.db.MonsterV2.create(monster);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v2/monster/mana/:id', async function (req, res, next) {
    const { mana } = req.body;
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.pm = row.pm + mana;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});


router.put('/v2/monster/life/:id', async function (req, res, next) {
    const { life } = req.body;
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.pv = row.pv + life;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.patch('/v2/monster/initiative/:id', async function (req, res, next) {
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.available_initiative = (row.available_initiative === 0) ? 1 : 0;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.patch('/v2/monster/clone/:id', async function (req, res, next) {
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        let monster = {
            name: row.name,
            ataques: row.ataques,
            descricao: row.descricao,
            defesas: row.defesas,
            resistencias: row.resistencias,
            iniciativa: row.iniciativa,
            pericias: row.pericias,
            habilidades_especiais: row.habilidades_especiais,
            pv: row.pv,
            pm: row.pm,
            escala: row.escala,
            discarted: 0,
            available_initiative: row.available_initiative
        };
        await req.db.MonsterV2.create(monster);
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v2/monster/:id', async function (req, res, next) {
    const { name, ataques, defesas, descricao, pericias, resistencias, iniciativa, habilidades_especiais, pv, pm, escala } = req.body.data;
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.name = name;
        row.ataques = ataques;
        row.defesas = defesas;
        row.descricao = descricao;
        row.resistencias = resistencias;
        row.iniciativa = iniciativa;
        row.pericias = pericias;
        row.habilidades_especiais = habilidades_especiais;
        row.pv = pv;
        row.escala = escala
        row.pm = pm;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.patch('/v2/monster/discarted/:id', async function (req, res, next) {
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.discarted = 1;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.patch('/v2/monster/restore/:id', async function (req, res, next) {
    try {
        const row = await req.db.MonsterV2.findByPk(req.params.id);
        row.discarted = 0;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v2/monster/:id', async function (req, res, next) {
    try {

        await req.db.MonsterV2.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });

    } catch (error) {
        next(error);
    }
});
module.exports = router;