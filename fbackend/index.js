const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const dbConfig = require("./config/dbConfig");


app.use(express.json());
app.use("/user", userRoutes);
dbConfig();


app.get("/", (req, res) => {
  res.send("Hello, World!");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});