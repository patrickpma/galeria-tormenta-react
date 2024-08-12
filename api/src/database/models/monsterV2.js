module.exports = (sequelize, Sequelize) => {
  const MonsterV2 = sequelize.define("monstersV2", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING(150), allowNull: false },
    ataques: { type: Sequelize.STRING(10000), allowNull: true },
    defesas: { type: Sequelize.STRING(10000), allowNull: true },
    descricao: { type: Sequelize.STRING(10000), allowNull: true },
    pericias: { type: Sequelize.STRING(10000), allowNull: true },
    habilidades_especiais: { type: Sequelize.STRING(10000), allowNull: true },
    resistencias: { type: Sequelize.INTEGER, allowNull: true },
    pv: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 20 },
    pm: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 20 },
    discarted: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
    available_initiative: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
    escala: { type: Sequelize.STRING(10) },
    iniciativa: { type: Sequelize.INTEGER },
  }
  );

  return MonsterV2;
};
