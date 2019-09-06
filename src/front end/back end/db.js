
var mysql = require('mysql');

var connection = mysql.createConnection({
  host:"localhost",
  port: '3306',
  user:"root",
  password:"sabapathy24",
  database: "demo"
});   

module.exports = connection;