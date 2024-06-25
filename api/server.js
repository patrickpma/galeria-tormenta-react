require('dotenv').config();
const logger = require('./logger.js');
const config = require('./config.json');
const PORT = process.env.PORT || 8088;

//config database
const database = require('./src/database/sequelize.js')(config.database, config.dbSync);
logger.info(`Database loaded.`);

//load routes
const app = require('./src/createApp')({ database, logger, config });
logger.info(`Routes loaded.`);

app.get("/", (req, res) => {
  res.json({ message: "Tormenta API." });
});

app.listen(PORT, () => {
  logger.info(`Tormenta API is running on port ${PORT}.`);
  console.log(`Tormenta API is running on port ${PORT}.`);
});