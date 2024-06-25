
module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        name: { type: Sequelize.STRING(150), allowNull: false },
        description: { type: Sequelize.STRING(150), allowNull: false },
        quantity: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 1 },
        used: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
    });

    return Item;
};