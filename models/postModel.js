const mongoose = require("mongoose");

const postScheme = new mongoose.Schema({
  title: String,
  story: String,
  year: Number,
});

const Post = mongoose.model("Post", postScheme);

module.exports = Post;
