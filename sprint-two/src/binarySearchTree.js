var BinarySearchTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.right = null;
  newTree.left = null;
  newTree.insert = binarySearchTree.insert;
  newTree.contains = binarySearchTree.contains;
  newTree.depthFirstLog = binarySearchTree.depthFirstLog;
  newTree.breadthFirstLog = binarySearchTree.breadthFirstLog;
  newTree.rebalance = binarySearchTree.rebalance;
  newTree.currentDepth = 1;
  newTree.minDepth = 2;
  newTree.placeNode = binarySearchTree.placeNode;
  return newTree;
};

var binarySearchTree = {};
// We are starting at value 5 and the one on the left is the smaller one the one on the right is the bigger one
//compare new value to current value

binarySearchTree.insert = function(value){
  this.currentDepth = 1;

  var newNode = BinarySearchTree(value);

  this.placeNode(this,newNode, this);

  console.log("currentDepth", this.currentDepth);
  if(this.currentDepth > this.minDepth * 2){
    console.log("Time to rebalance");
    rebalance(this);
  };
  
};

binarySearchTree.placeNode = function(older,newer){
  if (newer.value < older.value){
    if (older.left){
      this.currentDepth++;
      this.placeNode(older.left,newer);
    } else {
      older.left = newer;
    }
  } else {
    if(older.right){
      this.currentDepth++;
      this.placeNode(older.right,newer);
    } else {
      older.right = newer;
    }
  }
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

var rebalance = function(context){
  console.log("rebalancing");
  var values = [];
  var pushToValuesArr = function (val){
    values.push(val);
  }

  context.depthFirstLog(pushToValuesArr);
  
  values.sort();
  size = values.length;
  var middleIdx = Math.ceil(size / 2);
  var arr1 = values.splice(0, middleIdx);
  var arr2 = values.splice(middleIdx);
  //recursive function

  var getOrder = function(array){
  //ask help desk or during office hours
    //how can i get my values in the right
    //order for insertion?
    //I've tried sorting then grabbing from
    //the end and beginning alternatively,
    //sorting then grabbing from the middle,
    //and now splitting the array into halves
    //and grabbing that middle.
    var ordered = [];
    var split = function(arr){
      if(arr.length > 1){
        var middle = Math.ceil(size / 2);
        ordered.push(arr.splice(middle, 1));
        var arr2 = arr.splice(middle, arr.length);
        split(arr);
        split(arr2);
      };
      if(arr.length === 1){
        ordered.push(arr[0]);
      };
    }
    split(array);
    console.log("ordered", ordered)
    return ordered;
  };

  var newOrder = getOrder(values);
  console.log("newOrder", newOrder);

  //grab from the middle
  // var grabMiddleNumber = function(arr){
  //   if( arr.length ){
  //     var middleVal = arr.splice(Math.floor(arr.length / 2), 1);
  //     if( middleVal) {
  //       newOrder.push(middleVal[0]);
  //     }
  //     grabMiddleNumber(arr);
  //   }
  // }
  // grabMiddleNumber(values);

  console.log("values after removal:", values);
  console.log("newOrder after removal:", newOrder);
  
  context.value = starter[0];
  context.right = null;
  context.left = null;
  context.minDepth = context.minDepth * 2;
  newOrder.forEach(function(val){
    if( val !== undefined ){
      context.insert(val);
    }

  });


};
