function Person() {}

Person.prototype.name = "nick";
Person.prototype.age = 29;
Person.prototype.job = "Engineer";

let person1 = new Person();
let person2 = new Person();

console.log(person1.hasOwnProperty("name"));
console.log("name" in person1);

function hasOwnPrototypeProperty(obj, name) {
  return name in obj && !obj.hasOwnProperty(name);
}

console.log(
  "is name a prototype property: ",
  hasOwnPrototypeProperty(person1, "name")
);
person1.name = "Kick";
console.log(
  "is name a prototype property: ",
  hasOwnPrototypeProperty(person1, "name")
);

console.log(Object.keys(person1));
console.log(Object.keys(Person.prototype));
let keys = Object.getOwnPropertyNames(person1);
let protoKeys = Object.getOwnPropertyNames(Person.prototype);
console.log("keys", keys);
console.log("proto", protoKeys);

let k1 = Symbol("k1");
let k2 = Symbol("k2");

let o = {
  [k1]: "k1",
  [k2]: "k2",
};

console.log(Object.getOwnPropertySymbols(o));

// order
console.log("--------order--------");

let Order = {
  1: 1,
  first: "first",
  [k1]: "sym1",
  second: "second",
  0: 0,
};

Order[k2]='sym2'
Order[3]=3;
Order.third='third'
Order[2]=2;
// maybe or maybe not in order
console.log('-------maybe or maybe not in order-----')
for (const key in Order) {
  if (Order.hasOwnProperty(key)) {
    const element = Order[key];
    console.log(key,'-',element)
  }
}

let OrderKeys = Object.keys(Order)
console.log(OrderKeys)

// in order
console.log('------in order------')
console.log(Object.getOwnPropertyNames(Order))
console.log(Object.getOwnPropertySymbols(Order))
