function Person(){}

Person.prototype={
  // constructor:Person,
  name:'Nico',
  age:29,
  job:'Software engineer',
  sayName(){
    console.log(`My name is ${this.name}`)
  }
}

let friend = new Person;

console.log(friend instanceof Object)
console.log(friend instanceof Person)
console.log(friend.constructor === Object)
console.log(friend.constructor === Person)
console.log(friend.constructor === Object.prototype.constructor)
console.log(Person.prototype.constructor === Object.prototype.constructor)
console.log('what friend\'s constructor is:',friend.constructor)