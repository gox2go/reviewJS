'use strict'

// proxying a proxy

const target = {foo:'bar'};

const hander = {
    get(){
        console.log("first proxy")
        return Reflect.get(...arguments)
    }
}

const proxy = new Proxy(target,hander)

const hander2 = {
    get(){
        console.log("It\'s the second proxy.")
        return Reflect.get(...arguments)
    }
}

const proxy2 = new Proxy(proxy,hander2)

console.log(proxy2.foo)