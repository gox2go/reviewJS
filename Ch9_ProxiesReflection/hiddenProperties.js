'use strict'

// Utility of Proxy

// tracking property access 

// use get() and has()

const filter = ['foo','boo'];

const target = {
    foo:'foo',
    boo:'boo',
    baz:'baz',
}

const handler = {
    get(target,property){
        if(filter.includes(property)){
            return undefined;
        }else{
            return Reflect.get(...arguments)
        }
    },
    has(target,property){
        if(filter.includes(property)){
            return false
        }else{
            return Reflect.has(...arguments)
        }
    }
}

const proxy = new Proxy(target,handler)

console.log(proxy.foo)
console.log(proxy.boo)
console.log(proxy.baz)

// 似乎是个问题
for (const key in proxy) {
    console.log(key)
}
 
console.log('foo' in proxy)
    