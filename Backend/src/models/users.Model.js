const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: Number,
    password: String,
    profileImage: String,
    address: String,
    city: String,
    postCode: String,
    division: String,
    district: String,
    tagProfile: [{ type: String }],
    role: {
      type: String,
      default: "users",
      enum: ["users", "admin"],
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    token: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
