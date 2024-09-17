const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    fullname:{
        type:String,
        required: true
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    password: String,
    profileImgUrl: String,
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
    // blog: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Blog",
    // },
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
module.exports = mongoose.model("Users", userSchema);
