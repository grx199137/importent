var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,function () {
    console.log("开启")
})
app.get("/login",function(req,res){
    res.send("hello ajax")
})
app.post("/home",function(req,res){
    res.send("hello ajax post")
})

