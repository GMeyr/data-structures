var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  
    var bucket = this._storage.get(i);
    var pair = [k,v];

    if(!bucket){
    this._storage.set(i,pair);  

    } else if (this._storage.get(i)[0] === k){
      this._storage.set(i, pair)

    } else {
      for (var j = 0; j < bucket.length; j++){
        if(bucket[j][0] === k){
          bucket[j][1] = v;
        } else{
      bucket.push(pair);
        }
      }
    this._storage.set(i,bucket);
  }

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