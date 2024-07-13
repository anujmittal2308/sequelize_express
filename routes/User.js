const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const { where } = require("sequelize");

router.post("/register", async (req, res) => {
  const user_data = req.body;
  const chek1 = await User.findOne({ where: { username: user_data.username } });
  const chek2 = await User.findOne({ where: { email: user_data.email } });
  if (chek1 || chek2) res.status(409).send({ message: "user alrady register" });
  console.log(user_data);
  if (user_data.password != user_data.confirmpassword)
    res.status(409).send({ message: " password dose not match" });

  // req.session.randomNumber = randomNum;
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

  user_data.password = secPass;

  console.log(user_data);
  const newUser = await User.create(user_data);

  res.status(200).send({ message: " ok", newUser });
});

module.exports = router;
