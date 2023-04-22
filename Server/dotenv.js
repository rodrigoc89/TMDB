require("dotenv").config({ path: "../.env" });

const requiredEnvs = ["SECRET"];

requiredEnvs.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Missing env variable ${env}`);
  }
});

module.exports = process.env;
