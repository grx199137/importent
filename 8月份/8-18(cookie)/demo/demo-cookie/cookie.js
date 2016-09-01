var express=require("express");
var app=express();
var myCookie=require("cookie-parser");
app.use(myCookie());
app.listen(3000,function(){
    console.log("服务器开启")
})

// app.get("/",function(req,res){
//     console .log(req.cookies.name)
//     res.cookie("name","xiaoming");
//     res.send("欢迎第一次来到网站");
// })
app.get("/",function(req,res){
    if(req.cookies.name){
        res.send("再次访问")
    }else{
        res.cookie("name","xiaoli");
        res.send("第一次访问")
    }
})
//再次请求时会带着第一次给的cookie,但是请求时是req.cookies
