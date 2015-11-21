var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = new Tree(value);
  this.children.push(newTree);
};

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


/*
 * Complexity: What is the time complexity of the above functions?
 */
