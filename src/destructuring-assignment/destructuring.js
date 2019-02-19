// https://javascript.info/destructuring-assignment

let arr = ['Ilya', 'Kantor']
let [ firstName, lastName ] = arr
console.log(`${firstName} ${lastName}`)  // Ilya Kantor

let [ , , title ] = [ 'Julius', 'Caesar', 'Consul', 'of the Roman Republic' ]
console.log(title)  // Consul

let [ a, b, c ] = '123'
console.log(`${a}, ${b}, ${c}`)  // 1, 2, 3

let [ one, two, three ] = new Set([ 1, 2, 3,])
console.log(`${one}, ${two}, ${three}`)  // 1, 2, 3

let user = {};
[ user.firstName, user.lastName ] = 'Ilya Kantor'.split(' ')
console.log(user.firstName)

let userData = {
  name: 'John',
  age: 30
}
for (let [ k, v ] of Object.entries(userData)) {
  console.log(`${k} : ${v}`)
}

let userMap = new Map();
userMap.set('name', 'John')
userMap.set('age', 30)
for (let [ k, v ] of userMap.entries()) {
  console.log(`${k} : ${v}`)
}
