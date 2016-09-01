 var cat ={
        	name : "miaomiao",
        	age : 2,
        	eat :function(food){
        		var result = "我喜欢吃"+ food;
        		alert(result);
        	},
        	count :function(num1,num2,sign){
        		var result = 0;
        		switch(sign){
        			case "+" : var result = num1 + num2 ; break;
        			case "-" : var result = num1 - num2 ; break;
        			case "*" : var result = num1 * num2 ; break;
        			case "/" : var result = num1 / num2 ; break;
        		}
        		var content = num1 +sign+ num2 + "计算的结果是" +result ;
        		alert(content);

        	}
        };
        // cat.eat("鱼");