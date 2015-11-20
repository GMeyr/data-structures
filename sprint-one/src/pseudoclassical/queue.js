var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.timesEnqueueCalled = 0;
  this.timesDequeueCalled = 0;
  this.toDequeue = 0;
};

Queue.prototype.enqueue = function (value) {
  this[this.timesEnqueueCalled] = value;
  this.timesEnqueueCalled++;
};

Queue.prototype.dequeue = function () {
  var temp = this[this.toDequeue];
  delete this[this.toDequeue];
  this.timesDequeueCalled++;
  this.toDequeue++;
  return temp;
};

Queue.prototype.size = function () {
  if(this.timesEnqueueCalled - this.timesDequeueCalled < 0){
  	return 0;
  } else {
  	return this.timesEnqueueCalled - this.timesDequeueCalled;
  }
};