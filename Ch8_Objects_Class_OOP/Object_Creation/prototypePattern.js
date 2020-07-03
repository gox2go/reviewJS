function Person(){}

Person.prototype.name = 'Nick'
Person.prototype.age = 29
Person.prototype.job = 'Software engineer'
Person.prototype.sayName = function(){
  console.log(`My name is ${this.name}`)
}

const person = new Person;

person.sayName();

console.log(person.age,person.job)

// Object.setPrototypeOf()

let biped = {
  numLegs:2
}

Object.setPrototypeOf(person,biped)

let person2 = Object.create(biped)

console.log(person2,person2.numLegs)
console.log(Object.getPrototypeOf(person2))
person2.name= "123"
console.log(person2.hasOwnProperty('name'))
console.log(person2.hasOwnProperty('nameLegs'))
