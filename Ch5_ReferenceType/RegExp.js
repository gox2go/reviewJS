'use strict'

// let re = null;
// for (let i = 0; i < 10; i++) {
//     re = /cat/g;
//     let flag = re.test("cat");
//     console.log(flag);
// }

for (let i = 0;  i< 10; i++) {
    const reg = new RegExp("cat",'g');
    let flag = reg.test("catpilaaa");
    console.log(flag)
}