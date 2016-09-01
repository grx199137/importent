var encapsultion= (function(){
	var data=[
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

	return{
		data:data,
		objectSort: function(member){
			var len = this.data.length;
			for(var i=len;i>=2;i--){
				for(var j=0;j<i-1;j++){
					if(this.data[j][member]>this.data[j+1][member]){
						var temp=this.data[j];
						this.data[j]=this.data[j+1];
						this.data[j+1]=temp;
					}
				}
			}
		},
		ageSort:function(){
			this.objectSort("age")
		},
		achievement:function(){
			this.objectSort("achievement")
		}
	}
})()