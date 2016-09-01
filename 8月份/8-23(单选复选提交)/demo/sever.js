var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var datahandle = require("./my-modules/datahandle");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000,function () {
    console.log("开启")
})
app.get("/login",function(req,res){
        console.log(req.query)
})


