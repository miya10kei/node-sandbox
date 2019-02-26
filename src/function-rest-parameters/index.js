function arrayFunc(...rest) {
  console.log(...rest);  // 1 2 3 4 5
}
arrayFunc(1, 2, 3, 4, 5);


const obj1 = { 'key1': 1, 'key2': 2};
const obj2 = { 'key3': 3, 'key4': 4};
function objectFunc1( ...rest) {
  console.log(...rest);  // { key1: 1, key2: 2 } { key3: 3, key4: 4 }
}
objectFunc1(obj1, obj2);

function objectFunc2(...rest) {
  console.log(Object.assign({}, ...rest));
}
objectFunc2(obj1, obj2);  // { key1: 1, key2: 2, key3: 3, key4: 4 }
