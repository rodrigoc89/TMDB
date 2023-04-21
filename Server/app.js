const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const db = require("./db/index");
const port = 3001;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

db.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);
  });
});

module.exports = app;
