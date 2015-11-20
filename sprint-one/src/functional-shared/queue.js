var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.timesCalledEnqueue = 0;
  someInstance.timesCalledDequeue = 0;
  someInstance.toDequeue = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {

};

  queueMethods.enqueue = function(value){
    this[this.timesCalledEnqueue] = value;
    this.timesCalledEnqueue += 1;
  };

  queueMethods.dequeue = function(){

    var temporary = this[this.toDequeue];

    delete this[this.toDequeue];
    this.timesCalledDequeue +=1;
    this.toDequeue+=1;  
    return temporary;


  };

  queueMethods.size = function(){
      if (this.timesCalledEnqueue-this.timesCalledDequeue < 0){
        return 0;
      } else{
      return this.timesCalledEnqueue-this.timesCalledDequeue;
      }

  };