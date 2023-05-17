"use strict";

const socket = io();
const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");
const displayContainer = document.querySelector(".display-container")

function send(){
    const param = {
        name : nickname.value,
        msg : chatInput.value
    };
    if (chatInput.value === ""){
    alert("입력해라");
    }
    else{
        socket.emit("chatting", param);
    }
};

chatInput.addEventListener("keypress", (event)=>{  //엔터 입력시 전송
    if(event.keyCode === 13){
        send();
    };
});

window.onload = function(){                         //전송 버튼 클릭시 전송
    sendButton.addEventListener("click", send);
};


socket.on("chatting", (chat_data)=>{
    const { name, msg, time } = chat_data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
    this.name = name;
    this.msg = msg;
    this.time = time;

    this.makeLi =() => {
        const li = document.createElement("li");
        const dom =`<span class="profile">
            <span class="user">${this.name} :</span>
        </span>
        <span class = "message">${this.msg}</span>
        <span class="time">${this.time}</span>`;
        li.innerHTML = dom;
        chatList.appendChild(li);
    }
}