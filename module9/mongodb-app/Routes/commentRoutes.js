const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res);
});

module.exports = router;
