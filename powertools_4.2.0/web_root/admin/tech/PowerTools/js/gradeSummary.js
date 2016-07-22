'use strict';
//noinspection JSUnusedGlobalSymbols
var GradeNode= function(){
	console.log('something went wrong');
};
var GradeNode = function(grade){
	this.parent = new GradeNode();
	this.children = [];
	this.value = grade;
	this.x = 0;
	this.y = 0;
}
GradeNode.prototype.addChild = function(grade){
	this.children.push(new GradeNode(grade));
	this.children[this.children.length -1].parent = this;
}
GradeNode.prototype.setPosition = function(){
	
}