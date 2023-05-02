"use strict"

class UserStorage{
    static #users = {  // # : 은닉화
        id : ["js4real", "윤준섭", "윤준"],
        pwd : ["1234", "64742713", "1234"],
        name : ["윤준섭", "윤", "준섭"],
    };

    static getUsers (...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;