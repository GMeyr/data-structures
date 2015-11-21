

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
	this.storage = {};
	this.connections = [];
	// can we pass a connections property to a string?
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
	this.storage[node] = [];

};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){

if(this.storage[node] !== undefined){
	return true;
} else {
	return false;
}
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  
  for (var key in this.storage) {
    if(key === node){
	 delete this.storage[key];
    }
  }	
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){

  for(var i = 0; i < this.storage[fromNode].length; i++){
    if(this.storage[fromNode][i] === toNode){
      return true;
    }
  }
  return false;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



