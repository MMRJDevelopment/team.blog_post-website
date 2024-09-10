const express = require("express");
const router = express.Router();
const authRouter = require('./users')
router.use("/user", authRouter);

module.exports = router;