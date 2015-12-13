var HashTable = function(){
  this._limit = 4;
  this._storage = LimitedArray(this._limit);
  this._stored = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage.set(i, [k,v]);
  var bucket = this._storage.get(i) || [];
  //if length 0, push
  if( bucket.length === 0){
    bucket.push([k,v]);
  } else if ( bucket.length === 1 && bucket[0][0] === k ) {
    bucket[0][1] = v;
  } else {
    for( var i = 0; i < bucket.length; i++ ){
      if( bucket[i][0] === k ){
        bucket[i][1] = v;
      } else {
        bucket.push([k,v]);
      }
    }
  }
  console.log("current limit: ", this._limit);

  this._storage.set(i, bucket);
  this._stored += 1;
  if( this._stored > this._limit * 0.75 ){
    var trueStored = 0;
    for( var j = 0; j < this._limit; j++ ){
      if( this._storage.get(j) ){
        trueStored += 1;
      }
    }
    if( trueStored > this._limit * 0.75 ){
      this._limit *= 2;
      console.log("new limit: ", this._limit)
    }


  }};


HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  if( bucket[0][0] === k ){
    return bucket[0][1];
  }
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return bucket[i][1];
    }
  }


};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];
  for( var i = 0; i < bucket.length; i++ ){
    if( bucket[i][0] === k ){
      console.log("found it");
      bucket[i][1 ] = null; 
    }
  }
  this._storage.set(i, bucket);

};



/*
 * Complexity: What is the time complexity of the above functions?
   These functions have constant time lookup. In the case of collisions they require a linear operation
   to find the right tuple in a bucket. But because that is not necesasry in the majority of cases, we say this is 
   essentially a set of constant time solutions.
 */
