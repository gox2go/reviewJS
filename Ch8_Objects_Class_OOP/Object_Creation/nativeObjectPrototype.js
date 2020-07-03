console.log(typeof Array.prototype.sort)

console.log(typeof String.prototype.substring)

if(!String.prototype.myStartsWith){
  console.log('--- add new startsWith ----')
  String.prototype.myStartsWith = function(text){
    return this.indexOf(text) === 0;
  }
}

let msg = "hello world";

console.log(msg.myStartsWith('h'))
console.log(msg.myStartsWith('H'))