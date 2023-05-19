// JavaScript
// Deep equal
// Напишите функцию, которая будет проверять на "глубокое"
// равенство 2 входящих параметра
// Input: Any, Any
// Output: Boolean
// function deepEqual(a, b) {
// todo
// }
// const source = { a: 1, b: { c: 1 } }
// const test1 = { a: 1, b: { c: 1 } }
// const test2 = { a: 1, b: { c: 2 } }
// console.log(deepEqual(source, test1)) // true
// console.log(deepEqual(source, test2)) // false
// console.log(deepEqual(NaN, NaN)) // true
// console.log(deepEqual('test', 'test!')) // false
// console.log(deepEqual()) // true
// console.log(deepEqual(42, 'str')) // false
// ====================================================================================
// Deep equal.
// Глубокое равенство - это означает в javascript, что мы будем проверять как на тип, так и назначение

function deepEqual(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a !== "object" || a === null || b === null) {
    return a === b;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (const key of Object.keys(a)) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

const source = { a: 1, b: { c: 1 } };
const test1 = { a: 1, b: { c: 1 } };
const test2 = { a: 1, b: { c: 2 } };

console.log(deepEqual(source, test1)); // true
console.log(deepEqual(source, test2)); // false
console.log(deepEqual(NaN, NaN)); // true
console.log(deepEqual("test", "test!")); // false
console.log(deepEqual()); // true // undefined === undefined // null === null
console.log(deepEqual(42, "str")); // false
