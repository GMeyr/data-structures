var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = new Node(value);

    if (list.head === null){     
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;

    }

  };

  list.removeHead = function(){
    var temp = this.head.next;
    var result = this.head.value;
    delete this.head;
    this.head = temp;
    return result;

  };

  list.contains = function(target){

    // while this.next != null 
    var checkNext = function(n, target){
    
    if(n.next){
      if(n.value === target){
        return true;
      } else {
        return checkNext(n.next,target);
      }

    } else {

      return n.value === target;
    }

  }
  return checkNext(this.head,target);

  };


/*

*/

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 Add to tail (Constant Time):
   is constant time because we only need to know the this.tail
  which is an index that we know due to our linked list's properties
  we don't iterate, we simply look it up
  
  RemoveHead (Constant Time): 
  We have the head property,  because everything is linked, there is no shifting of indexes
  meaning we only delete the head property and by definition everything is already linked
  the add to tail function handles the definition of what object comes next.

  contains (Linear Time):
  Every time we add an object, we start from the begining of the list and check its next property
  and we keep on iterating until we find the true property, or we don't in which case it is false.
  

 */
