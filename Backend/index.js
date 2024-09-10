const express = require("express");
var cors = require("cors");
const dbConfig = require("./src/config/dbConfig");

const router = require("./src/routes");
const app = express();

const port = 9000;
dbConfig();
app.use(router);
app.use(cors());
app.use(express.json());


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
