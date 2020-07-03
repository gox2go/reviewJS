// NaN == NaN
console.log(NaN === NaN);

// isNaN
console.log(isNaN(NaN));

// Object.is
console.log("true,1", Object.is(true, 1));

console.log("{},{} ", Object.is({}, {}));

console.log("+0,-0 ", Object.is(+0, -0));

console.log("NaN, NaN ", Object.is(NaN, NaN));

// recursively Check Equal

function recursivelyCheckEqual(x, ...rest) {
  return (
    Object.is(x, rest[0]) && (rest.length < 2 || recursivelyCheckEqual(...rest))
  );
}

// 适当的使用 `||`
// a||b 相当于 if(!a){b }else{return true}

//Test

const result = recursivelyCheckEqual({}, {}, {}, {});

console.log("{}*4", result);

console.log("NaN*4", recursivelyCheckEqual(NaN, NaN, NaN, NaN));
