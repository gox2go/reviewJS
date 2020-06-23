const target = {
    foo: 'bar',
}

const handler = {
    get() {
        return "intercepted."
    }
}

const { proxy, revoke} = Proxy.revocable(target, handler);

console.log(proxy.foo)

console.log(target.foo)

revoke();

//TypeError: Cannot perform 'get' on a proxy that has been 
console.log(proxy.foo)