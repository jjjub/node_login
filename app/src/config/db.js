const mysql      = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '9042',
  database : 'db1'
});

db.connect();

module.exports = db;
