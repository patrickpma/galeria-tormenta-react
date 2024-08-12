
const pericias = require("../json/uso-pericias.json");
const router = require('express').Router();

router.get('/v1/hero/', async function (req, res, next) {
    try {

        const rows = await req.db.Hero.findAll({
            include: [{ model: req.db.Pericia, as: 'pericia' }] 
          });

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/hero/:id', async function (req, res, next) {
    try {

        const rows = await req.db.Hero.findByPk(req.params.id,{
            include: [{ model: req.db.Pericia, as: 'pericia' }] 
          });

        res.status(200).send({ success: true, data: rows });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/hero_and_monster/', async function (req, res, next) {
    try {

        const heros = await req.db.Hero.findAll();
        const monsters = await req.db.MonsterV2.findAll({
            where: {
                discarted: 0, available_initiative: 1
            }
        });

        res.status(200).send({ success: true, data: { heros, monsters } });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/hero_stats', async function (req, res, next) {
    try {

        const totalVida = await req.db.Hero.sum('pvTotal')
        const totalMana = await req.db.Hero.sum('pmTotal')
        const atualVida = await req.db.Hero.sum('pvAtual')
        const atualMana = await req.db.Hero.sum('pmAtual')
        const totalItens = await req.db.Item.sum('quantity')

        res.status(200).send({
            success: true, data: {
                totalVida,
                totalMana,
                atualVida,
                atualMana,
                percentualMana: Math.floor((atualMana * 100) / totalMana),
                percentualVida: Math.floor((atualVida * 100) / totalVida),
                totalItens
            }
        });
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

router.get('/v1/pericia/', async function (req, res, next) {
    try {
        res.status(200).send({ success: true, data: pericias });
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
        let x = JSON.parse(req.body.data.data);
        const row = await req.db.Hero.findByPk(req.params.id);
        row.props = req.body.data.data;
        row.vantagens = req.body.data.vantagens;
        row.desvantagens = req.body.data.desvantagens;
        row.pericias = req.body.data.pericias;
        row.armas = req.body.data.armas;
        row.magias = req.body.data.magias;
        row.pmAtual = x.atualPM;
        row.pvAtual = x.atualPV;
        row.pmTotal = x.totalPM;
        row.pvTotal = x.totalPV;
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/pericia/:id', async function (req, res, next) {
    try {
        const row = await req.db.Pericia.findByPk(req.body.periciaId);
        row.treinada = req.body.treinada;
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
        row.pvAtual = row.pvAtual + life
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
        row.pmAtual = row.pmAtual + mana
        row.props = JSON.stringify(x);
        row.save();
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});

router.put('/v1/hero/xp/:id', async function (req, res, next) {
    const { xp, opperator } = req.body;
    try {
        const row = await req.db.Hero.findByPk(req.params.id);

        if (opperator === 'minus')
            row.xpGasto = row.xpGasto + parseInt(xp);
        else if (opperator === 'plus')
            row.xpTotal = row.xpTotal + parseInt(xp);

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