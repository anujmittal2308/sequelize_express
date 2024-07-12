/**
 * Import Sequelize.
 */

const Sequelize = require("sequelize");
const config_data = require("./config_data");
/**
 * Create a Sequelize instance. This can be done by passing
 * the connection parameters separately to the Sequelize constructor.
 */

const sequelize = new Sequelize(config_data.development);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected succefully");
  } catch (error) {
    //ensure you created the database
    //check database credentials
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
/**
 * Export the Sequelize instance. This instance can now be
 * used in the app.js file to authenticate and establish a database connection.
 */
module.exports = sequelize;
