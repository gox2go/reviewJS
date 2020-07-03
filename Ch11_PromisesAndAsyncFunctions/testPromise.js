const p1 = new Promise((resolve,reject)=>{
  return ;
})

const p2 = new Promise((resolve,reject)=>{
  return resolve('ok')
})

const p3 = new Promise((resolve,reject)=>{
   resolve('ok')
})

const p4 = new Promise(()=>{
  return Promise.resolve('ok')
})

const p5 = p4.then(res=>console.log('123',res))

setTimeout(console.log,0,p2)
setTimeout(console.log,0,p3)
setTimeout(console.log,0,p4)
setTimeout(console.log,0,p5)
