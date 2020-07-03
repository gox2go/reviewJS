"use strict";

// const printObj = (obj) => {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const element = obj[key];
//       console.log("iterate obj: ", key, ":", element);
//     }
//   }
// };

// let obj = {
//   name: "Frankieee",
// };

// Object.defineProperty(obj, "name", {
//   value: "Ned",
//   configurable:false,
// });
// printObj(obj);

// Object.defineProperty(obj,'name',{
//   configurable:true,
//   value:'boo'
// })
// printObj(obj);

// let person = {
//   name:'Ted'
// }

// Object.defineProperty(person,'name',{
//   writable:false,
//   value:'Non-Ted'
// })

// console.log(person);

// person.name = 'Nico'

// console.log(person);

let person = {}

Object.defineProperty(person,'name',{
  configurable:false,
  value:'Ted'
});

Object.defineProperty(
  person,'name',{
    configurable:true,
    value:'Ted'
  }
)