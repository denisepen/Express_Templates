var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.render("home.ejs")
  // res.send("<h1>Home Page</h1>")
})

app.get('/fellinlovewith/:thing', function(req, res){
  var thing = req.params.thing
  res.render("love.ejs", {thingVar: thing})
})






app.listen(3000, function(){
  console.log("Server is Listening on Port 3000...");
})
