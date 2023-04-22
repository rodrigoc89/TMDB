const jwt = require("jsonwebtoken");
const secret = require("../config/dotenv").SECRET;

const generateToken = (payload) => {
  const token = jwt.sign({ user: payload }, secret, { expiresIn: "2d" });
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { generateToken, validateToken };
