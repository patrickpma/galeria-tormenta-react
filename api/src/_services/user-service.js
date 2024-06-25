const op = require('sequelize').Op;

const userService = {
    obterAprovadores,
    obterTodos
};

async function obterTodos(db, name, perfil = '', offset = 0, limit = 10000) {
    try {
        let rows = [];
        if (perfil === '')
            rows = await db.user.findAll({
                raw: true,
                where: { name: { [op.like]: `%${name || ''}%` } },
                offset: offset,
                limit: limit
            });
        else
            rows = await db.user.findAll({
                raw: true,
                where: { name: { [op.like]: `%${name || ''}%` }, perfil: perfil }
            });
        return rows;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}

async function obterAprovadores(db, name, id) {
    try {
        let rows = await db.user.findAll({
            raw: true,
            where: { name: { [op.like]: `%${name || ''}%` }, perfil: 'approver', id: { [op.ne]: id }, active: 1 }
        });
        return rows;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}

module.exports = userService;