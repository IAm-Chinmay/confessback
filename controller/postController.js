const Post = require("../models/postModel");

exports.getPost = async (req, res) => {
  try {
    const users = await Post.find({ year: req.query.year });
    res.send({ post: users });
  } catch (e) {
    console.log(e);
  }
};

exports.sendPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
  } catch (err) {
    res.status(400).send(err);
  }
  res.send({ message: "Done" });
};
