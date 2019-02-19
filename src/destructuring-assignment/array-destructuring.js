// https://javascript.info/destructuring-assignment

let arr = ['Ilya', 'Kantor']
let [ firstName, lastName ] = arr
console.log(`${firstName} ${lastName}`)  // Ilya Kantor


// Ignore first elements
let [ , , title ] = [ 'Julius', 'Caesar', 'Consul', 'of the Roman Republic' ]
console.log(title)  // Consul


// Works with any iterable on the right-side
let [ a, b, c ] = '123'
console.log(`${a}, ${b}, ${c}`)  // 1, 2, 3

let [ one, two, three ] = new Set([ 1, 2, 3,])
console.log(`${one}, ${two}, ${three}`)  // 1, 2, 3


// Assign to anything at the left-side
let user1 = {};
[ user1.firstName, user1.lastName ] = 'Ilya Kantor'.split(' ')
console.log(user1.firstName)  // Ilya


// Looping with .entries()
let userData = {
  name: 'John',
  age: 30
}
for (let [ k, v ] of Object.entries(userData)) {
  console.log(`${k} : ${v}`)  // name : John, age : 30
}

let userMap = new Map();
userMap.set('name', 'John')
userMap.set('age', 30)
for (let [ k, v ] of userMap.entries()) {
  console.log(`${k} : ${v}`)  // name : John, age : 30
}


// The rest'...'
let [ name1, name2, ...rest ] = [ 'Julius', 'Caesar', 'Consul', 'of the Roman Republic' ]
console.log(`${name1}, ${name2}`)  // Julius, Caesar
console.log(`rest length: ${rest.length}`)  // 2


// Default values
let [ value1, value2 ] = []
console.log(`${value1}, ${value2}`) // undefined, undefined

let [ firstName2 = 'Guest', lastName2 = 'Anonymous' ] = [ 'Julius' ]
console.log(`${firstName2} ${lastName2}`)  // Julius Anonymous

// following code valid only with browser.
// let [ firstName3 = prompt('firstName?'), lastName3 = prompt('lastName?') ] = [ 'Julius' ]
// console.log(`${firstName3} ${lastName3}`) // Julius (whatever prompt gets)
