var express = require("express");
var app = express();
var path = require("path");
var datahandle = require("./my-modules/datahandle");
var datahand = require("./my-modules/datahand");
var bodyParser = require("body-parser");
var session = require("express-session");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({exteded:false}));
app.use(session({
    "secret":"hello",
    "cookie":{maxAge:20*1000}
}))
app.set("view engine","jade");
app.listen(3000,function () {
    console.log("开启!")
})
app.get("/",function (req,res) {
    var info = req.query.info
    res.render("login",{info:info})
})
app.get("/home",function (req,res) {
    if(req.session.name){
        var info = "欢迎" + req.session.name
        datahand.findData(function(dos){
            res.render("home",{info:info,data:dos})
        })
    }else{
        res.redirect("/")
    }
})
app.post("/login",function (req,res) {
    var data = req.body;
    datahandle.compare(data,function (dos) {
        if(dos==0){
            res.redirect("/?info=用户错误")
        }else if(dos==1){
            res.redirect("/?info=密码错误")
        }else{
            req.session.name = req.body.username
            res.redirect("/home")
        }
    })
})

