const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/v1/auth/', async function (req, res, next) {
    authenticate(req.body.username, req.body.password, req.config, req.db)
        .then(data => {
            res.json({ message: 'success', data: data })
        }).catch(next);
});

module.exports = router;

async function authenticate(username, password, config, db) {
    const user = await db.User.findOne({ raw: true, where: { username: username, active: true } });

    if (user && (await bcrypt.compare(password, user.password))) {
        let group = await db.group.findByPk(user.group_id, { raw: true });

        user.claims = group ? JSON.parse(group.claims) : [];
        user.claims.push(user.perfil);
        
        const token = jwt.sign({ sub: user.id, claims: user.claims }, config.secret, { expiresIn: config.tokenExpiresIn });
        user.token = token;
        delete user.password;

        return user;
    } else {
        throw 'Usuário e/ou senha inválidos';
    }
}