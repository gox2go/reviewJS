'use strict'

// 1. trap invariants

const target ={}

Object.defineProperty(target,"foo",{
    value:"bar",
    configurable:false,
    writable:false,
});

// Typeerror
// const handler = {
//     get(){
//         return 'buzz'
//     }
// };

// fine
// const handler2 = {
//     get(){
//         return Reflect.get(...arguments)
//     }
// }

// const proxy = new Proxy(target,handler);
const proxy = new Proxy(target,handler2);

// TypeError: 'get' on proxy: property 'foo' is a read-only and non-configurable data property on the proxy target but the proxy did not return its actual
//  value (expected 'bar' butgot 'buzz')
console.log(proxy.foo); 



 
