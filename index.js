const express = require("express");
const bodyparser = require("body-parser");
const { connectDB } = require("./connection");
const cors = require("cors");

const postRoutes = require("./routes/postRoutes");

const app = express();
const port = 3000;
connectDB(
  "mongodb+srv://geobook:diYKg0gd7TGUySs8@cluster0.2wyumqd.mongodb.net/"
);

app.use(bodyparser.json());
app.use(cors());

app.use("/uploads", postRoutes);

app.listen(port, () => {
  console.log("Running on port " + port);
});
