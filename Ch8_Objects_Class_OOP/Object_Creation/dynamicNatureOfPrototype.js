function Person(){}

console.log('---- part one ----')
// Person.prototype={
//   constructor:Person,
//   name:'Nick',
//   age:29,
//   sayname(){
//     console.log(`My name is ${this.name}`)
//   }
// }

// part one
// let friend = new Person;

// Person.prototype.sayHi = function(){
//   console.log('hi')
// }


// friend.sayHi();

console.log('---- part two ----')

let friend = new Person;

Person.prototype={
  constructor:Person,
  name:'Nick',
  age:29,
  job:'software engineer',
  sayName:function(){
    console.log(`hello , my name is ${this.name}`)
  }
}

// friend.sayName();

console.log('---- part three ----')


