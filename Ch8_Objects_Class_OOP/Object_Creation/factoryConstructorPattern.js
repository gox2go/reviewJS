// the following code snippet has the same functionality with the factory pattern
// 函数构造器模式

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

const person = new Person("Matt", 27, "Worker");

console.log(person);
console.log(typeof person);
console.log(person.constructor === Person);
console.log(person instanceof Person, " person instanceof Person");
console.log(person instanceof Object, "person is an Object instance");

// A funtion expession behaves identically:

let Person2 = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

const person2 = new Person2("Ned",22,'Software engineer')

console.log(person2)
console.log(person2.constructor === Person2)
console.log(person2.constructor === Person)
console.log(person2 instanceof Person2)

// optional parentheses

function Person3(){
  this.name = 'Heck';
  this.sayName = function(){
    console.log(`My name is ${this.name}.`)
  }
}

let person3 = new Person3;
person3.sayName();

// constructors as Functions

let person4 = new Person("Nick",22,'farmer') 
console.log(person4)

// call as a function
Person("Ni",22,'Worker');
console.log(window)

let o = new Object();
Person.call(o,"Frank",29,"Software engineer")
console.log(o)

