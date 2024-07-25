module.exports = (sequelize, Sequelize) => {
    const Cena = sequelize.define("cenas", {
        id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        aventuraId: { type: Sequelize.INTEGER, allowNull: false },
        titulo: { type: Sequelize.STRING(50), allowNull: false },
        descricao: { type: Sequelize.STRING(10000), allowNull: false },
        notas: { type: Sequelize.STRING(10000), allowNull: false }
    }
    );

    Cena.associate = models => {
        Cena.belongsTo(models.Aventura, { foreignKey: 'aventuraId' });
      };

    return Cena;
};
