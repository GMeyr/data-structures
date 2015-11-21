var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  set.strings = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this.strings[item] === undefined){
  	this.strings[item] = item;
  } 
};

setPrototype.contains = function(item){
  for(var key in this.strings){
  	if(key === item){
  		return true;
  	}
  	
  }
  return false;
};

setPrototype.remove = function(item){
  delete this.strings[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
/*
[s,d,f,g,h,s]
 {s: some value, d: some value}
 for (var key in object){ if key === item}
 delete
 add
 set.item = item
*/