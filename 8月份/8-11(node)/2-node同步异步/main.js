var module1 = require("./main1");   
//虽然引用了并且暴露了fun函数但只是函数所以必须调用
var module2 = require("./main2");
// console.log(module1.fun()); 
// console.log(module1.fun1()); 


module2.fun2(20,30,function(result){
	console.log(result);
});
console.log("///////////")
//main2暴露了fun2,是用回调函数的方法实现异步