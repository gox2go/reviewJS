/**
 * Recording Date 6/26/2020
 * 单个文件不超过300行
 * By Frankieee
 * 
 */
// const codeDiv = document.querySelector('.code-container');

// codeDiv.innerHTML = "let p = new Promise(()=>{});"

// 1. initialization

// let p = new Promise(()=>{});

// setTimeout(console.log,0,p);

// 2. order 

// new Promise(()=>setTimeout(console.log,0,'executer'))

// setTimeout(console.log,0,'promise initialized.')

// let p = new Promise(()=>setTimeout(console.log,1000,'executor'))

// let p = new Promise((resolve,reject)=>setTimeout(resolve,1000))

// setTimeout(console.log,0,p)

// setTimeout(console.log,1100,p)


// 3. resolve()

// let p1 = new Promise((resolve,reject)=>resolve());

// let p2 = Promise.resolve();

// console.log(p1);

// console.log(p2)

// setTimeout(console.log,0,p1)

// setTimeout(console.log,0,Promise.resolve(3))

// setTimeout(console.log,0,Promise.resolve(4,5,6))

// 3.1 resolve can act as a passthrough when the argument is already a promise.
// Promise.reslove() is an idempotent method.

// let p = Promise.resolve(7)

// setTimeout(console.log,0, p === Promise.resolve(p))

// setTimeout(console.log,0, p === Promise.resolve(Promise.resolve(p)))

// let p = new Promise(()=>{})

// setTimeout(console.log,0,p)

// setTimeout(console.log,0,Promise.resolve(p));

// setTimeout(console.log,0,p === Promise.resolve(p))


// 4. reject()
// rejection handler -> .then(null,rejectionHander)

// const p = new Promise((resolve,reject)=>reject('hello,it\'s rejected.'));

// p.then(null,e=>setTimeout(console.log,0,e,'in then'))

// setTimeout(console.log,0,p)

// Sync and Async Execution Duality

// try {
//   throw new Error("synchronous execution error")
// } catch (error) {
//   console.log(error)
// }

// try {
//   Promise.reject(new Error('Asynchronous execution error'))
// } catch (error) {
//   console.error(error)
// }