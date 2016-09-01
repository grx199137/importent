function fun2(num1,num2,callback){
	setTimeout(function(){

	var result = num1 + num2 ;
	callback(result);
	 //异步,回调函数的方法
	},1000)
}

module.exports = {
	fun2:fun2
}