const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/register", (req, res) => {
  const user_data = req.body;
  if (user_data.password != user_data.confirm_password)
    res.status(409).send({ message: " password dose not match" });
  User.create;
  var sql =
    "INSERT INTO User (username,password,email,firstName,lastName) VALUES (user_data.username,user_data.password,user_data.email,user_data.firstName,user_data.lastName)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

module.exports = router;
