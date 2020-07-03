function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

// inherit from SuperType
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subproperty;
};

let instance = new SubType();

console.log(instance.getSuperValue());

// 1st way of discerning relations between Instance and Prototype
console.log("---- use instanceof ----");

console.log(instance instanceof Object);
console.log(instance instanceof SuperType);
console.log(instance instanceof SubType);

console.log("---- end of instance ----");

// 2nd way
console.log('---- use isPrototypeOf ----')

console.log(Object.prototype.isPrototypeOf(instance))
console.log(SuperType.prototype.isPrototypeOf(instance))
console.log(SubType.prototype.isPrototypeOf(instance))
console.log('---- end of isPrototypeof ----')

// methods
console.log('---- working with method ----')

SubType.prototype.getSuperValue = function(){
  return false;
}

let instance2 = new SubType;
console.log(instance.getSuperValue())
console.log(instance2.getSuperValue());
console.log(new SuperType().getSuperValue())

console.log('---- object literal approach  ----')

SubType.prototype={
  getSubValue(){
    return this.subproperty;
  },

  someOtherMethod(){
    return false
  }
}

let instance3 = new SubType;
console.log(instance3.getSubValue())
try {
  console.log(instance3.getSuperValue()) // Error
} catch (error) {
  console.log(error,'catched')
}