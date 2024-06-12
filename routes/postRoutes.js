const express = require("express");
const router = express.Router();

const postController = require("../controller/postController");

router.get("/", postController.getPost);
router.post("/", postController.sendPost);

module.exports = router;
