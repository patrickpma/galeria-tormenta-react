const bcrypt = require('bcryptjs');
const op = require('sequelize').Op;
const router = require('express').Router();
const authorize = require('../../_middleware/authorize');
const userService = require('../../_services/user-service');

router.get('/v1/users/', authorize(), async function (req, res, next) {
    try {
        const { offset, name, limit, perfil } = req.query;
        let rows = [];

        if (req.user.claims.find((p => p === 'admin')))
            rows = await userService.obterTodos(req.db, name, perfil, offset, limit);
        else
            rows = await userService.obterAprovadores(req.db, name, req.user.sub);
        res.status(200).send({ success: true, data: rows.map(m => { return { ...m, password: "" } }) });
    } catch (error) {
        next(error);
    }
});


router.get('/v1/users/:id', authorize(), async function (req, res, next) {
    try {
        const row = await req.db.user.findByPk(req.params.id, { raw: true });
        res.status(200).send({ success: true, data: { ...row, password: "" } });
    } catch (error) {
        next(error);
    }
});


router.post('/v1/users/', authorize('admin.user.manager'), async function (req, res, next) {
    let { name, username, email, password, registration, company, group_id, perfil } = req.body;
    password = password ? await bcrypt.hash(password, 10) : "";

    try {
        const row = await req.db.user.findOne({ raw: true, where: { username: username } });

        if (row === null) {
            req.db.user.create({
                name: name,
                email: email,
                username: username,
                password: password,
                company: company,
                registration: registration,
                group_id: group_id,
                active: true,
                perfil: perfil
            });

            res.status(200).json({ success: true });
        } else {
            res.status(400).json({ success: false, message: 'cpf/username já cadatrado!' });
        }
    } catch (error) {
        next(error);
    }
});

router.put('/v1/users/:id', async function (req, res, next) {
    try {
        const { name, username, email, password, registration, company, group_id, active, perfil } = req.body;
        let row = await req.db.user.findByPk(req.params.id);

        if (row === null)
            throw new Error('Usuário não encontrado!');

        row.name = name;
        row.email = email;
        row.password = password ? password : row.password;
        row.username = username;
        row.company = company;
        row.registration = registration;
        row.group_id = group_id;
        row.active = active;
        row.perfil = perfil;

        if (password)
            row.password = await bcrypt.hash(password, 10);

        row.save();

        res.status(200).json({ success: true });
    } catch (error) {
        next(error);
    }
});

router.delete('/v1/users/:id', authorize('admin.user.manager'), authorize('admin.user.manager'), async function (req, res, next) {
    try {
        await req.db.user.destroy({ where: { id: req.params.id } });
        res.status(200).send({ success: true });
    } catch (error) {
        next(error);
    }
});
router.patch('/v1/users/', authorize(), async function (req, res, next) {
    let { actualPassword, newPassword } = req.body;
    const creator_id = req.user.sub;
    try {
        let user = await req.db.user.findByPk(creator_id);
        if (!(await bcrypt.compare(actualPassword, user.password)))
            throw ("Senha atual incorreta!");
        let encriptNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = encriptNewPassword;
        user.save();
        res.status(200).json({ success: true });
    } catch (error) {
        next(error);
    }

});

module.exports = router;