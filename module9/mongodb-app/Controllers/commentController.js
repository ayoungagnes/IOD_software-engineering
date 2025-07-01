"use strict";
let Models = require("../Models");
const createComment = (data, res) => {
  new Models.Comment(data)
    .save()
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};
module.exports = {
  createComment
  
};