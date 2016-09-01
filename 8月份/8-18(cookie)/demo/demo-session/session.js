var express=require("express");
var app=express();
var mySession=require("express-session");
app.use(mySession({
    "secret":"mimi",
    "cookie":{maxAge:60*1000}
}))
app.listen(3000,function(){
    console.log("开启")
})

app.get("/",function (req,res) {
    if(req.session.num){
        req.session.num++;
        res.send("欢迎" +req.session.num + "来到")
    }else{
        req.session.num=1;
        res.send("欢迎第1次来到网站")
    }
})

