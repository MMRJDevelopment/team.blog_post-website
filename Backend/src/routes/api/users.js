const express = require("express");
const UserController = require("../../controllers/usersController");

const router = express.Router();

router.post("/users", UserController.store);   

module.exports = router;
