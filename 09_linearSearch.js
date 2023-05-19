// Алгаритмы
// Простой поиск
// Напишите функцию, которая принимает отсортированный
// массив с числами и число.Необходимо вернуть индекс
// числа,если оно есть в массиве.Иначе вернуть -1
// Input: Number[], Number
// Output: Number
// function search(array, target) {
// todo
// }
// console.log(search([1, 3, 6, 13, 17], 13)) // 3
// console.log(search([1, 3, 6, 13, 17], 12)) // -1
// ====================================================================
// Time: O(n)

function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1, 3, 6, 13, 17], 13)); // 3
console.log(linearSearch([1, 3, 6, 13, 17], 12)); // -1
