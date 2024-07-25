
module.exports = (sequelize, Sequelize) => {
    const Initiative = sequelize.define("initiative", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        name: { type: Sequelize.STRING(150), allowNull: false },
        value: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 1 }
    });

    return Initiative;
};