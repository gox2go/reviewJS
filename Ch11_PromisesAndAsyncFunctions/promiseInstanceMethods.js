// Promise.prototype.then()


// 1.
// const onResolved= (id)=>{
//   setTimeout(console.log,0,id,'resolved')
// }

// const onRejected = id =>{
//   setTimeout(console.log,0,id,'rejected')
// }

// let p1 = new Promise((resolve,reject)=>resolve('p1'))

// let p2 = new Promise((resolve,reject)=>reject('p2'))

// p2.then('',(id)=>onRejected(`${id}...`))

// 2.Promise.then() return a new Promise

// let p1 = new Promise((res)=>{res(1);})

// let p2 = p1.then((value)=>{return value+1});


// setTimeout(console.log,0,p1)

// setTimeout(console.log,0,p2)

// setTimeout(console.log,0,p1===p2)

// 2.1

// let p1 = Promise.resolve('foo')

// let p2 = p1.then()

// setTimeout(console.log,0,p2)

// These are equivalent

// let p3 = p1.then(()=>{})

// let p4 = p1.then(()=>undefined)

// let p5 = p1.then(()=>Promise.resolve());


// setTimeout(console.log,0,p3)
// setTimeout(console.log,0,p4)
// setTimeout(console.log,0,p5)

// explicit return values are wrapped in Promise.resolve()

// these are equivalent

// let p6 = p1.then(()=>'bar')

// let p7 = p1.then(()=>Promise.resolve('bar'))

// setTimeout(console.log,0,p6)
// setTimeout(console.log,0,p7)

// Promise.resolve() preserves the reutrned promise
// let p8 = p1.then(()=>new Promise(()=>{}))
// let p9 = p1.then(()=>Promise.reject())
// p9.catch(reason=>{console.log(reason)})

// setTimeout(console.log,0,p8)
// setTimeout(console.log,0,p9)

// 11. throw err will rejected 
// BUT return Error will resolved with Error on Value filed
// p10 = p1.then(()=>{throw 'baz'});
// p10.catch(res=>{
//   console.log(res)
// })
// setTimeout(console.log,0,p10)

// p11 = p1.then(()=>{
//   return Error("baz")
// })

// setTimeout(console.log,0,p11)


// 2.2 OnRejected handler
// let p1 = Promise.reject('foo')

// let p2 = p1.then().catch(e=>{console.log(e)})

// let p3 = p1.then(null,(e)=>{return e}).catch(e=>{console.log(e)})
// let p4 = p1.then(null, ()=>undefined)
// let p5 = p1.then(null,()=>Promise.resolve())

// setTimeout(console.log,0,p3)
// setTimeout(console.log,0,p4)
// setTimeout(console.log,0,p5)