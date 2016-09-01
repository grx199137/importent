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
    datahandle.findData(function (dos) {
        res.send({data:dos})
    })
})
app.post("/senddata",function (req,res) {
    var data = req.body;
    datahandle.insertData(data,function () {
        res.send("请求成功")
    })
})

