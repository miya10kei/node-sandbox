// https://javascript.info/destructuring-assignment

let options1 = {
  title1: 'Menu',
  width1: 100,
  height1: 200
}
let { title1, width1, height1 } = options1
console.log(`${title1}, ${width1}, ${height1}`)  // Menu, 100, 200


let { height2, width2, title2 } = { title2: 'Menu', width2: 100, height2: 200 }
console.log(`${title2}, ${width2}, ${height2}`)  // Menu, 100, 200


let options3 = {
  title3: 'Menu',
  width3: 100,
  height3: 200
}
let { width3: w3, title3: t3, height3: h3 } = options3
console.log(`${t3}, ${w3}, ${h3}`)  // Menu, 100, 200


let options4 = {
  title4: 'Menu',
}
let { width4 = 100, height4 = 200, title4 } = options4
console.log(`${title4}, ${width4}, ${height4}`)  // Menu, 100, 200


// following code valid only with browser
// let options5 = {
//   title5: 'Menu',
// }
// let { width5 = prompt('width?'), title5 = prompt('title?') } = options4
// console.log(`${title5}, ${width5}`)  // Menu, (Whatever prompt gets)


let options6 = {
  title6: 'Menu',
}
let { width6: w6 = 100, title6: t6, height6: h6 = 200 } = options6
console.log(`${t6}, ${w6}, ${h6}`)  // Menu, 100, 200


// following code is not supported
// The rest operator
// let options7 = {
//   title7: 'Menu',
//   width7: 100,
//   height7: 200
// };
// let { title7, ...rest } = options7
// console.log(`${title7}, ${rest.width7}, ${rest.height7}`)  // Menu, 100, 200
