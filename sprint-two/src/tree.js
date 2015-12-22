var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  newTree.removeFromParent = treeMethods.removeFromParent;
  newTree.parent = parent || null;
  newTree.traverse = treeMethods.traverse;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = new Tree(value, this);
  this.children.push(newTree);
};

treeMethods.removeFromParent = function(){
  var copy = {};
  for(var key in this){
    copy[key] = this[key];
  }
  var children = this.parent.children;
  var idx = children.indexOf(this);
  removed = children.splice(idx, 1, null);

  for(var key2 in copy){
    this[key2] = copy[key2];
  }
  this.parent = null;

}

treeMethods.contains = function(target){

if (this.value === target){
  return true;
}

for (var i = 0; i < this.children.length; i++){
  if(this.children[i].contains(target)) {
    return true;
  }   
}
    return false;
};

treeMethods.traverse = function(callback){
  callback(this);
  this.children.forEach(function(n){
    n.traverse(callback)
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
