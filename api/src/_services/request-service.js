const op = require('sequelize').Op;
const { QueryTypes } = require('sequelize');

const requestService = {
    findAll
    
};


async function findAll(db) {
    try {
        let data = {};
        let where = "";
        // for (element in filter) {
        //     let nameField = element;
        //     let valueField = filter[element];
        //     if (valueField.length === 0)
        //         continue;
        //     if (nameField === 'carrier_company') {
        //         where = where + ` ${nameField} like :${nameField} AND`;
        //         data[nameField] = '%' + valueField + '%';
        //     }
        //     else if (nameField === 'request_date_init') {
        //         where = where + ` request_date >= :${nameField} AND`;
        //         data[nameField] = valueField;
        //     }
        //     else if (nameField === 'request_date_end') {
        //         where = where + ` request_date <= :${nameField} AND`;
        //         let date = new Date(valueField);
        //         let endDate = new Date(valueField);
        //         endDate.setDate(date.getDate() + 1);
        //         data[nameField] = endDate;
        //     }
        //     else if (nameField === 'status') {
        //         where = where + ` ${nameField} in (:${nameField}) AND`;
        //         data[nameField] = valueField;
        //     }
        //     else {
        //         where = where + ` ${nameField} = :${nameField} AND`;
        //         data[nameField] = valueField;
        //     }
        // }
      
        let Query = 'SELECT id, name, props FROM ';
        let rows = await db.sequelize.query(Query,
            {
                type: QueryTypes.SELECT
            }
        );
        return rows;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}





// async function findById(id, user, db) {
//     let row = {};
//     try {
//         let msg = "";
//         if (user.claims.find((p => p === 'admin')))
//             row = await db.request.findByPk(id, { raw: true });
//         if (user.claims.find((p => p === 'requester')))
//             row = await db.request.findOne({ raw: true, where: { creator_id: user.sub, id: id } });
//         if (user.claims.find((p => p === 'approver')))
//             row = await db.request.findOne({
//                 raw: true, where: {
//                     [op.or]: [
//                         { creator_id: user.sub },
//                         { approver_id: user.sub }
//                     ], id: id
//                 }
//             });
//         if (user.claims.find((p => p === 'watchman')))
//             row = await db.request.findByPk(id, { raw: true });

//         if (!row)
//             throw ("Requisição não Encontrada");

//         if (user.claims.find(p => p === 'watchman')) {
//             if (row.status === 'Nova')
//                 msg = "Requisição " + id + " ainda não foi aprovada.";
//             else if (row.status === 'Aguardando Aprovação')
//                 msg = "Requisição " + id + " aguardando aprovação.";
//             else if (row.status === 'Aprovada' && new Date(row.approval_validity) < Date.now())
//                 msg = "Aprovação da requisição " + id + " Expirou.";
//             else if (row.status === 'Reprovada')
//                 msg = "Requisição " + id + " foi reprovada.";
//             else if (row.status === 'Saída Aprovada')
//                 msg = "A saída da requisição " + id + " já foi aprovada anteriormente.";
//             else if (row.status === 'Saída não Aprovada')
//                 msg = "A saída da requisição " + id + " já foi reprovada anteriormente.";
//             if (msg !== "")
//                 throw (msg);
//         }

//         return row;
//     }
//     catch (error) {
//         throw (error);
//     }
// }

module.exports = requestService;