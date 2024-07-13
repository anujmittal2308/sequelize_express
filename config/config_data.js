require("dotenv").config();

module.exports = {
  development: {
    database: "test_sequelize",
    username: "root",
    password: "MySql@2308",
    type: {
      host: "127.0.0.1",
      dialect: "mysql",
    },
  },
};
