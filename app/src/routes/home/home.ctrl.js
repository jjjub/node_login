"use strict";

const output ={
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (req, res) => {
        res.render("home/login");
    },
};

const users = {
    id : ["js4real", "윤준섭", "윤준"],
    pwd : ["1234", "64742713", "1234"]
};

const process ={
    login: (req, res) => {
        const id = req.body.id,
        pwd = req.body.pwd;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                return res.json({
                    success : true,
                });
            }
        }


        return res.json({
            success : false,
            msg : "로그인 실패",
        });
    },
};


module.exports = {
    output,
    process,
};
