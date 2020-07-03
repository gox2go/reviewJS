// 工厂模式

function createPerson(name ,age ,job){
  const o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  return o
}

const person1 = createPerson("Matt",25,'Worker')
const person2 = createPerson("Ted",22,"Software engineer")

console.log(person1,person2)