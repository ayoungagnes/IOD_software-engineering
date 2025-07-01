"use strict";
let Models = require("../Models");

// Get all posts
const getPosts = (res) => {
  Models.Post.find()
    .populate("userId", "firstName lastName email")
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Create a new post
const createPost = (data, res) => {
  console.log("Creating post:", data);
  new Models.Post(data)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Like a post (by user ID)
const likePost = (postId, userId, res) => {
  Models.Post.findByIdAndUpdate(
    postId,
    { $addToSet: { likes: userId } }, // avoids duplicates
    { new: true }
  )
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

module.exports = {
  getPosts,
  createPost,
  likePost,
};
