const express = require("express");
const router = express.Router();
const authRouter = require("./users");
const blog = require("./blog");
router.use("/", authRouter);
router.use("/", blog);
module.exports = router;
