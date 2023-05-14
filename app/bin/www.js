"use strict";


const server = require("../app");
const PORT = 3000; 


// const server = app.listen(PORT, function(){
//     console.log(PORT + "에서 가동 중");
// });



server.listen(PORT, () => {
    console.log(PORT+"번 포트에서 서버 가동");
});