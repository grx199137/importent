var express=require("express");
var app=express();
var path=require("path");
var bodyParser=require("body-parser");
var datahandle=require("./my-modules/datahandle");
app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","jade");
app.listen(3000,function(){
    console.log("开启");
})
app.get("/",function(req,res){
    res.render("login");
})
app.post("/login",function(req,res){
    var optinos = req.body;
    datahandle.findData(function(data){
        for(var i = 0;i<data.length;i++){
            if(optinos.username==data[i].username){
                if(optinos.password==data[i].password){
                    res.render("home");
                    return;
                }else{
                    var wrong = "密码错误"
                    res.render("login",{info:wrong})
                    return;
                }
            }
        }
        var wrong = "用户错误";
        res.render("login",{info:wrong})
    })
})

