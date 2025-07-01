const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");
// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
  Controllers.postController.getPosts(res);
});

router.post("/create", (req, res) => {
  Controllers.postController.createPost(req.body, res);
});


module.exports = router;
