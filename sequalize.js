
var express=require('express');
var mysql=require('mysql');
var app =express();
const bodyparser=require('body-parser');
app.use(bodyparser.json);
var Sequelize = require('sequelize');
var sequelize = new Sequelize('login', 'root', 'sabapathy24');

   var Details = sequelize.define('Details', {
    id: Sequelize.STRING,
    username:Sequelize.STRING,
    password: Sequelize.STRING
});


sequelize.sync({force:true}).complete(function (err) {
    if(err){
       console.log('An error occur while creating table');
    }else{
       console.log('Item table created successfully');
    }
   });

   sequelize.sync().success(function () {
    Details.create({
       id: 1,
       name:'test',
       password: 'test',
    }).success(function (data) {
    console.log(data.values)
   })
  });
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected  successfully.');
  })
  .catch(err => {
    console.error('connection fails:', err);
  });
app.listen(3000,()=>{
    console.log('product server running');
});