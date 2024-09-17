const User = require("../models/users.Model");

class UserController {
  static async index(req, res) {}
  static async store(req, res) {
    const data = req.body;
    const email = data.email;
    if (!email || !data.phoneNumber || !data.password)
      return res
        .status(400)
        .json({ message: "Email, phone number, and password are required" });

    try {
      const isUser = await User.findOne({ email: data?.email });
      console.log("user payload: ", isUser);
      if (isUser)
        return res.status(400).json({ message: `${email} is already token!` });

      const user = new User(req.body,);
      await user.save();
      res.status(201).json({ message: "User created success", user: user });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {}
  static async delete(req, res) {}
  static async getSingle(req, res) {}
}

module.exports = UserController;
