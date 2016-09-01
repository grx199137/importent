var express=require("express");
var app=express();
var path=require("path");
var datahandle=require("./my-modules/datahandle");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","jade");
app.listen(3000,function(){
    console.log("服务器开启!");
})
app.get("/",function(req,res){
    datahandle.findData(function(data){
        res.render("index",{data:data})
    })
})
app.post("/insertdata",function(req,res){
    var data=req.body
    datahandle.insertData(data,function(){
        res.redirect("/")
    })
})
app.post("/removedata",function(req,res){
    var data=req.body;
    datahandle.removeData(data,function(){
        res.redirect("/")
    })
})
app.post("/updatedata",function(req,res){
    var data=req.body;
    var conditions={"name":data.name}
    datahandle.updateData(conditions,data,function(){
        res.redirect("/")
    })
})
