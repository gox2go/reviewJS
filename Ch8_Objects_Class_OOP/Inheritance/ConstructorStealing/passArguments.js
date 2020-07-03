console.log('---- passing arguments ----')

function SuperType(name){
  this.name = name;
}

function SubType(){
  SuperType.call(this,'Nick');
  this.age = 29;
}

let instance = new SubType;
console.log(instance.name,instance.age)