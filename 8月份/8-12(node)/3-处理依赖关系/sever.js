var express=require("express");
var app = express();
var path=require("path");
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","jade");
app.get("/",function(req,res){
	var title="主页"
	res.render("home",{title:title});
})
app.get("/vedio",function(req,res){
	var title="视频"
	res.render("vedio",{title:title});
})
app.get("/runpic",function(req,res){
	var title="动漫"
	res.render("runpic",{title:title});
})
app.get("/music",function(req,res){
	var title="音乐"
	res.render("music",{title:title});
})
app.get("/table",function(req,res){
	var title="表格"
	var table=[
			{
				name: "盖伦",
				age : 21,
				achievement : 66
			},
			{
				name: "卡特",
				age : 25,
				achievement : 100
			},
			{
				name: "男枪",
				age : 39,
				achievement : 70
			},
			{
				name: "火男",
				age : 100,
				achievement : 89
			},
			{
				name: "女警",
				age : 26,
				achievement : 90
			},
		];
	res.render("table",{title:title,table:table});
})



app.listen(3000,function(){
	console.log("服务器已经开启!")
})