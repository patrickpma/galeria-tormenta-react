module.exports = (sequelize, Sequelize) => {
  const Monster = sequelize.define("monster", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING(150), allowNull: false },
    props: { type: Sequelize.STRING(10000), allowNull: false },
    pv: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 20 },
    pm: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 20 },
    discarted: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 },
    available_initiative: { type: Sequelize.INTEGER, allowNull: true, defaultValue: 0 }
  }
  );

  return Monster;
};
