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
	this.preX = 0;
	this.prevY = 0;
	this.visibility= false;
	this.tree = [];
	this.height = 0;
}
GradeNode.prototype.addChild = function(grade, parent){
	if(this.value == parent){
		this.children.push(new GradeNode(grade));
		this.children[this.children.length -1].parent = this;
		return;
	}
	for(var i = 0; i< this.children.length; i++){
		this.children[i].addChild(grade, parent);
	}
}
GradeNode.prototype.makeVisible = function(head){
	for(var i = 0; i < this.children.length; i++){
		this.children[i].visibility = true;
	}
	head.getDimentions(head);
}
GradeNode.prototype.getDimentions = function(head){
	if(head.tree.length < head.tree.height - 1){
		head.tree.length.push(1);
	}
	else{
		head.tree[height-1] += 1;
	}
	for(var i = 0; i < this.children.length; i++){
		if(this.children[i].visibility == true){
			head.height++;
			this.children[i].setPosition(head);
			head.height--;
		}
		else{
			break;
		}
	}
	if(this == head){
		this.setPosition(head);
	}
}
GradeNode.prototype.setPosition = function(head){
	for(var i = 0; i < this.children.length; i++){
		if(this.children[i].visibility == true){
			head.height++;
			this.children[i].setPosition(head);
			head.height--;
		}
		else{
			break;
		}
	}
	this.prevX = this.x;
	this.prevY = this.y;
	this.x = (this.tree.length - 1 - this.height) * 100;
	if(this.children.length > 0){
		
	}
	else{
		
	}
}