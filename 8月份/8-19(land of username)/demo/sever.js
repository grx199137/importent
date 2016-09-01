var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var datahandle = require("./my-modules/datahandle");
var session = require("express-session");
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
app.use(session({
    "secret":"hello",
    "cookie":{maxAge:60*1000}
}))
app.listen(3000,function(){
    console.log("开启!");
})
app.get("/",function(req,res){
    var info = req.query.data
    res.render("login",{info:info});
})
app.get("/home",function(req,res){
    if(req.session.name){
        var info = "欢迎" + req.session.name
        res.render("home",{info:info})
    }else{
        res.redirect("/")
    }

})
app.post("/login",function(req,res){
    var data = req.body;
    datahandle.compare(data,function (dos) {
        if(dos==0){
            res.redirect("/?data=用户错误")
        }else if(dos==2){
            res.redirect("/?data=密码错误")
        }else{
            req.session.name = req.body.username
            res.redirect("/home");
        }
    })
})
