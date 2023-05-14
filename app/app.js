"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

io.on("connection", (socket) => {
    socket.on("chatting", (chat_data) => {
        console.log(chat_data);
        io.emit("chatting", chat_data);
    });
});



app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드
 
module.exports = server; 
