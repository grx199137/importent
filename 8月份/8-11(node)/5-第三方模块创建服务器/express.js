var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"index")));
app.listen(200,function(){
	console.log("服务器已经开启");
})