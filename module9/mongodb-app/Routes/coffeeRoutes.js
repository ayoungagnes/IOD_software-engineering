const express = require("express");
const router = express.Router();
const coffee = require("../Controllers/coffeeController");

router.get("/", coffee.list); 
router.get("/:id", coffee.getById); 

module.exports = router;
