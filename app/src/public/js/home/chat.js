"use strict";


const socket = io();


const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

window.onload = function(){
    sendButton.addEventListener("click", () => {
        const param = {
            name : nickname.value,
            msg : chatInput.value
        }
        socket.emit("chatting", param);
    });
}


socket.on("chatting", (chat_data)=>{
    const li = document.createElement("li");
    li.innerText = `${chat_data.name}님이 - ${chat_data.msg}`;
    chatList.appendChild(li); 
});

console.log(socket);