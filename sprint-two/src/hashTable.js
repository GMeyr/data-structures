var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.pair = [];
};


HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
    if(k === 'val1'){
      debugger;
    }
    var bucket = this._storage.get(i);
    this.pair.push([k,v]);

    this._storage.set(i, this.pair);  
  };

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var temp = this._storage.get(i);
  return temp[1];

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	this._storage.set(i,[null, null]);
	//['steven','tyler']
/*	if(this._storage[i] !== undefined){
		debugger;
	  this.storage.splice(i, 1);
	}*/
	

	/*debugger;
	for (var i = 0; i< this._storage.length; i++){
		if(this._storage[i][0] === k){
			this._storage.splice(i,1);
		}
	}
*/
	/*this._storage.each(function(value,index,storage){
		if(storage[index] === k){
			storage.splice(index,1);
		}
	});*/
};


//
/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
	
  [ //this.storage
    
      [key,value],
      [k, v]
    
    [k,v]
    ,[k,v]]
*/