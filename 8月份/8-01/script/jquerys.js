function $(selector){
	this.dom = document.querySelector(selector);
}

$.prototype.click = function(fun){
	this.dom.addEventListener("click",fun,false);
}