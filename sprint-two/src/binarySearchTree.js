var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  newTree.insert = binarySearchTree.insert;
  newTree.contains = binarySearchTree.contains;
  newTree.depthFirstLog = binarySearchTree.depthFirstLog;
  newTree.count = 0;
  return newTree;
};

var binarySearchTree = {};
// We are starting at value 5 and the one on the left is the smaller one the one on the right is the bigger one
//compare new value to current value

binarySearchTree.insert = function(value){
  var newNode = BinarySearchTree(value);

  var placeNode = function(older, newer){
    if(newer.value < older.value){
  	  if(older.left) {
  	    placeNode(older.left, newer);
      } else {
      	older.left = newer;
      }
    } else {
      if(older.right){
        placeNode(older.right, newer);
      } else {
      	older.right = newer;
      }
    }
  }

  placeNode(this, newNode);

	// var newNode = BinarySearchTree(value);
	//   if(this.left.value >= newNode.value){
	// 	this.right = this.left;
	// 	this.left = newNode;
	//   } else {
	//   	this.right = newNode;
	//   }
	// } else if (this.count === 1){
	// 	this.left = newNode;
	// }

	
};

binarySearchTree.contains = function(value){
  if(this.value === value){
  	return true;
  } else {
  	if(this.value > value){
  	  if(this.left){
  	  	return this.left.contains(value);
  	  } else {
  	  	return false;
  	  }
  	} else {
  	  if(this.right){
  	  	return this.right.contains(value);
  	  } else {
        return false;
  	  }
  	}
  }
  return false;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

binarySearchTree.depthFirstLog = function(callback, n) {
  var node;
  if(arguments.length < 2){
    node = this;
  } else {
  	node = n;
  }

  callback(node.value);
  if(node.left !== null){
  	this.depthFirstLog(callback, node.left);
  }
  if(node.right !== null){
  	this.depthFirstLog(callback, node.right);
  }

};














