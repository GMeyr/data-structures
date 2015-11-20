var Stack = function(){
  var someInstance = {};
  var timesCalledPush = 0;
  var timesCalledPop = 0;
  var toPop = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[timesCalledPush] = value;
    if(timesCalledPush === 0){
      toPop = 0;
      timesCalledPush++;
    } else {
      toPop++;
      timesCalledPush++;
    }
    

  };

  someInstance.pop = function(){

    var temporary = storage[toPop];
    delete storage[toPop];
    timesCalledPop++;
    toPop--;
    if(toPop < 0){
      toPop = 0;
    }
    return temporary;

  };

  someInstance.size = function(){
    if (timesCalledPush - timesCalledPop < 0){
      return 0;
    }
    return timesCalledPush - timesCalledPop;
  };

  return someInstance;
};
