const mongoose = require("mongoose");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    descrition: {
      type: String,
      // required: true,
    },
    image: String,
    rating: String,
    tag: [{ type: String }],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  {
    timestamps: true,
  }
);
exports.Blog = mongoose.model("Blogs", blogSchema);
