"use strict";

const home =  (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

const stream = (req, res) => {
    res.render("home/stream");
};

module.exports = {
    home,
    login,
};
