//Name: Joel Surya
//Class: 1B/06
//Admission Number: P1935446
var app=require('./controller/app.js');
var port=3000;

var server=app.listen(port,function(){

    console.log("App hosted at localhost:"+port);

    
});