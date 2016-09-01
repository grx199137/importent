var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var session=require("express-session");
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    "secret":"big",
    "cookie":{maxAge:5*1000}
}))
app.set("view engine","jade");
app.listen(3000,function(){
    console.log("服务器开启!")
})
app.get("/",function(req,res){
    res.render("login");
})
app.post("/senddata",function(req,res){
    req.session.name="gong";
    res.redirect("/home");
})
app.get("/home",function(req,res){
    if(req.session.name){
        res.render("home",{name:req.session.name})
    }else{
        res.redirect("/")
    }
})

