'use strict'

// 1. create a passthrough proxy object

// ------------------------

// const target = {
//     foo: 'hello',
// }

// const handler = {};

// const proxy = new Proxy(target, handler);

// console.log(proxy)
// console.log(proxy.hasOwnProperty('id'))
// console.log(proxy == target)
// console.log(proxy === target)
// console.log(proxy.foo)
// console.log(proxy instanceof Object)


// -----------------------

// 2. traps

// const target ={
//     foo:'hello',
// }

// const handler={
//     get:()=>{
//         return "get trapped"
//     },
// }

// const proxy = new Proxy(target,handler);

// console.log(proxy.foo)
// console.log(proxy["foo"]);
// console.log(Object.create(proxy)["foo"]); // Interesting

// ------------------------

// 3. traps parameters and Reflect API

// const target = { foo: "hello" , boo: "world"};
//
// const handle = {
//     // get:(...args)=>{
//     //     for(let i=0;i<args.length;i++){
//     //         console.log(i,args[i])
//     //     }
//     //     return Reflect.get(...args)
//     // }
//     // get:Reflect.get,
//     get(targetObject,property,proxy){
//         if(targetObject[property] === "hello"){
//             return Reflect.get(...arguments)+", ";
//         }
//         return Reflect.get(...arguments)
//     }
// }
//
// const proxy = new Proxy(target, handle);
//
// console.log(proxy.foo,proxy.boo)
