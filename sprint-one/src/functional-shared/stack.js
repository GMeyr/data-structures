var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.timesCalledPop = 0;
  someInstance.timesCalledPush = 0;
  someInstance.toPop = 0; 

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;

};

var stackMethods = {};

  stackMethods.push = function(value){
    this[this.timesCalledPush] = value;
    if(this.timesCalledPush === 0){
      this.toPop = 0;
      this.timesCalledPush++;
    } else {
      this.toPop++;
      this.timesCalledPush++;
    }
    

  };

  stackMethods.pop = function(){

    var temporary = this[this.toPop];
    delete this[this.toPop];
    this.timesCalledPop++;
    this.toPop--;
    if(this.toPop < 0){
      this.toPop = 0;
    }
    return temporary;

  };

  stackMethods.size = function(){
    if (this.timesCalledPush - this.timesCalledPop < 0){
      return 0;
    }
    return this.timesCalledPush - this.timesCalledPop;
  };
