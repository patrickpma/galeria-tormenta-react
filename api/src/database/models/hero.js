module.exports = (sequelize, Sequelize) => {
  const Hero = sequelize.define("hero", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING(150), allowNull: false },
    props: { type: Sequelize.STRING(5000), allowNull: false },
    vantagens: { type: Sequelize.STRING(5000), allowNull: true },
    desvantagens: { type: Sequelize.STRING(5000), allowNull: true },
    pericias: { type: Sequelize.STRING(5000), allowNull: true },
    armas: { type: Sequelize.STRING(5000), allowNull: true },
    magias: { type: Sequelize.STRING(10000), allowNull: true },
    pvAtual: { type: Sequelize.INTEGER, allowNull: false },
    pmAtual: { type: Sequelize.INTEGER, allowNull: false },
    pmTotal: { type: Sequelize.INTEGER, allowNull: false },
    pvTotal: { type: Sequelize.INTEGER, allowNull: false },
    xpTotal: { type: Sequelize.INTEGER, allowNull: true },
    xpGasto: { type: Sequelize.INTEGER, allowNull: true }

  }
  );

  return Hero;
};
