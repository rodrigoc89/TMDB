const { Router } = require("express");

const Users = require("../models/User");
const { generateToken } = require("../config/tokens");
const { validateAuth } = require("../middleware/auth");
const { passwordValidator } = require("../middleware/validateStrongPw");

const router = Router();

router.post("/register", passwordValidator, async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    const newUser = await Users.create({ name, lastName, email, password });
    console.log(newUser);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(422).send({
      error: "Unprocessable Entity",
      message: "There was a problem creating the user",
      details: error.message,
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ where: { email: email } });
    if (!user)
      return res.status(401).send({
        error: "Unauthorized",
        message: "Invalid credentials",
      });
    const validate = await user.validatePassword(password);
    if (!validate)
      return res.status(401).send({
        error: "Unauthorized",
        message: "Invalid credentials",
      });

    const payload = {
      id: user.id,
      name: user.name,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
    };
    const token = generateToken(payload);
    res.cookie("token", token).send(payload);
  } catch (error) {
    res.status(422).send({
      error: "Unprocessable Entity",
      message: "There was a problem login the user",
      details: error.message,
    });
  }
});

module.exports = router;
