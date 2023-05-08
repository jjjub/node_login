"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body) {
        this.body=body;
    }
    
    async login() {
        const client = this.body;
        const {id, pwd} = await UserStorage.getUserInfo(client.id);

       if (id) {
        if (id === client.id && pwd === client.pwd){
            return { success : true};
        }
            return { success : false, msg: "비밀번호가 일치x"};
      }
        return { success : false, msg: "존재하지 않는 아이디"};
    }

    async register() {
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        }catch(err) {
        return { success: false, msg: err};
        }
    }
}

module.exports = User;