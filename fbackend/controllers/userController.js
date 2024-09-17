const usersModel = require("../models/users.Model");

// Controller for creating a user
const createUser = async (req, res) => {
   const {
    fullname,
     email,
     phoneNumber,
     password,
     profileImgUrl,
     address,
     city,
     postCode,
     division,
     district,
     tagProfile,
   } = req.body;

   const user = new usersModel({
    fullname,
     email,
     phoneNumber,
     password,
     profileImgUrl,
     address,
     city,
     postCode,
     division,
     district,
     tagProfile,
   });
   user.save()
};

// Controller for getting a user by ID
const getUser = async (req, res) => {
  const users = await usersModel.find({});
  res.send(users);
};

module.exports = { createUser, getUser };
