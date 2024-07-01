module.exports = (sequelize, Sequelize) => {
  const Danger = sequelize.define("danger", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING(150), allowNull: false },
    description: { type: Sequelize.STRING(10000), allowNull: true },
    effect: { type: Sequelize.STRING(10000), allowNull: true },
    action: { type: Sequelize.STRING(10000), allowNull: true },
    active: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 1 },
    success: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 3 },
    damage: { type:Sequelize.STRING(150), allowNull: true }
  }
  );

  return Danger;
};
