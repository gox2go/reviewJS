const o = {
  foo: "bar",
  baz: 1,
  qux: {},
};
console.log(Object.values(o));

console.log(Object.entries(o));

console.log(Object.values(o)[2] === o.qux);

console.log(Object.entries(o)[2][1] === o.qux);

const k1 = Symbol("k1");

const symO = {
  [k1]: "k1",
};


console.log(Object.values(symO))

console.log(Object.entries(symO))