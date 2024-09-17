const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../controllers/userController");

// POST route to create a user
router.post("/", createUser);

// GET route to get a user by ID
router.get("/:id", );
router.get("/users", getUser);

module.exports = router;
