module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("security_users", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    name: { type: Sequelize.STRING(150), allowNull: false },
    email: { type: Sequelize.STRING(250), allowNull: false }
  });

  return User;
};
