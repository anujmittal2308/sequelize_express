const express = require("express");

const app = express();

const port = 3000;
app.use(express.json());
require("dotenv").config();

const { sq } = require("./config/database");
const bcrypt = require("bcryptjs");

const User = require("./routes/User");
app.use("/user", User);

const initApp = async () => {
  console.log("Testing the database connection..");

  const dbconnect = async () => {
    try {
      await sq.authenticate();
      console.log("connected db");
    } catch (error) {
      console.log(error);
    }
  };

  try {
    dbconnect();
    app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error.original);
  }
};

/**
 * Initialize the application.
 */
initApp();
// const port = 3000;

// app.get("/", (req, res) => res.send("Hello World!"));
// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
