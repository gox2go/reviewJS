const readObj = (obj)=>{
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      console.log(key,':',element)
    }
  }
}

let book = {
  year_: 2017,
  edition: 1,
};

Object.defineProperty(book,"year",{
  get(){
    return this.year_;
  },
  set(v){
    if(v>2017){
      this.year_ = v;
      this.edition += v-2017;
    }
  }
});

// readObj(book);

// book.year = 299;

// readObj(book);

// book.year = 2020;

// readObj(book)


// let book = {};

// Object.defineProperties(book,{
//   year_:{
//     value:2017
//   },
//   edition:{
//     value:1,
//   },
//   year:{
//     set(v){
//       if(v>2017){
//         this.year_ = v;
//         this.edition +=v-2017;
//       }
//     },
//     get(){
//       return this.year_;
//     }
//   }
// })


// const des = Object.getOwnPropertyDescriptors(book);
// console.log(des)