var http = require("http");

http.createServer(function(req,res){  //创建服务器
	res.end("mimi")
}).listen(80,"192.168.3.117",function(){
	console.log("服务器已启动");
})