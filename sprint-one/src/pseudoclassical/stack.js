var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.timesPushCalled = 0;
  this.timesPopCalled = 0;
  this.toPop = 0;
};

Stack.prototype.push = function(value) {
	this[this.timesPushCalled] = value;
	
	if(this.timesPushCalled === 0){
		this.toPop = 0;
		this.timesPushCalled++;
	} else {
		this.timesPushCalled++;
		this.toPop++;
	}
};

Stack.prototype.pop = function() {
	var temp = this[this.toPop];
	delete this[this.toPop];
	this.timesPopCalled++;
	this.toPop--;
	if (this.toPop < 0){
		this.toPop = 0;
	}
	return temp;
};
Stack.prototype.size = function() {
	if(this.timesPushCalled - this.timesPopCalled < 0){
		return 0;
	} else {
		return this.timesPushCalled - this.timesPopCalled;
	}
};

Stack.prototype.check = function(){
	console.log("timesPopCalled", timesPopCalled);
	console.log("timesPushCalled", timesPushCalled);
	console.log("toPop", toPop);
}
