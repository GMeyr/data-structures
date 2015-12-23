var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  newTree.insert = binarySearchTree.insert;
  newTree.contains = binarySearchTree.contains;
  newTree.depthFirstLog = binarySearchTree.depthFirstLog;
  newTree.breadthFirstLog = binarySearchTree.breadthFirstLog;
  newTree.count = 0;
  return newTree;
};

var binarySearchTree = {};
// We are starting at value 5 and the one on the left is the smaller one the one on the right is the bigger one
//compare new value to current value

binarySearchTree.insert = function(value){

var newNode = BinarySearchTree(value);

var placeNode = function(older,newer){
  if (newer.value < older.value){
    if (older.left){
      placeNode(older.left,newer);
    } else {
      older.left = newer;
    }
  } else {
    if(older.right){
      placeNode(older.right,newer);
    } else{
        older.right = newer;
      }
  }
}

placeNode(this,newNode);


  
};

binarySearchTree.contains = function(value){

if(this.value === value){
  return true;
} else if (this.value > value) {
  if(this.left){
    return this.left.contains(value);
  }
}

  else {
    if (this.right){
      return this.right.contains(value);
    } else {
      return false;
    }
  }
return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
placeNode is linear because you have to start iterating though the tree to find a spot for the item.
contains is also linear.
depthFirstLog and breadthFirstLog are also linear.

 */

binarySearchTree.depthFirstLog = function(callback,n) {
  var node = null;
  if (arguments.length < 2){
    node = this;
  } else { 
    node = n
  }
  callback(node.value);
  if (node.left){
    this.depthFirstLog(callback,node.left)
  } 
  if (node.right) {
    this.depthFirstLog(callback,node.right);
  }
};

binarySearchTree.breadthFirstLog = function(callback){

  callback(this.value);

  var queue = new Queue();

  var traverse = function(node){
    if( node.left ){
      queue.insert(node.left.value);
    };
    if( node.right ){
      queue.insert(node.right.value);
    };
    if( node.left ){
      traverse(node.left);
    };
    if( node.right ){
      traverse(node.right)
    };
  };

  traverse(this);
  
  var callbackOnQueue = function(current, callback){
    if( !current ){
      return;
    }

    callback(current);
    var next = queue.retrieve();
    callbackOnQueue(next, callback);
  }
  
  var start = queue.retrieve();
  callbackOnQueue(start, callback);
};

var Queue = function(){
  this.storage = [];
  this.insert = function(node){
    this.storage.push(node);
  }
  this.retrieve = function(){
    return this.storage.splice(0, 1)[0];
  }
};
