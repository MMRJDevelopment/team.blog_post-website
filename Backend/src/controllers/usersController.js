const User = require("../models/users.Model");
const bcrypt = require("bcrypt");
const dbConfig = require("../config/dbConfig");

class UserController {
  // Handle user login
  static async index(req, res) {
    const { email, password } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    try {
      await dbConfig();
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(404).json({ error: "Email not found" });
      }

      // Compare password
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(401).json({ error: "Invalid password" });
      }

      // Successful login response
      return res.status(200).json({
        message: "Login successful",
        user: existingUser,
        token: null,
      });
      // res.json({
      //   success: true,
      //   message: "Login successful",
      //   email: existingUser.email,
      //   role: existingUser.role,
      // });
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Handle user registration
  static async store(req, res) {
    const { name, email, password } = req.body;

    // Validate input
    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Email, phone number, and password are required" });
    }

    try {
      await dbConfig();
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: `${email} is already taken!` });
      }

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ ...req.body, password: hashedPassword });
      await user.save();

      res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
      console.error("Registration Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  }

  // Additional methods can be implemented as needed
  static async update(req, res) {
    // Implementation for updating user information
  }

  static async delete(req, res) {
    // Implementation for deleting a user
  }

  static async getSingle(req, res) {
    // Implementation for retrieving a single user by ID
  }
}

module.exports = UserController;
