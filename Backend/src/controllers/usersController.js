const { User } = require("../models/users.Model");


class UsersController {
  /**
   * METHOD: POST
   * API: /api/v1/users
   * ACCESS: USER | SUPER_ADMIN
   */
  static async store(req, res) {
    try {
      const newUser = new User({ ...req.body });
      await newUser.save();

      return res.status(204).send({
        message: "Success create user",
        post: newPost,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UsersController;
