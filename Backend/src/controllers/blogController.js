const dbConfig = require("../config/dbConfig");
const { Blog } = require("../models/blogs.Model");
const { user } = require("../models/users.Model");
const slugify = require("slugify");

class blogController {
  static async index(req, res) {
    try {
      await dbConfig();
      const allBlogs = await Blog.find({});
      if (!allBlogs)
        return res.status(404).json({
          message: "No blog post create yet",
        });
      return res.status(200).json(allBlogs);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server error",
      });
    }
  }
  static async store(req, res) {
    const { title, descrition, tag } = req.body;

    if (!title || !descrition || !tag)
      return res
        .status(400)
        .json({ message: "Title, Descrition, and Image are required" });

    const createSlug = slugify(title.toLowerCase(), {
      replacement: "-",
    });
    if (!createSlug)
      return res.status(400).json({ message: "Fail to create slug" });

    const isPost = await Blog.findOne({ slug: createSlug });
    if (isPost)
      return res
        .status(400)
        .json({ message: "post is title already exists!", post: isPost });
    const image = req.file.filename; // Access the uploaded file
    try {
      await dbConfig();
      const newBlog = new Blog({
        title,
        slug: createSlug,
        descrition,
        image: `http://localhost:9000/uploads/${image}`,
        rating: 0,
        tag,
        author: null,
      });
      await newBlog.save();

      res
        .status(201)
        .json({ message: "Post created successfully", post: newBlog });
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {}
  static async delete(req, res) {}
  static async index_single(req, res) {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "Prams id not found" });

    try {
      await dbConfig();
      const isPost = await Blog.findOne({ _id: id });
      if (!isPost) return res.status(400).json({ message: "Post not found!" });
      return res.status(200).json(isPost);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = blogController;
