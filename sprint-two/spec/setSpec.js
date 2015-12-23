describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

  it('should add numbers to a set', function(){
    set.add(7);
    set.add(8);
    expect(set.contains(7)).to.equal(true);
    expect(set.contains(8)).to.equal(true);
  });

  it('should remove numbers from a set', function(){
    set.add(10);
    set.remove(10);
    expect(set.contains(10)).to.equal(false);
  });

  it('should add booleans to a set', function(){
    set.add(true);
    set.add(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
  });

  it('should remove booleans from a set', function(){
    set.add(true);
    set.remove(true);
    expect(set.contains(true)).to.equal(false);
  });
  it('should add arrays to a set', function(){
    set.add(["a", "b", "c"]);
    set.add([11,22,33]);
    expect(set.contains(["a", "b", "c"])).to.equal(true);
    expect(set.contains([11,22,33])).to.equal(true);
  });

  it('should remove arrays from a set', function(){
    set.add(["a", "b", "c"]);
    set.remove(["a", "b", "c"]);
    expect(set.contains(["a", "b", "c"])).to.equal(false);
  });

  it('should add objects to a set', function(){
    set.add({a:1});
    set.add({steak: "sauce"});
    expect(set.contains({a:1})).to.equal(true);
    expect(set.contains({steak: "sauce"})).to.equal(true);
  });

  it('should remove objects from a set', function(){
    set.add({a:1});
    set.remove({a:1});
    expect(set.contains({a:1})).to.equal(false);
  });

  it('should add undefined, null, and NaN to a set', function(){
    set.add(undefined);
    set.add(null);
    set.add(NaN);
    expect(set.contains(undefined)).to.equal(true);
    expect(set.contains(null)).to.equal(true);
  });

  it('should remove undefined and null from a set', function(){
    set.add(undefined);
    set.remove(undefined);
    set.add(null);
    set.remove(null);
    set.add(NaN);
    set.remove(NaN);
    expect(set.contains(undefined)).to.equal(false);
    expect(set.contains(null)).to.equal(false);
    expect(set.contains(NaN)).to.equal(false);
  });

});
