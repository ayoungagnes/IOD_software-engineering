const express = require("express");
const router = express.Router();
const Controllers = require("../Controllers");

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

module.exports = router;