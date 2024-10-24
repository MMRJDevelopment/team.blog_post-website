const express = require("express");
const blogController = require("../../controllers/blogController");
const path = require("path");

const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use path.resolve to get the absolute path to the uploads folder
    cb(null, path.resolve(__dirname, "../../uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".").pop(); // Get the file extension
    cb(null, `${file.fieldname}-${uniqueSuffix}.${fileExtension}`);
  },
});

const upload = multer({ storage: storage });

router.post("/blog", upload.single("image"), blogController.store);
router.get("/blogs", blogController.index);
router.get("/blogs/:id", blogController.index_single);

module.exports = router;
