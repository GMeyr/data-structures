var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  var Node = function(value){
    var node = {};
    node.value = value;
    node.next = undefined;
    node.prev = undefined;
    return node;
  };

  var checkNext = function(n, target, direction){
    if ( n.value === target ){
      return true;
    }
    if( n[direction] ){
      if( n[direction] === target ){
        return true;
      } else {
        return checkNext(n[direction], target);
      }
    } else {
      return false;
    }
  }

  list.addToTail = function(value){
    var node = new Node(value);
    if( !list.head ){
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
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
    return checkNext(this.head, target, 'next');
  };

  list.reverseContains = function(target){
    return checkNext(this.tail, target, 'prev')
  }

  return list;
}