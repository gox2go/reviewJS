function object(o){
  function F(){}
  F.prototype = o
  return new F();
}

let person = {
  name:"nick",
  friends:['ted','nickiy','sam','will'],
}

let anotherPerson = object(person);
anotherPerson.name="okkkk"
anotherPerson.friends.push('Rob')

let yetAnotherPerson = object(person)
yetAnotherPerson.name="Ned";
yetAnotherPerson.friends.push("bib")

console.log(anotherPerson.name)
console.log(person.friends)


console.log('---- end of object() ----')
console.log('---- Object.create() ----')

let person4 = Object.create(person,{
  name:{
    value:'Greg'
  }
})

console.log(person4.name,person4)
person4.friends.push("im4")
console.log(person4.friends)