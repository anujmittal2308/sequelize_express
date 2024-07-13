const Sequelize = require("sequelize");
const config_data = require("./config_data");
const sequelize = new Sequelize(
  config_data.development.database,
  config_data.development.username,
  config_data.development.password,
  config_data.development.type
);

module.exports = { sq: sequelize };
