var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
app.listen(3000,function(){
    console.log("开启")
})
app.get("/",function(req,res){
    var info = req.query.info
    res.render("login",{showinfo:info})
})
app.post("/senddata",function(req,res){
    if(req.body.info==123){
        res.render("home")
    }else{
        res.redirect("/?info=用户错误")
    }
})
//17行是把"用户这个值负值"info可以自定义,但又重定向到“/”时发送的req,所以与10行的info是一个名才能找到