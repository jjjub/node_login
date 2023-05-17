"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const io = socketIO(server);
const moment = require("moment");
const session = require('express-session');
const MySQLStore = require("express-mysql-session")(session);

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname+'/src/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// app.use(session({
//     secret :"addsad",
//     resave : false,
//     saveUninitialized : true, 세션 작업중
//     store : sessionStorage
// }));

io.on("connection", (socket) => {
    socket.on("chatting", (chat_data) => {
        const {name, msg} =chat_data;
        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("h:mm A")
           
        });
        
    });
});



app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드
 
module.exports = server; 
