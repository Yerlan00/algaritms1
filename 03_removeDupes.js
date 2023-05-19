// Удаление всех повторяющихся значеий в строке
// Напишите функцию которая принимает строку и возвращает новую, в которой все
// дублирующиеся символы будут удалены.
// Input: String
// Output: String
// function removeDupes(str) {
// todo
// }
// console.log(removeDupes('abcd')) // 'abcd'
// console.log(removeDupes('aabbccdd')) // 'abcd'
// console.log(removeDupes('abcddbca')) // 'abcd'
// console.log(removeDupes('abababcdcdcd')) // 'abcd'
// ===============================================================================

function removeDupes(str) {
  const res = [];
  const map = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!map[char]) {
      map[char] = true;
      res.push(char);
    }
  }
  return res.join("");
}

console.log(removeDupes("abcd")); // 'abcd'
console.log(removeDupes("aabbccdd")); // 'abcd'
console.log(removeDupes("abcddbca")); // 'abcd'
console.log(removeDupes("abababcdcdcd")); // 'abcd'
