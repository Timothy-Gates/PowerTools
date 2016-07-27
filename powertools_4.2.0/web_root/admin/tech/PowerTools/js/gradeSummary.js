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
	this.visible = false;
}
GradeNode.prototype.addChild = function(grade){
	this.children.push(new GradeNode(grade));
	this.children[this.children.length -1].parent = this;
}
GradeNode.prototype.setPosition = function(x,y){
	this.x = x;
	this.y = y;
}
GradeNode.prototype.buildTreePositions = function(head){
	if(this == head){
		
	}
	else{
		this
	}
}