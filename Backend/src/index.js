const express = require("express");
const cors = require("cors");
const dbConfig = require("./config/dbConfig");
const router = require("./routes");
const corsOption = require("./config/corsOption");

const app = express();

const port = 9000;
app.use(express.json());
app.use(cors(corsOption));
app.use("/api", router);

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello world!",
    link: "https://team-blog-post-website-dlp4.vercel.app/api/v1/blogs",
  });
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  await dbConfig();
});

module.exports = app;
