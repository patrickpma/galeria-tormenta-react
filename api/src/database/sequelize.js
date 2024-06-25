const Sequelize = require("sequelize");

module.exports = (config, dbSync) => {
    let sequelize = null;

    if (config.dialect === "sqlite") {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: `./${config.database}.sqlite`,
            sync: { force: false }
        });
    }
    else {
        sequelize = new Sequelize(config.database, config.username, config.password, {
            dialect: config.dialect,
            host: config.host,
            port: config.port
        });
    }

    const db = {
        Sequelize: Sequelize,
        sequelize: sequelize
    };

    //models
    db.User = require('./models/user')(sequelize, Sequelize);
    db.Hero = require('./models/hero')(sequelize, Sequelize);
    db.Item = require('./models/item')(sequelize, Sequelize);

    if (dbSync)
        db.sequelize.sync();
    // else
    //     db.sequelize.sync({ force: true }).then(() => {
    //         console.log("Drop and re-sync db.");
    //     });

    return db;
}