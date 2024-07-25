module.exports = (sequelize, Sequelize) => {
    const Aventura = sequelize.define("aventura", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        titulo: { type: Sequelize.STRING(150), allowNull: false }
    }
    );

    Aventura.associate = models => {
        Aventura.hasMany(models.Cena, { as: 'cenas', foreignKey: 'aventuraId' });
    };

    return Aventura;
};
