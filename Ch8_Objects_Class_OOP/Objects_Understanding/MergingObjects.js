// let src = {
//   get a(){
//     console.log('Invoked src getter')
//     return 'foo'
//   }
// }

// let dest = {
//   _a:1,
//   set a(val){
//     console.log('Invoked dest setter')
//     this._a = val;
//   }
// }

// Object.assign(dest,src)

// console.log(dest)


// let dest = {
//   set id(x){
//     console.log(x)
//   }
// }

// for (const key in dest) {
//   if (dest.hasOwnProperty(key)) {
//     const element = dest[key];
//     console.log(key,':',element)
//   }
// }

// Object.assign(dest,{id:'first'},{id:'second'},{id:'third'})

// console.log(dest)


// const src = {
//   foo:'foo',
//   get bar(){
//     console.log('copy,....')
//     return 'bar'
//   }
// }

// const dest = Object.assign({},src)

// console.log(dest)

// 4. No Rolling back 
// let dest, src, result;

// dest = {}
// src ={
//   a:'foo',
//   get b(){
//     throw new Error('an error')
//   },
//   c:'bar'
// }

// try {
//   result = Object.assign(dest,src)
// } catch (error) {
//   console.log(error)
// }
// console.log('dest: ',dest)