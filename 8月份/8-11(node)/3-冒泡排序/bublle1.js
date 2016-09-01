function setSort(array,callback){
	var len = array.length;
	for(var i=len;i>=2;i--){
		for(var j=0;j<i-1;j++){
			if(array[j]>array[j+1]){
				var temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
		
	}
	callback(array);
}
module.exports = {
	setSort:setSort
}