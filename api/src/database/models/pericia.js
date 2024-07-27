module.exports = (sequelize, Sequelize) => {
    const Pericia = sequelize.define("pericia_heros", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        heroId: { type: Sequelize.INTEGER, allowNull: false },
        nome: { type: Sequelize.STRING(50), allowNull: true },
        somenteTreinada: {  type: Sequelize.BOOLEAN, allowNull: true },
        treinada: {  type: Sequelize.BOOLEAN, allowNull: true }
    }
    );

    return Pericia;
};
