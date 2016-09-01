var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","jade");
app.get("/home",function(req,res){
	var tit = "宫若惜";     //数据负值给一个变量
	// var nav = ["主页","视频","音乐","动画"]
	//喧染这个动态页，{"属性名":属性值}
	var nav = [
		{
			title: "主页",
			url: "/home"
		},
		{
			title: "视频",
			url: "http://baidu.com"
		},
		{
			title: "音乐",
			url: "/index.html"
		},
		{
			title: "动画",
			url: "/order.html"
		},
	]
	res.render("home",{"title":tit,"nav":nav});
})


app.listen(3000,function(){
	console.log("服务器已经开启");
})