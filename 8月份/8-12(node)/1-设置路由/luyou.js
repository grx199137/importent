var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"index")));

app.get("/page",function(req,res){
	res.end("mypage");
})
app.listen(3000,function(){
	console.log("服务器已经开启");
})