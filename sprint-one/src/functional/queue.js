var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var timesCalledEnqueue = 0;
  var timesCalledDequeue = 0;
  var toDequeue = 0;

  // Implement the methods below
  // storage Object {};
  // storage["1"] = "hi";
  // storage.length === undefined
  // enqueue last value and dequeue first value

  someInstance.enqueue = function(value){
    storage[timesCalledEnqueue] = value;
    timesCalledEnqueue += 1;
  };

  someInstance.dequeue = function(){

    var temporary = storage[toDequeue];

    delete storage[toDequeue];
    timesCalledDequeue +=1;
    toDequeue+=1;  
    return temporary;


  };

  someInstance.size = function(){
      if (timesCalledEnqueue-timesCalledDequeue < 0){
        return 0;
      } else{
      return timesCalledEnqueue-timesCalledDequeue;
      }

  };

  return someInstance;
};