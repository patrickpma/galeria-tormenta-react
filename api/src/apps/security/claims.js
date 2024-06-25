const router = require('express').Router();

router.get('/v1/claims/', async function (req, res, next) {
    try {
        const claims = [
            {group: 'Admin', name:'Admin', value:'admin.manager'},
            {group: 'Admin', name:'Gerenciar Usuários', value:'admin.user.manager'},
            {group: 'Admin', name:'Gerenciar Grupos', value:'admin.group.manager'},
            {group: 'Request', name:'Criar requisição de saída', value:'request.create'},
            {group: 'Request', name:'Aprovar requisição de saída', value:'request.approve'},
            {group: 'Request', name:'Reprovar requisição de saída', value:'request.reprove'},
            {group: 'Exit', name:'Aprovar saída de material', value:'exit.approve'},
            {group: 'Exit', name:'Reprovar saída de material', value:'exit.reprove'}
        ];
        res.status(200).send({ success: true, data: claims });
    } catch (error) {
        next(error);
    }
});

router.get('/v1/claims/perfil/', async function (req, res, next) {
    try {
        const claims = [
            {group: 'Perfil', name:'Admin', value:'admin'},
            {group: 'Perfil', name:'Solicitante', value:'requester'},
            {group: 'Perfil', name:'Aprovador', value:'approver'},
            {group: 'Perfil', name:'Vigilante', value:'watchman'},
        ];
        res.status(200).send({ success: true, data: claims });
    } catch (error) {
        next(error);
    }
});

module.exports = router;