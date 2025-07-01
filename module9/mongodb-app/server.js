const express = require("express");
let dbConnect = require("./dbConnect");
require("dotenv").config();
const app = express();

app.use(express.json());

let userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes); 
let postRoutes = require('./Routes/postRoutes');
app.use('/api/posts', postRoutes);
let commentRoutes = require('./Routes/commentRoutes');
app.use('/api/comments', commentRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
