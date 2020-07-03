function object(o){
  function F(){}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType,superType){

  let prototype = object(superType.prototype)
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function SuperType(name){
  this.name=name;
  this.colors=["red",'green','blue'];
}

SuperType.prototype.sayName=function(){
  console.log(this.name)
}

function SubType(name,age){
  SuperType(name)
  this.age=age;
}

inheritPrototype(SuperType,SuperType)

SubType.prototype.sayAge = function(){
  console.log(this.age)
}


