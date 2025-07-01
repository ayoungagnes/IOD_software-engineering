const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

let users = {};
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.emit("update user list", Object.values(users));

  socket.on("input name", (nickname) => {
    users[socket.id] = nickname;

    socket.broadcast.emit("new user", {
      nickname: nickname,
      text: "has joined the chat",
    });

    io.emit("update user list", Object.values(users));
  });

  socket.on("chat message", (msg) => {
    const sender = users[socket.id] || "Unknown";

    socket.broadcast.emit("chat message", `${sender}: ${msg}`);
  });

  socket.on("typing", () => {
    const user = users[socket.id];
    socket.broadcast.emit("user typing", `${user}`);
  });

  socket.on("stop typing", () => {
    socket.broadcast.emit("not typing");
  });

  socket.on("disconnect", () => {
    const nickname = users[socket.id];
    if (nickname) {
      socket.broadcast.emit("user left", `${nickname} has left the chat`);
    }
    delete users[socket.id];
    io.emit("update user list", Object.values(users));
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
