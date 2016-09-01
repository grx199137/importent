
var num1 = 90;
var num2 = 20;
function fun(){
	
	return num1 + num2 ;	
};
function fun1(){
	var num1 = 10;
	var num2 = 20;
	return num1 - num2 ;	//同步方法
};
module.exports = {
	fun:fun,
	fun1:fun1
};                           //暴露出模块的fun函数
