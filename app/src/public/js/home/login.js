"use strict";

const id = document.querySelector("#id"),
    pwd = document.querySelector("#pwd"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


function login(){
    const req = {
        id : id.value,
        pwd : pwd.value,
    };
    console.log(req);
    console.log(JSON.stringify(req));
    //fetch("/login", {
   //     body: JSON.stringify(req)  //stringify : object를 문자열로 바꿔주는 메서드
   // });
}
