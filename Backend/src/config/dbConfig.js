const { connect } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

async function dbConfig() {
  try {
    await connect(process.env.MongodbURL);
    console.log("Database connection successfully");
  } catch (error) {
    console.log("fail to connect db");
    console.error(error);
  }
}

module.exports = dbConfig;
