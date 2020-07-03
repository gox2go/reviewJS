function SuperType(name){
  this.name = name;
  this.colors = ['red','green','blue'];
}

SuperType.prototype.sayName= function(){
  console.log(this.name)
}

function SubType(name,age){
  SuperType.call(this,name)
  this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function(){
  console.log(this.age)
}

let instance1 = new SubType("nick",22);
let instance2 = new SubType("geli",24);

instance1.colors.push('black')
console.log('---- instance1 ----')
console.log(instance1.colors)
instance1.sayAge()
instance1.sayName()

console.log('---- instance2 ----');
console.log(instance2.colors)
instance2.sayName()
instance2.sayAge()