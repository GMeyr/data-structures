var Stack = function(){
  var someInstance = {};
  var counter = 0;
  var topOfStack = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
  
    storage[counter] = value;
    counter++;

  };

  someInstance.pop = function(){

    var temporary = {};
    temporary["answer"] = storage[counter];
    counter--;
    delete storage[counter];
    return temporary["answer"];

  };

  someInstance.size = function(){
    if (counter-topOfStack < 0){
      return 0;
    }
    return counter;
  };

  return someInstance;
};
