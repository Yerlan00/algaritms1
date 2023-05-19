// Сбалансированнные скобки
// Напишите функцию, которая проверяет строку на
// сбалансированность скобок: {}, (), []. Вернуть true если
// они сбалансированы, иначe false
// Input: String
// Output: Boolean
// function isBalanced(string) {
// Todo
// }
// console.log(isBalanced('(x + y) - (4)')) // true
// console.log(isBalanced('(((10 ) ()) ((?)(:)))')) // true
// console.log(isBalanced('[{()}]')) // true
// console.log(isBalanced('(50)(')) // false
// console.log(isBalanced('[{]}')) // false
// ==================================================================================

function isBalanced(string) {
  const start = "{[(";
  const end = "}])";
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const queue = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return !queue.length;
}

console.log(isBalanced("(x + y) - (4)")); // true
console.log(isBalanced("(((10 ) ()) ((?)(:)))")); // true
console.log(isBalanced("[{()}]")); // true
console.log(isBalanced("(50)(")); // false
console.log(isBalanced("[{]}")); // false
