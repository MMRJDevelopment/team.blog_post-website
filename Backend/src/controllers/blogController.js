const { Blog } = require("../models/blogs.Model");

class blogController {
  static async index(req, res) {
    const allBlogs = await Blog.find({});
    res.send(allBlogs);
  }
  static async store(req, res) {
    const { title, descrition, image, rating, tag, author } = req.body;
    // if (!data.title || !data.descrition || !data.imageUrl)
    //   return res
    //     .status(400)
    //     .json({ message: "Title, Descrition, and Image are required" });

    try {
      const newBlog = new Blog({
        title,
        descrition,
        image: `http://localhost:9000/uploads/${req.file.filename}`,
        rating,
        tag,
        author,
      });
      await newBlog.save();
    } catch (error) {
      console.log(error);
    }
  }
  static async update(req, res) {}
  static async delete(req, res) {}
}

module.exports = blogController;
