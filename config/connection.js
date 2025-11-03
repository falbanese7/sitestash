const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.AIVEN_SERVICE_URI) {
  sequelize = new Sequelize(process.env.AIVEN_SERVICE_URI);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 14228,
    }
  );
}

module.exports = sequelize;
