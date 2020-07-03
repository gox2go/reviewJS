function object(o){
  function F(){}
  F.prototype = o;
  return new F();
}

function createAnother(origanl){
  let clone = object(origanl)
  clone.sayHi = function(){
    console.log("hi")
  }
  return clone
}

let person = {
  name:'ni',
  friends:['ta','sm','dd'],
}

let anotherPerson = createAnother(person)
anotherPerson.sayHi();
anotherPerson.friends.push('Im 4')
console.log(person.friends)
console.log(anotherPerson.friends)