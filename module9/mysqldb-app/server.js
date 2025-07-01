const express = require('express');

const app = express();

require('dotenv').config();

let dbConnect = require("./dbConnect");

let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let commentRoutes = require('./routes/commentRoutes');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/mysql/users', userRoutes);

app.use('/api/mysql/posts', postRoutes);

app.use('/api/mysql/comments', commentRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to my MySQL application");
});

app.listen(port, () => {
    console.log("Express JS server launched at port: " + port);
    
})