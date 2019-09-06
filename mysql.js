const mysql =require('mysql');
const express = require('express');
var app=express();
const bodyparser=require('body-parser'); //to hangle json object
app.use(bodyparser.json);


var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sabapathy24',
    database:'demo'
});
 mysqlConnection.connect((err) =>{
     if(!err)
      console.log.log('DB connection succeded');
      else
      console.log.log('DB connection fails \n ERROR:'+ JSON.stringify(err,undefined,2));
 })
 app.listen(3000);