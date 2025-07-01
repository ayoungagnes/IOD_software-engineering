const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

// Get all posts
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

// Create a new post
router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});

// Like a post
router.patch("/:id/like", (req, res) => {
  const postId = req.params.id;
  const userId = req.body.userId;
  Controllers.postController.likePost(postId, userId, res);
});


module.exports = router;
